import { lib, game, ui, get, ai, _status } from '../../../noname.js'

export async function content(config, pack) {
	// add useful functions
	function get7characters(arr) {
		return arr.randomSort().slice(0, 7);
	}
	//在这里编写启动阶段执行的代码。
	lib.init.css(lib.assetURL + "extension/大战七阴", "extension");
	lib.group.push("daqin");
	lib.translate.daqin = "秦";
	lib.groupnature.daqin = "thunder";

	if (!lib.config.custom_banned_characters) {
		lib.config.custom_banned_characters = new Set();
	}

	// initialize characters
	if (!lib.devil_characters) {
		lib.devil_characters = {};
	}

	lib.devil_characters.old_dc_list = ["xushao", "puyuan", "guozhao", "dc_guansuo", "dc_zhaoxiang",
		"xin_lingtong", "re_liuzan"];
	lib.devil_characters.dc_list = ["caojinyu", "wanglang", "guanning", "re_sunyi", "lvlingqi", "re_panshu",
		"zhouyi", "re_nanhualaoxian", "dc_liuba", "dc_jiben", "shen_jiangwei", "shen_machao", "tenggongzhu",
		"caomao", "zhangxuan", "dc_zhouxuān", "xuelingyun", "shen_zhangfei", "shen_zhangjiao", "luyi",
		"sunlingluan", "wu_zhugeliang", "wu_luxun", "dc_xujing", "yue_caiwenji", "wu_guanyu", "dc_sb_simayi",
		"bailingyun"];
	lib.devil_characters.mobile_list = ["shen_xunyu", "yangbiao", "sp_duyu", "sb_caopi"];
	lib.devil_characters.ol_list = ["huangchengyan", "ol_weiyan", "panshu", "wolongfengchu", "shen_caopi", "wangyan"];
	lib.devil_characters.other_list = ["sp_xiahoushi", "tw_dongzhao"];

	lib.devil_characters.all_devil_list = [...lib.devil_characters.old_dc_list, ...lib.devil_characters.dc_list,
	...lib.devil_characters.mobile_list, ...lib.devil_characters.ol_list, ...lib.devil_characters.other_list];

	if (lib.config.mode == "brawl") {
		if (!lib.storage.stage) lib.storage.stage = {};
		const old_dc_characters = get7characters(lib.devil_characters.old_dc_list);
		const dc_characters = get7characters(lib.devil_characters.old_dc_list.concat(lib.devil_characters.dc_list));
		const all_characters = get7characters(lib.devil_characters.all_devil_list);
		let all_devil_characters = lib.devil_characters.all_devil_list.slice(0);
		lib.config.custom_banned_characters.forEach((ch) => {
			all_devil_characters.remove(ch);
		})
		let needed = 7 - all_devil_characters.length;
		if (needed > 0) {
			game.utils.initAllCharacters();
			_status.characterlist.randomSort();
			all_devil_characters = all_devil_characters.concat(_status.characterlist.slice(0, needed));
		}

		const custom_characters = get7characters(all_devil_characters);
		const hell_characters = get7characters(Object.values(lib.characterSort["against7devil"]).flat(Infinity));
		lib.storage.stage["大战七阴"] = {
			name: "大战七阴",
			intro: `主公可供玩家设定，其余七位ai玩家从阴间武将中随机选中一个。
                    如果喜欢或者想要贡献的话，欢迎联系作者或去下面链接给作者一个star哦！star越多，更新越积极~<br>
                     <a class="github" href="https://github.com/S-N-O-R-L-A-X/noname-extension">https://github.com/S-N-O-R-L-A-X/noname-extension </a>`,
			scenes: [{
				name: "十周年老阴间",
				intro: "十周年老阴间乱斗",
				players: [
					{ "name": "random", "name2": "none", "identity": "zhu", "position": 1, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] },
					{ "name": old_dc_characters[0], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": old_dc_characters[1], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": old_dc_characters[2], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": old_dc_characters[3], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": old_dc_characters[4], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": old_dc_characters[5], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": old_dc_characters[6], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }
				],
				cardPileTop: [],
				cardPileBottom: [],
				discardPile: [],
				gameDraw: true,
			}, {
				name: "十周年阴间",
				intro: "十周年阴间乱斗",
				players: [
					{ "name": "random", "name2": "none", "identity": "zhu", "position": 1, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] },
					{ "name": dc_characters[0], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": dc_characters[1], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": dc_characters[2], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": dc_characters[3], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": dc_characters[4], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": dc_characters[5], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": dc_characters[6], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }
				],
				cardPileTop: [],
				cardPileBottom: [],
				discardPile: [],
				gameDraw: true,
			}, {
				name: "三服阴间",
				intro: "三服阴间乱斗",
				players: [
					{ "name": "random", "name2": "none", "identity": "zhu", "position": 1, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] },
					{ "name": all_characters[0], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": all_characters[1], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": all_characters[2], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": all_characters[3], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": all_characters[4], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": all_characters[5], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": all_characters[6], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }
				],
				cardPileTop: [],
				cardPileBottom: [],
				discardPile: [],
				gameDraw: true,
			}, {
				name: "自定义阴间将池",
				intro: "自定义阴间将池乱斗",
				players: [
					{ "name": "random", "name2": "none", "identity": "zhu", "position": 1, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] },
					{ "name": custom_characters[0], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": custom_characters[1], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": custom_characters[2], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": custom_characters[3], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": custom_characters[4], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": custom_characters[5], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": custom_characters[6], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }
				],
				cardPileTop: [],
				cardPileBottom: [],
				discardPile: [],
				gameDraw: true,
			}, {
				name: "本扩展阴间将池",
				intro: "本扩展阴间将池乱斗",
				players: [
					{ "name": "random", "name2": "none", "identity": "zhu", "position": 1, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] },
					{ "name": hell_characters[0], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": hell_characters[1], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": hell_characters[2], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": hell_characters[3], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": hell_characters[4], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": hell_characters[5], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
					{ "name": hell_characters[6], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }
				],
				cardPileTop: [],
				cardPileBottom: [],
				discardPile: [],
				gameDraw: true,
			}],
		};
		_status.extensionstage = true;

		if (!_status.extensionmade) _status.extensionmade = [];
		_status.extensionmade.push("大战七阴");

		for (let character_name in against7devil.character) {
			const path = 'ext:大战七阴/image/' + character_name + '.jpg';
			//game.js will convert ext to different path in different devices
			against7devil.character[character_name][4].push(path);
		}
		for (let card_name in against7devil.card) {
			const path = 'ext:大战七阴/image/card/' + card_name + '.jpg';
			//game.js will convert ext to different path in different devices
			against7devil.card[card_name].image = path;
		}	
	}

}
