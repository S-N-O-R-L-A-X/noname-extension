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
        // TODO: divide characters into groups
        precontent: function (against7devil) {
            game.import("character", function () {
                var against7devil = {
                    name: "against7devil",
                    connect: true,
                    characterSort: {
                        against7devil: {
                            against7devil_boss: ["re_boss_caocao"],
                            against7devil_fusion: ["re_shen_sunce"]
                        }
                    },
                    character: {
                        "re_boss_caocao": ["male", "wei", 12, ["boss_guixin", "xiongcai", "神护"], ["zhu", "boss", "bossallowed"]],
                        "re_shen_sunce": ["male", "shen", "1/8", ["hunzi", "boss_jiang", "神护", "yingba", "scfuhai", "冯河"], ["zhu", "boss", "bossallowed"]],
                    },
                    characterIntro: {
                        "re_boss_caocao": "来源于挑战模式boss魏武大帝，只是加了一个不能成为延时锦囊目标的技能就可以大战七阴。",
                        "re_shen_sunce": "神孙策+孙策+挑战模式boss那个男人，小霸王就是那么飒。",
                    },
                    skill: {
                        "神护": {
                            mod: {
                                targetEnabled: function (card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        "冯河": {
                            audio: "ext:抗七阴:2",
                            mod: {
                                maxHandcardBase: function (player) {
                                    return player.maxHp;
                                },
                            },
                            trigger: {
                                player: "damageBegin2",
                            },
                            forced: true,
                            filter: function (event, player) {
                                return event.source && event.source != player && player.maxHp > 1 && player.countCards('h') > 0;
                            },
                            content: function () {
                                'step 0'
                                player.chooseCardTarget({
                                    prompt: '请选择【冯河】的牌和目标',
                                    prompt2: '将一张手牌交给一名其他角色并防止伤害' + (player.hasSkill('yingba') ? '，然后令伤害来源获得一个“平定”标记' : ''),
                                    filterCard: true,
                                    forced: false,
                                    filterTarget: lib.filter.notMe,
                                    ai1: function (card) {
                                        if (get.tag(card, 'recover') && !game.hasPlayer(function (current) {
                                            return get.attitude(current, player) > 0 && !current.hasSkillTag('nogain');
                                        })) return 0;
                                        return 1 / Math.max(0.1, get.value(card));
                                    },
                                    ai2: function (target) {
                                        var player = _status.event.player, att = get.attitude(player, target);
                                        if (target.hasSkillTag('nogain')) att /= 9;
                                        return 4 + att;
                                    },
                                });
                                'step 1'
                                if (result.bool) {
                                    var target = result.targets[0];
                                    //player.logSkill('pinghe',target);
                                    player.line(target, 'green');
                                    target.gain(result.cards, player, 'giveAuto');
                                    trigger.cancel();
                                    player.loseMaxHp();
                                    if (player.hasSkill('yingba')) {
                                        trigger.source.addMark('yingba_mark', 1);
                                    }
                                }
                            },
                        },
                    },
                    translate: {
                        "神护": "神护",
                        "神护_info": "锁定技，你不能成为延时类锦囊的目标",
                        "冯河": "冯河",
                        "冯河_info": "①锁定技，你的手牌上限基数等于你的体力上限。②当你受到其他角色造成的伤害时，若你有牌且你的体力上限大于1，则你防止此伤害，减一点体力上限并将一张手牌交给一名其他角色。然后若你拥有〖英霸〗，则伤害来源获得一个“平定”标记。",
                    },
                    translate: {
                        "re_boss_caocao": "界魏武大帝",
                        "re_shen_sunce": "界神孙策",
                    }
                };
                console.log(against7devil.character)
                // for (let i in against7devil.character) {

                //     const path = 'ext:大战七阴/images/' + i + '.jpg';
                //     console.log(path);
                //     //game.js will convert ext to different path in different devices
                //     against7devil.character[i][4].push(path);
                // }
                return against7devil;
            })
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
        package: {
            character: {
                character: {
                    "re_boss_caocao": ["male", "wei", 12, ["boss_guixin", "xiongcai", "神护"], ["zhu", "boss", "bossallowed"]],
                    "re_shen_sunce": ["male", "shen", "1/8", ["hunzi", "boss_jiang", "神护", "yingba", "scfuhai", "冯河"], ["zhu", "boss", "bossallowed"]],

                },
                translate: {
                    "re_boss_caocao": "界魏武大帝",
                    "re_shen_sunce": "界神孙策",
                }
            },
            skill: {
                skill: {
                    "神护": {
                        mod: {
                            targetEnabled: function (card, player, target) {
                                if (get.type(card) == 'delay') {
                                    return false;
                                }
                            },
                        },
                    },
                    "冯河": {
                        audio: "ext:抗七阴:2",
                        mod: {
                            maxHandcardBase: function (player) {
                                return player.maxHp;
                            },
                        },
                        trigger: {
                            player: "damageBegin2",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return event.source && event.source != player && player.maxHp > 1 && player.countCards('h') > 0;
                        },
                        content: function () {
                            'step 0'
                            player.chooseCardTarget({
                                prompt: '请选择【冯河】的牌和目标',
                                prompt2: '将一张手牌交给一名其他角色并防止伤害' + (player.hasSkill('yingba') ? '，然后令伤害来源获得一个“平定”标记' : ''),
                                filterCard: true,
                                forced: false,
                                filterTarget: lib.filter.notMe,
                                ai1: function (card) {
                                    if (get.tag(card, 'recover') && !game.hasPlayer(function (current) {
                                        return get.attitude(current, player) > 0 && !current.hasSkillTag('nogain');
                                    })) return 0;
                                    return 1 / Math.max(0.1, get.value(card));
                                },
                                ai2: function (target) {
                                    var player = _status.event.player, att = get.attitude(player, target);
                                    if (target.hasSkillTag('nogain')) att /= 9;
                                    return 4 + att;
                                },
                            });
                            'step 1'
                            if (result.bool) {
                                var target = result.targets[0];
                                //player.logSkill('pinghe',target);
                                player.line(target, 'green');
                                target.gain(result.cards, player, 'giveAuto');
                                trigger.cancel();
                                player.loseMaxHp();
                                if (player.hasSkill('yingba')) {
                                    trigger.source.addMark('yingba_mark', 1);
                                }
                            }
                        },
                    },
                },
                translate: {
                    "神护": "神护",
                    "神护_info": "锁定技，你不能成为延时类锦囊的目标",
                    "冯河": "冯河",
                    "冯河_info": "①锁定技，你的手牌上限基数等于你的体力上限。②当你受到其他角色造成的伤害时，若你有牌且你的体力上限大于1，则你防止此伤害，减一点体力上限并将一张手牌交给一名其他角色。然后若你拥有〖英霸〗，则伤害来源获得一个“平定”标记。",
                }
            }
        },
        translate: {
            against7devil: "抗七阴",
            against7devil_boss: "挑战boss加强包",
            against7devil_fusion: "融包"
        },
        files: { "character": ["re_boss_caocao", "re_shen_sunce"], "card": [], "skill": [] }
    }
})