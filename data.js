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
  "author": "김용환",
  "authorEn": "KIM YONG HWAN",
  "definition": "저는 나를 믿고 아끼는 마음을\n따뜻한 빛으로 건네는 디자이너입니다.",
  "cards": [
    {
      "week": 4,
      "name": "저녁빛",
      "nameEn": "Dusk",
      "object": "moonrise",
      "color": {
        "hi": "#f2c230",
        "mid": "#2f9e86",
        "edge": "#7f9bc4"
      },
      "what": "하늘 · 손 · 길 사진 30장을 두 장씩 짝지어 넘겨 보는 사이트",
      "why": "저녁 하늘에 수놓은 풍경을 보여 주고 싶어서, 달이 뜨고 별과 오로라가 깨어나는 모습을 골랐습니다.",
      "line": "흔한 장면 안에서 특별한 순간을 고른다",
      "note": "",
      "archive": {
        "itemsLabel": "사진 묶음",
        "items": [
          {
            "title": "하늘",
            "meta": "1 / 5",
            "text": "저녁 하늘에 수놓은 풍경들을 보여주고 싶었다",
            "src": "images/w04_sky_01.jpg"
          },
          {
            "title": "하늘",
            "meta": "2 / 5",
            "text": "",
            "src": "images/w04_sky_02.jpg"
          },
          {
            "title": "하늘",
            "meta": "3 / 5",
            "text": "",
            "src": "images/w04_sky_03.jpg"
          },
          {
            "title": "하늘",
            "meta": "4 / 5",
            "text": "",
            "src": "images/w04_sky_04.jpg"
          },
          {
            "title": "하늘",
            "meta": "5 / 5",
            "text": "",
            "src": "images/w04_sky_05.jpg"
          },
          {
            "title": "손",
            "meta": "1 / 5",
            "text": "가장 특별한 결혼이라는 상황을 표현할 수 있는 사진",
            "src": "images/w04_hand_01.jpg"
          },
          {
            "title": "손",
            "meta": "2 / 5",
            "text": "",
            "src": "images/w04_hand_02.jpg"
          },
          {
            "title": "손",
            "meta": "3 / 5",
            "text": "",
            "src": "images/w04_hand_03.jpg"
          },
          {
            "title": "손",
            "meta": "4 / 5",
            "text": "",
            "src": "images/w04_hand_04.jpg"
          },
          {
            "title": "손",
            "meta": "5 / 5",
            "text": "",
            "src": "images/w04_hand_05.jpg"
          },
          {
            "title": "길",
            "meta": "1 / 5",
            "text": "평소에 길을 가다가 볼 수 있지만 놓칠 수 있는 road sign들",
            "src": "images/w04_road_01.jpg"
          },
          {
            "title": "길",
            "meta": "2 / 5",
            "text": "",
            "src": "images/w04_road_02.jpg"
          },
          {
            "title": "길",
            "meta": "3 / 5",
            "text": "",
            "src": "images/w04_road_03.jpg"
          },
          {
            "title": "길",
            "meta": "4 / 5",
            "text": "",
            "src": "images/w04_road_04.jpg"
          },
          {
            "title": "길",
            "meta": "5 / 5",
            "text": "",
            "src": "images/w04_road_05.jpg"
          }
        ],
        "open": []
      }
    },
    {
      "week": 5,
      "name": "곁",
      "nameEn": "Beside",
      "object": "duo",
      "color": {
        "hi": "#e8734a",
        "edge": "#b59a92"
      },
      "what": "좋아하는 한 사람의 이유 세 가지(프로페셔널 · 귀엽다 · 나의 이해자)",
      "why": "나를 움직이게 하는 사람과 맞물려 돈다는 점을 톱니로 옮겼습니다.",
      "line": "나를 움직이게 하는 사람을 곁에 둔다",
      "note": "",
      "archive": {
        "itemsLabel": "좋아하는 이유",
        "items": [
          {
            "title": "프로페셔널",
            "meta": "이유 1",
            "text": "본 것 · 현직 디자이너로써 본인의 자리에서 열심히 하는 모습 / 해석 · 와이프가 사회에서 열심히 살아가는 모습을 보면 나도 자극을 받아 열심히 하게된다",
            "src": "images/w05_p1.jpg"
          },
          {
            "title": "귀엽다",
            "meta": "이유 2",
            "text": "본 것 · 볼따구가 상당히 말랑말랑하니 귀엽다 / 해석 · 다람쥐 같다",
            "src": "images/w05_p2.jpg"
          },
          {
            "title": "나의 이해자",
            "meta": "이유 3",
            "text": "본 것 · 내 취미에 같이 동참해준다 / 해석 · 나의 취미, 생각, 성격 등을 이해해주고 배려해주는 것이 너무 고맙다",
            "src": "images/w05_p3.jpg"
          }
        ],
        "open": []
      }
    },
    {
      "week": 6,
      "name": "직전",
      "nameEn": "Almost",
      "object": "carve",
      "color": {
        "hi": "#b5702f",
        "edge": "#a8957f"
      },
      "what": "머물고 싶은 공간 세 곳(목공방 · 가죽 공방 · 햇빛 드는 공간)",
      "why": "깎던 물건이 거의 모양을 갖췄을 때 가장 오래 머물고 싶어서입니다.",
      "line": "무언가가 완성되기 직전, 그 순간에 오래 머문다",
      "note": "",
      "archive": {
        "itemsLabel": "머문 공간",
        "items": [
          {
            "title": "나무 냄새 나는 목공방",
            "meta": "깎던 물건이 거의 모양을 갖췄을 때 · 사진 minh-d-c (Unsplash)",
            "text": "나무를 깎아 작은 물건을 만든다. 곧 완성이 되어가는게 눈에 보여서 뿌듯함을 느끼고 싶어서",
            "src": "images/w06_s1_01.jpg"
          },
          {
            "title": "나무 냄새 나는 목공방",
            "meta": "2 / 3",
            "text": "",
            "src": "images/w06_s1_02.jpg"
          },
          {
            "title": "나무 냄새 나는 목공방",
            "meta": "3 / 3 · 사진 le-vu (Unsplash)",
            "text": "",
            "src": "images/w06_s1_03.jpg"
          },
          {
            "title": "가죽 냄새 나는 공방",
            "meta": "마지막 바느질 한 땀을 남겨 두었을 때",
            "text": "가죽을 재단하고 가방을 만든다. 끝내기 직전의 설렘을 조금 더 붙잡고 싶어서",
            "src": "images/w06_s2_01.jpg"
          },
          {
            "title": "햇빛이 드는 공간",
            "meta": "다음 작업을 시작하기 전, 머리를 비우고 싶을 때",
            "text": "아무것도 만들지 않고 잠깐 쉰다. 일상의 지침을 햇빛을 받음으로 풀고 싶어서",
            "src": "images/w06_s3_01.jpg"
          },
          {
            "title": "햇빛이 드는 공간",
            "meta": "2 / 3",
            "text": "",
            "src": "images/w06_s3_02.jpg"
          },
          {
            "title": "햇빛이 드는 공간",
            "meta": "3 / 3",
            "text": "",
            "src": "images/w06_s3_03.jpg"
          }
        ],
        "open": []
      }
    },
    {
      "week": 7,
      "name": "하루",
      "nameEn": "Daily",
      "object": "pebble",
      "color": {
        "hi": "#3f7fd9",
        "edge": "#8e9bb0"
      },
      "what": "매일 고르는 물건 다섯 개와 계속 고르는 이유",
      "why": "귀에 넣는 순간 어디든 나만의 공간이 되기 때문입니다.",
      "line": "작업하는 하루 곁에 늘 같은 것들을 둔다",
      "note": "",
      "archive": {
        "itemsLabel": "매일 고르는 물건",
        "items": [
          {
            "title": "[01] 하루를 여는 화면",
            "meta": "연보라 뒷면, 세 개의 눈",
            "text": "하루의 시작과 끝을 이걸로 열고 닫아서",
            "src": "images/w07_1a.jpg"
          },
          {
            "title": "[01] 하루를 여는 화면",
            "meta": "손에 쥐는 옆선",
            "text": "매일, 매순간",
            "src": "images/w07_1b.jpg"
          },
          {
            "title": "[02] 귀에 넣는 하얀 조약돌",
            "meta": "뚜껑을 연 순간",
            "text": "귀에 넣는 순간 어디든 나만의 공간이 되어서",
            "src": "images/w07_2a.png"
          },
          {
            "title": "[02] 귀에 넣는 하얀 조약돌",
            "meta": "귀에 들어가기 직전",
            "text": "작업에 집중할 때 바깥 소리를 닫는다",
            "src": "images/w07_2b.jpg"
          },
          {
            "title": "[03] 작업을 움직이는 손잡이",
            "meta": "비스듬히 본 곡선",
            "text": "끝까지 해내는 동안 내 손이 되어 주어서",
            "src": "images/w07_3a.jpg"
          },
          {
            "title": "[03] 작업을 움직이는 손잡이",
            "meta": "초록 불이 켜진 순간",
            "text": "작업이 끝날 때까지 손에서 놓지 않는다",
            "src": "images/w07_3b.webp"
          },
          {
            "title": "[04] 세상을 또렷하게 하는 테",
            "meta": "금빛 다리, 검은 테",
            "text": "이걸 써야 하루가 또렷하게 시작돼서",
            "src": "images/w07_4a.png"
          },
          {
            "title": "[04] 세상을 또렷하게 하는 테",
            "meta": "같은 모양, 다른 세 색",
            "text": "눈을 뜨면 가장 먼저 찾아 쓴다",
            "src": "images/w07_4b.jpg"
          },
          {
            "title": "[05] 하루치 물을 담는 통",
            "meta": "가득 채운 아침",
            "text": "한 번 채우면 작업이 끝날 때까지 다시 일어나지 않아도 돼서",
            "src": "images/w07_5a.png"
          },
          {
            "title": "[05] 하루치 물을 담는 통",
            "meta": "나란히 선 세 개의 통",
            "text": "작업하는 동안 책상 한쪽에 세워 둔다",
            "src": "images/w07_5b.jpg"
          }
        ],
        "open": [
          {
            "label": "배포한 아카이브 열기",
            "href": "https://taste-archive-kim.netlify.app"
          }
        ]
      }
    },
    {
      "week": 9,
      "name": "믿음",
      "nameEn": "Trust",
      "object": "hour",
      "color": {
        "hi": "#e0a82e",
        "mid": "#d1a15a",
        "edge": "#8b5e34",
        "lo": "#7fa3c0"
      },
      "what": "영문 말 다섯 장을 책으로 묶은 말 타이포",
      "why": "Slow, but in my own time이라는 말처럼, 내 속도대로 흐르는 시간을 모래시계로 그렸습니다.",
      "line": "말은 크게, 이유는 작게 둔다",
      "note": "",
      "archive": {
        "itemsLabel": "말",
        "items": [
          {
            "title": "Life is C between B and D",
            "meta": "사르트르 (원문 확인 필요)",
            "text": "내 삶은 내가 선택한 방향으로 흘러간다고 생각하기 때문이다.",
            "src": "images/w09_01.png"
          },
          {
            "title": "Slow, but in my own time.",
            "meta": "",
            "text": "다른 사람의 기준에 맞춰 살다 보면 내 삶을 살아갈 수 없기 때문이다.",
            "src": "images/w09_02.png"
          },
          {
            "title": "Fill your cup first, then share what overflows.",
            "meta": "",
            "text": "내 자신을 먼저 생각하지 않고 남에게 베풀다 보면 나는 채울 수 없기 때문이다.",
            "src": "images/w09_03.png"
          },
          {
            "title": "Rest is part of the work.",
            "meta": "",
            "text": "쉬어야 다시 채울 수 있기 때문이다.",
            "src": "images/w09_04.png"
          },
          {
            "title": "Trust yourself.",
            "meta": "",
            "text": "내 삶의 주체는 '나'이기 때문이다.",
            "src": "images/w09_05.png"
          }
        ],
        "open": [
          {
            "label": "책 페이지 열기",
            "href": "작품/09주/책/index.html"
          }
        ]
      }
    },
    {
      "week": 10,
      "name": "박자",
      "nameEn": "Tempo",
      "object": "spin",
      "color": {
        "hi": "#e0603f",
        "edge": "#9a9099"
      },
      "what": "힘들 때 듣는 곡 다섯 곡을 모은 레코드 페이지",
      "why": "곡을 틀어 두는 방식이 판이 도는 속도와 닮았습니다.",
      "line": "내 삶에 어느 정도를 차지하는지로 고른다",
      "note": "언젠가 살아가면서 자신감이 떨어지고 힘이 들 때 추천해 줄 노래들.",
      "archive": {
        "itemsLabel": "곡",
        "items": [
          {
            "title": "RESPECT (Feat. GRAY, DJ Pumkin) — 로꼬",
            "meta": "출근길에 차를 타고 가며 듣는 곡",
            "text": "힘들 때 Respect yourself라는 가사를 들으면 힘이 납니다."
          },
          {
            "title": "기댈 곳 — 김필",
            "meta": "너무 힘들 때, 우울할 때",
            "text": "지치고 힘든데 누군가에게 말할 수 없을 때 듣는 곡입니다. 마지막에 무반주로 부르는 부분을 가장 좋아합니다."
          },
          {
            "title": "Feel Good — Jordan Smith",
            "meta": "여행 갈 때, 기분이 좋을 때",
            "text": "하이라이트 고음이 끝나고 Jordan Smith가 나지막이 웃는 부분이 좋습니다."
          },
          {
            "title": "퇴사할게여 (Narr. 기안84) — 소연",
            "meta": "과제든 출근이든 다 때려치우고 싶을 때",
            "text": "곡 전체가 다 좋아서 듣고 나면 기분이 좀 나아집니다."
          },
          {
            "title": "Flashback — 엔플라잉",
            "meta": "이유 모를 마음속 응어리가 져 있을 때",
            "text": "노래가 시작하고 나오는 가사 네 줄이 제 마음을 대신 말해 줍니다."
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
      "name": "장면",
      "nameEn": "Scene",
      "object": "tickets",
      "color": {
        "hi": "#c0453a",
        "edge": "#4a5560"
      },
      "what": "영화 다섯 편의 장면 배색 카드와 극장",
      "why": "다섯 장면이 한 편씩 순서대로 상영되는 극장이라 영화 티켓 다섯 장으로 그렸습니다.",
      "line": "가장 마음의 위로가 된 장면의 색을 고른다",
      "note": "",
      "archive": {
        "itemsLabel": "영화",
        "items": [
          {
            "title": "레옹",
            "meta": "가장 영화다운 색 · #555B1D 올리브 초록",
            "text": "마틸다가 품에 안은 작은 초록이, 메마른 도시 속에서 두 사람이 함께 지켜 가는 생명이 된다",
            "src": "images/w11_01.png"
          },
          {
            "title": "로키",
            "meta": "가장 영화다운 색 · #021B1E 깊은 청록",
            "text": "짙은 어둠 속 로키를 감싼 청록이, 장난의 신에서 모두를 짊어진 신으로 성장한 그를 비춘다",
            "src": "images/w11_02.png"
          },
          {
            "title": "인터스텔라",
            "meta": "가장 영화다운 색 · #0E1517 검푸른 먹색",
            "text": "화면의 1%뿐인 먹색이 하얀 행성 위에서 가장 먼저 눈을 붙잡아, 부서져 도는 인듀어런스 호로 시선을 모은다",
            "src": "images/w11_03.png"
          },
          {
            "title": "트루먼 쇼",
            "meta": "가장 영화다운 색 · #58688D 짙은 하늘색",
            "text": "진짜인 줄 알았던 하늘색 벽이, 트루먼이 평생 살아온 거짓 세계의 경계를 그어 준다",
            "src": "images/w11_04.png"
          },
          {
            "title": "굿 윌 헌팅",
            "meta": "가장 영화다운 색 · #8D716E 장밋빛 갈색",
            "text": "윌 헌팅의 차가웠던 감정이 녹아 사라지는 것을 표현하는 색상",
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
