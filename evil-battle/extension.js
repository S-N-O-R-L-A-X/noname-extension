game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "大战七阴",
        config: {
            intro: {
                name: `本扩展包含一个模式与一些武将。模式可在乱斗中打开。`,
                clear: true,
                nopointer: true,
            },
        },
        content: function () {
            function initList(arr) {
                return arr.randomSort().slice(0, 7);
            }
            if (lib.config.mode == "brawl") {
                if (!lib.storage.scene) lib.storage.scene = {};
                // if (!lib.storage.scene["大战七阴"]) {
                const list = ['xushao', 'puyuan', 'guozhao', 'guansuo', 'zhaoxiang', 'xin_lingtong',
                    're_liuzan', "caojinyu", "wanglang", "guanning", "re_sunyi", "lvlingqi", "re_panshu",
                    "zhouyi", "re_nanhualaoxian", "liuba", "dc_jiben", "shen_jiangwei", "shen_machao",
                    "tenggongzhu", "caomao"];
                const characters = initList(list);
                lib.storage.scene["大战七阴"] = {
                    name: "大战七阴",
                    intro: `主公可供玩家设定，其余七位ai玩家从阴间武将中随机选中一个。
                    如果喜欢或者想要贡献的话，欢迎联系作者或去下面链接给作者一个star哦！
                     https://github.com/S-N-O-R-L-A-X/noname-extension `,
                    players: [
                        { "name": "random", "name2": "none", "identity": "zhu", "position": 1, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] },
                        { "name": characters[0], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                        { "name": characters[1], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                        { "name": characters[2], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                        { "name": characters[3], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                        { "name": characters[4], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                        { "name": characters[5], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                        { "name": characters[6], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }
                    ],
                    cardPileTop: [],
                    cardPileBottom: [],
                    discardPile: [],
                    gameDraw: true,
                };
                _status.extensionscene = true;
                // }
                if (!_status.extensionmade) _status.extensionmade = [];
                _status.extensionmade.push("大战七阴");
            }
        },

    }
})