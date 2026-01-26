import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, CheckCircle, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';

interface PromptItem {
  title: string;
  description?: string;
  usage: string;
  prompt: string;
}

interface PromptSection {
  id: string;
  title: string;
  description: string;
  prompts: PromptItem[];
}

const starterSections: PromptSection[] = [
  {
    id: 'yt-main',
    title: '📂 SECTION 1. 유튜브 (영상 콘텐츠)',
    description: '조회수와 구독자를 끌어모으는 강력한 스크립트를 자동으로 만드는 번들입니다.',
    prompts: [
      {
        title: '1. 바이럴 유튜브 대본 생성 (교육/정보형)',
        description: '목적: AI 툴 소개, 사용법 강의, 인사이트 전달',
        usage: '교육·인사이트형 롱폼 유튜브 대본을 빠르게 완성하고 싶을 때 사용하세요.',
        prompt: `당신은 100만 유튜버를 배출한 '유튜브 시나리오 작가'입니다.

내 프로필: [10년 차 AI 전문가, 미국 데이터과학 석사, CEO 출신]
주제: [주제: 예) 챗GPT로 업무 효율 10배 높이는 법]
타겟: [타겟: 성장은 하고 싶지만 데이터는 모르는 3040 직장인]

위 정보를 바탕으로 8분~10분 분량의 유튜브 스크립트를 작성해 주세요.
다음 구조를 반드시 지켜주세요.

1. 후킹(0~30초): "아직도 야근하시나요?"와 같이 시청자의 뼈를 때리는 질문으로 시작하여, 이 영상을 봐야 할 이유를 강력하게 제시.
2. 검증(30초~1분): 내 이력(미국 석사, CEO 등)을 짧게 언급하며 신뢰도 확보.
3. 본론(How-to): 초보자도 따라 할 수 있는 3단계 프로세스 (Step 1, 2, 3). 전문 용어는 초등학생 수준으로 쉽게 풀어서 설명.
4. 증명: 실제 사례나 데이터 화면이 들어갈 자리를 표시 [화면: 생산성 증가 그래프 자료화면].
5. 결론 & CTA: "이 프롬프트가 필요하다면 댓글 확인" 등 구독과 댓글 유도 멘트.

톤앤매너: 스마트하지만 친절한 멘토, 자신감 넘치는 어조.`
      },
      {
        title: '2. 유튜브 숏츠(Shorts) 대량 생산',
        description: '목적: 핵심만 요약하여 유입 유도',
        usage: '롱폼 영상을 숏폼 3편으로 재가공해 빠르게 확산시키고 싶을 때 활용하세요.',
        prompt: `위에서 작성한 롱폼 대본을 바탕으로, 조회수 폭발을 유도하는 '유튜브 숏츠' 스크립트 3개를 만들어주세요.

각 스크립트는 50초 이내 분량이어야 하며, 다음 스타일로 각각 다르게 구성하세요.

1. 반전형: "이거 모르면 시간 낭비합니다" (경고로 시작)
2. 결과형: "AI에게 업무를 맡겼더니 생긴 일" (결과부터 보여줌)
3. 꿀팁형: "딱 3번만 클릭하세요. 퇴근이 빨라집니다" (액션 강조)`
      }
    ]
  },
  {
    id: 'blog-seo',
    title: '📂 SECTION 2. 블로그 & SEO (검색 유입)',
    description: '구글/네이버 검색 상단 노출을 위한 전문적인 글쓰기 프롬프트입니다.',
    prompts: [
      {
        title: '3. 전문성 블로그 포스팅 (SEO 최적화)',
        description: '목적: 검색 유입을 통해 퍼스널 브랜딩이나 강의로 연결',
        usage: '키워드가 박힌 2,000자 SEO 블로그 글이 필요할 때 사용하세요.',
        prompt: `당신은 'SEO(검색 최적화) 마케팅 전문가'입니다.

주제: [주제: 무료 AI 이미지 생성 사이트 TOP 3]
키워드: [메인 키워드], [서브 키워드 1], [서브 키워드 2]

위 키워드가 자연스럽게 5회 이상 포함된 2,000자 분량의 블로그 포스팅을 작성하세요.

[구성 가이드]
1. 제목: 클릭을 부르는 자극적인 제목 5개 추천.
2. 서론: 독자의 공감을 이끌어내는 문제 제기 (Pain Point).
3. 본론: 정보 나열식이 아니라, '직접 써본 전문가의 시선'에서 장단점 비교 분석.
4. 행동 유도: "더 자세한 노하우는 전자책에서 확인하세요" 처럼 자연스럽게 하단 링크 클릭을 유도하는 문장 배치.
5. 가독성: 소제목, 불릿 포인트(•), 볼드체 처리를 적절히 사용하여 모바일에서도 읽기 편하게 작성.`
      }
    ]
  },
  {
    id: 'sales-pages',
    title: '📂 SECTION 3. 제품 소개 (상세페이지/이커머스)',
    description: '방문자를 고객으로 전환시키는 세일즈 카피 번들입니다.',
    prompts: [
      {
        title: '4. 전자책/강의 상세페이지 (랜딩페이지)',
        description: '목적: 고관여 상품(강의, 컨설팅) 소개',
        usage: '고가 강의·컨설팅 소개 페이지의 본문 카피가 막힐 때 활용하세요.',
        prompt: `당신은 업계 최고의 '세일즈 카피라이터'입니다.

상품: [상품명: 문과생을 위한 AI 자동화 업무 만들기 전자책]
타겟의 욕망: [업무 효율, 시간 절약, 커리어 성장]

방문자가 이 페이지를 읽고 신청 버튼을 누를 수밖에 없는 '상세페이지 카피'를 작성하세요.

PAS + H (Problem - Agitation - Solution + Hook) 공식을 사용하세요.
1. Problem: "단순 반복 업무로 답답하시죠?" (문제 인식)
2. Agitation: "AI 시대에 적응 못 하면 도태될 수 있습니다." (위기감 고조)
3. Solution: "미국 명문대 출신 AI 전문가가 핵심만 알려드립니다." (해결책 & 권위 입증)
4. Hook(증거): "실제 수강생의 성장 사례" (사회적 증거 섹션 문구)
5. Offer: "오늘만 제공되는 특별 혜택 + 프롬프트 템플릿 무료 증정" (강력한 제안)`
      },
      {
        title: '5. 쿠팡/스마트스토어 상세페이지 (이커머스)',
        description: '목적: AI 관련 굿즈, 템플릿, 물리적 상품 판매',
        usage: '쿠팡·스마트스토어에 올릴 상세페이지 텍스트와 FAQ를 만들 때 사용하세요.',
        prompt: `쿠팡(Coupang) 랭킹 1위 상품들의 상세페이지 패턴을 분석하여, [상품명]의 상세페이지 텍스트를 작성하세요.

[요구사항]
1. 인트로: 3초 안에 시선을 끄는 강력한 움짤(GIF)용 텍스트 카피. ("아직도 손으로 하세요?")
2. 특장점: 줄글 대신 핵심 키워드 3가지로 요약. (예: 🚀 3초 완성, ⭐ 압도적 효율, 📱 모바일 연동)
3. Q&A: 구매자가 자주 묻는 질문 5가지를 미리 차단하는 답변 작성. (배송, 환불, 사용법 등)
4. 모바일 최적화: 문장은 짧게, 엔터(줄바꿈)를 자주 사용하여 스마트폰 가독성 극대화.`
      }
    ]
  },
  {
    id: 'digital-products',
    title: '📂 SECTION 4. 디지털 상품 기획',
    description: '제작할 전자책, 템플릿, 이메일 코스를 기획하는 프롬프트입니다.',
    prompts: [
      {
        title: '6. 가치 있는 전자책 목차 & 초안 생성',
        description: '목적: 교육용 PDF 전자책 제작',
        usage: '30페이지 내외 전자책의 목차와 핵심 챕터 초안을 한 번에 뽑고 싶을 때 사용하세요.',
        prompt: `주제: [주제: 챗GPT 300% 활용하는 직장인 업무 비법]
분량: 30페이지 내외의 PDF 전자책

1. 사람들이 소장하고 싶어 할 매력적인 목차(Chapter) 10개를 구성해 주세요. 챕터 제목은 직관적이고 매력적으로 뽑아주세요.
2. 그중 가장 핵심인 Chapter 3의 내용을 3,000자 분량으로 상세하게 작성해 주세요.
   - 이론 설명 20% + 실무 적용 방법 80% 비율 유지.
   - 바로 복사해서 쓸 수 있는 '예시 프롬프트' 3개를 반드시 포함할 것.`
      },
      {
        title: '7. 뉴스레터/이메일 코스 작성',
        description: '목적: 독자 관리 (리드 너처링)',
        usage: '5일짜리 무료 이메일 코스를 구성해 독자의 성장을 돕고 싶을 때 사용하세요.',
        prompt: `나의 구독자에게 보낼 '5일 완성 무료 이메일 코스'의 내용을 작성해 주세요.

주제: [AI로 나만의 경쟁력 찾기 5일 챌린지]

Day 1: AI 활용에 대한 오해와 진실
Day 2: 나에게 맞는 툴 찾기 (성향 테스트)
Day 3: 첫 결과물 만들어보기 실습
Day 4: 업무 효율을 10배로 늘리는 자동화 비법
Day 5: 심화 강의 특별 제안 (Next step)

각 메일은 친근한 말투로, 읽는 데 3분 이상 걸리지 않도록 핵심만 작성하세요.`
      }
    ]
  },
  {
    id: 'ads',
    title: '📂 SECTION 5. 마케팅 카피라이팅',
    description: '적은 비용으로 높은 반응을 이끌어내는 광고 카피 프롬프트입니다.',
    prompts: [
      {
        title: '8. 인스타그램/메타 광고 카피',
        description: '목적: 강의/전자책 페이지로 트래픽 유도',
        usage: '인스타그램·메타 피드 광고 카피 3버전이 필요할 때 활용하세요.',
        prompt: `인스타그램 피드 광고에 사용할 카피 3가지 버전을 만들어주세요.

타겟: [자기계발에 관심 많은 30대 남성]

1. 스토리텔링형: "저도 처음엔 반신반의했습니다. 하지만 AI를 적용하고..." (경험담)
2. 위기소구형: "2026년, AI 못 다루면 당신의 커리어는 위험할 수 있습니다." (경각심)
3. 직관형: "선착순 100명! 10년 차 AI 전문가의 시크릿 노트 무료 배포." (혜택 강조)`
      }
    ]
  }
];

const masterPackageSections: PromptSection[] = [
  {
    id: 'part1',
    title: '🧠 PART 1. 기획 & 전략 (Strategy)',
    description: '방향성을 잡고 타겟을 분석하는 5개의 필수 프롬프트.',
    prompts: [
      {
        title: '1. 초정밀 타겟 페르소나 생성',
        usage: '핵심 고객 한 명의 생생한 프로필이 필요할 때 사용하세요.',
        prompt: `[주제/니치] 시장의 핵심 타겟인 [타겟: 예) 3040 직장인]의 구체적인 페르소나를 1명 설정해줘. 이름, 직업, 라이프스타일, 가족관계, 그리고 그가 밤마다 잠들기 전에 하는 '커리어 고민'과 '미래에 대한 욕망'을 소설처럼 상세하게 묘사해줘.`
      },
      {
        title: '2. 블루오션 주제 발굴',
        usage: '경쟁이 덜한 가치 있는 주제를 찾고 싶을 때 활용하세요.',
        prompt: `현재 [분야: 생성형 AI] 시장에서 대중들의 관심은 높지만, 경쟁자들이 아직 제대로 다루지 않고 있는 '틈새 주제(Blue Ocean)' 5가지를 찾아줘. 각 주제별로 왜 이것이 가치 있는지 이유도 설명해줘.`
      },
      {
        title: '3. 차별화된 브랜드 컨셉 정의',
        usage: 'AI 활용 교육자로서의 USP와 슬로건을 정리하고 싶을 때 사용하세요.',
        prompt: `나는 [이력: 10년 차 AI 전문가, CEO]다. 목표는 [타겟]이 인공지능을 산업 현장에 적용해 새로운 가치를 창출하도록 돕는 것이다. “단순 정보 전달자”가 아니라, 책임감 있는 AI 도입을 이끄는 교육자라는 정체성을 유지하고 싶다. 나만의 차별화된 브랜드 컨셉(USP) 3가지와 각 컨셉에 어울리는 슬로건을 제안해줘.`
      },
      {
        title: '4. 경쟁사/벤치마킹 분석',
        usage: '톱 경쟁자의 강점·약점을 빠르게 파악할 때 활용하세요.',
        prompt: `[분야]에서 가장 잘나가는 상위 유튜버/인플루언서 3명의 콘텐츠 스타일을 분석해줘. 그들의 공통적인 성공 요인은 무엇이며, 반대로 그들이 놓치고 있는 약점(내가 공략할 포인트)은 무엇인지 표로 정리해줘.`
      },
      {
        title: '5. 월간 콘텐츠 로드맵',
        usage: '3주 집중형 채널별 콘텐츠 계획이 필요할 때 사용하세요.',
        prompt: `[주제]로 브랜딩을 목표로 하는 '3주 집중 콘텐츠 로드맵'을 짜줘.

- 1주차: 신뢰 구축 (전문성 보여주기)
- 2주차: 문제 제기 (타겟의 고통 건드리기)
- 3주차: 해결책 제시 (내 노하우 공개)

각 주차별 핵심 메시지와 업로드할 채널(유튜브/블로그/인스타)을 매핑해줘.`
      }
    ]
  },
  {
    id: 'part2',
    title: '📱 PART 2. 인스타그램 & 숏폼 (Viral)',
    description: '트래픽을 만드는 짧고 강한 콘텐츠용 프롬프트.',
    prompts: [
      {
        title: '6. 인스타 프로필(Bio) 최적화',
        usage: '프로필 한 줄로 팔로워를 늘리고 싶을 때 사용하세요.',
        prompt: `내 인스타그램 프로필을 보고 사람들이 '팔로우'를 누를 수밖에 없게 만들어줘.

- 포함할 내용: [AI 전문가, CEO, 수강생 배출 수]
- 느낌: 신뢰감 있으면서도 친근하게 (이모지 활용)
- 구조: 내가 누구인지 / 무엇을 줄 수 있는지 / 권위 입증 / 링크 클릭 유도`
      },
      {
        title: '7. 릴스(Shorts) 바이럴 훅 10선',
        usage: '숏폼 영상의 첫 3초 Hook 문구가 필요할 때 활용하세요.',
        prompt: `[주제: 챗GPT 엑셀 자동화]에 대한 숏폼 영상의 첫 3초(Hook) 멘트를 10가지 버전으로 만들어줘.
- 5개는 '경각심 소구' (모르면 손해)
- 5개는 '호기심 소구' (비밀 공개)`
      },
      {
        title: '8. 카드뉴스 스토리텔링 대본',
        usage: '8장 구성의 인스타 카드뉴스 시나리오가 필요할 때 사용하세요.',
        prompt: `[주제]를 설명하는 8장짜리 인스타그램 카드뉴스 대본을 작성해줘.

- 1페이지: 클릭을 부르는 썸네일 카피
- 2~6페이지: 문제 공감 → 해결책(AI 툴) 소개 → 적용 예시
- 7페이지: 요약 및 꿀팁
- 8페이지: "더 많은 정보는 팔로우하세요" (CTA)`
      },
      {
        title: '9. 논란/토론 유발형 질문',
        usage: '댓글 참여를 유도하는 논쟁형 질문이 필요할 때 활용하세요.',
        prompt: `댓글이 많이 달리게 하기 위해, [분야]와 관련하여 건전한 찬반 논쟁이 일어날 만한 '흥미로운 질문' 3가지를 추천해줘. (예: "AI 시대, 영어 공부는 시간 낭비일까요?")`
      },
      {
        title: '10. 인스타 스토리 퍼널',
        usage: '24시간 동안 스토리 5장으로 관심을 유도하고 싶을 때 사용하세요.',
        prompt: `오늘 저녁에 [상품: 전자책]을 홍보하려고 해. 24시간 동안 올릴 인스타그램 스토리 5개 시퀀스를 짜줘.
1. 질문 스티커 (고민 상담)
2. 문제 공감 (DM 반응 공유)
3. 해결책 살짝 공개 (티저)
4. 신청 오픈 공지 (링크)
5. 마감 임박 알림 (희소성)`
      }
    ]
  },
  {
    id: 'part3',
    title: '🎥 PART 3. 유튜브 & 롱폼 (Branding)',
    description: '찐팬을 만드는 깊이 있는 영상용 프롬프트.',
    prompts: [
      {
        title: '11. 클릭률 200% 유튜브 썸네일 문구',
        usage: '썸네일 텍스트 아이디어가 막힐 때 즉시 참고하세요.',
        prompt: `영상 주제: [주제: AI로 생산성 2배 높이기]

이 영상의 클릭률을 극대화할 수 있는 썸네일 텍스트 조합 5가지를 추천해줘. (짧고, 굵고, 신뢰감 있게)`
      },
      {
        title: '12. 전문가 인터뷰 스타일 대본',
        usage: '인터뷰 형식의 롱폼 대본을 만들고 싶을 때 사용하세요.',
        prompt: `마치 PD가 나에게 질문하고 내가 답변하는 듯한 '인터뷰 형식'의 유튜브 대본을 써줘.

주제: [주제: 2026년 AI 트렌드 전망]
질문은 대중의 눈높이에서 날카롭게, 답변은 내 권위와 인사이트를 담아 전문적으로 작성해줘.`
      },
      {
        title: '13. 유튜브 SEO 디스크립션',
        usage: '영상 설명창에 들어갈 SEO 최적화 문구가 필요할 때 활용하세요.',
        prompt: `이 영상의 노출을 위해 유튜브 설명창에 들어갈 텍스트를 작성해줘.

- 영상 요약 (3줄)
- 타임스탬프 (목차) 예시
- 관련 검색어 태그 15개
- 내 강의/전자책 정보 링크 섹션`
      },
      {
        title: '14. 튜토리얼(How-to) 영상 스크립트',
        usage: '화면 녹화형 튜토리얼을 Step-by-Step으로 설명하고 싶을 때 사용하세요.',
        prompt: `[AI 툴 이름] 사용법을 알려주는 화면 녹화용 튜토리얼 대본을 써줘.

- 오프닝: 이 툴을 쓰면 얻게 되는 이득(시간/효율) 강조
- 본론: Step 1, 2, 3로 나누어 아주 쉽게 설명
- 클로징: "직접 해보시고 막히면 댓글 주세요"`
      },
      {
        title: '15. 영상 대본 → 블로그 포스팅 변환',
        usage: '유튜브 대본을 구글 최적화 블로그 글로 재활용하고 싶을 때 활용하세요.',
        prompt: `[유튜브 대본 붙여넣기]

위 대본을 바탕으로 구글 검색 상단 노출을 노리는 '블로그 포스팅'으로 변환해줘. 전문적인 어조(하십시오체)를 사용하고, 중간중간 소제목을 넣어 가독성을 높여줘.`
      }
    ]
  },
  {
    id: 'part4',
    title: '📘 PART 4. 디지털 제품 제작 (Product)',
    description: '실제로 판매할 무형 제품을 기획하는 프롬프트.',
    prompts: [
      {
        title: '16. 베스트셀러 전자책 목차 기획',
        usage: '소장 욕구를 자극하는 전자책 목차를 설계하고 싶을 때 사용하세요.',
        prompt: `[타겟]의 [고민]을 해결해 주는 30페이지 분량의 PDF 전자책을 쓰려고 한다.
사람들이 제목만 보고도 읽고 싶어지는 '목차(Table of Contents)' 10개를 구성해줘. 챕터명은 카피라이팅 요소를 넣어 매력적으로 지어줘.`
      },
      {
        title: '17. 전자책 핵심 챕터 본문 작성',
        usage: '전자책의 킬러 챕터를 실무형으로 채우고 싶을 때 활용하세요.',
        prompt: `전자책의 핵심 챕터인 [챕터명]의 본문 내용을 2,000자 내외로 작성해줘. 이론적인 설명보다는 당장 따라 할 수 있는 '실무 프롬프트'와 '예시' 위주로 채워줘.`
      },
      {
        title: '18. 챌린지/워크숍 커리큘럼',
        usage: '단기 챌린지나 워크숍 교육 과정을 짤 때 사용하세요.',
        prompt: `[기간: 5일] 동안 진행하는 [주제: 나만의 AI 비서 만들기] 챌린지 커리큘럼을 짜줘.
- Day 1~5별 학습 목표
- 매일 수행해야 할 과제 (숙제)
- 수강생들에게 제공할 템플릿 자료 리스트`
      },
      {
        title: '19. 뉴스레터(이메일) 시리즈',
        usage: '가입자 환영·스토리·제안 메일 3종 세트를 자동으로 만들고 싶을 때 활용하세요.',
        prompt: `내 홈페이지에 가입한 사람들에게 보낼 '웰컴 이메일 3종 세트'를 작성해줘.
1. 환영 인사 + 무료 자료 제공
2. 내 실패와 성공 스토리 (유대감 형성)
3. 심화 강의 특별 혜택 제안 (참여 유도)`
      },
      {
        title: '20. 실무용 프롬프트 템플릿 생성',
        usage: '사람들이 필요로 할 만한 프롬프트 번들을 만들고 싶을 때 사용하세요.',
        prompt: `사람들이 업무에 바로 쓰고 싶어 할 만한 [업무: 블로그 글쓰기/코딩/디자인] 전용 '고효율 프롬프트' 5개를 만들어줘. (이 프롬프트 자체를 정리해서 배포할 예정임)`
      }
    ]
  },
  {
    id: 'part5',
    title: '💰 PART 5. 마케팅 & 카피라이팅 (Marketing)',
    description: '고객의 마음을 움직이는 설득형 카피 프롬프트.',
    prompts: [
      {
        title: '21. 상세페이지 헤드카피 (Hero Section)',
        usage: '랜딩페이지 최상단 헤드·서브카피 다섯 버전이 필요할 때 사용하세요.',
        prompt: `상세페이지 최상단에서 고객의 이탈을 막는 강력한 헤드카피(Main Copy)와 서브카피(Sub Copy)를 5가지 버전으로 제안해줘. 상품은 [상품명]이고, 핵심 혜택은 [혜택]이다.`
      },
      {
        title: '22. PAS 공식 상세페이지 본문',
        usage: '문제-자극-해결 구조의 본문 카피를 만들 때 활용하세요.',
        prompt: `[상품명]의 소개 페이지 본문을 PAS(Problem-Agitation-Solution) 공식에 맞춰 써줘.
- Problem: 고객이 겪는 답답한 현실
- Agitation: 이대로 방치했을 때 겪을 수 있는 어려움
- Solution: 내 상품이 제공하는 해결책과 차별점`
      },
      {
        title: '23. 서비스 구성/옵션 설계',
        usage: '서비스 티어와 넛지 전략 문구가 필요할 때 사용하세요.',
        prompt: `내 [강의/전자책]의 구성을 정하려고 해.

1. 베이직 (전자책 단품)
2. 디럭스 (전자책 + VOD)
3. 프리미엄 (전자책 + VOD + 1:1 코칭)

각 옵션의 적정 구성안과, 상위 옵션을 선택하게 만드는 '넛지(Nudge) 전략' 문구를 써줘.`
      },
      {
        title: '24. 메타 광고 카피',
        usage: '무료 웨비나/리드 마그넷 광고 문구가 급할 때 활용하세요.',
        prompt: `[타겟]에게 내 [무료 웨비나]를 홍보하는 광고 문구를 써줘.
- 이미지 내 텍스트: 눈에 확 띄는 5글자 이내 단어
- 게시글 본문: "선착순 마감"을 강조하여 클릭 유도`
      },
      {
        title: '25. 검색 최적화 상품 설명 (SEO)',
        usage: '오픈마켓용 SEO 설명문을 작성할 때 사용하세요.',
        prompt: `온라인 스토어에 올릴 [상품: AI 프롬프트북]의 상세 설명을 작성해줘.
검색에 잘 걸리도록 [키워드1, 키워드2, 키워드3]를 반복해서 자연스럽게 넣어주고, 모바일에서 읽기 편하게 짧은 문장과 불릿 포인트(•)를 사용해줘.`
      }
    ]
  },
  {
    id: 'part6',
    title: '🤝 PART 6. 운영 & 커뮤니케이션 (Operations)',
    description: '전문가로서의 신뢰와 운영을 돕는 프롬프트.',
    prompts: [
      {
        title: '26. CS/문의 응대 매뉴얼',
        usage: 'FAQ 및 문의 답변 스크립트를 미리 준비하고 싶을 때 사용하세요.',
        prompt: `고객들이 자주 묻는 질문(FAQ) 10가지를 뽑고, 그에 대한 정중하고 명쾌한 답변 스크립트를 작성해줘. (질문 예시: 환불 규정, 수강 기간, 비전공자 가능 여부 등)`
      },
      {
        title: '27. 부정적 피드백 대처',
        usage: '어려운 피드백에도 품격 있게 대응해야 할 때 활용하세요.',
        prompt: `"내용이 너무 어려워요" 같은 피드백이 왔을 때, 전문가로서 품격을 잃지 않으면서도 고객을 배려하는 세련된 답변을 써줘.`
      },
      {
        title: '28. 제휴/협업 제안 이메일',
        usage: '유명 인플루언서나 기업에 협업을 제안하는 콜드 메일이 필요할 때 사용하세요.',
        prompt: `유명 유튜버나 기업 담당자에게 [협업/출강]을 제안하는 콜드 메일을 작성해줘. 내 이익보다는 상대방이 얻을 이익을 중심으로 설득력 있게 써줘.`
      },
      {
        title: '29. 수강생 후기 유도 멘트',
        usage: '후기 이벤트나 독려 문구가 필요할 때 활용하세요.',
        prompt: `강의를 다 들은 수강생들에게 "베스트 후기를 남겨주시면 커피 쿠폰을 드립니다"라는 내용의 독려 메시지(문자/알림톡)를 작성해줘.`
      },
      {
        title: '30. 프리랜서 작업 지시서',
        usage: '편집자·디자이너에게 전달할 상세 지시서를 만들 때 사용하세요.',
        prompt: `내 유튜브 편집자에게 줄 '편집 가이드라인'을 작성해줘.
- 컷 편집 호흡 (빠르게)
- 자막 스타일 (중요한 건 강조색)
- 배경음악 분위기 (신뢰감 있는)
- 썸네일 요청 사항`
      }
    ]
  }
];

const BRAND_NAVY = '#0b1220';
const BRAND_BLUE = '#112a70';
const BRAND_GOLD = '#facc15';
const CARD_BG = '#f7f8fb';

const AIMoneyMasterPromptsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'AI 비즈니스 마스터 프롬프트 - AI 야학 도서관';
    window.scrollTo(0, 0);
  }, []);

  const [activeSection, setActiveSection] = useState<string>('');
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setActiveSection((prev) => (prev === sectionId ? '' : sectionId));
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPromptId(id);
      setTimeout(() => setCopiedPromptId(null), 2000);
    } catch (error) {
      console.error('프롬프트 복사 실패:', error);
    }
  };

  return (
    <div className="masterclass-container">
      {/* 뒤로가기 */}
      <div style={{
        padding: '16px 24px',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#94a3b8',
            fontSize: '0.9rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={18} />
          돌아가기
        </button>
      </div>

      <div
        style={{
          background: `radial-gradient(circle at 15% 20%, rgba(250,204,21,0.4), transparent 45%), linear-gradient(120deg, ${BRAND_NAVY} 0%, ${BRAND_BLUE} 60%, #1f3ca6 100%)`,
          color: '#ffffff',
          padding: '70px 20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Cover Image */}
          <div style={{
            maxWidth: '280px',
            margin: '0 auto 30px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            border: '2px solid rgba(250, 204, 21, 0.3)'
          }}>
            <img
              src="/images/textbook_ai_money_vault.png"
              alt="AI Money Prompt Vault"
              style={{ width: '100%', display: 'block' }}
            />
          </div>

          <p style={{ letterSpacing: '0.3em', textTransform: 'uppercase', color: BRAND_GOLD, fontWeight: 600, marginBottom: '14px' }}>
            AI & Money Project Toolkit
          </p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>
            AI & Money Master Prompt Vault
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', lineHeight: 1.7, opacity: 0.95 }}>
            기획부터 판매 페이지까지, 텍스트 기반 콘텐츠를 올인원으로 연습할 수 있는 38개 프롬프트 모음입니다.<br />
            “AI 텍스트 연습장”처럼 복사·붙여넣기만 하면 누구나 산업 적용 시나리오를 실험하고 수익화 전략을 연습할 수 있습니다.
          </p>
          <div style={{
            marginTop: '30px',
            display: 'inline-flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {['기획 · 전략', '콘텐츠 제작', '디지털 상품', '세일즈 · 광고', '고객 관리'].map((pill) => (
              <span key={pill} style={{
                background: 'rgba(255,255,255,0.15)',
                padding: '10px 18px',
                borderRadius: '999px',
                fontWeight: 600
              }}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '50px 20px', background: CARD_BG }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '18px',
          padding: '30px',
          boxShadow: '0 20px 60px rgba(15, 23, 42, 0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px', color: '#1b263b' }}>
            ✅ 사용 방법
          </h2>
          <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: 1.8, color: '#1b263b' }}>
            <li>대괄호(`[ ]`)로 표시된 변수만 자신의 상황과 산업에 맞게 입력하세요.</li>
            <li>프롬프트를 복사해 ChatGPT, Gemini 등 원하는 AI 편집기에 붙여넣고 실험해 보세요.</li>
            <li>“역할(role)”이나 배경 문장은 자유롭게 바꾸어 사용할 수 있습니다.</li>
            <li>AI가 제시한 결과물에 대해 “예시를 더 구체화해줘”, “톤을 전문가스럽게 바꿔줘”처럼 후속 지시를 반복해 다듬어 주세요.</li>
          </ul>
        </div>
      </div>

      <div style={{ padding: '30px 20px', background: CARD_BG }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px'
        }}>
          {[
            { title: '1. PLAN', text: '목표 산업 · 타겟 · 경험을 대괄호에 입력하세요.' },
            { title: '2. PROMPT', text: '복사 → ChatGPT / Gemini / Claude 등에 붙여넣습니다.' },
            { title: '3. ITERATE', text: '추가 지시로 예시, 톤, 길이를 조정해 실전 텍스트를 완성하세요.' }
          ].map((step) => (
            <div key={step.title} style={{
              background: 'white',
              borderRadius: '14px',
              border: `1px solid ${BRAND_GOLD}`,
              padding: '20px',
              boxShadow: '0 10px 20px rgba(15, 23, 42, 0.08)'
            }}>
              <p style={{ margin: 0, color: BRAND_GOLD, fontWeight: 700, letterSpacing: '0.1em' }}>{step.title}</p>
              <p style={{ margin: '10px 0 0', color: '#1b263b', lineHeight: 1.6 }}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '60px 20px', background: CARD_BG }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {[{ heading: 'STEP 1 · 스타터 번들 (8개)', sections: starterSections }, { heading: 'STEP 2 · AI & Money 필수 프롬프트 30선', sections: masterPackageSections }].map((group) => (
            <div key={group.heading}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0d1b2a', marginBottom: '15px' }}>
                {group.heading}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {group.sections.map((section) => (
                  <div
                    key={section.id}
                    style={{
                      borderRadius: '18px',
                      border: '1px solid #d1d9ee',
                      background: 'white',
                      overflow: 'hidden',
                      boxShadow: '0 18px 40px rgba(10, 21, 54, 0.08)'
                    }}
                  >
                    <button
                      onClick={() => toggleSection(section.id)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        padding: '24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px', color: '#1b263b' }}>
                          {section.title}
                        </h3>
                        <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{section.description}</p>
                      </div>
                      {activeSection === section.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>

                    {activeSection === section.id && (
                      <div style={{ padding: '0 24px 24px', borderTop: '1px solid #e2e8f0', background: CARD_BG }}>
                        {section.prompts.map((prompt, index) => {
                          const promptId = `${section.id}-${index}`;
                          return (
                            <div
                              key={promptId}
                              style={{
                                background: 'white',
                                borderRadius: '14px',
                                padding: '20px',
                                marginTop: '18px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 18px 28px rgba(15, 23, 42, 0.08)'
                              }}
                            >
                              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                                <div style={{ flex: 1 }}>
                                  <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: '#1b263b' }}>
                                    {prompt.title}
                                  </h4>
                                  {prompt.description && (
                                    <p style={{ marginTop: '6px', marginBottom: 0, color: '#475569', fontSize: '0.95rem' }}>
                                      {prompt.description}
                                    </p>
                                  )}
                                </div>
                                <button
                                  onClick={() => copyToClipboard(prompt.prompt, promptId)}
                                  style={{
                                    background: copiedPromptId === promptId ? '#16a34a' : BRAND_GOLD,
                                    color: copiedPromptId === promptId ? 'white' : '#ffffff',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '999px',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    cursor: 'pointer',
                                    minWidth: '110px',
                                    justifyContent: 'center',
                                    boxShadow: '0 10px 18px rgba(250, 204, 21, 0.3)'
                                  }}
                                >
                                  {copiedPromptId === promptId ? (
                                    <>
                                      <CheckCircle size={14} />
                                      복사됨
                                    </>
                                  ) : (
                                    <>
                                      <Copy size={14} />
                                      복사
                                    </>
                                  )}
                                </button>
                              </div>
                              <div
                                style={{
                                  marginTop: '15px',
                                  background: 'white',
                                  color: '#0d1b2a',
                                  padding: '18px',
                                  borderRadius: '12px',
                                  fontFamily:
                                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                                  fontSize: '0.9rem',
                                  lineHeight: 1.7,
                                  whiteSpace: 'pre-wrap',
                                  border: '1px dashed #d7def2'
                                }}
                              >
                                {prompt.prompt}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: '60px 20px',
        background: BRAND_NAVY,
        color: '#ffffff',
        textAlign: 'center',
        borderTop: `4px solid ${BRAND_GOLD}`
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '15px' }}>
            AI & Money Prompt Vault, 지금 바로 복사해 보세요
          </h2>
          <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
            이 패키지만 있으면 기획자 · 작가 · 마케터 · 카피라이터가 모두 손 안에 들어옵니다.<br />
            필요한 프롬프트를 복사해서 ChatGPT나 Gemini에 바로 붙여넣어 보세요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIMoneyMasterPromptsPage;


