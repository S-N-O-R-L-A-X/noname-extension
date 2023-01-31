game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "大战七阴",
        content: function (config, pack) {
            lib.init.css(lib.assetURL + 'extension/大战七阴', 'extension');

            function initList(arr) {
                return arr.randomSort().slice(0, 7);
            }
            lib.group.push('daqin');
            lib.translate.daqin = '秦';
            lib.groupnature.daqin = 'thunder';
            if (lib.config.mode == "brawl") {
                if (!lib.storage.stage) lib.storage.stage = {};

                const dc_list = ["xushao", "puyuan", "guozhao", "guansuo", "zhaoxiang", "xin_lingtong",
                    "re_liuzan", "caojinyu", "wanglang", "guanning", "re_sunyi", "lvlingqi", "re_panshu",
                    "zhouyi", "re_nanhualaoxian", "dc_liuba", "dc_jiben", "shen_jiangwei", "shen_machao",
                    "tenggongzhu", "caomao", "zhangxuan"];
                const mobile_list = ["shen_xunyu", "yangbiao", "sp_duyu"];
                const ol_list = ["huangchengyan", "ol_weiyan", "panshu", "wolongfengchu", "shen_caopi", "wangyan"];
                const other_list = ["sp_xiahoushi", "tw_dongzhao"];
                const dc_characters = initList(dc_list);
                const all_characters = initList(dc_list.concat(mobile_list).concat(ol_list).concat(other_list));
                lib.storage.stage["大战七阴"] = {
                    name: "大战七阴",
                    intro: `主公可供玩家设定，其余七位ai玩家从阴间武将中随机选中一个。
                    如果喜欢或者想要贡献的话，欢迎联系作者或去下面链接给作者一个star哦！star越多，更新越积极~<br>
                     <a class="github" href="https://github.com/S-N-O-R-L-A-X/noname-extension">https://github.com/S-N-O-R-L-A-X/noname-extension </a>`,
                    scenes: [{
                        name: "十周年阴间",
                        intro: "十周年阴间乱斗",
                        players: [
                            { "name": "random", "name2": "none", "identity": "zhu", "position": 1, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] },
                            { "name": dc_characters[0], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": dc_characters[1], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": dc_characters[2], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": dc_characters[3], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": dc_characters[4], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": dc_characters[5], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": dc_characters[6], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }
                        ],
                        cardPileTop: [],
                        cardPileBottom: [],
                        discardPile: [],
                        gameDraw: true,

                    }, {
                        name: "三服阴间",
                        intro: "三服阴间乱斗",
                        players: [
                            { "name": "random", "name2": "none", "identity": "zhu", "position": 1, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] },
                            { "name": all_characters[0], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": all_characters[1], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": all_characters[2], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": all_characters[3], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": all_characters[4], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": all_characters[5], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
                            { "name": all_characters[6], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }
                        ],
                        cardPileTop: [],
                        cardPileBottom: [],
                        discardPile: [],
                        gameDraw: true,

                    },],
                };
                _status.extensionstage = true;

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
                            "fusion_shen_sunce": ["male", "shen", "1/8", ["shenhu", "hunzi", "boss_jiang", "yingba", "scfuhai", "repinghe"], ["zhu", "boss", "bossallowed"]],
                            "succubus": ["female", "shen", 6, ["meihun", "rebiyue", "yuehun", "yunshen", "boss_guimei", "yuxin"], ["zhu", "boss", "bossallowed"]],
                            "re_boss_huatuo": ["male", "qun", 6, ["shenhu", "chulao", "mazui", "boss_shengshou", "guizhen", "wuqin"], ["zhu", "boss", "bossallowed"]],
                            "re_boss_zhouyu": ["male", "wu", 10, ["shenhu", "huoshen", "boss_honglian", "boss_xianyin", "boss_zhaohuo", "boss_honglianx"], ["zhu", "boss", "bossallowed"]],
                            "yin_caojinyu": ["female", "wei", 10, ["shenhu", "yinyuqi", "yinshanshen", "yinxianjing"], ["zhu", "boss", "bossallowed"]],
                            "norecover": ["male", "shen", 25, ["boss_fudu", "boss_kujiu", "boss_duqu", "boss_echou", "ex_haizhong"], ["zhu", "boss", "bossallowed"]],
                            "fusion_xuhuang": ["male", "wei", 6, ["shenhu", "shipo", "famine", "olduanliang", "oljiezi"], ["zhu", "boss", "bossallowed"]],
                            "liuxingyaodi": ["male", "shu", "6/8", ["shenhu", "renjun", "boss_rende"], ["zhu", "boss", "bossallowed"]],
                            "re_boss_zhenji": ["female", "wei", 6, ["shenhu", "tashui", "lingbo", "jiaoxia", "fanghua", "reluoshen"], ["zhu", "boss", "bossallowed"]],
                            "fusion_honglianpo": ["female", "shen", 8, ["boss_shiyou", "boss_wangshi", "boss_didong", "boss_guimei", "boss_xuechi"], ["zhu", "boss", "bossallowed"]],
                            "ex_diaochan": ["female", "qun", 3, ["shenhu", "ex_yuhun", "ex_kongshen"], ["zhu", "boss", "bossallowed"]],
                            "re_fusion_honglianpo": ["female", "shen", 8, ["boss_shiyou", "rewangshi", "boss_didong", "boss_guimei", "rexuechi"], ["zhu", "boss", "bossallowed"]],
                            "zhizunwudi": ["male", "wu", 8, ["shenhu", "wuye", "boss_zhiheng"], ["zhu", "boss", "bossallowed"]],
                            "luanshizhuhou": ["male", "qun", 10, ["shenhu", "qibing", "hunzhan"], ["zhu", "boss", "bossallowed"]],
                            // "yitongjindi": ["male", "jin", 4, ["shenhu", "yuquan", "chengbing"], ["hiddenSkill", "zhu", "boss", "bossallowed"]],
                            "re_nianshou": ["male", "shen", 4, ["boss_nianrui", "boss_mengtai", "boss_jingjue", "boss_renxing", "boss_ruizhi", "boss_nbaonu", "boss_shouyi"], ["zhu", "boss", "bossallowed"]],
                            "barbarian_king": ["male", "qun", 10, ["shenhu", "equan", "manji", "manyi", "mansi", "xiangzhen", "huoshou", "zaiqi", "juxiang", "hanyong"], ["zhu", "boss", "bossallowed"]],
                            "ex_yingzheng": ["male", "daqin", 8, ["shenhu", "ex_yitong", "ex_shihuang", "ex_liuhe", "ex_zulong", "ex_fenshu", "ex_kencao"], ["zhu", "boss", "bossallowed"]],
                            "ex_zhaoji": ["female", "daqin", 4, ["zhaoji_shanwu", "ex_daqi", "zhaoji_xianji", "zhaoji_huoluan"], ["zhu", "boss", "bossallowed", "forbidai"]],
                            "ex_baiqi": ["male", "daqin", 8, ["shenhu", "baiqi_wuan", "baiqi_shashen", "baiqi_fachu", "baiqi_changsheng", "bubing_fangzhen", "qibing_liangju", "qibing_changjian", "ex_kencao", "nushou_jinnu"], ["zhu", "boss", "bossallowed"]],
                            "ex_zhangyi": ["male", "daqin", 6, ["shenhu", "ex_lianheng", "ex_xiongbian", "ex_qiaoshe", "ex_xichu"], ["zhu", "boss", "bossallowed"]],
                            "ex_shangyang": ["male", "daqin", 6, ["shenhu", "ex_bianfa", "ex_limu", "ex_kencao", "ex_lianzuo"], ["zhu", "boss", "bossallowed"]],
                            "ex_zhaogao": ["male", "daqin", 6, ["shenhu", "ex_zhilu", "ex_gaizhao", "ex_haizhong", "ex_aili", "ex_zaiguan", "ex_kencao"], ["zhu", "boss", "bossallowed", "forbidai"]],
                            "ex_miyue": ["female", "daqin", 6, ["shenhu", "ex_zhangzheng", "ex_taihou", "ex_youmie", "ex_yintui"], ["zhu", "boss", "bossallowed", "forbidai"]],
                        },
                        characterSort: {
                            against7devil: {
                                against7devil_boss: ["re_boss_caocao", "succubus", "re_boss_huatuo", "re_boss_zhouyu", "liuxingyaodi", "re_boss_zhenji", "zhizunwudi", "luanshizhuhou", "yitongjindi", "re_nianshou"],
                                against7devil_fusion: ["fusion_shen_sunce", "norecover", "fusion_xuhuang", "fusion_honglianpo", "re_fusion_honglianpo", "barbarian_king"],
                                against7devil_yin: ["yin_caojinyu"],
                                against7devil_ex: ["ex_diaochan", "ex_yingzheng", "ex_zhaoji", "ex_baiqi", "ex_zhangyi", "ex_shangyang"],
                            }
                        },
                        characterIntro: {
                            "re_boss_caocao": "来源于挑战模式boss魏武大帝，只加上【神护】就可以大战七阴。<br> 【强度】★★★★ <br> 【亮点】综合，可玩性高",
                            "fusion_shen_sunce": "神孙策+孙策+挑战模式boss那个男人，小霸王就是那么飒。<br> 【强度】★★★★★ <br> 【亮点】防御，过牌，激昂",
                            "succubus": "绝代妖姬+神貂蝉，够得上魅魔了吧。<br>【强度】★★★★★ <br> 【亮点】防御，可玩性高",
                            "re_boss_huatuo": "来源于挑战模式boss药坛圣手，加上技能【神护】。<br>【强度】★★★★★<br> 【亮点】全场空城",
                            "re_boss_zhouyu": "来源于挑战模式boss赤壁火神，加上朱雀技能【红莲】，以及【神护】。<br>【强度】★★★★<br> 【亮点】防御，稳定",
                            "yin_caojinyu": "来源于曹金玉，无脑堆数字，还蛮好玩的。<br>【强度】★★★★<br> 【亮点】卖血，过牌",
                            "norecover": "来源于泰山王【苦酒】【服毒】，相柳【毒躯】【恶臭】，赵高【害忠】（目前还未加），虽然毫无操作感，但是能看对面崩死还挺好玩的。<br>【强度】★★★★<br> 【亮点】无法回血",
                            "fusion_xuhuang": "来源于徐晃和谋徐晃，将【断粮】升级为【饥荒】。<br>【强度】★<br> 【亮点】谋弈",
                            "liuxingyaodi": "桃园结义是有关刘备的典故，因此将挑战模式boss魏武大帝的技能【雄才】换成【仁君】，加上自设计的【仁德】形成技能联动，和sp孙尚香的技能也有关系。<br> 【强度】★★★★★ <br> 【亮点】综合，可玩性高",
                            "re_boss_zhenji": "来源于挑战模式boss洛水仙子，加上界甄姬的【洛神】以及【神护】。<br> 【强度】★★★ <br> 【亮点】爆发，控制",
                            "fusion_honglianpo": "来源于捉鬼boss孟婆，加上五官王的【血池】以及红鬼的【地动】。没错，就是经典的五官王+红鬼+孟婆，三个五阶也也胆寒。<br> 【强度】★★ <br> 【亮点】恶心，回忆",
                            "ex_diaochan": "来源于【假装无敌】扩展包貂蝉。由于非常喜欢这个傀儡机制，将她加入扩包第一将。<br> 【强度】★★★★ <br> 【亮点】机制",
                            "re_fusion_honglianpo": "来源于本包红脸婆。由于原版强度较低，完全打不过七阴。设计了增强版，单体爆破更加有效。<br> 【强度】★★★ <br> 【亮点】恶心，回忆",
                            "zhizunwudi": "吴国向来有玩装备的传统，因此将挑战模式boss魏武大帝的技能【雄才】换成【吴业】，加上自设计的【制衡】形成技能联动。<br> 【强度】★★★★ <br> 【亮点】综合，可玩性高",
                            "luanshizhuhou": "群雄是乱世中最混乱的势力，因此将挑战模式boss魏武大帝的技能【雄才】换成【混战】，加上自设计的【起兵】形成技能联动。<br> 【强度】★★★ <br> 【亮点】综合，可玩性高",
                            // "yitongjindi": "晋国是乱世中隐藏最深的势力，因此将挑战模式boss魏武大帝的技能【雄才】换成【驭权】，加上自设计的【称病】形成技能联动。<br> 【强度】★★★★ <br> 【亮点】综合，可玩性高",
                            "re_nianshou": "来源于挑战模式boss四大年兽。<br>【强度】★★★★<br> 【亮点】综合",
                            "barbarian_king": "将少数民族部落武将的技能进行融合。<br>【强度】★★★★★<br> 【亮点】攻击",
                            "ex_yingzheng": "来源于【合纵抗秦】扩展包嬴政。作为一统六国的秦始皇，加入技能【六合】，并对其技能进行了修改。<br>【强度】★★★★<br> 【亮点】攻击，防御",
                            "ex_zhaoji": "来源于【合纵抗秦】扩展包赵姬。对【大期】进行了修改。<br>【强度】★★★★★<br> 【亮点】攻击",
                            "ex_baiqi": "来源于【合纵抗秦】扩展包白起。白起作为秦军统帅，加入秦军士兵的技能。<br>【强度】★★★★★<br> 【亮点】攻击",
                            "ex_zhangyi": "来源于【合纵抗秦】扩展包张仪。对其技能进行了修改。<br>【强度】★★★★★<br> 【亮点】防御",
                            "ex_shangyang": "来源于【合纵抗秦】扩展包商鞅。加入技能【连坐】并对其技能进行了修改。<br>【强度】★★★★<br> 【亮点】攻击，爆发",
                            "ex_zhaogao": "来源于【合纵抗秦】扩展包赵高。加入技能【载棺】并对其技能进行了修改。<br>【强度】★★★★<br> 【亮点】防御",
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

                            // caojinyu
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

                            //
                            "famine": {
                                enable: "phaseUse",
                                usable: 7,
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseControl('围城断粮', '擂鼓进军').set('prompt', '谋弈：请选择你的进攻策略').set('ai', function () {
                                        if (target.hasJudge('bingliang')) return '擂鼓进军';
                                        return ['围城断粮', '擂鼓进军'].randomGet();
                                    });
                                    'step 1'
                                    event.res = result.control;
                                    target.chooseControl('围城断粮', '擂鼓进军').set('prompt', '谋弈：请猜测' + get.translation(player) + '的进攻策略').set('ai', function () {
                                        if (target.hasJudge('bingliang')) return '擂鼓进军';
                                        return ['围城断粮', '擂鼓进军'].randomGet();
                                    });
                                    'step 2'
                                    var str;
                                    player.popup(event.res);
                                    target.popup(result.control);
                                    game.log(player, '谋弈', event.res == result.control ? '#y失败' : '#g成功');
                                    if (event.res != result.control) {
                                        game.playAudio('..', 'extension', '谋攻篇', 'mouduanliang3');
                                        str = get.translation(player) + '谋弈成功';
                                    }
                                    else {
                                        game.playAudio('..', 'extension', '谋攻篇', 'mouduanliang4');
                                        str = get.translation(target) + '谋弈成功';
                                    }
                                    game.broadcastAll(function (str) {
                                        var dialog = ui.create.dialog(str);
                                        dialog.classList.add('center');
                                        setTimeout(function () {
                                            dialog.close();
                                        }, 1000);
                                    }, str);
                                    game.delay(2);
                                    if (event.res == result.control) event.finish();
                                    'step 3'
                                    if (event.res == '围城断粮') {
                                        if (!target.hasJudge('bingliang')) { player.useCard({ name: 'bingliang' }, get.cards(), target); event.finish(); }
                                        else if (target.countCards('he') > 0) event.goto(4);
                                        else event.finish();
                                    }
                                    else { player.useCard({ name: 'juedou', isCard: true }, target, false); event.finish(); }
                                    'step 4'
                                    player.choosePlayerCard(target, 'he', true, '获得' + get.translation(target) + '的一张牌');

                                    'step 5'
                                    if (result.bool) {
                                        player.gain(result.cards, target, 'giveAuto');
                                    }
                                },
                                ai: {
                                    order: 7,
                                    result: {
                                        target: function (player, target) {
                                            if (target.hasJudge('bingliang')) return -0.5;
                                            return -1.5;
                                        },
                                    },
                                },
                            },

                            shipo: {
                                trigger: {
                                    player: "phaseJieshuBegin",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return (current.hp < player.hp || current.hasJudge('bingliang')) && current != player;
                                    });
                                },
                                content: function () {
                                    'step 0'
                                    var choiceList = ['体力值小于你的一名角色',
                                        '判定区中有【兵粮寸断】的所有其他角色'];
                                    var list = [];
                                    event.list_1 = game.filterPlayer(function (current) { return current.hp < player.hp && current != player })
                                    if (event.list_1.length) list.push('选项一');
                                    else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                                    event.list_2 = game.filterPlayer(function (current) { return current.hasJudge('bingliang') && current != player })
                                    if (event.list_2.length) list.push('选项二');
                                    else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                                    list.push('cancel2');
                                    player.chooseControl(list).set('prompt', get.prompt('shipo')).set('choiceList', choiceList).set('ai', function () {
                                        if (event.list_2.length > 1) return '选项二';
                                        if (event.list_1.length) {
                                            if (event.list_2.length != 0) {
                                                var items = list.slice(0, list.length - 1);
                                                return items[Math.floor(Math.random() * items.length)];
                                            }
                                        }
                                        return 'cancel2';
                                    });
                                    'step 1'
                                    if (result.control == '选项一') {
                                        player.chooseTarget(1, '选取一名体力值小于你的角色', true, function (card, player, target) {
                                            return event.list_1.contains(target);
                                        }).set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        });
                                    }
                                    else if (result.control == '选项二') {
                                        result.targets = event.list_2;
                                    }
                                    else {
                                        event.finish();
                                        return;
                                    }
                                    'step 2'
                                    event.num = 0;
                                    event.targets = result.targets;

                                    'step 3'
                                    var target = event.targets[event.num];

                                    var choiceList2 = ['交给' + get.translation(player) + '一张牌',
                                    '受到来自' + get.translation(player) + '的一点伤害'];
                                    var list2 = [];
                                    if (target.countCards('he') == 0) choiceList2[0] = '<span style="opacity:0.5">' + choiceList2[0] + '</span>'; //ban the choice
                                    else list2.push('选项一');
                                    list2.push('选项二');
                                    target.chooseControl(list2).set('choiceList', choiceList2).set('ai', function () {
                                        var player = _status.event.player, target = _status.event.getParent().player;
                                        if (target.countCards('he') > 0 && get.attitude(target, player) < 0) return '选项一';
                                        return '选项二';
                                    });

                                    'step 4'
                                    var target = event.targets[event.num];
                                    if (result.control == '选项一') {
                                        target.chooseCard('he', 1, true);
                                    }
                                    else {
                                        target.damage();
                                    }

                                    'step 5'
                                    var target = event.targets[event.num];
                                    if (result) {
                                        target.give(result.cards, player);
                                    }
                                    event.num++;

                                    if (event.num < event.targets.length)
                                        event.goto(3);
                                },
                            },

                            // liuxingyaodi
                            renjun: {
                                unique: true,
                                trigger: { global: 'recoverAfter' },
                                direct: true,
                                init: function (player) {
                                    player.storage.renjun = [];
                                },
                                intro: {
                                    content: 'characters'
                                },
                                content: function () {
                                    'step 0'
                                    // if(player.storage.xiongcai2<1){
                                    //		player.storage.xiongcai2++;
                                    //		event.finish();
                                    // }
                                    // else{
                                    //		player.storage.xiongcai2=0;
                                    // }
                                    'step 1'
                                    player.logSkill('renjun');
                                    var list = [];
                                    var list2 = [];
                                    var players = game.players.concat(game.dead);
                                    for (var i = 0; i < players.length; i++) {
                                        list2.add(players[i].name);
                                        list2.add(players[i].name1);
                                        list2.add(players[i].name2);
                                    }
                                    for (var i in lib.character) {
                                        if (lib.character[i][1] != 'shu') continue;
                                        if (lib.character[i][4].contains('boss')) continue;
                                        if (lib.character[i][4].contains('minskin')) continue;
                                        if (player.storage.renjun.contains(i)) continue;
                                        if (list2.contains(i)) continue;
                                        list.push(i);
                                    }
                                    var name = list.randomGet();
                                    player.storage.renjun.push(name);
                                    player.markSkill('renjun');
                                    var skills = lib.character[name][3];
                                    for (var i = 0; i < skills.length; i++) {
                                        player.addSkill(skills[i]);
                                    }
                                    event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【雄才】', [[name], 'character']);
                                    game.delay(2);
                                    'step 2'
                                    event.dialog.close();
                                }
                            },

                            boss_rende: {
                                enable: 'phaseUse',
                                delay: false,
                                filter: function (event, player) {
                                    return player.countCards('h', 'sha');
                                },
                                content: function () {
                                    'step 0'
                                    player.showHandcards();
                                    const cards = player.getCards('h', { name: 'sha' });
                                    player.discard(cards);

                                    'step 1'
                                    player.chooseTarget('请选择角色，令这些角色恢复一点体力。', [1, 8], function (card, player, target) {
                                        return target.isDamaged();
                                    }).set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target) + 0.5;
                                    });

                                    'step 2'
                                    if (result.bool && result.targets) {
                                        event.targets = result.targets;
                                        event.targets.sort(lib.sort.seat);
                                    }
                                    else {
                                        event.finish();
                                    }

                                    'step 3'
                                    if (player.isAlive() && event.targets.length) {
                                        event.targets.shift().recover();
                                    }
                                    else event.finish();

                                    'step 4'
                                    if (result.bool) {
                                        event.recovered++;
                                    }
                                    if (event.targets.length) event.goto(3);

                                    'step 5'
                                    player.draw(event.recovered);
                                },
                            },

                            //
                            ex_yuhun: {
                                enable: "phaseUse",
                                usable: 1,
                                charlotte: true,
                                fixed: true,
                                audio: "lihun",
                                locked: true,
                                filterCard: function (card) {
                                    var num = 4 - (_status['ex_yuhun_zuo'].length + _status['ex_yuhun_you'].length);
                                    if (ui.selected.cards.length >= num) return false;
                                    var suit = get.suit(card);
                                    for (let i = 0; i < ui.selected.cards.length; i++) {
                                        if (get.suit(ui.selected.cards[i]) == suit) return false;
                                    }
                                    return true;
                                },
                                selectCard: [1, 4],
                                check: function (card) {
                                    return 8 - get.value(card);
                                },
                                complexCard: true,
                                prompt: "弃置任意张不同花色的牌后令场上增加等量名你的【傀儡】",
                                init: function (player) {
                                    if (!player.storage.ex_yuhun_kuilei) player.storage.ex_yuhun_kuilei = ['nan', 'nv'];
                                    _status.ex_yuhun_zuo = [];
                                    _status.ex_yuhun_you = [];
                                    lib.translate['qy_qynvkuilei'] = '傀儡·女';
                                    lib.translate['qy_qynankuilei'] = '傀儡·男';
                                    lib.character.qy_qynvkuilei = ['female', 'qun', 3, ['ex_yuhun_init'], ['character:ns_nanhua_right', 'unseen']];
                                    lib.character.qy_qynankuilei = ['male', 'qun', 3, ['ex_yuhun_init'], ['character:ns_nanhua_left', 'unseen']];
                                },
                                filter: function (event, player) {
                                    return _status['ex_yuhun_zuo'].length + _status['ex_yuhun_you'].length < 4;
                                },
                                onremove: function () {
                                    game.countPlayer(function (current) {
                                        if ((_status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you'])).contains(current) && current.master && current.master == player) {
                                            current.die()._triggered = null;
                                            game.delay(2);
                                            current.remove();
                                            _status['ex_yuhun_zuo'].remove(current);
                                            _status['ex_yuhun_you'].remove(current);
                                        }
                                    });
                                },
                                content: function () {
                                    'step 0'
                                    event.num = cards.length;
                                    'step 1'
                                    if (_status['ex_yuhun_zuo'].action === false) {
                                        _status['ex_yuhun_zuo'].action = true;
                                    } else {
                                        _status['ex_yuhun_zuo'].action = false;
                                    }
                                    var action = _status['ex_yuhun_zuo'].action,
                                        length = _status['ex_yuhun_you'].length + 1;
                                    var fellow = game.addFellow(action ? 1 : game.players.length + game.dead.length - _status['ex_yuhun_you'].length, `qy_qy${player.storage.ex_yuhun_kuilei.randomGet()}kuilei`);
                                    fellow.classList.add('minskin');
                                    fellow.side = player.side;
                                    fellow.master = player;
                                    if (action) {
                                        game.players.remove(fellow);
                                        game.players.unshift(fellow);
                                        game.arrangePlayers();
                                    }
                                    var left = 80;
                                    if (action) {
                                        left = 600;
                                    }
                                    if (_status[!action ? 'ex_yuhun_zuo' : 'ex_yuhun_you'].length > 0) left += 150;
                                    fellow.css({
                                        pointerEvents: 'auto',
                                        top: '45vh',
                                        left: left + 'px',
                                    });
                                    ui.arena.appendChild(fellow);
                                    _status[!action ? 'ex_yuhun_zuo' : 'ex_yuhun_you'].add(fellow);
                                    fellow.identity = player.identity;
                                    if (fellow.identity === 'zhu') fellow.identity = 'zhong';
                                    if (fellow.identity === 'nei') fellow.identity = '？';
                                    fellow.setIdentity('傀儡');
                                    fellow.node.identity.dataset.color = 'black';
                                    if (get.mode() == 'doudizhu') {
                                        fellow.identity = player.identity;
                                        fellow.setIdentity('傀儡');
                                    }
                                    event.num--;
                                    'step 2'
                                    if (event.num > 0) event.goto(1);
                                    else event.finish();
                                },
                                mod: {
                                    globalFrom: function (from, to, distance) {
                                        var players = _status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']);
                                        if (players) return distance - players.length;
                                    },
                                    targetEnabled: function (card, player, target, now) {
                                        var players = _status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']);
                                        if (players && players.length) {
                                            if (players.contains(player)) return false;
                                        }
                                    },
                                    playerEnabled: function (card, player, target) {
                                        if (_status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']).contains(target) && target.master && target.master == player) {
                                            return false;
                                        }
                                    },
                                },
                                ai: {
                                    order: 12,
                                    result: {
                                        player: 1,
                                    },
                                },
                                group: ['ex_yuhun_die', 'ex_yuhun_equip', 'ex_yuhun_use', 'ex_yuhun_win'],
                                subSkill: {
                                    init: {
                                        trigger: {
                                            global: "roundStart",
                                        },
                                        silent: true,
                                        forced: true,
                                        popup: false,
                                        charlotte: true,
                                        init: function (player) {
                                            player.addSkill('ex_yuhun_remove');
                                        },
                                        onremove: function (player) {
                                            player.addSkill('ex_yuhun_remove');
                                        },
                                        content: function () {
                                            const num = [1, 2].randomGet();
                                            if (num == 1) player.gainMaxHp();
                                            else player.recover();
                                        },
                                    },
                                    remove: {
                                        trigger: {
                                            player: ["die", "phaseBefore"],
                                        },
                                        silent: true,
                                        forced: true,
                                        popup: false,
                                        forceDie: true,
                                        fixed: true,
                                        charlotte: true,
                                        group: 'huoxin_control',
                                        init: function (player) {
                                            player.addSkill('ex_yuhun_init');
                                        },
                                        onremove: function (player) {
                                            player.addSkill('ex_yuhun_init');
                                        },
                                        filter: function (event, player) {
                                            return _status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']).contains(player);
                                        },
                                        content: function () {
                                            // if (event.triggername == 'phaseBefore') {
                                            //     trigger.cancel();
                                            //     player.draw(2);
                                            // }
                                            // else {
                                            //     player.master.removeAdditionalSkill(player.name1)
                                            //     player.remove();
                                            //     _status['ex_yuhun_zuo'].remove(player);
                                            //     _status['ex_yuhun_you'].remove(player);
                                            // }
                                        },
                                        mod: {
                                            playerEnabled: function (card, player, target) {
                                                if (_status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']).contains(target) && target != player) {
                                                    return false;
                                                }
                                            },
                                            globalFrom: function (from, to, distance) {
                                                return distance - _status['ex_yuhun_zuo'].length - _status['ex_yuhun_you'].length;
                                            },
                                        },
                                    },
                                    die: {
                                        trigger: {
                                            player: "die",
                                        },
                                        silent: true,
                                        charlotte: true,
                                        forced: true,
                                        popup: false,
                                        forceDie: true,
                                        filter: function (event, player) {
                                            var players = _status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']);
                                            if (!players || !players.length) {
                                                return false;
                                            }
                                            return true;
                                        },
                                        content: function () {
                                            var players = _status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']);
                                            game.countPlayer(function (current) {
                                                if (players.contains(current) && current.master && current.master == player) {
                                                    current.die();
                                                    game.delay(2);
                                                    current.remove();
                                                    _status['ex_yuhun_zuo'].remove(current);
                                                    _status['ex_yuhun_you'].remove(current);
                                                }
                                            });
                                        },
                                    },
                                    equip: {
                                        trigger: {
                                            global: ["equipEnd", "loseEnd", "ex_yuhunAfter", "changeHp", "loseBegin"],
                                        },
                                        forced: true,
                                        charlotte: true,
                                        popup: false,
                                        silent: true,
                                        filter: function (event, player, name) {
                                            var players = _status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']);
                                            if (!players || !players.length) return false;
                                            if (name == 'loseEnd') {
                                                for (var i = 0; i < event.cards.length; i++) {
                                                    if (event.cards[i].original == 'e') return true;
                                                }
                                            } else return true;
                                        },
                                        content: function () {
                                            var info = [];
                                            var es = player.getCards('e');
                                            var equips = [];
                                            for (var i = 0; i < es.length; i++) {
                                                if (es[i].clearLose) continue;
                                                equips.add(es[i].name);
                                                var skill = lib.card[es[i].name].skills;
                                                if (skill && skill.length > 0) info.addArray(skill);
                                            }
                                            var players = _status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']);
                                            game.countPlayer(function (current) {
                                                if (players.contains(current) && current.master && current.master == player) {
                                                    current.storage.ex_yuhun_equip = equips;
                                                    current.addSkill('ex_yuhun_equip');
                                                    current.markSkill('ex_yuhun_equip');
                                                    current.removeAdditionalSkill('ex_yuhun_equip');
                                                    current.addAdditionalSkill('ex_yuhun_equip', info, true);
                                                    current.master.addAdditionalSkill(current.name1, current.skills.filter(value => ['ymhuajing', 'ymdujie', 'ex_yuhun_init', 'ex_yuhun_remove',].contains(value) === false), true);
                                                }
                                            });
                                        },
                                        mod: {
                                            globalFrom: function (from, to, distance) {
                                                var num = 0;
                                                if (!from.storage.ex_yuhun_equip) return;
                                                for (var i = 0; i < from.storage.ex_yuhun_equip.length; i++) {
                                                    var info = lib.card[from.storage.ex_yuhun_equip[i]];
                                                    if (info && info.distance && info.distance.globalFrom) num += info.distance.globalFrom;
                                                }
                                                return distance + num;
                                            },
                                            globalTo: function (from, to, distance) {
                                                var num = 0;
                                                if (!to.storage.ex_yuhun_equip) return;
                                                for (var i = 0; i < to.storage.ex_yuhun_equip.length; i++) {
                                                    var info = lib.card[to.storage.ex_yuhun_equip[i]];
                                                    if (info && info.distance && info.distance.globalTo) num += info.distance.globalTo;
                                                }
                                                return distance + num;
                                            },
                                            attackFrom: function (from, to, distance) {
                                                var num = 0;
                                                if (!from.storage.ex_yuhun_equip) return;
                                                for (var i = 0; i < from.storage.ex_yuhun_equip.length; i++) {
                                                    var info = lib.card[from.storage.ex_yuhun_equip[i]];
                                                    if (info && info.distance && info.distance.attackFrom) num += info.distance.attackFrom;
                                                }
                                                return distance + num;
                                            },
                                            attackTo: function (from, to, distance) {
                                                var num = 0;
                                                if (!to.storage.ex_yuhun_equip) return;
                                                for (var i = 0; i < to.storage.ex_yuhun_equip.length; i++) {
                                                    var info = lib.card[to.storage.ex_yuhun_equip[i]];
                                                    if (info && info.distance && info.distance.attackTo) num += info.distance.attackTo;
                                                }
                                                return distance + num;
                                            },
                                        },
                                        marktext: "魂",
                                        intro: {
                                            content: function (storage, player, skill) {
                                                var str = '<li>当前装备：' + get.translation(player.storage.ex_yuhun_equip) + '<br>–––––––––––––––––––––––';
                                                for (var i = 0; i < player.storage.ex_yuhun_equip.length; i++) {
                                                    str += '<br>*<span class="bluetext">【' + lib.translate[player.storage.ex_yuhun_equip[i]] + '】：' + lib.translate[player.storage.ex_yuhun_equip[i] + '_info'] + '</span>';
                                                }
                                                return str;
                                            },
                                            onunmark: function (storage, player) {
                                                player.removeAdditionalSkill('ex_yuhun_equip');
                                                delete player.storage.ex_yuhun_equip;
                                                player.addEquipTrigger();
                                            },
                                        },
                                    },
                                    use: {
                                        trigger: {
                                            player: 'useCardAfter',
                                        },
                                        filter: function (event, player) {
                                            if (!['trick', 'basic'].contains(get.type(event.card))) return false;
                                            var players = _status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']);
                                            return players && players.length;
                                        },
                                        forced: true,
                                        content: function () {
                                            'step 0'
                                            var players = _status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']);
                                            game.countPlayer(function (current) {
                                                if (!players.contains(current) || !current.master || current.master != player) {
                                                    players.remove(current);
                                                }
                                            });
                                            event.num = 0;
                                            event.kuilei = players;
                                            'step 1'
                                            event.targets = trigger.targets.slice(0);
                                            for (var i = 0; i < event.targets.length; i++) {
                                                if (!event.kuilei[event.num].canUse(trigger.card, event.targets[i], false, false) || !event.targets[i].isAlive()) {
                                                    event.targets.remove(event.targets[i]);
                                                }
                                            }
                                            var card = game.createCard(trigger.card);
                                            if (trigger.targets.length == 1 && trigger.targets[0] == player) event.kuilei[event.num].useCard(card, event.kuilei[event.num], false);
                                            else if (event.targets.length) event.kuilei[event.num].useCard(card, event.targets, false);
                                            event.num++;
                                            if (event.num < event.kuilei.length) event.redo();
                                        },
                                    },
                                    win: {
                                        trigger: {
                                            global: ['dieBegin', 'die', 'phaseAfter'],
                                        },
                                        silent: true,
                                        popup: false,
                                        forced: true,
                                        filter: function (event, player, name) {
                                            var mode = get.mode();
                                            var players = _status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']);
                                            if (!players || !players.length) return false;
                                            if (mode == 'identity' && name == 'dieBegin' && player.identity == 'nei') {
                                                return game.players.length - players.length <= 2 && event.player != player;
                                            }
                                            else if (name == 'die' || name == 'phaseAfter') return player.getEnemies().length == 0;
                                        },
                                        content: function () {
                                            'step 0'
                                            game.delay();
                                            'step 1'
                                            if (game.showIdentity) {
                                                game.showIdentity();
                                            }
                                            if (player.isUnderControl(true) || player.getFriends().contains(game.me)) {
                                                game.over(true);
                                            } else {
                                                game.over(true);
                                            }
                                        },
                                    },
                                },
                            },
                            ex_kongshen: {
                                trigger: {
                                    player: 'phaseEnd',
                                },
                                audio: 'biyue',
                                content: function () {
                                    'step 0'

                                    const puppets = _status['ex_yuhun_zuo'].length + _status['ex_yuhun_you'].length;
                                    player.draw(puppets);
                                    player.recover(4 - puppets);
                                    player.chooseTarget(get.prompt2(event.name), '选择1名【傀儡】替换武将牌', function (card, player, target) {
                                        var players = _status['ex_yuhun_zuo'].concat(_status['ex_yuhun_you']);
                                        return players && players.contains(target) && target.master && target.master == _status.event.player;
                                    }).set('ai', function (target) {
                                        if (['qy_qynvkuilei', 'qy_qynankuilei'].contains(target.name1)) return target;
                                        return Math.random();
                                    });

                                    'step 1'
                                    if (result.bool) {
                                        var list = [];
                                        var list2 = [];
                                        var players = game.players.concat(game.dead);
                                        for (var i = 0; i < players.length; i++) {
                                            list2.add(players[i].name);
                                            list2.add(players[i].name1);
                                            list2.add(players[i].name2);
                                        }
                                        for (var i in lib.character) {
                                            if (lib.character[i][4].contains('qyboss')) continue;
                                            if (lib.character[i][0] != result.targets[0].sex) continue;
                                            if (lib.character[i][4].contains('minskin')) continue;
                                            if (list2.contains(i)) continue;
                                            list.push(i);
                                        }
                                        result.targets[0].master.removeAdditionalSkill(result.targets[0].name1);
                                        var hp = result.targets[0].hp;
                                        var maxHp = result.targets[0].maxHp;
                                        result.targets[0].init(list.randomGet()).classList.add('minskin');
                                        result.targets[0].hp = hp;
                                        result.targets[0].maxHp = maxHp;
                                        result.targets[0].update();
                                        result.targets[0].master.addAdditionalSkill(result.targets[0].name1, result.targets[0].skills.filter(value => ['ymhuajing', 'ymdujie', 'ex_yuhun_init', 'ex_yuhun_remove'].contains(value) === false), true);
                                    }
                                },
                            },

                            // mengpo
                            "rewangshi": {
                                trigger: { global: 'phaseZhunbeiBegin' },
                                forced: true,
                                audio: true,
                                filter: function (event, player) {
                                    if (player.getEnemies().contains(event.player)) { return true; }
                                    return false;
                                },
                                logTarget: 'player',
                                content: function () {
                                    'step 0'
                                    player.chooseControl('basic', 'trick', 'equip');

                                    'step 1'
                                    var list = result.control;
                                    trigger.player.addTempSkill('boss_wangshi2');
                                    trigger.player.storage.boss_wangshi2 = [list];
                                    game.log(trigger.player, '本回合不能使用或打出', list, '牌');
                                    trigger.player.markSkill('boss_wangshi2');
                                },
                            },
                            "boss_wangshi2": {
                                unique: true,
                                charlotte: true,
                                intro: {
                                    content: function (storage) {
                                        return '不能使用或打出' + get.translation(storage) + '牌';
                                    }
                                },
                                init: function (player, skill) {
                                    if (!player.storage[skill]) player.storage[skill] = [];
                                },
                                //mark:true,
                                onremove: true,
                                mod: {
                                    cardEnabled2: function (card, player) {
                                        if (player.storage.boss_wangshi2.contains(get.type(card, 'trick'))) return false;
                                    },
                                },
                            },
                            rexuechi: {
                                trigger: { player: 'phaseJieshuBegin' },
                                forced: true,
                                content: function () {
                                    "step 0"
                                    player.chooseTarget('请选择一名其他角色，令该角色失去两点体力。', function () {
                                        return target != player;
                                    }).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });

                                    "step 1"
                                    if (result.bool) {
                                        const target = result.targets[0];
                                        player.line(target);
                                        target.loseHp(2);
                                    }
                                },
                            },
                            wuye: {
                                unique: true,
                                trigger: {
                                    player: 'loseAfter',
                                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                },
                                filter: function (event, player) {
                                    var evt = event.getl(player);
                                    if (event.name == 'equip' && event.player == player) return !evt || evt.cards.length != 1;
                                    return evt && evt.es.length;
                                },
                                direct: true,
                                init: function (player) {
                                    player.storage.wuye = [];
                                },
                                intro: {
                                    content: 'characters'
                                },
                                content: function () {
                                    'step 0'
                                    // if(player.storage.xiongcai2<1){
                                    //		player.storage.xiongcai2++;
                                    //		event.finish();
                                    // }
                                    // else{
                                    //		player.storage.xiongcai2=0;
                                    // }
                                    'step 1'
                                    player.logSkill('wuye');
                                    var list = [];
                                    var list2 = [];
                                    var players = game.players.concat(game.dead);
                                    for (var i = 0; i < players.length; i++) {
                                        list2.add(players[i].name);
                                        list2.add(players[i].name1);
                                        list2.add(players[i].name2);
                                    }
                                    for (var i in lib.character) {
                                        if (lib.character[i][1] != 'wu') continue;
                                        if (lib.character[i][4].contains('boss')) continue;
                                        if (lib.character[i][4].contains('minskin')) continue;
                                        if (player.storage.wuye.contains(i)) continue;
                                        if (list2.contains(i)) continue;
                                        list.push(i);
                                    }
                                    var name = list.randomGet();
                                    player.storage.wuye.push(name);
                                    player.markSkill('wuye');
                                    var skills = lib.character[name][3];
                                    for (var i = 0; i < skills.length; i++) {
                                        player.addSkill(skills[i]);
                                    }
                                    event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【雄才】', [[name], 'character']);
                                    game.delay(2);
                                    'step 2'
                                    event.dialog.close();
                                }
                            },
                            boss_zhiheng: {
                                enable: 'phaseUse',
                                usable: 1,
                                delay: false,
                                filter: function (event, player) {
                                    return player.countCards('h');
                                },
                                content: function () {
                                    'step 0'
                                    const cards = player.getCards('h');
                                    player.discard(cards);

                                    'step 1'
                                    const randomEquip = get.cardPile(function (card) {
                                        return get.type(card) == 'equip';
                                    });
                                    player.gain(randomEquip);

                                },
                            },
                            hunzhan: {
                                unique: true,
                                trigger: {
                                    source: 'damageSource',
                                },
                                filter: function (event, player) {
                                    return player != event.player;
                                },
                                direct: true,
                                init: function (player) {
                                    player.storage.hunzhan = [];
                                },
                                intro: {
                                    content: 'characters'
                                },
                                content: function () {
                                    'step 0'
                                    // if(player.storage.xiongcai2<1){
                                    //		player.storage.xiongcai2++;
                                    //		event.finish();
                                    // }
                                    // else{
                                    //		player.storage.xiongcai2=0;
                                    // }
                                    'step 1'
                                    player.logSkill('hunzhan');
                                    var list = [];
                                    var list2 = [];
                                    var players = game.players.concat(game.dead);
                                    for (var i = 0; i < players.length; i++) {
                                        list2.add(players[i].name);
                                        list2.add(players[i].name1);
                                        list2.add(players[i].name2);
                                    }
                                    for (var i in lib.character) {
                                        if (lib.character[i][1] != 'qun') continue;
                                        if (lib.character[i][4].contains('boss')) continue;
                                        if (lib.character[i][4].contains('minskin')) continue;
                                        if (player.storage.hunzhan.contains(i)) continue;
                                        if (list2.contains(i)) continue;
                                        list.push(i);
                                    }
                                    var name = list.randomGet();
                                    player.storage.hunzhan.push(name);
                                    player.markSkill('hunzhan');
                                    var skills = lib.character[name][3];
                                    for (var i = 0; i < skills.length; i++) {
                                        player.addSkill(skills[i]);
                                    }
                                    event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【雄才】', [[name], 'character']);
                                    game.delay(2);
                                    'step 2'
                                    event.dialog.close();
                                }
                            },
                            qibing: {
                                audio: true,
                                trigger: { player: 'phaseBegin' },
                                direct: true,
                                content: function () {
                                    "step 0"
                                    player.chooseTarget(get.prompt('qibing'), function (card, player, target) {
                                        if (target.isFriendOf(player)) return false;
                                        return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                    }).ai = function (target) {
                                        return get.effect(target, { name: 'sha' }, player);
                                    }
                                    "step 1"
                                    if (result.bool) {
                                        player.logSkill('qibing');
                                        player.useCard({ name: 'sha' }, result.targets, false);
                                    }
                                },
                                ai: {
                                    expose: 0.2,
                                    threaten: 1.3
                                }
                            },
                            geju: {
                                trigger: { player: 'phaseBegin' },
                                forced: true,
                                content: function () {
                                    player.addSkill('geju_effect');
                                    player.draw(player.storage.geju_effect);
                                    player.storage.geju_effect = 0;
                                },
                                mod: {
                                    globalTo: function (from, to, distance) {
                                        if (typeof to.storage.geju_effect == 'number') {
                                            return distance + to.storage.geju_effect;
                                        }
                                    }
                                }
                            },
                            geju_effect: {
                                forced: true,
                                trigger: { player: 'damageEnd' },
                                // filter: function (event, player) {
                                //     return event.source && event.source != player;
                                // },
                                mark: true,
                                charlotte: true,
                                intro: {
                                    content: function (storage) {
                                        if (storage > 0) {
                                            return '其他角色计算与你的距离时+' + storage;
                                        }
                                        else if (storage < 0) {
                                            return '其他角色计算与你的距离时' + storage;
                                        }
                                        else {
                                            return '无距离变化';
                                        }
                                    }
                                },
                                init: function (player) {
                                    player.storage.geju_effect = 0;
                                },
                                content: function () {
                                    player.addSkill('geju_effect');
                                    player.storage.geju_effect++;
                                    player.markSkill('geju_effect');
                                },

                            },
                            yuquan: {
                                unique: true,
                                trigger: { player: 'showCharacterAfter' },
                                logTarget: function () {
                                    return _status.currentPhase;
                                },
                                filter: function (event, player) {
                                    return player.isAlive();
                                },
                                direct: true,
                                init: function (player) {
                                    player.storage.yuquan = [];
                                },
                                intro: {
                                    content: 'characters'
                                },
                                content: function () {
                                    'step 0'
                                    // if(player.storage.xiongcai2<1){
                                    //		player.storage.xiongcai2++;
                                    //		event.finish();
                                    // }
                                    // else{
                                    //		player.storage.xiongcai2=0;
                                    // }
                                    'step 1'
                                    player.logSkill('yuquan');
                                    var list = [];
                                    var list2 = [];
                                    var players = game.players.concat(game.dead);
                                    for (var i = 0; i < players.length; i++) {
                                        list2.add(players[i].name);
                                        list2.add(players[i].name1);
                                        list2.add(players[i].name2);
                                    }
                                    for (var i in lib.character) {
                                        if (lib.character[i][1] != 'jin') continue;
                                        if (lib.character[i][4].contains('boss')) continue;
                                        if (lib.character[i][4].contains('minskin')) continue;
                                        if (player.storage.yuquan.contains(i)) continue;
                                        if (list2.contains(i)) continue;
                                        list.push(i);
                                    }
                                    var name = list.randomGet();
                                    player.storage.yuquan.push(name);
                                    player.markSkill('yuquan');
                                    var skills = lib.character[name][3];
                                    for (var i = 0; i < skills.length; i++) {
                                        player.addSkill(skills[i]);
                                    }
                                    event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【雄才】', [[name], 'character']);
                                    game.delay(2);
                                    'step 2'
                                    event.dialog.close();
                                }
                            },
                            chengbing: {
                                forced: true,
                                trigger: { player: 'damageEnd' },
                                content: function () {
                                    game.log(player.info);
                                    if (!player.hiddenSkills) player.hiddenSkills = [];
                                    // player.hiddenSkills.addArray(info2[3]);
                                    player.classList.add(_status.video ? 'unseen2_v' : 'unseen2');
                                    player.storage.nohp = true;
                                    player.skills.add('g_hidden_ai');
                                }
                            },

                            "ex_yitong": {
                                audio: 'ext:大战七阴/audio:true',
                                mod: {
                                    targetInRange: function (card) {
                                        if (card.name == 'sha' || card.name == 'shunshou') return true;
                                    },
                                },
                                trigger: {
                                    player: 'useCard2',
                                },
                                forced: true,
                                filter: function (event, player) {
                                    if (!['shunshou', 'guohe', 'sha', 'huogong', 'juedou'].contains(event.card.name)) return false;
                                    return game.hasPlayer(function (current) {
                                        return current.group != 'daqin' && !event.targets.contains(current) && player.canUse(event.card, current);
                                    });
                                },
                                content: function () {
                                    trigger.targets.addArray(game.filterPlayer(function (current) {
                                        return current.group != 'daqin' && !trigger.targets.contains(current) && player.canUse(trigger.card, current);
                                    }));
                                    player.line(trigger.targets);
                                },
                            },
                            "ex_shihuang": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    global: "phaseAfter",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    var num = game.roundNumber / 100 * 6;
                                    if (num > 1) num = 1;
                                    return event.player != player && Math.random() <= num;
                                },
                                content: function () {
                                    player.insertPhase();
                                },
                            },
                            "ex_liuhe": {
                                trigger: { player: 'phaseDrawBegin' },
                                forced: true,
                                content: function () {
                                    trigger.num = 6;
                                },
                                ai: {
                                    threaten: 4
                                }
                            },
                            "ex_zulong": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    global: 'phaseBefore',
                                    player: 'enterGame',
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return (event.name != 'phase' || game.phaseNumber == 0) && !lib.inpile.contains('zhenlongchangjian');
                                },
                                content: function () {
                                    if (player) {
                                        player.equip(game.createCard('chuanguoyuxi', 'diamond', 1))._triggered = null;
                                        player.equip(game.createCard('zhenlongchangjian', 'diamond', 1))._triggered = null;
                                    } else {
                                        lib.inpile.addArray(['zhenlongchangjian', 'chuanguoyuxi']);
                                        ui.cardPile.insertBefore(game.createCard('chuanguoyuxi', 'diamond', 1), ui.cardPile.childNodes[get.rand(ui
                                            .cardPile.childElementCount)]);
                                        ui.cardPile.insertBefore(game.createCard('zhenlongchangjian', 'diamond', 1), ui.cardPile.childNodes[get.rand(
                                            ui.cardPile.childElementCount)]);
                                    }


                                },
                            },
                            "ex_fenshu": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    global: "useCard",
                                },
                                usable: 1,
                                filter: function (event, player) {
                                    return event.player == _status.currentPhase && event.player.group != 'daqin' && get.type(event.card) == 'trick';
                                },
                                content: function () {
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                },
                            },
                            "zhenlongchangjian_skill": {
                                trigger: {
                                    player: "useCard1",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return get.type(event.card) == 'trick' && player.getHistory('useCard', function (card) {
                                        return get.type(card.card) == 'trick';
                                    }).indexOf(event) == 0;
                                },
                                content: function () {
                                    trigger.nowuxie = true;
                                },
                            },
                            "chuanguoyuxi_skill": {
                                trigger: {
                                    player: "phaseUseBegin",
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    var list = ["nanman", "wanjian", "taoyuan", "wugu"];
                                    player.chooseButton([get.prompt(event.name), [list, 'vcard']]).ai = function (button) {
                                        return _status.event.player.getUseValue({
                                            name: button.link[2]
                                        });
                                    }
                                    'step 1'
                                    if (result.bool) {
                                        player.chooseUseTarget(result.links[0][2], true, false).logSkill = event.name;
                                    }
                                },
                            },

                            "zhaoji_shanwu": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    player: "useCardToPlayered",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.card.name == 'sha';
                                },
                                content: function () {
                                    "step 0"
                                    player.judge(function (card) {
                                        return (get.color(card) == 'black') ? 2 : 0;
                                    });
                                    "step 1"
                                    if (result.judge > 0) {
                                        trigger.getParent().directHit.add(trigger.target);
                                    }
                                },
                                ai: {
                                    effect: {
                                        player: function (card, player, target, current) {
                                            if (get.name(card) != 'sha' || get.attitude(player, target) > 0) return;
                                            if (target.hasSkillTag('respondShan')) return [1.2, 0];
                                        }
                                    },
                                },
                                group: ["zhaoji_shanwu_judge"],
                                subSkill: {
                                    judge: {
                                        audio: 'zhaoji_shanwu',
                                        trigger: {
                                            target: "useCardToTargeted",
                                        },
                                        filter: function (event, player) {
                                            if (event.player == player) return false;
                                            if (event.card.name == 'sha') return true;
                                            return false;
                                        },
                                        forced: true,
                                        content: function () {
                                            "step 0"
                                            player.judge(function (card) {
                                                return (get.color(card) == 'red') ? 2 : 0;
                                            });
                                            "step 1"
                                            if (result.judge > 0) {
                                                trigger.getParent().excluded.add(player);
                                            }
                                        },
                                        sub: true,
                                        ai: {
                                            effect: {
                                                target: function (card, player, target, current) {
                                                    if (get.name(card) == 'sha') return [0.5, 0];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                            "ex_daqi": {
                                audio: 'ext:大战七阴/audio:true',
                                init: function (player) {
                                    if (!player.storage.ex_daqi) player.storage.ex_daqi = 0;
                                },
                                marktext: "期",
                                intro: {
                                    content: "当前有#个“期”标记",
                                },
                                trigger: {
                                    source: "damageSource",
                                    player: ["damageAfter", "useCard", "respond"],
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return player.storage.ex_daqi != Infinity && player.storage.ex_daqi >= 10;
                                },
                                content: function () {
                                    game.log(player, '失去了', player.storage.ex_daqi, '个“期”标记');
                                    player.storage.ex_daqi = 0;
                                    player.syncStorage('ex_daqi');
                                    player.unmarkSkill('ex_daqi');
                                    var hp = player.maxHp - player.hp;
                                    var card = player.maxHp - player.countCards('h');
                                    if (hp > 0) player.recover(hp);
                                    if (card > 0) player.draw(card);
                                    player.storage.zhaoji_huoluan = true;
                                },
                                group: ["ex_daqi_damage", "ex_daqi_card"],
                                subSkill: {
                                    damage: {
                                        trigger: {
                                            player: "damageAfter",
                                            source: "damageSource",
                                        },
                                        audio: 'ex_daqi',
                                        forced: true,
                                        content: function () {
                                            player.storage.ex_daqi += trigger.num;
                                            player.markSkill('ex_daqi');
                                            game.log(player, '获得了', trigger.num, '个“期”标记');
                                            player.syncStorage('ex_daqi');
                                        },
                                        sub: true,
                                    },
                                    card: {
                                        audio: 'ex_daqi',
                                        trigger: {
                                            player: ["useCard", "respond"],
                                        },
                                        forced: true,
                                        content: function () {
                                            player.storage.ex_daqi++;
                                            player.markSkill('ex_daqi');
                                            game.log(player, '获得了1个“期”标记');
                                            player.syncStorage('ex_daqi');
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "zhaoji_xianji": {
                                audio: 'ext:大战七阴/audio:true',
                                init: function (player) {
                                    player.storage.nzry_dinghuo = false;
                                },
                                intro: {
                                    content: "limited",
                                },
                                unique: true,
                                mark: true,
                                skillAnimation: true,
                                animationColor: "thunder",
                                enable: "phaseUse",
                                filter: function (event, player) {
                                    return !player.storage.zhaoji_xianji && player.storage.ex_daqi > 0;
                                },
                                check: function (event, player) {
                                    var hp = player.maxHp - player.hp;
                                    var card = 3 - player.countCards('he');
                                    if ((hp + card) > 0) return true;
                                    return false;
                                },
                                content: function () {
                                    'step 0'
                                    player.awakenSkill('zhaoji_xianji');
                                    player.storage.zhaoji_xianji = true;
                                    'step 1'
                                    var hs = player.getCards('he');
                                    if (hs.length) player.discard(hs);
                                    game.log(player, '失去了', player.storage.ex_daqi, '个“期”标记');
                                    player.storage.ex_daqi = 0;
                                    player.syncStorage('ex_daqi');
                                    player.unmarkSkill('ex_daqi');
                                    player.loseMaxHp();
                                    'step 2'
                                    var hp = player.maxHp - player.hp;
                                    var card = player.maxHp - player.countCards('h');
                                    if (hp > 0) player.recover(hp);
                                    if (card > 0) player.draw(card);
                                    player.storage.zhaoji_huoluan = true;
                                },
                                ai: {
                                    order: 1,
                                    result: {
                                        player: function (player, target) {
                                            var hp = player.maxHp - player.hp;
                                            var card = player.maxHp - player.countCards('h');
                                            return 0 + hp + card;
                                        },
                                    },
                                },
                            },
                            "zhaoji_huoluan": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    player: ["ex_daqiAfter", "zhaoji_xianjiAfter"],
                                },
                                forced: true,
                                content: function () {
                                    'step 0'
                                    event.targets = game.filterPlayer();
                                    event.targets.remove(player);
                                    event.targets.sort(lib.sort.seat);
                                    player.line(event.targets);
                                    event.targets2 = event.targets.slice(0);
                                    'step 1'
                                    if (event.targets2.length) {
                                        event.targets2.shift().damage('nocard');
                                        event.redo();
                                    }
                                },
                            },

                            "baiqi_wuan": {
                                audio: 'ext:大战七阴/audio:true',
                                locked: true,
                                global: "baiqi_wuan_buff",
                                subSkill: {
                                    buff: {
                                        mod: {
                                            cardUsable: function (card, player, num) {
                                                if (player.group == 'daqin' && card.name == 'sha') {
                                                    return num + game.countPlayer(function (current) {
                                                        return current.hasSkill('baiqi_wuan')
                                                    });
                                                }
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "baiqi_shashen": {
                                audio: 'ext:大战七阴/audio:true',
                                enable: ["chooseToRespond", "chooseToUse"],
                                filterCard: true,
                                viewAs: {
                                    name: "sha",
                                },
                                viewAsFilter: function (player) {
                                    if (!player.countCards('h')) return false;
                                },
                                prompt: "将一张手牌当作【杀】使用或打出",
                                check: function (card) {
                                    return 4 - get.value(card);
                                },
                                group: ["baiqi_shashen_i"],
                                subSkill: {
                                    i: {
                                        audio: 'baiqi_shashen',
                                        trigger: {
                                            source: "damageEnd",
                                        },
                                        forced: true,
                                        sub: true,
                                        filter: function (event, player) {
                                            return event.card && event.card.name == 'sha' && player.getHistory('useCard', function (evt) {
                                                return evt.card.name == 'sha';
                                            }).indexOf(event.getParent('useCard')) == 0;
                                        },
                                        content: function () {
                                            player.draw();
                                        },
                                    },
                                },
                                ai: {
                                    skillTagFilter: function (player) {
                                        if (!player.countCards('h')) return false;
                                    },
                                    respondSha: true,
                                },
                            },
                            "baiqi_fachu": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    source: "dying",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.getParent().name == 'damage' && event.player.group != 'daqin';
                                },
                                content: function () {
                                    var list = [];
                                    for (var i = 1; i <= 5; i++) {
                                        if (trigger.player.isDisabled(i)) continue;
                                        list.add('equip' + ((i == 3 || i == 4) ? 6 : i));
                                    }
                                    if (list.length) {
                                        player.line(trigger.player);
                                        var num = list.randomGet();
                                        trigger.player.disableEquip(num);
                                        if (num == 'equip6') {
                                            trigger.player.disableEquip(3);
                                            trigger.player.disableEquip(4);
                                        }
                                    } else {
                                        trigger.player.loseMaxHp().source = player;
                                    }
                                },
                            },
                            "baiqi_changsheng": {
                                audio: 'ext:大战七阴/audio:true',
                                mod: {
                                    targetInRange: function (card) {
                                        if (card.name == 'sha') return true;
                                    },
                                },
                                trigger: {
                                    player: "useCardToTargeted",
                                },
                                filter: function (event, player) {
                                    return event.card && event.card.name == 'sha' && !player.inRange(event.target);
                                },
                                forced: true,
                                content: function () { },
                            },

                            "bubing_fangzhen": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    target: "useCardToTargeted",
                                },
                                filter: function (event, player) {
                                    if (event.player.group == 'daqin' || event.player == player || !player.canUse({
                                        name: 'sha'
                                    }, event.player)) return false;
                                    if ((event.card.name == 'sha' || get.type(event.card) == 'trick') && get.distance(event.player, player,
                                        'attack') <= 1) return true;
                                    return false;
                                },
                                forced: true,
                                content: function () {
                                    "step 0"
                                    player.judge(function (card) {
                                        return (get.color(card) == 'black') ? 2 : -1;
                                    });
                                    "step 1"
                                    if (result.judge > 0) {
                                        player.useCard({
                                            name: 'sha'
                                        }, trigger.player, false);
                                    }
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target) {
                                            if (!target.inRange(player)) return;
                                            if (player.group == 'daqin') return;
                                            if (card.name != 'sha' && get.type(card) != 'trick') return;
                                            var maixie = (player.hasSkillTag('maixie') || player.hasSkillTag('maixie_hp'));
                                            var shan = player.countCards('h', 'shan');
                                            var taojiu = (player.countCards('h', 'tao') + player.countCards('h', 'jiu'));
                                            var hp = player.hp;
                                            if (player.getEquip('tengjia') && get.attitude(player, target) <= 0) {
                                                if (get.itemtype(_status.pileTop) == 'card') {
                                                    if (get.color(_status.pileTop) != 'black' && get.attitude(player, target) <= 0) return 3;
                                                } else {
                                                    return;
                                                }
                                                if (target.getEquip('zhuque') || target.getEquip('qinggang')) {
                                                    if (shan == 0) {
                                                        if (maixie && (hp > 1 || taojiu > 0) && !game.players.hasSkill('daqin_wuan')) return 2;
                                                        return -2;
                                                    } else {
                                                        return 0.2;
                                                    }
                                                }
                                                return 1;
                                            }
                                            if (player.getEquip('bagua') && get.attitude(player, target) <= 0) {
                                                if (get.itemtype(_status.pileTop) == 'card') {
                                                    if (get.color(_status.pileTop) != 'black' && get.attitude(player, target) <= 0) return 3;
                                                } else {
                                                    return;
                                                }
                                                if (target.getEquip('qinggang')) {
                                                    if (shan == 0) {
                                                        if (maixie && (hp > 1 || taojiu > 0) && !game.players.hasSkill('daqin_wuan')) return 2;
                                                        return -1;
                                                    } else {
                                                        return 0.2;
                                                    }
                                                }
                                                return 0.5;
                                            }
                                        },
                                    },
                                },
                            },
                            "bubing_changbing": {
                                audio: 'ext:大战七阴/audio:true',
                                mod: {
                                    attackFrom: function (from, to, distance) {
                                        return distance - 2;
                                    },
                                },
                            },
                            "qibing_changjian": {
                                audio: 'ext:大战七阴/audio:true',
                                mod: {
                                    attackFrom: function (from, to, distance) {
                                        return distance - 1;
                                    },
                                },
                                trigger: {
                                    player: "useCard2",
                                },
                                filter: function (event, player) {
                                    return event.card && event.card.name == 'sha';
                                },
                                forced: true,
                                content: function () {
                                    'step 0'
                                    player.chooseTarget(get.prompt('qibing_changjian'), '为' + get.translation(trigger.card) + '增加一个目标，或取消并令' +
                                        get.translation(trigger.card) + '伤害＋1',
                                        function (card, player, target) {
                                            return !_status.event.sourcex.contains(target) && player.canUse('sha', target);
                                        }).set('sourcex', trigger.targets).set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, {
                                                name: 'sha'
                                            }, player, player);
                                        });
                                    'step 1'
                                    if (result.bool) {
                                        if (!event.isMine() && !_status.connectMode) game.delayx();
                                        event.target = result.targets[0];
                                        player.line(event.target);
                                        trigger.targets.push(event.target);
                                    } else {
                                        if (!trigger.baseDamage) ttrigger.baseDamage = 1;
                                        trigger.baseDamage++;
                                    }
                                },
                            },
                            "qibing_liangju": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    player: "useCardToPlayered",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.card.name == 'sha';
                                },
                                content: function () {
                                    "step 0"
                                    trigger.target.judge(function (card) {
                                        return (get.suit(card) == 'spade') ? -2 : 0;
                                    });
                                    "step 1"
                                    if (result.judge < 0) {
                                        trigger.getParent().directHit.add(trigger.target);
                                    }
                                },
                                group: ["qibing_liangju_judge"],
                                subSkill: {
                                    judge: {
                                        audio: 'qibing_liangju',
                                        trigger: {
                                            target: "useCardToTargeted",
                                        },
                                        filter: function (event, player) {
                                            if (event.player == player) return false;
                                            if (event.card.name == 'sha') return true;
                                            return false;
                                        },
                                        forced: true,
                                        content: function () {
                                            "step 0"
                                            player.judge(function (card) {
                                                return (get.suit(card) == 'heart') ? 2 : -1;
                                            });
                                            "step 1"
                                            if (result.judge > 0) {
                                                trigger.getParent().excluded.add(player);
                                            }
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //zhangyi
                            "ex_lianheng": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    player: 'phaseBegin',
                                },
                                forced: true,
                                content: function () {
                                    var list = game.filterPlayer(function (current) {
                                        current.removeSkill('ex_lianheng_mark');
                                        if (current !== player) {
                                            current.link(true);
                                        }
                                        return current.group != 'daqin';
                                    });
                                    if (list.length > 1) {
                                        var target = list.randomGet();
                                        player.line(target);
                                        target.addSkill('ex_lianheng_mark');
                                    }
                                },
                                group: ['ex_lianheng_init', 'ex_lianheng_die', 'ex_lianheng_draw', 'ex_lianheng_protect'],
                                subSkill: {
                                    mark: {
                                        charlotte: true,
                                        marktext: '横',
                                        mark: true,
                                        intro: {
                                            content: function () {
                                                if (_status.kangqinEvent == '合纵连横') return '不能对秦势力角色和已横置的角色造成伤害且回合开始阶段与秦势力角色各摸两张牌';
                                                return '不能对秦势力角色造成伤害且回合开始阶段与秦势力角色各摸两张牌';
                                            },
                                        },
                                    },
                                    init: {
                                        trigger: {
                                            global: 'gameDrawAfter'
                                        },
                                        forced: true,
                                        content: function () {
                                            var list = game.filterPlayer(function (current) {
                                                return current.group != 'daqin';
                                            });
                                            if (list.length) {
                                                var target = list.randomGet();
                                                player.line(target);
                                                target.addSkill('ex_lianheng_mark');
                                            }
                                        },
                                    },
                                    die: {
                                        trigger: {
                                            player: 'die'
                                        },
                                        forceDie: true,
                                        forced: true,
                                        content: function () {
                                            var list = game.filterPlayer(function (current) {
                                                return target.hasSkill('ex_lianheng_mark');
                                            });
                                            for (var i = 0; i < list.length; i++) {
                                                var target = list[i];
                                                player.line(target);
                                                target.removeSkill('ex_lianheng_mark');
                                            }
                                        },
                                    },
                                    draw: {
                                        trigger: { global: 'phaseBegin' },
                                        forced: true,
                                        filter: function (event, player) {
                                            return event.player.hasSkill('ex_lianheng_mark');
                                        },
                                        content: function () {
                                            const list = game.filterPlayer(function (current) {
                                                return current.hasSkill('ex_lianheng_mark') || current.group == "daqin";
                                            });

                                            list.forEach((person) => {
                                                person.draw(2);
                                            })
                                        },
                                    },
                                    protect: {
                                        trigger: { player: 'damageBegin4' },
                                        forced: true,
                                        charlotte: true,
                                        filter: function (event, player) {
                                            return event.source && event.source.hasSkill('ex_lianheng_mark') && (player.group == "daqin" || (_status.kangqinEvent == '合纵连横' && target.isLinked()))
                                        },
                                        content: function () {
                                            trigger.cancel();
                                        },
                                        mark: true,
                                        aiCheck: function (target) {
                                            if (target.group == "daqin") return 0;
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (target.countCards('e', function (card) {
                                                return get.value(card, target) <= 0;
                                            })) att *= 2;
                                            return att / Math.sqrt(Math.max(1, target.hp));
                                        },
                                        ai: {
                                            effect: {
                                                target: function (card, player, target, current) {
                                                    if (get.tag(card, 'damage') && !player.hasSkillTag('jueqing', false, target)) return 'zerotarget';
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                            "ex_xichu": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    target: 'useCardToTarget'
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.card.name == 'sha' && game.hasPlayer(function (current) {
                                        return current != player && current != event.player && lib.filter.targetInRange(event.card, event.player,
                                            current);
                                    });
                                },
                                content: function () {
                                    'step 0'
                                    trigger.player.chooseToDiscard('戏楚：弃置一张点数为6的牌，或令' + get.translation(player) + '将此【杀】转移', function (card) {
                                        return get.number(card) == 6;
                                    }).ai = function (card) {
                                        return 100 - get.value(card)
                                    };
                                    'step 1'
                                    if (!result.bool) {
                                        player.chooseTarget(true, '将此【杀】转移给' + get.translation(trigger.player) + '攻击范围内的一名角色', true, function (card,
                                            player, target) {
                                            var trigger = _status.event.getTrigger();
                                            return target != player && target != trigger.player && !trigger.targets.contains(target) && lib.filter.targetInRange(
                                                trigger.card, trigger.player, target)
                                        }).ai = function (target) {
                                            var trigger = _status.event.getTrigger();
                                            return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        };
                                    } else event.finish();
                                    'step 2'
                                    if (result.bool) {
                                        player.line(result.targets[0]);
                                        trigger.targets[trigger.targets.indexOf(player)] = result.targets[0];
                                    }
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target) {
                                            if (card.name == 'sha' && !player.countCards('h', {
                                                number: '6'
                                            }) && game.hasPlayer(function (current) {
                                                return current != player && current != target && lib.filter.targetInRange(card, player, current);
                                            })) return 'zeroplayertarget';
                                        },
                                    },
                                },
                                group: ["ex_xichu_mad"],
                                subSkill: {
                                    mad: {
                                        trigger: { player: 'phaseJieshuBegin' },
                                        forced: true,
                                        content: function () {
                                            var list = game.filterPlayer(function (target) {
                                                return target != player && !target.isMad();
                                            });
                                            if (list.length) {
                                                var target = list.randomGet();
                                                player.line(target, 'green');
                                                target.goMad({ player: 'phaseAfter' });
                                            }
                                        },
                                    },
                                }
                            },
                            "ex_xiongbian": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    target: 'useCardToTarget'
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return get.type(event.card) == 'trick';
                                },
                                content: function () {
                                    'step 0'
                                    player.judge(function (result) {
                                        if (result.number == 6) return 1;
                                        return -1;
                                    }).set('no6', get.attitude(player, trigger.player) > 0);
                                    'step 1'
                                    if (result.bool) {
                                        trigger.getParent().targets.length = 0;
                                        trigger.getParent().all_excluded = true;
                                        player.gain(result.card, 'gain2');
                                    }
                                },
                            },
                            "ex_qiaoshe": {
                                audio: 'ext:大战七阴/audio:true',
                                trigger: {
                                    global: 'judge',
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    var card = trigger.player.judging[0];
                                    var judge0 = trigger.judge(card);
                                    var judge1 = 0;
                                    var choice = trigger.no6 && card.number == 6 ? '+1' : 'cancel2';
                                    var attitude = get.attitude(player, trigger.player);
                                    var list = [];
                                    for (var i = -4; i <= 4; i++) {
                                        if (i == 0) continue;
                                        list.push((i > 0 ? '+' : '') + i);
                                        if (!trigger.no6) {
                                            var judge2 = (trigger.judge({
                                                name: get.name(card),
                                                suit: get.suit(card),
                                                number: get.number(card) + i,
                                                nature: get.nature(card),
                                            }) - judge0) * attitude;
                                            if (judge2 > judge1) {
                                                choice = (i > 0 ? '+' : '') + i;
                                                judge1 = judge2;
                                            }
                                        }
                                    }
                                    list.push('cancel2');
                                    player.chooseControl(list).set('ai', function () {
                                        return _status.event.choice;
                                    }).set('choice', choice).prompt = get.prompt2(event.name);
                                    'step 1'
                                    if (result.control != 'cancel2') {
                                        player.logSkill(event.name, trigger.player);
                                        game.log(trigger.player, '判定结果点数', '#g' + result.control);
                                        player.popup(result.control, 'fire');
                                        if (!trigger.fixedResult) trigger.fixedResult = {};
                                        if (!trigger.fixedResult.number) trigger.fixedResult.number = get.number(trigger.player.judging[0]);
                                        trigger.fixedResult.number += parseInt(result.control);
                                    }
                                },
                            },

                            "nushou_jinnu": {
                                audio: 'ext:合纵抗秦:true',
                                trigger: {
                                    player: "phaseBefore",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return !player.getEquip('qinnu');
                                },
                                content: function () {
                                    var card = game.createCard('qinnu', Math.random() < 0.5 ? 'diamond' : 'club', 1);
                                    player.chooseUseTarget(card, true);
                                },
                            },
                            "qinnu_skill": {
                                mod: {
                                    cardUsable: function (card, player, num) {
                                        if (card.name == 'sha') {
                                            return num + 1;
                                        }
                                    },
                                },
                                inherit: 'qinggang_skill',
                            },

                            // shangyang
                            "ex_bianfa": {
                                audio: 'ext:合纵抗秦:true',

                                mod: {
                                    // selectTarget: function (card, player, range) {
                                    //     if (_status.kangqinEvent == '变法图强' && card.name == 'shangyangbianfa' && range[1] != -1) range[1]++;
                                    // },
                                },
                                enable: "chooseToUse",
                                filterCard: function (card) {
                                    return get.type(card) == 'trick';
                                },
                                viewAs: {
                                    name: "shangyangbianfa",
                                },
                                viewAsFilter: function (player) {
                                    if (!player.countCards('h', {
                                        type: 'trick'
                                    })) return false;
                                },
                                prompt: "将一张普通锦囊牌当作【商鞅变法】使用",
                                check: function (card) {
                                    return 9 - get.value(card);
                                },
                                ai: {
                                    basic: {
                                        order: 10,
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
                            },
                            "ex_limu": {
                                audio: 'ext:合纵抗秦:true',
                                trigger: {
                                    player: "useCard",
                                },
                                forced: true,
                                filter: function (event) {
                                    return get.type(event.card) == 'trick';
                                },
                                content: function () {
                                    trigger.nowuxie = true;
                                },
                            },
                            "ex_kencao": {
                                audio: 'ext:合纵抗秦:true',
                                init: function (player) {
                                    if (!player.storage.ex_kencao) player.storage.ex_kencao = 0;
                                },
                                marktext: "功",
                                intro: {
                                    content: "当前有#个“功”标记",
                                },
                                trigger: {
                                    global: "damageAfter",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.source && event.source.group == 'daqin' && event.source.isAlive();
                                },
                                content: function () {
                                    if (trigger.source == player) {
                                        player.markSkill('ex_kencao');
                                        player.storage.ex_kencao += trigger.num;
                                        player.syncStorage('ex_kencao');
                                        game.log(player, '获得了', trigger.num, '个“功”标记');
                                        if (player.storage.ex_kencao >= 3) {
                                            game.log(player, '移去了', player.storage.ex_kencao, '个“功”标记');
                                            player.storage.ex_kencao = 0;
                                            player.syncStorage('ex_kencao');
                                            if (player.storage.ex_kencao <= 0) player.unmarkSkill('ex_kencao');
                                            player.gainMaxHp();
                                            player.recover();
                                        }
                                    } else {
                                        player.line(trigger.source);
                                        if (trigger.source.storage.ex_kencao == undefined) trigger.source.storage.ex_kencao = 0;
                                        trigger.source.markSkill('ex_kencao');
                                        trigger.source.storage.ex_kencao += trigger.num;
                                        trigger.source.syncStorage('ex_kencao');
                                        game.log(trigger.source, '获得了', trigger.num, '个“功”标记');
                                        if (trigger.source.storage.ex_kencao >= 3) {
                                            game.log(trigger.source, '移去了', trigger.source.storage.ex_kencao, '个“功”标记');
                                            trigger.source.storage.ex_kencao = 0;
                                            trigger.source.syncStorage('ex_kencao');
                                            if (trigger.source.storage.ex_kencao <= 0) trigger.source.unmarkSkill('ex_kencao');
                                            trigger.source.gainMaxHp();
                                            trigger.source.recover();
                                        }
                                    }
                                },
                            },
                            "shangyangbianfa_dying": {
                                trigger: {
                                    player: "dying",
                                },
                                forced: true,
                                popup: false,
                                direct: true,
                                charlotte: true,
                                locked: true,
                                filter: function (event, player) {
                                    return event.getParent().type == 'shangyangbianfa';
                                },
                                content: function () {
                                    'step 0'
                                    player.judge(function (card) {
                                        return get.color(card) == 'black' ? -1 : 0;
                                    })
                                    'step 1'
                                    if (result.color == 'black') {
                                        game.countPlayer(function (current) {
                                            if (current != player) current.addTempSkill('shangyangbianfa_dying_nosave', '_saveAfter');
                                        });
                                    }
                                },
                                subSkill: {
                                    nosave: {
                                        mod: {
                                            cardSavable: function () {
                                                return false
                                            }
                                        },
                                    },
                                },
                            },
                            "ex_lianzuo": {
                                trigger: { source: 'damageSource' },
                                filter: function (event) {
                                    // old version: any damage can trigger ex_lianzuo
                                    // if (event._notrigger.contains(event.player)) return false;
                                    // return event.getParent().name != 'ex_lianzuo';
                                    return event.card && event.card.name == "shangyangbianfa";
                                },
                                logSkill: 'source',
                                content: function () {
                                    const damage = trigger.num, target1 = trigger.player;

                                    "step 0"
                                    player.chooseTarget(`请选择一名其他角色，对该角色造成${damage}点伤害。`, function (card, player, target) {
                                        return target != player && target != target1;
                                    }).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });

                                    "step 1"
                                    game.log(result.targets)
                                    if (result.bool && result.targets && result.targets.length) {
                                        player.logSkill('ex_lianzuo', result.targets);
                                        player.line(result.targets[0], 'green');
                                        result.targets[0].damage(damage);
                                    }
                                },
                                ai: {
                                    threaten: 0.6,
                                    maixie: true,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            if (!target.hasFriend()) return;
                                            if (get.tag(card, 'damage')) return [1, 0, 0, -0.7];
                                        },
                                    },
                                },
                            },
                            //zhaogao
                            ex_zhilu: {
                                audio: 'ext:合纵抗秦:true',
                                group: 'ex_zhilu2',
                                enable: ['chooseToUse', 'chooseToRespond'],
                                viewAs: {
                                    name: 'sha'
                                },
                                filterCard: {
                                    color: 'black'
                                },
                                check: function (card) {
                                    return 1 / (get.value(card) || 0.5)
                                },
                                viewAsFilter: function (player) {
                                    return player.countCards('h', {
                                        color: 'black'
                                    }) > 0;
                                },
                                ai: {
                                    respondSha: true,
                                    skillTagFilter: function (player) {
                                        return player.countCards('h', {
                                            color: 'black'
                                        }) > 0;
                                    },
                                },
                            },
                            ex_zhilu2: {
                                audio: 'ex_zhilu',
                                enable: ['chooseToUse', 'chooseToRespond'],
                                viewAs: {
                                    name: 'shan'
                                },
                                filterCard: {
                                    color: 'red'
                                },
                                check: function (card) {
                                    return 1 / (get.value(card) || 0.5)
                                },
                                viewAsFilter: function (player) {
                                    return player.countCards('h', {
                                        color: 'red'
                                    }) > 0;
                                },
                                ai: {
                                    respondShan: true,
                                    skillTagFilter: function (player) {
                                        return player.countCards('h', {
                                            color: 'red'
                                        }) > 0;
                                    },
                                },
                            },
                            ex_gaizhao: {
                                audio: 'ext:合纵抗秦:true',
                                trigger: {
                                    target: 'useCardToTarget'
                                },
                                usable: 1,

                                filter: function (event, player) {
                                    if (get.info(event.card).multitarget) return false;
                                    if (get.name(event.card) != 'sha' && get.type(event.card) != 'trick') return false;
                                    return game.hasPlayer(function (current) {
                                        return current != player && !event.targets.contains(current);
                                    });
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget(get.prompt(event.name), '将' + get.translation(trigger.card) + '转移给其他角色', function (card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        return !trigger.targets.contains(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                    }).set('rawEffect', get.effect(player, trigger.card, trigger.player, player))
                                        .ai = function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var rawEffect = _status.event.rawEffect;
                                            var effectTarget = 0.1 + get.effect(target, trigger.card, trigger.player, _status.event.player);
                                            return effectTarget - rawEffect;
                                        };
                                    'step 1'
                                    if (result.bool) {
                                        var target = result.targets[0];
                                        player.logSkill(event.name, target);
                                        trigger.targets[trigger.targets.indexOf(player)] = target;
                                    }
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target) {
                                            if (get.attitude(player, target) > 0 || _status.gaizhaoEffect) return;
                                            if (get.name(card) != 'sha' && get.type(card) != 'trick') return;
                                            if (get.info(card).multitarget || get.info(card).selectTarget == -1) return;
                                            var players = game.filterPlayer(function (current) {
                                                return current != target;
                                            });
                                            if (!players.length) return;
                                            // _status.gaizhaoEffect = true;
                                            // for (var i = 0; i < players.length; i++) {
                                            //     if (get.effect(players[i], card, player, player) <= 0) {
                                            //         delete _status.gaizhaoEffect;
                                            //         return 'zeroplayertarget';
                                            //     }
                                            // }
                                            // delete _status.gaizhaoEffect;
                                        }
                                    },
                                }
                            },
                            ex_haizhong: {
                                global: 'ex_haizhong_debuff',
                                audio: 'ext:合纵抗秦:true',
                                intro: {
                                    content: 'mark',
                                },
                                trigger: {
                                    global: 'recoverAfter'
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.player.group != 'daqin' && event.player.isAlive();
                                },
                                logTarget: 'player',
                                content: function () {
                                    'step 0'
                                    if (!trigger.player.storage[event.name]) trigger.player.storage[event.name] = 0;
                                    trigger.player.storage[event.name]++;
                                    event.num = Math.max(1, trigger.player.storage[event.name]);
                                    trigger.player.markSkill(event.name);
                                    if (_status.dying.length) return event.finish();
                                    trigger.player.chooseToDiscard('he', '害忠：弃置一张红色牌，或受到' + event.num + '点伤害', {
                                        color: 'red'
                                    }).ai = function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var value = get.value(card);
                                        if (card.name == 'du' && trigger.player.hp <= 1) return -1;
                                        if (10 - value < 0) return 0.5;
                                        return 10 - value;
                                    };
                                    'step 1'
                                    if (!result.bool) {
                                        if (trigger.player.hp <= num) trigger.player.addTempSkill('ex_haizhong_dying', 'damageAfter');
                                        trigger.player.damage(num);
                                    }
                                },
                                subSkill: {
                                    dying: {
                                        charlotte: true,
                                        ai: {
                                            effect: {
                                                target: function (card, player, target) {
                                                    if (get.tag(card, 'recover') && player != target) return 'zeroplayertarget';
                                                },
                                            },
                                        },
                                    },
                                    debuff: {
                                        ai: {
                                            effect: {
                                                player: function (card, player, target) {
                                                    if (player.group == 'daqin' || !get.tag(card, 'recover') || target != player) return;
                                                    if (get.name(card) == 'jiu' && !player.isDying()) return;
                                                    if (!player.hasCard(function (otherCard) {
                                                        return otherCard != card && get.color(otherCard) == 'red' && (get.value(card) < 10 || player.storage.ex_haizhong >= player.hp);
                                                    })) return 'zeroplayertarget';
                                                },
                                                target: function (card, player, target) {
                                                    if (target.group == 'daqin' || !get.tag(card, 'recover') || player == target) return;
                                                    if (!target.countCards('h')) return 'zeroplayertarget';
                                                },
                                            },
                                        },
                                    },
                                }
                            },
                            ex_aili: {
                                audio: 'ext:合纵抗秦:true',
                                trigger: {
                                    player: 'phaseUseBegin'
                                },
                                forced: true,
                                content: function () {
                                    var list = [];
                                    for (var i = 0; i < 2; i++) {
                                        var cardx = get.cardPile2(function (card) {
                                            return get.type(card) == 'trick' && !list.contains(card)
                                        });
                                        if (cardx) list.push(cardx);
                                    }
                                    if (list.length) player.gain(list, 'draw');
                                },
                            },
                            ex_zaiguan: {
                                trigger: { global: 'die' },
                                // frequent: true,
                                filter: function (event, player) {
                                    return !event.player.hasMark("ex_zaiguan_control");
                                },
                                content: function () {
                                    const person = trigger.player;
                                    const hands = person.getCards('h'), equips = person.getCards('e');
                                    person.revive(Infinity);
                                    person.style = person.style + ";filter:grayscale(100%);";
                                    person.gain(hands, person, "giveAuto");
                                    equips.forEach((equip) => {
                                        person.equip(equip);
                                    })

                                    if (!person.hasMark("ex_zaiguan_control")) {
                                        person.addTempSkill("ex_zaiguan_control");
                                        person.addSkill("corpse");
                                        person.addMark("ex_zaiguan_control", 1, false);
                                    }
                                },
                                group: ["ex_zaiguan_identity", 'ex_zaiguan_control']
                            },
                            ex_zaiguan_identity: {
                                trigger: { global: 'dieAfter' },
                                forced: true,
                                // frequent: true,
                                filter: function (event, player) {
                                    return event.player.hasMark("ex_zaiguan_control");
                                },
                                content: function () {
                                    const person = trigger.player;
                                    person.identity = player.identity;
                                    if (person.identity === 'zhu') person.identity = 'zhong';
                                    if (person.identity === 'nei') person.identity = '？';
                                    person.setIdentity('尸体');
                                    person.node.identity.dataset.color = 'black';
                                    if (get.mode() == 'doudizhu') {
                                        person.identity = player.identity;
                                        person.setIdentity('尸体');
                                    }
                                }
                            },
                            "corpse": {
                                mod: {
                                    targetEnabled: function (card, player, target) {
                                        if (get.type(card) == "delay") {
                                            return false;
                                        }
                                    },
                                }
                            },
                            ex_zaiguan_control: {
                                charlotte: true,
                                marktext: "尸",
                                intro: {
                                    content: "无法成为延时类锦囊目标。下个回合开始时，将受到赵高控制。回合结束时死亡。",
                                },
                                forced: true,
                                trigger: { global: 'phaseBeginStart' },
                                filter: function (event, player) {
                                    return player != event.player && !event.player._trueMe && event.player.countMark('ex_zaiguan_control') === 1;
                                },
                                logTarget: 'player',
                                skillAnimation: true,
                                animationColor: 'key',
                                content: function () {
                                    trigger.player._trueMe = player;
                                    game.addGlobalSkill('autoswap');
                                    if (trigger.player == game.me) {
                                        game.notMe = true;
                                        if (!_status.auto) ui.click.auto();
                                    }
                                    trigger.player.addSkill('ex_zaiguan_control2');
                                },
                            },
                            ex_zaiguan_control2: {
                                trigger: {
                                    player: ['phaseAfter', 'dieAfter'],
                                    global: 'phaseBefore',
                                },
                                lastDo: true,
                                charlotte: true,
                                forceDie: true,
                                forced: true,
                                silent: true,
                                content: function () {
                                    "step 0"
                                    player.chooseCardTarget({
                                        position: 'he',
                                        filterCard: true,
                                        selectCard: [1, Infinity],
                                        filterTarget: function (card, player, target) {
                                            return player != target;
                                        },
                                        ai1: function (card) {
                                            if (get.attitude(_status.event.player, _status.currentPhase) < 0 && _status.currentPhase.needsToDiscard() && card.name != 'du') return -1;
                                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                                if (get.type(ui.selected.cards[i]) == get.type(card) || (ui.selected.cards[i].name == 'du' && card.name != 'du')) return -1;
                                            };
                                            if (card.name == 'du') return 20;
                                            return (_status.event.player.countCards('h') - _status.event.player.hp);
                                        },
                                        ai2: function (target) {
                                            if (get.attitude(_status.event.player, _status.currentPhase) < 0) return -1;
                                            var att = get.attitude(_status.event.player, target);
                                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                                if (target.hasSkillTag('nodu')) return 0;
                                                return 1 - att;
                                            }
                                            if (target.countCards('h') > _status.event.player.countCards('h')) return 0;
                                            return att - 4;
                                        },
                                        prompt: "请选择交出的牌和交给的对象"
                                    });

                                    "step 1"
                                    if (result.bool) {
                                        var target = result.targets[0];
                                        var cards = result.cards;
                                        target.gain(cards, player, 'give');
                                    }

                                    "step 2"
                                    player.removeSkill('ex_zaiguan_control2');
                                },
                                onremove: function (player) {
                                    if (player == game.me) {
                                        if (!game.notMe) game.swapPlayerAuto(player._trueMe)
                                        else delete game.notMe;
                                        if (_status.auto) ui.click.auto();
                                    }
                                    delete player._trueMe;
                                    player.die();
                                },

                            },

                            // miyue
                            "ex_zhangzheng": {
                                audio: 'ext:合纵抗秦:true',
                                trigger: {
                                    player: "phaseBefore",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.group != 'daqin';
                                    });
                                },
                                content: function () {
                                    'step 0'
                                    event.players = game.filterPlayer(function (current) {
                                        return current != player && current.group != 'daqin';
                                    }).sortBySeat();
                                    'step 1'
                                    if (event.players.length) {
                                        event.current = event.players.shift();
                                        player.line(event.current);
                                        if (event.current.countCards('h')) {
                                            event.current.chooseToDiscard('h', '弃置一张手牌或失去一点体力').set('ai', function (card) {
                                                return 7 - get.value(card);
                                            });
                                            event.tempbool = false;
                                        } else {
                                            event.tempbool = true;
                                        }
                                    } else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (event.tempbool || result.bool == false) {
                                        event.current.loseHp();
                                    }
                                    event.goto(1);
                                },
                            },
                            "ex_taihou": {
                                audio: 'ext:合纵抗秦:true',
                                trigger: {
                                    target: "useCardToTargeted",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.player != player &&
                                        event.player.sex == 'male' &&
                                        event.card &&
                                        (event.card.name == 'sha' || get.type(event.card) == 'trick');
                                },
                                content: function () {
                                    'step 0'
                                    player.line(trigger.player);
                                    var type = get.type(trigger.card);
                                    var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                                    trigger.player.chooseToDiscard('弃置一张' + get.translation(type) + '牌，否则' + get.translation(trigger.card) + '对' +
                                        get.translation(player) + '无效',
                                        function (card) {
                                            return get.type(card) == _status.event.cardType;
                                        }).set('ai', function (card) {
                                            if (_status.event.eff > 0) {
                                                return 10 - get.value(card);
                                            }
                                            return 0;
                                        }).set('cardType', type).set('eff', eff);
                                    'step 1'
                                    if (!result.bool) {
                                        trigger.getParent().excluded.add(player);
                                    }
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target) {
                                            if (player.sex != "male") return;
                                            var type = get.type(card);
                                            if (get.name(card) != 'sha' && type != 'trick') return;
                                            if (!player.hasCard(function (otherCard) {
                                                return otherCard != card && get.type(otherCard) == type &&
                                                    get.value(otherCard) < 10;
                                            })) return 'zeroplayertarget';
                                        },
                                    },
                                },
                                group: ["ex_taihou_others"],
                                subSkill: {
                                    others: {
                                        trigger: {
                                            global: 'phaseBeginStart'
                                        },
                                        forced: true,
                                        popup: false,
                                        charlotte: true,
                                        filter: function (event, player) {
                                            return event.player != player;
                                        },
                                        content: function () {
                                            'step 0'
                                            var target = game.findPlayer(function (current) {
                                                return current.name == 'ex_miyue';
                                            });

                                            event.target = target;
                                            if (target.isHealthy()) {
                                                event._result = {
                                                    control: '摸牌'
                                                };
                                            }
                                            else if (target.countCards('he') === 0) {
                                                event._result = {
                                                    control: '回血'
                                                };
                                            }
                                            else {
                                                trigger.player.chooseControl('摸牌', '回血').set('prompt', '始称太后：令芈月回复1点体力或交给其一张牌并令其摸一张牌').ai = function () {
                                                    if (get.attitude(trigger.player, target) > 0) return '回血';
                                                    return '摸牌';
                                                };
                                            }
                                            'step 1'
                                            if (result.control === "摸牌") {
                                                trigger.player.line(target);
                                                target.draw();
                                                if (trigger.player.sex == "male")
                                                    trigger.player.chooseCard('he', true, '太后：将一张牌交给' + get.translation(target));
                                            }
                                            else {
                                                trigger.player.line(target);
                                                target.recover();
                                                event.finish();
                                            }
                                            'step 2'
                                            trigger.player.give(result.cards, target, true);

                                        },
                                    },
                                }

                            },


                            "ex_youmie": {
                                audio: 'ext:合纵抗秦:true',
                                global: 'ex_youmie_ai',
                                prompt: "出牌阶段限一次，你可以将一张牌交给一名其他角色，若如此做，直到你的下个回合开始，该角色于其回合外无法使用或打出牌。",
                                enable: "phaseUse",
                                usable: 1,
                                filter: function (event, player) {
                                    return player.countCards('he') > 0;
                                },
                                discard: false,
                                line: true,
                                prepare: "give",
                                position: "he",
                                filterCard: true,
                                filterTarget: true,
                                check: function (card) {
                                    if (get.position(card) == 'e') return -1;
                                    return 5 - get.value(card);
                                },
                                content: function () {
                                    'step 0'
                                    target.gain(cards, player);
                                    'step 1'
                                    if (player.isAlive()) {
                                        target.loseMaxHp(true);
                                        target.addSkill('ex_youmie_debuff');
                                    }
                                },
                                ai: {
                                    order: 9,
                                    result: {
                                        target: function (player, target) {
                                            return -1;
                                        },
                                    },
                                },
                                group: ["ex_youmie_delete"],
                                subSkill: {
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter: function (player, tag, arg) {
                                            if (tag == 'directHit_ai') {
                                                if (!arg.target.hasSkillTag('ex_youmie_debuff') || _status.currentPhase == arg.target) return false;
                                            }
                                        },
                                    },
                                    debuff: {
                                        charlotte: true,
                                        mark: true,
                                        marktext: "灭",
                                        mod: {
                                            cardEnabled: function (card, player, target) {
                                                if (_status.currentPhase != player) return false;
                                            },
                                            cardEnabled2: function (card, player, target) {
                                                if (_status.currentPhase != player) return false;
                                            },
                                            cardUsable: function (card, player, target) {
                                                if (_status.currentPhase != player) return false;
                                            },
                                            cardRespondable: function (card, player, target) {
                                                if (_status.currentPhase != player) return false;
                                            },
                                            cardSavable: function (card, player, target) {
                                                if (_status.currentPhase != player) return false;
                                            },
                                        },
                                        intro: {
                                            content: "回合外不能使用或打出卡牌",
                                        },
                                        sub: true,
                                    },
                                    delete: {
                                        trigger: {
                                            player: ["phaseBefore", "die"],
                                        },
                                        forceDie: true,
                                        forced: true,
                                        popup: false,
                                        filter: function (event, player) {
                                            return game.hasPlayer(function (current) {
                                                return current.hasSkill('ex_youmie_debuff');
                                            });
                                        },
                                        content: function () {
                                            for (var i = 0; i < game.players.length; i++) {
                                                if (game.players[i].hasSkill('ex_youmie_debuff')) {
                                                    player.line(game.players[i]);
                                                    game.players[i].removeSkill('ex_youmie_debuff');
                                                }
                                            }
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "ex_yintui": {
                                audio: 'ext:合纵抗秦:true',
                                trigger: {
                                    player: "loseEnd",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    if (player.countCards('h')) return false;
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].original == 'h') return true;
                                    }
                                    return false;
                                },
                                content: function () {
                                    player.turnOver();
                                },
                                ai: {
                                    noh: true,
                                    skillTagFilter: function (player, tag) {
                                        if (tag == 'noh') {
                                            if (player.countCards('h') != 1 || player.isTurnedOver()) return false;
                                        }
                                    },
                                },
                                group: ["ex_yintui_damage"],
                                subSkill: {
                                    damage: {
                                        audio: 'ex_yintui',
                                        trigger: {
                                            player: "damageBegin3",
                                        },
                                        forced: true,
                                        filter: function (event, player) {
                                            return player.isTurnedOver();
                                        },
                                        content: function () {
                                            trigger.num--;
                                            player.draw();
                                        },
                                        ai: {
                                            "maixie": true,
                                            skillTagFilter: function (player, tag) {
                                                if (tag == 'maixie') {
                                                    if (!player.isTurnedOver()) return false;
                                                }
                                            },
                                            effect: {
                                                target: function (card, player, target) {
                                                    if (player.hasSkillTag('jueqing')) return;
                                                    if (target.hujia) return;
                                                    if (!target.isTurnedOver()) return;
                                                    if (get.tag(card, 'damage')) return [1, 2];
                                                },
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },
                        },
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
                            // config
                            update: "更新情况",
                            thanks: "鸣谢",
                            warning: "警告",

                            //classification
                            against7devil: "大战七阴",
                            against7devil_boss: "挑战boss加强包",
                            against7devil_fusion: "融包",
                            against7devil_yin: "阴间包",
                            against7devil_ex: "扩包",

                            //character
                            "re_boss_caocao": "界魏武大帝",
                            "fusion_shen_sunce": "界神孙策",
                            "succubus": "魅魔",
                            "re_boss_huatuo": "界药坛圣手",
                            "re_boss_zhouyu": "界赤壁火神",
                            "yin_caojinyu": "阴间曹金玉",
                            "norecover": "回血亡",
                            "fusion_xuhuang": "融徐晃",
                            "liuxingyaodi": "六星耀帝",
                            "re_boss_zhenji": "界洛水仙子",
                            "fusion_honglianpo": "红脸婆",
                            "re_fusion_honglianpo": "界红脸婆",
                            "ex_diaochan": "扩貂蝉",
                            "zhizunwudi": "至尊吴帝",
                            "luanshizhuhou": "乱世诸侯",
                            // "yitongjindi": "一统晋帝",
                            "re_nianshou": "界年兽",
                            "barbarian_king": "蛮王",
                            "ex_yingzheng": "扩嬴政",
                            "ex_zhaoji": "扩赵姬",
                            "ex_baiqi": "扩白起",
                            "ex_zhangyi": "扩张仪",
                            "ex_shangyang": "扩商鞅",
                            "ex_zhaogao": "扩赵高",
                            "ex_miyue": "扩芈月",

                            // skill
                            shenhu: "神护",
                            shenhu_info: "锁定技，你不能成为延时类锦囊的目标",

                            // fusion_shen_sunce
                            repinghe: "冯河",
                            repinghe_info: "①锁定技，你的手牌上限基数等于你的体力上限。②当你受到其他角色造成的伤害时，若你有牌且你的体力上限大于1，则你防止此伤害，减一点体力上限并将一张手牌交给一名其他角色。然后若你拥有〖英霸〗，则伤害来源获得一个“平定”标记。",

                            // succubus
                            yuxin: "驭心",
                            yuxin_info: "出牌阶段限两次，你可以展示两张花色相同的手牌并分别交给两名其他角色，然后令这两名角色拼点，没赢的角色获得1个“魅惑”标记。拥有2个或更多“魅惑”的角色回合即将开始时，该角色移去其所有“魅惑”，此回合改为由你操控。",

                            // yin_caojinyu
                            yinyuqi: '隅泣',
                            yinyuqi_info: '每回合限X次。当有角色受到伤害后，若你至其的距离不大于<span class=thundertext>0</span>，则你可以观看牌堆顶的<span class=firetext>3</span>张牌。你将其中至多<span class=greentext>1</span>张牌交给受伤角色，然后可以获得剩余牌中的至多<span class=yellowtext>1</span>张牌，并将其余牌以原顺序放回牌堆顶。（X为所有数字中最大值）',
                            yinshanshen: '善身',
                            yinshanshen_info: '当有角色死亡时，你可令你的〖隅泣〗中的一个具有颜色的数字+2。然后若你未对该角色造成过伤害，则你回复1点体力。',
                            yinxianjing: '娴静',
                            yinxianjing_info: '准备阶段，你可令你的〖隅泣〗中的一个具有颜色的数字+1。若你的体力值等于体力上限，则你可以重复一次此流程。',

                            //fuxion_xuhuang
                            famine: '饥荒',
                            famine_info: "出牌阶段限七次，你可以与一名其他角色进行“谋弈”：<br>围城断粮：若其判定区有【兵粮寸断】，获得其一张牌，否则你将一张牌堆顶的牌当做【兵粮寸断】对其使用且无距离限制。<br>擂鼓进军：你视为对其使用一张【决斗】。",
                            shipo: '势迫',
                            shipo_info: '结束阶段，你可以令一名体力值少于你的角色或所有判定区有【兵粮寸断】的其他角色依次选择一项：1. 弃置一张牌；2. 令你摸一张牌。',

                            // liuxingyaodi
                            renjun: '仁君',
                            renjun_info: '锁定技，当一名角色回复体力时，你随机获得一个蜀势力角色的所有技能',
                            boss_rende: '仁德',
                            boss_rende_info: '出牌阶段，若你有杀，你可以展示所有手牌并弃置其中的杀，然后令任意名角色回复一点体力。然后你摸X张牌。（X为以此法恢复体力的角色数）',

                            ex_yuhun: "驭魂",
                            ex_yuhun_info: "出牌阶段限一次，你可以弃置任意张不同花色的牌召唤等量阵营与你相同的【傀儡】随机成为你的下家或上家(场上数量不能超过4)。<br><b>【傀儡】</b>：①其初始体力值为3且每轮游戏随机增加一点体力上限或回复一点体力；②你与【傀儡】不能指定对方为目标且每名【傀儡】令你或其与其他角色计算距离-1；③其回合开始前改为摸两张牌，你使用牌后其对你指定的目标再次使用此牌(基本牌或普通锦囊牌)；④其视为拥有你装备区牌的效果，你视为拥有其的技能；⑤你死亡后所有【傀儡】立即死亡。",
                            ex_kongshen: "控身",
                            ex_kongshen_info: "你的回合结束阶段，你可以摸X张牌，并回复 4-X 点体力；然后你可以令一名【傀儡】将武将牌替换为场下随机同性别武将。(X为场上傀儡数)",

                            // re_fusion_honglianpo
                            rewangshi: "往事",
                            rewangshi_info: "锁定技，你存活时，敌方角色的回合开始时，你选择一项，令其于本回合不能使用或打出一种类型的牌（基本、锦囊、装备）。",
                            rexuechi: '血池',
                            rexuechi_info: '锁定技，你的回合结束时，令一名其他角色失去2点体力。',

                            // zhizunwudi
                            wuye: '吴业',
                            wuye_info: '锁定技，当你使用或失去装备牌导致装备区发生变化时，你随机获得一个吴势力角色的所有技能',
                            boss_zhiheng: '制衡',
                            boss_zhiheng_info: '出牌阶段限一次，你可以弃置所有手牌，然后从牌堆中随机获得一张装备牌',

                            // luanshizhuhou
                            hunzhan: '混战',
                            hunzhan_info: '锁定技，当你造成一点伤害后，你随机获得一个群势力角色的所有技能。',
                            qibing: '起兵',
                            qibing_info: '准备阶段，你可以选择一名敌方角色，若如此做，视为对其使用了一张杀',

                            // yitongjindi
                            yuquan: '驭权',
                            yuquan_info: '隐匿技，锁定技，当你登场后，你随机获得一个晋势力角色的所有技能。',
                            chengbing: '称病',
                            chengbing_info: '当你受到伤害后，你进入隐匿状态。',

                            // qinshihuang
                            ex_yitong: "一统",
                            ex_yitong_info: "锁定技，当你使用【杀】、【过河拆桥】、【顺手牵羊】、【火攻】、【决斗】时，你令所有不为此牌目标的非秦势力角色也成为此牌的目标。你使用【杀】和【顺手牵羊】无距离限制。",
                            ex_shihuang: "始皇",
                            ex_shihuang_info: "锁定技，其他角色的回合结束后，你有X%的几率进行一个额外的回合（X为当前轮数*6，且X最大为100）。",
                            ex_liuhe: "六合",
                            ex_liuhe_info: "锁定技，摸牌阶段，你改为摸6张牌。",
                            ex_zulong: "祖龙",
                            ex_zulong_info: "锁定技，游戏开始时，你获得并装备【传国玉玺】和【真龙长剑】。",
                            ex_fenshu: "焚书",
                            ex_fenshu_info: "每回合限一次，非秦势力角色使用普通锦囊牌时，你可以取消此牌的所有目标。",
                            zhenlongchangjian_skill: "真龙长剑",
                            zhenlongchangjian_skill_info: "锁定技，你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标。",
                            chuanguoyuxi_skill: "传国玉玺",
                            chuanguoyuxi_skill_info: "出牌阶段开始时，你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】。",
                            zhenlongchangjian: "真龙长剑",
                            zhenlongchangjian_info: "锁定技，你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标。",
                            chuanguoyuxi: "传国玉玺",
                            chuanguoyuxi_info: "出牌阶段开始时，你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】。",


                            // zhaoji
                            "zhaoji_shanwu": "善舞",
                            "zhaoji_shanwu_info": "锁定技，你使用【杀】指定目标后，你进行判定，若为黑色则敌方不能打出【闪】；当你成为【杀】的目标后，你进行判定，若为红色此杀无效。",
                            ex_daqi: "大期",
                            ex_daqi_info: "锁定技，你每使用或打出一张手牌、造成1点伤害、受到1点伤害，均会得到一个“期”标记。若你拥有的“期”标记大于等于10，则弃置所有“期”，体力回复至体力上限，并将手牌补至体力上限。",
                            "zhaoji_xianji": "献姬",
                            "zhaoji_xianji_info": "限定技，出牌阶段，你可以弃置所有手牌、装备牌和“期”标记，失去1点体力上限，然后立即发动大期的回复体力和补牌效果。",
                            "zhaoji_huoluan": "祸乱",
                            "zhaoji_huoluan_info": "锁定技，你每次发动大期的回复体力和补牌效果后，你对所有其他角色造成1点伤害。",

                            "qibing_changjian": "长剑",
                            "qibing_changjian_info": "锁定技，你的攻击范围+1，你使用【杀】指定目标后，可额外选择一名目标，或令此杀伤害+1。",
                            "qibing_liangju": "良驹",
                            "qibing_liangju_info": "锁定技，你使用【杀】指定目标后，令目标进行判定，若为黑桃则此杀不可被闪避；当你成为【杀】的目标后，你进行判定，若为红桃则此杀对你无效。",
                            "bubing_fangzhen": "方阵",
                            "bubing_fangzhen_info": "锁定技，当你成为非秦势力角色使用普通锦囊或【杀】的目标后，若其在你的攻击范围内，你进行判定，若为黑色，则视为你对其使用一张【杀】。",
                            "bubing_changbing": "长兵",
                            "bubing_changbing_info": "锁定技，你的攻击范围+2。",
                            qinnu: "秦弩",
                            qinnu_info: "当你使用【杀】指定一个目标后，你令其防具无效，你的出牌阶段内，可使用的【杀】数量+1；当你失去装备区里的【秦弩】，你令此牌销毁。",


                            // baiqi
                            "baiqi_wuan": "武安",
                            "baiqi_wuan_info": "锁定技，你存活时，所有秦势力角色使用【杀】的上限+1。",
                            "baiqi_shashen": "杀神",
                            "baiqi_shashen_info": "你可以将手牌中的任意一张牌当【杀】使用或打出。每回合你使用的第一张【杀】造成伤害后，摸一张牌。",
                            "baiqi_fachu": "伐楚",
                            "baiqi_fachu_info": "锁定技，当你因对非秦势力角色造成伤害而导致其进入濒死状态后，你随机废除其一个装备栏。若其没有装备栏可废除，其改为失去一点体力上限。之后若其死亡，视为被你击杀",
                            "baiqi_changsheng": "常胜",
                            "baiqi_changsheng_info": "锁定技，你使用【杀】无距离限制。",

                            // zhangyi
                            ex_lianheng: "连横",
                            ex_lianheng_info: "锁定技，游戏开始时，你令随机一名非秦势力的角色获得“横”标记。拥有“横”标记的角色使用的牌无法对秦势力角色造成伤害。你的回合开始时，场上所有角色弃置“横”标记并进入横置状态。若非秦势力角色数大于等于2，则你令随机一名非秦势力角色获得“横”标记。拥有“横”的角色回合开始时，你与其各摸两张牌。",
                            ex_xichu: "戏楚",
                            ex_xichu_info: "锁定技，当你成为【杀】的目标时，若其攻击范围内有其他角色，则该角色需弃置一张点数为6的牌，否则此【杀】的目标转移给其攻击范围内你指定的另一名角色。回合结束阶段，你可以令一名随机的其他角色进入混乱状态直到其下一回合结束。",
                            ex_xiongbian: "雄辩",
                            ex_xiongbian_info: "锁定技，当你成为普通锦囊牌的目标后，你判定。若结果点数为6，你取消此牌的所有目标，且你获得此判定牌。",
                            ex_qiaoshe: "巧舌",
                            ex_qiaoshe_info: "当一名角色进行判定时，你可以令判定结果的点数加减4以内的任意值。",

                            // shangyang
                            "ex_bianfa": "变法",
                            "ex_bianfa_info": "出牌阶段，你可以将一张普通锦囊牌当作【商鞅变法】使用。",
                            "ex_limu": "立木",
                            "ex_limu_info": "锁定技，你使用的普通锦囊牌不是【无懈可击】的合法目标。",
                            "ex_kencao": "垦草",
                            "ex_kencao_info": "锁定技，你存活时，秦势力角色每造成1点伤害，可获得一个“功”标记。若秦势力角色拥有大于等于3个“功”标记，则弃置所有“功”标记，增加1点体力上限，并回复1点体力。",
                            shangyangbianfa: "商鞅变法",
                            shangyangbianfa_info: "出牌阶段，对一名其他角色使用。你对目标角色造成随机1~3点伤害，若该角色以此法进入濒死状态，则其进行判定，若判定结果为黑色，则该角色本次濒死状态无法向其他角色求桃。",
                            shangyangbianfa_dying: "商鞅变法",
                            shangyangbianfa_dying_info: "出牌阶段，对一名其他角色使用。你对目标角色造成随机1~3点伤害，若该角色以此法进入濒死状态，则其进行判定，若判定结果为黑色，则该角色本次濒死状态无法向其他角色求桃。",
                            ex_lianzuo: "连坐",
                            ex_lianzuo_info: "当你使用【商鞅变法】对其他角色造成伤害时，你可以对令一名其他角色造成等量伤害。",

                            // zhaogao
                            "ex_zhilu": '指鹿',
                            "ex_zhilu2": '指鹿',
                            "ex_zhilu_info": '你可以将红色手牌当【闪】使用或打出；将黑色手牌当【杀】使用或打出。',
                            "ex_zhilu2_info": '你可以将红色手牌当【闪】使用或打出；将黑色手牌当【杀】使用或打出。',
                            ex_gaizhao: '改诏',
                            ex_gaizhao_info: '每回合限一次，当你成为【杀】或普通锦囊牌的目标后（借刀杀人除外），若场上有其他角色存活，你可以将此牌的目标改为其他不是该牌目标的角色。',
                            ex_haizhong: '害忠',
                            ex_haizhong_info: '锁定技，非秦势力角色回复体力后，该角色获得一个“害”标记。然后若场上没有处于濒死阶段的角色，其需要选择：1.弃置一张红色牌，2.受到你造成的X点伤害（X为该角色拥有的“害”标记）。',
                            ex_aili: '爰历',
                            ex_aili_info: '锁定技，你的出牌阶段开始时，你额外获得2张普通锦囊。',
                            ex_zaiguan: "载棺",
                            ex_zaiguan_info: "一名其他角色死亡时，你可用其对应的【尸体】替换之。【尸体】：尸体继承原先武将技能，体力回复至体力上限，不能成为延时锦囊的目标。尸体回合结束时，可将所有牌交给一名其他角色，然后其死亡。",
                            // ex_zaiguan_info: "一名其他角色死亡时，你可用其对应的【尸体】替换之。【尸体】：尸体继承原先武将技能，不能成为延时锦囊的目标，其不能使用或打出牌直到其下个回合开始。尸体回合结束时，可将所有牌交给一名其他角色，然后其死亡。",
                            ex_zaiguan_control: "载棺",

                            // miyue
                            ex_zhangzheng: "掌政",
                            ex_zhangzheng_info: "锁定技，你的回合开始时，所有非秦势力角色依次选择：1.弃置一张手牌；2.失去1点体力。",
                            ex_taihou: "太后",
                            ex_taihou_info: "锁定技，男性角色对你使用【杀】或普通锦囊牌时，需要额外弃置一张同种类型的牌，否则此牌无效。男性角色回合开始时，需令你回复1点体力或摸一张牌。",
                            "ex_youmie": "诱灭",
                            "ex_youmie_info": "出牌阶段限一次，你可以将一张牌交给一名角色，若如此做，该角色减少一点体力上限且直到你的下个回合开始，该角色于其回合外无法使用或打出牌。",
                            "ex_yintui": "隐退",
                            "ex_yintui_info": "锁定技，当你失去最后一张手牌时，你翻面。你的武将牌背面朝上时，若受到伤害，你可以选择令此伤害-1，然后摸一张牌。",


                            // unused
                            geju: '割据',
                            geju_info: '锁定技，当你受到一点伤害时，本轮其他角色与你计算距离时+1。',
                            geju_effect: '割据效果',
                        },
                    };

                    for (let character_name in against7devil.character) {
                        const path = 'ext:大战七阴/image/' + character_name + '.jpg';
                        //game.js will convert ext to different path in different devices
                        against7devil.character[character_name][4].push(path);
                    }

                    for (let card_name in against7devil.card) {
                        const path = 'ext:大战七阴/image/card/' + card_name + '.jpg';
                        //game.js will convert ext to different path in different devices
                        against7devil.card[card_name].image = path;
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
                如果喜欢或者想要贡献的话，欢迎联系作者或去下面链接给作者一个star哦！star越多，更新越积极哦~<br>
                <a class="github" href="https://github.com/S-N-O-R-L-A-X/noname-extension">https://github.com/S-N-O-R-L-A-X/noname-extension </a>
                如果想要加群的话，目前群号是214685856，请备注下从哪得知这个扩展的哈。
                `,
                clear: true,
                nopointer: true,
            },
            warning: {
                name: `<div style="color: red">本扩展可能与一些其他扩展冲突，如有冲突，请禁用本扩展或其他扩展！<br>
                目前已知冲突：活动武将和活动武将配件（导致关卡内人物变化）
                    </div>`,
                clear: true,
                nopointer: true,
            },
            update: {
                name: `<div class=".update">扩展版本：5.1<font size="4px">▶▶▶</font></div>`,
                version: 5.1,
                clear: true,
                intro: "点击查看此版本的更新内容",
                onclick: function () {
                    if (this.updateContent === undefined) {
                        const more = ui.create.div('.update-content', '<div style="border:2px solid gray">' + '<font size=3px>' +
                            '<li><span style="color:#006400">说明一</span>：<br>更新了新武将：扩商鞅，扩赵高，扩芈月。<br>'
                        );
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.updateContent = more;
                        this.innerHTML = '<div class=".update">扩展版本<font size="4px">▼▼▼</font></div>';
                    }
                    else {
                        this.parentNode.removeChild(this.updateContent);
                        delete this.updateContent;
                        this.innerHTML = '<div class=".update">扩展版本：5.1<font size="4px">▶▶▶</font></div>';
                    };
                }
            },
            thanks: {
                name: "鸣谢",
                init: "1",
                intro: "点击查看鸣谢名单",
                item: {
                    "1": "<font color=navy>鸣谢名单</font>",
                    "2": "无名杀本体作者们，扩展包假装无敌作者们，扩展包阳光包作者们，扩展包合纵抗秦作者们"
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