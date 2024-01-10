import fs from "fs/promises";

const Eng2Chinese = {};
const character2intro = {};
const character2detail = [];
const character2package = {};
const package2character = {};
const skill2detail = {};

// read from extension
fs.readFile('../evil-battle/extension.js', 'utf8').then(data => {
	const translation = /translation[\s\S]* translation end/m.exec(data)[0];
	const rg = /"(.*)": "(.*)"/g;
	let info;
	while ((info = rg.exec(translation)) !== null) {
		Eng2Chinese[info[1]] = info[2];
	}

	const characterIntro = /characterIntro:[\s\S]*?\},/m.exec(data)[0];
	while ((info = rg.exec(characterIntro)) !== null) {
		const [intro, strength, benefit] = info[2].split("<br>");
		character2intro[info[1]] = { intro, strength, benefit };
	}

	const characterPackage = /against7devil:[\s\S]*?\},/m.exec(data)[0];
	const rg1 = /([\s\S]*?): \[([\s\S]*?)\][\s\S]*?/g;
	while ((info = rg1.exec(characterPackage)) !== null) {
		let p = info[1].length - 1;
		while (p >= 0 && info[1][p] !== " ") {
			--p;
		}
		info[1] = info[1].substring(p + 1);
		const arr = info[2].split(/"/).filter(x => x !== "" && !x.startsWith(","));
		package2character[info[1]] = arr;
		arr.forEach(x => character2package[x] = info[1]);
	}

	const characterDetail = /character:[\s\S]*\}[\s\S]*characterSort/m.exec(data)[0];
	const rg2 = /"(.*)": \["(.*?)", "(.*?)", (.*?), \[(.*?)\].*\]/g;
	while ((info = rg2.exec(characterDetail)) !== null) {
		const ch = {};
		ch.EnglishName = info[1];
		ch.ChineseName = Eng2Chinese[info[1]];
		ch.gender = info[2];
		ch.nationality = info[3];
		if(info[4][0]==="\""){
			ch.hp = info[4].substring(1,info[4].length-1);
		}
		else {
			ch.hp = info[4];
		}
		ch.skills = info[5].split(/"/).filter(x => x !== "" && x !== ", ");
		ch.ChineseSkills=[];

		ch.skills.forEach((skill)=>{
			ch.ChineseSkills.push(Eng2Chinese[skill]);
			// if translation exists, this is a designed skill
			if(Eng2Chinese[skill]){
				skill2detail[skill]={EnglishName:skill,ChineseName:Eng2Chinese[skill],info:Eng2Chinese[`${skill}_info`]};
			}
		})
		ch.package = Eng2Chinese[character2package[info[1]]];
		if (character2intro[info[1]]) {
			const { intro, strength, benefit } = character2intro[info[1]];
			ch.details = intro;
			ch.strength = strength;
			ch.benefit = benefit;
		}
		character2detail.push(ch);
	}
	fs.writeFile("./src/Views/Characters/characters.json", JSON.stringify(character2detail, null, 2));
	fs.writeFile("./src/Views/Skills/skills.json", JSON.stringify(skill2detail, null, 2))

}).catch(error => {
	console.error(error);
});

