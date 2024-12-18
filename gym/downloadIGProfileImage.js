const axios = require("axios");
const searchQuerys = [
  // "theclimb_yeonnam",
  // "climbing_park_seongsu",
  // "peakers_jongro",
  // "theclimb_gangnam",
  // "sonclimb_gangnam",
  // "theclimb_yangjae",
  // "theclimb_sillim",
  // "catchstone_bucheon",
  // "rocktree_bundang",
  // "climbing_park_jongro",
  // "seoulforest_yeongdp",
  // "peakers_guro",
  // "gravity_yeongtong",
  // "climbbounce_suwon",
  // "waverock_namcheon",
  // "theclimb_b_hongdae",
  "climb_us_moran",
  "theclimb_sadang",
  "allez_climb_gangdong",
  "peakers_sinchon",
  "seoulforest_jamsil",
  "explorelocations250215804834408-son-climb-euljiro",
  "b.bloc_songdo",
  "onfleek.climbing",
  "theplastik_yeomchang",
  "epicclimb_mangpo",
  "seoulforest_guro",
  "onsight_samseong",
  "seoulforest_jongro",
  "rockland_suyu",
  "hook_wangsimni",
  "theclimb_ilsan",
  "bouldermate_suji",
  "cracker_sangbong",
  "waverock_seomyeon",
  "seoulforest_ttukseom",
  "theclimb_magok",
  "allez_climb_hyehwa",
  "the_boulder_official",
  "theclimb_nonhyeon",
  "warehouse_bouldering",
  "climbingzoom",
  "climbdays_anyang",
  "boulderfriends_hongdae",
  "bouldermate_giheung",
  "13.7billion_ly",
  "boulder_highway",
  "ggyuclimbreels",
  "basecamp_dunsan",
  "waverock_pnu",
  "climb_o_clock",
  "climbing_park",
  "dot_climbing_gym",
  "basecamp_yuseong",
  "dccg_nowon",
  "seoulboulders_seonyu",
  "mountain_ground_climb",
  "climbsquare_songdo",
  "cheese_climbing",
  "climbmax_",
  "theclimb_sinsa",
  "awake_timeworld?hl=ko",
  "boulderlife_official",
  "pogoclimbreels",
  "euljiro_damjang",
  "waverock_gwangan",
  "koalaclimbing_sangam",
  "grippick_climbing_wiryecenter",
  "climbit_guro",
  "climbsquare_icn",
  "dolnamu_climbing_gymreelC_jhs3FS0FW",
  "underdog_climb",
  "sonclimb_pangyo?__d=1%2F",
  "climb_together1",
  "mong_climbing",
  "boulderlounge_flip",
  "climbing_park_hanti",
  "ayersrock_beomgye",
  "puzzle_climbing",
  "ahtty_climbing",
  "bstar_climbing",
  "climbing_park_gangnam",
  "studioboulder",
  "explorelocations287171631139883-climbus-misa",
  "theclimb_snu?hl=ko",
  "sinchon_damjang",
  "sonsedong_climbing_",
  "rocktree_cheonan_asan",
  "boulder_pop",
  "cheongju_rock_climbing",
  "theclimb_mullae",
  "climbing_upthewall",
  "hook_seongsu",
  "theplastik_mullae",
  "allez_climb",
  "bouldergarden_siheung",
  "hanaclimbing",
  "jungclegym_official",
  "rockstar_climbing_",
  "handwerk_climbing__yangsan",
  "hangclimb_gupabal",
  "noroo_yu",
  "offthewallclimbing_itaewon",
  "boulder.box",
  "pic_climbing_gimpo",
  "otterclimbing",
  "madgym_climbing",
  "newbee_knu",
  "pepper_wonheung",
  "august.climbing_gayang",
  "seoulboulders_mokdong",
  "b.bloc_yeongjong",
  "climbsquare_cheongna",
  "climbbounce_icheon",
  "hub_climbing_incheon",
  "dsr_climbing",
  "climbing_highflex",
  "novo_climbing",
  "gravity_suwon_station",
  "redone_climbing?hl=ko",
  "climbing_gs",
  "dolmenge_jeonpo",
  "bawi_climbing",
  "noroo_jincheon",
  "the_path_climbing_in_jeju",
  "handwerk_climbing__cnu",
  "chalkup_the_boulder",
  "climbit_mokgam",
  "climb_t_t_moon",
  "freewall_climbinggym",
  "bigclimbing_official",
  "iam_not_boulder",
  "koalaclimbing_kintex",
  "newbeeclimbing",
  "gogoclimb_2nd",
  "gwang_climbing",
  "one_climb_",
  "aceclimbing_guro",
  "ayersrock_wirye",
  "funclimbgym",
  "climbsquare_gurae",
  "reverse.rock",
  "crew_climb",
  "incave_sangmu",
  "on_climbing_gym",
  "ascentclimbing_manseong",
  "climbing_park_jongro",
  "stonz_climbing",
  "santaclimbing",
  "fixboulder_yeondong",
  "boulderground_hapjeong",
  "up__climbing",
  "hold_yummy_ssg",
  "route_climbing_gym",
  "climb_zone_master",
  "",
  "climb_us_janghanp",
  "freewall_climbinggym",
  "vertigo_climbing_gym",
  "b_shop_climbing",
  "raonclimbing_gym",
  "iccscci",
  "sb_climb",
  "sb_climb",
  "holdon_climbing",
  "doclimbinggym",
  "gangneung_climbing_gym",
  "handwerk_climbing__bongsun",
  "explorelocations253682506?__d=1",
  "climb_works",
  "bricks_climbing_gym",
  "do_climbing_gimhae",
  "kingkong_climb",
  "climb_lounge",
  "hola_climbing",
  "88climbing88",
  "clubspider_climbing",
  "pohang_spider",
  "chalk_up_climbing_",
  "rockodyssey",
  "",
  "hans_climbing",
  "tarzan101_climbing",
  "sn.spider_climbing",
  "dinoclimb2023",
  "explorelocations5406121?locale=es_ES%2F&hl=en",
  "explorelocations763495937",
  "gongju__forest",
  "climbemotion",
  "sujiclimbing",
  "ansan_base_camp_climbing_gym",
  "climb_one1",
  "cho_kyu_bok_climbing_center",
  "parksclimbing",
  "clclimbing4285",
  "heelntoeclimbing",
  "clubspider_climbing",
  "explorelocations712749117",
  "explorelocations967402013372893?tab_name=nearby",
  "mongkids.ydp?hl=en-gb",
  "bit_climbing_boulder_",
  "mountainstar2020",
  "climbholic_indeogwon",
  "chalk_up_climbing_",
  "",
  "cheongju_orda_climbing_center",
  "climbing_the_hagi",
  "",
  "explorelocations386680371",
  "boulder_highway",
  "flash.boulders.gym",
  "",
  "chamonix_climbing",
  "explorelocations100530894723254",
  "",
  "",
  "",
  "ansanclimbing",
  "cho_kyu_bok_climbing_center",
  "snpe_jeong_won",
  "explorelocations450103708446143",
  "",
  "vitalbrooklyn",
  "",
  "explorelocations1022378484",
  "montarex.inc",
  "do_dream_climbing",
  "",
  "",
  "explorelocations34429787?locale=en_CA",
  "9degreeswaterloo",
  "peoplerockclimbing",
  "kingkong_climbing",
  "pajuclimb",
  "action_just_climbing",
  "bestclimbingcenter",
  "clubclimbing_ansan",
  "4seasonsclimbing_indong",
  "explorelocations1012542105",
  "_jung85_",
  "",
  "climax_climbing",
  "",
  "",
  "",
  "explorelocations194478374057227",
  "jongkukseo",
  "invait.onebailey_official",
  "explorelocations273220752",
  "yeti_climbing",
  "chalk_up_climbing_",
  "",
  "climbingtricl",
  "jumpclimbinggym",
  "mongkids_climbing",
  "kind_climbing",
  "stonegoatclimb",
  "",
  "bucheonclimbing_center?hl=fb-ha",
  "icheon.goodclimbing",
  "",
  "dynocat_climbing_gym",
  "gorillaclimbing",
  "mongkids_paju",
  "explorelocations439131432?locale=es_ES%2F",
  "",
  "cha_climbing",
  "explorelocations1005836658",
  "eight_peaks_climbing",
  "or_rock",
  "byeok_climbing",
  "",
  "namguvisitpCzDTIJxPjr_",
  "explorelocations898512990",
  "explorelocations423436899",
  "rockface_climbing",
  "newbeeclimbing",
  "",
  "kimdaeu_climbing",
  "",
  "",
  "",
  "explorelocations749382960",
  "gnsportsclimbing",
  "",
  "megastoneclimbinggym",
  "hardrock_.climbing",
  "",
  "explorelocations400351190",
  "mongkids.dmc_bukgajwa",
  "hongjongyeol_climbing_gym",
  "",
  "explorelocations980569385",
  "hands_climbing",
  "complex.welcome.center",
  "mongkids.madu",
  "element.essen",
  "junglegym_kids_climbing",
  "mclimbing_namdaegu",
  "mclimbing_chil",
  "bouldermovementsg",
  "",
  "mongkids_dongtan_bs",
  "climbingworld_ulsan",
  "",
  "explorelocations861563932",
  "klimb.bali",
  "eagleeye_climbing_gym",
  "explorelocations1005901873",
  "grayclimbinggym_dongwoo_youm",
  "seosan_climbing",
  "rpclimbing",
  "explorelocations759119689",
  "explorelocations614273730",
  "climbfarm_iksan",
  "",
  "sjj.sportclimbing.lab",
  "first_climbing_gym?hl=ko",
  "coa_climbing",
  "explorelocations242399434",
  "komount_school",
  "1st_climbing",
  "",
  "explorelocations102600431249598?locale=%25E7%25BD%2591%25E4%25B8%258A%25E8%25AE%25A2%25E8%25B4%25AD%25E9%2587%258D%25E5%25BA%2586%25E4%25B8%2589%25E5%25B3%25A1%25E8%2581%258C%25E4%25B8%259A%25E5%25AD%25A6%25E9%25996%2588%2590%25E7%25BB%25A9%25E5%258D%2595%25E3%2580%2596%25E8%2581%2594%25E7%25B3%25BB%25E5%25A8%2581%25E4%25BF%25A1%252BTG%252F%25E9%25A3%259E%25E6%259C%25BA%253A%2540buth2788%25E3%2580%2597nHlFj%7B%3F%3F%3F%3F1%7DqKoIm&hl=ar",
  "exploretags%EA%B0%95%EC%84%9C%EC%9D%B8%EA%B3%B5%EC%95%94%EB%B2%BD%EC%9E%A5top",
  "explorelocations1415361215343179",
  "",
  "balance.climbing",
  "brooklynbouldersnyc",
  "explorelocations614091896",
  "explorelocations101866847965159bac?locale=en_US",
  "exploretags%EB%B2%94%EA%B5%B4%EC%95%94top",
  "explorelocations1028480407tcc",
  "greenarrow.asakusa",
  "crescentrockwall",
  "jeonju_bawi_oreum",
  "",
  "mongkidsyb",
  "",
  "starclimb1",
  "signalclimbing",
  "g1_climbing",
  "",
  "explorelocations344107796",
  "",
  "",
  "",
  "",
  "urbanclimb?hl=ko",
  "exploretags%ED%95%AB%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%EC%A7%90top",
  "safezone_climbing_gunsan?hl=am-et",
  "mongkids_climbing.bg",
  "https:triple.guideattractions10d51412-bdd9-4757-8c62-4d0a3f31e2cc",
  "noborock_gym",
  "vietclimb?locale=ko-KR&hl=am-et",
  "explorelocations649649900",
  "explorelocations317070081",
  "midnight_climbers",
  "pinnacle2_sakae",
  "",
  "gravitylab.bkk",
  "vietclimb",
  "centralrockchelsea",
  "",
  "",
  "",
  "deepwater_soloing",
  "",
  "gwangjang_climbing",
  "hiveclimbing",
  "urbanplaygroundclimbing",
  "",
  "explorelocations772362023095455climbing-bum",
  "",
  "",
  "explorelocations255392960roca-",
  "",
  "",
  "falkorsbouldering",
  "madooyouthcenter",
  "monkclimbinggymbali",
  "",
  "monster.climbing",
  "explorelocations101350096679780?locale=%25E6%2580%258E%25E4%25B9%2588%25E4%25B9%25B0%25E5%2588%25B0%25E689%25E6%259B%25B8%25E8%2581%2594%25E7%25B3%25BB%257B%25E5%25A8%2581%25E4%25BF%25A1%252BTG%252F%25E9%25A3%259E%25E6%259C%25BA%253A%2540buth2788%257DFCdXr%25CE%25B1%3F%3F%3F%3F%3F%3F%25D6%25A4%3F%3F7b5Z3&hl=en",
  "explorelocations756383337809799",
  "",
  "monk_amsterdam",
  "tupclimbing",
  "adsummum_shinkyogoku_official",
  "yeosuclimbinggym",
  "explorelocations293715279",
  "palma_arcw",
  "explorelocations299817171?next=%2Foauth%2Fauthorize%2F%3Fclient_id%3D400ff79529614b828f626077a1186a50%26redirect_uri%3Dhttps%3A%2F%2Fwww.sohopathi.com%2Fapsl_instagram_check%26redirect_to%3Dhttps%3A%2F%2Fwww.sohopathi.com%2Fsreepur-bhangnahati-rahmania-kamil-madrasah%2F%3Fmode%3Dgrid%26scope%3Duser_profile%2Cuser_media%26response_type%3Dcode%26logger_id%3Dd51d28e2-aa76-489b-99e2-3846a3018b81",
  "",
  "benchmarkclimbing",
  "nomadboulderingsyd",
  "climbnobl",
  "laboulders",
  "vital.westharlem.uppereast",
  "mongkidsclimbing_dapsimni",
  "explorelocations276113358gravity-research",
  "ryougoku_rocky?locale=dehttps%3A%2F555ten.com%2F%3Flocale%3Ddehttps%3A%2F%2F555ten.com%2F",
  "",
  "",
  "",
  "",
  "cliffsofid",
  "jyuku_rocky",
  "climb.house_kr",
  "",
  "explorelocations919559080bali-climbing?locale=ko",
  "indoorascent?utm_source=ig_embed&ig_rid=1120ed90-aa8d-4d88-93e2-814e64f843e1",
  "aldgatecitybouldering?hl=ko",
  "arkose.strasbourgstdenis?hl=ko",
  "duesseldorf.einstein.boulder",
  "",
  "",
  "astroman_climbing",
  "rockmate.otsu",
  "",
  "",
  "ptl_bouldering_gym",
  "explorelocations105702861938122skywalk-climbing",
  "basecamp_kinshicho",
  "indo.climb",
  "explorelocations787868324753102?locale=kk-KZ",
  "",
  "explorelocations250514025",
  "explorelocations208187669612144",
  "explorelocations662147248edelweiss-center",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "explorelocations344985659",
  "",
  "climbrefuge",
  "blockfabrik",
  "monkeyspot_duisburg",
  "gravity_research_sapporo",
  "explorelocations1079607415430355",
  "climbcentral",
  "",
  "",
  "explorelocations290350964431581",
  "",
  "projectsend.sg",
  "climb_up_paris",
  "monoclimbingomura",
  "",
  "",
  "",
  "gimhae_city",
  "grottoclimbing",
  "smartclimbing_gym",
  "hola_climbingpC_z1VDhSWus?hl=cs",
  "gimjeongweon228",
  "",
  "",
  "stonegoatclimb",
  "verticalrock",
  "steelpeakclimbing",
  "",
  "explorelocations953327598196413innearby",
  "blochauscbr",
  "climb_up_officiel?hl=ko",
  "",
  "explorelocations102883368729744-a19-t-up-climbing-a19",
  "uowclimbers?locale=ko-KR&hl=es",
  "exploretags%EB%A7%8C%EB%82%A0%EA%B3%B5%EC%9B%90%EC%9D%B8%EA%B3%B5%EC%95%94%EB%B2%BD%EC%9E%A5?locale=%E6%8E%A8%E7%89%B9%E5%AE%A3%E4%BC%A0%E6%8E%A8%E5%B9%BF%E6%96%87%E6%A1%88%E6%80%8E%E4%B9%88%E5%86%99(%E8%AE%A4%E5%87%8677qunfa.com)fYQ7&hl=en",
  "",
  "",
  "",
  "",
  "neongkul_climbing",
  "maroo_climbing?hl=ko",
  "footscrayboulderingwall",
  "",
  "",
  "centralrockrandolph",
  "sorlandetklatresenter",
  "",
  "",
  "bouldering_house_knot",
  "boulderweltfrankfurt",
  "explorer_jewooreelCixZ53HJohI",
  "explorelocations415856403?utm_source=ig_embed&ig_rid=101cd2e0-4850-4821-a87d-0641339320a9&ig_mid=9C684B2A-D041-4BB3-98FD-AE2BD617ED5F",
  "",
  "",
  "rainbowcliff_official",
  "hiclimbhawaii",
  "mongkids_climbing",
  "9degreesalexandria",
  "9degreeslanecove",
  "9degreesparramatta",
  "",
  "explorelocations454509324crank-indoor-climbing?locale=ko-KR",
  "explorelocations332783824205123boulderbar-hauptbahnhof?next=%2Fdmr_smyr%2F&hl=de",
  "bestboulders",
  "climbingguam",
  "",
  "wishadventurenepal.pkr",
  "",
  "bestboulders",
  "urbanclimb?hl=ko",
  "",
  "explorelocations1035320948",
  "climb_up_aubervilliers",
  "explorelocations110483531811928climbing-district-saint-lazare",
  "safezone_climbing_gunsan?hl=am-et",
  "verdigoboulders",
  "basecamp_edogawabashi",
  "seongnamsipCpxEQeBAL0c",
  "climbingfactory_shanghai",
  "hkmin4499",
  "ktw0897",
  "",
  "rockmate.matsuiyamate",
  "",
  "keepclimbinggym",
  "northernrocks.climbing",
  "explorelocations246851453kobe-nunobiki-herb-gardens-ropeway?locale=ko-KR",
  "hiveclimbing",
  "hiveclimbing",
  "beefyboulders",
  "explorelocations1019589932philadelphia-rock-gyms---wyncote",
  "",
  "benchmarkclimbing?locale=ko&hl=af",
  "catchstone_bucheon",
  "songdosp2007",
  "",
  "88climbing88",
  "",
  "littlebox.climbsreelDA7fFZBSIrs?locale=zh-hans&hl=am-et",
  "rocktree_bundang",
  "allezjain",
  "cynixreelC_iHg9Jyij1",
  "explorelocations323664880",
  "duisburg.einstein.boulder",
  "",
  "explorelocations81749711the-stone-session?locale=ko-KR",
  "",
  "urbanapes.basement",
  "climbingspotimpact",
  "explorelocations99628125",
  "",
  "",
  "",
  "the_alpine_outpost",
  "",
  "explorelocations288773565",
  "altaclimbingaz",
  "",
  "",
  "",
  "senderone_playavista",
  "pacificpipe?hl=ko",
  "hollywoodboulders",
  "",
  "osloklatresenter",
  "goatclimbinggym",
  "blocdistrict_barcelona",
  "solutionclimbing",
  "explorelocations246346867fish-and-bird?locale=ko-KR",
  "exploretags%EC%9D%B5%EC%8A%A4%ED%8A%B8%EB%A6%BC%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8Dtop",
  "https:www.angelo.edulife-on-campusplayuniversity-recreationclimbing-wall.php",
  "",
  "tupclimbing",
  "explorelocations146237045234757-t-up-climbing-mingde",
  "island_rock_gym",
  "neverest_climbing_gym",
  "",
  "sohun10",
  "thecastleclimbingcentre",
  "atticclimbingchannel",
  "climbcentral",
  "boulderkeskus",
  "archrockclimbinghanoireels?locale=ko",
  "boulderworldsg",
  "koreanbluesreelDBZ1cSsy5ft",
  "2b_climbreelC_IfB_iSr1_?next=%2Favaferferii%2Ffeed%2F&locale=en_US%2Cen_US",
  "9.8_gravity_climbing",
  "climbtheoverlook",
  "",
  "",
  "explorelocations323664880",
  "climbonrockgym",
  "",
  "urbanclimb?hl=ko",
  "senderone_lax",
  "",
  "thepostclimbing",
  "diablorockgym",
  "hangar_18_orange",
  "",
  "red_point.app",
  "",
  "climb.bk",
  "the_player_climbingym?locale=ko-KR&hl=af",
  "",
  "boulder_plus",
  "",
  "",
  "",
  "mclimbing_chil",
  "boulder_plus",
  "",
  "boulder.c.official",
  "naturalclimbvalencia",
  "",
  "",
  "",
  "boulderweltmuenchenost",
  "class5gym",
  "rockoncebu",
  "9un._.wooreelDBlj62ZyluM",
  "sohun10",
  "explorelocations306508850",
  "bpump_ogikubo",
  "bpumptokyo",
  "bpumpyokohama",
  "pump1_kawaguchi",
  "pump2climbing",
  "jyuku_rocky",
  "barehands.climbing",
  "explorelocations107227208326465urban-base-camp",
  "climbing_park_jongro",
  "boilerroomclimbingreelDBOxFjZue6U?locale=ko-KR",
  "prepspace720reelC64IOjuO5D2",
  "nac.sapporo",
  "thewallboulderinggym",
  "tupclimbing",
  "tupclimbing",
  "dbouldering_okinawa",
  "dbouldering_namba_lead",
  "dbouldering_soga",
  "dbouldering_tamachi",
  "dbouldering_funabashi",
  "dbouldering_kaihinmakuhari",
  "dbouldering_kasukabe",
  "dbouldering_tachikawa",
  "dbouldering_sendai",
  "dbouldering_kumamoto",
  "dbouldering_ishigaki",
  "dbouldering_honatsugi",
  "dbouldering_shinkoiwa",
  "dbouldering_kushiro",
  "dbouldering_tsunashima",
  "dbouldering_hachioji",
  "dbouldering_plus_nishihachioji",
  "dbouldering_suwa",
];
const timeout = 15000;
async function fetchData(searchQueries) {
  // for (query in searchQueries) {
  for (const [index, query] of searchQueries.entries()) {
    try {
      const response = await axios.get(
        `http://127.0.0.1:80/get_profile_pic?username=${query}`,
        { timeout }
      );
      // setTimeout(() => console.log(`${"zz"}`), 2000);
      console.log(`${response.data.profile_pic_url}`);
    } catch (error) {
      console.log(`[ERROR ${query} : ${error}`);
    }
  }
}

async function fetchUrlsWithDelay(urls) {
  for (const url of urls) {
    if (url.length === 0) {
      console.log('""');
      continue;
    }
    try {
      const response = await axios.get(
        `http://127.0.0.1:80/get_profile_pic?username=${url}`
      );
      // console.log(`Data from ${url}:`, response.data);
      console.log(`${response.data.profile_pic_url}`);
    } catch (error) {
      console.error(`Error : ${url}:`);
    }

    // 다음 요청 전 5초 대기
    await new Promise((resolve) => setTimeout(resolve, 120000));
  }
}

fetchUrlsWithDelay(searchQuerys);
