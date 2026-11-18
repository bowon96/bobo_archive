// 취향 갤러리 데이터 — 학생이 고치는 곳은 이 파일 하나입니다.
// 카드는 7장(4 · 5 · 6 · 7 · 9 · 10 · 11주). week 숫자는 바꾸지 않습니다(서브 페이지 파일 이름과 같습니다).
// author는 한글 이름, authorEn은 영문 이름입니다. 화면 왼쪽 위에 "영문이름 Archive"로 나옵니다.
// name은 한 단어, nameEn은 그 영문입니다(카드 아래 영문 라벨). object는 오브젝트 이름이고 objects 폴더의 hairline-이름.html 중 이름 부분을 쓰면 바뀝니다.
// color는 오브젝트의 선 색입니다. {"hi": "#2f6fd6", "edge": "#7a9ccf"}처럼 # 색 코드로 씁니다(hi 강조선 · edge 윤곽선 · mid 기본선 · lo 흐린선 · stroke 선 굵기 0.5~2.5). 비워 두면 기본 색입니다.
// 메모(note)에는 위의 내용 · 의도 · 기준에 없는 새 사실을 한 가지 적습니다(물건 이름, 곡 하나, 고르다 뺀 것 등). 같은 말을 다시 쓰면 글이 비어 보입니다.
// archive는 서브 페이지에 보관하는 그 주의 작업입니다. itemsLabel(모은 것의 이름) · items(모은 것: title 제목 · meta 곁글 · text 한 줄 · src 이미지) · open(열어 볼 페이지: label · href). 서브 페이지에는 items가 사진 한 장 + 제목 · 설명으로 넘어가는 화면으로 나옵니다. 이미지는 images 폴더에, 열어 볼 페이지는 작품 폴더에 복사해 두고 그 경로를 씁니다.
// embed(선택)는 열어 볼 페이지를 서브 페이지 화면 안에 그대로 넣는 값입니다: "embed": {"src": "작품/10주/레코드/index.html", "title": "10주 내 음악 페이지"}. 내 페이지가 화면 안에서 어색하면 embed를 지우고 open만 씁니다.
// 쉼표 · 따옴표 · 괄호가 하나라도 빠지면 화면이 비고 빨간 문구가 나옵니다. 그럴 땐 data_첫판.js와 비교하세요.
window.GALLERY = {
  "author": "정보원",
  "authorEn": "Bowon Jung",
  "definition": "저는 혼자 있는 시간에\n위로가 되는 것을 고르는 디자이너입니다.",
  "cards": [
    {
      "week": 4,
      "name": "밤길",
      "nameEn": "Night Road",
      "object": "lamppost",
      "color": {},
      "what": "하늘·테이블·길 사진 15장을 묶음별로 모은 아카이브",
      "why": "어두운 밤길에 가로등 하나가 켜져 빛이 번지는 걸 보여 주려고",
      "line": "시원하고 차분한 쪽을 고른다",
      "note": "",
      "archive": {
        "itemsLabel": "사진 묶음",
        "items": [
          {
            "title": "하늘",
            "meta": "사진 5장",
            "text": "푸른 하늘의 시원함과 차분함이 느껴져서",
            "src": "images/w04_01.jpg",
            "more": [
              "images/w04_sky_1.jpg",
              "images/w04_sky_2.jpg",
              "images/w04_sky_3.jpg",
              "images/w04_sky_4.jpg",
              "images/w04_sky_5.jpg"
            ]
          },
          {
            "title": "테이블",
            "meta": "사진 5장",
            "text": "여백의 미와 차분한 분위기가 좋아서",
            "src": "images/w04_02.jpg",
            "more": [
              "images/w04_table_1.jpg",
              "images/w04_table_2.jpg",
              "images/w04_table_3.jpg",
              "images/w04_table_4.jpg",
              "images/w04_table_5.jpg"
            ]
          },
          {
            "title": "길",
            "meta": "사진 5장",
            "text": "밤길의 공기가 생각나서",
            "src": "images/w04_03.jpg",
            "more": [
              "images/w04_road_1.jpg",
              "images/w04_road_2.jpg",
              "images/w04_road_3.jpg",
              "images/w04_road_4.jpg",
              "images/w04_road_5.jpg"
            ]
          }
        ],
        "open": []
      }
    },
    {
      "week": 5,
      "name": "눈빛",
      "nameEn": "Eyes",
      "object": "eyes",
      "color": {},
      "what": "좋아하는 배우의 이유 세 가지를 근거와 함께 정리",
      "why": "크게 변하지 않는 눈빛이 전하는 감정이 좋아서",
      "line": "크게 말하지 않아도 전해지는 게 좋다",
      "note": "",
      "archive": {
        "itemsLabel": "좋아하는 이유",
        "items": [
          {
            "title": "눈빛연기",
            "meta": "〈킬러들의 쇼핑몰〉",
            "text": "표정과 눈빛이 크게 변하지 않았지만 그 상황의 감정을 잘 전달해줌",
            "src": "images/w05_01.png"
          },
          {
            "title": "연기력",
            "meta": "〈킬러들의 쇼핑몰〉",
            "text": "허탈과 후회 그리고 다짐을 동시에 보여줌",
            "src": "images/w05_02.png"
          },
          {
            "title": "흡수력",
            "meta": "〈킬러들의 쇼핑몰〉",
            "text": "과하거나 어색하지 않고 날렵하고 무게감 있는 연기를 잘 보여줌",
            "src": "images/w05_03.png"
          }
        ],
        "open": [
          {
            "label": "디즈니플러스 · 킬러들의 쇼핑몰 열기",
            "href": "https://www.disneyplus.com/ko-kr"
          }
        ]
      }
    },
    {
      "week": 6,
      "name": "전시실",
      "nameEn": "Exhibit",
      "object": "rooms",
      "color": {},
      "what": "추억의 방·몽환의 전시실·서울 숲 거리 세 공간",
      "why": "생각이 많을 때 조용히 머무는 곳이라서",
      "line": "조용하고 차분한 곳에 오래 있고 싶다",
      "note": "",
      "archive": {
        "itemsLabel": "머문 공간",
        "items": [
          {
            "title": "추억의 방",
            "meta": "공부를 하고 밥을 먹고 옹기종기 모여 함께 TV를 보던 곳",
            "text": "항상, 그리고 그리울 때 머물고 싶다. 아늑하고 편해서.",
            "src": "images/w06_01.jpg",
            "more": [
              "images/w06_a1.jpg",
              "images/w06_a2.jpg",
              "images/w06_a3.jpg",
              "images/w06_a4.jpg"
            ]
          },
          {
            "title": "몽환의 전시실",
            "meta": "서울숲에 있는 전시관. 자연과 그 신비함을 느끼는 곳",
            "text": "복잡하고 생각이 많아질 때 오래 있고 싶다. 조용하고 차분해서.",
            "src": "images/w06_02.jpg",
            "more": [
              "images/w06_b1.jpg",
              "images/w06_b2.jpg",
              "images/w06_b3.jpg",
              "images/w06_b4.jpg",
              "images/w06_b5.jpg",
              "images/w06_b6.jpg"
            ]
          },
          {
            "title": "서울 숲 거리",
            "meta": "전시관 방문과 분위기 좋은 카페 방문",
            "text": "사람들을 만나고 싶을 때, 카페에 가고 싶을 때. 사람과 분위기를 함께 느낄 수 있어서.",
            "src": "images/w06_03.jpg",
            "more": [
              "images/w06_c1.jpg",
              "images/w06_c2.jpg",
              "images/w06_c3.jpg"
            ]
          }
        ],
        "open": []
      }
    },
    {
      "week": 7,
      "name": "케이스",
      "nameEn": "Case",
      "object": "case",
      "color": {},
      "what": "안경·지갑·에어팟·보조배터리·쿠션 다섯 물건",
      "why": "에어팟을 여는 순간이 나만의 시간의 시작이라서",
      "line": "나만의 시간에 늘 손 닿는 곳에 둔다",
      "note": "물건 사진은 직접 촬영하고 AI로 보정했습니다.",
      "archive": {
        "itemsLabel": "매일 쓰는 물건",
        "items": [
          {
            "title": "동그란 안경",
            "meta": "내가 무언가 볼 때 필요하다",
            "text": "나와 가장 잘 어울려서",
            "src": "images/w07_01.jpg"
          },
          {
            "title": "선물 받은 지갑",
            "meta": "무언가 결제할 때 꺼내 드는 물건",
            "text": "예쁘고 심플해서",
            "src": "images/w07_02.jpg"
          },
          {
            "title": "귀여운 에어팟",
            "meta": "매일 나만의 시간이 주어질 때 음악 감상을 위해 사용하는 것",
            "text": "귀엽고 손에 잡히는 그립감이 편해서",
            "src": "images/w07_03.jpg"
          },
          {
            "title": "보라색 맥세이프 보조배터리",
            "meta": "실외에서 배터리가 없을 때 폰 뒤에 부착하여 사용하는 물건",
            "text": "간편하고 용량이 커서",
            "src": "images/w07_04.jpg"
          },
          {
            "title": "쿠션 파운데이션",
            "meta": "외출 전 피부 정리를 위해 사용하는 물건",
            "text": "피부와 잘 맞고 디자인이 예뻐서",
            "src": "images/w07_05.jpg"
          }
        ],
        "open": []
      }
    },
    {
      "week": 9,
      "name": "등대",
      "nameEn": "Lighthouse",
      "object": "lighthouse",
      "color": {},
      "what": "마음에 남은 문장 다섯 개를 타이포 이미지로 만든 책",
      "why": "불안한 문장들 사이에서 의지할 곳이 등대라서",
      "line": "글의 감정을 먼저 읽고 타이포를 정한다",
      "note": "",
      "archive": {
        "itemsLabel": "마음에 남은 말",
        "items": [
          {
            "title": "어떤 어둠도 어떤 계절도 영원할 순 없으니까",
            "meta": "BTS 〈봄날〉 가사",
            "text": "어떤 어려움도 행복도 영원할 수 없다는 것이 위로와 불안함을 동시에 보여준다",
            "src": "images/w09_01.png"
          },
          {
            "title": "난 지금 행복해 그래서 불안해",
            "meta": "혁오 〈TOMBOY〉 가사",
            "text": "행복과 불안한 마음을 동시에 한 문장에 담아서 보여준다",
            "src": "images/w09_02.png"
          },
          {
            "title": "존재만으로 따뜻해지는 나의 등대여",
            "meta": "우예린 〈RESCUE〉 가사",
            "text": "존재만으로 나를 행복하게 해주고 내가 의지할 수 있다는 것을 보여준다",
            "src": "images/w09_03.png"
          },
          {
            "title": "마음을 좀 편히 먹어도 될걸",
            "meta": "윤하 〈포인트 니모〉 가사",
            "text": "늘 불안하고 걱정한 마음이 무색해지게 아무일이 없었다는 걸 보여준다",
            "src": "images/w09_04.png"
          },
          {
            "title": "사형 나는요 한번씩 너무 그리워요 그 때가. 이제 돌아갈수 없는 그때가",
            "meta": "〈화산귀환〉 284화",
            "text": "현재의 불안함과 버거움으로 과거의 그때로 돌아가고 싶은 마음을 보여준다",
            "src": "images/w09_05.png"
          }
        ],
        "open": [
          {
            "label": "말 타이포 작업 페이지로 가기",
            "href": "작품/09주/책/index.html"
          }
        ]
      }
    },
    {
      "week": 10,
      "name": "버스",
      "nameEn": "Bus",
      "object": "buswindow",
      "color": {},
      "what": "곡 다섯 곡과 듣는 때·이유를 담은 레코드 페이지",
      "why": "어두워지는 버스 창밖에서 떠오르는 곡이라서",
      "line": "떠오르는 가사와 장면이 있는 곡을 고른다",
      "note": "하루 중 버스와 새벽, 밤에 듣는 다섯 곡입니다.",
      "archive": {
        "itemsLabel": "다섯 곡",
        "items": [
          {
            "title": "Like Nothing (없던 일처럼)",
            "meta": "윤하",
            "text": "해가 지고 버스를 타고 어딘가 갈 때 듣는 곡입니다. 창밖이 어두워지면 이 곡이 생각납니다."
          },
          {
            "title": "Paris in the Rain",
            "meta": "Lauv",
            "text": "흐린 날 버스를 타고 가며 듣는 곡입니다. 비 내리는 도시의 밤 같은 분위기가 좋아서 흐린 날이면 먼저 떠오릅니다."
          },
          {
            "title": "너를 그리는 시간 (Drawing Our Moments)",
            "meta": "태연",
            "text": "새벽에 혼자 산책할 때 듣는 곡입니다. 잔잔하게 시작해 점점 벅차오르는 분위기가 좋아서 혼자일 때면 먼저 떠오릅니다."
          },
          {
            "title": "Time Lapse",
            "meta": "태연",
            "text": "새벽에서 아침으로 넘어가는 시간에 듣는 곡입니다. \"여전히 그대로죠 계절은\"이라는 가사가 좋아서 누군가 생각납니다."
          },
          {
            "title": "Blue",
            "meta": "태연",
            "text": "밤과 새벽에 과제를 할 때 듣는 곡입니다. \"사랑이라는 말 너를 닮은 그 말\"이라는 가사가 좋아서 이 곡을 골랐습니다."
          }
        ],
        "open": [
          {
            "label": "레코드 페이지 열기",
            "href": "작품/10주/레코드/index.html"
          }
        ]
      }
    },
    {
      "week": 11,
      "name": "빛",
      "nameEn": "Light",
      "object": "glow",
      "color": {},
      "what": "영화 장면 다섯 개의 배색 카드와 극장 페이지",
      "why": "가장 깊은 어둠 안에서 작은 빛이 위로가 되어서",
      "line": "어두운 바탕 위의 작은 빛이 좋다",
      "note": "",
      "archive": {
        "itemsLabel": "다섯 장면의 배색",
        "items": [
          {
            "title": "파묘",
            "meta": "가장 영화다운 색 #634930 (와인빛 갈색)",
            "text": "인물의 코트와 낙엽을 잇는 붉은 갈색으로, 어두운 숲 속에서 시선을 붙잡는다",
            "src": "images/w11_01.png"
          },
          {
            "title": "마녀",
            "meta": "가장 영화다운 색 #9D6169 (희미한 붉은 분홍)",
            "text": "짙은 어둠 속에서 닥터백의 얼굴에만 희미하게 번져, 표정의 광기를 눈에 띄게 만든다",
            "src": "images/w11_02.png"
          },
          {
            "title": "메이즈 러너",
            "meta": "가장 영화다운 색 #151B12 (어두운 녹흑색)",
            "text": "벽의 가장 깊은 그늘로 인물을 작게 만들어 토마스의 막막함을 드러낸다",
            "src": "images/w11_03.png"
          },
          {
            "title": "메이즈 러너: 데스 큐어",
            "meta": "가장 영화다운 색 #A48C6D (따뜻한 갈색)",
            "text": "차가운 돌 위에 온기를 얹어 새겨진 이름들을 사람의 흔적으로 보이게 한다",
            "src": "images/w11_04.png"
          },
          {
            "title": "베테랑 2",
            "meta": "가장 영화다운 색 #050D0E (밤의 어둠)",
            "text": "화면의 절반을 삼켜 인물들을 어둠 속에 가두고 싸움의 긴장을 키운다",
            "src": "images/w11_05.png"
          }
        ],
        "open": [
          {
            "label": "극장 페이지 열기",
            "href": "작품/11주/극장/index.html"
          }
        ]
      }
    }
  ]
};
