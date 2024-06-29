import { lib, game, ui, get, ai, _status } from '../../../noname.js';

const version = "8.1.0";

export const config = {
	intro: {
		name: `本扩展包含一个模式与一些武将。模式可在乱斗中打开。如果发现技能或武将缺失，请尝试将无名杀本体更新为最新版本，并在“扩展-诸神降临”中选择“开启”。
			这是本扩展的官方网站：<a class="github" href="https://s-n-o-r-l-a-x.github.io/noname-extension/">https://s-n-o-r-l-a-x.github.io/noname-extension</a><br>
			如果喜欢或者想要贡献的话，欢迎联系作者或去下面链接给作者一个star哦！star越多，更新越积极哦~<br>
			<a class="github" href="https://github.com/S-N-O-R-L-A-X/noname-extension">https://github.com/S-N-O-R-L-A-X/noname-extension </a><br>
			如果想要加群的话，目前QQ群号是一群：214685856，二群：939494042，请优先加二群！二群问题填QQ频道即可，如果是下载到的整合包包含，回答整合包即可。
			`,
		clear: true,
		nopointer: true,
	},
	setPool: {
		clear: true,
		name: '<span style="text-decoration: underline;">点击选择自定义将池内容<span>',
		intro: '自定义将池内容',
		onclick: function () {
			const dialog = ui.create.dialog("目前自定义将池包含的武将：");
			dialog.add([lib.devil_characters.all_devil_list, 'character']);
			dialog.buttons.forEach((button) => {
				if (lib.config.custom_banned_characters.has(button.link)) {
					button.classList.add("custom_banned");
				}

				button.onclick = () => {
					if (lib.config.custom_banned_characters.has(button.link)) {
						lib.config.custom_banned_characters.delete(button.link);
						button.classList.remove("custom_banned");
					}
					else {
						lib.config.custom_banned_characters.add(button.link);
						button.classList.add("custom_banned");
					}
					game.saveConfig('custom_banned_characters', lib.config.custom_banned_characters);

				}
			})

			ui.update();
		}
	},
	warning: {
		name: `<div style="color: red">本扩展可能与一些其他扩展冲突，如有冲突，请禁用本扩展或其他扩展！<br>
			目前已知冲突：活动武将和活动武将配件（导致关卡内人物变化）
		  </div>`,
		clear: true,
		nopointer: true,
	},
	update: {
		name: `<div class=".update">扩展版本：${version}<font size="4px">▶▶▶</font></div>`,
		clear: true,
		intro: "点击查看此版本的更新内容",
		onclick: function () {
			if (this.updateContent === undefined) {
				const more = ui.create.div('.update-content', '<div style="border:2px solid gray">' + '<font size=3px>' +
					'<li><span style="color:#006400">说明一</span>：<br>对扩展结构进行整个重构，代码封装更清晰。<br>' +
					'<li><span style="color:#006400">说明二</span>：<br>增加了新关卡：本扩展阴间乱斗，感受下地狱难度吧！<br>' +
					'<li><span style="color:#006400">说明三</span>：<br>增加了阴间将池武将：武关羽、新杀谋司马懿、柏灵筠、孙綝、经典刘备、经典曹操、经典孙权、经典孙策、经典神赵云、经典吴懿、陈珪、星曹仁、十周年神华佗、十周年刘晔、手杀谋曹丕。<br>' +
					'<li><span style="color:#006400">说明四</span>：<br>更新了新武将：山河图兀突骨、山河图乐进、山河图李典、灵杉玉树。<br>' +
					'<li><span style="color:#006400">说明五</span>：<br>一些武将平衡性调整，更还原游戏真实情况。<br>'+
					'<li><span style="color:#006400">说明六</span>：<br>修复了张菖蒲〖严教〗无法发动，山河图张飞无限重生的bug。<br>'
				);
				this.parentNode.insertBefore(more, this.nextSibling);
				this.updateContent = more;
				this.innerHTML = '<div class=".update"><font size="4px">▼▼▼</font></div>';
			}
			else {
				this.parentNode.removeChild(this.updateContent);
				delete this.updateContent;
				this.innerHTML = `<div class=".update">扩展版本：${version}<font size="4px">▶▶▶</font></div>`;
			};
		}
	},
	thanks: {
		name: "鸣谢",
		init: "1",
		intro: "点击查看鸣谢名单",
		item: {
			"1": "<font color=navy>鸣谢名单</font>",
			"2": "无名杀本体作者们，无名杀代码群群内大佬们，扩展包阳光包作者们，扩展包合纵抗秦作者们，扩展包假装无敌作者们"
		}
	},
	translate: {
		// config
		"update": "更新情况",
		"thanks": "鸣谢",
		"warning": "警告",
	}


}
