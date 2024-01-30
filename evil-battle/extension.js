game.import("extension", function (lib, game, ui, get, ai, _status) {
  // add useful functions

  function get7characters(arr) {
    return arr.randomSort().slice(0, 7);
  }

  if (!game.utils) {
    game.utils = {};
  }
  game.utils.giveMarkToOthers = (player) => {
    var list = game.filterPlayer();
    for (var i = 0; i < list.length; i++) {
      if (list[i] != player) {
        list[i].addMark('zongkui_mark', 1);
        player.line(list[i], 'green');
      }
    }
  }

  game.utils.initAllCharacters = () => {
    var list = [];
    if (_status.connectMode) var list = get.charactersOL();
    else {
      var list = [];
      for (var i in lib.character) {
        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
        list.push(i);
      }
    }
    game.countPlayer2(function (current) {
      list.remove(current.name);
      list.remove(current.name1);
      list.remove(current.name2);
      if (current.storage.rehuashen && current.storage.rehuashen.character) list.removeArray(current.storage.rehuashen.character)
    });
    _status.characterlist = list;
  }

  return {
    name: "大战七阴",
    content: function (config, pack) {
      // initiaiize group
      lib.init.css(lib.assetURL + "extension/大战七阴", "extension");
      lib.group.push("daqin");
      lib.translate.daqin = "秦";
      lib.groupnature.daqin = "thunder";

      if (!lib.config.custom_banned_characters) {
        lib.config.custom_banned_characters = new Set();
      }

      // initialize characters
      if (!lib.devil_characters) {
        lib.devil_characters = {};
      }

      lib.devil_characters.old_dc_list = ["xushao", "puyuan", "guozhao", "dc_guansuo", "dc_zhaoxiang",
        "xin_lingtong", "re_liuzan"];
      lib.devil_characters.dc_list = ["caojinyu", "wanglang", "guanning", "re_sunyi", "lvlingqi", "re_panshu",
        "zhouyi", "re_nanhualaoxian", "dc_liuba", "dc_jiben", "shen_jiangwei", "shen_machao", "tenggongzhu",
        "caomao", "zhangxuan", "dc_zhouxuān", "xuelingyun", "shen_zhangfei", "shen_zhangjiao", "luyi",
        "sunlingluan", "wu_zhugeliang", "wu_luxun", "dc_xujing", "yue_caiwenji"];
      lib.devil_characters.mobile_list = ["shen_xunyu", "yangbiao", "sp_duyu"];
      lib.devil_characters.ol_list = ["huangchengyan", "ol_weiyan", "panshu", "wolongfengchu", "shen_caopi", "wangyan"];
      lib.devil_characters.other_list = ["sp_xiahoushi", "tw_dongzhao"];

      lib.devil_characters.all_devil_list = [...lib.devil_characters.old_dc_list, ...lib.devil_characters.dc_list,
      ...lib.devil_characters.mobile_list, ...lib.devil_characters.ol_list, ...lib.devil_characters.other_list];

      if (lib.config.mode == "brawl") {
        if (!lib.storage.stage) lib.storage.stage = {};
        const old_dc_characters = get7characters(lib.devil_characters.old_dc_list);
        const dc_characters = get7characters(lib.devil_characters.old_dc_list.concat(lib.devil_characters.dc_list));
        const all_characters = get7characters(lib.devil_characters.all_devil_list);
        let all_devil_characters = lib.devil_characters.all_devil_list.slice(0);
        lib.config.custom_banned_characters.forEach((ch) => {
          all_devil_characters.remove(ch);
        })
        let needed = 7 - all_devil_characters.length;
        if (needed > 0) {
          game.utils.initAllCharacters();
          _status.characterlist.randomSort();
          all_devil_characters = all_devil_characters.concat(_status.characterlist.slice(0, needed));
        }

        const custom_characters = get7characters(all_devil_characters);

        lib.storage.stage["大战七阴"] = {
          name: "大战七阴",
          intro: `主公可供玩家设定，其余七位ai玩家从阴间武将中随机选中一个。
                    如果喜欢或者想要贡献的话，欢迎联系作者或去下面链接给作者一个star哦！star越多，更新越积极~<br>
                     <a class="github" href="https://github.com/S-N-O-R-L-A-X/noname-extension">https://github.com/S-N-O-R-L-A-X/noname-extension </a>`,
          scenes: [{
            name: "十周年老阴间",
            intro: "十周年老阴间乱斗",
            players: [
              { "name": "random", "name2": "none", "identity": "zhu", "position": 1, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] },
              { "name": old_dc_characters[0], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": old_dc_characters[1], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": old_dc_characters[2], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": old_dc_characters[3], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": old_dc_characters[4], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": old_dc_characters[5], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": old_dc_characters[6], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }
            ],
            cardPileTop: [],
            cardPileBottom: [],
            discardPile: [],
            gameDraw: true,
          }, {
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
          }, {
            name: "自定义阴间将池",
            intro: "自定义阴间将池乱斗",
            players: [
              { "name": "random", "name2": "none", "identity": "zhu", "position": 1, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": true, "handcards": [], "equips": [], "judges": [] },
              { "name": custom_characters[0], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": custom_characters[1], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": custom_characters[2], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": custom_characters[3], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": custom_characters[4], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": custom_characters[5], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] },
              { "name": custom_characters[6], "name2": "none", "identity": "fan", "position": 0, "hp": null, "maxHp": null, "linked": false, "turnedover": false, "playercontrol": false, "handcards": [], "equips": [], "judges": [] }
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
            // character detail
            character: {
              "re_boss_caocao": ["male", "wei", 12, ["shenhu", "boss_guixin", "xiongcai"], ["zhu", "boss", "bossallowed"]],
              "fusion_shen_sunce": ["male", "shen", "1/8", ["shenhu", "hunzi", "boss_jiang", "yingba", "scfuhai", "repinghe"], ["zhu", "boss", "bossallowed"]],
              "succubus": ["female", "shen", 6, ["meihun", "rebiyue", "yuehun", "yunshen", "boss_guimei", "yuxin"], ["zhu", "boss", "bossallowed"]],
              "re_boss_huatuo": ["male", "qun", 6, ["shenhu", "chulao", "mazui", "boss_shengshou", "guizhen", "wuqin"], ["zhu", "boss", "bossallowed"]],
              "re_boss_zhouyu": ["male", "wu", 10, ["shenhu", "huoshen", "boss_honglian", "boss_xianyin", "boss_zhaohuo", "boss_honglianx"], ["zhu", "boss", "bossallowed"]],
              "math_caojinyu": ["female", "wei", 10, ["shenhu", "math_yuqi", "math_shanshen", "math_xianjing"], ["zhu", "boss", "bossallowed"]],
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
              "ex_zhaoji": ["female", "daqin", 4, ["ex_shanwu", "ex_daqi", "ex_xianji", "ex_huoluan"], ["zhu", "boss", "bossallowed", "forbidai"]],
              "ex_baiqi": ["male", "daqin", 8, ["shenhu", "ex_wuan", "ex_shashen", "ex_fachu", "ex_changsheng", "bubing_fangzhen", "qibing_liangju", "qibing_changjian", "ex_kencao", "nushou_jinnu"], ["zhu", "boss", "bossallowed"]],
              "ex_zhangyi": ["male", "daqin", 6, ["shenhu", "ex_lianheng", "ex_xiongbian", "ex_qiaoshe", "ex_xichu"], ["zhu", "boss", "bossallowed"]],
              "ex_shangyang": ["male", "daqin", 6, ["shenhu", "ex_bianfa", "ex_limu", "ex_kencao", "ex_lianzuo"], ["zhu", "boss", "bossallowed"]],
              "ex_zhaogao": ["male", "daqin", 6, ["shenhu", "ex_zhilu", "ex_gaizhao", "ex_haizhong", "ex_aili", "ex_zaiguan", "ex_kencao"], ["zhu", "boss", "bossallowed", "forbidai"]],
              "ex_miyue": ["female", "daqin", 8, ["shenhu", "ex_zhangzheng", "ex_taihou", "ex_youmie", "ex_yintui"], ["zhu", "boss", "bossallowed", "forbidai"]],
              "ex_lvbuwei": ["male", "daqin", 4, ["shenhu", "ex_jugu", "ex_qihuo", "ex_chunqiu", "ex_baixiang"], ["forbidai"]],
              "fusion_jiaxu": ["male", "qun", 7, ["rewansha", "reluanwu", "reweimu", "zhenlue", "fusion_jianshu", "fusion_yongdi"], ["zhu", "boss", "bossallowed", "forbidai"]],
              "fusion_liru": ["male", "qun", 5, ["shenhu", "juece", "mieji", "fencheng", "xinjuece", "xinmieji", "xinfencheng", "rejuece", "remieji", "fusion_zhudong", "fusion_cidu"], ["zhu", "boss", "bossallowed", "forbidai"]],
              "fusion_weiguojixie": ["none", "wei", 10, ["boss_jiguan", "boss_nailuo", "boss_didongjg", "boss_lianyujg", "boss_tunshi", "boss_tanshi"], ["zhu", "boss", "bossallowed"]],
              "fusion_shuguojixie": ["none", "shu", 15, ["boss_jiguan", "boss_yuhuojg", "boss_tianyun", "fusion_zhenwei", "fusion_benlei", "yizhong", "boss_lingyu", "boss_mojianjg"], ["zhu", "boss", "bossallowed"]],
              "fusion_shuguoyinghun": ["none", "shu", "1/2", ["shenhu", "fusion_gongshen", "boss_jingmiao", "boss_zhinang", "boss_biantian", "bazhen", "boss_lingfeng", "boss_jizhen", "boss_yuhuojg", "boss_qiwu", "boss_tianyujg", "boss_xiaorui", "boss_huchen", "boss_fengjian", "boss_keding"], ["zhu", "boss", "bossallowed"]],
              "fusion_shuguoyinghun2": ["none", "shu", "3/5", ["shenhu", "fusion_gongshen", "boss_jingmiao", "boss_zhinang", "boss_biantian", "bazhen", "boss_yuhuojg", "boss_qiwu", "boss_tianyujg"], ["zhu", "boss", "bossallowed"]],
              "fusion_weiguoyinghun": ["none", "wei", 10, ["shenhu", "boss_xuanlei", "boss_skonghun", "boss_chiying", "boss_chuanyun", "boss_leili", "boss_fengxing", "boss_jueji", "fusion_jiaoxie"], ["zhu", "boss", "bossallowed"]],
              "fusion_puyuan": ["male", "shu", 10, ["shenhu", "fusion_shengong", "olqisi", "pytianjiang", "fusion_zhuren", "fusion_bianshui"], ["zhu", "boss", "bossallowed"]],
              "fusion_shen_jiangwei": ["male", "shen", 10, ["shenhu", "jiufa", "fusion_tianren", "fusion_pingxiang", "fusion_tiaoxin", "olzhiji"], ["zhu", "boss", "bossallowed"]],
              "re_boss_yingzhao": ["male", "shen", 25, ["shenhu", "re_boss_yaoshou", "boss_fengdong", "boss_xunyou", "boss_sipu"], ["zhu", "boss", "bossallowed"]],
              "re_boss_xiangliu": ["male", "shen", 20, ["shenhu", "re_boss_yaoshou", "boss_duqu", "boss_jiushou", "re_boss_echou"], ["zhu", "boss", "bossallowed"]],
              "fusion_lingtong": ["male", "wu", 4, ["shenhu", "fusion_xuanfeng", "yongjin", "fusion_yinshi"], ["zhu", "boss", "bossallowed"]],
              "fusion_liuzan": ["male", "wu", 4, ["shenhu", "jsrgbahu", "kangyin", "fenyin", "refenyin", "fusion_liji"], ["zhu", "boss", "bossallowed"]],
              "math_xiahoujie": ["male", "wei", 8, ["shenhu", "math_liedan", "math_zhuangdan"], ["zhu", "boss", "bossallowed"]],
              "math_xushao": ["male", "qun", 6, ["shenhu", "math_pingjian"], ["zhu", "boss", "bossallowed"]],
              "math_zhangchangpu": ["female", "wei", 6, ["shenhu", "math_yanjiao", "math_xingshen"], ["zhu", "boss", "bossallowed"]],
              "fusion_zhuanlundizang": ["male", "shen", 8, ["boss_modao", "fusion_lunhui", "boss_wangsheng", "boss_zlfanshi", "boss_bufo", "fusion_wuliang", "boss_dayuan", "boss_diting"], ["zhu", "boss", "bossallowed"]],
              "fusion_shen_xunyu": ["male", "shen", 3, ["fusion_quhu", "fusion_jieming_all", "fusion_tianzuo", "fusion_lingce", "dinghan", "fusion_liuxiang"], ["zhu", "boss", "bossallowed"]],
              // "fusion_panshu": ["female", "wu", 3, ["shenhu", "fusion_weiyi", "jinzhi", "zhiren", "fusion_yaner"], ["zhu", "boss", "bossallowed"]],
              "re_boss_dongzhuo": ["male", "qun", 20, ["shenhu", "re_boss_qiangzheng", "boss_baolin", "oljiuchi", "roulin", "re_boss_hengzheng"], ["zhu", "boss", "bossallowed"]],
              // "re_boss_huangyueying": ["female", "qun", 4, ["shenhu", "boss_gongshen", "boss_jizhi", "qicai", "boss_guiyin"], ["zhu", "boss", "bossallowed"]],
              "fusion_shen_zhangfei": ["male", "shen", 6, ["shenhu", "fusion_shencai", "fusion_xunshi", "olpaoxiao"], ["zhu", "boss", "bossallowed"]],
              // "fusion_tengfanglan": ["female", "wu", 4, ["shenhu", "fusion_luochong_all", "dcaichen"], ["zhu", "boss", "bossallowed"]],
              // "math_tengfanglan": ["female", "wu", 4, ["shenhu", "fusion_luochong_all", "dcaichen"], ["zhu", "boss", "bossallowed"]] ,
              "math_beimihu": ["female", "qun", 3, ["shenhu", "math_zongkui", "math_guju", "math_baijia", "math_bmcanshi"], ["zhu", "boss", "bossallowed"]],
              "re_boss_lvbu": ["male", "qun", 6, ["re_boss_jingjia", "boss_aozhan", "mashu", "wushuang", "xiuluo", "shenwei", "shenji", "shenqu", "jiwu"], ["zhu", "boss", "bossallowed"]],
              "fusion_yuantanyuanxiyuanshang": ["male", "qun", 6, ["shenhu", "fusion_neifa"], ["zhu", "boss", "bossallowed"]],
              "re_boss_luzhi": ["male", "wei", "6/6/4", ["re_boss_lianyu", "drlt_qianjie", "qingzhong", "weijing", "re_boss_jingti", "zhichi", "aocai", "boss_baiyi", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
              "re_boss_xusheng": ["male", "wu", "6/6/4", ["re_boss_lianyu", "xinpojun", "latest_ol_feiyang", "re_boss_shouyi", "oljiuchi", "jiushi", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
              "re_boss_huangzhong": ["male", "shu", "6/6/4", ["re_boss_lianyu", "xinliegong", "xinpojun", "re_boss_dungong", "wangong", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
              "re_boss_xiahouba": ["male", "shu", "6/6/4", ["re_boss_lianyu", "boss_qixiang", "baobian", "zhongyun", "jieyuan", "buqu", "boss_xiaoshou", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
              "re_boss_kuailiangkuaiyue": ["male", "wei", "6/6/4", ["re_boss_lianyu", "drlt_qianjie", "nzry_jianxiang", "nzry_shenshi", "re_boss_moqu", "jugu", "re_boss_zhene", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
              "re_boss_luxun": ["male", "wu", "6/6/4", ["re_boss_lianyu", "re_boss_liannu", "qianxun", "lianying", "sijian", "tairan", "qice", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
              "re_boss_litong": ["male", "wei", "6/6/4", ["re_boss_lianyu", "tuifeng", "olcuipo", "xinbenxi", "re_boss_xiongshou", "jiaozi", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
              "re_boss_ganning": ["male", "wu", "6/6/4", ["re_boss_lianyu", "clanjiexuan", "fenwei", "latest_ol_feiyang", "luoying", "zhenlue", "re_boss_xiongshou", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
              "re_boss_sunquan": ["male", "wu", "6/6/4", ["re_boss_lianyu", "re_boss_changandajian", "re_zhiheng", "fenwei", "latest_ol_feiyang", "dangxian", "shenshi", "xiangle", "clanjiejian", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
            },
            characterSort: {
              against7devil: {
                against7devil_boss: ["re_boss_caocao", "succubus", "re_boss_huatuo", "re_boss_zhouyu",
                  "liuxingyaodi", "re_boss_zhenji", "zhizunwudi", "luanshizhuhou", "yitongjindi", "re_nianshou",
                  "re_boss_yingzhao", "re_boss_xiangliu", "re_boss_dongzhuo", "re_boss_lvbu", "re_boss_luzhi",
                  "re_boss_xusheng", "re_boss_huangzhong", "re_boss_xiahouba"],
                against7devil_fusion: ["fusion_shen_sunce", "norecover", "fusion_xuhuang", "fusion_honglianpo",
                  "re_fusion_honglianpo", "barbarian_king", "fusion_jiaxu", "fusion_liru", "fusion_weiguojixie",
                  "fusion_shuguojixie", "fusion_shuguoyinghun", "fusion_weiguoyinghun", "fusion_shuguoyinghun2",
                  "fusion_puyuan", "fusion_shen_jiangwei", "fusion_lingtong", "fusion_liuzan", "fusion_zhuanlundizang",
                  "fusion_shen_xunyu", "fusion_shen_zhangfei", "fusion_yuantanyuanxiyuanshang"],
                against7devil_math: ["math_caojinyu", "math_xiahoujie", "math_xushao", "math_zhangchangpu", "math_beimihu"],
                against7devil_ex: ["ex_diaochan", "ex_yingzheng", "ex_zhaoji", "ex_baiqi", "ex_zhangyi",
                  "ex_shangyang", "ex_zhaogao", "ex_miyue", "ex_lvbuwei"],
              }
            },
            characterIntro: {
              "re_boss_caocao": "来源于挑战模式boss魏武大帝，只加上〖神护〗就可以大战七阴。<br> 【强度】★★★★ <br> 【亮点】综合，可玩性高",
              "fusion_shen_sunce": "神孙策+孙策+挑战模式boss那个男人，小霸王就是那么飒。<br> 【强度】★★★★★ <br> 【亮点】防御，过牌，激昂",
              "succubus": "绝代妖姬+神貂蝉，够得上魅魔了吧。<br>【强度】★★★★★ <br> 【亮点】防御，可玩性高",
              "re_boss_huatuo": "来源于挑战模式boss药坛圣手，加上技能〖神护〗。<br>【强度】★★★<br> 【亮点】全场空城",
              "re_boss_zhouyu": "来源于挑战模式boss赤壁火神，加上朱雀技能〖红莲〗，以及〖神护〗，真正的火神就此诞生。<br>【强度】★★★★<br> 【亮点】防御，稳定",
              "math_caojinyu": "来源于曹金玉，无脑堆数字，还蛮好玩的。<br>【强度】★★★★<br> 【亮点】卖血，过牌",
              "norecover": "来源于泰山王〖苦酒〗〖服毒〗，相柳〖毒躯〗〖恶臭〗，赵高〖害忠〗，虽然毫无操作感，但是能看对面崩死还挺好玩的。<br>【强度】★★★★<br> 【亮点】无法回血",
              "fusion_xuhuang": "来源于徐晃和谋徐晃，将〖断粮〗升级为〖饥荒〗。<br>【强度】★<br> 【亮点】谋弈",
              "liuxingyaodi": "桃园结义是有关刘备的典故，因此将挑战模式boss魏武大帝的技能〖雄才〗换成〖仁君〗，加上自设计的〖仁德〗形成技能联动，和sp孙尚香的技能也有关系。<br> 【强度】★★★★★ <br> 【亮点】综合，可玩性高",
              "re_boss_zhenji": "来源于挑战模式boss洛水仙子，加上界甄姬的〖洛神〗以及〖神护〗。<br> 【强度】★★★★ <br> 【亮点】爆发，控制",
              "fusion_honglianpo": "来源于捉鬼boss孟婆，加上五官王的〖血池〗以及红鬼的〖地动〗。没错，就是经典的五官王+红鬼+孟婆，三个五阶也也胆寒。<br> 【强度】★★ <br> 【亮点】恶心，回忆",
              "ex_diaochan": "来源于【假装无敌】扩展包貂蝉。由于非常喜欢这个傀儡机制，将她加入扩包第一将。<br> 【强度】★★★★ <br> 【亮点】机制",
              "re_fusion_honglianpo": "来源于本包红脸婆。由于原版强度较低，完全打不过七阴。设计了增强版，单体爆破更加有效。<br> 【强度】★★★ <br> 【亮点】恶心，回忆",
              "zhizunwudi": "吴国向来有玩装备的传统，因此将挑战模式boss魏武大帝的技能〖雄才〗换成〖吴业〗，加上自设计的〖制衡〗形成技能联动。<br> 【强度】★★★★ <br> 【亮点】综合，可玩性高",
              "luanshizhuhou": "群雄是乱世中最混乱的势力，因此将挑战模式boss魏武大帝的技能〖雄才〗换成〖混战〗，加上自设计的〖起兵〗形成技能联动。<br> 【强度】★★★ <br> 【亮点】综合，可玩性高",
              // "yitongjindi": "晋国是乱世中隐藏最深的势力，因此将挑战模式boss魏武大帝的技能【雄才】换成【驭权】，加上自设计的【称病】形成技能联动。<br> 【强度】★★★★ <br> 【亮点】综合，可玩性高",
              "re_nianshou": "来源于挑战模式boss四大年兽，将其技能进行融合。<br>【强度】★★★★<br> 【亮点】综合",
              "barbarian_king": "将少数民族部落武将的技能进行融合。<br>【强度】★★★★★<br> 【亮点】攻击",
              "ex_yingzheng": "来源于【合纵抗秦】扩展包嬴政。作为一统六国的秦始皇，加入技能〖六合〗，并对其技能进行了修改。<br>【强度】★★★★★<br> 【亮点】攻击，防御",
              "ex_zhaoji": "来源于【合纵抗秦】扩展包赵姬。对〖大期〗进行了修改。<br>【强度】★★★★★<br> 【亮点】攻击",
              "ex_baiqi": "来源于【合纵抗秦】扩展包白起。白起作为秦军统帅，加入秦军士兵的技能。<br>【强度】★★★★★<br> 【亮点】攻击",
              "ex_zhangyi": "来源于【合纵抗秦】扩展包张仪。对其技能进行了修改。<br>【强度】★★★★★<br> 【亮点】防御",
              "ex_shangyang": "来源于【合纵抗秦】扩展包商鞅。商鞅变法建立连坐制，因此加入技能〖连坐〗并对其技能进行了修改。<br>【强度】★★★★<br> 【亮点】攻击，爆发",
              "ex_zhaogao": "来源于【合纵抗秦】扩展包赵高。加入技能〖载棺〗并对其技能进行了修改。<br>【强度】★★★★★<br> 【亮点】防御",
              "ex_miyue": "来源于【合纵抗秦】扩展包芈月。对其技能进行了修改。<br>【强度】★★★★★<br> 【亮点】防御",
              "ex_lvbuwei": "来源于【合纵抗秦】扩展包吕不韦。对其技能进行了修改。<br>【强度】★★★★★<br> 【亮点】过牌",
              "fusion_jiaxu": "来源于界贾诩和sp贾诩。对其技能进行了修改。<br>【强度】★★★★<br> 【亮点】爆发，防御",
              "fusion_liru": "来源于手杀界李儒，老李儒，和李儒。李儒是董卓首席谋士，因此加入新技能〖助董〗。并且受董卓命令毒杀刘辩，因此加入新技能〖赐毒〗。<br>【强度】★★★★<br> 【亮点】攻击",
              "fusion_weiguojixie": "来源于剑阁模式魏国所有机械，将其技能进行融合。<br>【强度】★★★★<br> 【亮点】控制，攻击",
              "fusion_shuguojixie": "来源于剑阁模式蜀国所有机械，将其技能进行融合，并对其部分技能进行了修改。<br>【强度】★★★★★<br> 【亮点】攻击，防御",
              "fusion_weiguoyinghun": "来源于剑阁模式魏国所有英魂，将其技能进行融合。<br>【强度】★★★★★<br> 【亮点】综合",
              "fusion_shuguoyinghun": "来源于剑阁模式蜀国所有英魂，将其技能进行融合，并对其部分技能进行了修改。<br>【强度】★★★★★<br> 【亮点】综合",
              "fusion_shuguoyinghun2": "来源于剑阁模式蜀国英魂中的智囊型武将（其实就是蜀国英魂强度过高出个限制版），将其技能进行融合，并对其部分技能进行了修改。<br>【强度】★★★<br> 【亮点】综合",
              "fusion_puyuan": "来源于十周年武将蒲元与OL蒲元，将其技能进行融合和修改，并加入新技能【辨水】。<br>【强度】★★★★<br> 【亮点】铸造",
              "fusion_shen_jiangwei": "来源于神姜维与OL界姜维，将其技能进行融合和修改。<br>【强度】★★★★<br> 【亮点】综合",
              "re_boss_yingzhao": "来源于英招，将其技能修改为最新的〖妖兽〗，甚至都没有加上最新的巡游就已经足够强。<br>【强度】★★★★<br> 【亮点】综合",
              "re_boss_xiangliu": "来源于新版相柳，将其技能修改为最新的〖妖兽〗〖恶臭〗。<br>【强度】★★★★★<br> 【亮点】恶心",
              "fusion_lingtong": "来源于十周年界凌统，手杀界凌统，旧凌统，ol凌统。界凌统打开了十周年阴间的大门，增加技能〖阴始〗。<br>【强度】★★★★★<br> 【亮点】攻击",
              "fusion_liuzan": "来源于十周年留赞，手杀留赞，diy留赞，增强后的力激加上斗地主的跋扈技能，现在是真正的歌王。<br>【强度】★★★★★<br> 【亮点】攻击，过牌",
              "math_xiahoujie": "来源于十周年夏侯杰，去掉了技能负面效果，增加了摸牌机会。人越多越强。<br>【强度】★★★★<br> 【亮点】攻击，过牌",
              "math_xushao": "来源于十周年许邵，增加了技能发动的时机和次数，一个技能加〖神护〗照样杀七阴。<br>【强度】★★★★★<br> 【亮点】综合",
              "math_zhangchangpu": "终于可以在小学数学中玩三国杀了！来源于ol张菖蒲，修改了〖严教〗和〖省身〗，不用再担心愚蠢的队友不会小学数学了！现在你可以自己计算〖严教〗。设计思路：〖严教〗改为了转换技，体现了教学中老师示范与学生练习的过程，且数字逐渐增大，体现难度由浅入深。难度最大时学生把老师教的全都还给老师（不是）。<br>【强度】★★★★★<br> 【亮点】数学+卖血",
              "fusion_zhuanlundizang": "来源于转轮王和地藏王，面对七阴，需要两大boss强强联手才有一线希望。修改了技能〖轮回〗和〖无量〗。〖无量〗既可以指无限制无止境，也可以指佛教中的无量寿佛，因此增加了带领全体增加体力上限和体力的设定。<br>【强度】★★★<br> 【亮点】综合+回忆",
              "fusion_shen_xunyu": "来源于手杀神荀彧，ol界荀彧和手杀界荀彧。荀彧的〖驱虎〗历史上是针对袁术、刘备、吕布三者的计谋，且当时并没有三者都比曹军强的说法。因此对〖驱虎〗的限制进行了删除，同时对拼点成功后的伤害范围进行了增加。〖天佐〗〖灵策〗均为纯增强，加强进攻和防御能力。〖节命〗技能则是来自于手杀界节命和ol界节命，还加上了一个控制更强的节命效果。〖留香〗技能直接源于荀令留香的典故，技能内容也非常贴合。<br>【强度】★★★★★<br> 【亮点】综合",
              "fusion_panshu": "来源于ol潘淑和十周年潘淑。〖威仪〗改为每轮每名角色限一次，〖燕尔〗改为出牌阶段自己没牌也可发动。<br>【强度】★★★<br> 【亮点】综合",
              "re_boss_dongzhuo": "来源于挑战模式boss乱世魔王，加上技能〖神护〗。〖强征〗从手牌改为牌，历史上董卓横征暴敛最终为吕布所杀，因此增加技能〖横征〗，通过缩短自己寿命（体力上限）来发动〖强征〗。<br>【强度】★★★★<br> 【亮点】攻击",
              "fusion_shen_zhangfei": "来源于十周年神张飞和ol界张飞，加上技能〖神护〗。〖神裁〗取消了发动次数上限，且标记可以叠加。<br>【强度】★★★<br> 【亮点】攻击",
              "math_beimihu": "来源于卑弥呼，加上技能〖神护〗。开局自动觉醒的同时修改了每个角色只能获得一枚“傀”的限制，增加了获得“傀”的方式和〖骨疽〗摸牌的数量。<br>【强度】★★★★★<br> 【亮点】防御，过牌",
              "re_boss_lvbu": "来源于挑战模式boss最强神话，直接获得虎牢关最终两种形态boss的所有技能，〖精甲〗进行了略微强化。七阴关一人镇守，足矣！<br>【强度】★★★★★<br> 【亮点】攻击，过牌",
              "fusion_yuantanyuanxiyuanshang": "来源于十周年袁谭袁熙袁尚和ol袁谭袁尚，加上〖神护〗的同时对〖内伐〗进行了较大规模改动，不仅改为三类牌来体现出三兄弟的争夺，同时也加强了〖内伐〗效果。<br>【强度】★★★★<br> 【亮点】控制，过牌",
              "re_boss_luzhi": "来源于山河图第一章boss鲁芝，没有任何改动，七阴连防御都打不穿。<br>【强度】★★★★★<br> 【亮点】综合",
              "re_boss_xusheng": "来源于山河图第一章boss江东铁壁，没有任何改动，这就是真正的大宝吗？<br>【强度】★★★★<br> 【亮点】攻击",
              "re_boss_huangzhong": "来源于山河图第一章关内羽林统帅，没有任何改动，这就是老宝吗？<br>【强度】★★★★<br> 【亮点】攻击",
              "re_boss_xiahouba": "来源于山河图第一章boss夏侯霸，没有任何改动。<br>【强度】★★★★<br> 【亮点】卖血",
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

              latest_ol_feiyang: {
                trigger: { player: 'phaseJudgeBegin' },
                charlotte: true,
                direct: true,
                filter: function (event, player) {
                  return _status.mode != 'online' && _status.mode != 'binglin' && player == game.zhu && player.countCards('j') && player.countCards('he') > 1;
                },
                content: function () {
                  "step 0"
                  player.chooseToDiscard('h', 2, get.prompt('feiyang'), '弃置两张手牌，然后弃置判定区里的所有牌').set('logSkill', 'feiyang').set('ai', function (card) {
                    if (_status.event.goon) return 6 - get.value(card);
                    return 0;
                  }).set('goon', player.hasCard(function (card) {
                    return get.effect(player, {
                      name: card.viewAs || card.name,
                      cards: [card],
                    }, player, player) < 0;
                  }, 'j'));
                  "step 1"
                  if (result.bool) {
                    player.discard(player.getCards('e',function(card){
                      return lib.filter.cardDiscardable(card,target,'shuiyanqijunx');
                    }))
                  }
                }
              },

              re_boss_lianyu: {
                forced: true,
                group: ["re_boss_lianyu_init", "re_boss_lianyu_hujia", "re_boss_lianyu_draw"],
                subSkill: {
                  "init": {
                    trigger: { global: 'phaseBefore', player: 'enterGame' },
                    forced: true,
                    filter: function (event, player) {
                      return (event.name != 'phase' || game.phaseNumber == 0);
                    },
                    content: function () {
                      player.draw(3);
                    }
                  },
                  "hujia": {
                    trigger: { global: 'roundStart' },
                    forced: true,
                    content: () => {
                      player.changeHujia(1, null, true);
                    },
                  },
                  "draw": {
                    trigger: { player: 'phaseDrawBegin2' },
                    forced: true,
                    filter: function (event, player) {
                      return !event.numFixed;
                    },
                    content: function () {
                      trigger.num += 3;
                    },
                    ai: {
                      threaten: 2
                    }
                  },
                },
                mod: {
                  cardUsable: function (card, player, num) {
                    if (card.name == 'sha') return num + 2;
                  }
                }
              },

              "re_boss_xiongshou": {
                group: ['re_boss_xiongshou_turn', 're_boss_xiongshou_damage', 're_boss_xiongshou_sha'],
                subSkill: {
                  damage: {
                    trigger: { player: 'damageEnd' },
                    filter: function (event, player) {
                      return event.num > 1 && !player.hasSkill("re_boss_xiongshou_damage_used");
                    },
                    forced: true,
                    content: function () {
                      player.addTempSkill('re_boss_xiongshou_damage_used');
                      if (player.canUse('sha', trigger.source, false)) {
                        player.useCard({ name: 'sha', isCard: true }, trigger.source, false, 'noai');
                      }
                    }
                  },
                  damage_used: {
                    mark: true,
                    intro: {
                      content: '本回合已发动'
                    }
                  },
                  sha: {
                    trigger: { source: 'damageBegin1' },
                    forced: true,
                    filter: function (event, player) {
                      return event.notLink() && event.card && event.card.name == 'sha';
                    },
                    content: function () {
                      trigger.num++;
                    }
                  },
                  turn: {
                    trigger: { player: 'turnOverBefore' },
                    priority: 20,
                    forced: true,
                    filter: function (event, player) {
                      return !player.isTurnedOver();
                    },
                    content: function () {
                      trigger.cancel();
                      game.log(player, '取消了翻面');
                    },
                  }
                },
                mod: {
                  globalFrom: function (from, to, distance) {
                    return distance - 1;
                  }
                },
                ai: {
                  noturn: true,
                }
              },

              "re_boss_liannu": {
                forced: true,
                filter: function (event, player) {
                  return (event.name != 'phase' || game.phaseNumber == 0);
                },
                trigger: {
                  global: 'phaseBefore',
                  player: 'enterGame',
                },
                content: function () {
                  player.equip(game.createCard2('zhuge', 'diamond', 1));
                }
              },
              "re_boss_changandajian": {
                forced: true,
                filter: function (event, player) {
                  return (event.name != 'phase' || game.phaseNumber == 0);
                },
                trigger: {
                  global: 'phaseBefore',
                  player: 'enterGame',
                },
                content: function () {
                  player.equip(game.createCard2('changandajian_equip1', 'spade', 10));
                  player.equip(game.createCard2('changandajian_equip2', 'spade', 10));
                }
              },


              "re_boss_baoli": {
                trigger: { source: 'damageBegin1' },
                forced: true,
                charlotte: true,
                content: function () {
                  trigger.num++;
                },
              },

              // sunce
              repinghe: {
                audio: "pinghe",
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

              // succubus
              yuxin: {
                audio: "huoxin",
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
              math_yuqi: {
                audio: "yuqi",
                trigger: { global: 'damageEnd' },
                init: function (player) {
                  if (!player.storage.math_yuqi) player.storage.math_yuqi = [0, 3, 1, 1];
                },
                getInfo: function (player) {
                  if (!player.storage.math_yuqi) player.storage.math_yuqi = [0, 3, 1, 1];
                  return player.storage.math_yuqi;
                },
                onremove: true,
                filter: function (event, player) {
                  const list = lib.skill.math_yuqi.getInfo(player);
                  const times = player.getHistory('useSkill', function (evt) {
                    return evt.skill == 'math_yuqi';
                  }).length;
                  return (times < Math.max(...list)) && event.player.isIn() && get.distance(player, event.player) <= list[0];
                },
                logTarget: 'player',
                content: function () {
                  'step 0'
                  event.list = lib.skill.math_yuqi.getInfo(player);
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
                    var info = lib.skill.math_yuqi.getInfo(_status.event.player);
                    if (to == 1) return moved[1].length < info[2];
                    if (to == 2) return moved[2].length < info[3];
                    return true;
                  });
                  next.set('processAI', function (list) {
                    var cards = list[0][1].slice(0).sort(function (a, b) {
                      return get.value(b, 'raw') - get.value(a, 'raw');
                    }), player = _status.event.player, target = _status.event.getTrigger().player;
                    var info = lib.skill.math_yuqi.getInfo(_status.event.player);
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
                    const info = lib.skill.math_yuqi.getInfo(player);
                    return '<div class="text center"><span class=thundertext>蓝色：' + info[0] + '</span>　<span class=firetext>红色：' + info[1] + '</span><br><span class=greentext>绿色：' + info[2] + '</span>　<span class=yellowtext>黄色：' + info[3] + '</span></div>'
                  },
                },
                ai: {
                  threaten: 8.8,
                },
              },
              math_shanshen: {
                audio: "shanshen",
                trigger: { global: 'die' },
                direct: true,
                content: function () {
                  const inf = Number.MAX_SAFE_INTEGER;
                  'step 0'
                  event.goon = !player.hasAllHistory('sourceDamage', function (evt) {
                    return evt.player == trigger.player;
                  });
                  player.chooseControl('<span class=thundertext>蓝色</span>', '<span class=firetext>红色</span>', '<span class=greentext>绿色</span>', '<span class=yellowtext>黄色</span>', 'cancel2').set('prompt', get.prompt('math_shanshen')).set('prompt2', '令〖隅泣〗中的一个数字+2' + (event.goon ? '并回复1点体力' : '')).set('ai', function () {
                    var player = _status.event.player, info = lib.skill.math_yuqi.getInfo(player);
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
                    player.logSkill('math_shanshen', trigger.player);
                    var list = lib.skill.math_yuqi.getInfo(player);
                    list[result.index] += 2;
                    game.log(player, '将', result.control, '数字改为', '#y' + list[result.index])
                    player.markSkill('math_yuqi');
                    if (event.goon) player.recover();
                  }
                },
              },
              math_xianjing: {
                audio: "xianjing",
                trigger: { player: 'phaseZhunbeiBegin' },
                direct: true,
                content: function () {
                  const inf = Number.MAX_SAFE_INTEGER;
                  'step 0'
                  player.chooseControl('<span class=thundertext>蓝色</span>', '<span class=firetext>红色</span>', '<span class=greentext>绿色</span>', '<span class=yellowtext>黄色</span>', 'cancel2').set('prompt', get.prompt('math_xianjing')).set('prompt2', '令〖隅泣〗中的一个数字+1').set('ai', function () {
                    var player = _status.event.player, info = lib.skill.math_yuqi.getInfo(player);
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
                    player.logSkill('math_xianjing');
                    var list = lib.skill.math_yuqi.getInfo(player);
                    console.log(list);
                    list[result.index] = list[result.index] + 1;
                    game.log(player, '将', result.control, '数字改为', '#y' + list[result.index])
                    player.markSkill('math_yuqi');
                    if (player.isDamaged()) event.finish();
                  }
                  else event.finish();
                  'step 2'
                  player.chooseControl('<span class=thundertext>蓝色</span>', '<span class=firetext>红色</span>', '<span class=greentext>绿色</span>', '<span class=yellowtext>黄色</span>', 'cancel2').set('prompt', '是否令〖隅泣〗中的一个数字+1？').set('ai', function () {
                    var player = _status.event.player, info = lib.skill.math_yuqi.getInfo(player);
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
                    var list = lib.skill.math_yuqi.getInfo(player);
                    list[result.index] = list[result.index] + 1;
                    game.log(player, '将', result.control, '数字改为', '#y' + list[result.index])
                    player.markSkill('math_yuqi');
                  }
                },
              },

              // fusion_xuhuang
              "famine": {
                audio: "sbduanliang",
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
                audio: "rende",
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
                  event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【仁君】', [[name], 'character']);
                  game.delay(2);
                  'step 2'
                  event.dialog.close();
                }
              },

              boss_rende: {
                audio: "rerende",
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

              // ex_diaochan
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
                audio: "boss_wangshi",
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
                audio: "boss_wangshi",
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
                audio: "boss_xuechi",
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

              // boss_dongwudadi
              wuye: {
                audio: "zhiheng",
                unique: true,
                trigger: {
                  player: 'loseAfter',
                  global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                filter: function (event, player) {
                  var evt = event.getl(player);
                  if (event.name == 'equip' && event.player == player) return true;

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
                  event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【吴业】', [[name], 'character']);
                  game.delay(2);
                  'step 1'
                  event.dialog.close();
                }
              },
              boss_zhiheng: {
                audio: "rezhiheng",
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

              // boss_luanshizhuhou
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
                  event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【混战】', [[name], 'character']);
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

              "ex_shanwu": {
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
                group: ["ex_shanwu_judge"],
                subSkill: {
                  judge: {
                    audio: 'ex_shanwu',
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
                  player.storage.ex_huoluan = true;
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
              "ex_xianji": {
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
                  return !player.storage.ex_xianji && player.storage.ex_daqi > 0;
                },
                check: function (event, player) {
                  var hp = player.maxHp - player.hp;
                  var card = 3 - player.countCards('he');
                  if ((hp + card) > 0) return true;
                  return false;
                },
                content: function () {
                  'step 0'
                  player.awakenSkill('ex_xianji');
                  player.storage.ex_xianji = true;
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
                  player.storage.ex_huoluan = true;
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
              "ex_huoluan": {
                audio: 'ext:大战七阴/audio:true',
                trigger: {
                  player: ["ex_daqiAfter", "ex_xianjiAfter"],
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

              "ex_wuan": {
                audio: 'ext:大战七阴/audio:true',
                locked: true,
                global: "ex_wuan_buff",
                subSkill: {
                  buff: {
                    mod: {
                      cardUsable: function (card, player, num) {
                        if (player.group == 'daqin' && card.name == 'sha') {
                          return num + game.countPlayer(function (current) {
                            return current.hasSkill('ex_wuan')
                          });
                        }
                      },
                    },
                    sub: true,
                  },
                },
              },
              "ex_shashen": {
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
                group: ["ex_shashen_i"],
                subSkill: {
                  i: {
                    audio: 'ex_shashen',
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
              "ex_fachu": {
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
              "ex_changsheng": {
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
                content: function () {},
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
                audio: 'ext:大战七阴/audio:true',
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
                audio: 'ext:大战七阴/audio:true',
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
                audio: 'ext:大战七阴/audio:true',
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
                audio: 'ext:大战七阴/audio:true',
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

              // zhaogao
              ex_zhilu: {
                audio: 'ext:大战七阴/audio:true',
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
                audio: 'ext:大战七阴/audio:true',
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
                audio: 'ext:大战七阴/audio:true',
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
                audio: 'ext:大战七阴/audio:true',
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
                audio: 'ext:大战七阴/audio:true',
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
                audio: 'ext:大战七阴/audio:true',
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
                        trigger.player.chooseControl('摸牌', '回血').set('prompt', trigger.player.sex == "male" ? '始称太后：令芈月回复1点体力或交给其一张牌并令其摸一张牌' : '始称太后：令芈月回复1点体力或弃置一张牌并令其摸一张牌').ai = function () {
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
                        else {
                          trigger.player.chooseToDiscard('he', true, '太后：弃置一张牌');
                          event.finish();
                        }
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
                audio: 'ext:大战七阴/audio:true',
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
                audio: 'ext:大战七阴/audio:true',
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

              // ex_lvbuwei
              "ex_jugu": {
                audio: 'ext:大战七阴/audio:true',
                mod: {
                  maxHandcard: function (player, num) {
                    return num + player.maxHp;
                  },
                },
                trigger: {
                  player: "phaseZhunbeiBegin",
                },
                forced: true,
                content: function () {
                  player.draw(player.maxHp);
                },
              },
              "ex_qihuo": {
                audio: 'ext:大战七阴/audio:true',
                enable: "phaseUse",
                usable: 1,
                delay: 0,
                filter: function (event, player) {
                  return player.countCards('h') > 0;
                },
                content: function () {
                  'step 0'
                  event.list = [];
                  event.cardNum = [];
                  var hs = player.getCards('h');
                  for (var i = 0; i < hs.length; i++) {
                    var card = hs[i];
                    if (event.list.contains(get.type(card, 'trick'))) {
                      event.cardNum[event.list.indexOf(get.type(card, 'trick'))]++;
                      continue;
                    }
                    event.list.push(get.type(card, 'trick'));
                    event.cardNum.push(1);
                  }
                  'step 1'
                  player.chooseControl(event.list, function (event, player) {
                    return event.list[event.cardNum.indexOf(Math.max.apply(null, event.cardNum))] || event.list.randomGet();
                  }).prompt = "奇货：请选择一种类别";
                  'step 2'
                  var cards = player.getCards('h', function (card) {
                    return get.type(card, 'trick') == result.control;
                  });
                  player.discard(cards);
                  player.draw(cards.length * 2);
                },
                ai: {
                  order: 1,
                  result: {
                    player: 4,
                  },
                  threaten: 1.55,
                },
              },
              "ex_chunqiu": {
                audio: 'ext:大战七阴/audio:true',
                trigger: {
                  player: ['useCard', 'respond']
                },
                filter: function (event, player) {
                  var list = ['useCard', 'respond'];
                  list.remove(event.name);
                  return player.getHistory(event.name)[0] == event && !player.getHistory(list[0].length);
                },
                content: function () {
                  player.draw(2);
                },
              },
              "ex_baixiang": {
                audio: 'ext:大战七阴/audio:true',
                skillAnimation: true,
                animationColor: "thunfer",
                unique: true,
                trigger: {
                  player: ['phaseZhunbeiBegin', 'phaseJieshuBegin']
                },
                forced: true,
                filter: function (event, player) {
                  return player.countCards('h') >= player.hp * 2 && !player.storage.ex_baixiang;
                },
                derivation: ["ex_zhongfu"],
                content: function () {
                  'step 0'
                  player.storage.ex_baixiang = true;
                  player.awakenSkill('ex_baixiang');
                  player.maxHp++;
                  'step 1'
                  var num = player.maxHp - player.hp;
                  if (num > 0) player.recover(num);
                  player.addSkill('ex_zhongfu');
                  game.log(player, '获得了技能〖仲父〗')
                },
                ai: {
                  maixie: true,
                  skillTagFilter: function (player, tag) {
                    if (tag == 'maixie') {
                      if (player.storage.ex_baixiang || player.countCards('h') < player.hp * 3 || player.hp < 3) return false;
                    }
                  },
                  effect: {
                    target: function (card, player, target) {
                      if (target.storage.ex_baixiang || !get.tag(card, 'damage')) return;
                      var num = (target.hp - get.tag(card, 'damage')) * 3;
                      if (num > 0 && target.countCards('h') >= num) return [0.5, 1];
                    },
                  },
                },
              },
              "ex_zhongfu": {
                audio: 'ext:大战七阴/audio:true',
                filter: function (event, player) {
                  return event.num <= player.countCards('he');
                },
                trigger: { player: 'damageBegin' },
                content: function () {
                  'step 0'
                  player.chooseToDiscard('he', trigger.num, '弃置等量的牌').ai = function (card) {
                    return 6 - get.value(card);
                  }
                  'step 1'
                  if (result.bool) {
                    trigger.num = 0;
                  }
                }
              },

              // fusion_jiaxu
              fusion_jianshu: {
                audio: "jianshu",
                unique: true,
                enable: 'phaseUse',
                usable: 1,
                animationColor: 'thunder',
                skillAnimation: 'epic',
                filter: function (event, player) {
                  return player.countCards('h', { color: 'black' }) > 0;
                },
                filterTarget: function (card, player, target) {
                  if (target == player) return false;
                  if (ui.selected.targets.length) {
                    return ui.selected.targets[0] != target && !ui.selected.targets[0].hasSkillTag('noCompareSource') && target.countCards('h')
                      && !target.hasSkillTag('noCompareTarget');
                  }
                  return true;
                },
                filterCard: { color: 'black' },

                discard: false,
                lose: false,
                delay: false,
                check: function (card) {
                  if (_status.event.player.hp == 1) return 8 - get.value(card);
                  return 6 - get.value(card);
                },
                selectTarget: 2,
                multitarget: true,
                content: function () {
                  'step 0'
                  targets[0].gain(cards, player, 'give');
                  'step 1'
                  targets[0].chooseToCompare(targets[1]);
                  'step 2'
                  if (result.bool) {
                    targets[0].chooseToDiscard('he', 2, true);
                    targets[1].loseHp();
                  }
                  else if (result.tie) {
                    targets[0].loseHp()
                    targets[1].loseHp()
                  }
                  else {
                    targets[1].chooseToDiscard('he', 2, true);
                    targets[0].loseHp();
                  }
                },

                ai: {
                  expose: 0.4,
                  order: 4,
                  result: {
                    target: function (player, target) {
                      if (player.hasUnknown()) return 0;
                      if (ui.selected.targets.length) return -1;
                      return -0.5;
                    }
                  }
                }
              },
              fusion_yongdi: {
                audio: "yongdi",
                audioname: ['xinping'],
                derivation: ["fusion_dushi"],
                unique: true,
                limited: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                animationColor: 'thunder',
                skillAnimation: 'legend',
                filter: function (event, player) {
                  return !player.storage.yongdi;
                },
                init: function (player) {
                  player.storage.yongdi = false;
                },
                mark: true,
                intro: {
                  content: 'limited'
                },
                direct: true,
                content: function () {
                  'step 0'
                  player.chooseTarget(get.prompt2('fusion_yongdi'), function (card, player, target) {
                    return (target.hasSex('male') || target.name == 'key_yuri');
                  }).set('ai', function (target) {
                    if (!_status.event.goon) return 0;
                    var player = _status.event.player;
                    var att = get.attitude(player, target);
                    if (att <= 1) return 0;
                    var mode = get.mode();
                    if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
                      if (target.name && lib.character[target.name]) {
                        for (var i = 0; i < lib.character[target.name][3].length; i++) {
                          if (lib.skill[lib.character[target.name][3][i]].zhuSkill) {
                            return att * 2;
                          }
                        }
                      }
                    }
                    return att;
                  }).set('goon', !player.hasUnknown());
                  'step 1'
                  if (result.bool) {
                    player.awakenSkill('yongdi'); // watch anime
                    player.storage.fusion_yongdi = true;
                    player.logSkill('fusion_yongdi', result.targets);
                    var target = result.targets[0];
                    target.gainMaxHp(true);
                    target.recover();
                    var mode = get.mode();
                    if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
                      if (target.name && lib.character[target.name]) {
                        var skills = lib.character[target.name][3];
                        target.storage.zhuSkill_yongdi = [];
                        for (var i = 0; i < skills.length; i++) {
                          var info = lib.skill[skills[i]];
                          if (info.zhuSkill) {
                            target.storage.zhuSkill_yongdi.push(skills[i]);
                            if (info.init) {
                              info.init(target);
                            }
                            if (info.init2) {
                              info.init2(target);
                            }
                          }
                        }
                      }
                    }

                    if (target == player) {
                      player.addSkill('fusion_dushi');
                    }
                  }
                },
                ai: {
                  expose: 0.2
                }
              },
              fusion_dushi: {
                trigger: { source: 'dieAfter' },
                forced: true,
                content: function () {
                  player.restoreSkill("reluanwu");
                }
              },
              // fusion_dushi: {
              //     trigger: { global: 'dieAfter' },
              //     forced: true,
              //     filter: function (event, player) {
              //         return _status.currentPhase == player || event.source == player;
              //     },
              //     content: function () {
              //         player.restoreSkill("reluanwu");
              //     }
              // },

              fusion_zhudong: {
                audio: "olbaonue",
                unique: true,
                zhuSkill: true,
                trigger: { global: 'damageSource' },
                filter: function (event, player) {
                  return player == event.source;
                },
                direct: true,
                content: function () {
                  'step 0'
                  event.count = trigger.num;
                  'step 1'
                  event.count--;
                  player.chooseBool('是否发动【助董】？').set('choice', true);
                  'step 2'
                  if (result.bool) {
                    player.logSkill('fusion_zhudong', trigger.source);
                    player.judge(function (card) {
                      if (get.suit(card) == 'spade') return 4;
                      else if (get.suit(card) == 'club') return 1;
                      return 0;
                    }).judge2 = function (result) {
                      return result.bool ? true : false;
                    };
                  }
                  else {
                    event.finish();
                  }

                  'step 3'
                  event.suit = result.suit;
                  if (result.suit == 'spade') {
                    player.chooseTarget('请选择一名其他角色，令该角色失去一点体力。', function () {
                      return target != player;
                    }).set('ai', function (target) {
                      var player = _status.event.player;
                      return get.damageEffect(target, player, player);
                    });
                  }
                  else if (result.suit == 'club') {
                    player.chooseTarget(get.prompt('fusion_zhudong'), '请选择一名其他角色，然后弃置其一张牌。', function (card, player, target) {
                      return target != player && target.hasCard(function (card) {
                        return lib.filter.canBeDiscarded(card, player, target);
                      }, 'he');
                    }).set('ai', function (target) {
                      var player = _status.event.player;
                      return get.effect(target, { name: 'guohe_copy2' }, player, player)
                    });

                  }
                  else {
                    if (event.count) event.goto(1);
                    else event.finish();
                  }

                  'step 4'
                  if (result.bool) {
                    const target = result.targets[0];
                    player.logSkill('fusion_zhudong', target);
                    if (event.suit == "spade") {
                      player.line(target);
                      target.loseHp(1);
                    }
                    else if (event.suit == "club") {
                      player.line(target);
                      player.discardPlayerCard(target, true, 'he');
                    }
                  }

                  if (event.count) event.goto(1);
                }
              },
              fusion_cidu: {
                audio: "zhendu",
                enable: 'phaseUse',
                usable: 1,
                discard: false,
                delay: false,
                content: function () {
                  "step 0"
                  player.draw();
                  'step 1'
                  var filterTarget = function (card, player, target) {
                    return target != player;
                  };
                  if (!player.countCards('h') || !game.hasPlayer(function (current) {
                    return filterTarget(null, player, current);
                  })) event.finish();
                  else player.chooseCardTarget({
                    forced: true,
                    prompt: '将一张手牌交给其他角色',
                    filterTarget: filterTarget,
                    filterCard: true,
                    position: 'h',
                    ai1: function (card) {
                      if (get.type(card, false) == 'equip') return 1 - get.value(card);
                      return 7 - get.value(card);
                    },
                    ai2: function (target) {
                      var player = _status.event.player;
                      var att = get.attitude(player, target);
                      if (att > 0) return -att;
                      return -att / get.distance(player, target, 'absolute');
                    },
                  });

                  'step 2'
                  const target = result.targets[0];
                  event.target = target;
                  event.poisonousCard = result.cards;
                  target.gain(result.cards, player, 'giveAuto').gaintag.add('fusion_cidu');
                  player.line(target, 'green');

                  target.chooseControl("弃置此牌并受到一点伤害", "弃置除此牌外的其他牌").set("prompt", "弃置此牌并受到一点伤害或弃置除此牌外的其他牌").ai = function () {
                    if (target.hp === 1) return "弃置除此牌外的其他牌";
                    if (target.countCards("he") > 4) return "弃置此牌并受到一点伤害";
                    return "弃置除此牌外的其他牌";
                  };

                  'step 3'
                  if (result.control === "弃置除此牌外的其他牌") {
                    event.target.discard(event.target.getCards('he', function (card) {
                      return !card.hasGaintag('fusion_cidu') && lib.filter.cardDiscardable(card, event.target, 'fusion_cidu');
                    }));
                  }
                  else {
                    event.target.discard(event.poisonousCard);
                    event.target.damage('nocard');
                  }
                  event.finish();
                },
                check: function (card) {
                  return 6 - get.value(card);
                },
                ai: {
                  order: 2,
                  result: {
                    target: function (player, target) {
                      return get.attitude(player, target) < 0;
                    }
                  }
                },
              },

              // fusion_shuguojixie
              fusion_benlei: {
                trigger: { player: 'phaseBegin' },
                forced: true,
                content: function () {
                  var list = game.players.slice(0);
                  list.remove(player);
                  var target = list.randomGet();
                  player.line(target);
                  target.damage(2, "thunder");
                },
              },
              fusion_zhenwei: {
                inherit: "feiying",
              },

              // shuguoyinghun
              fusion_gongshen: {
                audio: "gongshen",
                trigger: { player: 'phaseEnd' },
                content: function () {
                  if (player.hp < player.maxHp) {
                    player.recover();
                  }
                  else {
                    const list = game.players.slice(0);
                    list.remove(player);
                    const target = list.randomGet();
                    player.line(target, 'fire');
                    target.damage('fire');
                  }
                },
              },

              fusion_jiaoxie: {
                enable: 'phaseUse',
                usable: 1,
                filter: function (event, player) {
                  return game.hasPlayer(function (current) {
                    return current != player && current.countCards('he');
                  });
                },
                content: function () {
                  'step 0'
                  event.num = 0;
                  player.chooseTarget(get.prompt2('fusion_jiaoxie'), [1, 2], function (card, player, target) {
                    return target != player && target.countCards('he') > 0;
                  }, function (target) {
                    var att = get.attitude(_status.event.player, target);
                    if (target.hasSkill('tuntian')) return att / 10;
                    return 1 - att;
                  }).set('ai', function (target) {
                    if (target.countCards('e', function (card) {
                      return get.value(card, target) <= 0;
                    }) > 0) return 1;
                    return -1;
                  });
                  'step 1'
                  if (result.bool) {
                    event.target = result.targets;
                  }
                  else {
                    event.finish();
                  }
                  'step 2'
                  event.target[event.num].chooseCard('he', true, '缴械：将一张牌交给' + get.translation(player));

                  'step 3'
                  game.log(result.cards);
                  if (result.bool) {
                    event.target[event.num].give(result.cards[0], player, true);
                    if (event.num < event.target.length - 1) {
                      ++event.num;
                      event.goto(2);
                    }
                  }

                },
                ai: {
                  order: 9,
                  result: {
                    target: function (player, target) {
                      if (target.countCards('e', function (card) {
                        return get.value(card, target) <= 0;
                      }) > 0) return 1;
                      return -1;
                    },
                  },
                },
              },

              // fusion_puyuan
              fusion_bianshui: {
                trigger: { player: 'phaseUseBegin' },
                direct: true,
                init: function (player) {
                  player.storage.failure = 0;
                  player.storage.success = 0;
                },

                content: function () {
                  'step 0'
                  player.addTempSkill('fusion_bianshui_effect', 'phaseUseAfter');
                  var choice = "0次";
                  var list = [];
                  for (let i = 0; i <= 9; i++) {
                    list.push(i + "次");
                  }
                  player.chooseControl(list).set('ai', function () {
                    return _status.event.choice;
                  }).set('choice', choice).prompt = get.prompt2(event.name);

                  'step 1'
                  player.storage.times = parseInt(result.control);

                },
                ai: { expose: 0.35 },
                subSkill: {
                  count: {
                    charlotte: true,
                    onremove: true,
                  },
                  effect: {
                    trigger: { player: 'phaseUseEnd' },
                    forced: true,
                    charlotte: true,
                    onremove: true,
                    filter: function (event, player) {
                      return event.player.isIn();
                    },
                    logTarget: 'player',
                    content: function () {
                      if (player.storage.failure > 0) {
                        player.loseHp();
                        for (let i = 0; i < player.storage.failure; ++i) {
                          player.chooseUseTarget({ name: 'sha', nature: 'ice' }, get.prompt('fusion_bianshui'), '视为使用一张【冰杀】').logSkill = 'fusion_bianshui';
                        }
                      }
                      if (player.storage.success === player.storage.times) {
                        player.recover(player.storage.success + player.storage.failure);
                        player.draw(player.storage.success);
                      }
                      player.storage.success = 0;
                      player.storage.failure = 0;
                    },

                  },
                },
              },

              fusion_zhuren: {
                audio: "pyzhuren",
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                selectCard: 1,
                check: function (card) {
                  var player = _status.event.player;
                  var name = 'pyzhuren_' + (card[card.name == 'shandian' ? 'name' : 'suit']);
                  if (!lib.card[name] || _status.pyzhuren && _status.pyzhuren[name]) {
                    if (!player.countCards('h', 'sha')) return 4 - get.value(card);
                    return 0;
                  }
                  return 7 - get.value(card);
                },
                group: ["fusion_zhuren_effect"],
                content: function () {
                  player.addSkill('pyzhuren_destroy');
                  if (!_status.pyzhuren) _status.pyzhuren = {};
                  var rand = 0.85;
                  var num = get.number(cards[0]);
                  if (num > 4) rand = 0.9;
                  if (num > 8) rand = 0.95;
                  if (num > 12 || cards[0].name == 'shandian' || get.isLuckyStar(player)) rand = 1;
                  var name = 'pyzhuren_' + (cards[0][cards[0].name == 'shandian' ? 'name' : 'suit']);
                  if (!lib.card[name] || _status.pyzhuren[name] || Math.random() > rand) {
                    player.popup('杯具');
                    game.log(player, '锻造失败');
                    player.storage.failure++;
                    var card = get.cardPile(function (card) {
                      return card.name == 'sha';
                    });
                    if (card) player.gain(card, 'gain2');
                  }
                  else {
                    player.storage.success++;
                    _status.pyzhuren[name] = true;
                    player.gain(game.createCard(name, cards[0].name == 'shandian' ? 'spade' : cards[0].suit, 1), 'gain2')
                  }
                },
                subSkill: {
                  effect: {
                    trigger: { player: 'useCard' },
                    forced: true,
                    filter: function (event, player) {
                      return event.card && event.card.name == 'sha' && player.getEquip(1) && player.getEquip(1).name.startsWith("pyzhuren");
                    },
                    content: function () {
                      player.addTempSkill("qinggang2");
                    },
                    ai: {
                      directHit_ai: true,
                      skillTagFilter: function (player, tag, arg) {
                        return arg.card.name == 'sha' && player.getEquip(1) && player.getEquip(1).name.startsWith("pyzhuren");
                      },
                    },

                  }
                },
                ai: {
                  order: 10,
                  result: {
                    player: 1,
                  },
                },
              },

              fusion_shengong: {
                audio: "olshengong",
                enable: 'phaseUse',
                usable: 3,
                filter: function (event, player) {
                  var list = ['equip1', 'equip2', 'others'];
                  for (var i = 0; i < list.length; i++) {
                    if (player.hasSkill('fusion_shengong_' + list[i], null, null, false)) list.splice(i--, 1);
                  }
                  if (!list.length) return false;
                  return player.hasCard(function (card) {
                    var type = get.type(card);
                    if (type != 'equip') return false;
                    var subtype = get.subtype(card);
                    if (subtype != 'equip1' && subtype != 'equip2') subtype = 'others';
                    return list.contains(subtype);
                  }, 'eh');
                },
                filterCard: function (card, player) {
                  var type = get.type(card);
                  if (type != 'equip') return false;
                  var subtype = get.subtype(card);
                  if (subtype != 'equip1' && subtype != 'equip2') subtype = 'others';
                  return !player.hasSkill('fusion_shengong_' + subtype, null, null, false);
                },
                position: 'he',
                check: function (card) {
                  var val = 7.52 - get.value(card);
                  if (val <= 0) return 0;
                  var player = _status.event.player;
                  if (player.getStorage('fusion_shengong_destroy').contains(card)) val += 2;
                  return val;
                },
                content: function () {
                  'step 0'
                  var subtype = get.subtype(cards[0]);
                  if (subtype != 'equip1' && subtype != 'equip2') subtype = 'others';
                  player.addTempSkill('fusion_shengong_' + subtype, 'phaseUseAfter');
                  var send = function () {
                    game.me.chooseControl('助力锻造！', '妨碍锻造！', '什么都不做');
                    game.resume();
                  };
                  var sendback = function (result, player) {
                    if (result) {
                      var index = result.index;
                      game.log(player, '选择了', ['#b助力锻造', '#g妨碍锻造', '#b什么都不做'][index])
                      if (index > 1) return;
                      var card = get.cards()[0];
                      if (!card) return;
                      game.log(player, '展示了', card);
                      event.cardsx.push(card);
                      event.cards2[index].push(card);
                      game.broadcastAll(function (id, card, name, index) {
                        var dialog = get.idDialog(id);
                        if (!dialog) return;
                        var button = ui.create.button(card, 'card', dialog.buttonss[index]);
                        button.querySelector('.info').innerHTML = (name + '|' + get.strNumber(card.number));
                      }, event.videoId, card, function (target) {
                        if (target._tempTranslate) return target._tempTranslate;
                        var name = target.name;
                        if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
                        return get.translation(name);
                      }(player), index);
                    }
                  };
                  event.players = game.filterPlayer();
                  event.cardsx = [];
                  event.cards2 = [[], []];
                  event.videoId = lib.status.videoId++;
                  event.ai_targets = [];
                  game.broadcastAll(function (name, id) {
                    var dialog = ui.create.dialog(name + '发起了“锻造”', 'hidden', 'forcebutton');
                    dialog.videoId = id;
                    dialog.classList.add('scroll1');
                    dialog.classList.add('scroll2');
                    dialog.classList.add('fullwidth');
                    dialog.buttonss = [];

                    var list = ['协力锻造的玩家', '妨碍锻造的玩家']
                    for (var i = 0; i < list.length; i++) {
                      dialog.add('<div class="text center">' + list[i] + '</div>');
                      var buttons = ui.create.div('.buttons', dialog.content);
                      dialog.buttonss.push(buttons);
                      buttons.classList.add('popup');
                      buttons.classList.add('guanxing');
                    }
                    dialog.open();
                  }, get.translation(player), event.videoId)
                  for (var i = 0; i < event.players.length; i++) {
                    if (event.players[i] == player) {
                      sendback({ index: 0 }, player);
                    }
                    else if (event.players[i].isOnline()) {
                      event.withol = true;
                      event.players[i].send(send);
                      event.players[i].wait(sendback);
                    }
                    else if (event.players[i] == game.me) {
                      event.withme = true;
                      game.me.chooseControl('助力锻造！', '妨碍锻造！', '什么都不做');
                      if (_status.connectMode) game.me.wait(sendback);
                    }
                    else {
                      event.ai_targets.push(event.players[i]);
                      if (_status.connectMode) event.players[i].showTimer();
                    }
                  }
                  if (event.ai_targets.length) {
                    event.ai_targets.randomSort();
                    setTimeout(function () {
                      event.interval = setInterval(function () {
                        var target = event.ai_targets.shift();
                        var att = get.attitude(target, player);
                        var num = 2;
                        if (att > 0) num = 0;
                        else if (att < 0) num = 1;
                        sendback({ index: num }, target);
                        if (_status.connectMode) target.hideTimer();
                        if (!event.ai_targets.length) {
                          clearInterval(event.interval);
                          if (event.withai) game.resume();
                        }
                      }, 750);
                    }, 500)
                  }
                  'step 1'
                  if (event.withme) {
                    if (_status.connectMode) game.me.unwait(result);
                    else {
                      var index = result.index;
                      game.log(game.me, '选择了', ['#b助力锻造', '#g妨碍锻造', '#b什么都不做'][index])
                      if (index > 1) return;
                      var card = get.cards()[0];
                      if (!card) return;
                      game.log(game.me, '展示了', card);
                      event.cardsx.push(card);
                      event.cards2[index].push(card);
                      game.broadcastAll(function (id, card, name, index) {
                        var dialog = get.idDialog(id);
                        if (!dialog) return;
                        var button = ui.create.button(card, 'card', dialog.buttonss[index]);
                        button.querySelector('.info').innerHTML = (name + '|' + get.strNumber(card.number));
                      }, event.videoId, card, function (target) {
                        if (target._tempTranslate) return target._tempTranslate;
                        var name = target.name;
                        if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
                        return get.translation(name);
                      }(game.me), index);
                    }
                  }
                  'step 2'
                  if (event.withol && !event.resultOL) {
                    game.pause();
                  }
                  'step 3'
                  if (event.ai_targets.length > 0) {
                    event.withai = true;
                    game.pause();
                  }
                  'step 4'
                  game.delay(2);
                  var num1 = 0, num2 = 0;
                  for (var i of event.cards2[0]) num1 += get.number(i, false);
                  for (var i of event.cards2[1]) num2 += get.number(i, false);
                  var result = 2;
                  if (num1 < num2) result = 0;
                  else if (num2 > 0) result = 1;
                  event.duanzao_result = result;
                  if (result >= 1) {
                    player.storage.success++;
                  }
                  else {
                    player.storage.failure++;
                  }
                  game.broadcastAll(function (id, result) {
                    var dialog = get.idDialog(id);
                    if (dialog) dialog.content.firstChild.innerHTML = ['锻造失败…', '锻造成功', '完美锻造！'][result];
                  }, event.videoId, result)
                  'step 5'
                  game.cardsGotoOrdering(event.cardsx);
                  game.broadcastAll('closeDialog', event.videoId);
                  'step 6'
                  var subtype = get.subtype(cards[0]);
                  if (subtype != 'equip1' && subtype != 'equip2') subtype = 'others';
                  var card_map = {
                    equip1: [
                      ['diamond', 13, 'bintieshuangji'],
                      ['diamond', 1, 'wuxinghelingshan'],
                      ['spade', 13, 'wutiesuolian'],
                      ['diamond', 12, 'wushuangfangtianji'],
                      ['spade', 6, 'chixueqingfeng'],
                      ['spade', 5, 'guilongzhanyuedao'],
                    ],
                    equip2: [
                      ['club', 1, 'huxinjing'],
                      ['club', 2, 'heiguangkai'],
                      ['spade', 2, 'linglongshimandai'],
                      ['club', 1, 'hongmianbaihuapao'],
                      ['spade', 2, 'qimenbagua'],
                      ['spade', 9, 'guofengyupao'],
                    ],
                    others: [
                      ['diamond', 1, 'zhaogujing'],
                      ['spade', 5, 'sanlve'],
                      ['club', 12, 'tianjitu'],
                      ['spade', 2, 'taigongyinfu'],
                      ['diamond', 1, 'shufazijinguan'],
                      ['club', 4, 'xuwangzhimian'],
                    ],
                  };
                  if (!_status.fusion_shengong_map) _status.fusion_shengong_map = {};
                  if (!_status.fusion_shengong_maken) _status.fusion_shengong_maken = {};
                  var list = card_map[subtype];
                  for (var i = 0; i < list.length; i++) {
                    var name = list[i][2];
                    if (!lib.card[name] || _status.fusion_shengong_map[name]) {
                      list.splice(i--, 1);
                    }
                  }
                  if (!list.length) event.finish();
                  else player.chooseButton(['请选择一种装备牌', [list.randomGets(event.duanzao_result + 1), 'vcard']], true).set('ai', function (button) {
                    return get.value({ name: button.link[2] }, player, 'raw');
                  });
                  'step 7'
                  var name = result.links[0][2];
                  var card;
                  if (_status.fusion_shengong_maken[name]) card = _status.fusion_shengong_maken[name];
                  else {
                    card = game.createCard2(name, result.links[0][0], result.links[0][1]);
                    _status.fusion_shengong_maken[name] = card;
                  }
                  event.card = card;
                  player.addSkill('fusion_shengong_destroy');
                  player.markAuto('fusion_shengong_destroy', [card]);
                  var subtype = get.subtype(card);
                  if (!game.hasPlayer(function (current) {
                    return !current.isDisabled(subtype);
                  })) {
                    event.finish();
                    return;
                  }
                  player.chooseTarget(true, '将' + get.translation(card) + '置于一名角色的装备区内', function (card, player, target) {
                    return !target.isDisabled(_status.event.subtype);
                  }).set('subtype', subtype).set('ai', function (target) {
                    var card = _status.event.getParent().card, player = _status.event.player;
                    return get.effect(target, card, player, player);
                  });
                  'step 8'
                  if (result.bool) {
                    _status.fusion_shengong_map[card.name] = true;
                    var target = result.targets[0];
                    player.line(target, 'green');
                    target.$gain2(card);
                    game.delayx();
                    target.equip(card);
                  }
                },
                ai: {
                  order: 10,
                  result: { player: 1 },
                },
                subSkill: {
                  equip1: { charlotte: true },
                  equip2: { charlotte: true },
                  others: { charlotte: true },
                  destroy: {
                    trigger: { global: ['loseEnd', 'cardsDiscardEnd'] },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    onremove: true,
                    filter: function (event, player) {
                      if (event.name == 'lose' && event.position != ui.discardPile) return false;
                      var storage = player.storage.fusion_shengong_destroy;
                      if (!storage) return false;
                      for (var i of event.cards) {
                        if (storage.contains(i)) return true;
                      }
                      return false;
                    },
                    content: function () {
                      var cards = [];
                      var storage = player.storage.fusion_shengong_destroy;
                      for (var i of trigger.cards) {
                        if (storage.contains(i)) {
                          delete _status.fusion_shengong_map[i.name];
                          storage.remove(i);
                          cards.push(i);
                        }
                      }
                      game.cardsGotoSpecial(cards);
                      game.log(cards, '被移出了游戏');
                      player.addTempSkill('fusion_shengong_loss');
                      player.addMark('fusion_shengong_loss', cards.length, false);
                      if (!storage.length) player.removeSkill('fusion_shengong_destroy');
                    },
                  },
                  loss: {
                    audio: 'shengong',
                    trigger: { global: 'phaseJieshuBegin' },
                    forced: true,
                    charlotte: true,
                    onremove: true,
                    filter: function (event, player) {
                      return player.countMark('fusion_shengong_loss') > 0;
                    },
                    content: function () {
                      const loss = player.countMark('fusion_shengong_loss');
                      player.draw(loss);
                      if (player != trigger.player) {
                        for (let i = 0; i < loss; ++i) {
                          player.useCard(get.autoViewAs({ name: 'sha', nature: 'ice' }, result.cards), result.cards, false, trigger.player, 'fusion_shengong');
                        }

                      }
                    },
                  },
                },
              },

              // fusion_shen_jiangwei
              fusion_tiaoxin: {
                audio: 'tiaoxin',
                audioname: ['sp_jiangwei', 'xiahouba', 're_jiangwei', 'gz_jiangwei', 'ol_jiangwei'],
                enable: 'phaseUse',
                usable: 2,
                filter: function (event, player) {
                  if (player.getStat('skill').fusion_tiaoxin) return !player.hasSkill('fusion_tiaoxin2');
                  return true;
                },
                filterTarget: function (card, player, target) {
                  return target != player && target.countCards('he') > 0;
                },
                content: function () {
                  "step 0"
                  target.chooseToUse(function (card, player, event) {
                    if (get.name(card) != 'sha') return false;
                    return lib.filter.filterCard.apply(this, arguments);
                  }, '挑衅：对' + get.translation(player) + '使用一张杀，或令其弃置你的一张牌').set('targetRequired', true).set('complexSelect', true).set('filterTarget', function (card, player, target) {
                    if (target != _status.event.sourcex && !ui.selected.targets.contains(_status.event.sourcex)) return false;
                    return lib.filter.filterTarget.apply(this, arguments);
                  }).set('sourcex', player);
                  "step 1"
                  if (result.bool && player.getHistory('damage', function (evt) {
                    return evt.getParent().type == 'card' && evt.getParent(4) == event;
                  }).length > 0) player.addTempSkill('fusion_tiaoxin2', 'phaseUseEnd');
                  else if (target.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(target, 'he', true).boolline = true;
                },
                ai: {
                  order: 4,
                  expose: 0.2,
                  result: {
                    target: -1,
                    player: function (player, target) {
                      if (target.countCards('h') == 0) return 0;
                      if (target.countCards('h') == 1) return -0.1;
                      if (player.hp <= 2) return -2;
                      if (player.countCards('h', 'shan') == 0) return -1;
                      return -0.5;
                    }
                  },
                  threaten: 1.1
                }
              },
              fusion_tiaoxin2: {},
              fusion_tianren: {
                audio: "tianren",
                trigger: { global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter'] },
                forced: true,
                filter: function (event, player) {
                  if (event.name.indexOf('lose') == 0) {
                    if (event.getlx === false || event.position != ui.discardPile) return false;
                  }
                  else {
                    var evt = event.getParent();
                    if (evt.relatedEvent && evt.relatedEvent.name == 'useCard') return false;
                  }
                  for (var i of event.cards) {
                    var owner = false;
                    if (event.hs && event.hs.contains(i)) owner = event.player;
                    var type = get.type(i, null, owner);
                    if (type == 'basic' || type == 'trick') return true;
                  }
                  return false;
                },
                content: function () {
                  var num = 0;
                  for (var i of trigger.cards) {
                    var owner = false;
                    if (trigger.hs && trigger.hs.contains(i)) owner = trigger.player;
                    var type = get.type(i, null, owner);
                    if (type == 'basic' || type == 'trick') num++;
                  }
                  player.addMark('tianren', num);
                },
                group: 'fusion_tianren_maxHp',
                intro: { content: 'mark' },
                subSkill: {
                  maxHp: {
                    trigger: { player: ['fusion_tianrenAfter', 'gainMaxHpAfter', 'loseMaxHpAfter'] },
                    forced: true,
                    filter: function (event, player) {
                      return player.countMark('tianren') >= player.maxHp;
                    },
                    content: function () {
                      player.removeMark('tianren', player.maxHp);
                      player.gainMaxHp();
                      player.recover();
                      player.draw(2);
                    },
                  },
                },
              },
              fusion_pingxiang: {
                audio: "pingxiang",
                enable: 'phaseUse',
                skillAnimation: true,
                animationColor: 'ice',
                filter: function (event, player) {
                  return player.maxHp > 9;
                },
                content: function () {
                  'step 0'
                  player.loseMaxHp(9);
                  event.num = 0;
                  'step 1'
                  event.num++;
                  player.chooseUseTarget({
                    name: 'sha',
                    nature: 'fire',
                    isCard: true,
                  }, '请选择火【杀】的目标（' + (event.num == 9 ? '⑨' : event.num) + '/9）', false);
                  'step 2'
                  if (result.bool && event.num < 9) event.goto(1);
                },
                ai: {
                  order: function () {
                    return get.order({
                      name: 'sha',
                      nature: 'fire',
                      isCard: true,
                    });
                  },
                  result: {
                    player: function (player) {
                      if (player.hasValueTarget({
                        name: 'sha',
                        nature: 'fire',
                        isCard: true,
                      })) return 1;
                      return 0;
                    },
                  },
                },
              },

              // re_boss_yingzhao
              re_boss_yaoshou: {
                inherit: "boss_yaoshou",
                trigger: { player: 'useCard' },
                direct: true,
                usable: 1,
                filter: function (event, player) {
                  if (event.re_boss_yaoshou_buff || !event.targets.length || !player.isPhaseUsing() || player.hasSkill('re_boss_yaoshou_buff')) return false;
                  const type = get.type(event.card, false);
                  if (type != 'basic' && type != 'trick') return false;
                  return true;
                },
                content: function () {
                  player.addTempSkill('re_boss_yaoshou_buff', 'phaseUseAfter');
                  trigger.re_boss_yaoshou_buff = player;
                },
                subSkill: {
                  buff: {
                    trigger: { global: 'useCardToTargeted' },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    lastDo: true,
                    filter: function (event, player) {
                      return (event.parent.re_boss_yaoshou_buff == player && event.targets.length == event.parent.triggeredTargets4.length);
                    },
                    content: function () {
                      trigger.getParent().targets = trigger.getParent().targets.concat(trigger.targets);
                      trigger.getParent().triggeredTargets4 = trigger.getParent().triggeredTargets4.concat(trigger.targets);
                    },
                    onremove: function (player) {
                      delete player.storage.counttrigger.re_boss_yaoshou;
                    },
                  },
                },
              },

              // re_boss_xiangliu
              "re_boss_echou": {
                audio: "boss_echou",
                group: ["re_boss_echou_recover", "re_boss_echou_end"],
                subSkill: {
                  "recover": {
                    trigger: { global: "recoverAfter" },
                    direct: true,
                    content: function () {
                      var target = trigger.player;
                      player.line(target);
                      if (!target.storage.boss_shedu) target.storage.boss_shedu = 0;
                      target.storage.boss_shedu++;
                      target.markSkill('boss_shedu');
                    }
                  },
                  "end": {
                    trigger: { global: "phaseJieshuBegin" },
                    direct: true,
                    filter: function (event, player) {
                      return event.player.isAlive();
                    },
                    content: function () {
                      const list = game.players.slice(0);
                      list.remove(player);
                      const target = list.randomGet();
                      player.line(target);
                      if (!target.storage.boss_shedu) target.storage.boss_shedu = 0;
                      target.storage.boss_shedu++;
                      target.markSkill('boss_shedu');
                    },
                  }
                }
              },

              // fusion_xuanfeng
              fusion_xuanfeng: {
                audio: 'xuanfeng',
                audioname: ['boss_lvbu3', 're_heqi', 'xin_lingtong'],
                trigger: {
                  player: ['loseAfter', 'phaseDiscardEnd'],
                  global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                direct: true,
                filter: function (event, player) {
                  if (_status.dying.length) return false;
                  if (event.name == 'phaseDiscard') {
                    var cards = [];
                    player.getHistory('lose', function (evt) {
                      if (evt && evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
                    });
                    return cards.length > 1;
                  }
                  else {
                    var evt = event.getl(player);
                    return evt && evt.es && evt.es.length > 0;
                  }
                },
                content: function () {
                  "step 0"
                  event.count = 2;
                  event.targets = [];
                  event.logged = false;
                  event.discardTargets = new Set();

                  "step 1"
                  event.count--;
                  player.chooseTarget(get.prompt('fusion_xuanfeng'), '弃置一名其他角色的一张牌', function (card, player, target) {
                    if (player == target) return false;
                    return target.countDiscardableCards(player, 'he');
                  }).set('ai', function (target) {
                    return -get.attitude(_status.event.player, target);
                  });

                  "step 2"
                  if (result.bool) {
                    if (!event.logged) {
                      player.logSkill('fusion_xuanfeng', result.targets);
                      event.logged = true;
                    }
                    else player.line(result.targets[0], 'green');
                    // targets.add(result.targets[0]);
                    event.discardTargets.add(result.targets[0]);
                    player.discardPlayerCard(result.targets[0], 'he', true);
                  }
                  else if (!targets.length) event.finish();

                  if (event.count) event.goto(1);

                  "step 3"
                  // move
                  player.moveCard().nojudge = true;

                  "step 4"// use sha
                  player.chooseTarget("是否使用一张杀", function (card, player, target) {
                    if (target.isFriendOf(player)) return false;
                    return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                  }).ai = function (target) {
                    return get.effect(target, { name: 'sha' }, player);
                  }

                  "step 5"
                  if (result.bool) {
                    player.logSkill('fusion_xuanfeng');
                    player.useCard({ name: 'sha' }, result.targets, false);
                  }

                  "step 6"
                  player.chooseTarget('是否对一名目标角色造成1点伤害', function (card, player, target) {
                    return event.discardTargets.has(target);
                  }).set('targets', targets).set('ai', function (target) {
                    var player = _status.event.player;
                    return get.damageEffect(target, player, player);
                  });

                  "step 7"
                  if (result.bool) {
                    player.line(result.targets[0], 'thunder');
                    result.targets[0].damage();
                  }
                },
                ai: {
                  effect: {
                    player_use: function (card, player, target) {
                      if (player == target && get.type(card) == 'equip' && player.countCards('hes', function (cardx) {
                        return card != cardx && (!card.cards || !card.cards.contains(cardx)) && (player.hasSkill('yongjin') || get.subtype(card) == get.subtype(cardx)) && (get.position(cardx) == 'e' || player.canUse(cardx, player));
                      }) > 0) return;
                      if (!game.hasPlayer(function (current) {
                        return get.attitude(player, current) < 0 && current.countDiscardableCards(player, 'he') > 0 && get.damageEffect(current, player, player) > 0;
                      })) return;
                      if (typeof card == 'object' && player.isPhaseUsing() &&
                        player.needsToDiscard() == 2 && card.cards && card.cards.filter(function (i) {
                          return get.position(i) == 'h';
                        }).length > 0 && !get.tag(card, 'draw') && !get.tag(card, 'gain') && !(get.tag(card, 'discard') && target == player && player.countCards('e') > 0)) return 'zeroplayertarget';
                    },
                    target: function (card, player, target, current) {
                      if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                      if (get.tag(card, 'damage') && target.hp > 2) {
                        var num1 = target.countCards('h'), num2 = target.getHandcardLimit();
                        if (num1 > num2) return [1, 1];
                        if (num1 == num2) return [1.1, _status.event.player == target ? 3 : 0.5];
                        if (num1 == num2 - 1) return [0.1, _status.event.player == target ? 4.5 : 0.1];
                      }
                      if (typeof card == 'object' && (card.name == 'shunshou' || card.name == 'guohe' || card.name == 'zhujinqiyuan') && target.countCards('h') > 0 && get.attitude(player, target) < 0) return [1, -1];
                    }
                  },
                  reverseEquip: true,
                  noe: true,
                  expose: 0.2,
                }
              },
              "fusion_yinshi": {
                trigger: { player: 'phaseDrawBegin' },
                forced: true,
                content: function () {
                  const old_dc_list = ["xushao", "puyuan", "guozhao", "guansuo", "zhaoxiang", "xin_lingtong",
                    "re_liuzan"];
                  const dc_list = ["caojinyu", "wanglang", "guanning", "re_sunyi", "lvlingqi", "re_panshu",
                    "zhouyi", "re_nanhualaoxian", "dc_liuba", "dc_jiben", "shen_jiangwei", "shen_machao",
                    "tenggongzhu", "caomao", "zhangxuan", "dc_zhouxuān", "xuelingyun", "shen_zhangfei",
                    "shen_zhangjiao", "luyi"];
                  const mobile_list = ["shen_xunyu", "yangbiao", "sp_duyu"];
                  const ol_list = ["huangchengyan", "ol_weiyan", "panshu", "wolongfengchu", "shen_caopi", "wangyan"];
                  const other_list = ["sp_xiahoushi", "tw_dongzhao"];
                  const all_list = old_dc_list.concat(dc_list).concat(mobile_list).concat(ol_list).concat(other_list);
                  trigger.num += game.countPlayer(function (current) {
                    return all_list.contains(current.name) || all_list.contains(current.name2);
                  });
                },
                ai: {
                  threaten: 4
                }
              },

              "fusion_liji": {
                enable: 'phaseUse',
                audio: "liji",
                filter: function (event, player) {
                  return (player.getStat().skill.fusion_liji || 0) < (event.fusion_liji_num || 0);
                },
                onChooseToUse: function (event) {
                  if (game.online) return;
                  var num = 0;
                  var evt2 = event.getParent();
                  if (!evt2.fusion_liji_all) evt2.fusion_liji_all = 4;
                  game.getGlobalHistory('cardMove', function (evt) {
                    if (evt.name == 'cardsDiscard' || (evt.name == 'lose' && evt.position == ui.discardPile)) num += evt.cards.length;
                  });
                  event.set('fusion_liji_num', Math.floor(num / evt2.fusion_liji_all));
                },
                filterCard: true,
                position: 'he',
                check: function (card) {
                  var val = get.value(card);
                  if (!_status.event.player.getStorage('refenyin_mark').contains(get.suit(card))) return 12 - val;
                  return 8 - val;
                },
                filterTarget: lib.filter.notMe,
                content: function () {
                  target.damage('nocard');
                },
                ai: {
                  order: 1,
                  result: {
                    target: -1.5
                  },
                  tag: {
                    damage: 1
                  },
                },
              },

              // math_xiahoujie
              math_liedan: {
                audio: "liedan",
                trigger: { global: 'phaseZhunbeiBegin' },
                forced: true,
                filter: function (event, player) {
                  return (player != event.player || player.countMark('math_liedan') > 4);
                },
                logTarget: 'player',
                content: function () {
                  if (player == trigger.player) {
                    player.die();
                    return;
                  }
                  var num = 0;
                  if (player.hp >= trigger.player.hp) num++;
                  if (player.countCards('h') >= trigger.player.countCards('h')) num++;
                  if (player.countCards('e') >= trigger.player.countCards('e')) num++;
                  if (num) {
                    player.draw(num);
                    if (num == 3) {
                      player.gainMaxHp();
                      player.recover();
                    }
                  }
                  else {
                    player.addMark('math_liedan', 1);
                    player.loseHp();
                  }
                },
              },
              math_zhuangdan: {
                audio: "zhuangdan",
                trigger: { global: 'phaseEnd' },
                forced: true,
                filter: function (event, player) {
                  return player != event.player && player.isMaxHandcard(true);
                },
                content: function () {
                  player.line(target, 'green');
                  trigger.player.damage();
                },
              },
              math_pingjian: {
                audio: "pingjian",
                trigger: {
                  player: ['damageEnd', 'phaseJieshuBegin', "phaseZhunbeiBegin",],
                },

                /**
                 * 
                 * @param {*} event event name
                 * @param {*} player player name
                 * @param {*} phase phase name
                 * @returns void
                 */
                getSkills: function (event, player, phase) {
                  function checkSkills(skill) {
                    const info = lib.skill[skill];
                    switch (phase) {
                      case "phaseZhunbeiBegin":
                      case "phaseJieshuBegin":
                      case "damageEnd":
                        if (!info || !info.trigger || !info.trigger.player || info.silent || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill)
                          return;
                        /**
                         * these 3 conditions check phase
                         */
                        if (info.trigger.player == phase || Array.isArray(info.trigger.player) && info.trigger.player.contains(phase)) {
                          if (info.init || info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) return;
                          if (info.filter) {
                            try {
                              var bool = info.filter(phase, player, phase);
                              if (!bool) return;
                            }
                            catch (e) {
                              return;
                            }
                          }
                          break;
                        }
                        else return;
                      case "phaseUse":
                        if (!info || !info.enable || info.viewAs || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill)
                          return;
                        if (info.enable == 'phaseUse' || Array.isArray(info.enable) && info.enable.contains('phaseUse')) {
                          if (info.init || info.onChooseToUse || info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) return;
                          if (info.filter) {
                            try {
                              var bool = info.filter(event.getParent(2), player);
                              if (!bool) return;
                            }
                            catch (e) {
                              return;
                            }
                          }
                          break;
                        }
                        else return;
                      default: break;
                    }
                    list.add(name); // name is the character name
                    if (!map[name]) map[name] = [];
                    map[name].push(skill);
                    skills.add(skill);
                  }

                  if (!_status.characterlist) {
                    game.utils.initAllCharacters();
                  }
                  var list = []; // store characters
                  var skills = []; // store usable skills
                  var map = [];
                  _status.characterlist.randomSort();

                  /**
                   * get all characters from available list and choose skill meeting demands
                   */
                  for (var i = 0; i < _status.characterlist.length; i++) {
                    var name = _status.characterlist[i];
                    if (name.indexOf('zuoci') != -1 || name.indexOf('xushao') != -1) continue;
                    var skills2 = lib.character[name][3]; // get all skills from a character
                    for (var j = 0; j < skills2.length; j++) {
                      if (player.storage.math_pingjian.contains(skills2[j]))
                        continue; // have used
                      checkSkills(skills2[j]);

                      // check sub skills
                      if (lib.skill[skills2[j]].group) {
                        const list2 = [skills2[j]];
                        game.expandSkills(list2);
                        for (const sub_skill of list2) {
                          checkSkills(sub_skill);
                        }
                      }
                    }
                    if (list.length >= 5) break; // show 5 skills

                  }
                  return { skills, list };
                },
                frequent: true,
                content: function () {
                  'step 0'
                  if (!player.storage.math_pingjian) player.storage.math_pingjian = [];
                  if (!player.storage.math_pingjian_times) {
                    player.storage.math_pingjian_times = 0;
                  }
                  event._result = { bool: true };
                  'step 1'
                  if (result.bool) {
                    const { skills, list } = lib.skill.math_pingjian.getSkills(event, player, event.triggername);
                    if (!skills.length) {
                      event.finish();
                    }
                    else {
                      player.chooseControl(skills).set('dialog', ['请选择要发动的技能', [list, 'character']]).set('ai', function () { return 0 });
                    }
                  }
                  else event.finish();
                  'step 2'
                  if (result.control == '摸一张牌') {
                    player.draw();
                    return;
                  }
                  player.storage.math_pingjian.add(result.control);
                  player.addTempSkill(result.control, event.triggername == 'damageEnd' ? 'damageAfter' : 'phaseJieshu');
                  ++player.storage.math_pingjian_times;
                  if (event.triggername == 'damageEnd' && player.storage.math_pingjian_times < player.getDamagedHp()) {
                    event.goto(0);
                  }
                  else {
                    player.storage.math_pingjian_times = null;
                  }
                },
                group: 'math_pingjian_use',
                phaseUse_special: ['xinfu_lingren'],
              },
              math_pingjian_use: {
                audio: 'pingjian',
                enable: 'phaseUse',
                filter: function (event, player) {
                  return (player.getStat().skill.math_pingjian_use || 0) < player.hp;
                },
                position: 'he',
                content: function () {
                  'step 0'
                  if (!player.storage.math_pingjian) player.storage.math_pingjian = [];
                  event._result = { bool: true };
                  'step 1'
                  if (result.bool) {
                    const { skills, list } = lib.skill.math_pingjian.getSkills(event, player, "phaseUse");
                    if (!skills.length) {
                      event.finish();
                    }
                    else {
                      player.chooseControl(skills).set('dialog', ['请选择要发动的技能', [list, 'character']]).set('ai', function () { return 0 });
                    }
                  }
                  else event.finish();
                  'step 2'
                  if (result.control == '摸一张牌') {
                    player.draw();
                    return;
                  }
                  player.storage.math_pingjian.add(result.control);
                  player.addTempSkill(result.control, 'phaseUseEnd');
                  player.addTempSkill('math_pingjian_temp', 'phaseUseEnd');
                  player.storage.math_pingjian_temp = result.control;
                },
                ai: { order: 10, result: { player: 1 } },
              },
              math_pingjian_temp: {
                onremove: true,
                trigger: { player: ['useSkillBegin', 'useCard1'] },
                silent: true,
                firstDo: true,
                filter: function (event, player) {
                  var info = lib.skill[event.skill];
                  if (!info) return false;
                  if (event.skill == player.storage.math_pingjian_temp) return true;
                  if (info.sourceSkill == player.storage.math_pingjian_temp || info.group == player.storage.math_pingjian_temp) return true;
                  if (Array.isArray(info.group) && info.group.contains(player.storage.math_pingjian_temp)) return true;
                  return false;
                },
                content: function () {
                  player.removeSkill(player.storage.math_pingjian_temp);
                  player.removeSkill('math_pingjian_temp');
                },
              },

              // math_zhangchangpu
              math_yanjiao: {
                audio: "yanjiao",
                enable: "phaseUse",
                usable: 1,
                zhuanhuanji: true,
                mark: true,
                marktext: '☯',
                intro: {
                  content: function (storage, player, skill) {
                    if (!player.storage.math_yanjiao) return '你可以从牌堆顶亮出4张牌，将这些牌分成点数之和相等的两组，你获得其中一组，然后将剩余未分组的牌置入弃牌堆。若未分组的牌超过一张，你失去一点体力。然后你弃置场上X张牌（X为另一组的数量）。';
                    return '你可以选择一名其他角色并从牌堆顶亮出四张牌。该角色将这些牌分成点数之和相等的两组，你选择获得其中一组，其获得另一组，然后将剩余未分组的牌置入弃牌堆。你对其造成X点伤害。（X为未分组的牌数一半，向下取整）';
                  },
                },
                group: ["math_yanjiao_1", "math_yanjiao_2"],
                content: function () {
                  "step 0"
                  if (!player.storage.math_yanjiao_cards) {
                    player.storage.math_yanjiao_cards = 3;
                  }
                  player.changeZhuanhuanji("math_yanjiao");

                  "step 1"
                  player.storage.math_yanjiao_cards++;
                  if (player.storage.math_yanjiao) {
                    player.useSkill("math_yanjiao_1");
                  }
                  else {
                    player.useSkill("math_yanjiao_2");
                  };

                  "step 2"
                  if (player.hasSkill("math_yanjiao") && player.storage.math_yanjiao_cards >= 10) {
                    player.removeSkill("math_yanjiao");
                    player.addSkill("math_yanjiao_upgrade");
                  }
                },
                subSkill: {
                  "1": {
                    audio: "yanjiao",
                    content: function () {
                      "step 0"
                      var num = player.storage.math_yanjiao_cards;
                      event.cards = get.cards(num);
                      game.cardsGotoOrdering(event.cards);
                      player.showCards(event.cards);
                      "step 1"
                      /* remove automatic calculation here */

                      "step 2"
                      var next = player.chooseToMove('严教：分出点数相等的两组牌');
                      next.set('chooseTime', (cards.length * 4).toString());
                      next.set('list', [
                        ['未分配', cards, function (list) {
                          var num = 0;
                          for (var i of list) num += i.number;
                          return '未分配（点数和' + num + '）';
                        }],
                        ['第一组', [], function (list) {
                          var num = 0;
                          for (var i of list) num += i.number;
                          return '第一组（点数和' + num + '）';
                        }],
                        ['第二组', [], function (list) {
                          var num = 0;
                          for (var i of list) num += i.number;
                          return '第二组（点数和' + num + '）';
                        }],
                      ]);
                      next.set('filterOk', function (moved) {
                        var num1 = 0;
                        for (var i of moved[1]) num1 += i.number;
                        if (num1 == 0) return false;
                        var num2 = 0;
                        for (var i of moved[2]) num2 += i.number;
                        return num1 == num2;
                      })
                      next.set('processAI', () => false);

                      "step 3"
                      if (result.bool) {
                        var moved = result.moved;
                        event.getedResult = [[moved[1], moved[2], moved[0]]];
                        event.goto(4);
                      }
                      else {
                        // no moving
                        player.damage('nosource');
                        event.finish();
                      }

                      "step 4"
                      if (result.bool && result.links) event.index = result.links[0];
                      else event.index = 0;

                      event.togain = event.getedResult[event.index];
                      player.showCards(event.togain[0], get.translation(player) + '分出的第一份牌');
                      "step 5"
                      player.showCards(event.togain[1], get.translation(player) + '分出的第二份牌');
                      "step 6"
                      player.chooseControl().set('choiceList', [
                        `获得${get.translation(event.togain[0])},并弃置场上${event.togain[1].length}张牌`,
                        `获得${get.translation(event.togain[1])},并弃置场上${event.togain[0].length}张牌`
                      ]).ai = function () { return Math.random() < 0.5 ? 1 : 0 };
                      "step 7"
                      var list = [
                        [player, event.togain[result.index]], // get
                      ];
                      game.loseAsync({
                        gain_list: list,
                        giver: player,
                        animate: 'gain2',
                      }).setContent('gaincardMultiple');

                      if (event.togain[2].length > 1) {
                        player.damage('nosource');
                      }

                      event.discardCards = event.togain[1 ^ result.index].length;
                      if (event.discardCards === 0) {
                        event.finish();
                      }
                      // discard cards
                      "step 8"
                      if (game.hasPlayer(function (current) {
                        return current.hasCard(function (card) {
                          return lib.filter.canBeDiscarded(card, player, current);
                        }, 'hej');
                      })) {
                        player.chooseTarget('是否弃置场上的一张牌？', function (card, player, target) {
                          return target.hasCard(function (card) {
                            return lib.filter.canBeDiscarded(card, player, target);
                          }, 'hej');
                        });
                      }
                      else event.finish();

                      "step 9"
                      if (result.bool) {
                        var target = result.targets[0];
                        player.line(target, 'thunder');
                        player.discardPlayerCard(target, true, 'hej');

                        if (--event.discardCards > 0) {
                          event.goto(8);
                        }
                      }

                    },
                  },
                  "2": {
                    audio: "yanjiao",
                    content: function () {
                      "step 0"
                      player.chooseTarget('选择一名其他角色', true, function (card, player, target) {
                        return target != player;
                      }).set('ai', function (target) {
                        return -get.attitude(_status.event.player, target);
                      });

                      "step 1"
                      event.target = result.targets[0];
                      var num = player.storage.math_yanjiao_cards;
                      event.cards = get.cards(num);
                      game.cardsGotoOrdering(event.cards);
                      player.showCards(event.cards);

                      "step 2"
                      event.getedResult = lib.skill.yanjiao.getResult(cards);
                      if (!event.getedResult.length) {
                        event.target.damage(cards.length);
                        event.finish();
                      }
                      if (event.target.isOnline()) {
                        event.goto(8);
                      }

                      "step 3"
                      if (!_status.connectMode) {
                        var choiceList = ui.create.dialog('请选择一种方案', 'hidden', 'forcebutton');
                        for (var i = 0; i < event.getedResult.length; i++) {
                          var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">方案' + get.cnNumber(i + 1, true);
                          str += '<br>第一组：';
                          var current = event.getedResult[i];
                          str += get.translation(current[0]);
                          str += '<br>第二组：';
                          str += get.translation(current[1]);
                          if (current[2].length) {
                            str += '<br>剩余：';
                            str += get.translation(current[2]);
                          }
                          str += '</div>';
                          var next = choiceList.add(str);
                          next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                          next.firstChild.link = i;
                          for (var j in lib.element.button) {
                            next[j] = lib.element.button[j];
                          }
                          choiceList.buttons.add(next.firstChild);
                        }
                        event.choiceList = choiceList;
                        event.target.chooseButton(choiceList, true);
                      }

                      "step 4"
                      if (result.bool && result.links) event.index = result.links[0];
                      else event.index = 0;
                      event.togain = event.getedResult[event.index];
                      event.target.showCards(event.togain[0], get.translation(event.target) + '分出的第一份牌');
                      "step 5"
                      event.target.showCards(event.togain[1], get.translation(event.target) + '分出的第二份牌');
                      "step 6"
                      player.chooseControl().set('choiceList', [
                        '获得' + get.translation(event.togain[0]),
                        '获得' + get.translation(event.togain[1])
                      ]).ai = function () { return event.togain[0].length > event.togain[1].length ? 1 : 0 };
                      "step 7"
                      var list = [
                        [player, event.togain[result.index]],
                        [event.target, event.togain[1 - result.index]]
                      ];
                      game.loseAsync({
                        gain_list: list,
                        giver: event.target,
                        animate: 'gain2',
                      }).setContent('gaincardMultiple');

                      player.line(event.target, 'green');
                      event.target.damage(event.togain[2].length);
                      event.finish();

                      "step 8"
                      var next = event.target.chooseToMove('严教：分出点数相等的两组牌');
                      next.set('chooseTime', (cards.length * 4).toString());
                      next.set('list', [
                        ['未分配', cards, function (list) {
                          var num = 0;
                          for (var i of list) num += i.number;
                          return '未分配（点数和' + num + '）';
                        }],
                        ['第一组', [], function (list) {
                          var num = 0;
                          for (var i of list) num += i.number;
                          return '第一组（点数和' + num + '）';
                        }],
                        ['第二组', [], function (list) {
                          var num = 0;
                          for (var i of list) num += i.number;
                          return '第二组（点数和' + num + '）';
                        }],
                      ]);
                      next.set('filterOk', function (moved) {
                        var num1 = 0;
                        for (var i of moved[1]) num1 += i.number;
                        if (num1 == 0) return false;
                        var num2 = 0;
                        for (var i of moved[2]) num2 += i.number;
                        return num1 == num2;
                      })
                      next.set('processAI', () => false);

                      "step 9"
                      if (result.bool) {
                        var moved = result.moved;
                        event.getedResult = [[moved[1], moved[2], moved[0]]];
                        event.goto(4);
                      }
                    }
                  },
                },
              },

              math_yanjiao_upgrade: {
                audio: "yanjiao",
                enable: "phaseUse",
                usable: 1,
                content: function () {
                  "step 0"
                  player.chooseTarget('选择一名其他角色', true, function (card, player, target) {
                    return target != player;
                  }).set('ai', function (target) {
                    return -get.attitude(_status.event.player, target);
                  });

                  "step 1"
                  event.target = result.targets[0];
                  event.cards = get.cards(10);
                  game.cardsGotoOrdering(event.cards);
                  player.showCards(event.cards);

                  "step 2"
                  event.getedResult = lib.skill.yanjiao.getResult(cards);
                  if (!event.getedResult.length) {
                    event.target.damage(cards.length);
                    event.finish();
                  }

                  if (event.target.isOnline()) {
                    event.goto(10);
                  }

                  "step 3"
                  if (!_status.connectMode) {
                    var choiceList = ui.create.dialog('请选择一种方案', 'hidden', 'forcebutton');
                    for (var i = 0; i < event.getedResult.length; i++) {
                      var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">方案' + get.cnNumber(i + 1, true);
                      str += '<br>第一组：';
                      var current = event.getedResult[i];
                      str += get.translation(current[0]);
                      str += '<br>第二组：';
                      str += get.translation(current[1]);
                      if (current[2].length) {
                        str += '<br>剩余：';
                        str += get.translation(current[2]);
                      }
                      str += '</div>';
                      var next = choiceList.add(str);
                      next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                      next.firstChild.link = i;
                      for (var j in lib.element.button) {
                        next[j] = lib.element.button[j];
                      }
                      choiceList.buttons.add(next.firstChild);
                    }
                    event.choiceList = choiceList;
                    event.target.chooseButton(choiceList, true);
                  }

                  "step 4"
                  if (result.bool && result.links) event.index = result.links[0];
                  else event.index = 0;
                  event.togain = event.getedResult[event.index];
                  event.target.showCards(event.togain[0], get.translation(event.target) + '分出的第一份牌');
                  "step 5"
                  event.target.showCards(event.togain[1], get.translation(event.target) + '分出的第二份牌');
                  "step 6"
                  player.chooseControl().set('choiceList', [
                    '获得' + get.translation(event.togain[0]),
                    '获得' + get.translation(event.togain[1])
                  ]).ai = function () { return event.togain[0].length > event.togain[1].length ? 1 : 0 };

                  /**
                   * result
                   */
                  "step 7"
                  var list = [
                    [player, event.togain[result.index]],
                    [event.target, event.togain[1 - result.index]]
                  ];
                  game.loseAsync({
                    gain_list: list,
                    giver: event.target,
                    animate: 'gain2',
                  }).setContent('gaincardMultiple');

                  const num = event.togain[1 - result.index].length;

                  event.target.chooseCard('he', num, '严教：将' + num + '张牌交给' + get.translation(player))
                    .set('ai', function (card) {
                      return 11 - get.value(card);
                    });

                  "step 8"
                  target.give(result.cards, player, 'give');

                  "step 9"
                  player.line(event.target, 'green');
                  event.target.damage(event.togain[2].length);
                  event.finish();

                  "step 10"
                  var next = event.target.chooseToMove('严教：分出点数相等的两组牌');
                  next.set('chooseTime', (cards.length * 4).toString());
                  next.set('list', [
                    ['未分配', cards, function (list) {
                      var num = 0;
                      for (var i of list) num += i.number;
                      return '未分配（点数和' + num + '）';
                    }],
                    ['第一组', [], function (list) {
                      var num = 0;
                      for (var i of list) num += i.number;
                      return '第一组（点数和' + num + '）';
                    }],
                    ['第二组', [], function (list) {
                      var num = 0;
                      for (var i of list) num += i.number;
                      return '第二组（点数和' + num + '）';
                    }],
                  ]);
                  next.set('filterOk', function (moved) {
                    var num1 = 0;
                    for (var i of moved[1]) num1 += i.number;
                    if (num1 == 0) return false;
                    var num2 = 0;
                    for (var i of moved[2]) num2 += i.number;
                    return num1 == num2;
                  })
                  next.set('processAI', () => false);

                  "step 11"
                  if (result.bool) {
                    var moved = result.moved;
                    event.getedResult = [[moved[1], moved[2], moved[0]]];
                    event.goto(4);
                  }


                }
              },

              math_xingshen: {
                audio: "xingshen",
                trigger: {
                  player: "damageEnd",
                },
                content: function () {
                  if (player.hasSkill("math_yanjiao")) {
                    player.useSkill("math_yanjiao");
                  }
                  else {
                    player.useSkill("math_yanjiao_upgrade");
                  }

                },
              },


              // fusion_zhuanlundizang
              "fusion_wuliang": {
                forced: true,
                audio: "boss_wuliang",
                trigger: {
                  global: "gameDrawAfter",
                  player: ['phaseZhunbeiBegin', 'phaseJieshuBegin', 'enterGame'],
                },
                filter: function (event, player, name) {
                  if (name == 'gameDrawAfter' || name == 'enterGame' || name == 'phaseZhunbeiBegin') {
                    return true;
                  }

                  return true;
                },
                content: function () {
                  var name = event.triggername;
                  if (name == "entergame") {
                    player.draw(3);
                  }
                  else {
                    const list = game.filterPlayer(function (current) {
                      return current.isAlive();
                    });


                    for (const character of list) {
                      if (name == 'phaseZhunbeiBegin') {
                        character.gainMaxHp();
                      }
                      else {
                        character.recover();
                      }
                    }
                    player.draw(2);

                  }
                }
              },
              "fusion_lunhui": {
                audio: "boss_lunhui",
                trigger: { player: 'phaseZhunbeiBegin' },
                forced: true,
                filter: function (event, player) {
                  return game.hasPlayer(function (current) {
                    return current != player && current.hp > player.hp;
                  });
                },
                content: function () {
                  const candidates = game.filterPlayer(function (current) {
                    return current.hp > player.hp;
                  });
                  let maxHp = 0, list = [];
                  candidates.forEach((candidate) => {
                    if (candidate.hp > maxHp) {
                      maxHp = candidate.hp;
                      list = [candidate];
                    }
                    else if (candidate.hp === maxHp) {
                      list.push(candidate);
                    }
                  })

                  if (list.length) {
                    var target = list.randomGet();
                    player.line(target);
                    const tmp = player.hp;
                    player.hp = target.hp;
                    target.hp = tmp;

                    player.update();
                    target.update();
                    game.log(player, '和', target, '交换了体力值')
                  }
                },
              },

              // fusion_shen_xunyu
              fusion_quhu: {
                audio: "quhu",
                audioname: ['re_xunyu', 'ol_xunyu'],
                enable: 'phaseUse',
                usable: 1,
                filter: function (event, player) {
                  if (player.countCards('h') == 0) return false;
                  return game.hasPlayer(function (current) {
                    return player.canCompare(current);
                  });
                },
                filterTarget: function (card, player, target) {
                  return player.canCompare(target);
                },
                content: function () {
                  "step 0"
                  player.chooseToCompare(target);
                  "step 1"
                  if (result.bool) {
                    const delta = result.num1 - result.num2;
                    if (game.hasPlayer(function (player) {
                      return player != target && target.inRange(player);
                    })) {
                      player.chooseTarget([1, delta], "请选择至多" + delta + "名角色，对其造成1点伤害", function (card, player, target) {
                        var source = _status.event.source;
                        return target != source && source.inRange(target);
                      }, true).set('ai', function (target) {
                        return get.damageEffect(target, _status.event.source, player);
                      }).set('source', target);
                    }
                    else {
                      event.finish();
                    }
                  }
                  else {
                    player.damage(target);
                    event.finish();
                  }
                  "step 2"
                  if (result.bool && result.targets && result.targets.length) {
                    result.targets.forEach((tg) => {
                      target.line(tg, 'green');
                      tg.damage(target);
                    })
                  }
                },
                ai: {
                  order: 0.5,
                  result: {
                    target: function (player, target) {
                      var att = get.attitude(player, target);
                      var oc = (target.countCards('h') == 1);
                      if (att > 0 && oc) return 0;
                      var players = game.filterPlayer();
                      for (var i = 0; i < players.length; i++) {
                        if (players[i] != target && players[i] != player &&
                          target.inRange(players[i])) {
                          if (get.damageEffect(players[i], target, player) > 0) {
                            return att > 0 ? att / 2 : att - (oc ? 5 : 0);
                          }
                        }
                      }
                      return 0;
                    },
                    player: function (player, target) {
                      if (target.hasSkillTag('jueqing', false, target)) return -10;
                      var mn = 1;
                      var hs = player.getCards('h');
                      for (var i = 0; i < hs.length; i++) {
                        mn = Math.max(mn, get.number(hs[i]));
                      }
                      if (mn <= 11 && player.hp < 2) return -20;
                      var max = player.maxHp - hs.length;
                      var players = game.filterPlayer();
                      for (var i = 0; i < players.length; i++) {
                        if (get.attitude(player, players[i]) > 2) {
                          max = Math.max(Math.min(5, players[i].hp) - players[i].countCards('h'), max);
                        }
                      }
                      switch (max) {
                        case 0: return mn == 13 ? 0 : -20;
                        case 1: return mn >= 12 ? 0 : -15;
                        case 2: return 0;
                        case 3: return 1;
                        default: return max;
                      }
                    }
                  },
                  expose: 0.2
                }
              },
              fusion_jieming_all: {
                derivation: ["oljieming", "rejieming"],
                group: ["oljieming", "rejieming", "fusion_jieming"],
              },
              fusion_jieming: {
                audio: "oljieming",
                trigger: { player: ['damageEnd'] },
                direct: true,
                forceDie: true,
                filter: function (event, player) {
                  return player.isIn();
                },
                content: function () {
                  'step 0'
                  event.count = trigger.num || 1;
                  'step 1'
                  event.count--;
                  player.chooseTarget(get.prompt2('fusion_jieming'), function (card, player, target) {
                    return target.hp > 0;
                  }).set('ai', function (target) {
                    var att = get.attitude(_status.event.player, target);
                    var draw = Math.min(5, target.hp) - target.countCards('h');
                    if (draw >= 0) {
                      if (target.hasSkillTag('nogain')) att /= 6;
                      if (att > 2) {
                        return Math.sqrt(draw + 1) * att;
                      }
                      return att / 3;
                    }
                    if (draw < -1) {
                      if (target.hasSkillTag('nogain')) att *= 6;
                      if (att < -2) {
                        return -Math.sqrt(1 - draw) * att;
                      }
                    }
                    return 0;
                  });
                  'step 2'
                  if (result.bool) {
                    var target = result.targets[0];
                    event.target = target;
                    player.logSkill('fusion_jieming', target);
                    target.draw(Math.min(5, target.hp));
                  }
                  else event.finish();
                  'step 3'
                  var num = target.countCards('h') - Math.min(5, target.hp);
                  if (num > 0) target.chooseToDiscard('h', true, num);
                  'step 4'
                  if (event.count > 0 && player.isIn() && player.hasSkill('fusion_jieming')) event.goto(1);
                },
                ai: {
                  expose: 0.2,
                  maixie: true,
                  maixie_hp: true,
                  effect: {
                    target: function (card, player, target, current) {
                      if (get.tag(card, 'damage') && target.hp > 1) {
                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                        var max = 0;
                        var players = game.filterPlayer();
                        for (var i = 0; i < players.length; i++) {
                          if (get.attitude(target, players[i]) > 0) {
                            max = Math.max(Math.min(5, players[i].hp) - players[i].countCards('h'), max);
                          }
                        }
                        switch (max) {
                          case 0: return 2;
                          case 1: return 1.5;
                          case 2: return [1, 2];
                          default: return [0, max];
                        }
                      }
                      if ((card.name == 'tao' || card.name == 'caoyao') &&
                        target.hp > 1 && target.countCards('h') <= target.hp) return [0, 0];
                    }
                  },
                }

              },
              fusion_tianzuo: {
                audio: "tianzuo",
                trigger: {
                  global: "phaseBefore",
                  player: ["enterGame", "phaseBegin"],
                },
                forced: true,
                content: function () {
                  if (event.triggername == "enterGame") {
                    game.addGlobalSkill('fusion_tianzuo_global');
                    for (var i = 2; i < 10; i++) {
                      var card = game.createCard2('qizhengxiangsheng', i % 2 ? 'club' : 'spade', i);
                      ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    game.broadcastAll(function () { lib.inpile.add('qizhengxiangsheng') });
                    game.updateRoundNumber();
                  }
                  else if (event.triggername === "phaseBegin") {
                    const suit = Math.ceil(Math.random() * 4);
                    const rank = Math.ceil(Math.random() * 13);
                    var card = game.createCard2('qizhengxiangsheng', ["club", "diamond", "heart", "spade"][suit], rank);
                    player.gain(card, 'gain2', 'log');
                  }
                },
                group: 'fusion_tianzuo_remove',
                subSkill: {
                  remove: {
                    audio: 2,
                    trigger: { target: 'useCardToBefore' },
                    forced: true,
                    priority: 15,
                    filter: function (event, player) {
                      return event.card && event.card.name == 'qizhengxiangsheng';
                    },
                    content: function () {
                      trigger.cancel();
                    },
                    ai: {
                      effect: {
                        target: function (card, player, target) {
                          if (card && card.name == 'qizhengxiangsheng') return 'zerotarget';
                        },
                      }
                    },
                  },
                  global: {
                    trigger: { player: 'useCardToPlayered' },
                    forced: true,
                    popup: false,
                    filter: function (event, player) {
                      return event.card.name == 'qizhengxiangsheng';
                    },
                    content: function () {
                      'step 0'
                      var target = trigger.target;
                      event.target = target;
                      player.chooseControl('奇兵', '正兵').set('prompt', '请选择' + get.translation(target) + '的标记').set('choice', function () {
                        var e1 = 1.5 * get.sgn(get.damageEffect(target, player, target));
                        var e2 = 0;
                        if (target.countGainableCards(player, 'h') > 0 && !target.hasSkillTag('noh')) e2 = -1;
                        var es = target.getGainableCards(player, 'e');
                        if (es.length) e2 = Math.min(e2, function () {
                          var max = 0;
                          for (var i of es) max = Math.max(max, get.value(i, target))
                          return -max / 4;
                        }());
                        if (Math.abs(e1 - e2) <= 0.3) return Math.random() < 0.5 ? '奇兵' : '正兵';
                        if (e1 < e2) return '奇兵';
                        return '正兵';
                      }()).set('ai', function () {
                        return _status.event.choice;
                      });
                      'step 1'
                      var map = trigger.getParent().customArgs, id = target.playerid;
                      if (!map[id]) map[id] = {};
                      map[id].qizheng_name = result.control;
                    },
                  },
                  rewrite: {
                    audio: 'tianzuo',
                    trigger: { global: 'useCardToTargeted' },
                    filter: function (event, player) {
                      return event.card.name == 'qizhengxiangsheng';
                    },
                    logTarget: 'target',
                    prompt2: '观看其手牌并修改“奇正相生”标记',
                    content: function () {
                      'step 0'
                      var target = trigger.target;
                      event.target = target;
                      if (player != target && target.countCards('h') > 0) player.viewHandcards(target);
                      player.chooseControl('奇兵', '正兵').set('prompt', '请选择' + get.translation(target) + '的标记').set('choice', function () {
                        var shas = target.getCards('h', 'sha'), shans = target.getCards('h', 'shan');
                        var e1 = 1.5 * get.sgn(get.damageEffect(target, player, target));
                        var e2 = 0;
                        if (target.countGainableCards(player, 'h') > 0 && !target.hasSkillTag('noh')) e2 = -1;
                        var es = target.getGainableCards(player, 'e');
                        if (es.length) e2 = Math.min(e2, function () {
                          var max = 0;
                          for (var i of es) max = Math.max(max, get.value(i, target))
                          return -max / 4;
                        }());
                        if (get.attitude(player, target) > 0) {
                          if (shas.length >= Math.max(1, shans.length)) return '奇兵';
                          if (shans.length > shas.length) return '正兵';
                          return e1 > e2 ? '奇兵' : '正兵';
                        }
                        if (shas.length) e1 = -0.5;
                        if (shans.length) e2 = -0.7;
                        if (Math.abs(e1 - e2) <= 0.3) return Math.random() < 0.5 ? '奇兵' : '正兵';
                        var rand = Math.random();
                        if (e1 < e2) return rand < 0.1 ? '奇兵' : '正兵';
                        return rand < 0.1 ? '正兵' : '奇兵';
                      }()).set('ai', () => (_status.event.choice));
                      'step 1'
                      var map = trigger.getParent().customArgs, id = target.playerid;
                      if (!map[id]) map[id] = {};
                      map[id].qizheng_name = result.control;
                      map[id].qizheng_aibuff = get.attitude(player, target) > 0;
                    },
                  },
                },
              },
              fusion_lingce: {
                audio: "lingce",
                trigger: { global: 'useCard' },
                forced: true,
                filter: function (event, player) {
                  return (event.card.name == 'qizhengxiangsheng' || get.zhinangs().contains(event.card.name) || player.getStorage('dinghan').contains(event.card.name));
                },
                content: function () {
                  player.draw();
                },
              },
              fusion_liuxiang: {
                trigger: { player: "useCardToTargeted" },
                forced: true,
                filter: function (event, player) {
                  return event.target != player && event.skill != "fusion_liuxiang" && get.type(event.card) != "delay";
                },
                content: function () {
                  player.line(target, 'green');
                  trigger.target.storage.fusion_liuxiang_target = player;
                  trigger.target.storage.fusion_liuxiang_card = trigger.cards;
                  trigger.target.addSkill("fusion_liuxiang_effect");
                },
                subSkill: {
                  effect: {
                    mark: true,
                    marktext: '香',
                    intro: {
                      content: function (storage, player, skill) {
                        return "留香内容：" + get.translation(player.storage.fusion_liuxiang_card[0].name);
                      },
                    },
                    charlotte: true,
                    forced: true,
                    /**
                     * maybe should be removed after 3 rounds
                     */
                    onremove: function (player, skill) {
                      player.storage.fusion_liuxiang_card = [];
                    },
                    trigger: {
                      player: 'useCard',
                    },
                    forced: true,
                    filter: function (event, player) {
                      var storage = player.storage.fusion_liuxiang_card;
                      return get.type(event.card) == get.type(storage[0]);
                    },
                    content: function () {
                      player.storage.fusion_liuxiang_target.useCard(get.autoViewAs(player.storage.fusion_liuxiang_card[0]), player, 'fusion_liuxiang');
                    },
                  },
                }
              },

              // fusion_panshu
              fusion_weiyi: {
                trigger: { global: 'damageEnd' },
                filter: function (event, player) {
                  game.log(player.getStorage('fusion_weiyi_used'))
                  if (player.hasSkill('fusion_weiyi_used') && player.getStorage('fusion_weiyi_used').contains(event.player) || !event.player.isIn()) return false;
                  return true;
                },
                direct: true,
                content: function () {
                  'step 0'
                  var list = ['失去体力'];
                  if (trigger.player.isDamaged()) list.push('回复体力');
                  list.push('cancel2')
                  player.chooseControl(list).set('prompt', get.prompt2('fusion_weiyi', trigger.player)).set('ai', function () {
                    var player = _status.event.player, target = _status.event.getTrigger().player;
                    var att = get.attitude(player, target), eff = get.recoverEffect(target, player, player);
                    if (target.isDamaged() && att > 2 && eff > 0) {
                      if (player == target) {
                        var storage = player.getStorage('fusion_weiyi');
                        if (player.hp >= 2 && game.hasPlayer(function (current) {
                          return current.hp == player.hp + 1 && !storage.contains(current) && get.attitude(player, current) < 0;
                        })) return 'cancel2';
                      }
                      return '回复体力';
                    }
                    if (att < -2 && eff < 0) return '失去体力';
                    return 'cancel2';
                  });
                  'step 1'
                  if (result.control != 'cancel2') {
                    var target = trigger.player;
                    player.addTempSkill('fusion_weiyi_used', 'roundStart');
                    player.logSkill('fusion_weiyi_used', target);
                    player.markAuto('fusion_weiyi_used', [target]);
                    target[result.control == '失去体力' ? 'loseHp' : 'recover']();
                  }
                },
                onremove: true,
                subSkill: {
                  used: {
                    intro: {
                      content: '本轮已对$发动过威仪',
                    },
                    onremove: true,
                    charlotte: true,
                  },
                },
              },
              fusion_yaner: {
                audio: 2,
                trigger: {
                  global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                  player: 'loseAfter',
                },
                filter: function (event, player) {
                  var current = _status.currentPhase;
                  if (!current || !current.isIn() || !current.isPhaseUsing()) return false;
                  if (event.player == player) {
                    return event && event.hs && event.hs.length && player.countCards('h') == 0;
                  }

                  var evt = event.getl(current);
                  return evt && evt.hs && evt.hs.length && current.countCards('h') == 0;
                },
                usable: 1,
                logTarget: function () {
                  return _status.currentPhase;
                },
                prompt2: '与该角色各摸两张牌',
                check: function (event, player) {
                  return get.attitude(player, _status.currentPhase) > 0;
                },
                content: function () {
                  'step 0'
                  game.asyncDraw([_status.currentPhase, player], 2);
                  'step 1'
                  var e1 = player.getHistory('gain', function (evt) {
                    return evt.getParent(2) == event;
                  })[0];
                  if (e1 && e1.cards && e1.cards.length == 2 && get.type(e1.cards[0]) == get.type(e1.cards[1])) {
                    player.addTempSkill('yaner_zhiren', { player: 'phaseBegin' });
                    game.log(player, '修改了技能', '#g【织纴】');
                  }
                  var target = _status.currentPhase;
                  if (target.isIn() && target.isDamaged()) {
                    var e2 = target.getHistory('gain', function (evt) {
                      return evt.getParent(2) == event;
                    })[0];
                    if (e2 && e2.cards && e2.cards.length == 2 && get.type(e2.cards[0]) == get.type(e2.cards[1])) target.recover();
                  }
                  'step 2'
                  game.delayx();
                },
                subSkill: {
                  zhiren: { charlotte: true },
                },
                ai: {
                  expose: 0.5,
                },
              },

              // re_boss_dongzhuo
              re_boss_qiangzheng: {
                audio: "boss_qiangzheng",
                trigger: { player: 'phaseEnd' },
                direct: true,
                forced: true,
                filter: function (event, player) {
                  return game.hasPlayer(function (current) {
                    return current != player;
                  });
                },
                content: function () {
                  "step 0"
                  var targets = game.filterPlayer();
                  targets.remove(player);
                  targets.sort(lib.sort.seat);
                  event.targets = targets;
                  event.num = 0;
                  player.line(targets, "green");
                  "step 1"
                  if (num < event.targets.length) {
                    if (event.targets[num].countCards("he")) {
                      player.gainPlayerCard(event.targets[num], "he", true);
                    }
                    else {
                      event.targets[num].damage("nocard");
                    }
                    event.num++;
                    event.redo();
                  }
                },
                ai: {
                  threaten: 2
                }
              },
              re_boss_hengzheng: {
                audio: "boss_qiangzheng",
                enable: "phaseUse",
                usable: 1,
                unique: true,
                filter: function (event, player) {
                  return game.hasPlayer(function (current) {
                    return current != player;
                  });
                },
                prompt2: function (event, player) {
                  return "是否减少一半体力上限（向下取整），然后发动一次〖强征〗？";
                },
                content: function () {
                  "step 0"
                  player.loseMaxHp(player.maxHp >> 1);
                  player.useSkill("re_boss_qiangzheng");
                },
              },

              // fusion_shen_zhangfei
              fusion_shencai: {
                audio: "shencai",
                enable: 'phaseUse',
                filter: function (event, player) {
                  var count = player.getStat('skill').fusion_shencai;
                  if (count && count > player.countMark('fusion_shencai')) return false;
                  return true;
                },
                filterTarget: lib.filter.notMe,
                onremove: true,
                prompt: '选择一名其他角色进行地狱审判',
                content: function () {
                  var next = target.judge();
                  next.callback = lib.skill.fusion_shencai.contentx;
                },
                ai: {
                  order: 8,
                  result: { target: -1 },
                },
                contentx: function () {
                  var card = event.judgeResult.card;
                  var player = event.getParent(2).player;
                  var target = event.getParent(2).target;
                  if (get.position(card, true) == 'o') player.gain(card, 'gain2');
                  var list = [], str = lib.skill.fusion_shencai.getStr(card);
                  for (var i in lib.skill.fusion_shencai.filterx) {
                    if (str.indexOf(lib.skill.fusion_shencai.filterx[i]) != -1) list.push('fusion_shencai_' + i);
                  }
                  if (list.length) {
                    if (target.isIn()) {
                      for (var i of list) {
                        target.addSkill(i);
                        target.addMark(i, 1);
                      }
                    }
                  }
                  else if (target.isIn()) {
                    player.gainPlayerCard(target, true, 'hej');
                    target.addMark('fusion_shencai_death', 1);
                    target.addSkill('fusion_shencai_death');
                  }
                },
                filterx: {
                  losehp: '体力',
                  weapon: '武器',
                  respond: '打出',
                  distance: '距离',
                },
                getStr: function (node) {
                  var str = '', name = node.name;
                  if (lib.translate[name + '_info']) {
                    if (lib.card[name].type && lib.translate[lib.card[name].type]) str += ('' + get.translation(lib.card[name].type) + '牌|');
                    if (get.subtype(name)) {
                      str += ('' + get.translation(get.subtype(name)) + '|');
                    }
                    if (lib.card[name] && lib.card[name].addinfomenu) {
                      str += ('' + lib.card[name].addinfomenu + '|');
                    }
                    if (get.subtype(name) == 'equip1') {
                      var added = false;
                      if (lib.card[node.name] && lib.card[node.name].distance) {
                        var dist = lib.card[node.name].distance;
                        if (dist.attackFrom) {
                          added = true;
                          str += ('攻击范围：' + (-dist.attackFrom + 1) + '|');
                        }
                      }
                      if (!added) {
                        str += ('攻击范围：1|');
                      }
                    }
                  }
                  if (lib.card[name].cardPrompt) {
                    str += ('' + lib.card[name].cardPrompt(node) + '|');
                  }
                  else if (lib.translate[name + '_info']) {
                    str += ('' + lib.translate[name + '_info'] + '|');
                  }
                  if (get.is.yingbianConditional(node)) {
                    const yingbianEffects = get.yingbianEffects(node);
                    if (!yingbianEffects.length) {
                      const defaultYingbianEffect = get.defaultYingbianEffect(node);
                      if (lib.yingbian.prompt.has(defaultYingbianEffect)) yingbianEffects.push(defaultYingbianEffect);
                    }
                    if (yingbianEffects.length) str += `应变：${yingbianEffects.map(value => lib.yingbian.prompt.get(value)).join('；')}|`;
                  }
                  return str;
                },
                subSkill: {
                  losehp: {
                    charlotte: true,
                    marktext: '笞',
                    trigger: { player: 'damageEnd' },
                    forced: true,
                    content: function () {
                      player.loseHp(trigger.num);
                    },
                    ai: {
                      effect: {
                        target: function (card, player, target, current) {
                          if (get.tag(card, 'damage') && current < 0) return 1.6;
                        },
                      },
                    },
                    intro: {
                      name: '神裁 - 体力',
                      name2: '笞',
                      content: '锁定技。当你受到伤害后，你失去等量的体力。',
                      onunmark: true,
                    },
                  },
                  weapon: {
                    charlotte: true,
                    marktext: '杖',
                    trigger: { target: 'useCardToTargeted' },
                    forced: true,
                    filter: function (event, player) {
                      return event.card.name == 'sha';
                    },
                    content: function () {
                      trigger.directHit.add(player);
                      game.log(player, '不可响应', trigger.card);
                    },
                    intro: {
                      name: '神裁 - 武器',
                      name2: '杖',
                      content: '锁定技。当你成为【杀】的目标后，你不能使用牌响应此【杀】。',
                      onunmark: true,
                    },
                    global: 'fusion_shencai_weapon_ai',
                  },
                  ai: {
                    ai: {
                      directHit_ai: true,
                      skillTagFilter: function (player, tag, arg) {
                        if (!arg || !arg.card || arg.card.name != 'sha') return false;
                        if (!arg.target || !arg.target.hasSkill('fusion_shencai_weapon')) return false;
                        return true;
                      },
                    },
                  },
                  respond: {
                    charlotte: true,
                    marktext: '徒',
                    trigger: {
                      player: 'loseAfter',
                      global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                    },
                    forced: true,
                    filter: function (event, player) {
                      if (!player.hasCard(function (card) {
                        return lib.filter.cardDiscardable(card, player, 'fusion_shencai_respond');
                      }, 'h')) return false;
                      var evt = event.getParent('fusion_shencai_respond');
                      if (evt && evt.player == player) return false;
                      evt = event.getl(player);
                      return evt && evt.hs && evt.hs.length > 0;
                    },
                    content: function () {
                      var cards = player.getCards('h', function (card) {
                        return lib.filter.cardDiscardable(card, player, 'fusion_shencai_respond');
                      });
                      if (cards.length > 0) player.discard(cards.randomGet());
                    },
                    intro: {
                      name: '神裁 - 打出',
                      name2: '徒',
                      content: '锁定技。当你失去手牌后，你随机弃置一张手牌（不嵌套触发）。',
                      onunmark: true,
                    },
                  },
                  distance: {
                    charlotte: true,
                    marktext: '流',
                    trigger: { player: 'phaseJieshuBegin' },
                    forced: true,
                    content: function () {
                      player.turnOver();
                    },
                    intro: {
                      name: '神裁 - 距离',
                      name2: '流',
                      content: '锁定技。结束阶段开始时，你翻面。',
                      onunmark: true,
                    },
                  },
                  death: {
                    charlotte: true,
                    marktext: '死',
                    mod: {
                      maxHandcard: function (player, num) {
                        return num - player.countMark('fusion_shencai_death');
                      },
                    },
                    trigger: { player: 'phaseEnd' },
                    forced: true,
                    filter: function (event, player) {
                      return player.countMark('fusion_shencai_death') > game.countPlayer();
                    },
                    content: function () {
                      player.die();
                    },
                    intro: {
                      name: '神裁 - 死',
                      name2: '死',
                      content: '锁定技。你的角色手牌上限-#；回合结束时，若场上存活人数小于#，则你死亡。',
                      onunmark: true,
                    },
                  },
                },
                intro: {
                  content: '发动次数上限+#',
                },
              },
              fusion_xunshi: {
                audio: "xunshi",
                mod: {
                  cardname: function (card) {
                    if (lib.skill.xunshi.isXunshi(card)) return 'sha';
                  },
                  cardnature: function (card) {
                    if (lib.skill.xunshi.isXunshi(card)) return false;
                  },
                  suit: function (card) {
                    if (lib.skill.xunshi.isXunshi(card)) return 'none';
                  },
                  targetInRange: function (card) {
                    if (get.color(card) == 'none') return true;
                  },
                  cardUsable: function (card) {
                    if (get.color(card) == 'none') return Infinity;
                  },
                },
                trigger: { player: 'useCard2' },
                forced: true,
                filter: function (event, player) {
                  return get.color(event.card) == 'none';
                },
                content: function () {
                  'step 0'
                  if (player.hasSkill('fusion_shencai', null, null, false)) player.addMark('fusion_shencai', 1, false);
                  if (trigger.addCount !== false) {
                    trigger.addCount = false;
                    var stat = player.getStat().card, name = trigger.card.name;
                    if (typeof stat[name] == 'number') stat[name]--;
                  }
                  var info = get.info(trigger.card);
                  if (info.allowMultiple == false) event.finish();
                  else if (trigger.targets && !info.multitarget) {
                    if (!game.hasPlayer(function (current) {
                      return !trigger.targets.contains(current) && lib.filter.targetEnabled2(trigger.card, player, current);
                    })) event.finish();
                  }
                  else event.finish();
                  'step 1'
                  var prompt2 = '为' + get.translation(trigger.card) + '增加任意个目标'
                  player.chooseTarget(get.prompt('fusion_xunshi'), function (card, player, target) {
                    var player = _status.event.player;
                    return !_status.event.targets.contains(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
                  }, [1, Infinity]).set('prompt2', prompt2).set('ai', function (target) {
                    var trigger = _status.event.getTrigger();
                    var player = _status.event.player;
                    return get.effect(target, trigger.card, player, player);
                  }).set('card', trigger.card).set('targets', trigger.targets);
                  'step 2'
                  if (result.bool) {
                    if (!event.isMine() && !event.isOnline()) game.delayx();
                    event.targets = result.targets;
                  }
                  else {
                    event.finish();
                  }
                  'step 3'
                  if (event.targets) {
                    player.line(event.targets, 'fire');
                    trigger.targets.addArray(event.targets);
                  }
                },
              },

              // fusion_tengfanglan
              "fusion_luochong_all": {
                derivation: ["fusion_luochong", "dcluochong"],
                group: ["fusion_luochong", "dcluochong"],
              },
              fusion_luochong: {
                audio: 2,
                trigger: { player: ['phaseZhunbeiBegin', 'damageEnd'] },
                direct: true,
                filter: function (event, player) {
                  var storage1 = player.storage.fusion_luochong_turn, storage2 = player.getStorage('fusion_luochong');
                  if (!storage1) storage1 = [];
                  if (event.name == 'damage') {
                    return (storage2.length || 0) + storage1.length < 4;
                  }
                  for (var i = 0; i < 4; i++) {
                    if (!storage1.contains(i) && !storage2.contains(i) && game.hasPlayer(function (current) {
                      return lib.skill.fusion_luochong.filterx[i](current);
                    })) return true;
                  }
                  return false;
                },
                filterx: [
                  (target) => target.isDamaged(),
                  () => true,
                  (target) => target.countCards('he') > 0,
                  () => true,
                ],
                onremove: true,
                content: function () {
                  'step 0'
                  var list = [];
                  var choiceList = [
                    '令一名角色回复1点体力。',
                    '令一名角色失去1点体力。',
                    '令一名角色弃置两张牌。',
                    '令一名角色摸两张牌。',
                  ];
                  var storage1 = player.storage.fusion_luochong_turn, storage2 = player.getStorage('fusion_luochong');
                  if (!storage1) storage1 = [];
                  for (var i = 0; i < 4; i++) {
                    if (storage2.contains(i)) {
                      choiceList[i] = ('<span style="text-decoration: line-through; opacity:0.5; ">' + choiceList[i] + '</span>');
                    }
                    else if (storage1.contains(i) || !game.hasPlayer(function (current) {
                      return lib.skill.fusion_luochong.filterx[i](current);
                    })) {
                      choiceList[i] = ('<span style="opacity:0.5;">' + choiceList[i] + '</span>');
                    }
                    else list.push('选项' + get.cnNumber(i + 1, true))
                  }
                  list.push('cancel2');
                  player.chooseControl(list).set('prompt', get.prompt('fusion_luochong')).set('choiceList', choiceList).set('ai', function () {
                    var player = _status.event.player;
                    var list = _status.event.controls.slice(0);
                    var listx = player.storage.fusion_luochong_turn || [];
                    var gett = function (choice) {
                      if (choice == 'cancel2') return 0.1;
                      var max = 0, func = {
                        选项一: function (current) {
                          if (current.isDamaged()) max = Math.max(max, get.recoverEffect(current, player, player));
                        },
                        选项二: function (target) {
                          max = Math.max(max, get.effect(target, { name: 'losehp' }, player, player));
                        },
                        选项三: function (target) {
                          var num = target.countDiscardableCards(player, 'he');
                          if (num > 0) max = Math.max(max, Math.sqrt(Math.min(2, num)) * get.effect(target, { name: 'guohe_copy2' }, player, player));
                        },
                        选项四: function (target) {
                          max = Math.max(max, get.effect(target, { name: 'wuzhong' }, player, player));
                        },
                      }[choice];
                      game.countPlayer(function (current) {
                        if (!listx.contains(current)) func(current);
                      });
                      return max;
                    };
                    return list.sort(function (a, b) {
                      return gett(b) - gett(a);
                    })[0];
                  });
                  'step 1'
                  if (result.control != 'cancel2') {
                    var index = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control);
                    event.index = index;
                    var listx = player.storage.fusion_luochong_turn || [];
                    var list = [
                      ['选择一名角色，令其回复1点体力', function (target) {
                        var player = _status.event.player;
                        return get.recoverEffect(target, player, player);
                      }],
                      ['选择一名角色，令其失去1点体力', function (target) {
                        return get.effect(target, { name: 'losehp' }, player, player);
                      }],
                      ['选择一名角色，令其弃置两张牌', function (target) {
                        var player = _status.event.player;
                        return get.effect(target, { name: 'guohe_copy2' }, player, player) * Math.sqrt(Math.min(2, target.countCards('he')));
                      }],
                      ['选择一名角色，令其摸两张牌', function (target) {
                        var player = _status.event.player;
                        return get.effect(target, { name: 'wuzhong' }, player, player);
                      }]
                    ][index];
                    var targets = game.filterPlayer(function (current) {
                      return !listx.contains(current) && lib.skill.fusion_luochong.filterx[event.index](current);
                    })
                    var next = player.chooseTarget(list[0], true, function (card, player, target) {
                      return _status.event.targets.contains(target);
                    });
                    next.set('targets', targets);
                    next.set('ai', list[1]);
                  }
                  else event.finish();
                  'step 2'
                  if (result.bool) {
                    var target = result.targets[0];
                    player.logSkill('fusion_luochong', target);
                    if (player != target) player.addExpose(0.2);
                    player.addTempSkill('fusion_luochong_turn', 'phaseBegin');
                    if (!player.storage.fusion_luochong_turn) player.storage.fusion_luochong_turn = [];
                    player.storage.fusion_luochong_turn.push(event.index);
                    switch (event.index) {
                      case 0:
                        target.recover();
                        break;
                      case 1:
                        target.loseHp();
                        break;
                      case 2:
                        target.chooseToDiscard(true, 'he', 2);
                        break;
                      case 3:
                        target.draw(2);
                        break;
                    }
                  }
                },
                subSkill: {
                  turn: {
                    charlotte: true,
                    onremove: true,
                  },
                },
              },
              aichen: {
                audio: 2,
                trigger: { player: 'dying' },
                forced: true,
                filter: function (event, player) {
                  return player.hasSkill('fusion_luochong', null, null, false) && player.getStorage('fusion_luochong').length < 3;
                },
                content: function () {
                  'step 0'
                  //var num=1-player.hp;
                  //if(num>0) player.recover(num);
                  var list = [];
                  var choiceList = [
                    '令一名角色回复1点体力。',
                    '令一名角色失去1点体力。',
                    '令一名角色弃置两张牌。',
                    '令一名角色摸两张牌。',
                  ];
                  var storage2 = player.getStorage('fusion_luochong');
                  for (var i = 0; i < 4; i++) {
                    if (storage2.contains(i)) {
                      choiceList[i] = ('<span style="text-decoration: line-through; opacity:0.5; ">' + choiceList[i] + '</span>');
                    }
                    else list.push('选项' + get.cnNumber(i + 1, true))
                  }
                  player.chooseControl(list).set('prompt', '哀尘：选择移去一个〖落宠〗的选项').set('choiceList', choiceList).set('ai', function () {
                    var controls = _status.event.controls.slice(0);
                    var list = ['选项三', '选项四', '选项二', '选项一'];
                    for (var i of list) {
                      if (controls.contains(i)) return i;
                    }
                    return 0;
                  });
                  'step 1'
                  var index = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control);
                  player.markAuto('fusion_luochong', [index]);
                  game.log(player, '移去了', '#g【落宠】', '的', '#y' + [
                    '令一名角色回复1点体力',
                    '令一名角色失去1点体力',
                    '令一名角色弃置两张牌',
                    '令一名角色摸两张牌',
                  ][index], '的选项');
                },
              },


              // math_beimihu
              math_guju: {
                audio: "guju",
                audioname: ['tw_beimihu'],
                init: function (player) {
                  if (!player.storage.guju) player.storage.guju = 0;
                },
                intro: {
                  content: '已因此技能得到#张牌'
                },
                trigger: { global: 'damageEnd' },
                forced: true,
                filter: function (event, player) {
                  return event.player != player && event.player.isIn() && event.player.hasMark('zongkui_mark');
                },
                content: function () {
                  'step 0'
                  var cards = trigger.player.countMark("zongkui_mark");
                  player.draw(cards);
                  player.storage.guju += cards;
                  player.markSkill('guju');
                  'step 1'
                  if (player.hasZhuSkill('bingzhao', trigger.player) && trigger.player.group == player.storage.bingzhao && trigger.player.isIn()) {
                    trigger.player.chooseBool('是否对' + get.translation(player) + '发动【秉诏】？').ai = function () {
                      return get.attitude(trigger.player, player) > 1;
                    };
                  }
                  else event.finish();
                  'step 2'
                  if (result.bool) {
                    trigger.player.logSkill('bingzhao', player);
                    player.draw();
                    player.storage.guju++;
                    player.markSkill('guju');
                  }
                },
                ai: {
                  combo: ['zongkui', "math_zongkui"]
                }
              },
              math_zongkui: {
                audio: "zongkui",
                group: ["math_zongkui_init", "math_zongkui_phase", "math_zongkui_round", "math_zongkui_damage"],
                subSkill: {
                  init: {
                    trigger: {
                      global: "phaseBefore",
                      player: "enterGame",
                    },
                    forced: true,
                    locked: false,
                    filter: function (event, player) {
                      return (event.name != "phase" || game.phaseNumber == 0);
                    },
                    content: function () {
                      game.utils.giveMarkToOthers(player);
                    }
                  },
                  phase: {
                    trigger: { player: "phaseBefore" },
                    direct: true,
                    audioname: ['tw_beimihu'],
                    filter: function (event, player, name) {
                      return game.hasPlayer(function (current) {
                        return current != player;
                      });
                    },
                    content: function () {
                      "step 0"
                      event.num = game.players.length >> 1;

                      "step 1"
                      var next = player.chooseTarget(get.prompt('math_zongkui'), '令一名其他角色获得“傀”标记', function (card, player, target) {
                        return target != player;
                      }).set('ai', function (target) {
                        return get.threaten(target);
                      });

                      "step 2"
                      if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('math_zongkui', target);
                        target.addMark('zongkui_mark', 1);
                        game.delayx();
                      }
                      if (--event.num > 0) {
                        event.goto(1);
                      }

                    }
                  },
                  round: {
                    trigger: { global: 'roundStart' },
                    direct: true,
                    audioname: ['tw_beimihu'],
                    filter: function (event, player, name) {
                      return game.hasPlayer(function (current) {
                        if (!current.isMinHp() && !current.isMaxHp()) return false;
                        if (!current.isMinHandcard() && !current.isMaxHandcard()) return false;
                        return current != player;
                      });
                    },

                    content: function () {
                      'step 0'
                      var targets = game.filterPlayer(function (current) {
                        if (!current.isMinHp() && !current.isMaxHp()) return false;
                        return current != player;
                      });

                      if (targets.length == 1) {
                        event._result = { bool: true, targets: targets };
                      }
                      else {
                        var next = player.chooseTarget(get.prompt('math_zongkui'), '令一名体力值最小或最大的其他角色获得“傀”标记', function (card, player, target) {
                          if (!target.isMinHp() && !target.isMaxHp()) return false;
                          return target != player;
                        }).set('ai', function (target) {
                          var num = target.isMinHp() || target.isMaxHp() ? 0.5 : 1;
                          return num * get.threaten(target);
                        }).set('round', event.triggername == 'roundStart');
                        if (event.triggername == 'roundStart') next.set('forced', true);
                      }
                      'step 1'
                      if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('math_zongkui', target);
                        target.addMark('zongkui_mark', 1);
                        game.delayx();
                      }

                      'step 2'
                      var targets = game.filterPlayer(function (current) {
                        if (!current.isMinHandcard() && !current.isMaxHandcard()) return false;
                        return current != player;
                      });

                      if (targets.length == 1) {
                        event._result = { bool: true, targets: targets };
                      }
                      else {
                        var next = player.chooseTarget(get.prompt('math_zongkui'), '令一名手牌数最少或最多的其他角色获得“傀”标记', function (card, player, target) {
                          if (!target.isMinHandcard() && !target.isMaxHandcard()) return false;
                          return target != player;
                        }).set('ai', function (target) {
                          var num = target.isMinHp() ? 0.5 : 1;
                          return num * get.threaten(target);
                        }).set('round', event.triggername == 'roundStart');
                        if (event.triggername == 'roundStart') next.set('forced', true);
                      }
                      'step 3'
                      if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('math_zongkui', target);
                        target.addMark('zongkui_mark', 1);
                        game.delayx();
                      }
                    },
                  },
                  damage: {
                    trigger: { global: 'damageAfter' },
                    direct: true,
                    forced: true,
                    filter: function (event, player) {
                      return (event.player == player || event.source == player) && event.player.isIn();
                    },
                    content: function () {
                      const victim = trigger.player, attacker = trigger.source;
                      if (victim == player) {
                        player.logSkill('math_zongkui', attacker);
                        attacker.addMark('zongkui_mark', 1);
                      }
                      if (attacker == player) {
                        player.logSkill('math_zongkui', victim);
                        victim.addMark('zongkui_mark', 1);
                      }
                    }
                  }
                },
                ai: {
                  combo: ['guju', "math_guju"],
                  threaten: 1.4
                }
              },
              math_baijia: {
                audio: "baijia",
                audioname: ['tw_beimihu'],
                forced: true,
                unique: true,
                init: function (player) {
                  if (!player.storage.math_baijia_last) player.storage.math_baijia_last = 0;
                },
                ai: {
                  combo: 'guju'
                },
                trigger: { global: 'phaseBegin' },
                forced: true,
                skillAnimation: true,
                animationColor: 'thunder',
                filter: function (event, player) {
                  return player.hasSkill('math_guju') && player.storage.guju - player.storage.math_baijia_last >= 7;
                },
                content: function () {
                  player.storage.math_baijia_last = player.storage.guju;
                  game.utils.giveMarkToOthers(player);
                }
              },
              math_bmcanshi: {
                inherit: "bmcanshi"
              },

              // re_boss_lvbu
              re_boss_jingjia: {
                forced: true,
                filter: function (event, player) {
                  return (event.name != 'phase' || game.phaseNumber == 0);
                },
                trigger: {
                  global: 'phaseBefore',
                  player: 'enterGame',
                },
                content: function () {
                  player.equip(game.createCard2('wushuangfangtianji', 'diamond', 12));
                  player.equip(game.createCard2('shufazijinguan', 'diamond', 1));
                  Math.random() < 0.5 ? player.equip(game.createCard2('hongmianbaihuapao', 'club', 1)) : player.equip(game.createCard2('linglongshimandai', 'spade', 2));
                }
              },

              // fusion_yuantanyuanxiyuanshang
              fusion_neifa: {
                audio: "dcneifa",
                trigger: { player: 'phaseUseBegin' },
                forced: true,
                group: ["fusion_neifa_end"],
                content: function () {
                  'step 0'
                  player.damage("nosource", "nocard");
                  player.draw(3);
                  player.chooseToDiscard(true, 'he').set('ai', function (cardx) {
                    var player = _status.event.player;
                    var num = 0;
                    var hs = player.getCards('h');
                    var muniu = player.getEquip('muniu');
                    if (muniu && muniu.cards) hs = hs.concat(muniu.cards);
                    if (get.type(cardx) == 'basic') {
                      var shas = hs.filter(function (card) {
                        return card != cardx && get.name(card, player) == 'sha' && player.hasValueTarget(card, false);
                      });
                      var numx = player.countCards('h', function (card) {
                        return get.type2(card, player) == 'trick';
                      });
                      num += Math.min(numx, Math.max(0, shas.length - player.getCardUsable('sha'))) * 0.65;
                      num += Math.min(player.getCardUsable('sha') + numx, shas.filter(function (card) {
                        return game.countPlayer(function (current) {
                          return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                        }) > 1;
                      }).length) * 1.1;
                      var taos = Math.min(player.maxHp - player.hp, hs.filter(function (card) {
                        return cardx != card && get.name(card, player) == 'tao';
                      }).length);
                      num += taos * player.getDamagedHp() * 1.2;
                    }
                    else if (get.type2(cardx) == 'trick') {
                      var numx = Math.sqrt(Math.min(5, player.countCards('h', function (card) {
                        return get.type(card, player) == 'basic';
                      })));
                      num += hs.filter(function (card) {
                        return card != cardx && get.type2(card) == 'trick' && player.hasValueTarget(card);
                      }).length * 0.65;
                    }
                    else num = 4;
                    return num * 1.5 - get.value(cardx);
                  });
                  'step 1'
                  if (result.bool && result.cards && result.cards.length) {
                    const banned_type = get.type(result.cards[0]);

                    if (banned_type == "basic") {
                      player.addTempSkill("fusion_neifa_trick", 'phaseUseAfter');
                      player.addTempSkill("fusion_neifa_equip", 'phaseUseAfter');
                    }
                    else if (banned_type == "trick") {
                      player.addTempSkill("fusion_neifa_basic", 'phaseUseAfter');
                      player.addTempSkill("fusion_neifa_equip", 'phaseUseAfter');
                    }
                    else {
                      player.addTempSkill("fusion_neifa_basic", 'phaseUseAfter');
                      player.addTempSkill("fusion_neifa_trick", 'phaseUseAfter');
                    }
                    player.addTempSkill(`fusion_neifa_banned_${banned_type}`, 'phaseUseAfter');

                    var num = player.countCards('h', function (cardx) {
                      var type = get.type(cardx, player);
                      return type == banned_type;
                    });
                    game.log(num);
                    player.storage.banned_cards = num;
                  }
                },
                subSkill: {
                  "end": {
                    trigger: { player: 'phaseDiscardBefore' },
                    forced: true,
                    content: function () {
                      player.addTempSkill('fusion_neifa_discard', 'phaseAfter');
                    },
                  }
                },
                ai: {
                  threaten: 2.33,
                },
              },
              "fusion_neifa_discard": {
                charlotte: true,
                mod: {
                  maxHandcard: function (player, num) {
                    game.getGlobalHistory('cardMove', function (evt) {
                      if (evt.name == 'cardsDiscard' || (evt.name == 'lose' && evt.position == ui.discardPile)) num += evt.cards.length;
                    })
                    return num;
                  },
                },
              },
              fusion_neifa_basic: {
                audio: "neifa",
                mark: true,
                marktext: '伐',
                onremove: true,
                intro: {
                  name: '内伐 - 基本牌',
                  content: function (storage, player, skill) {
                    return `本回合使用【杀】选择目标时可以多选择1个目标，且使用【杀】的目标次数上限+${player.storage.banned_cards}。`;
                  },
                },
                mod: {
                  cardUsable: function (card, player, num) {
                    if (card.name == 'sha') {
                      return num + player.countMark("banned_cards");
                    }
                  },
                },
                trigger: { player: 'useCard2' },
                filter: function (event, player) {
                  if (event.card.name != 'sha') return false;
                  return game.hasPlayer(function (current) {
                    return !event.targets.contains(current) && player.canUse(event.card, current, false);
                  });
                },
                direct: true,
                content: function () {
                  'step 0'
                  player.chooseTarget(get.prompt('fusion_neifa'), '为' + get.translation(trigger.card) + '额外指定一个目标', function (card, player, target) {
                    return !_status.event.sourcex.contains(target) && player.canUse(_status.event.card, target, false);
                  }).set('sourcex', trigger.targets).set('ai', function (target) {
                    var player = _status.event.player;
                    return get.effect(target, _status.event.card, player, player);
                  }).set('card', trigger.card);
                  'step 1'
                  if (result.bool) {
                    if (!event.isMine() && !event.isOnline()) game.delayx();
                    event.targets = result.targets;
                  }
                  else {
                    event.finish();
                  }
                  'step 2'
                  player.logSkill('fusion_neifa', event.targets);
                  trigger.targets.addArray(event.targets);
                },
              },
              fusion_neifa_banned_basic: {
                mod: {
                  cardEnabled: function (card, player) {
                    if (get.type(card, 'basic') == 'basic') return false;
                  },
                  cardSavable: function (card, player) {
                    if (get.type(card, 'basic') == 'basic') return false;
                  },
                },
                intro: {
                  name: '内伐 - 基本牌',
                  content: '本回合内不能使用基本牌。',
                },
              },
              fusion_neifa_trick: {
                audio: "neifa",
                trigger: { player: 'useCard2' },
                direct: true,
                mark: true,
                marktext: '伐',
                onremove: true,
                intro: {
                  name: '内伐 - 锦囊牌',
                  content: '本回合使用普通锦囊牌选择目标时可以增加或减少1个目标且本回合使用的普通锦囊牌额外结算一次。'
                },
                filter: function (event, player) {
                  if (get.type(event.card) != 'trick') return false;
                  if (event.targets && event.targets.length > 0) return true;
                  var info = get.info(event.card);
                  if (info.allowMultiple == false) return false;
                  if (event.targets && !info.multitarget) {
                    if (game.hasPlayer(function (current) {
                      return !event.targets.contains(current) && lib.filter.targetEnabled2(event.card, player, current);
                    })) {
                      return true;
                    }
                  }
                  return false;
                },
                content: function () {
                  'step 0'
                  var prompt2 = '为' + get.translation(trigger.card) + '增加或减少一个目标'
                  player.chooseTarget(get.prompt('fusion_neifa'), function (card, player, target) {
                    var player = _status.event.player;
                    if (_status.event.targets.contains(target)) return true;
                    return lib.filter.targetEnabled2(_status.event.card, player, target);
                  }).set('prompt2', prompt2).set('ai', function (target) {
                    var trigger = _status.event.getTrigger();
                    var player = _status.event.player;
                    return get.effect(target, trigger.card, player, player) * (_status.event.targets.contains(target) ? -1 : 1);
                  }).set('targets', trigger.targets).set('card', trigger.card);
                  'step 1'
                  trigger.effectCount++;
                  if (result.bool) {
                    if (!event.isMine() && !event.isOnline()) game.delayx();
                    event.targets = result.targets;
                  }
                  else {
                    event.finish();
                  }
                  'step 2'
                  if (event.targets) {
                    player.logSkill('fusion_neifa', event.targets);
                    if (trigger.targets.contains(event.targets[0])) trigger.targets.removeArray(event.targets);
                    else trigger.targets.addArray(event.targets);
                  }
                }
              },
              fusion_neifa_banned_trick: {
                mod: {
                  cardEnabled: function (card, player) {
                    if (get.type(card, 'trick') == 'trick') return false;
                  },
                  cardSavable: function (card, player) {
                    if (get.type(card, 'trick') == 'trick') return false;
                  },
                },
                intro: {
                  name: '内伐 - 锦囊牌',
                  content: '本回合内不能使用锦囊牌。',
                },
              },
              fusion_neifa_equip: {
                audio: "neifa",
                trigger: { player: 'useCard' },
                mark: true,
                marktext: '伐',
                onremove: true,
                init: function (player) {
                  player.storage.fusion_neifa_equip_times = 0;
                },
                intro: {
                  name: '内伐 - 装备牌',
                  content: function (storage, player, skill) {
                    return `本回合前${player.storage.banned_cards}次使用装备牌时摸${player.storage.banned_cards}张牌。`;
                  },
                },
                forced: true,
                filter: function (event, player) {
                  return get.type(event.card) == 'equip' && player.storage.banned_cards > 0 && player.storage.fusion_neifa_equip_times < player.storage.banned_cards;
                },
                content: function () {
                  player.draw(player.storage.banned_cards);
                  ++player.storage.fusion_neifa_equip_times;
                },
              },
              fusion_neifa_banned_equip: {
                mod: {
                  cardEnabled: function (card, player) {
                    if (get.type(card) == 'equip') return false;
                  },
                  cardSavable: function (card, player) {
                    if (get.type(card) == 'equip') return false;
                  },
                },
                intro: {
                  name: '内伐 - 装备牌',
                  content: '本回合内不能使用装备牌。',
                },
              },

              // re_boss_luzhi
              re_boss_jingti: {
                forced: true,
                trigger: {
                  global: ['gainAfter', 'loseAsyncAfter', 'recoverAfter']
                },
                filter: function (event, player) {
                  if (_status.currentPhase == player) return false;
                  if (event.player == player) return false;
                  if (event == "recover") {
                    return true;
                  }

                  if (event.getParent('phaseDraw').name == 'phaseDraw') {
                    return false;
                  }
                  game.log(event.getg(player).length)
                  return event.getg(player).length > 0;;
                },
                content: () => {
                  player.draw();
                }
              },

              // re_boss_xusheng
              "re_boss_shouyi": {
                group: ["re_boss_shouyi_sha", "re_boss_shouyi_trick"],
                subSkill: {
                  "sha": {
                    trigger: { player: 'useCard1' },
                    forced: true,
                    firstDo: true,
                    charlotte: true,
                    content: function () {
                      if (trigger.card.name == 'sha') trigger.baseDamage++;
                    },
                    mod: {
                      targetInRange: function (card) {
                        if (card.name == 'sha') return true;
                      },
                    },
                  },
                  "trick": {
                    trigger: { player: 'damageBegin2' },
                    forced: true,
                    filter: function (event) {
                      return get.type(event.card) == "trick";
                    },
                    content: function () {
                      trigger.num++;
                    },
                  }
                }
              },

              // re_boss_huangzhong
              "re_boss_dungong": {
                forced: true,
                trigger: { player: 'damageBegin4' },
                content: () => {
                  trigger.num = Math.min(3, trigger.num);
                }
              },

              // re_boss_kuailiangkuaiyue
              "re_boss_moqu": {
                group: 're_boss_moqu_damage',
                forced: true,
                trigger: { global: 'phaseJieshuBegin' },
                filter: function (event, player) {
                  return player.countCards('h') <= player.hp;
                },
                content: function () {
                  player.draw(2);
                },
                subSkill: {
                  "damage": {
                    trigger: { global: 'damageEnd' },
                    forced: true,
                    filter: function (event, player) {
                      if (get.mode() == 'guozhan' && player.identity != 'unknown') {
                        return player.identity == target.identity && player.countCards("he") > 0;
                      }
                      else if (get.is.versus()) {
                        return player.side == target.side && player.countCards("he") > 0;
                      }

                      return false;
                    },
                    content: () => {
                      player.chooseToDiscard("he", "发动〖魔躯〗，请弃置一张牌。");
                    }
                  }
                }
              },

              "re_boss_zhene": {
                forced: true,
                trigger: {
                  player: "useCardToTargeted",
                },
                filter: function (event, player) {
                  return event.card && (get.type(event.card) == 'trick' || get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].contains(event.card.name))
                    && event.target.countCards("h") <= player.countCards("h");
                },
                content: function () {
                  trigger.directHit.addArray([trigger.target]);
                },
                ai: {
                  directHit_ai: true,
                  skillTagFilter: function (player, tag, arg) {
                    return arg.target.countCards("h") <= player.countCards("h");
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
              "update": "更新情况",
              "thanks": "鸣谢",
              "warning": "警告",

              //classification
              "against7devil": "大战七阴",
              "against7devil_boss": "挑战boss加强包",
              "against7devil_fusion": "融包",
              "against7devil_math": "数包",
              "against7devil_ex": "扩包",

              //character
              "re_boss_caocao": "界魏武大帝",
              "fusion_shen_sunce": "界神孙策",
              "succubus": "魅魔",
              "re_boss_huatuo": "界药坛圣手",
              "re_boss_zhouyu": "界赤壁火神",
              "math_caojinyu": "数曹金玉",
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
              "ex_lvbuwei": "扩吕不韦",
              "fusion_jiaxu": "融贾诩",
              "fusion_liru": "融李儒",
              "fusion_weiguojixie": "魏国机械",
              "fusion_shuguojixie": "蜀国机械",
              "fusion_shuguoyinghun": "蜀国英魂",
              "fusion_weiguoyinghun": "魏国英魂",
              "fusion_shuguoyinghun2": "蜀国智囊团",
              "fusion_puyuan": "融蒲元",
              "fusion_shen_jiangwei": "融神姜维",
              "re_boss_yingzhao": "界英招",
              "re_boss_xiangliu": "界相柳",
              "fusion_lingtong": "融凌统",
              "fusion_liuzan": "融留赞",
              "math_xiahoujie": "数夏侯杰",
              "math_xushao": "数许邵",
              "math_zhangchangpu": "数张菖蒲",
              "fusion_zhuanlundizang": "转轮地藏",
              "fusion_shen_xunyu": "融神荀彧",
              "fusion_panshu": "融潘淑",
              "re_boss_dongzhuo": "界乱世魔王",
              "fusion_shen_zhangfei": "融神张飞",
              "math_beimihu": "数卑弥呼",
              "re_boss_lvbu": "界虎牢关吕布",
              "fusion_yuantanyuanxiyuanshang": "融三袁",
              "re_boss_luzhi": "山河图鲁芝",
              "re_boss_xusheng": "江东铁壁",
              "re_boss_huangzhong": "羽林统帅",
              "re_boss_xiahouba": "山河图夏侯霸",
              "re_boss_kuailiangkuaiyue": "山河图蒯良蒯越",
              "re_boss_luxun": "山河图陆逊",
              "re_boss_litong": "山河图李通",
              "re_boss_ganning": "江表虎臣",
              "re_boss_sunquan": "东吴大帝",

              // skill
              "shenhu": "神护",
              "shenhu_info": "锁定技，你不能成为延时类锦囊的目标。",

              // fusion_shen_sunce
              "repinghe": "冯河",
              "repinghe_info": "①锁定技，你的手牌上限基数等于你的体力上限。②当你受到其他角色造成的伤害时，若你有牌且你的体力上限大于1，则你防止此伤害，减一点体力上限并将一张手牌交给一名其他角色。然后若你拥有〖英霸〗，则伤害来源获得一个“平定”标记。",

              // succubus
              "yuxin": "驭心",
              "yuxin_info": "出牌阶段限两次，你可以展示两张花色相同的手牌并分别交给两名其他角色，然后令这两名角色拼点，没赢的角色获得1个“魅惑”标记。拥有2个或更多“魅惑”的角色回合即将开始时，该角色移去其所有“魅惑”，此回合改为由你操控。",

              // math_caojinyu
              "math_yuqi": "隅泣",
              "math_yuqi_info": "每回合限X次。当有角色受到伤害后，若你至其的距离不大于<span class=thundertext>0</span>，则你可以观看牌堆顶的<span class=firetext>3</span>张牌。你将其中至多<span class=greentext>1</span>张牌交给受伤角色，然后可以获得剩余牌中的至多<span class=yellowtext>1</span>张牌，并将其余牌以原顺序放回牌堆顶。（X为所有数字中最大值）",
              "math_shanshen": "善身",
              "math_shanshen_info": "当有角色死亡时，你可令你的〖隅泣〗中的一个具有颜色的数字+2。然后若你未对该角色造成过伤害，则你回复1点体力。",
              "math_xianjing": "娴静",
              "math_xianjing_info": "准备阶段，你可令你的〖隅泣〗中的一个具有颜色的数字+1。若你的体力值等于体力上限，则你可以重复一次此流程。",

              //fuxion_xuhuang
              "famine": "饥荒",
              "famine_info": "出牌阶段限七次，你可以与一名其他角色进行“谋弈”：<br>围城断粮：若其判定区有【兵粮寸断】，获得其一张牌，否则你将一张牌堆顶的牌当做【兵粮寸断】对其使用且无距离限制。<br>擂鼓进军：你视为对其使用一张【决斗】。",
              "shipo": "势迫",
              "shipo_info": "结束阶段，你可以令一名体力值少于你的角色或所有判定区有【兵粮寸断】的其他角色依次选择一项：1. 弃置一张牌；2. 令你摸一张牌。",

              // liuxingyaodi
              "renjun": "仁君",
              "renjun_info": "锁定技，当一名角色回复体力时，你随机获得一个蜀势力角色的所有技能。",
              "boss_rende": "仁德",
              "boss_rende_info": "出牌阶段，若你有杀，你可以展示所有手牌并弃置其中的杀，令任意名角色各回复一点体力。然后你摸X张牌。（X为以此法恢复体力的角色数）",

              // ex_diaochan
              "ex_yuhun": "驭魂",
              "ex_yuhun_info": "出牌阶段限一次，你可以弃置任意张不同花色的牌召唤等量阵营与你相同的【傀儡】随机成为你的下家或上家(场上数量不能超过4)。<br><b>【傀儡】</b>：①其初始体力值为3且每轮游戏随机增加一点体力上限或回复一点体力；②你与【傀儡】不能指定对方为目标且每名【傀儡】令你或其与其他角色计算距离-1；③其回合开始前改为摸两张牌，你使用牌后其对你指定的目标再次使用此牌(基本牌或普通锦囊牌)；④其视为拥有你装备区牌的效果，你视为拥有其的技能；⑤你死亡后所有【傀儡】立即死亡。",
              "ex_kongshen": "控身",
              "ex_kongshen_info": "你的回合结束阶段，你可以摸X张牌，并回复 4-X 点体力；然后你可以令一名【傀儡】将武将牌替换为场下随机同性别武将。(X为场上傀儡数)",

              // re_fusion_honglianpo
              "rewangshi": "往事",
              "rewangshi_info": "锁定技，你存活时，敌方角色的回合开始时，你选择一项，令其于本回合不能使用或打出一种类型的牌（基本、锦囊、装备）。",
              "rexuechi": "血池",
              "rexuechi_info": "锁定技，你的回合结束时，令一名其他角色失去2点体力。",

              // zhizunwudi
              "wuye": "吴业",
              "wuye_info": "锁定技，当你使用或失去装备牌导致装备区发生变化时，你随机获得一个吴势力角色的所有技能。",
              "boss_zhiheng": "制衡",
              "boss_zhiheng_info": "出牌阶段限一次，你可以弃置所有手牌，然后从牌堆中随机获得一张装备牌。",

              // luanshizhuhou
              "hunzhan": "混战",
              "hunzhan_info": "锁定技，当你造成一点伤害后，你随机获得一个群势力角色的所有技能。",
              "qibing": "起兵",
              "qibing_info": "准备阶段，你可以选择一名敌方角色，若如此做，视为对其使用了一张杀。",

              // yitongjindi
              "yuquan": "驭权",
              "yuquan_info": "隐匿技，锁定技，当你登场后，你随机获得一个晋势力角色的所有技能。",
              "chengbing": "称病",
              "chengbing_info": "当你受到伤害后，你进入隐匿状态。",

              // qinshihuang
              "ex_yitong": "一统",
              "ex_yitong_info": "锁定技，当你使用【杀】、【过河拆桥】、【顺手牵羊】、【火攻】、【决斗】时，你令所有不为此牌目标的非秦势力角色也成为此牌的目标。你使用【杀】和【顺手牵羊】无距离限制。",
              "ex_shihuang": "始皇",
              "ex_shihuang_info": "锁定技，其他角色的回合结束后，你有X%的几率进行一个额外的回合（X为当前轮数*6，且X最大为100）。",
              "ex_liuhe": "六合",
              "ex_liuhe_info": "锁定技，摸牌阶段，你改为摸6张牌。",
              "ex_zulong": "祖龙",
              "ex_zulong_info": "锁定技，游戏开始时，你获得并装备【传国玉玺】和【真龙长剑】。",
              "ex_fenshu": "焚书",
              "ex_fenshu_info": "每回合限一次，非秦势力角色使用普通锦囊牌时，你可以取消此牌的所有目标。",
              "zhenlongchangjian_skill": "真龙长剑",
              "zhenlongchangjian_skill_info": "锁定技，你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标。",
              "chuanguoyuxi_skill": "传国玉玺",
              "chuanguoyuxi_skill_info": "出牌阶段开始时，你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】。",
              "zhenlongchangjian": "真龙长剑",
              "zhenlongchangjian_info": "锁定技，你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标。",
              "chuanguoyuxi": "传国玉玺",
              "chuanguoyuxi_info": "出牌阶段开始时，你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】。",


              // zhaoji
              "ex_shanwu": "善舞",
              "ex_shanwu_info": "锁定技，你使用【杀】指定目标后，你进行判定，若为黑色则敌方不能打出【闪】；当你成为【杀】的目标后，你进行判定，若为红色此杀无效。",
              "ex_daqi": "大期",
              "ex_daqi_info": "锁定技，你每使用或打出一张手牌、造成1点伤害、受到1点伤害，均会得到一个“期”标记。若你拥有的“期”标记大于等于10，则弃置所有“期”，体力回复至体力上限，并将手牌补至体力上限。",
              "ex_xianji": "献姬",
              "ex_xianji_info": "限定技，出牌阶段，你可以弃置所有手牌、装备牌和“期”标记，失去1点体力上限，然后立即发动大期的回复体力和补牌效果。",
              "ex_huoluan": "祸乱",
              "ex_huoluan_info": "锁定技，你每次发动大期的回复体力和补牌效果后，你对所有其他角色造成1点伤害。",

              "qibing_changjian": "长剑",
              "qibing_changjian_info": "锁定技，你的攻击范围+1，你使用【杀】指定目标后，可额外选择一名目标，或令此杀伤害+1。",
              "qibing_liangju": "良驹",
              "qibing_liangju_info": "锁定技，你使用【杀】指定目标后，令目标进行判定，若为黑桃则此杀不可被闪避；当你成为【杀】的目标后，你进行判定，若为红桃则此杀对你无效。",
              "bubing_fangzhen": "方阵",
              "bubing_fangzhen_info": "锁定技，当你成为非秦势力角色使用普通锦囊或【杀】的目标后，若其在你的攻击范围内，你进行判定，若为黑色，则视为你对其使用一张【杀】。",
              "bubing_changbing": "长兵",
              "bubing_changbing_info": "锁定技，你的攻击范围+2。",
              "qinnu": "秦弩",
              "qinnu_info": "当你使用【杀】指定一个目标后，你令其防具无效，你的出牌阶段内，可使用的【杀】数量+1；当你失去装备区里的【秦弩】，你令此牌销毁。",

              // baiqi
              "ex_wuan": "武安",
              "ex_wuan_info": "锁定技，你存活时，所有秦势力角色使用【杀】的上限+1。",
              "ex_shashen": "杀神",
              "ex_shashen_info": "你可以将手牌中的任意一张牌当【杀】使用或打出。每回合你使用的第一张【杀】造成伤害后，摸一张牌。",
              "ex_fachu": "伐楚",
              "ex_fachu_info": "锁定技，当你因对非秦势力角色造成伤害而导致其进入濒死状态后，你随机废除其一个装备栏。若其没有装备栏可废除，其改为失去一点体力上限。之后若其死亡，视为被你击杀。",
              "ex_changsheng": "常胜",
              "ex_changsheng_info": "锁定技，你使用【杀】无距离限制。",

              // zhangyi
              "ex_lianheng": "连横",
              "ex_lianheng_info": "锁定技，游戏开始时，你令随机一名非秦势力的角色获得“横”标记。拥有“横”标记的角色使用的牌无法对秦势力角色造成伤害。你的回合开始时，场上所有角色弃置“横”标记并进入横置状态。若非秦势力角色数大于等于2，则你令随机一名非秦势力角色获得“横”标记。拥有“横”的角色回合开始时，你与其各摸两张牌。",
              "ex_xichu": "戏楚",
              "ex_xichu_info": "锁定技，当你成为【杀】的目标时，若其攻击范围内有其他角色，则该角色需弃置一张点数为6的牌，否则此【杀】的目标转移给其攻击范围内你指定的另一名角色。回合结束阶段，你可以令一名随机的其他角色进入混乱状态直到其下一回合结束。",
              "ex_xiongbian": "雄辩",
              "ex_xiongbian_info": "锁定技，当你成为普通锦囊牌的目标后，你判定。若结果点数为6，你取消此牌的所有目标，且你获得此判定牌。",
              "ex_qiaoshe": "巧舌",
              "ex_qiaoshe_info": "当一名角色进行判定时，你可以令判定结果的点数加减4以内的任意值。",

              // shangyang
              "ex_bianfa": "变法",
              "ex_bianfa_info": "出牌阶段，你可以将一张普通锦囊牌当作【商鞅变法】使用。",
              "ex_limu": "立木",
              "ex_limu_info": "锁定技，你使用的普通锦囊牌不是【无懈可击】的合法目标。",
              "ex_kencao": "垦草",
              "ex_kencao_info": "锁定技，你存活时，秦势力角色每造成1点伤害，可获得一个“功”标记。若秦势力角色拥有大于等于3个“功”标记，则弃置所有“功”标记，增加1点体力上限，并回复1点体力。",
              "shangyangbianfa": "商鞅变法",
              "shangyangbianfa_info": "出牌阶段，对一名其他角色使用。你对目标角色造成随机1~3点伤害，若该角色以此法进入濒死状态，则其进行判定，若判定结果为黑色，则该角色本次濒死状态无法向其他角色求桃。",
              "shangyangbianfa_dying": "商鞅变法",
              "shangyangbianfa_dying_info": "出牌阶段，对一名其他角色使用。你对目标角色造成随机1~3点伤害，若该角色以此法进入濒死状态，则其进行判定，若判定结果为黑色，则该角色本次濒死状态无法向其他角色求桃。",
              "ex_lianzuo": "连坐",
              "ex_lianzuo_info": "当你使用【商鞅变法】对其他角色造成伤害时，你可以对一名其他角色造成等量伤害。",

              // zhaogao
              "ex_zhilu": "指鹿",
              "ex_zhilu2": "指鹿",
              "ex_zhilu_info": "你可以将红色手牌当【闪】使用或打出；将黑色手牌当【杀】使用或打出。",
              "ex_zhilu2_info": "你可以将红色手牌当【闪】使用或打出；将黑色手牌当【杀】使用或打出。",
              "ex_gaizhao": "改诏",
              "ex_gaizhao_info": "每回合限一次，当你成为【杀】或普通锦囊牌的目标后（借刀杀人除外），若场上有其他角色存活，你可以将此牌的目标改为其他不是该牌目标的角色。",
              "ex_haizhong": "害忠",
              "ex_haizhong_info": "锁定技，非秦势力角色回复体力后，该角色获得一个“害”标记。然后若场上没有处于濒死阶段的角色，其需要选择：1.弃置一张红色牌，2.受到你造成的X点伤害（X为该角色拥有的“害”标记）。",
              "ex_aili": "爰历",
              "ex_aili_info": "锁定技，你的出牌阶段开始时，你额外获得2张普通锦囊。",
              "ex_zaiguan": "载棺",
              "ex_zaiguan_info": "一名其他角色死亡时，你可用其对应的【尸体】替换之。【尸体】：尸体继承原先武将技能，体力回复至体力上限，不能成为延时锦囊的目标。尸体回合结束时，可将所有牌交给一名其他角色，然后其死亡。",
              // "ex_zaiguan_info": "一名其他角色死亡时，你可用其对应的【尸体】替换之。【尸体】：尸体继承原先武将技能，不能成为延时锦囊的目标，其不能使用或打出牌直到其下个回合开始。尸体回合结束时，可将所有牌交给一名其他角色，然后其死亡。",
              "ex_zaiguan_control": "载棺",

              // miyue
              "ex_zhangzheng": "掌政",
              "ex_zhangzheng_info": "锁定技，你的回合开始时，所有非秦势力角色依次选择：1.弃置一张手牌；2.失去1点体力。",
              "ex_taihou": "太后",
              "ex_taihou_info": "锁定技，男性角色对你使用【杀】或普通锦囊牌时，需要额外弃置一张同种类型的牌，否则此牌无效。其他角色回合开始时，若其为男性，其需令你回复1点体力或令你摸一张牌并交给你一张牌；若其为女性，其需令你回复1点体力或令你摸一张牌并弃一张牌。",
              "ex_youmie": "诱灭",
              "ex_youmie_info": "出牌阶段限一次，你可以将一张牌交给一名角色，若如此做，该角色减少一点体力上限且直到你的下个回合开始，该角色于其回合外无法使用或打出牌。",
              "ex_yintui": "隐退",
              "ex_yintui_info": "锁定技，当你失去最后一张手牌时，你翻面。你的武将牌背面朝上时，若受到伤害，你可以选择令此伤害-1，然后摸一张牌。",

              "ex_jugu": "巨贾",
              "ex_jugu_info": "锁定技，你的手牌上限+X；回合开始时，你额外摸X张牌（X为你的体力上限）。",
              "ex_qihuo": "奇货",
              "ex_qihuo_info": "出牌阶段各限一次，你可以弃置一种类型的手牌，并摸等同于你弃置牌数量2倍的牌。",
              "ex_chunqiu": "春秋",
              "ex_chunqiu_info": "锁定技，当你于一回合内首次使用或打出牌时，你摸两张牌。",
              "ex_baixiang": "拜相",
              "ex_baixiang_info": "觉醒技，你的回合开始或回合结束时，若你的手牌数大于等于你当前体力的2倍，则你增加一点体力上限，将体力恢复至体力上限，并获得技能〖仲父〗。",
              "ex_zhongfu": "仲父",
              "ex_zhongfu_info": "当你受到伤害时，你可以弃置等量手牌，令此伤害无效。",

              // fusion_jiaxu
              "fusion_jianshu": "间书",
              "fusion_jianshu_info": "出牌阶段，你可以将一张黑色手牌交给一名其他角色，并选择另一名其他角色，然后令这两名角色拼点。赢的角色弃置两张牌，没赢的角色失去一点体力。",
              "fusion_yongdi": "拥嫡",
              "fusion_yongdi_info": "限定技，准备阶段开始时，你可令一名男性角色增加一点体力上限并回复1点体力，然后若该角色的武将牌上有主公技且其不为主公，其获得此主公技。若该角色为你，则你获得技能〖毒士〗。",
              "fusion_dushi": "毒士",
              "fusion_dushi_info": "锁定技，每当你杀死一名角色时，你令〖乱武〗视为未发动过。",

              // fusion_liru
              "fusion_zhudong": "助董",
              "fusion_zhudong_info": "当你造成1点伤害后，你可进行判定，若为♠，你令一名角色失去一点体力，若为♣，你令一名角色弃置一张牌。",
              "fusion_cidu": "赐毒",
              "fusion_cidu_info": "出牌阶段限一次，你可以摸一张牌，然后将一张手牌交给一名其他角色，该角色选择一项：弃置此牌并受到一点伤害或弃置除此牌外的其他牌。",

              // fusion_shuguojixie
              "fusion_benlei": "奔雷",
              "fusion_benlei_info": "锁定技，回合开始时，你随机对一名其他角色造成两点雷属性伤害。",
              "fusion_zhenwei": "镇卫",
              "fusion_zhenwei_info": "锁定技，其他角色计算与你的距离时+1。",

              // fusion_shuguoyinghun
              "fusion_gongshen": "工神",
              "fusion_gongshen_info": "回合结束阶段，若你已受伤，你回复一点体力；否则你对其他角色随机造成一点火焰伤害。",

              // fuxion_weiguoyinghun
              "fusion_jiaoxie": "缴械",
              "fusion_jiaoxie_info": "出牌阶段限一次，你可令两名其他角色各交给你一张牌。",

              // fusion_puyuan
              "fusion_bianshui": "辨水",
              "fusion_bianshui_info": "出牌阶段开始时，你可以预测本回合你锻造成功的次数。此阶段结束时，你视为使用X张【冰杀】。若你猜对，你回复X+Y点体力并摸Y张牌。（X为锻造失败的次数，Y为锻造成功的次数）",
              "fusion_shengong": "神工",
              "fusion_shengong_info": "出牌阶段每项限一次。你可以弃置一张武器牌/防具牌/其他装备牌，并发起一次“锻造”。然后你从锻造结果中选择一张牌，置于一名角色的装备区内（可替换原装备）。当有因你发动〖神工〗而加入游戏的牌进入弃牌堆后，你将此牌移出游戏，然后你于当前回合结束后摸X张牌。若该回合不为你的回合，你视为对当前角色使用X张【冰杀】。（X为本回合移出游戏的神工装备牌数）",
              "fusion_zhuren": "铸刃",
              "fusion_zhuren_info": "出牌阶段限一次，你可以弃置一张手牌。根据此牌的花色点数，你有一定概率锻造成功并获得一张武器牌（若打造失败或武器已有则改为摸一张【杀】，花色决定武器名称，点数决定成功率）。此武器牌进入弃牌堆时，将其移出游戏。当你装备铸刃打造的武器时，你使用的杀无视防具且不可被响应。",

              // fusion_shen_jiangwei
              "fusion_tiaoxin": "挑衅",
              "fusion_tiaoxin_info": "出牌阶段限一次，你可以选择一名有牌的角色。然后除非该角色对你使用一张【杀】且此【杀】对你造成伤害，否则你弃置其一张牌，然后将此技能于此出牌阶段内修改为出牌阶段限两次。",
              "fusion_tianren": "天任",
              "fusion_tianren_info": "锁定技。①当有一张基本牌或普通锦囊牌不因使用而进入弃牌堆后，你获得一枚“天任”标记。②当你获得“天任”标记或体力上限变化后，若你的“天任”数不小于X，则你移去X枚“天任”，加1点体力上限，回复1点体力并摸两张牌（X为你的体力上限）。",
              "fusion_pingxiang": "平襄",
              "fusion_pingxiang_info": "出牌阶段，若你的体力上限大于⑨，则你可减⑨点体力上限，视为使用至多⑨张火【杀】。",

              // re_boss_yingzhao
              "re_boss_yaoshou": "妖兽",
              "re_boss_yaoshou_info": "锁定技，你计算与其他角色的距离-2；你于回合内首次使用的基本牌或普通锦囊牌结算两次。",

              // re_boss_xiangliu
              "re_boss_echou": "恶臭",
              "re_boss_echou_info": "锁定技，当敌方角色回复体力时，其获得1枚【蛇毒】；每个结束阶段，你令随机一名敌方角色获得1枚【蛇毒】。",

              // fusion_lingtong
              "fusion_xuanfeng": "旋风",
              "fusion_xuanfeng_info": "当你失去装备区内的牌时，或于弃牌阶段弃置了两张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌，然后可以移动场上装备区内的一张牌，视为使用一张杀并对你弃置牌的角色造成一点伤害。",
              "fusion_yinshi": "阴始",
              "fusion_yinshi_info": "锁定技，摸牌阶段，你多摸X张牌。（X为场上阴间武将数量）",

              // fusion_liuzan
              "fusion_liji": "力激",
              "fusion_liji_info": "出牌阶段限X次，你可以弃置一张牌并对一名其他角色造成1点伤害。（X为本回合内进入过弃牌堆的卡牌数除以4，向下取整）。",

              // math_xiahoujie
              "math_liedan": "裂胆",
              "math_liedan_info": "锁定技，其他角色的准备阶段开始时，若X大于0，则你摸X张牌。若X等于3，则你加1点体力上限并回复1点体力。若X为0，则你失去1点体力并获得一枚“裂”（X为你的手牌数，体力值，装备区牌数中大于等于其的数量）。准备阶段，若“裂”数大于4，则你死亡。",
              "math_zhuangdan": "壮胆",
              "math_zhuangdan_info": "锁定技，其他角色的回合结束时，若你的手牌数为全场唯一最多，则你对其造成1点伤害。",

              // math_xushao
              "math_pingjian": "评荐",
              "math_pingjian_use": "评荐",
              "math_pingjian_info": "回合开始时/结束阶段开始时/当你受到伤害后限X次/出牌阶段限Y次，你可以令系统随机从剩余武将牌堆中检索出五张拥有发动时机为回合开始时/结束阶段开始时/当你受到伤害后/出牌阶段的技能的武将牌。然后你可以选择尝试发动其中一个技能。每个技能只能选择一次。（X为你已损失的体力值，Y为你当前体力值）",

              // math_zhangchangpu
              "math_yanjiao": "严教",
              "math_yanjiao_info": "转换技，出牌阶段限一次，阴：你可以从牌堆顶亮出4张牌，将这些牌分成点数之和相等的两组，你获得其中一组，然后将剩余未分组的牌置入弃牌堆。若未分组的牌超过一张，你失去一点体力。然后你弃置场上X张牌（X为另一组的数量）。阳：你可以选择一名其他角色并从牌堆顶亮出4张牌。该角色将这些牌分成点数之和相等的两组，你选择获得其中一组，其获得另一组，然后将剩余未分组的牌置入弃牌堆。你对其造成X点伤害。（X为未分组的牌数）<br>【严教·改】<br>出牌阶段限一次，你可以选择一名其他角色并从牌堆顶亮出10张牌。该角色将这些牌分成点数之和相等的两组，你选择获得其中一组，其获得另一组并将等量手牌交给你，将剩余未分组的牌置入弃牌堆。你对其造成X点伤害。（X为未分组的牌数）",
              "math_yanjiao_upgrade": "严教",
              "math_yanjiao_upgrade_info": "出牌阶段限一次，你可以选择一名其他角色并从牌堆顶亮出10张牌。该角色将这些牌分成点数之和相等的两组，你选择获得其中一组，其获得另一组并将等量手牌交给你，将剩余未分组的牌置入弃牌堆。你对其造成X点伤害。（X为未分组的牌数）",
              "math_xingshen": "省身",
              "math_xingshen_info": "当〖严教〗发动后，〖严教〗亮出牌数+1。当〖严教〗亮出牌数大于等于10张时，你修改〖严教〗。当你受到伤害后，你可以发动一次〖严教〗。",

              // fusion_zhuanlundizang
              "fusion_lunhui": "轮回",
              "fusion_lunhui_info": "锁定技，准备阶段，若你的体力值不为全场最多，你与场上除你以外体力最多的角色交换体力值。",
              "fusion_wuliang": "无量",
              "fusion_wuliang_info": "锁定技，你登场时额外摸3张牌；回合开始阶段，所有角色增加一点体力上限，你摸两张牌；结束阶段开始时，所有角色回复一点体力，你摸两张牌。",

              // fusion_shen_xunyu
              "fusion_quhu": "驱虎",
              "fusion_quhu_info": "出牌阶段限一次，你可以与一名其他角色拼点，若你赢，则该角色对其攻击范围内另X名由你指定的角色各造成1点伤害。若你没赢，该角色对你造成一点伤害。(X为点数之差)",
              "fusion_jieming_all": "节命",
              "fusion_jieming_all_info": "①锁定技，你拥有〖ol界节命〗和〖手杀界节命〗。②当你受到1点伤害后，你可令一名角色摸X张牌。然后若其手牌数大于X，则其将手牌弃置至X张（X为其体力值且至多为5）。",
              "fusion_jieming": "节命",
              "fusion_jieming_info": "当你受到1点伤害后，你可令一名角色摸X张牌。然后若其手牌数大于X，则其将手牌弃置至X张（X为其体力值且至多为5）。",
              "fusion_tianzuo": "天佐",
              "fusion_tianzuo_info": "锁定技。①游戏开始时，你将8张【奇正相生】加入牌堆。②【奇正相生】对你无效。③你的回合开始时，你获得一张【奇正相生】。",
              "fusion_lingce": "灵策",
              "fusion_lingce_info": "锁定技。当有【奇正相生】或智囊或〖定汉①〗记录过的锦囊牌被使用时，你摸一张牌。",
              "fusion_liuxiang": "留香",
              "fusion_liuxiang_info": "锁定技，当其他角色使用的牌类型与你上一次非因此对其使用的牌相同，则视为你对其再次使用此牌。",

              // re_boss_dongzhuo
              "re_boss_qiangzheng": "强征",
              "re_boss_qiangzheng_info": "锁定技，结束阶段，你获得每个敌方角色一张牌，若其没有牌，则你对其造成一点伤害。",
              "re_boss_hengzheng": "横征",
              "re_boss_hengzheng_info": "出牌阶段限一次，若你的体力上限大于1，你可以失去一半体力上限，发动一次〖强征〗。",


              // fusion_shen_zhangfei
              "fusion_shencai": "神裁",
              "fusion_shencai_info": "出牌阶段限一次，你可以令一名其他角色进行判定。你获得此判定牌，然后若此判定牌：包含以下要素中的任意一个，则其获得对应的效果：{⒈体力：当其受到伤害后，其失去等量的体力、⒉武器：其不能使用牌响应【杀】、⒊打出：当其失去手牌后，其再随机弃置一张手牌（不嵌套触发）、⒋距离：其结束阶段开始时，其翻面}；若均不包含，你获得其区域里的一张牌，其获得一枚“死”并获得如下效果：其的角色手牌上限-X、其回合结束时，若X大于场上存活人数，则其死亡（X为其“死”标记数）。",
              "fusion_xunshi": "巡使",
              "fusion_xunshi_info": "锁定技。①你手牌区内所有的多目标锦囊牌均视为花色为none的普【杀】。②你使用颜色为none的牌无距离和次数限制。③当你使用无颜色的牌选择目标后，你令你〖神裁〗的发动次数上限+1，然后可以为此牌增加任意个目标。",

              // math_beimihu
              "math_zongkui": "纵傀",
              "math_zongkui_info": "游戏开始时，你令所有其他角色获得1枚“傀”标记。回合开始时，你可以指定X名角色，令其获得一枚“傀”标记。一轮游戏开始时，你可以分别指定一名体力值最少或最多和一名手牌数最少或最多的其他角色，令其获得一枚“傀”标记。当你对其他角色造成伤害/受到其他角色造成的伤害时，你令除你外受到伤害的角色/伤害来源获得1枚“傀”标记。（X为场上人数的一半，向下取整）",
              "math_guju": "骨疽",
              "math_guju_info": "锁定技，拥有“傀”标记的角色受到伤害后，你摸X张牌。（X为其拥有的“傀”标记数量）",
              "math_baijia": "拜假",
              "math_baijia_info": "锁定技，一名角色的回合开始阶段，若你距离上次〖拜假〗后因〖骨疽〗得到的牌不少于7张，你令所有其他角色获得1枚“傀”标记。",
              "math_bmcanshi": "蚕食",
              "math_bmcanshi_info": "一名角色使用基本牌或普通锦囊牌指定你为唯一目标时，若其有“傀”标记，你可以取消之，然后其失去1枚“傀”标记；你使用牌仅指定一名角色为目标时，你可以额外指定任意名带有“傀”标记的角色为目标（无距离限制），然后这些角色失去1枚“傀”标记。",

              // fusion_tengfanglan

              // re_boss_lvbu
              "re_boss_jingjia": "精甲",
              "re_boss_jingjia_info": "锁定技，游戏开始时，你装备【无双方天戟】，【束发紫金冠】并随机装备【红棉百花袍】或【玲珑狮蛮带】。",

              // fusion_yuantanyuanxiyuanshang
              "fusion_neifa": "内伐",
              "fusion_neifa_info": "锁定技，出牌阶段开始时，你受到一点伤害并摸三张牌，然后弃置一张牌，然后本回合你不能使用对应类型的牌，使用其他类型的牌获得以下效果：基本牌：本回合使用【杀】选择目标时可以多选择1个目标，且使用【杀】的目标次数上限+X；锦囊牌：本回合使用普通锦囊牌选择目标时可以增加或减少1个目标且本回合使用的普通锦囊牌额外结算一次；本回合前X次使用装备牌时摸X张牌。本回合你的手牌上限+Y（X为你发动〖内伐〗弃牌后手牌中因〖内伐〗而不能使用的牌的数量。Y为本回合进入弃牌堆的牌数。你以此法选择的额外目标均无距离限制）。",

              // shanhetu
              "re_boss_lianyu": "炼狱",
              "re_boss_lianyu_info": "锁定技，游戏开始时，你摸三张牌。每轮游戏开始时，你获得一点护甲。摸牌阶段，你额外摸三张牌且出牌阶段额外出杀次数+2。",

              "re_boss_baoli": "暴力",
              "re_boss_baoli_info": "锁定技，你造成的伤害+1。",


              // re_boss_luzhi
              "re_boss_jingti": "警惕",
              "re_boss_jingti_info": "锁定技，你的回合外，其他角色回复体力或在非摸牌阶段获得牌，你摸一张牌。",

              // re_boss_xusheng
              "re_boss_shouyi": "兽裔",
              "re_boss_shouyi_info": "锁定技，你使用杀无距离限制且伤害+1，你的回合外，你受到锦囊牌造成的伤害时，此伤害+1。",

              // re_boss_huangzhong
              "re_boss_dungong": "盾弓",
              "re_boss_dungong_info": "锁定技，防止对你造成的超过3点以上部分的伤害。",

              // re_boss_kuailiangkuaiyue
              "re_boss_moqu": "魔躯",
              "re_boss_moqu_info": "锁定技，每名角色的结束阶段，若你的手牌数不大于体力值，你摸两张牌。当其他友方角色受到伤害后，你弃置一张牌。",
              "re_boss_zhene": "镇恶",
              "re_boss_zhene_info": "锁定技，当你于出牌阶段使用牌指向目标后，若其手牌数不大于你，则其无法响应的你的牌。",

              // unused
              "geju": "割据",
              "geju_info": "锁定技，当你受到一点伤害时，本轮其他角色与你计算距离时+1。",
              "geju_effect": "割据效果",
            },
            // translation end
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
        name: `本扩展包含一个模式与一些武将。模式可在乱斗中打开。如果发现技能或武将缺失，请尝试将无名杀本体更新为最新版本，并在“扩展-诸神降临”中选择“开启”。
                这是本扩展的官方网站：<a class="github" href="https://s-n-o-r-l-a-x.github.io/noname-extension/">https://s-n-o-r-l-a-x.github.io/noname-extension</a><br>
                如果喜欢或者想要贡献的话，欢迎联系作者或去下面链接给作者一个star哦！star越多，更新越积极哦~<br>
                <a class="github" href="https://github.com/S-N-O-R-L-A-X/noname-extension">https://github.com/S-N-O-R-L-A-X/noname-extension </a><br>
                如果想要加群的话，目前QQ群号是一群：214685856，二群：939494042，请优先加二群！请备注下从哪得知这个扩展的哈，如果是下载到的整合包包含，回答整合包即可。
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
        name: `<div class=".update">扩展版本：7.1<font size="4px">▶▶▶</font></div>`,
        version: 7.1,
        clear: true,
        intro: "点击查看此版本的更新内容",
        onclick: function () {
          if (this.updateContent === undefined) {
            const more = ui.create.div('.update-content', '<div style="border:2px solid gray">' + '<font size=3px>' +
              '<li><span style="color:#006400">说明一</span>：<br>更新了新武将：山河图鲁芝、江东铁壁、羽林统帅、山河图夏侯霸。<br>' +
              '<li><span style="color:#006400">说明二</span>：<br>修复〖吴业〗换装备时无法获得技能的问题。<br>' +
              '<li><span style="color:#006400">说明三</span>：<br>修复一些描述问题。<br>'
            );
            this.parentNode.insertBefore(more, this.nextSibling);
            this.updateContent = more;
            this.innerHTML = '<div class=".update">扩展版本<font size="4px">▼▼▼</font></div>';
          }
          else {
            this.parentNode.removeChild(this.updateContent);
            delete this.updateContent;
            this.innerHTML = '<div class=".update">扩展版本：7.1<font size="4px">▶▶▶</font></div>';
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
      version: "7.1",
    },
    files: { "character": [], "card": [], "skill": [] }
  }
})