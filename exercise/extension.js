game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "技能练习", content: function (config, pack) {

        }, precontent: function () {

        }, help: {}, config: {}, package: {
            character: {
                character: {
                    "宝": ["male", "wu", 4, ["跋扈", "repojun"], []],
                },
                translate: {
                    "宝": "宝",
                },
            },
            card: {
                card: {
                },
                translate: {
                },
                list: [],
            },
            skill: {
                skill: {
                    "跋扈": {
                        trigger: {
                            player: "phaseZhunbeiBegin",
                        },
                        forced: true,
                        content: function () {
                            player.draw();
                        },
                        mod: {
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                        },
                    },
                },
                translate: {
                    "跋扈": "跋扈",
                    "跋扈_info": "锁定技，准备阶段开始时，你摸一张牌。出牌阶段，你可以多使用一张【杀】。",
                },
            },
            intro: "",
            author: "SNORLAX",
            diskURL: "",
            forumURL: "",
            version: "1.0",
        }, files: { "character": ["宝.jpg"], "card": [], "skill": [] }
    }
})