const cheerio = require("cheerio");

// const query = "핸즈클라이밍인스타그램";
const ua =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36";

const searchQuerys = [
  "오프더월 클라이밍 이태원점 인스타그램",
  "볼더박스 클라이밍 인스타그램",
  "픽클라이밍 인스타그램",
  "오터클라이밍 인스타그램",
  "매드짐 광명클라이밍센터 인스타그램",
  "뉴비클라이밍 경북대점 인스타그램",
  "페퍼클라이밍 인스타그램",
  //   "어거스트 클라이밍 가양점 인스타그램",
  //   "서울볼더스 목동점 인스타그램",
  //   "비블럭 영종점 인스타그램",
  //   "디스커버리 클라임스퀘어 청라점 인스타그램",
  //   "클라임바운스 이천점 인스타그램",
  //   "허브클라이밍 인스타그램",
  //   "동성로 클라이밍짐 인스타그램",
  //   "클라이밍 하이프렉스 인스타그램",
  //   "노보클라이밍 인스타그램",
  //   "그래비티 클라이밍 수원역점 인스타그램",
  //   "레드원 클라이밍 광주 인스타그램",
  //   "간석클라이밍 인스타그램",
  //   "돌멩이 클라이밍 인스타그램",
  //   "바위 클라이밍센터 인스타그램",
  //   "노루클라이밍 진천점 인스타그램",
  //   "더패스클라이밍짐 제주 인스타그램",
  //   "핸드워크 클라이밍 전대점 인스타그램",
  //   "초크업 더 볼더 인스타그램",
  //   "클라임잇 목감점 인스타그램",
  //   "클라임투더문 인스타그램",
  //   "프리월클라이밍짐 평택지제점 인스타그램",
  //   "빅클라이밍 인스타그램",
  //   "아임낫볼더 인스타그램",
  //   "B-pump ogikubo 비펌프 오기쿠보 인스타그램",
  //   "코알라클라이밍 킨텍스점 인스타그램",
  //   "뉴비클라이밍 수성점 인스타그램",
  //   "고고클라이밍 인스타그램",
  //   "광클라이밍 인스타그램",
  //   "원클라임 인스타그램",
  //   "에이스 클라이밍 인스타그램",
  //   "에어즈락 클라이밍 위례점 인스타그램",
  //   "B-pump Tokyo Akihabara 비펌프 도쿄 아키하바라 인스타그램",
  //   "펀클라임짐 인스타그램",
  //   "디스커버리 클라임스퀘어 구래점 인스타그램",
  //   "리버스락 인스타그램",
  //   "클라임크루 인스타그램",
  //   "인케이브 클라이밍 인스타그램",
  //   "온클라이밍 인스타그램",
  //   "어센트클라이밍 만성 인스타그램",
  //   "스톤즈클라이밍 인스타그램",
  //   "산타클라이밍 인스타그램",
  //   "픽스볼더 클라이밍 인스타그램",
  //   "볼더그라운드 인스타그램",
  //   "UP클라이밍짐(업클라이밍) 인스타그램",
  //   "홀드야미 클라이밍 인스타그램",
  //   "루트클라이밍 인스타그램",
  //   "클라임존 인스타그램",
  //   "대구 손세동 클라이밍 칠곡 인스타그램",
  //   "서울시산악문화체험센터 인스타그램",
  //   "클라임 어스 장한평점 인스타그램",
  //   "프리월클라이밍짐 인스타그램",
  //   "손상원 클라이밍짐 잠실점 인스타그램",
  //   "버티고 클라이밍 인스타그램",
  //   "비숍 클라이밍 인스타그램",
  //   "라온클라이밍 인스타그램",
  //   "춘천클라이밍센터 인스타그램",
  //   "D Bouldering Namba 오사카 인스타그램",
  //   "산본클라이밍센터 인스타그램",
  //   "홀드온 클라이밍 인스타그램",
  //   "두클라이밍 인스타그램",
  //   "강릉클라이밍 인스타그램",
  //   "핸드워크 클라이밍 봉선점 인스타그램",
  //   "뚝섬한강공원 인공암벽장 인스타그램",
  //   "클라임웍스 인스타그램",
  //   "브릭스클라이밍짐 인스타그램",
  //   "두클라이밍 김해점 인스타그램",
  //   "킹콩클라이밍 수원 인스타그램",
  //   "클라임라운지 인스타그램",
  //   "전주 올라클라이밍센터 인스타그램",
  //   "클라이밍88 인스타그램",
  //   "클럽스파이더 클라이밍 사상점 인스타그램",
  //   "Bare Hands Climbing Gym 베어핸즈(후쿠오카) 인스타그램",
  //   "포항스파이더클럽 인스타그램",
  //   "초크업 클라이밍센터 월성점 인스타그램",
  //   "락오디세이 동래점 인스타그램",
  //   "볼리 클라이밍 인스타그램",
  //   "한스클라이밍 전주 인스타그램",
  //   "타잔101 클라이밍 압구정점 인스타그램",
  //   "성남스파이더클라이밍 인스타그램",
  //   "다이노 클라이밍짐 인스타그램",
  //   "판교공원 인공암벽장 인스타그램",
  //   "대전 청소년위캔센터 인스타그램",
  //   "공주숲 클라이밍짐 인스타그램",
  //   "클라임이모션 인스타그램",
  //   "수지클라이밍 인스타그램",
  //   "안산 베이스캠프 클라이밍 인스타그램",
  //   "클라임원 인스타그램",
  //   "조규복클라이밍센터 강변점 인스타그램",
  //   "팍스클라이밍 인스타그램",
  //   "CL 클라이밍 인스타그램",
  //   "힐앤토클라이밍 인스타그램",
  //   "클럽스파이더 클라이밍 인스타그램",
  //   "테크노클라이밍짐 인스타그램",
  //   "태릉스파이더스 클라이밍센터 인스타그램",
  //   "몽키즈클라이밍 홈플러스 영등포점 인스타그램",
  //   "빛고을 클라이밍 인스타그램",
  //   "마운틴스타 클라이밍짐 인스타그램",
  //   "클라임홀릭 인스타그램",
  //   "초크업 클라이밍센터 침산점 인스타그램",
  //   "운정 건강공원 인공암벽장 인스타그램",
  //   "청주오르다클라이밍센터 인스타그램",
  //   "클라이밍 더 하기 인스타그램",
  //   "대전클라이밍센터 인스타그램",
  //   "T-UP Climbing Gym(Wanhua) 인스타그램",
  //   "대구체육공원 암벽등반장 인스타그램",
  //   "볼더 클라이밍 짐 인스타그램",
  //   "플래시볼더스 인스타그램",
  //   "부산 동래문화회관 인공암벽장 인스타그램",
  //   "샤모니클라이밍 인스타그램",
  //   "은평 인공암벽장 인스타그램",
  //   "큐브클라이밍짐 인스타그램",
  //   "화정체육관 고려대 인스타그램",
  //   "썬 클라이밍 짐 인스타그램",
  //   "안산 클라이밍 인스타그램",
  //   "조규복클라이밍센터 금곡점 인스타그램",
  //   "마곡 레포츠 센터 인스타그램",
  //   "안양김종헌클라이밍센터 인스타그램",
  //   "홀드앤락클라이밍 인스타그램",
  //   "Vital Climbing Gym Brooklyn 인스타그램",
  //   "도봉파워클라이밍센터 인스타그램",
  //   "월드클라이밍 인스타그램",
  //   "순천 몬타렉스 인스타그램",
  //   "DoDream 두드림클라이밍 인스타그램",
  //   "강릉종합운동장 클라이밍 인스타그램",
  //   "간현암장 인스타그램",
  //   "9 Degrees WATERLOO 인스타그램",
  //   "피플락 클라이밍 인스타그램",
  //   "킹콩클라이밍 성서점 인스타그램",
  //   "파주클라이밍센터 인스타그램",
  //   "저스트 클라이밍센터 인스타그램",
  //   "인천베스트클라이밍센타 인스타그램",
  //   "클럽클라이밍 인스타그램",
  //   "인동 포시즌클라이밍짐 인스타그램",
  //   "게이트원 클라이밍 인스타그램",
  //   "서수원클라이밍센터 인스타그램",
  //   "Urban Base Camp Sinjuku(어반베이스캠프 신주쿠) 인스타그램",
  //   "신정호 인공암벽장 인스타그램",
  //   "클라이맥스 인스타그램",
  //   "익산시스포츠클라이밍장 인스타그램",
  //   "오산클라이밍 인스타그램",
  //   "홍종열클라이밍짐 평택비전점 인스타그램",
  //   "연경도약대 인스타그램",
  //   "서종국클라이밍 인스타그램",
  //   "교토 클라이밍파크 로셰 인스타그램",
  //   "원베일리 인바이트 인스타그램",
  //   "광교 호수공원 인공암벽장 인스타그램",
  //   "예티 클라이밍짐 인스타그램",
  //   "초크업클라이밍 경대점 인스타그램",
  //   "클라이밍 트리클 인스타그램",
  //   "점프클라이밍짐 장기동 인스타그램",
  //   "몽키즈클라이밍 중계점 인스타그램",
  //   "킨디클라이밍 인스타그램",
  //   "Stone Goat Climb Gym 인스타그램",
  //   "인클라이밍센터 인스타그램",
  //   "부천클라이밍센터 인스타그램",
  //   "이천굿클라이밍 인스타그램",
  //   "다이노캣 클라이밍 짐 인스타그램",
  //   "고릴라클라이밍 인스타그램",
  //   "몽키즈클라이밍 파주운정점 인스타그램",
  //   "광명시인공암벽장 인스타그램",
  //   "안산화랑 인공암벽등반장 인스타그램",
  //   "차클라이밍 단계점 인스타그램",
  //   "김해시민체육공원 삼계암벽장 인스타그램",
  //   "에잇픽스클라이밍 인스타그램",
  //   "오르락 클라이밍짐 인스타그램",
  //   "벽 클라이밍 인스타그램",
  //   "경동클라이밍센터 인스타그램",
  //   "남구국제스포츠클라이밍장 인스타그램",
  //   "춘클릿지 인스타그램",
  //   "덕천생활체육공원 인스타그램",
  //   "락페이스클라이밍 인스타그램",
  //   "뉴비클라이밍 울산 인스타그램",
  //   "시흥스포츠클라이밍센터 인스타그램",
  //   "김대우암벽교실 인스타그램",
  //   "완산생활체육공원인공암벽장 인스타그램",
  //   "성남스포츠클라이밍 인스타그램",
  //   "아람클라이밍 인스타그램",
  //   "보라매공원 인공암벽등반장 인스타그램",
  //   "강남스포츠클라이밍센터(대치유수지) 인스타그램",
  //   "안산 선부 클라이밍 인스타그램",
  //   "MegaSTONE Climbing Gym 인스타그램",
  //   "하드락 클라이밍 인스타그램",
  //   "당진 인공암벽장 인스타그램",
  //   "대구 파워클라이밍 센터 인스타그램",
  //   "서귀포 클라이밍클럽 인스타그램",
  //   "몽키즈클라이밍 북가좌점 인스타그램",
  //   "홍종열클라이밍짐 천안점 인스타그램",
  //   "설봉공원 인공암벽장 인스타그램",
  //   "수리산 매바위암벽 인스타그램",
  //   "핸즈클라이밍 인스타그램",
  //   "영남알프스 복합웰컴센터 인스타그램",
  //   "Escalade climbing gym(도쿄) 인스타그램",
  //   "몽키즈클라이밍 일산마두점 인스타그램",
  //   "ELEMENT Boulders Essen 인스타그램",
  //   "정글짐 클라이밍센터 인스타그램",
  //   "M클라이밍 남대구 인스타그램",
  //   "M클라이밍센터 인스타그램",
  //   "Boulder Movement Bugis Singapore 인스타그램",
  //   "몽키즈클라이밍동탄반송점 인스타그램",
  //   "등반세계 최병호클라이밍센터 인스타그램",
  //   "몽벨알파인어드벤처 인스타그램",
  //   "교하스포츠클라이밍짐 인스타그램",
  //   "오름마당 인스타그램",
  //   "Klimb Boulder Gym Bali 인스타그램",
  //   "Eagle Eye Climbing Gym 인스타그램",
  //   "죽미 체육공원 인공암벽장 인스타그램",
  //   "그레이클라이밍짐 인스타그램",
  //   "서산클라이밍 인스타그램",
  //   "Whipper Snapper Gym 인스타그램",
  //   "NAC Sapporo climbing gym 인스타그램",
  //   "레드포인트클라이밍 인스타그램",
  //   "대전 인공암벽장 인스타그램",
  //   "통영산양스포츠파크인공암벽장 인스타그램",
  //   "클라임팜 인스타그램",
  //   "조비산암장 인스타그램",
  //   "동탄 센트럴파크 인스타그램",
  //   "손정준 스포츠 클라이밍 연구소 인스타그램",
  //   "퍼스트 클라이밍짐 인스타그램",
  //   "코아 클라이밍(장유) 인스타그램",
  //   "용마폭포공원 중랑 스포츠클라이밍 경기장 인스타그램",
  //   "국립등산학교 인공암벽장 인스타그램",
  //   "일번가클라이밍센터 인스타그램",
  //   "안양 새물공원 인공암벽장 인스타그램",
  //   "강서 인공암벽장 인스타그램",
  //   "소흘생활체육공원 인공암벽장 인스타그램",
  //   "제주 한림 클라이밍 경기장 인스타그램",
  //   "Balance climbing gym 인스타그램",
  //   "Brooklyn Boulders Queensbridge 인스타그램",
  //   "KAIST 스포츠컴플렉스 인스타그램",
  //   "블랙야크 BAC 센터 인스타그램",
  //   "범굴암 인스타그램",
  //   "TCC 더코아클라이밍 인스타그램",
  //   "Green Arrow asakusa 인스타그램",
  //   "Crescent Wall 인스타그램",
  //   "전주바위오름 인스타그램",
  //   "몽키즈클라이밍 용인역북점 인스타그램",
  //   "별클라이밍 인스타그램",
  //   "Signal Climbing Gym 인스타그램",
  //   "광주 G1클라이밍 인스타그램",
  //   "온더락클라이밍 인스타그램",
  //   "리드 클라이밍 인스타그램",
  //   "패밀리클라이밍센터 인스타그램",
  //   "킹클라이밍 인스타그램",
  //   "포항시 인공암벽장 인스타그램",
  //   "거진 인공암벽장 인스타그램",
  //   "청석굴암장 인스타그램",
  //   "Urban Climb West End(브리즈번) 인스타그램",
  //   "핫클라이밍 인스타그램",
  //   "군산클라이밍센터 인스타그램",
  //   "몽키즈클라이밍 시흥배곧점 인스타그램",
  //   "다낭 클라이밍짐 Danang Climbing Gym 인스타그램",
  //   "NOBOROCK 인스타그램",
  //   "이창현클라이밍 인스타그램",
  //   "Hoa Hoa Bouldering Gym 인스타그램",
  //   "부천시 인공암벽장(부천종합운동장) 인스타그램",
  //   "당고개 인공암벽장 인스타그램",
  //   "프리클라이밍센터 인스타그램",
  //   "감자바위(삭제예정) 인스타그램",
  //   "Bouldering Gym Pinnacle 2 Sakae(나고야) 인스타그램",
  //   "수안보인공암벽장 인스타그램",
  //   "Gravity Lab Bangkok(방콕) 인스타그램",
  //   "비엣클라임 Viet Climb 인스타그램",
  //   "Central Rock Chelsea 인스타그램",
  //   "레드포인트 클라이밍센터 인스타그램",
  //   "부경대학교 클라이밍존 인스타그램",
  //   "춘천 딥워터 솔로잉 인스타그램",
  //   "볼더룸 인스타그램",
  //   "광장클라이밍센터 인스타그램",
  //   "모락산_계원예대(삭제예정) 인스타그램",
  //   "The Hive Bouldering Gym vancouver 인스타그램",
  //   "Urban Playground Climbing(방콕) 인스타그램",
  //   "브이업짐 인스타그램",
  //   "Climbing Bum 인스타그램",
  //   "Bouldering gym roca 인스타그램",
  //   "The Wall Bouldering Gym 인스타그램",
  //   "T-UP Climbing Gym-Nangang 인스타그램",
  //   "Falkors 인스타그램",
  //   "마두청소년수련관 인스타그램",
  //   "Monk Climbing Gym 인스타그램",
  //   "연경체육공원인공암벽장 인스타그램",
  //   "몬스터 클라이밍 인스타그램",
  //   "하나개암장(무의도) 인스타그램",
  //   "양산종합운동장 인스타그램",
  //   "Monk boulderinggym Amsterdam 인스타그램",
  //   "T-UP Climbing-Zhonghe 인스타그램",
  //   "ADSUMMUM 인스타그램",
  //   "여수클라이밍짐 인스타그램",
  //   "고양인공암벽장 인스타그램",
  //   "팔마인 인공암벽장 인스타그램",
  //   "실내암벽클라이밍 인스타그램",
  //   "대건고 체육관 인스타그램",
  //   "할매바위 인스타그램",
  //   "삼천바위 인스타그램",
  //   "Benchmark climbing(샌프란, 벤치마크) 인스타그램",
  //   "NOMAD Bouldering Gym 인스타그램",
  //   "New Orleans Boulder Lounge 인스타그램",
  //   "La boulders 인스타그램",
  //   "Vital Climbing Gym Upper East 인스타그램",
  //   "몽키즈클라이밍 답십리점 인스타그램",
  //   "Gravity Research 인스타그램",
  //   "Rocky Bouldering Gym Ryogoku 인스타그램",
  //   "경산국제클라이밍파크 인스타그램",
  //   "다낭클라이밍짐 인스타그램",
  //   "Cliffs of Id 인스타그램",
  //   "Rocky Climbing & Fitness Gym Shinjuku-Akebonobashi 인스타그램",
  //   "클라임 하우스 인스타그램",
  //   "YDP오름실내암벽장 인스타그램",
  //   "발리 클라이밍 Bali Climbing 인스타그램",
  //   "Ascent Indoor Climbing 인스타그램",
  //   "다노클라이밍 인스타그램",
  //   "Aldgate City Bouldering 인스타그램",
  //   "Arkose Strasbourg Saint Denis 인스타그램",
  //   "Einstein duesseldorf 인스타그램",
  //   "고창인공암벽장 인스타그램",
  //   "애스트로맨 인스타그램",
  //   "ROCKMATE Ogaya 인스타그램",
  //   "Push the Limit 인스타그램",
  //   "Skywalk Climbing 인스타그램",
  //   "Base Camp Tokyo Kinshicho 인스타그램",
  //   "D Bouldering Toyosaki 오키나와 인스타그램",
  //   "Indoclimb Lippo Mall Kemang 인스타그램",
  //   "문경 국제 클라이밍센터 인스타그램",
  //   "죽장암 인스타그램",
  //   "어울림누리 인스타그램",
  //   "감악산 인스타그램",
  //   "Edelweiss-Center 인스타그램",
  //   "Camp4 산리툰 인스타그램",
  //   "부산클라이밍센터 연산점 인스타그램",
  //   "서울대학교 인공암벽 인스타그램",
  //   "용머리 인공암벽장 인스타그램",
  //   "김천종합스포츠타운 인스타그램",
  //   "오페라하우스 인스타그램",
  //   "이화여대 피트니스 센터 인스타그램",
  //   "문학경기장 외벽 인스타그램",
  //   "Refuge climbing center 인스타그램",
  //   "Blockfabrik 인스타그램",
  //   "monkeyspot duisburg 인스타그램",
  //   "Gravity Research Sapporo 인스타그램",
  //   "챌린저클라이밍 영대점 인스타그램",
  //   "climb central 인스타그램",
  //   "홍천스포츠클라이밍센터 인스타그램",
  //   "Project Send 인스타그램",
  //   "Climb Up Paris Porte dItalie 인스타그램",
  //   "Mono Climbing Studio 인스타그램",
  //   "Campus Climbing 인스타그램",
  //   "전라북도 인공암벽장 인스타그램",
  //   "해피짐 인스타그램",
  //   "불암산 학도암장 인스타그램",
  //   "톺아 클라이밍 인스타그램",
  //   "김해생활체육관 인스타그램",
  //   "Grottoclimbing 인스타그램",
  //   "스마트클라이밍짐 인스타그램",
  //   "목포국제스포츠클라이밍센터 인스타그램",
  //   "목포리드클라이밍 인스타그램",
  //   "stonegoat climbing 인스타그램",
  //   "Vertical Rock 인스타그램",
  //   "Steel Peak 인스타그램",
  //   "HaoShi Sports Climbing Space (798점) 인스타그램",
  //   "BlocHaus Canberra 인스타그램",
  //   "Climb Up 인스타그램",
  //   "T-UP Climbing Gym-A19 인스타그램",
  //   "Climbing Style Club 인스타그램",
  //   "만날공원 인공암벽장 인스타그램",
  //   "Climbing Panda 熊猫攀岩生活馆(富力店) 인스타그램",
  //   "도솔광장 인공암벽장 인스타그램",
  //   "넝쿨클라이밍센터 인스타그램",
  //   "마루클라이밍센터 인스타그램",
  //   "Bouldering Wall 인스타그램",
  //   "Central Rock Gym-Randholp 인스타그램",
  //   "Sorlandet Klatresenter 인스타그램",
  //   "knot Bouldering House 인스타그램",
  //   "Boulderwelt Frankfurt 인스타그램",
  //   "빛가람클라이밍 인스타그램",
  //   "팔공산 인공암벽장 인스타그램",
  //   "거인암장 인스타그램",
  //   "고성클라이밍 인스타그램",
  //   "Rainbow Cliff - Sport Climbing Gym 인스타그램",
  //   "Hiclimb 인스타그램",
  //   "몽키즈클라이밍 신내점 인스타그램",
  //   "9 Degrees Alexandria 인스타그램",
  //   "9 Degrees Lane Cove 인스타그램",
  //   "9 Degrees Parramatta 인스타그램",
  //   "CRANK Indoor Climbing 인스타그램",
  //   "우리집 내방 행보드 인스타그램",
  //   "Boulderbar Hbf (Hauptbahnhof) 인스타그램",
  //   "Climb On Bouldering 인스타그램",
  //   "Guam Sports Climbing Center 인스타그램",
  //   "남원스포츠클라이밍 인스타그램",
  //   "포카라클라이밍 인스타그램",
  //   "Climbing on bouldering 인스타그램",
  //   "Urban Climb Newstead 인스타그램",
  //   "울산인공암벽센터 인스타그램",
  //   "남양주 인공암벽장 인스타그램",
  //   "Climb Up Aubervilliers 인스타그램",
  //   "Climbing District Saint-Lazare 인스타그램",
  //   "군산스포츠클라이밍센터 인스타그램",
  //   "Verdigo Boulders 인스타그램",
  //   "Base Camp Tokyo Edogawabashi 인스타그램",
  //   "성남종합운동장 인공암벽 인스타그램",
  //   "Rock Lab Climbing Gym(攀岩梦工厂) 인스타그램",
  //   "트윈클라이밍짐 인스타그램",
  //   "화성클라이밍클럽 인스타그램",
  //   "ROCKMATE matsuiyamate 인스타그램",
  //   "Keep Climbing 인스타그램",
  //   "Northern Rocks 인스타그램",
  //   "Rock garden kobe 인스타그램",
  //   "The Hive Climbing and Fitness 인스타그램",
  //   "The Hive Surrey - Climbing and Fitness 인스타그램",
  //   "비피볼더스 Beefy Boulders Hanoi 인스타그램",
  //   "Philadelphia Rock Gyms - Wyncote 인스타그램",
  //   "가평클라이밍센터(한석봉체육관) 인스타그램",
  //   "Benchmark climbing(버클리, 벤치마크) 인스타그램",
  //   "스톤클라이밍센터 인스타그램",
  //   "진안-삭제예정 인스타그램",
  //   "송도스포츠파크 인공암장 인스타그램",
  //   "홍성클라이밍 인스타그램",
  //   "88스포츠월드 클라이밍 인스타그램",
  //   "Climb On Gym (COG 왕징) 인스타그램",
  //   "락 클라이밍 센터 인스타그램",
  //   "Climb On Bouldering (COB Olympic Village) 인스타그램",
  //   "Mellow Climbing Gym (베이징) 인스타그램",
  //   "상무외벽 인스타그램",
  //   "쿠오레 이마이케 Climbing Gym Cuore Imaike 인스타그램",
  //   "Einstein Duisburg 인스타그램",
  //   "The Stone Session 인스타그램",
  //   "Urban apes Basement Berlin 인스타그램",
  //   "홈트 인스타그램",
  //   "홈트개인 인스타그램",
  //   "Climbingspot Impact 인스타그램",
  //   "금련산 청소년수련원 인스타그램",
  //   "Alpine Outpost 인스타그램",
  //   "물 맑고 공기좋은 원주 인스타그램",
  //   "Alta Climbing and Fitness 인스타그램",
  //   "ABL 클라이밍컵 인스타그램",
  //   "Sender One Playa Vista 인스타그램",
  //   "Pacific Pipe 인스타그램",
  //   "Hollywood Boulders 인스타그램",
  //   "Oslo Klatresenter AS 인스타그램",
  //   "GOAT climing gym 인스타그램",
  //   "Bloc District Barcelona 인스타그램",
  //   "Solution climbing 인스타그램",
  //   "Fish and Bird 인스타그램",
  //   "익스트림클라이밍 인스타그램",
  //   "Angelo State University Climbing Gym 인스타그램",
  //   "T-UP Climbing Gym-Xindian 인스타그램",
  //   "T-UP Climbing Minde 인스타그램",
  //   "Island Rock 인스타그램",
  //   "Neverest climbing 인스타그램",
  //   "Elys Boulderloft 인스타그램",
  //   "부산클라이밍센터 해운대점 인스타그램",
  //   "The Castle Climbing Centre 인스타그램",
  //   "삼성전자 R5 인스타그램",
  //   "써핑 인스타그램",
  //   "카버보드 인스타그램",
  //   "ATTIC Climbing 인스타그램",
  //   "Climb Central Funan 인스타그램",
  //   "Boulderkeskus Pasila 인스타그램",
  //   "Arch Rock Climbing Hanoi 인스타그램",
  //   "Boulder World Paragon 인스타그램",
  //   "설악산 한편의시를위한길 인스타그램",
  //   "설악산 장군봉기존길 인스타그램",
  //   "도봉산다락능선Y계곡 인스타그램",
  //   "도봉산부엉이바위 인스타그램",
  //   "98 Gravity Climbing Lisbon 인스타그램",
  //   "Overlook boulder &fitness 인스타그램",
  //   "Yanshi Panyan 시산취점 인스타그램",
  //   "하아클라이밍 인스타그램",
  //   "Rock hour climbing 岩时攀岩(大望路店) 인스타그램",
  //   "쿠오레 나카가와 Climbing Gym Cuore Nakagawa 인스타그램",
  //   "Climb On Gym 인스타그램",
  //   "보드공장 인스타그램",
  //   "Urban Climb Milton 인스타그램",
  //   "Sender One LAX 인스타그램",
  //   "The Post climbing 인스타그램",
  //   "Diablo Rock Gym 인스타그램",
  //   "Hangar 18 Orange 인스타그램",
  //   "Red Point Climbing(红点攀岩) 인스타그램",
  //   "Chongzhou Yanshisan Rock Climbing(岩十三攀岩) 인스타그램",
  //   "BK클라이밍 인스타그램",
  //   "The Player Climbingym 인스타그램",
  //   "boulder+ Chevrons 인스타그램",
  //   "M클라이밍 칠곡 인스타그램",
  //   "boulder+ Aperia 인스타그램",
  //   "클라이밍 스페이스볼더 인스타그램",
  //   "Natural climb valencia 인스타그램",
  //   "Boulderwelt Munich East 인스타그램",
  //   "Class 5 Climbing 인스타그램",
  //   "Rock On Boulder Gym 인스타그램",
  //   "그랩잇 인스타그램",
  //   "슈퍼비클라이밍 인스타그램",
  //   "beta park 인스타그램",
];

for (query of searchQuerys) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  fetch(url, {
    headers: {
      "User-Agent": ua,
    },
  })
    .then((res) => res.text())
    .then((html) => {
      const $ = cheerio.load(html);
      const searchResults = [...$(".LC20lb")].map((e) => ({
        title: $(e).text().trim(),
        link: e.parentNode.attribs.href,
      }));
      console.log(searchResults?.[0]?.link);
      //   console.log(searchResults);
    });
}
