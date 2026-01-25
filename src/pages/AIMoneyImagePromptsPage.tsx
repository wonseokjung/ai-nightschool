import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, CheckCircle, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';

interface PromptItem {
  title: string;
  category: string;
  usage: string;
  prompt: string;
}

interface PromptSection {
  id: string;
  title: string;
  description: string;
  prompts: PromptItem[];
}

const imageSections: PromptSection[] = [
  {
    id: 'youtube-thumbnails',
    title: '📺 SECTION 1. 유튜브 & 영상 콘텐츠 (클릭을 부르는 썸네일)',
    description: '조회수를 폭발시키는 강력한 썸네일 이미지를 생성하는 프롬프트입니다.',
    prompts: [
      {
        title: '1. 금융/재테크/부업 분야 (신뢰 + 어그로)',
        category: '유튜브 썸네일',
        usage: '금융/재테크 콘텐츠의 클릭률을 높이는 썸네일이 필요할 때 사용하세요.',
        prompt: `A high-contrast YouTube thumbnail highlighting financial success. A trustworthy-looking person in a smart casual outfit is smiling confidently, holding a laptop displaying a rising graph. Big, bold, white text with a green outline across the top reads: "[월 300만원 버는 현실적인 방법]". Below it, smaller yellow text reads: "[초보자도 당장 시작 가능!]". The background is a blurred, luxurious home office.

(금융 성공을 강조하는 고대비 유튜브 썸네일. 스마트 캐주얼을 입은 신뢰감 있는 사람이 상승 그래프가 보이는 노트북을 들고 자신 있게 웃고 있음. 상단에 크고 두꺼운 흰색 글씨(초록색 테두리)로 "[월 300만원 버는 현실적인 방법]". 그 아래 작은 노란색 글씨로 "[초보자도 당장 시작 가능!]". 배경은 흐릿하고 고급스러운 홈 오피스.)`
      },
      {
        title: '2. 테크/제품 리뷰 분야 (강렬한 임팩트)',
        category: '유튜브 썸네일',
        usage: '테크/제품 리뷰 영상의 임팩트를 극대화하고 싶을 때 활용하세요.',
        prompt: `An eye-catching tech review thumbnail. Extreme close-up of the new "[갤럭시 S30 울트라]", showing its camera lenses clearly. The lighting is dramatic blue and purple. Huge, bold, white sans-serif text across the center reads: "[이거 진짜 미쳤다!]". Below it, smaller text: "[솔직한 일주일 사용기]". Split screen effect showing the product on one side and a shocked face on the other.

(시선을 사로잡는 테크 리뷰 썸네일. 새로운 "[갤럭시 S30 울트라]"의 극단적 클로즈업, 카메라 렌즈가 선명하게 보임. 조명은 극적인 파란색과 보라색. 중앙에 거대하고 두꺼운 흰색 산세리프 글씨로 "[이거 진짜 미쳤다!]". 그 아래 작은 글씨: "[솔직한 일주일 사용기]". 화면 분할 효과로 한쪽은 제품, 다른 쪽은 놀란 얼굴.)`
      }
    ]
  },
  {
    id: 'ecommerce',
    title: '🛍️ SECTION 2. 제품 판매 & 커머스 (구매욕 자극)',
    description: '방문자를 구매자로 전환시키는 고퀄리티 제품 이미지 프롬프트입니다.',
    prompts: [
      {
        title: '3. 스마트스토어/쇼핑몰 대표 이미지 (감성 + 정보)',
        category: '이커머스',
        usage: '온라인 스토어의 제품 대표 이미지가 필요할 때 사용하세요.',
        prompt: `A high-end product photography shot for an online store. A minimalist, labeled bottle of "[유기농 호호바 오일]" placed on a natural stone pedestal surrounded by botanical elements and soft sunlight. Elegant, dark grey text overlay in a clean font reads: "[100% 퓨어 골든 호호바]". Below it: "[건조한 피부의 구원템]". The aesthetic is clean, natural, and luxurious.

(온라인 스토어를 위한 고급 제품 사진. 자연석 받침대 위에 놓인 미니멀한 라벨의 "[유기농 호호바 오일]" 병, 식물 요소와 부드러운 햇살에 둘러싸임. 우아한 짙은 회색 텍스트 오버레이로 "[100% 퓨어 골든 호호바]". 그 아래: "[건조한 피부의 구원템]". 깨끗하고 자연스럽고 고급스러운 미학.)`
      },
      {
        title: '4. 인스타그램/SNS 광고 (세로형, 트렌디)',
        category: 'SNS 광고',
        usage: '인스타그램 스토리나 릴스 광고용 세로 이미지가 필요할 때 활용하세요.',
        prompt: `(Aspect ratio 9:16) A trendy Instagram Story ad for a fashion brand. A stylish model wearing a "[오버핏 여름 린넨 셔츠]" in a vibrant cafe setting. Large, stylish white text at the top reads: "[여름 시즌 OFF 시작!]". Below it, blinking effect text: "[최대 60% 할인 | 링크 클릭]". The overall vibe is energetic and summery.

(화면비 9:16) 패션 브랜드를 위한 트렌디한 인스타그램 스토리 광고. 활기찬 카페 배경에서 "[오버핏 여름 린넨 셔츠]"를 입은 스타일리시한 모델. 상단에 크고 스타일리시한 흰색 글씨로 "[여름 시즌 OFF 시작!]". 그 아래 깜빡이는 효과의 글씨: "[최대 60% 할인 | 링크 클릭]". 전체적인 분위기는 에너제틱하고 여름 느낌.)`
      },
      {
        title: '5. 와디즈/텀블벅 크라우드 펀딩 (혁신적인 느낌)',
        category: '크라우드 펀딩',
        usage: '크라우드 펀딩 캠페인의 메인 이미지를 제작할 때 사용하세요.',
        prompt: `A dynamic product concept shot for a crowdfunding campaign. A sleek, futuristic "[휴대용 공기청정기]" floating in the air, with visual effects showing clean air flowing out. Bold, modern text reads: "[숨 쉬는 공기가 다르다]". Below it: "[펀딩 1000% 달성! 지금 참여하세요]". Dark, tech-focused background with blue neon accents.

(크라우드 펀딩 캠페인을 위한 역동적인 제품 컨셉 샷. 매끄럽고 미래지향적인 "[휴대용 공기청정기]"가 공중에 떠 있고, 깨끗한 공기가 흘러나오는 시각 효과. 대담하고 현대적인 글씨: "[숨 쉬는 공기가 다르다]". 그 아래: "[펀딩 1000% 달성! 지금 참여하세요]". 파란색 네온 포인트가 있는 어둡고 기술 중심적인 배경.)`
      }
    ]
  },
  {
    id: 'digital-products',
    title: '📘 SECTION 3. 지식 창업 & 디지털 파일 판매 (전문성 강조)',
    description: '전문성과 가치를 입증하는 디지털 제품 이미지 프롬프트입니다.',
    prompts: [
      {
        title: '6. 전자책(PDF) 표지 디자인 (권위 있는 느낌)',
        category: '전자책',
        usage: '판매용 전자책의 전문적인 표지가 필요할 때 사용하세요.',
        prompt: `A professional e-book cover design mockup. The title in large, authoritative gold text reads: "[AI 수익화 마스터 클래스]". Subtitle below: "[프롬프트 하나로 월급 버는 실전 노하우]". The background is an abstract digital brain network connected to dollar signs. Author name at the bottom: "[김제미 지음]". Looks high-value and trustworthy.

(전문적인 전자책 표지 디자인 목업. 크고 권위 있는 금색 텍스트 타이틀: "[AI 수익화 마스터 클래스]". 아래 부제: "[프롬프트 하나로 월급 버는 실전 노하우]". 배경은 달러 기호와 연결된 추상적인 디지털 두뇌 네트워크. 하단에 저자 이름: "[김제미 지음]". 가치 높고 신뢰할 수 있어 보임.)`
      },
      {
        title: '7. 노션 템플릿/플래너 홍보 이미지 (감성 데스크테리어)',
        category: '디지털 템플릿',
        usage: '노션 템플릿이나 디지털 플래너의 홍보 이미지가 필요할 때 활용하세요.',
        prompt: `An aesthetic desk setup photo promoting a digital product. An iPad Pro showing a beautifully designed "[2026 만능 생산성 플래너]" notion template page. Handwritten-style white text overlay reads: "[갓생 살기 프로젝트 시작]". The desk has a coffee cup, a plant, and a warm lamp. Cozy and organized vibe.

(디지털 제품을 홍보하는 감성적인 데스크 셋업 사진. 아름답게 디자인된 "[2026 만능 생산성 플래너]" 노션 템플릿 페이지를 보여주는 아이패드 프로. 손글씨 스타일의 흰색 텍스트 오버레이: "[갓생 살기 프로젝트 시작]". 책상에는 커피잔, 식물, 따뜻한 조명이 있음. 아늑하고 정돈된 분위기.)`
      }
    ]
  },
  {
    id: 'marketing',
    title: '📣 SECTION 4. 마케팅 & 제휴 활동 (설득력 확보)',
    description: '고객을 설득하고 전환율을 높이는 마케팅 이미지 프롬프트입니다.',
    prompts: [
      {
        title: '8. 블로그/제휴마케팅 비교 리뷰 (명확한 대비)',
        category: '제휴 마케팅',
        usage: '제품 비교 리뷰 블로그 포스팅의 대표 이미지가 필요할 때 사용하세요.',
        prompt: `A split-screen comparison photo for a review blog post. The left side is dull and grey, showing an old, worn-out "[일반 청소기]" with a red "X" and text "[기존 제품 (비추천)]". The right side is bright and clean, showing a shiny new "[나노 무선 청소기]" with a green checkmark and text "[나노 Pro (강력 추천)]". Large text across the center: "[압도적인 성능 차이!]".

(리뷰 블로그 포스팅을 위한 화면 분할 비교 사진. 왼쪽은 칙칙하고 회색이며, 낡고 닳은 "[일반 청소기]"와 빨간색 "X", 텍스트 "[기존 제품 (비추천)]"이 있음. 오른쪽은 밝고 깨끗하며, 빛나는 새 "[나노 무선 청소기]"와 초록색 체크 표시, 텍스트 "[나노 Pro (강력 추천)]"이 있음. 중앙을 가로지르는 큰 글씨: "[압도적인 성능 차이!]".)`
      },
      {
        title: '9. 카드 뉴스/정보성 콘텐츠 (가독성 최우선)',
        category: '카드 뉴스',
        usage: '인스타그램이나 페이스북용 정보성 카드 뉴스를 만들 때 활용하세요.',
        prompt: `(Aspect ratio 4:5) An informative infographic-style social media post. A clean blue gradient background. Large white title text at the top: "[꼭 알아야 할 2026년 트렌드 3가지]". Below are three distinct sections with icons and clear, readable white text: 1. Icon [Robot] text "[AI 에이전트의 일상화]", 2. Icon [Earth] text "[기후 테크 급부상]", 3. Icon [Brain] text "[도파민 디톡스 유행]". Simple, clean, and professional design.

(화면비 4:5) 정보성 인포그래픽 스타일의 소셜 미디어 포스트. 깨끗한 파란색 그라데이션 배경. 상단에 큰 흰색 타이틀 텍스트: "[꼭 알아야 할 2026년 트렌드 3가지]". 그 아래 아이콘과 명확하고 읽기 쉬운 흰색 텍스트가 있는 세 개의 구별된 섹션: 1. 아이콘 [로봇] 텍스트 "[AI 에이전트의 일상화]", 2. 아이콘 [지구] 텍스트 "[기후 테크 급부상]", 3. 아이콘 [뇌] 텍스트 "[도파민 디톡스 유행]". 단순하고 깨끗하며 전문적인 디자인.)`
      },
      {
        title: '10. 식당/카페 메뉴판 이미지 (먹음직스러운 연출)',
        category: '외식업',
        usage: '카페나 식당의 메뉴판 또는 SNS 홍보 이미지가 필요할 때 사용하세요.',
        prompt: `A mouth-watering menu board photo for a cafe. A rustic wooden board displaying three signature drinks: a "[딸기 라떼]", a "[아인슈페너]", and a "[청포도 에이드]". Each drink looks incredibly fresh and delicious. Elegant, handwritten chalk-style text next to each item with price: "[생딸기 듬뿍 라떼 - 6.5]", "[시그니처 아인슈페너 - 6.0]", etc. Warm, inviting lighting.

(카페를 위한 먹음직스러운 메뉴판 사진. "[딸기 라떼]", "[아인슈페너]", "[청포도 에이드]" 세 가지 시그니처 음료가 진열된 투박한 나무 보드. 각 음료는 믿을 수 없을 만큼 신선하고 맛있어 보임. 각 메뉴 옆에 가격과 함께 우아한 손글씨 분필 스타일 텍스트: "[생딸기 듬뿍 라떼 - 6.5]", "[시그니처 아인슈페너 - 6.0]" 등. 따뜻하고 매력적인 조명.)`
      }
    ]
  }
];

const BRAND_NAVY = '#0b1220';
const BRAND_BLUE = '#112a70';
const BRAND_GOLD = '#facc15';
const CARD_BG = '#f7f8fb';

const AIMoneyImagePromptsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'AI 수익화 이미지 생성 프롬프트 - AI 야학당';
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
          <p style={{ letterSpacing: '0.3em', textTransform: 'uppercase', color: BRAND_GOLD, fontWeight: 600, marginBottom: '14px' }}>
            AI Image Generation Toolkit
          </p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>
            AI 수익화 이미지 생성 프롬프트 10선
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', lineHeight: 1.7, opacity: 0.95 }}>
            유튜브 썸네일부터 제품 판매 이미지까지, 수익화에 바로 사용할 수 있는 10개의 실전 이미지 생성 프롬프트입니다.<br />
            Gemini 3 Pro, ChatGPT, Midjourney 등 다양한 AI 도구에 복사·붙여넣기만 하면 고퀄리티 이미지가 완성됩니다.
          </p>
          <div style={{
            marginTop: '30px',
            display: 'inline-flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {['유튜브 썸네일', '이커머스', '디지털 상품', 'SNS 광고', '마케팅'].map((pill) => (
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

      <div style={{ padding: 'clamp(40px, 8vw, 70px) clamp(15px, 5vw, 20px)', background: CARD_BG }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: 'clamp(15px, 3vw, 25px)',
            textAlign: 'center'
          }}>
            ✨ 이 프롬프트로 생성한 예제 이미지
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#64748b',
            marginBottom: 'clamp(25px, 5vw, 40px)',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            lineHeight: 1.6
          }}>
            아래 이미지들은 실제로 이 프롬프트를 사용해 Gemini로 생성한 결과물입니다
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: 'clamp(20px, 4vw, 35px)',
            marginBottom: '20px'
          }}>
            {[
              { src: '/images/cafe_menu_board.png', alt: '카페 메뉴판 예제' },
              { src: '/images/finance_thumbnail.png', alt: '재테크 썸네일 예제' },
              { src: '/images/restaurant_food_review.png', alt: '맛집 리뷰 예제' },
              { src: '/images/ai_ebook_cover.png', alt: 'AI 수익화 예제' }
            ].map((image, index) => (
              <div
                key={index}
                style={{
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  overflow: 'hidden',
                  boxShadow: '0 10px 35px rgba(15, 23, 42, 0.2)',
                  border: '2px solid #e2e8f0',
                  background: 'white',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 45px rgba(15, 23, 42, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 35px rgba(15, 23, 42, 0.2)';
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                />
              </div>
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
            <li>대괄호(`[ ]`)로 표시된 변수만 자신의 상품이나 콘텐츠에 맞게 수정하세요.</li>
            <li>프롬프트를 복사해 Gemini 3 Pro, ChatGPT, Midjourney 등 원하는 이미지 생성 AI에 붙여넣으세요.</li>
            <li>결과물이 마음에 들지 않으면 "글씨를 더 크게", "배경을 더 밝게", "색상을 더 따뜻하게" 등의 추가 지시를 하세요.</li>
            <li>생성된 이미지는 썸네일, 광고, 제품 상세페이지 등에 바로 활용할 수 있습니다.</li>
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
            { title: '1. CHOOSE', text: '목적에 맞는 프롬프트를 선택하세요.' },
            { title: '2. CUSTOMIZE', text: '대괄호 [ ] 안의 내용을 자신의 것으로 바꾸세요.' },
            { title: '3. GENERATE', text: 'AI 도구에 붙여넣고 고퀄리티 이미지를 생성하세요.' }
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0d1b2a', marginBottom: '15px' }}>
            💰 실전 수익화 이미지 생성 프롬프트 10선
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {imageSections.map((section) => (
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
                              <p style={{ marginTop: '6px', marginBottom: '4px', color: '#475569', fontSize: '0.9rem', fontWeight: 600 }}>
                                📌 {prompt.category}
                              </p>
                              <p style={{ marginTop: '8px', marginBottom: 0, color: '#64748b', fontSize: '0.95rem', fontStyle: 'italic' }}>
                                💡 {prompt.usage}
                              </p>
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
            🔥 지금 바로 이미지를 생성해 보세요
          </h2>
          <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
            이 10개의 프롬프트만 있으면 썸네일 디자이너, 제품 사진작가, 광고 전문가가 모두 손 안에 들어옵니다.<br />
            필요한 프롬프트를 복사해서 Gemini, ChatGPT, Midjourney에 바로 붙여넣어 보세요.<br />
            결과가 마음에 들지 않으면 "더 밝게 해줘", "글씨를 더 키워줘" 같은 추가 요청으로 완벽하게 다듬을 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIMoneyImagePromptsPage;

