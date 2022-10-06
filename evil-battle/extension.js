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
                            "re_boss_caocao": ["male", "wei", 12, ["shenhu", "boss_guixin", "xiongcai"], ["zhu", "boss", "bossallowed"]],
                            "re_shen_sunce": ["male", "shen", "1/8", ["shenhu", "hunzi", "boss_jiang", "yingba", "scfuhai", "repinghe"], ["zhu", "boss", "bossallowed"]],
                            "succubus": ["female", "shen", 6, ["meihun", "rebiyue", "yuehun", "yunshen", "boss_guimei", "yuxin"], ["zhu", "boss", "bossallowed"]],
                            "re_boss_huatuo": ["male", "qun", 6, ["shenhu", "chulao", "mazui", "boss_shengshou", "guizhen", "wuqin"], ["zhu", "boss", "bossallowed"]],
                            "re_boss_zhouyu": ["male", "wu", 10, ["shenhu", "huoshen", "boss_honglian", "boss_xianyin", "boss_zhaohuo", "boss_honglianx"], ["zhu", "boss", "bossallowed"]],
                            "yin_caojinyu": ["female", "wei", 10, ["shenhu", "yinyuqi", "yinshanshen", "yinxianjing"], ["zhu", "boss", "bossallowed"]],
                        },
                        characterSort: {
                            against7devil: {
                                against7devil_boss: ["re_boss_caocao", "succubus", "re_boss_huatuo", "re_boss_zhouyu"],
                                against7devil_fusion: ["re_shen_sunce"],
                                against7devil_yin: ["yin_caojinyu"],
                            }
                        },
                        characterIntro: {
                            "re_boss_caocao": "来源于挑战模式boss魏武大帝，只加上神护就可以大战七阴。<br> 【强度】★★★★ <br> 【亮点】综合，可玩性高",
                            "re_shen_sunce": "神孙策+孙策+挑战模式boss那个男人，小霸王就是那么飒。<br> 【强度】★★★★★ <br> 【亮点】防御，过牌，激昂",
                            "succubus": "绝代妖姬+神貂蝉，够得上魅魔了吧。<br>【强度】★★★★★ <br> 【亮点】防御，可玩性高",
                            "re_boss_huatuo": "来源于挑战模式boss药坛圣手，加上技能神护。<br>【强度】★★★★★<br> 【亮点】全场空城",
                            "re_boss_zhouyu": "来源于挑战模式boss赤壁火神，加上朱雀技能红莲，以及神护。<br>【强度】★★★★<br> 【亮点】防御，稳定",
                            "yin_caojinyu": "来源于曹金玉，无脑堆数字，还蛮好玩的。<br>【强度】★★★★<br> 【亮点】卖血，过牌"
                        },
                        skill: {
                            shenhu: {
                                mod: {
                                    targetEnabled: function (card, player, target) {
                                        if (get.type(card) == "delay") {
                                            return false;
                                        }
                                    },
                                },
                            },
                            repinghe: {
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
                            yuxin: {
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

                            yinyuqi: {
                                // audio: 2,
                                trigger: { global: 'damageEnd' },
                                init: function (player) {
                                    if (!player.storage.yinyuqi) player.storage.yinyuqi = [0, 3, 1, 1];
                                },
                                getInfo: function (player) {
                                    if (!player.storage.yinyuqi) player.storage.yinyuqi = [0, 3, 1, 1];
                                    return player.storage.yinyuqi;
                                },
                                onremove: true,
                                filter: function (event, player) {
                                    const list = lib.skill.yinyuqi.getInfo(player);
                                    const times = player.getHistory('useSkill', function (evt) {
                                        return evt.skill == 'yinyuqi';
                                    }).length;
                                    return (times < Math.max(...list)) && event.player.isIn() && get.distance(player, event.player) <= list[0];
                                },
                                logTarget: 'player',
                                content: function () {
                                    'step 0'
                                    event.list = lib.skill.yinyuqi.getInfo(player);
                                    var cards = get.cards(event.list[1]);
                                    event.cards = cards;
                                    game.cardsGotoOrdering(cards);
                                    var next = player.chooseToMove(true, '隅泣（若对话框显示不完整，可下滑操作）');
                                    next.set('list', [
                                        ['牌堆顶的牌', cards],
                                        ['交给' + get.translation(trigger.player) + '（至少一张' + (event.list[2] > 1 ? ('，至多' + get.cnNumber(event.list[2]) + '张') : '') + '）'],
                                        ['交给自己（至多' + get.cnNumber(event.list[3]) + '张）'],
                                    ]);
                                    next.set('filterMove', function (from, to, moved) {
                                        var info = lib.skill.yinyuqi.getInfo(_status.event.player);
                                        if (to == 1) return moved[1].length < info[2];
                                        if (to == 2) return moved[2].length < info[3];
                                        return true;
                                    });
                                    next.set('processAI', function (list) {
                                        var cards = list[0][1].slice(0).sort(function (a, b) {
                                            return get.value(b, 'raw') - get.value(a, 'raw');
                                        }), player = _status.event.player, target = _status.event.getTrigger().player;
                                        var info = lib.skill.yinyuqi.getInfo(_status.event.player);
                                        var cards1 = cards.splice(0, Math.min(info[3], cards.length - 1));
                                        var card2;
                                        if (get.attitude(player, target) > 0) card2 = cards.shift();
                                        else card2 = cards.pop();
                                        return [cards, [card2], cards1];
                                    });
                                    next.set('filterOk', function (moved) {
                                        return moved[1].length > 0;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        var moved = result.moved;
                                        cards.removeArray(moved[1]);
                                        cards.removeArray(moved[2]);
                                        while (cards.length) {
                                            ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
                                        }
                                        trigger.player.gain(moved[1], 'gain2');
                                        if (moved[2].length) player.gain(moved[2], 'gain2');
                                        game.updateRoundNumber();
                                    }
                                },
                                mark: true,
                                intro: {
                                    content: function (storage, player) {
                                        const info = lib.skill.yinyuqi.getInfo(player);
                                        return '<div class="text center"><span class=thundertext>蓝色：' + info[0] + '</span>　<span class=firetext>红色：' + info[1] + '</span><br><span class=greentext>绿色：' + info[2] + '</span>　<span class=yellowtext>黄色：' + info[3] + '</span></div>'
                                    },
                                },
                                ai: {
                                    threaten: 8.8,
                                },
                            },
                            yinshanshen: {
                                // audio: 2,
                                trigger: { global: 'die' },
                                direct: true,
                                content: function () {
                                    const inf = Number.MAX_SAFE_INTEGER;
                                    'step 0'
                                    event.goon = !player.hasAllHistory('sourceDamage', function (evt) {
                                        return evt.player == trigger.player;
                                    });
                                    player.chooseControl('<span class=thundertext>蓝色</span>', '<span class=firetext>红色</span>', '<span class=greentext>绿色</span>', '<span class=yellowtext>黄色</span>', 'cancel2').set('prompt', get.prompt('yinshanshen')).set('prompt2', '令〖隅泣〗中的一个数字+2' + (event.goon ? '并回复1点体力' : '')).set('ai', function () {
                                        var player = _status.event.player, info = lib.skill.yinyuqi.getInfo(player);
                                        game.log(info);
                                        if (info[0] < info[3] && game.countPlayer(function (current) {
                                            return get.distance(player, current) <= info[0];
                                        }) < Math.min(3, game.countPlayer())) return 0;
                                        if (info[3] < info[1] - 1) return 3;
                                        if (info[1] < inf) return 1;
                                        if (info[0] < inf && game.hasPlayer(function (current) {
                                            return current != player && get.distance(player, current) > info[0];
                                        })) return 0;
                                        return 2;
                                    });
                                    'step 1'
                                    if (result.control != 'cancel2') {
                                        player.logSkill('yinshanshen', trigger.player);
                                        var list = lib.skill.yinyuqi.getInfo(player);
                                        list[result.index] += 2;
                                        game.log(player, '将', result.control, '数字改为', '#y' + list[result.index])
                                        player.markSkill('yinyuqi');
                                        if (event.goon) player.recover();
                                    }
                                },
                            },
                            yinxianjing: {
                                // audio: 2,
                                trigger: { player: 'phaseZhunbeiBegin' },
                                direct: true,
                                content: function () {
                                    const inf = Number.MAX_SAFE_INTEGER;
                                    'step 0'
                                    player.chooseControl('<span class=thundertext>蓝色</span>', '<span class=firetext>红色</span>', '<span class=greentext>绿色</span>', '<span class=yellowtext>黄色</span>', 'cancel2').set('prompt', get.prompt('yinxianjing')).set('prompt2', '令〖隅泣〗中的一个数字+1').set('ai', function () {
                                        var player = _status.event.player, info = lib.skill.yinyuqi.getInfo(player);
                                        console.log(info);
                                        if (info[0] < info[3] && game.countPlayer(function (current) {
                                            return get.distance(player, current) <= info[0];
                                        }) < Math.min(3, game.countPlayer())) return 0;
                                        if (info[3] < info[1] - 1) return 3;
                                        if (info[1] < inf) return 1;
                                        if (info[0] < inf && game.hasPlayer(function (current) {
                                            return current != player && get.distance(player, current) > info[0];
                                        })) return 0;
                                        return 2;
                                    });
                                    'step 1'
                                    if (result.control != 'cancel2') {
                                        player.logSkill('yinxianjing');
                                        var list = lib.skill.yinyuqi.getInfo(player);
                                        console.log(list);
                                        list[result.index] = list[result.index] + 1;
                                        game.log(player, '将', result.control, '数字改为', '#y' + list[result.index])
                                        player.markSkill('yinyuqi');
                                        if (player.isDamaged()) event.finish();
                                    }
                                    else event.finish();
                                    'step 2'
                                    player.chooseControl('<span class=thundertext>蓝色</span>', '<span class=firetext>红色</span>', '<span class=greentext>绿色</span>', '<span class=yellowtext>黄色</span>', 'cancel2').set('prompt', '是否令〖隅泣〗中的一个数字+1？').set('ai', function () {
                                        var player = _status.event.player, info = lib.skill.yinyuqi.getInfo(player);
                                        if (info[0] < info[3] && game.countPlayer(function (current) {
                                            return get.distance(player, current) <= info[0];
                                        }) < Math.min(3, game.countPlayer())) return 0;
                                        if (info[3] < info[1] - 1) return 3;
                                        if (info[1] < inf) return 1;
                                        if (info[0] < inf && game.hasPlayer(function (current) {
                                            return current != player && get.distance(player, current) > info[0];
                                        })) return 0;
                                        return 2;
                                    });
                                    'step 3'
                                    if (result.control != 'cancel2') {
                                        var list = lib.skill.yinyuqi.getInfo(player);
                                        list[result.index] = list[result.index] + 1;
                                        game.log(player, '将', result.control, '数字改为', '#y' + list[result.index])
                                        player.markSkill('yinyuqi');
                                    }
                                },
                            },
                        },
                        translate: {
                            // config
                            update: "更新情况",

                            //classification
                            against7devil: "大战七阴",
                            against7devil_boss: "挑战boss加强包",
                            against7devil_fusion: "融包",
                            against7devil_yin: "阴间包",

                            //character
                            "re_boss_caocao": "界魏武大帝",
                            "re_shen_sunce": "界神孙策",
                            "succubus": "魅魔",
                            "re_boss_huatuo": "界药坛圣手",
                            "re_boss_zhouyu": "朱雀星君",
                            "yin_caojinyu": "阴间曹金玉",

                            //skill
                            shenhu: "神护",
                            shenhu_info: "锁定技，你不能成为延时类锦囊的目标",
                            repinghe: "冯河",
                            repinghe_info: "①锁定技，你的手牌上限基数等于你的体力上限。②当你受到其他角色造成的伤害时，若你有牌且你的体力上限大于1，则你防止此伤害，减一点体力上限并将一张手牌交给一名其他角色。然后若你拥有〖英霸〗，则伤害来源获得一个“平定”标记。",
                            yuxin: "驭心",
                            yuxin_info: "出牌阶段限两次，你可以展示两张花色相同的手牌并分别交给两名其他角色，然后令这两名角色拼点，没赢的角色获得1个“魅惑”标记。拥有2个或更多“魅惑”的角色回合即将开始时，该角色移去其所有“魅惑”，此回合改为由你操控。",

                            yinyuqi: '隅泣',
                            yinyuqi_info: '每回合限X次。当有角色受到伤害后，若你至其的距离不大于<span class=thundertext>0</span>，则你可以观看牌堆顶的<span class=firetext>3</span>张牌。你将其中至多<span class=greentext>1</span>张牌交给受伤角色，然后可以获得剩余牌中的至多<span class=yellowtext>1</span>张牌，并将其余牌以原顺序放回牌堆顶。（X为所有数字中最大值）',
                            yinshanshen: '善身',
                            yinshanshen_info: '当有角色死亡时，你可令你的〖隅泣〗中的一个具有颜色的数字+2。然后若你未对该角色造成过伤害，则你回复1点体力。',
                            yinxianjing: '娴静',
                            yinxianjing_info: '准备阶段，你可令你的〖隅泣〗中的一个具有颜色的数字+1。若你的体力值等于体力上限，则你可以重复一次此流程。',
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
                name: `<div class=".update">扩展版本：3.2<font size="4px">▶▶▶</font></div>`,
                version: 3.2,
                clear: true,
                intro: "点击查看此版本的更新内容",
                onclick: function () {
                    if (this.updateContent === undefined) {
                        const more = ui.create.div('.update-content', '<div style="border:2px solid gray">' + '<font size=3px>' +
                            '<li><span style="color:#006400">说明一</span>：<br>增加了更新说明功能<br>' +
                            '<li><span style="color:#006400">说明二</span>：<br>增加了github链接跳转功能<br>' +
                            '<li><span style="color:#006400">说明三</span>：<br>增加了武将分类功能<br>' +
                            '<li><span style="color:#006400">说明四</span>：<br>增加了武将评级<br>' +
                            '<li><span style="color:#006400">说明五</span>：<br>更新了新武将：魅魔，药坛圣手，朱雀星君，曹金玉<br>'
                        );
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.updateContent = more;
                        this.innerHTML = '<div class=".update">扩展版本<font size="4px">▼▼▼</font></div>';
                    }
                    else {
                        this.parentNode.removeChild(this.updateContent);
                        delete this.updateContent;
                        this.innerHTML = '<div class=".update">扩展版本：3.2<font size="4px">▶▶▶</font></div>';
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
            author: "SNORLAX",
            diskURL: "",
            forumURL: "",
            version: "1.0",
        },
        files: { "character": [], "card": [], "skill": [] }
    }
})