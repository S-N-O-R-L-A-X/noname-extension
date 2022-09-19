game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "大战七阴",
        content: function () {
            function initList(arr) {
                const ans = [], n = arr.length;
                let list = arr;
                for (let i = 0; i < 7; ++i) {
                    const idx = Math.floor(Math.random() * (n - i));
                    ans.push(list[idx]);
                    list.splice(idx, 1);
                }
                return ans;
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
                    intro: "主公可供玩家设定，其余七位ai玩家从阴间武将中随机选中一个。",
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
        }
    }
})