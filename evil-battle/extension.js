game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "大战七阴",
        content: function (config, pack) {
            lib.init.css(lib.assetURL + 'extension/大战七阴', 'extension');

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
                    如果喜欢或者想要贡献的话，欢迎联系作者或去下面链接给作者一个star哦！<br>
                     <a class="github" href="https://github.com/S-N-O-R-L-A-X/noname-extension">https://github.com/S-N-O-R-L-A-X/noname-extension </a>`,
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
        precontent: function (against7devil) {
            window.against7devil_import = function (func) {
                func(lib, game, ui, get, ai, _status);
            };
            if (against7devil.enable) {
                game.import("character", function () {
                    var against7devil = {
                        name: "against7devil",
                        connect: true,

                        character: {
                            "re_boss_caocao": ["male", "wei", 12, ["boss_guixin", "xiongcai", "神护"], ["zhu", "boss", "bossallowed"]],
                            "re_shen_sunce": ["male", "shen", "1/8", ["hunzi", "boss_jiang", "神护", "yingba", "scfuhai", "冯河"], ["zhu", "boss", "bossallowed"]],
                            "succubus": ["female", "shen", 6, ["meihun", "rebiyue", "yuehun", "yunshen", "boss_guimei", "驭心"], ["zhu", "boss", "bossallowed"]],
                            "re_boss_huatuo": ["male", "qun", 6, ["chulao", "mazui", "boss_shengshou", "guizhen", "wuqin", "boss_jiguan"], ["zhu", "boss", "bossallowed"]],
                        },
                        characterSort: {
                            against7devil: {
                                against7devil_boss: ["re_boss_caocao", "succubus"],
                                against7devil_fusion: ["re_shen_sunce"]
                            }
                        },
                        characterIntro: {
                            "re_boss_caocao": "来源于挑战模式boss魏武大帝，只是加了一个不能成为延时锦囊目标的技能就可以大战七阴。",
                            "re_shen_sunce": "神孙策+孙策+挑战模式boss那个男人，小霸王就是那么飒。",
                            "succubus": "绝代妖姬+神貂蝉，够得上魅魔了吧",
                            "re_boss_huatuo": "来源于挑战模式boss药坛圣手"
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
                            "驭心": {
                                audio: "ext:无名扩展:2",
                                enable: "phaseUse",
                                usable: 2,
                                filter: function (event, player) {
                                    if (game.countPlayer() < 3) return false;
                                    for (var i of lib.suit) {
                                        if (player.countCards('h', { suit: i }) > 1) return true;
                                    }
                                    return false;
                                },
                                complexCard: true,
                                position: "h",
                                filterCard: function (card, player) {
                                    if (!ui.selected.cards.length) {
                                        var suit = get.suit(card);
                                        return player.countCards('h', function (card2) {
                                            return card != card2 && get.suit(card2, player) == suit;
                                        }) > 0;
                                    }
                                    return get.suit(card, player) == get.suit(ui.selected.cards[0], player);
                                },
                                selectCard: 2,
                                selectTarget: 2,
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                multitarget: true,
                                multiline: true,
                                delay: false,
                                check: function (card) {
                                    return 6 - get.value(card);
                                },
                                targetprompt: ["拼点发起人", "拼点目标"],
                                content: function () {
                                    'step 0'
                                    player.showCards(cards);
                                    'step 1'
                                    var target = targets[0];
                                    targets.sortBySeat();
                                    if (target != targets[0]) cards.reverse();
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].gain(cards[i], player, 'visible');
                                        player.$give(cards[i], targets[i]);
                                    }
                                    'step 2'
                                    if (targets[0].canCompare(targets[1])) {
                                        targets[0].chooseToCompare(targets[1]);
                                    }
                                    else event.finish();
                                    'step 3'
                                    if (result.winner !== targets[0]) targets[0].addMark('huoxin', 1);
                                    if (result.winner !== targets[1]) targets[1].addMark('huoxin', 1);
                                },
                                marktext: "魅",
                                intro: {
                                    name: "魅惑",
                                    "name2": "魅惑",
                                    content: "mark",
                                },
                                group: "huoxin_control",
                                ai: {
                                    order: 1,
                                    result: {
                                        target: function (player, target) {
                                            if (target.hasMark('huoxin')) return -2;
                                            return -1;
                                        },
                                    },
                                },
                            },
                        },
                        translate: {
                            update: "更新情况",
                            against7devil: "大战七阴",
                            against7devil_boss: "挑战boss加强包",
                            against7devil_fusion: "融包",
                            "神护": "神护",
                            "神护_info": "锁定技，你不能成为延时类锦囊的目标",
                            "冯河": "冯河",
                            "冯河_info": "①锁定技，你的手牌上限基数等于你的体力上限。②当你受到其他角色造成的伤害时，若你有牌且你的体力上限大于1，则你防止此伤害，减一点体力上限并将一张手牌交给一名其他角色。然后若你拥有〖英霸〗，则伤害来源获得一个“平定”标记。",
                            "驭心": "驭心",
                            "驭心_info": "出牌阶段限两次，你可以展示两张花色相同的手牌并分别交给两名其他角色，然后令这两名角色拼点，没赢的角色获得1个“魅惑”标记。拥有2个或更多“魅惑”的角色回合即将开始时，该角色移去其所有“魅惑”，此回合改为由你操控。",
                            "re_boss_caocao": "界魏武大帝",
                            "re_shen_sunce": "界神孙策",
                            "succubus": "魅魔",
                            "re_boss_huatuo": "界药坛圣手",

                        },
                    };

                    for (let i in against7devil.character) {
                        console.log(i);
                        const path = 'ext:大战七阴/image/' + i + '.jpg';
                        console.log(path);
                        //game.js will convert ext to different path in different devices
                        against7devil.character[i][4].push(path);
                        console.log(against7devil.character[i]);
                    }
                    return against7devil;
                })

                // load characters
                lib.config.all.characters.push('against7devil');
                lib.translate['against7devil_character_config'] = "大战七阴";

            }
        },
        config: {
            intro: {
                name: `本扩展包含一个模式与一些武将。模式可在乱斗中打开。
                如果喜欢或者想要贡献的话，欢迎联系作者或去下面链接给作者一个star哦！<br>
                <a class="github" href="https://github.com/S-N-O-R-L-A-X/noname-extension">https://github.com/S-N-O-R-L-A-X/noname-extension </a>
                `,
                clear: true,
                nopointer: true,
            },
            update: {
                name: '<div class=".update">扩展版本：3.0<font size="4px">▶▶▶</font></div>',
                clear: true,
                intro: "点击查看此版本的更新内容",
                onclick: function () {
                    if (this.updateContent == undefined) {
                        const more = ui.create.div('.update-content', '<div style="border:2px solid gray">' + '<font size=3px>' +
                            '<li><span style="color:#006400">说明一</span>：<br>更新了更新说明功能<br>' +
                            '<li><span style="color:#006400">说明二</span>：<br>更新了新武将：魅魔<br>' +
                            '<li><span style="color:#006400">说明三</span>：<br>增加了github链接跳转功能<br>' +
                            '<li><span style="color:#006400">说明四</span>：<br>增加了武将分类功能<br>'
                        );
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.updateContent = more;
                        this.innerHTML = '<div class=".update">扩展版本<font size="4px">▼▼▼</font></div>';
                    }
                    else {
                        this.parentNode.removeChild(this.updateContent);
                        delete this.updateContent;
                        this.innerHTML = '<div class=".update">扩展版本：3.0<font size="4px">▶▶▶</font></div>';
                    };
                }
            },
        },
        help: {},
        package: {
            character: {
                character: {
                },
                translate: {
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
                },
                translate: {
                },
            },
            intro: "",
            author: "无名玩家",
            diskURL: "",
            forumURL: "",
            version: "1.0",
        },
        files: { "character": [], "card": [], "skill": [] }
    }
})