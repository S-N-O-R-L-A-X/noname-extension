import fs from "fs/promises";
import { translation } from "../game/extension/大战七阴/source/packages/main/characterTranslation.js";
import { intro } from "../game/extension/大战七阴/source/packages/main/characterIntro.js";
import { sort } from "../game/extension/大战七阴/source/packages/main/characterSort.js";
import { characters } from "../game/extension/大战七阴/source/packages/main/character.js";

function getNowFormatDate() {
	let date = new Date(),
		year = date.getFullYear(), //获取完整的年份(4位)
		month = date.getMonth() + 1, //获取当前月份(0-11,0代表1月)
		strDate = date.getDate() // 获取当前日(1-31)
	if (month < 10) month = `0${month}` // 如果月份是个位数，在前面补0
	if (strDate < 10) strDate = `0${strDate}` // 如果日是个位数，在前面补0

	return `${year}-${month}-${strDate}`
}

const Eng2Chinese = translation;
const character2intro = intro;
const character2detail = [];
const character2package = {};
const package2character = {};
const skill2detail = {};

const root_url = "../game/extension/大战七阴";
const source_url = root_url + "/source/packages/main";
const rg = /"(.*)": "(.*)"/g;

let info;

async function getSkillTranslation() {
	// get skill translation from skill.js
	const filePath = `${source_url}/skill.js`;
	try {
		const data = await fs.readFile(filePath, "utf8");
		const translation = /translate: \{([^}]+)\}/.exec(data)[0];
		while ((info = rg.exec(translation)) !== null) {
			Eng2Chinese[info[1]] = info[2];
		}
	} catch (error) {
		console.error(`Failed to read skill translation file: ${filePath}`, error);
	}
}

async function parseSkills() {
	// get skill translation
	await getSkillTranslation();
	return Promise.resolve();
}

async function parseCharacters() {

	Object.entries(intro).forEach(([key, value]) => {
		const [intro, strength, highlight] = value.split("<br>");
		character2intro[key] = { intro, strength, highlight };
	})

	Object.entries(sort.mode_extension_大战七阴).forEach(([key, value]) => {
		package2character[key] = value;

		value.forEach(ch => {
			character2package[ch] = key;
		})
	});

	Object.entries(characters).forEach(([key, value]) => {
		const [gender, nationality, hp, skills] = value;
		const ch = {};
		ch.EnglishName = key;
		ch.ChineseName = Eng2Chinese[key];
		ch.gender = gender;
		ch.nationality = nationality;
		ch.hp = hp;
		ch.skills = skills;
		ch.ChineseSkills = [];
		
		ch.skills.forEach((skill) => {
			ch.ChineseSkills.push(Eng2Chinese[skill]);
			// if translation exists, this is a designed skill
			if (Eng2Chinese[skill]) {
				skill2detail[skill] = { EnglishName: skill, ChineseName: Eng2Chinese[skill], info: Eng2Chinese[`${skill}_info`] };
			}
		})

		ch.package = Eng2Chinese[character2package[key]];
		if (character2intro[key]) {
			const { intro, strength, highlight } = character2intro[key];
			ch.details = intro;
			ch.strength = strength;
			ch.highlight = highlight;
		}
		character2detail.push(ch);
	})
}

async function parseUpdateInfo() {
	return fs.readFile(`${root_url}/update.json`, 'utf8').then(data => {
		const updateObj = {
			time: getNowFormatDate(),
			...JSON.parse(data)
		}

		fs.readFile("./src/Views/UpdateLog/update.json").then((buffer) => {
			const log = JSON.parse(buffer);
			log.update.push(updateObj);
			fs.writeFile("./src/Views/UpdateLog/update.json", JSON.stringify(log, null, 2));
		})
		return Promise.resolve();
	}).catch(error => {
		console.error(error);
	});
}

async function main() {
	await parseSkills();
	await parseCharacters();
	fs.writeFile("./src/Views/Characters/characters.json", JSON.stringify(character2detail, null, 2));
	fs.writeFile("./src/Views/Skills/skills.json", JSON.stringify(skill2detail, null, 2));
	await parseUpdateInfo();
}


main();

