game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "宝可梦", content: function (config, pack) {
            lib.group.push('pokemon');
            lib.translate.pokemon = '宝';
        },
        precontent: function () {

        }, help: {}, config: {},
        package: {
            character: {
                character: {
                    "卡比兽": ["male", "pokemon", 20, ["睡觉", "梦话", "腹鼓", "快闪"], []],
                },
                translate: {
                    "卡比兽": "卡比兽",
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
                    "神宝": {
                        mod: {
                            targetEnabled: function (card, player, target) {
                                if (get.type(card) == 'delay') {
                                    return false;
                                }
                            },
                        },
                    },
                    "快闪": {
                        trigger: { player: 'damageBegin' },
                        usable: 1,
                        content: function () {
                            trigger.num = 0;
                        }
                    },
                    "睡觉": {
                        enable: "phaseUse",
                        filter: function (event, player) {
                            return !player.isTurnedOver();
                        },
                        content: function () {
                            player.recover(player.maxHp - player.hp);
                            player.turnOver();
                        },
                    },
                    "梦话": {
                        trigger: {
                            player: "turnOverEnd",
                        },
                        filter: function (event, player) {
                            return !player.isTurnedOver();
                        },
                        filterTarget: function (card, player, target) {
                            return player != target;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget('是否发动【梦话】，对一名角色造成一点伤害？').ai = function (target) {
                                return -get.attitude(player, target);
                            };

                            'step 1'
                            if (result.bool) {
                                result.targets[0].damage();
                            };

                        },
                    },
                    "腹鼓": {
                        enable: "phaseUse",
                        filter: function (event, player) {
                            return player.hp * 2 > player.maxHp;
                        },
                        content: function () {
                            player.loseHp(Math.floor(player.maxHp / 2));
                            if (player.hasSkill('腹鼓2')) {
                                player.storage.power++;
                            }
                            else {
                                player.storage.power = 1;
                                player.addSkill('腹鼓2');
                            }
                        },
                    },
                    "腹鼓2": {
                        trigger: {
                            source: "damageBegin1",
                        },
                        forced: true,
                        charlotte: true,
                        content: function () {
                            trigger.num += player.storage.power;
                        },
                        mark: true,
                        intro: {
                            content: function (storage, player) {
                                return `造成伤害时，此伤害+${player.storage.power}`;
                            },
                        },
                    },
                },
                translate: {
                    "神宝": "神宝",
                    "神宝_info": "锁定技，你不能成为延时类锦囊的目标。",
                    "快闪": "快闪",
                    "快闪_info": "每回合限一次，当你受到伤害时，你可以令此伤害无效。",
                    "睡觉": "睡觉",
                    "睡觉_info": "出牌阶段时，若你的武将牌正面向上，你可以翻面，并将体力值恢复至体力上限。",
                    "梦话": "梦话",
                    "梦话_info": "当你的武将牌从背面翻至正面时，你可以对一名角色造成一点伤害。",
                    "腹鼓": "腹鼓",
                    "腹鼓_info": "出牌阶段时，当你的体力值大于体力上限的一半，你可以失去体力上限的一半体力，然后你本局游戏造成的伤害+1。",
                },
            },
            intro: "",
            author: "SNORLAX",
            diskURL: "",
            forumURL: "",
            version: "1.0",
        }, files: { "character": ["卡比兽.jpg"], "card": [], "skill": [] }
    }
})