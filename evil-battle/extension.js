game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "大战七阴",
        content: function () {
            if (lib.config.mode == "brawl") {
                if (!lib.storage.scene) lib.storage.scene = {};
                if (!lib.storage.scene["大战七阴"]) {
                    lib.storage.scene["大战七阴"] = {
                        list: ['xushao', 'puyuan', 'guozhao', 'guansuo', 'zhaoxiang', 'xin_lingtong', 're_liuzan'],
                        name: "大战七阴",
                        intro: "主公可供玩家设定，其余七位ai玩家从阴间武将中随机选中一个。",
                        players: [{ "name": "random", "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "random", "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "random", "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "random", "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "random", "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "random", "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }, { "name": "random", "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }],
                        cardPileTop: [],
                        cardPileBottom: [],
                        discardPile: [],
                        gameDraw: true,
                    };
                    _status.extensionscene = true;
                }
                if (!_status.extensionmade) _status.extensionmade = [];
                _status.extensionmade.push("大战七阴");
            }
        }
    }
})