import { lib, game, ui, get, ai, _status } from '../../../../../noname.js'

export const character = {
	//在这里编写角色信息。
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
		"shanhetu_boss_luzhi": ["male", "wei", "6/6/4", ["re_boss_lianyu", "drlt_qianjie", "qingzhong", "weijing", "re_boss_jingti", "zhichi", "aocai", "boss_baiyi", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_xusheng": ["male", "wu", "6/6/4", ["re_boss_lianyu", "xinpojun", "latest_ol_feiyang", "re_boss_shouyi", "oljiuchi", "jiushi", "xinluoshen", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_huangzhong": ["male", "shu", "6/6/4", ["re_boss_lianyu", "xinliegong", "xinpojun", "re_boss_dungong", "wangong", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_xiahouba": ["male", "shu", "6/6/4", ["re_boss_lianyu", "boss_qixiang", "baobian", "zhongyun", "jieyuan", "buqu", "boss_xiaoshou", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_kuailiangkuaiyue": ["male", "wei", "6/6/4", ["re_boss_lianyu", "drlt_qianjie", "nzry_jianxiang", "nzry_shenshi", "re_boss_moqu", "jugu", "re_boss_zhene", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_luxun": ["male", "wu", "6/6/4", ["re_boss_lianyu", "re_boss_liannu", "qianxun", "lianying", "sijian", "tairan", "qice", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_litong": ["male", "wei", "6/6/4", ["re_boss_lianyu", "tuifeng", "olcuipo", "xinbenxi", "re_boss_xiongshou", "jiaozi", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_ganning": ["male", "wu", "6/6/4", ["re_boss_lianyu", "clanjiexuan", "fenwei", "latest_ol_feiyang", "luoying", "zhenlue", "re_boss_xiongshou", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_sunquan": ["male", "wu", "6/6/4", ["re_boss_lianyu", "re_boss_changandajian", "re_zhiheng", "fenwei", "latest_ol_feiyang", "dangxian", "shenshi", "xiangle", "clanjiejian", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_zhouyu": ["male", "wu", "5/5/4", ["re_boss_lianyu", "reyingzi", "refanjian", "luochong", "rekanpo", "fangzhu", "boss_jingmiao", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_fuwan": ["male", "qun", "6/6/4", ["re_boss_lianyu", "re_boss_gudingdao", "moukui", "xinpojun", "re_boss_zhuishe", "zhenlue", "oljiuchi", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_huaxiong": ["male", "qun", "10/10/4", ["re_boss_lianyu", "shiyong", "reyaowu", "shizhan", "weizhong", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_zhangliao": ["male", "wei", "8/8/4", ["re_boss_lianyu", "re_boss_gudingdao", "re_boss_tengjia", "new_retuxi", "olzhiti", "olduorui", "xinpojun", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_caozhang": ["male", "wei", "8/8/4", ["re_boss_lianyu", "rejiangchi", "weijing", "yingzi", "fulin", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_zhangling": ["male", "qun", "6/6/4", ["re_boss_lianyu", "zlhuji", "zlshoufu", "gzcongjian", "tairan", "boss_dayuan", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_wangyi": ["female", "wei", "7/7/4", ["re_boss_lianyu", "zhenlie", "miji", "zhaxiang", "duwu", "xinkuanggu", "shibei", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_shen_zhaoyun": ["male", "shu", "6/6/4", ["re_boss_lianyu", "xinjuejing", "relonghun", "huxiao", "boss_moyany", "re_boss_kuangxi", "gzbuqu", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_zhangliao2": ["male", "wei", "8/8/4", ["re_boss_lianyu", "new_retuxi", "relonghun", "paoxiao", "shangshi", "kangge", "re_boss_xianji", "zlhuji", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_wuhu_huangzhong": ["male", "shu", "7/7/4", ["re_boss_lianyu", "re_boss_jinwuluorigong", "xinliegong", "xinfu_dianhu", "jieyuan", "re_boss_reborn_machao", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_wuhu_machao": ["male", "shu", "7/7/4", ["re_boss_lianyu", "mashu", "retieji", "re_boss_dongdang", "re_boss_reborn_zhaoyun", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_wuhu_zhaoyun": ["male", "shu", "7/7/4", ["re_boss_lianyu", "ollongdan", "olyajiao", "re_boss_dongdang", "re_boss_reborn_zhangfei", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_wuhu_zhangfei": ["male", "shu", "7/7/4", ["re_boss_lianyu", "olpaoxiao", "oltishen", "re_boss_dongdang", "jizhi", "re_boss_reborn_guanyu", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_wuhu_guanyu": ["male", "shu", "7/7/4", ["re_boss_lianyu", "new_rewusheng", "new_yijue", "re_boss_dongdang", "oljiang", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_yanliangwenchou": ["male", "qun", "6/6/4", ["re_boss_lianyu", "olshuangxiong", "jiang", "xinkuanggu", "kunfen", "reluoyi", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_sp_pangde": ["male", "wei", "8/8/4", ["re_boss_lianyu", "mashu", "juesi", "kongcheng", "wushuang", "jiang", "reluoyi", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_hansui": ["male", "wei", "7/7/4", ["re_boss_lianyu", "olniluan", "olxiaoxi", "wushuang", "wushen", "tairan", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_xiahoudun": ["male", "wei", "8/8/4", ["re_boss_lianyu", "buqu", "reganglie", "refankui", "boss_duqu", "gzyinghun", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_daxiaoqiao": ["female", "wu", "7/7/4", ["re_boss_lianyu", "new_xingwu", "new_luoyan", "olhongyan", "jijiu", "jieyuan", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_dengai": ["male", "wei", "8/8/4", ["re_boss_lianyu", "oltuntian", "olzaoxian", "shenxian", "xiongshu", "dzgengzhan", "yongjin", "jilei", "xuanlve", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_shen_zhangliao": ["male", "shen", "8/8/4", ["re_boss_lianyu", "olduorui", "olzhiti", "latest_ol_feiyang", "junxing", "tieji", "yuce", "re_boss_juejue", "gzyinghun", "re_boss_jueji", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_zhangliang": ["male", "qun", "6/6/4", ["re_boss_lianyu", "xinleiji", "boss_luolei", "boss_leizhou", "olleijie", "boss_baiyi", "xinguidao", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_shen_sunquan": ["male", "shen", "8/8/4", ["re_boss_lianyu", "junkyuheng", "junkdili", "qixi", "jiang", "keji", "zhuikong", "lianying", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_wutugu": ["male", "qun", "18/18/4", ["re_boss_lianyu", "re_boss_xiongshou2", "ranshang", "hanyong", "boss_luanchang", "xinkuanggu", "manjia", "sppanqin", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_yuejin": ["male", "wei", "7/7/4", ["re_boss_lianyu", "re_boss_xingtianpojunfu", "re_boss_heiguangkai", "xiaoguo", "xinshensu", "latest_ol_feiyang", "boss_aozhan", "re_boss_dungong", "re_boss_baoli", "reqicai", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_lidian": ["male", "wei", "6/6/4", ["re_boss_lianyu", "wangxi", "wangxi", "latest_ol_feiyang", "latest_ol_feiyang", "yise", "boss_fengdong", "re_boss_fanzhen", "re_boss_baoli", "new_keji", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_caoxiancaohua1": ["female", "wei", "8/8/4", ["re_boss_lianyu", "wanrong", "xianwan", "lianhuo", "boss_suozu", "boss_nitai", "oltianxiang", "re_boss_baoli", "re_boss_nuyan", "re_boss_reborn_caoxiancaohua2", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_caoxiancaohua2": ["female", "wei", "8/8/4", ["re_boss_lianyu", "huamu", "qianmeng", "liangyuan", "latest_ol_feiyang", "re_boss_dongdang", "boss_yuhuojg", "oljiuchi", "oltianxiang", "boss_lingqu", "re_boss_baoli", "re_boss_bamen"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_yanliangwenchou2": ["male", "qun", "8/8/4", ["re_boss_lianyu", "olshuangxiong", "new_reluoyi", "jiang", "fengpo", "wushuang", "boss_sipu", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_caiyong": ["male", "qun", "8/8/4", ["re_boss_lianyu", "bizhuan", "tongbo", "re_boss_chenghu", "re_boss_xuli", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_jushou": ["male", "qun", "8/8/4", ["re_boss_lianyu", "re_boss_liannu", "jianying", "shibei", "zhaxiang", "oljizhan", "zhichi", "reqicai", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_lushi": ["female", "qun", "8/8/4", ["re_boss_lianyu", "olzhuyan", "olleijie", "boss_dayuan", "sgkuanggu", "nzry_huaiju", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_shamoke": ["male", "shu", "8/8/4", ["re_boss_lianyu", "gzjili", "zishu", "boss_zhaohuo", "longdan", "chongzhen", "re_boss_shennu", "reganglie", "re_boss_baoli", "re_boss_zhufang", "boss_renxing", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_yuanshao": ["male", "qun", "8/8/4", ["re_boss_lianyu", "luanji", "hanyong", "jizhi", "zhenlve", "re_boss_juexing", "jugu", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_lvbu": ["male", "qun", "8/8/4", ["re_boss_lianyu", "re_boss_wushuangfangtianji", "re_boss_hongmianbaihuapao", "re_boss_shufazijinguan", "latest_ol_feiyang", "baonu", "wumou", "ol_wuqian", "ol_shenfen", "xinjuejing", "reqicai", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_dongzhuo": ["male", "qun", "12/12/4", ["re_boss_lianyu", "oljiuchi", "roulin", "benghuai", "jieming", "oldianjun", "ninge", "re_boss_juexing2", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_huangzu": ["male", "qun", "8/8/4", ["re_boss_lianyu", "olcuorui", "wangong", "new_reluoyi", "rejianxiong", "reganglie", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_xusheng2": ["male", "wu", "8/8/4", ["re_boss_lianyu", "xinpojun", "latest_ol_feiyang", "re_boss_shouyi", "oljiuchi", "jiushi", "zhengding", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_lvmeng": ["male", "wu", "6/6/4", ["re_boss_lianyu", "re_boss_liannu", "keji", "qinxue", "botu", "jugu", "keshou", "chouhai", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_yingzhao": ["male", "shen", "6/6/4", ["re_boss_lianyu", "boss_fengdong", "boss_xunyou", "boss_sipu", "aocai", "gzcongjian", "re_boss_shouyi", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_duanjiong": ["male", "qun", "7/7/4", ["re_boss_lianyu", "olsaogu", "luoying", "qixi", "tairan", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
		"shanhetu_boss_qiongqi": ["male", "shen", "7/7/4", ["re_boss_lianyu", "boss_zhue", "boss_futai", "re_boss_eyi", "boss_yandu", "shenxian", "re_boss_baoli"], ["zhu", "boss", "bossallowed"]],
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
		"shanhetu_boss_luzhi": "来源于山河图江东雄心篇第一章boss鲁芝，没有任何改动，七阴连防御都打不穿。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_xusheng": "来源于山河图江东雄心篇第一章boss江东铁壁，没有任何改动，这就是真正的大宝吗？<br>【强度】★★★★<br> 【亮点】攻击",
		"shanhetu_boss_huangzhong": "来源于山河图江东雄心篇第一章关内羽林统帅，没有任何改动，这就是老宝吗？<br>【强度】★★★★★<br> 【亮点】攻击",
		"shanhetu_boss_xiahouba": "来源于山河图江东雄心篇第一章boss夏侯霸，没有任何改动。<br>【强度】★★★★<br> 【亮点】卖血",
		"shanhetu_boss_kuailiangkuaiyue": "来源于山河图江东雄心篇第一章boss蒯良蒯越，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_luxun": "来源于山河图江东雄心篇第一章关内陆逊，没有任何改动，草原的不死青蛇，就是这种强度吗？<br>【强度】★★★★<br> 【亮点】攻击",
		"shanhetu_boss_litong": "来源于山河图江东雄心篇第一章关内李通，没有任何改动，这家伙居然需要〖推锋〗？<br>【强度】★★★★★<br> 【亮点】攻击",
		"shanhetu_boss_ganning": "来源于山河图江东雄心篇第一章boss江表虎臣，没有任何改动。<br>【强度】★★★★<br> 【亮点】攻击",
		"shanhetu_boss_sunquan": "来源于山河图江东雄心篇第一章boss东吴大帝，没有任何改动，不需要会玩，照样杀七阴。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_zhouyu": "来源于山河图江东雄心篇第一章关内周瑜，没有任何改动。<br>【强度】★★★★★<br> 【亮点】攻击，控制",
		"shanhetu_boss_fuwan": "来源于山河图江东雄心篇第一章关内伏完，没有任何改动。<br>【强度】★★★★<br> 【亮点】攻击",
		"shanhetu_boss_huaxiong": "来源于山河图江东雄心篇第一章关内华雄，没有任何改动。<br>【强度】★★<br> 【亮点】攻击",
		"shanhetu_boss_zhangliao": "来源于山河图江东雄心篇第一章关内张辽，在九洲演义中也曾出现，没有任何改动。<br>【强度】★★★★<br> 【亮点】攻击",
		"shanhetu_boss_caozhang": "来源于山河图江东雄心篇第一章关内曹彰，在九洲演义中也曾出现，没有任何改动。<br>【强度】★★★★<br> 【亮点】攻击",
		"shanhetu_boss_zhangling": "来源于山河图江东雄心篇第一章关内张天师，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_wangyi": "来源于山河图江东雄心篇第二章关内决意巾帼，没有任何改动，攻防一体的女武神。<br>【强度】★★★★★<br> 【亮点】攻击、防御",
		"shanhetu_boss_shen_zhaoyun": "来源于山河图江东雄心篇第二章关内常山赵子龙，没有任何改动，攻防一体的不死红蛇。<br>【强度】★★★★★<br> 【亮点】攻击、防御",
		"shanhetu_boss_zhangliao2": "来源于山河图江东雄心篇第二章关内古之召虎，没有任何改动，攻防一体的古之召虎。<br>【强度】★★★★★<br> 【亮点】攻击、防御",
		"shanhetu_boss_wuhu_huangzhong": "来源于山河图江东雄心篇第二章boss五虎将，没有任何改动。一个接一个地…复活吧。<br>【强度】★★★★★<br> 【亮点】综合、复活",
		"shanhetu_boss_yanliangwenchou": "来源于山河图江东雄心篇第一章关内乱世双雄，没有任何改动。比小霸王还要激昂。<br>【强度】★★★★★<br> 【亮点】攻击",
		"shanhetu_boss_sp_pangde": "来源于山河图江东雄心篇第二章关内sp庞德，没有任何改动。有一个男人，一血是他的最强形态，很喜欢“决斗”，有〖激昂〗，他就是……<br>【强度】★★★<br> 【亮点】攻击",
		"shanhetu_boss_hansui": "来源于山河图江东雄心篇第一章关内韩遂，没有任何改动。<br>【强度】★★★★★<br> 【亮点】攻击",
		"shanhetu_boss_xiahoudun": "来源于山河图江东雄心篇第二章关内夏侯惇，没有任何改动，感受到守门夏侯惇的绝望了么。<br>【强度】★★★★★<br> 【亮点】防御",
		"shanhetu_boss_daxiaoqiao": "来源于山河图江东雄心篇第二章关内绝代双骄，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_dengai": "来源于山河图江东雄心篇第二章关内伏鸾，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_shen_zhangliao": "来源于山河图江东雄心篇第二章boss神张辽，没有任何改动。<br>【强度】★★★★★<br> 【亮点】输出",
		"shanhetu_boss_zhangliang": "来源于山河图江东雄心篇第二章关内张梁，没有任何改动。<br>【强度】★★★★<br> 【亮点】攻击",
		"shanhetu_boss_shen_sunquan": "来源于山河图江东雄心篇第二章关内神孙权，没有任何改动。<br>【强度】★★★★★<br> 【亮点】过牌",
		"shanhetu_boss_wutugu": "来源于山河图江东雄心篇第二章boss兀突骨，没有任何改动。<br>【强度】★★★★★<br> 【亮点】过牌",
		"shanhetu_boss_yuejin": "来源于山河图江东雄心篇第二章boss乐进，没有任何改动，小杀用起来最弱智的boss也能乱杀。<br>【强度】★★★★★<br> 【亮点】攻击",
		"shanhetu_boss_lidian": "来源于山河图江东雄心篇第二章boss李典，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_caoxiancaohua1": "来源于山河图江东雄心篇第二章boss灵杉玉树，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_caoxiancaohua2": "来源于山河图江东雄心篇第二章boss，灵杉玉树，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_yanliangwenchou2": "来源于山河图江东雄心篇第三章关内颜良文丑，没有任何改动。<br>【强度】★★★★★<br> 【亮点】攻击",
		"shanhetu_boss_caiyong": "来源于山河图江东雄心篇第三章关内蔡邕，没有任何改动，似乎是山河图垫底强度。<br>【强度】★★★<br> 【亮点】发育",
		"shanhetu_boss_jushou": "来源于山河图江东雄心篇第三章关内沮授，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_lushi": "来源于山河图江东雄心篇第三章关内卢夫人，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_shamoke": "来源于山河图江东雄心篇第三章boss沙摩柯，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_yuanshao": "来源于山河图妖篇第一章关内袁绍，没有任何改动。<br>【强度】★★★★★<br> 【亮点】攻击",
		"shanhetu_boss_lvbu": "来源于山河图妖篇第一章关内吕布，没有任何改动。<br>【强度】★★★★★<br> 【亮点】攻击",
		"shanhetu_boss_huangzu": "来源于山河图妖篇第一章关内黄祖，没有任何改动。<br>【强度】★★★★<br> 【亮点】综合",
		"shanhetu_boss_dongzhuo": "来源于山河图妖篇第一章关内董卓，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
		"shanhetu_boss_xusheng2": "来源于山河图妖篇第一章关内徐盛，没有任何改动。<br>【强度】★★★★<br> 【亮点】攻击",
		"shanhetu_boss_lvmeng": "来源于山河图妖篇第一章关内吕蒙，没有任何改动。<br>【强度】★★★★★<br> 【亮点】连破",
		"shanhetu_boss_yingzhao": "来源于山河图妖篇第一章关内英招，没有任何改动。<br>【强度】★★★★★<br> 【亮点】综合",
	},
	characterSort: {
		mode_extension_大战七阴: {
			against7devil_boss: ["re_boss_caocao", "succubus", "re_boss_huatuo", "re_boss_zhouyu",
				"liuxingyaodi", "re_boss_zhenji", "zhizunwudi", "luanshizhuhou", "yitongjindi", "re_nianshou",
				"re_boss_yingzhao", "re_boss_xiangliu", "re_boss_dongzhuo", "re_boss_lvbu"],
			against7devil_fusion: ["fusion_shen_sunce", "norecover", "fusion_xuhuang", "fusion_honglianpo",
				"re_fusion_honglianpo", "barbarian_king", "fusion_jiaxu", "fusion_liru", "fusion_weiguojixie",
				"fusion_shuguojixie", "fusion_shuguoyinghun", "fusion_weiguoyinghun", "fusion_shuguoyinghun2",
				"fusion_puyuan", "fusion_shen_jiangwei", "fusion_lingtong", "fusion_liuzan", "fusion_zhuanlundizang",
				"fusion_shen_xunyu", "fusion_shen_zhangfei", "fusion_yuantanyuanxiyuanshang"],
			against7devil_math: ["math_caojinyu", "math_xiahoujie", "math_xushao", "math_zhangchangpu", "math_beimihu"],
			against7devil_ex: ["ex_diaochan", "ex_yingzheng", "ex_zhaoji", "ex_baiqi", "ex_zhangyi",
				"ex_shangyang", "ex_zhaogao", "ex_miyue", "ex_lvbuwei"],
			against7devil_shanhetu_jiuzhou_boss: ["shanhetu_boss_luzhi", "shanhetu_boss_xusheng", "shanhetu_boss_huangzhong",
				"shanhetu_boss_xiahouba", "shanhetu_boss_kuailiangkuaiyue", "shanhetu_boss_luxun", "shanhetu_boss_litong",
				"shanhetu_boss_ganning", "shanhetu_boss_sunquan", "shanhetu_boss_zhouyu", "shanhetu_boss_fuwan",
				"shanhetu_boss_huaxiong", "shanhetu_boss_zhangliao", "shanhetu_boss_caozhang", "shanhetu_boss_zhangling",
				"shanhetu_boss_wangyi", "shanhetu_boss_shen_zhaoyun", "shanhetu_boss_zhangliao2",
				"shanhetu_boss_wuhu_huangzhong", "shanhetu_boss_wuhu_machao", "shanhetu_boss_wuhu_zhaoyun",
				"shanhetu_boss_wuhu_zhangfei", "shanhetu_boss_wuhu_guanyu", "shanhetu_boss_yanliangwenchou",
				"shanhetu_boss_sp_pangde", "shanhetu_boss_hansui", "shanhetu_boss_xiahoudun", "shanhetu_boss_daxiaoqiao",
				"shanhetu_boss_dengai", "shanhetu_boss_shen_zhangliao", "shanhetu_boss_zhangliang",
				"shanhetu_boss_shen_sunquan", "shanhetu_boss_wutugu", "shanhetu_boss_yuejin", "shanhetu_boss_lidian",
				"shanhetu_boss_caoxiancaohua1", "shanhetu_boss_caoxiancaohua2", "shanhetu_boss_yanliangwenchou2",
				"shanhetu_boss_caiyong", "shanhetu_boss_jushou", "shanhetu_boss_lushi", "shanhetu_boss_shamoke"
			],
			against7devil_shanhetu_yao_boss: [
				"shanhetu_boss_yuanshao", "shanhetu_boss_lvbu", "shanhetu_boss_huangzu", "shanhetu_boss_dongzhuo",
				"shanhetu_boss_xusheng2", "shanhetu_boss_lvmeng", "shanhetu_boss_yingzhao"
			]
		}
	},

	translate: {
		//classification
		"against7devil": "大战七阴",
		"against7devil_boss": "挑战boss加强包",
		"against7devil_fusion": "融包",
		"against7devil_math": "数包",
		"against7devil_ex": "扩包",
		"against7devil_shanhetu_jiuzhou_boss": "山河图九州雄心包",
		"against7devil_shanhetu_yao_boss": "山河图妖包",

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
		"math_zhangchangpu": "数张昌蒲",
		"fusion_zhuanlundizang": "转轮地藏",
		"fusion_shen_xunyu": "融神荀彧",
		"fusion_panshu": "融潘淑",
		"re_boss_dongzhuo": "界乱世魔王",
		"fusion_shen_zhangfei": "融神张飞",
		"math_beimihu": "数卑弥呼",
		"re_boss_lvbu": "界虎牢关吕布",
		"fusion_yuantanyuanxiyuanshang": "融三袁",
		"shanhetu_boss_luzhi": "山河图鲁芝",
		"shanhetu_boss_xusheng": "江东铁壁",
		"shanhetu_boss_huangzhong": "羽林统帅",
		"shanhetu_boss_xiahouba": "山河图夏侯霸",
		"shanhetu_boss_kuailiangkuaiyue": "山河图蒯良蒯越",
		"shanhetu_boss_luxun": "山河图陆逊",
		"shanhetu_boss_litong": "山河图李通",
		"shanhetu_boss_ganning": "江表虎臣",
		"shanhetu_boss_sunquan": "东吴大帝",
		"shanhetu_boss_zhouyu": "山河图周瑜",
		"shanhetu_boss_fuwan": "山河图伏完",
		"shanhetu_boss_huaxiong": "山河图华雄",
		"shanhetu_boss_zhangliao": "山河图张辽",
		"shanhetu_boss_caozhang": "山河图曹彰",
		"shanhetu_boss_zhangling": "山河图张天师",
		"shanhetu_boss_wangyi": "决意巾帼",
		"shanhetu_boss_shen_zhaoyun": "常山赵子龙",
		"shanhetu_boss_zhangliao2": "古之召虎",
		"shanhetu_boss_wuhu_huangzhong": "五虎之黄忠",
		"shanhetu_boss_wuhu_machao": "五虎之马超",
		"shanhetu_boss_wuhu_zhaoyun": "五虎之赵云",
		"shanhetu_boss_wuhu_zhangfei": "五虎之张飞",
		"shanhetu_boss_wuhu_guanyu": "五虎之关羽",
		"shanhetu_boss_yanliangwenchou": "乱世双雄",
		"shanhetu_boss_sp_pangde": "山河图庞德",
		"shanhetu_boss_hansui": "山河图韩遂",
		"shanhetu_boss_xiahoudun": "山河图夏侯惇",
		"shanhetu_boss_daxiaoqiao": "绝代双骄",
		"shanhetu_boss_dengai": "伏鸾",
		"shanhetu_boss_shen_zhangliao": "山河图神张辽",
		"shanhetu_boss_zhangliang": "山河图张梁",
		"shanhetu_boss_shen_sunquan": "江东之虎",
		"shanhetu_boss_wutugu": "山河图兀突骨",
		"shanhetu_boss_yuejin": "山河图乐进",
		"shanhetu_boss_lidian": "山河图李典",
		"shanhetu_boss_caoxiancaohua1": "灵杉玉树",
		"shanhetu_boss_caoxiancaohua2": "灵杉玉树",
		"shanhetu_boss_yanliangwenchou2": "拦路双雄",
		"shanhetu_boss_caiyong": "山河图蔡邕",
		"shanhetu_boss_jushou": "山河图沮授",
		"shanhetu_boss_lushi": "卢夫人",
		"shanhetu_boss_shamoke": "山河图沙摩柯",
		"shanhetu_boss_yuanshao": "山河图袁绍",
		"shanhetu_boss_lvbu": "山河图吕布",
		"shanhetu_boss_dongzhuo": "山河图董卓",
		"shanhetu_boss_huangzu": "山河图黄祖",
		"shanhetu_boss_xusheng2": "山河图徐盛二号",
		"shanhetu_boss_lvmeng": "山河图吕蒙",
		"shanhetu_boss_yingzhao": "山河图英招",
		"shanhetu_boss_duanjiong": "凉州英杰",
		"shanhetu_boss_qiongqi": "山河图穷奇",
	},

}
