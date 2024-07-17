import { lib, game, ui, get, ai, _status } from '../../../../../noname.js'
export const card = {
	//在这里编写卡牌信息。
	card: {
		"zhenlongchangjian": {
			type: "equip",
			subtype: "equip1",
			distance: {
				attackFrom: -1,
			},
			ai: {
				basic: {
					equipValue: 2,
				},
			},
			skills: ["zhenlongchangjian_skill"],
			enable: true,
			fullimage: true,
		},
		"chuanguoyuxi": {
			type: "equip",
			subtype: "equip5",
			ai: {
				basic: {
					equipValue: 7.5,
				},
			},
			skills: ["chuanguoyuxi_skill"],
			enable: true,
			fullimage: true,
		},
		"qinnu": {
			vanish: true,
			type: "equip",
			subtype: "equip1",
			skills: ["qinnu_skill"],
			destroy: "daqin_nushou",
			distance: {
				attackFrom: -8
			},
			enable: true,
			ai: {
				basic: {
					useful: 2,
					equipValue: 1,
				},
			},
			fullimage: true,
		},
		"shangyangbianfa": {
			audio: true,
			global: 'shangyangbianfa_dying',
			type: "trick",
			enable: true,
			filterTarget: function (card, player, target) {
				return target != player;
			},
			selectTarget: 1,
			content: function () {
				'step 0'
				var num = [1, 2, 3].randomGet();
				target.damage(num).type = 'shangyangbianfa';
			},
			ai: {
				basic: {
					order: 5,
					useful: 1,
					value: 5.5,
				},
				result: {
					target: -1.5,
				},
				tag: {
					damage: 1,
				},
			},
			fullimage: true,
		},
	},
	translate: {
		"qinnu": "秦弩",
		"qinnu_info": "当你使用【杀】指定一个目标后，你令其防具无效，你的出牌阶段内，可使用的【杀】数量+1；当你失去装备区里的【秦弩】，你令此牌销毁。",
		"shangyangbianfa": "商鞅变法",
		"shangyangbianfa_info": "出牌阶段，对一名其他角色使用。你对目标角色造成随机1~3点伤害，若该角色以此法进入濒死状态，则其进行判定，若判定结果为黑色，则该角色本次濒死状态无法向其他角色求桃。",
		"shangyangbianfa_dying": "商鞅变法",
		"zhenlongchangjian_skill": "真龙长剑",
		"zhenlongchangjian_skill_info": "锁定技，你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标。",
		"chuanguoyuxi_skill": "传国玉玺",
		"chuanguoyuxi_skill_info": "出牌阶段开始时，你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】。",
		"zhenlongchangjian": "真龙长剑",
		"zhenlongchangjian_info": "锁定技，你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标。",
		"chuanguoyuxi": "传国玉玺",
		"chuanguoyuxi_info": "出牌阶段开始时，你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】。",
	},
	list: [],
}
