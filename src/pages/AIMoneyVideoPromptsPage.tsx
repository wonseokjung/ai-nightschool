import React, { useState, useEffect } from 'react';
import { Copy, CheckCircle, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';





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

const videoSections: PromptSection[] = [
  {
    id: 'youtube-shorts',
    title: '📱 SECTION 1. 유튜브 숏츠 & 릴스 (바이럴 폭발)',
    description: '조회수를 폭발시키는 짧고 강력한 숏폼 영상 프롬프트입니다.',
    prompts: [
      {
        title: '1. 금융/재테크 숏폼 (30초 임팩트)',
        category: '유튜브 숏츠',
        usage: '재테크·부업 관련 짧고 강렬한 영상이 필요할 때 사용하세요.',
        prompt: `Create a 30-second YouTube Shorts video about "[AI로 월 300만원 부업 만들기]".

Opening (0-5초): A person looking stressed at their bank account on a laptop screen showing low balance.
Hook text overlay: "[월급만으론 부족하다면?]"

Main content (5-20초): Quick transition to the same person now smiling, using AI tools (ChatGPT interface visible), generating content automatically. Show money symbols and rising graphs appearing around them.
Text overlay: "[AI가 24시간 일한다]"

Closing (20-30초): Person relaxing on a couch while phone shows notifications of earnings. 
CTA text: "[댓글에 링크 확인하세요]"

Style: Fast-paced cuts, energetic background music, bright and modern color grading.

(30초 유튜브 숏츠 영상 "[AI로 월 300만원 부업 만들기]". 오프닝: 낮은 잔고를 보며 스트레스받는 사람. 메인: AI 도구로 자동 콘텐츠 생성하며 웃는 사람, 돈 기호와 상승 그래프. 클로징: 소파에서 휴식하며 수익 알림 받는 장면. 빠른 컷, 밝고 현대적인 색감.)`
      },
      {
        title: '2. 제품 리뷰 숏폼 (문제→해결 구조)',
        category: '제품 리뷰',
        usage: '제품의 Before/After를 극적으로 보여주는 짧은 영상이 필요할 때 활용하세요.',
        prompt: `Create a 45-second product review short video for "[나노 무선 청소기]".

Scene 1 (0-10초): Chaotic messy room with dust everywhere. Person looking frustrated trying to clean with an old vacuum.
Text: "[청소가 이렇게 힘들었나요?]"

Scene 2 (10-30초): Same person now effortlessly cleaning with the new sleek wireless vacuum. Smooth tracking shots showing the product from multiple angles. Dust disappearing instantly.
Text: "[나노 무선 청소기의 압도적 파워]"

Scene 3 (30-45초): Clean, sparkling room. Person giving thumbs up. Product displayed prominently with key features highlighted.
Text: "[10분 만에 끝! 링크는 설명란에]"

Style: Clean, bright lighting, satisfying cleaning sounds, modern upbeat music.

(45초 제품 리뷰 "[나노 무선 청소기]". 장면1: 먼지 가득한 방, 낡은 청소기로 힘들어하는 모습. 장면2: 새 무선 청소기로 손쉽게 청소, 먼지 즉시 제거. 장면3: 깨끗한 방, 제품 특징 강조. 깔끔하고 밝은 조명, 만족스러운 청소 소리.)`
      },
      {
        title: '3. 교육/튜토리얼 숏폼 (How-to 스타일)',
        category: '교육 콘텐츠',
        usage: '특정 기술이나 팁을 빠르게 알려주는 교육 영상이 필요할 때 사용하세요.',
        prompt: `Create a 60-second tutorial short video: "[ChatGPT로 엑셀 자동화하는 법 3단계]".

Intro (0-8초): Split screen showing manual Excel work (left, slow and tedious) vs automated result (right, instant).
Text: "[아직도 손으로 하시나요?]"

Step 1 (8-25초): Screen recording of opening ChatGPT, typing a command for Excel automation. Clear, easy-to-read text appears explaining the prompt.
Text overlay: "[STEP 1: ChatGPT에게 작업 설명]"

Step 2 (25-42초): ChatGPT generating VBA code or formula. Copy button click animation.
Text: "[STEP 2: 코드 복사]"

Step 3 (42-55초): Pasting code into Excel, hitting run, data instantly organizing itself beautifully.
Text: "[STEP 3: 엑셀에 붙여넣기 - 완료!]"

Outro (55-60초): Happy person with arms up in victory. 
Text: "[팔로우하고 더 많은 팁 받기]"

Style: Clean screen recording, simple and clear, professional but friendly tone.

(60초 튜토리얼 "[ChatGPT 엑셀 자동화 3단계]". 수동 작업 vs 자동화 비교 → ChatGPT 프롬프트 입력 → 코드 복사 → 엑셀 실행. 깔끔한 화면 녹화, 명확한 설명.)`
      }
    ]
  },
  {
    id: 'youtube-longform',
    title: '🎬 SECTION 2. 유튜브 롱폼 (8~15분 심화 콘텐츠)',
    description: '구독자를 찐팬으로 만드는 깊이 있는 롱폼 영상 프롬프트입니다.',
    prompts: [
      {
        title: '4. 스토리텔링 롱폼 (감성 자극)',
        category: '유튜브 롱폼',
        usage: '개인적인 경험담이나 성장 스토리를 담은 영상이 필요할 때 사용하세요.',
        prompt: `Create a 10-minute storytelling YouTube video: "[AI 배우고 월급 2배 번 썰 푼다]".

Act 1 - The Struggle (0-2분): Dark, moody scenes of person working late at office, looking tired and unfulfilled. Voiceover shares struggles of low pay and no growth.
Visual: Dim lighting, slow pacing, relatable office scenes.

Act 2 - The Discovery (2-5분): Person discovers AI tools (ChatGPT, automation). Montage of learning, trying new tools, making mistakes but persisting. Lighting gradually gets brighter.
Visual: Screen recordings of AI tools, energetic transitions, upbeat background music starts.

Act 3 - The Transformation (5-8분): Person using AI to create side projects, getting first clients, revenue growing. Show real results - bank account, client messages, projects completed.
Visual: Bright, hopeful lighting, success montage, inspiring music peaks.

Act 4 - The Message (8-10분): Person now confident and happy, sharing key lessons learned. Direct advice to viewers.
Text overlays: "[당신도 할 수 있습니다]"
CTA: "[무료 가이드는 댓글 확인]"

Style: Cinematic, emotional music, personal and authentic tone, mix of talking head and B-roll.

(10분 스토리텔링 "[AI로 월급 2배 번 썰]". 1막: 직장에서 지치고 힘든 모습 (어두운 조명). 2막: AI 발견 및 학습 과정 (점점 밝아짐). 3막: 성공과 수익 증가 (밝고 희망찬). 4막: 교훈 공유 및 CTA. 감성적이고 진실된 톤.)`
      },
      {
        title: '5. 인터뷰/전문가 대담 형식',
        category: '인터뷰 콘텐츠',
        usage: '전문성을 드러내는 심층 인터뷰 영상이 필요할 때 활용하세요.',
        prompt: `Create a 12-minute expert interview style video: "[AI 전문가가 말하는 2026년 트렌드 전망]".

Opening (0-1분): Professional studio setup, calm background music. Host introduces today's topic and guest credentials.
Visual: Two-camera setup, professional lighting, graphics showing guest's achievements.

Segment 1 (1-5분): Current state of AI industry. Guest explains with passion and clarity. Cut to relevant B-roll footage of AI applications, charts, and data.
Graphics: Key statistics and trend graphs appear on screen.

Segment 2 (5-9분): Future predictions and opportunities. Guest shares insider insights. Show examples and case studies.
Visual: Animated infographics, real-world examples, split-screen comparisons.

Segment 3 (9-11분): Practical advice for viewers - how to prepare, what to learn.
Text overlays: Key takeaways appear as bullet points.

Closing (11-12분): Summary and call-to-action. "Subscribe for more expert insights."
Visual: Smooth outro, channel branding, end cards.

Style: Professional but approachable, balanced pacing, high production value, authoritative yet friendly tone.

(12분 전문가 인터뷰 "[2026 AI 트렌드 전망]". 오프닝: 전문적인 스튜디오, 게스트 소개. 세그먼트1: 현황 분석 + B-roll. 세그먼트2: 미래 예측 + 인포그래픽. 세그먼트3: 실용 조언. 클로징: 요약 및 CTA. 전문적이지만 친근한 톤.)`
      },
      {
        title: '6. 튜토리얼 롱폼 (Step-by-Step 실습)',
        category: '튜토리얼',
        usage: '복잡한 프로세스를 단계별로 가르치는 영상이 필요할 때 사용하세요.',
        prompt: `Create a 15-minute comprehensive tutorial: "[완전 초보자를 위한 AI 에이전트 만들기 A to Z]".

Intro (0-2분): What is an AI agent and why you need it. Show impressive examples of what agents can do.
Visual: Clean graphics, example videos of AI agents in action.

Setup (2-5분): Account creation, tool installation, interface walkthrough. Very detailed and slow for beginners.
Visual: Clear screen recording with zoom-ins on important buttons, arrow indicators.

Building (5-12분): Step-by-step agent creation process. Each step clearly numbered and explained. Pause frequently to let viewers follow along.
Chapter markers:
- Step 1: Setting objectives (5-7분)
- Step 2: Configuring prompts (7-9분)
- Step 3: Testing and debugging (9-12분)
Visual: Split screen - instructor face + screen recording, progress bar showing completion.

Testing (12-14분): Running the finished agent, showing real results, celebrating success.
Visual: Successful execution, happy reactions, results showcase.

Wrap-up (14-15분): Quick recap of all steps, common mistakes to avoid, next steps for learning.
CTA: "[전자책 링크는 설명란에]"

Style: Patient and encouraging teacher tone, crystal-clear explanations, no jargon, plenty of visual aids.

(15분 튜토리얼 "[AI 에이전트 만들기 A to Z]". 인트로: 에이전트 개념. 셋업: 계정 생성 및 설치. 빌딩: 단계별 제작 과정. 테스팅: 실행 및 결과. 마무리: 요약 및 팁. 초보자를 위한 친절하고 명확한 설명.)`
      }
    ]
  },
  {
    id: 'brand-commercial',
    title: '💼 SECTION 3. 브랜드 광고 & 커머셜 (프로페셔널)',
    description: '기업이나 브랜드 홍보를 위한 고퀄리티 광고 영상 프롬프트입니다.',
    prompts: [
      {
        title: '7. 제품 런칭 광고 (30초 티저)',
        category: '제품 광고',
        usage: '신제품 출시 티저 광고가 필요할 때 사용하세요.',
        prompt: `Create a 30-second product launch teaser ad for "[혁신적인 AI 스피커 - LUNA]".

Scene 1 (0-5초): Black screen, mysterious music starts. A single light appears in darkness.
Audio: Futuristic sound effect.

Scene 2 (5-15초): LUNA speaker slowly revealed through dramatic lighting. Sleek, minimalist design. Camera orbits around the product showing every angle. Holographic AI visualizations emanate from it.
Text fades in: "[당신의 집에 AI가 온다]"

Scene 3 (15-25초): Quick cuts showing LUNA in various home settings - controlling lights, playing music, answering questions. Family members amazed and delighted.
Text: "[LUNA - AI 스피커의 새로운 기준]"

Finale (25-30초): LUNA logo appears with launch date.
Text: "[2026.01.15 공개]"
Audio: Powerful crescendo.

Style: Cinematic, premium production value, Apple-like aesthetic, mysterious yet inviting, slow-motion beauty shots.

(30초 제품 런칭 티저 "[AI 스피커 LUNA]". 암전에서 시작, 극적인 조명으로 제품 공개, 다양한 활용 장면, 런칭일 공개. 프리미엄하고 미스터리한 애플 스타일.)`
      },
      {
        title: '8. 브랜드 스토리 광고 (60초 감성)',
        category: '브랜드 광고',
        usage: '브랜드의 철학과 가치를 전달하는 감성 광고가 필요할 때 활용하세요.',
        prompt: `Create a 60-second emotional brand story ad for "[친환경 AI 패션 브랜드 - EARTH]".

Opening (0-10초): Beautiful nature scenes - forest, ocean, mountains. Serene and peaceful.
Voiceover: "우리는 지구를 빌려 쓰고 있습니다."

Problem (10-25초): Contrast with fast fashion pollution - fabric waste, polluted rivers, overflowing landfills. Dark and concerning tone.
Voiceover: "하지만 패션 산업은 지구를 아프게 합니다."

Solution (25-45초): EARTH brand's AI-powered sustainable fashion process. AI designing zero-waste patterns, recycled materials being transformed into beautiful clothing, artisans carefully crafting each piece.
Visual: Bright, hopeful, innovative technology meets traditional craftsmanship.
Voiceover: "EARTH는 AI와 함께 지구를 지킵니다."

Closing (45-60초): Happy customers wearing EARTH clothing in nature, smiling genuinely. EARTH logo with tagline.
Text: "[입을 때마다 지구를 살립니다]"
Website URL appears.

Style: Documentary-style, emotional piano music, natural color grading, authentic and inspiring.

(60초 브랜드 스토리 "[친환경 AI 패션 - EARTH]". 자연 → 패스트패션 문제 → AI 지속가능 솔루션 → 행복한 고객. 다큐멘터리 스타일, 감성적 피아노 음악, 진정성 있고 영감을 주는 톤.)`
      },
      {
        title: '9. 서비스 소개 광고 (설명형)',
        category: '서비스 광고',
        usage: '온라인 서비스나 앱을 소개하는 광고 영상이 필요할 때 사용하세요.',
        prompt: `Create a 90-second service introduction ad for "[AI 글쓰기 도우미 앱 - WriteGenius]".

Hook (0-10초): Person staring at blank screen, cursor blinking, looking frustrated and blocked.
Text: "[글쓰기가 이렇게 어렵나요?]"

Introduction (10-30초): Animated UI walkthrough of WriteGenius app. Clean, modern interface appearing on screen. Show app icon, dashboard, and key features highlighted.
Voiceover: "WriteGenius는 당신의 생각을 완벽한 글로 만들어줍니다."

Feature Demo (30-70초): Three quick feature demonstrations:
1. Blog post generation (AI writing long-form content)
2. Email drafting (AI suggesting professional responses)
3. Social media captions (AI creating engaging posts)
Each feature: 10-12 seconds, smooth transitions, results appearing instantly.
Visual: App interface interactions, happy users in various settings.

Benefits (70-85초): Montage of successful users - writer hitting publish, entrepreneur closing deals, student submitting perfect essay.
Text overlays: "[하루 3시간 절약]" "[90% 사용자 만족]"

CTA (85-90초): App download screen, special offer badge.
Text: "[지금 무료 체험 시작]"
Website/App store buttons appear.

Style: Modern, tech-focused, energetic background music, bright and optimistic color palette, professional voiceover.

(90초 서비스 소개 "[WriteGenius 앱]". 글쓰기 어려움 → 앱 소개 → 3가지 기능 시연 (블로그/이메일/SNS) → 성공 사례 → 무료 체험 CTA. 현대적이고 에너제틱한 스타일.)`
      }
    ]
  },
  {
    id: 'viral-content',
    title: '🔥 SECTION 4. 바이럴 콘텐츠 (트렌드 활용)',
    description: '최신 트렌드를 활용한 바이럴 영상 프롬프트입니다.',
    prompts: [
      {
        title: '10. 챌린지/트렌드 참여형 영상',
        category: '바이럴 콘텐츠',
        usage: '인기 있는 챌린지나 트렌드에 참여하는 영상이 필요할 때 사용하세요.',
        prompt: `Create a 45-second viral challenge video: "[AI로 1분 만에 노래 만들기 챌린지]".

Intro (0-8초): Energetic host appears on screen with excitement.
Text: "[1분 안에 노래 만들기 가능?!]"
Host: "AI한테 시켜봤습니다!"

Challenge Start (8-20초): Timer starts (60 seconds countdown visible). Host types prompt into AI music generator. Quick cuts showing the AI processing.
Visual: Split screen - host's reactions + AI interface, timer ticking.

AI Creating (20-35초): Music being generated in real-time. Waveforms appearing, instruments being added layer by layer. Host dancing/grooving to the emerging melody.
Visual: Visualizer effects, music notes flying, colorful and dynamic.

Result (35-42초): Completed song plays, host shocked and impressed. Dancing to the finished track.
Text: "[이게 1분 만에?! 미쳤다]"

Outro (42-45초): "당신도 해보세요!" Challenge others to try.
Hashtag appears: #AI노래챌린지
Text: "[링크는 설명란에]"

Style: Fast-paced, trendy, TikTok/Shorts optimized, vertical format preferred, Gen-Z editing style with quick cuts and memes.

(45초 챌린지 "[AI 1분 노래 만들기]". 소개 → 타이머 시작 → AI 생성 과정 → 완성된 노래 재생 → 챌린지 독려. 빠른 편집, 트렌디한 밈 스타일, 세로 포맷.)`
      }
    ]
  }
];

const BRAND_NAVY = '#0b1220';
const BRAND_BLUE = '#112a70';
const BRAND_GOLD = '#facc15';
const CARD_BG = '#f7f8fb';

const AIMoneyVideoPromptsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'AI 수익화 비디오 생성 프롬프트 - AI 야학당';
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

      {/* 강의 영상 섹션 */}
      <div style={{
        background: 'linear-gradient(135deg, #0d1b2a, #1b263b)',
        padding: '60px 20px',
        borderBottom: '4px solid #ffd60a'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #ffd60a, #e5c100)',
            color: '#ffffff',
            padding: '8px 20px',
            borderRadius: '25px',
            fontSize: '0.9rem',
            fontWeight: '800',
            marginBottom: '20px',
            boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)'
          }}>
            🎬 강의 영상
          </div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '30px',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}>
            AI 수익화 비디오 생성 & 이미지 투 비디오 실전 강의
          </h2>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            border: '3px solid #ffd60a'
          }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              src="https://www.youtube.com/embed/YDiJXC4mHVY?si=NfTqGING3poPousR"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div
        style={{
          background: `linear-gradient(rgba(30, 41, 59, 0.85), rgba(30, 41, 59, 0.85)), url('/images/textbook_ai_video_money.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          padding: '70px 20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '4px solid #ffd60a'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ letterSpacing: '0.3em', textTransform: 'uppercase', color: BRAND_GOLD, fontWeight: 600, marginBottom: '14px' }}>
            AI Video Generation Toolkit
          </p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>
            AI 수익화 비디오 생성 프롬프트 10선
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', lineHeight: 1.7, opacity: 0.95 }}>
            유튜브 숏츠부터 브랜드 광고까지, 수익화에 바로 사용할 수 있는 10개의 실전 영상 프롬프트입니다.<br />
            Google Veo, Runway, Pika 등 다양한 AI 비디오 도구에 복사·붙여넣기만 하면 프로급 영상이 완성됩니다.
          </p>
          <div style={{
            marginTop: '30px',
            display: 'inline-flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {['유튜브 숏츠', '롱폼 콘텐츠', '브랜드 광고', '튜토리얼', '바이럴'].map((pill) => (
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

      <div style={{ padding: 'clamp(50px, 8vw, 80px) clamp(15px, 5vw, 20px)', background: '#f0f4f8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 5vw, 50px)' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: '#1b263b',
              marginBottom: '15px'
            }}>
              🎬 텍스트 투 비디오 생성 실전 예제
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              실제 프롬프트로 생성한 프로페셔널 광고 영상을 확인해보세요.<br />
              이 수준의 영상을 누구나 만들 수 있습니다.
            </p>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(15, 23, 42, 0.15)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${BRAND_NAVY} 0%, ${BRAND_BLUE} 100%)`,
              padding: '25px 30px',
              borderBottom: '3px solid ' + BRAND_GOLD
            }}>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                fontWeight: 700,
                color: 'white',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🍺</span>
                <span>실전 예제: 코로나 맥주 비치 레이브 광고</span>
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.85)',
                margin: '8px 0 0 0',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)'
              }}>
                병뚜껑이 열리는 순간, 해변 파티가 펼쳐지는 마법 같은 광고 영상
              </p>
            </div>

            <div style={{ padding: 'clamp(20px, 4vw, 35px)' }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1141339945?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px' }}
                    title="Generating_A_Beach_Rave_Video"
                  />
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>

              <div style={{
                background: CARD_BG,
                borderRadius: '14px',
                padding: '25px',
                marginTop: '25px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <h4 style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                    fontWeight: 700,
                    color: '#1b263b',
                    margin: 0
                  }}>
                    📝 JSON 프롬프트
                  </h4>
                  <button
                    onClick={() => {
                      const jsonPrompt = `{
  "description": "Cinematic close-up of a cold, dewy Corona bottle sitting alone on a weathered beach table. It begins to hum, vibrate. The bottle cap *pops*—and the entire environment unfolds from inside: palm trees rise, lights string themselves, speakers assemble mid-air, sand shifts into a dance floor. A DJ booth builds from driftwood. Music kicks in. A beach rave is born. No text.",
  "style": "cinematic, magical realism",
  "camera": "starts ultra close, zooms out and cranes overhead as the world expands",
  "lighting": "sunset turning to neon—golden hour into party glow",
  "environment": "quiet beach transforms into high-energy beach rave",
  "elements": [
    "Corona bottle (label visible, condensation dripping)",
    "pop-top cap in slow motion",
    "exploding citrus slice",
    "sand morphing into dance floor",
    "palm trees rising",
    "neon lights snapping on",
    "DJ booth building itself",
    "crowd materializing mid-dance",
    "fire pit lighting",
    "surfboards as signage"
  ],
  "motion": "explosion of elements from bottle, everything assembles in rapid time-lapse",
  "ending": "Corona bottle in foreground, beach rave in full swing behind it",
  "text": "none",
  "keywords": [
    "Corona",
    "beach party",
    "bottle transforms",
    "rave build",
    "sunset to night",
    "cinematic",
    "no text"
  ]
}`;
                      navigator.clipboard.writeText(jsonPrompt);
                      alert('JSON 프롬프트가 복사되었습니다!');
                    }}
                    style={{
                      background: BRAND_GOLD,
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 18px',
                      borderRadius: '999px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 8px 16px rgba(250, 204, 21, 0.3)'
                    }}
                  >
                    <Copy size={14} />
                    복사하기
                  </button>
                </div>

                <div style={{
                  background: 'white',
                  color: '#0d1b2a',
                  padding: '20px',
                  borderRadius: '12px',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)',
                  lineHeight: 1.6,
                  overflowX: 'auto',
                  border: '1px solid #d1d5db'
                }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {`{
  "description": "Cinematic close-up of a cold, dewy Corona bottle sitting alone on a weathered beach table. It begins to hum, vibrate. The bottle cap *pops*—and the entire environment unfolds from inside: palm trees rise, lights string themselves, speakers assemble mid-air, sand shifts into a dance floor. A DJ booth builds from driftwood. Music kicks in. A beach rave is born. No text.",

  "style": "cinematic, magical realism",
  "camera": "starts ultra close, zooms out and cranes overhead as the world expands",
  "lighting": "sunset turning to neon—golden hour into party glow",
  "environment": "quiet beach transforms into high-energy beach rave",
  "elements": [
    "Corona bottle (label visible, condensation dripping)",
    "pop-top cap in slow motion",
    "exploding citrus slice",
    "sand morphing into dance floor",
    "palm trees rising",
    "neon lights snapping on",
    "DJ booth building itself",
    "crowd materializing mid-dance",
    "fire pit lighting",
    "surfboards as signage"
  ],
  "motion": "explosion of elements from bottle, everything assembles in rapid time-lapse",
  "ending": "Corona bottle in foreground, beach rave in full swing behind it",
  "text": "none",
  "keywords": [
    "Corona",
    "beach party",
    "bottle transforms",
    "rave build",
    "sunset to night",
    "cinematic",
    "no text"
  ]
}`}
                  </pre>
                </div>
              </div>

              <div style={{
                marginTop: '25px',
                padding: '20px',
                background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
                borderRadius: '12px',
                border: '2px solid ' + BRAND_GOLD
              }}>
                <h5 style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                  fontWeight: 700,
                  color: '#92400e',
                  margin: '0 0 12px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>💡</span>
                  <span>핵심 포인트</span>
                </h5>
                <ul style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#78350f',
                  lineHeight: 1.8,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>
                  <li><strong>구조화된 JSON 형식</strong>으로 AI가 정확히 이해할 수 있게 작성</li>
                  <li><strong>카메라 무브먼트</strong>와 <strong>조명 변화</strong>를 구체적으로 지정</li>
                  <li><strong>시간 순서</strong>대로 장면 전개 (정적 → 진동 → 폭발 → 파티)</li>
                  <li><strong>브랜드 요소</strong> (Corona 병, 라벨)를 자연스럽게 통합</li>
                  <li><strong>"No text"</strong> 명시로 깔끔한 비주얼 유지</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(15, 23, 42, 0.15)',
            border: '2px solid #e2e8f0',
            marginTop: '40px'
          }}>
            <div style={{
              background: `linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)`,
              padding: '25px 30px',
              borderBottom: '3px solid #38bdf8'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                fontWeight: 700,
                color: 'white',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🥤</span>
                <span>실전 예제 2: 코카콜라 북극 아이스 레이브 광고</span>
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.85)',
                margin: '8px 0 0 0',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)'
              }}>
                같은 컨셉을 북극 배경으로 변형 - 브랜드와 환경만 바꾸면 완전히 다른 느낌!
              </p>
            </div>

            <div style={{ padding: 'clamp(20px, 4vw, 35px)' }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1141339894?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px' }}
                    title="_description_cinematic_202511281627_8k5b"
                  />
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>

              <div style={{
                background: CARD_BG,
                borderRadius: '14px',
                padding: '25px',
                marginTop: '25px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <h4 style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                    fontWeight: 700,
                    color: '#1b263b',
                    margin: 0
                  }}>
                    📝 JSON 프롬프트 (북극 버전)
                  </h4>
                  <button
                    onClick={() => {
                      const jsonPrompt = `{
  "description": "Cinematic close-up of an ice-cold, frosted Coca-Cola bottle standing alone on a snow-covered ice shelf in the Arctic. It begins to hum, vibrate. The cap *pops*—and the frozen world unfolds from inside: ice crystals swirl outward, polar bears emerge playfully, glowing ice formations rise, snowdrifts reshape into a glowing ice arena. A DJ booth forms from sculpted ice blocks. Northern lights pulse to life. An Arctic celebration begins. No text.",
  "style": "cinematic, magical realism",
  "camera": "starts ultra close, zooms out, then rises into an overhead crane shot as the Arctic world transforms",
  "lighting": "soft polar dusk shifting into aurora glow—blue hour turning into neon-like northern lights",
  "environment": "quiet Arctic landscape transforms into a high-energy ice rave",
  "elements": [
    "Coca-Cola bottle (label visible, frosted, condensation frozen)",
    "slow-motion popping bottle cap",
    "burst of swirling ice crystals",
    "snow shifting into an ice dance floor",
    "glowing ice pillars rising",
    "neon-like aurora lights snapping on",
    "DJ booth sculpting itself from ice blocks",
    "polar bears materializing and dancing playfully",
    "fire-like glow from thermal ice vents",
    "icebergs forming natural stage shapes"
  ],
  "motion": "explosion of elements from the bottle, Arctic structures assembling in rapid time-lapse",
  "ending": "Coca-Cola bottle in the foreground with a full ice rave and aurora-filled sky behind it",
  "text": "none",
  "keywords": [
    "Coca-Cola",
    "Arctic party",
    "polar bears",
    "bottle transforms",
    "ice rave",
    "aurora",
    "cinematic",
    "no text"
  ]
}`;
                      navigator.clipboard.writeText(jsonPrompt);
                      alert('JSON 프롬프트가 복사되었습니다!');
                    }}
                    style={{
                      background: '#38bdf8',
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 18px',
                      borderRadius: '999px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 8px 16px rgba(56, 189, 248, 0.3)'
                    }}
                  >
                    <Copy size={14} />
                    복사하기
                  </button>
                </div>

                <div style={{
                  background: 'white',
                  color: '#0d1b2a',
                  padding: '20px',
                  borderRadius: '12px',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)',
                  lineHeight: 1.6,
                  overflowX: 'auto',
                  border: '1px solid #d1d5db'
                }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {`{
  "description": "Cinematic close-up of an ice-cold, frosted Coca-Cola bottle standing alone on a snow-covered ice shelf in the Arctic. It begins to hum, vibrate. The cap *pops*—and the frozen world unfolds from inside: ice crystals swirl outward, polar bears emerge playfully, glowing ice formations rise, snowdrifts reshape into a glowing ice arena. A DJ booth forms from sculpted ice blocks. Northern lights pulse to life. An Arctic celebration begins. No text.",

  "style": "cinematic, magical realism",
  "camera": "starts ultra close, zooms out, then rises into an overhead crane shot as the Arctic world transforms",
  "lighting": "soft polar dusk shifting into aurora glow—blue hour turning into neon-like northern lights",
  "environment": "quiet Arctic landscape transforms into a high-energy ice rave",
  "elements": [
    "Coca-Cola bottle (label visible, frosted, condensation frozen)",
    "slow-motion popping bottle cap",
    "burst of swirling ice crystals",
    "snow shifting into an ice dance floor",
    "glowing ice pillars rising",
    "neon-like aurora lights snapping on",
    "DJ booth sculpting itself from ice blocks",
    "polar bears materializing and dancing playfully",
    "fire-like glow from thermal ice vents",
    "icebergs forming natural stage shapes"
  ],
  "motion": "explosion of elements from the bottle, Arctic structures assembling in rapid time-lapse",
  "ending": "Coca-Cola bottle in the foreground with a full ice rave and aurora-filled sky behind it",
  "text": "none",
  "keywords": [
    "Coca-Cola",
    "Arctic party",
    "polar bears",
    "bottle transforms",
    "ice rave",
    "aurora",
    "cinematic",
    "no text"
  ]
}`}
                  </pre>
                </div>
              </div>

              <div style={{
                marginTop: '25px',
                padding: '20px',
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                borderRadius: '12px',
                border: '2px solid #38bdf8'
              }}>
                <h5 style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                  fontWeight: 700,
                  color: '#0c4a6e',
                  margin: '0 0 12px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>🔄</span>
                  <span>변형 포인트 - 이렇게 바꿨어요!</span>
                </h5>
                <ul style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#0c4a6e',
                  lineHeight: 1.8,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>
                  <li><strong>브랜드 변경</strong>: Corona → Coca-Cola</li>
                  <li><strong>배경 변경</strong>: 열대 해변 → 북극 빙하</li>
                  <li><strong>색감 변경</strong>: 따뜻한 석양 → 차갑고 신비로운 오로라</li>
                  <li><strong>요소 변경</strong>: 야자수, 파도 → 빙하, 북극곰, 오로라</li>
                  <li><strong>분위기 변경</strong>: 따뜻한 여름 파티 → 신비로운 겨울 축제</li>
                  <li><strong>핵심 구조는 동일</strong>: 병뚜껑 팝 → 세계 전개 → 레이브 파티</li>
                </ul>
                <div style={{
                  marginTop: '15px',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.6)',
                  borderRadius: '8px',
                  borderLeft: '4px solid #38bdf8'
                }}>
                  <p style={{ margin: 0, color: '#0c4a6e', fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)', fontWeight: 600 }}>
                    💡 <strong>핵심 전략</strong>: 동일한 스토리 구조를 유지하면서 브랜드 아이덴티티에 맞춰 배경과 요소만 변경하면 완전히 새로운 광고가 탄생합니다!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(15, 23, 42, 0.15)',
            border: '2px solid #e2e8f0',
            marginTop: '40px'
          }}>
            <div style={{
              background: `linear-gradient(135deg, #166534 0%, #15803d 100%)`,
              padding: '25px 30px',
              borderBottom: '3px solid #22c55e'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                fontWeight: 700,
                color: 'white',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🍶</span>
                <span>실전 예제 3: 참이슬 소주 스트리트 파티 광고</span>
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.85)',
                margin: '8px 0 0 0',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)'
              }}>
                한국 문화에 맞춘 로컬라이제이션 - 포장마차가 힙한 스트리트 파티로!
              </p>
            </div>

            <div style={{ padding: 'clamp(20px, 4vw, 35px)' }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1141346778?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px' }}
                    title="참이슬_병_힙한_스트리트_파티로_변신"
                  />
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>

              <div style={{
                background: CARD_BG,
                borderRadius: '14px',
                padding: '25px',
                marginTop: '25px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <h4 style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                    fontWeight: 700,
                    color: '#1b263b',
                    margin: 0
                  }}>
                    📝 JSON 프롬프트 (한국 버전)
                  </h4>
                  <button
                    onClick={() => {
                      const jsonPrompt = `{
  "description": "차갑고 성에 맺힌 '참이슬' 소주병이 오래된 포장마차 테이블 위에 외롭게 놓여 있다. 병이 은은하게 진동하기 시작한다. *뚜껑이 톡!* 하고 열리는 순간—그 안에서부터 새로운 세계가 펼쳐진다: 형광등이 깜빡이며 켜지고, 주전자와 그릇들이 허공에서 날아와 자리를 잡는다. 포장마차 천막이 스스로 펼쳐지고, 네온사인이 빛난다. 골목 전체가 힙한 야간 스트리트 파티로 변신한다. 스피커가 조립되고, DJ가 만들어지고, 사람들은 춤추며 나타난다. 소주의 첫 모금처럼 차갑고 짜릿한 밤이 시작된다. 텍스트 없음.",
  "style": "한국 시네마틱, 매지컬 리얼리즘, 힙한 스트리트 감성",
  "camera": "초초근접 샷으로 시작 → 천천히 줌아웃 → 골목 전체를 내려다보는 크레인 샷으로 확장",
  "lighting": "차가운 형광등에서 네온 핑크·블루 조명으로—고요한 밤이 파티 무드로 변화",
  "environment": "조용한 골목 포장마차가 에너지 넘치는 야간 스트리트 파티로 변신",
  "elements": [
    "참이슬 병(라벨 선명, 차갑게 성에 맺힘)",
    "'톡' 하고 튀는 병뚜껑 슬로모션",
    "유리잔에 떨어지는 소주 한 방울 클로즈업",
    "포장마차 천막이 자동으로 펼쳐짐",
    "네온사인 켜지는 장면(초록·파랑·분홍)",
    "식기들이 허공에서 자리 잡는 매지컬 리얼리즘",
    "스스로 조립되는 DJ 부스",
    "힙한 패션의 스트리트 크루들이 춤추며 등장",
    "골목 벽화가 생겨나는 장면",
    "철판 위에서 자동으로 구워지는 안주 연출"
  ],
  "motion": "소주병에서 에너지가 확산되며 주변 환경이 빠른 타임랩스처럼 조립·변형",
  "ending": "전경에 참이슬 병이 선명하게 놓여 있고, 뒤로는 한국식 스트리트 파티가 절정에 달함",
  "text": "없음",
  "keywords": [
    "참이슬",
    "소주",
    "한국 스트리트 파티",
    "포장마차",
    "골목",
    "병이 변신",
    "시네마틱",
    "네온",
    "no text"
  ]
}`;
                      navigator.clipboard.writeText(jsonPrompt);
                      alert('JSON 프롬프트가 복사되었습니다!');
                    }}
                    style={{
                      background: '#22c55e',
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 18px',
                      borderRadius: '999px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 8px 16px rgba(34, 197, 94, 0.3)'
                    }}
                  >
                    <Copy size={14} />
                    복사하기
                  </button>
                </div>

                <div style={{
                  background: 'white',
                  color: '#0d1b2a',
                  padding: '20px',
                  borderRadius: '12px',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)',
                  lineHeight: 1.6,
                  overflowX: 'auto',
                  border: '1px solid #d1d5db'
                }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {`{
  "description": "차갑고 성에 맺힌 '참이슬' 소주병이 오래된 포장마차 테이블 위에 외롭게 놓여 있다. 병이 은은하게 진동하기 시작한다. *뚜껑이 톡!* 하고 열리는 순간—그 안에서부터 새로운 세계가 펼쳐진다: 형광등이 깜빡이며 켜지고, 주전자와 그릇들이 허공에서 날아와 자리를 잡는다. 포장마차 천막이 스스로 펼쳐지고, 네온사인이 빛난다. 골목 전체가 힙한 야간 스트리트 파티로 변신한다. 스피커가 조립되고, DJ가 만들어지고, 사람들은 춤추며 나타난다. 소주의 첫 모금처럼 차갑고 짜릿한 밤이 시작된다. 텍스트 없음.",

  "style": "한국 시네마틱, 매지컬 리얼리즘, 힙한 스트리트 감성",
  "camera": "초초근접 샷으로 시작 → 천천히 줌아웃 → 골목 전체를 내려다보는 크레인 샷으로 확장",
  "lighting": "차가운 형광등에서 네온 핑크·블루 조명으로—고요한 밤이 파티 무드로 변화",
  "environment": "조용한 골목 포장마차가 에너지 넘치는 야간 스트리트 파티로 변신",
  "elements": [
    "참이슬 병(라벨 선명, 차갑게 성에 맺힘)",
    "'톡' 하고 튀는 병뚜껑 슬로모션",
    "유리잔에 떨어지는 소주 한 방울 클로즈업",
    "포장마차 천막이 자동으로 펼쳐짐",
    "네온사인 켜지는 장면(초록·파랑·분홍)",
    "식기들이 허공에서 자리 잡는 매지컬 리얼리즘",
    "스스로 조립되는 DJ 부스",
    "힙한 패션의 스트리트 크루들이 춤추며 등장",
    "골목 벽화가 생겨나는 장면",
    "철판 위에서 자동으로 구워지는 안주 연출"
  ],
  "motion": "소주병에서 에너지가 확산되며 주변 환경이 빠른 타임랩스처럼 조립·변형",
  "ending": "전경에 참이슬 병이 선명하게 놓여 있고, 뒤로는 한국식 스트리트 파티가 절정에 달함",
  "text": "없음",
  "keywords": [
    "참이슬",
    "소주",
    "한국 스트리트 파티",
    "포장마차",
    "골목",
    "병이 변신",
    "시네마틱",
    "네온",
    "no text"
  ]
}`}
                  </pre>
                </div>
              </div>

              <div style={{
                marginTop: '25px',
                padding: '20px',
                background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                borderRadius: '12px',
                border: '2px solid #22c55e'
              }}>
                <h5 style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                  fontWeight: 700,
                  color: '#14532d',
                  margin: '0 0 12px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>🇰🇷</span>
                  <span>한국 문화 로컬라이제이션 포인트</span>
                </h5>
                <ul style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#14532d',
                  lineHeight: 1.8,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>
                  <li><strong>브랜드</strong>: Corona/Coca-Cola → 참이슬 (한국 대표 소주)</li>
                  <li><strong>배경</strong>: 해변/북극 → 골목 포장마차 (한국 특유의 정서)</li>
                  <li><strong>색감</strong>: 석양/오로라 → 형광등 + 네온사인 (한국 밤문화)</li>
                  <li><strong>요소</strong>: 야자수/빙하 → 포장마차 천막, 주전자, 안주, 골목 벽화</li>
                  <li><strong>분위기</strong>: 해변/북극 파티 → 힙한 한국식 스트리트 파티</li>
                  <li><strong>언어</strong>: 영어 프롬프트 → 한국어 포함 (AI가 문화 이해)</li>
                  <li><strong>핵심 구조는 동일</strong>: 병뚜껑 팝 → 세계 전개 → 파티</li>
                </ul>
                <div style={{
                  marginTop: '15px',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: '8px',
                  borderLeft: '4px solid #22c55e'
                }}>
                  <p style={{ margin: 0, color: '#14532d', fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)', fontWeight: 600 }}>
                    🌏 <strong>글로벌 → 로컬 전략</strong>: 동일한 스토리텔링 구조를 유지하면서 각 국가의 문화적 맥락과 정서에 맞춰 요소를 재해석하면 더욱 강력한 공감대를 형성할 수 있습니다!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '50px',
            padding: '30px',
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            borderRadius: '20px',
            border: '3px solid ' + BRAND_GOLD,
            boxShadow: '0 15px 40px rgba(250, 204, 21, 0.2)'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              fontWeight: 800,
              color: '#78350f',
              margin: '0 0 15px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span>⚠️</span>
              <span>텍스트 투 비디오의 한계</span>
            </h3>
            <p style={{
              color: '#78350f',
              lineHeight: 1.8,
              fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
              margin: 0
            }}>
              위의 참이슬 예제를 보면 알 수 있듯이, <strong>텍스트만으로 영상을 생성할 때는 브랜드의 실제 디테일(병 모양, 라벨 디자인 등)을 정확하게 재현하기 어렵습니다.</strong> 이런 경우에는 먼저 정확한 이미지를 생성한 후, 그 이미지를 첫 프레임과 마지막 프레임으로 사용하여 영상을 만드는 <strong>"이미지 투 비디오"</strong> 방식이 훨씬 효과적입니다!
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: 'clamp(50px, 8vw, 80px) clamp(15px, 5vw, 20px)', background: '#0d1b2a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 5vw, 50px)' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '15px'
            }}>
              🎨➡️🎬 이미지 투 비디오 생성 (더 정확한 방법!)
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Gemini나 ChatGPT로 먼저 정확한 이미지를 생성하고,<br />
              그 이미지를 시작 프레임과 끝 프레임으로 사용해 영상을 만듭니다.
            </p>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${BRAND_NAVY} 0%, #1e40af 100%)`,
              padding: '25px 30px',
              borderBottom: '3px solid ' + BRAND_GOLD
            }}>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                fontWeight: 700,
                color: 'white',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🍶✨</span>
                <span>실전 예제: 참이슬 소주 광고 (이미지 투 비디오)</span>
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.85)',
                margin: '8px 0 0 0',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)'
              }}>
                첫 프레임(조용한 포장마차) → 마지막 프레임(스트리트 파티) 방식
              </p>
            </div>

            <div style={{ padding: 'clamp(20px, 4vw, 35px)' }}>
              <div style={{
                background: CARD_BG,
                borderRadius: '14px',
                padding: '25px',
                marginBottom: '30px'
              }}>
                <h5 style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  fontWeight: 700,
                  color: '#1b263b',
                  margin: '0 0 15px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>🖼️</span>
                  <span>사용된 이미지 프레임</span>
                </h5>
                <p style={{
                  color: '#64748b',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  marginBottom: '20px'
                }}>
                  이 영상을 만들기 위해 사용된 첫 프레임과 마지막 프레임 이미지입니다.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: 'clamp(15px, 3vw, 25px)'
                }}>
                  <div style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '2px solid #e2e8f0',
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)'
                  }}>
                    <img
                      src="/images/image_money_video/first_soju.jpeg"
                      alt="참이슬 첫 프레임 - 조용한 포장마차"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                    <div style={{ padding: '15px', background: 'white' }}>
                      <p style={{
                        margin: 0,
                        fontWeight: 700,
                        color: '#0d1b2a',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                      }}>
                        🎬 Start Frame (첫 프레임)
                      </p>
                      <p style={{
                        margin: '6px 0 0 0',
                        color: '#64748b',
                        fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                        lineHeight: 1.5
                      }}>
                        조용한 포장마차 내부, 차갑게 성에 맺힌 참이슬 소주병
                      </p>
                    </div>
                  </div>

                  <div style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '2px solid #e2e8f0',
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)'
                  }}>
                    <img
                      src="/images/image_money_video/last_soju.jpeg"
                      alt="참이슬 마지막 프레임 - 스트리트 파티"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                    <div style={{ padding: '15px', background: 'white' }}>
                      <p style={{
                        margin: 0,
                        fontWeight: 700,
                        color: '#0d1b2a',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                      }}>
                        🎞️ End Frame (마지막 프레임)
                      </p>
                      <p style={{
                        margin: '6px 0 0 0',
                        color: '#64748b',
                        fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                        lineHeight: 1.5
                      }}>
                        힙한 스트리트 파티로 변신, 참이슬 병은 전경에 유지
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1141329910?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px' }}
                    title="_start_frame_mntdatagemini_generated_"
                  />
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>

              <div style={{
                background: CARD_BG,
                borderRadius: '14px',
                padding: '25px',
                marginTop: '25px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <h4 style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                    fontWeight: 700,
                    color: '#1b263b',
                    margin: 0
                  }}>
                    📝 JSON 프롬프트 (이미지 투 비디오)
                  </h4>
                  <button
                    onClick={() => {
                      const jsonPrompt = `{
  "start_frame": "/mnt/data/Gemini_Generated_Image_f2zso0f2zso0f2zs.jpeg",
  "end_frame": "/mnt/data/Gemini_Generated_Image_lhs901lhs901lhs9.jpeg",
  "description": "영상은 조용한 포장마차 내부에서 시작한다. 차갑고 성에 맺힌 '참이슬' 소주병이 오래된 나무 테이블 위에 홀로 놓여 있다. 병이 은은하게 진동하기 시작하고, *뚜껑이 톡!* 하고 튀어 오르는 순간, 주변의 주전자·양은그릇·식기들이 허공에서 떠올라 회전하며 자리를 잡는다. 형광등이 깜빡이며 켜지고, 포장마차 천막이 자동으로 펼쳐지며 공간이 느리게 변하기 시작한다. 소주병에서 퍼져나온 에너지가 골목까지 확장되며, 주변 건물의 네온사인들이 차례로 켜진다. 골목은 점점 더 밝아지고 힙한 야간 스트리트 파티 형태로 변신한다. DJ 부스가 스스로 조립되고, 스피커가 맞춰지고, 군중이 하나둘 등장하며 춤추기 시작한다. 고요한 밤이 소주의 첫 모금처럼 짜릿한 에너지로 폭발하며, 골목 전체가 파티로 가득 찬다.",
  "style": "한국 시네마틱, 매지컬 리얼리즘, 힙한 스트리트 감성, 하이엔드 상업광고 스타일",
  "camera": "초근접 병 클로즈업 → 천천히 줌아웃 → 병을 중심으로 360도 회전 → 골목 밖으로 확장되는 달리 줌 → 마지막엔 크레인 샷으로 파티 전체를 내려다보며 참이슬 병을 전경에 유지",
  "lighting": "차갑고 푸른 형광등 → 점차 핑크·블루·그린 네온이 켜지는 트랜지션 → 파티 조명으로 완전 전환",
  "environment": "조용한 포장마차 내부 → 매지컬하게 변화하는 한국 골목 → 네온 가득한 스트리트 파티",
  "elements": [
    "참이슬 소주병(라벨 선명, 성에와 물방울 표현)",
    "슬로모션으로 튀어 오르는 병뚜껑",
    "허공에 떠오르는 주전자와 양은그릇",
    "소주잔에 떨어지는 한 방울",
    "포장마차 천막 자동 전개",
    "형광등에서 네온사인으로의 빛 변화",
    "골목 벽화와 그래피티가 생겨나는 장면",
    "스스로 조립되는 DJ 부스와 스피커",
    "스트리트 패션의 사람들 등장",
    "철판 위에서 자동으로 구워지는 고기와 안주",
    "군중이 점차 많아지고 음악이 점점 커지는 연출"
  ],
  "motion": "병에서 퍼지는 에너지 → 타임랩스 조립 → 공간 확장 → 파티 완성",
  "ending": "전경에 참이슬 병이 선명하게 놓여 있고, 뒤에는 완전히 펼쳐진 한국형 스트리트 파티(마지막 이미지와 동일한 분위기), 활기찬 군중과 DJ 부스가 가득 표현됨",
  "text": "없음",
  "keywords": [
    "참이슬",
    "한국 소주",
    "포장마차",
    "스트리트 파티",
    "네온 골목",
    "매지컬 리얼리즘",
    "시네마틱",
    "소주병 트랜스폼",
    "no text"
  ]
}`;
                      navigator.clipboard.writeText(jsonPrompt);
                      alert('JSON 프롬프트가 복사되었습니다!');
                    }}
                    style={{
                      background: BRAND_GOLD,
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 18px',
                      borderRadius: '999px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 8px 16px rgba(250, 204, 21, 0.3)'
                    }}
                  >
                    <Copy size={14} />
                    복사하기
                  </button>
                </div>

                <div style={{
                  background: 'white',
                  color: '#0d1b2a',
                  padding: '20px',
                  borderRadius: '12px',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)',
                  lineHeight: 1.6,
                  overflowX: 'auto',
                  border: '1px solid #d1d5db'
                }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {`{
  "start_frame": "/mnt/data/Gemini_Generated_Image_f2zso0f2zso0f2zs.jpeg",
  "end_frame": "/mnt/data/Gemini_Generated_Image_lhs901lhs901lhs9.jpeg",
  "description": "영상은 조용한 포장마차 내부에서 시작한다. 차갑고 성에 맺힌 '참이슬' 소주병이 오래된 나무 테이블 위에 홀로 놓여 있다. 병이 은은하게 진동하기 시작하고, *뚜껑이 톡!* 하고 튀어 오르는 순간, 주변의 주전자·양은그릇·식기들이 허공에서 떠올라 회전하며 자리를 잡는다. 형광등이 깜빡이며 켜지고, 포장마차 천막이 자동으로 펼쳐지며 공간이 느리게 변하기 시작한다. 소주병에서 퍼져나온 에너지가 골목까지 확장되며, 주변 건물의 네온사인들이 차례로 켜진다. 골목은 점점 더 밝아지고 힙한 야간 스트리트 파티 형태로 변신한다. DJ 부스가 스스로 조립되고, 스피커가 맞춰지고, 군중이 하나둘 등장하며 춤추기 시작한다. 고요한 밤이 소주의 첫 모금처럼 짜릿한 에너지로 폭발하며, 골목 전체가 파티로 가득 찬다.",

  "style": "한국 시네마틱, 매지컬 리얼리즘, 힙한 스트리트 감성, 하이엔드 상업광고 스타일",
  "camera": "초근접 병 클로즈업 → 천천히 줌아웃 → 병을 중심으로 360도 회전 → 골목 밖으로 확장되는 달리 줌 → 마지막엔 크레인 샷으로 파티 전체를 내려다보며 참이슬 병을 전경에 유지",
  "lighting": "차갑고 푸른 형광등 → 점차 핑크·블루·그린 네온이 켜지는 트랜지션 → 파티 조명으로 완전 전환",
  "environment": "조용한 포장마차 내부 → 매지컬하게 변화하는 한국 골목 → 네온 가득한 스트리트 파티",
  "elements": [
    "참이슬 소주병(라벨 선명, 성에와 물방울 표현)",
    "슬로모션으로 튀어 오르는 병뚜껑",
    "허공에 떠오르는 주전자와 양은그릇",
    "소주잔에 떨어지는 한 방울",
    "포장마차 천막 자동 전개",
    "형광등에서 네온사인으로의 빛 변화",
    "골목 벽화와 그래피티가 생겨나는 장면",
    "스스로 조립되는 DJ 부스와 스피커",
    "스트리트 패션의 사람들 등장",
    "철판 위에서 자동으로 구워지는 고기와 안주",
    "군중이 점차 많아지고 음악이 점점 커지는 연출"
  ],
  "motion": "병에서 퍼지는 에너지 → 타임랩스 조립 → 공간 확장 → 파티 완성",
  "ending": "전경에 참이슬 병이 선명하게 놓여 있고, 뒤에는 완전히 펼쳐진 한국형 스트리트 파티(마지막 이미지와 동일한 분위기), 활기찬 군중과 DJ 부스가 가득 표현됨",
  "text": "없음",
  "keywords": [
    "참이슬",
    "한국 소주",
    "포장마차",
    "스트리트 파티",
    "네온 골목",
    "매지컬 리얼리즘",
    "시네마틱",
    "소주병 트랜스폼",
    "no text"
  ]
}`}
                  </pre>
                </div>
              </div>

              <div style={{
                marginTop: '25px',
                background: CARD_BG,
                borderRadius: '14px',
                padding: '25px'
              }}>
                <h5 style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  fontWeight: 700,
                  color: '#1b263b',
                  margin: '0 0 15px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>🖼️</span>
                  <span>사용된 이미지 프레임</span>
                </h5>
                <p style={{
                  color: '#64748b',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  marginBottom: '20px'
                }}>
                  이 영상을 만들기 위해 사용된 첫 프레임과 마지막 프레임 이미지입니다.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: 'clamp(15px, 3vw, 25px)'
                }}>
                  <div style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '2px solid #e2e8f0',
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)'
                  }}>
                    <img
                      src="/images/image_money_video/first_soju.jpeg"
                      alt="참이슬 첫 프레임 - 조용한 포장마차"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                    <div style={{ padding: '15px', background: 'white' }}>
                      <p style={{
                        margin: 0,
                        fontWeight: 700,
                        color: '#0d1b2a',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                      }}>
                        🎬 Start Frame (첫 프레임)
                      </p>
                      <p style={{
                        margin: '6px 0 0 0',
                        color: '#64748b',
                        fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                        lineHeight: 1.5
                      }}>
                        조용한 포장마차 내부, 차갑게 성에 맺힌 참이슬 소주병
                      </p>
                    </div>
                  </div>

                  <div style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '2px solid #e2e8f0',
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)'
                  }}>
                    <img
                      src="/images/image_money_video/last_soju.jpeg"
                      alt="참이슬 마지막 프레임 - 스트리트 파티"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                    <div style={{ padding: '15px', background: 'white' }}>
                      <p style={{
                        margin: 0,
                        fontWeight: 700,
                        color: '#0d1b2a',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                      }}>
                        🎞️ End Frame (마지막 프레임)
                      </p>
                      <p style={{
                        margin: '6px 0 0 0',
                        color: '#64748b',
                        fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                        lineHeight: 1.5
                      }}>
                        힙한 스트리트 파티로 변신, 참이슬 병은 전경에 유지
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '25px',
                padding: '20px',
                background: 'linear-gradient(135deg, #dbeafe 0%, #bae6fd 100%)',
                borderRadius: '12px',
                border: '2px solid #0ea5e9'
              }}>
                <h5 style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                  fontWeight: 700,
                  color: '#0c4a6e',
                  margin: '0 0 12px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>🎯</span>
                  <span>이미지 투 비디오의 장점</span>
                </h5>
                <ul style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#0c4a6e',
                  lineHeight: 1.8,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>
                  <li><strong>브랜드 정확성</strong>: 실제 참이슬 병 모양과 라벨을 정확히 재현</li>
                  <li><strong>시작과 끝 고정</strong>: start_frame과 end_frame으로 원하는 장면 보장</li>
                  <li><strong>더 긴 설명 가능</strong>: 이미지가 고정되어 있어 중간 과정을 자세히 묘사 가능</li>
                  <li><strong>일관성 확보</strong>: 시작과 끝이 정해져 있어 영상 흐름이 예측 가능</li>
                  <li><strong>상업적 정밀도</strong>: 실제 광고에 사용 가능한 수준의 퀄리티</li>
                </ul>
                <div style={{
                  marginTop: '15px',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: '8px',
                  borderLeft: '4px solid #0ea5e9'
                }}>
                  <p style={{ margin: 0, color: '#0c4a6e', fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)', fontWeight: 600 }}>
                    💡 <strong>프로 팁</strong>: 먼저 Gemini나 ChatGPT로 완벽한 제품 이미지를 생성하세요. 그런 다음 그 이미지를 start_frame과 end_frame으로 지정하여 영상을 만들면, 브랜드 가이드라인을 완벽히 준수하는 광고 영상을 만들 수 있습니다!
                  </p>
                </div>
              </div>

              <div style={{
                marginTop: '25px',
                padding: '20px',
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                borderRadius: '12px',
                border: '2px solid #22c55e'
              }}>
                <h5 style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                  fontWeight: 700,
                  color: '#14532d',
                  margin: '0 0 12px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>📋</span>
                  <span>워크플로우: 이미지 생성 → 영상 생성</span>
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { step: '1단계', title: '첫 프레임 이미지 생성', desc: 'Gemini로 정확한 참이슬 병이 있는 조용한 포장마차 이미지 생성' },
                    { step: '2단계', title: '마지막 프레임 이미지 생성', desc: '같은 병이 전경에 있고 뒤에 스트리트 파티가 있는 이미지 생성' },
                    { step: '3단계', title: 'JSON 프롬프트 작성', desc: 'start_frame, end_frame 경로 지정 + 상세한 중간 과정 설명' },
                    { step: '4단계', title: '영상 생성', desc: 'Runway Gen-3나 Pika에 JSON 프롬프트 입력하여 최종 영상 생성' }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      padding: '12px 16px',
                      background: 'white',
                      borderRadius: '8px',
                      borderLeft: '4px solid #22c55e'
                    }}>
                      <p style={{ margin: 0, color: '#22c55e', fontWeight: 700, fontSize: '0.85rem' }}>{item.step}</p>
                      <p style={{ margin: '4px 0 0 0', color: '#14532d', fontWeight: 600, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.title}</p>
                      <p style={{ margin: '4px 0 0 0', color: '#15803d', fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Character Synthesis Section */}
      <div style={{ padding: 'clamp(50px, 8vw, 80px) clamp(15px, 5vw, 20px)', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 5vw, 50px)' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '15px'
            }}>
              🎭 캐릭터 합성: 2개 이미지로 스토리 영상 만들기
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              첫 프레임/끝 프레임이 아니어도 괜찮습니다!<br />
              서로 다른 캐릭터 이미지 2개를 합성하여 하나의 스토리 영상을 만들 수 있습니다.
            </p>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            border: '2px solid #e2e8f0'
          }}>
            <div style={{
              background: `linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)`,
              padding: '25px 30px',
              borderBottom: '3px solid #c084fc'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                fontWeight: 700,
                color: 'white',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🌆🐕</span>
                <span>실전 예제: 서울 밤거리 산책 영상</span>
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.85)',
                margin: '8px 0 0 0',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)'
              }}>
                남자(강준) + 사모예드(구름이) = 감성 산책 영상
              </p>
            </div>

            <div style={{ padding: 'clamp(20px, 4vw, 35px)' }}>
              {/* Character Images */}
              <div style={{ marginBottom: '30px' }}>
                <h5 style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  fontWeight: 700,
                  color: '#1b263b',
                  margin: '0 0 15px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>🎨</span>
                  <span>합성에 사용된 캐릭터 이미지</span>
                </h5>
                <p style={{
                  color: '#64748b',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  marginBottom: '20px'
                }}>
                  서로 다른 2개의 이미지를 하나의 스토리로 합성합니다.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: 'clamp(15px, 3vw, 25px)'
                }}>
                  <div style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '2px solid #e2e8f0',
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)'
                  }}>
                    <img
                      src="/images/image_money_video/man.jpg"
                      alt="강준 - 트렌치코트를 입은 남자"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                    <div style={{ padding: '15px', background: 'white' }}>
                      <p style={{
                        margin: 0,
                        fontWeight: 700,
                        color: '#0d1b2a',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                      }}>
                        🧑 캐릭터 1: 강준
                      </p>
                      <p style={{
                        margin: '6px 0 0 0',
                        color: '#64748b',
                        fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                        lineHeight: 1.5
                      }}>
                        트렌치코트를 입은 세련된 남성, 서울 밤거리 배경
                      </p>
                    </div>
                  </div>

                  <div style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '2px solid #e2e8f0',
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)'
                  }}>
                    <img
                      src="/images/image_money_video/puppy.jpg"
                      alt="구름이 - 사모예드 강아지"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                    <div style={{ padding: '15px', background: 'white' }}>
                      <p style={{
                        margin: 0,
                        fontWeight: 700,
                        color: '#0d1b2a',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                      }}>
                        🐕 캐릭터 2: 구름이
                      </p>
                      <p style={{
                        margin: '6px 0 0 0',
                        color: '#64748b',
                        fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                        lineHeight: 1.5
                      }}>
                        혀를 내민 귀여운 사모예드, 밝고 친근한 표정
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Embed */}
              <div style={{ marginBottom: '30px' }}>
                <h5 style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  fontWeight: 700,
                  color: '#1b263b',
                  margin: '0 0 15px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>🎬</span>
                  <span>합성 결과 영상</span>
                </h5>
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1141361958?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    title="서울_밤거리_강준과_구름이_산책_영상"
                  ></iframe>
                </div>
              </div>

              {/* Prompt */}
              <h4 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', fontWeight: 700, color: '#1b263b', marginBottom: '15px' }}>
                📝 사용된 프롬프트
              </h4>
              <button
                onClick={() => copyToClipboard(`이 2개의 캐릭터로 다음의 장면을 영상 생성해줘

장면 1: 산책의 시작 (The Start of the Walk)

시각적 묘사: (이미지 2와 유사한 구도) 화려한 네온사인이 빛나는 서울의 밤거리. 트렌치코트를 입은 '강준'이 주머니에 손을 넣고 서 있고, 그 옆에 사모예드 '구름이'가 혀를 내밀고 기대에 찬 표정으로 앉아 있다. 강준이 구름이를 내려다보며 살짝 미소 짓는다.

분위기: 평화롭고 기대감 넘치는 산책 전의 순간.`, 'character-synthesis-prompt')}
                style={{
                  background: '#8b5cf6',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 25px',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                }}
              >
                {copiedPromptId === 'character-synthesis-prompt' ? <CheckCircle size={18} /> : <Copy size={18} />}
                {copiedPromptId === 'character-synthesis-prompt' ? '복사됨!' : '프롬프트 복사'}
              </button>
              <pre style={{
                background: '#f8fafc',
                color: '#1b263b',
                padding: '20px',
                borderRadius: '10px',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
                fontSize: '0.85rem',
                lineHeight: 1.6,
                border: '1px solid #e2e8f0'
              }}>
                {`이 2개의 캐릭터로 다음의 장면을 영상 생성해줘

장면 1: 산책의 시작 (The Start of the Walk)

시각적 묘사: (이미지 2와 유사한 구도) 화려한 네온사인이 빛나는 서울의 밤거리. 트렌치코트를 입은 '강준'이 주머니에 손을 넣고 서 있고, 그 옆에 사모예드 '구름이'가 혀를 내밀고 기대에 찬 표정으로 앉아 있다. 강준이 구름이를 내려다보며 살짝 미소 짓는다.

분위기: 평화롭고 기대감 넘치는 산책 전의 순간.`}
              </pre>

              {/* Key Points */}
              <div style={{
                marginTop: '25px',
                padding: '20px',
                background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
                borderRadius: '12px',
                border: '2px solid #8b5cf6'
              }}>
                <h5 style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                  fontWeight: 700,
                  color: '#5b21b6',
                  margin: '0 0 12px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>✨</span>
                  <span>캐릭터 합성의 장점</span>
                </h5>
                <ul style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#5b21b6',
                  lineHeight: 1.8,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>
                  <li><strong>스토리텔링</strong>: 2개의 독립된 이미지를 하나의 스토리로 연결</li>
                  <li><strong>유연성</strong>: 첫/끝 프레임이 아니어도 자유롭게 합성 가능</li>
                  <li><strong>캐릭터 고정</strong>: 각 캐릭터의 외모와 특징을 정확히 유지</li>
                  <li><strong>장면 구성</strong>: AI가 자연스럽게 2개 캐릭터를 하나의 장면에 배치</li>
                  <li><strong>감성 연출</strong>: 서로 다른 분위기의 이미지를 조화롭게 합성</li>
                </ul>
                <div style={{
                  marginTop: '15px',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: '8px',
                  borderLeft: '4px solid #8b5cf6'
                }}>
                  <p style={{ margin: 0, color: '#5b21b6', fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)', fontWeight: 600 }}>
                    💡 <strong>활용 팁</strong>: 웹툰, 브이로그, 감성 광고 등에 활용하세요. 실제 인물/반려동물 사진을 업로드하면 더욱 개인화된 스토리 영상을 만들 수 있습니다!
                  </p>
                </div>
              </div>
            </div>
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
            <li>대괄호(`[ ]`)로 표시된 변수만 자신의 콘텐츠나 제품에 맞게 수정하세요.</li>
            <li>프롬프트를 복사해 Google Veo, Runway Gen-3, Pika 등 원하는 영상 생성 AI에 붙여넣으세요.</li>
            <li>영상 길이, 스타일, 톤앤매너 등을 추가 지시로 세밀하게 조정할 수 있습니다.</li>
            <li>생성된 영상은 유튜브, 인스타그램, 광고 캠페인 등에 바로 활용 가능합니다.</li>
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
            { title: '1. SELECT', text: '영상 목적에 맞는 프롬프트를 선택하세요.' },
            { title: '2. CUSTOMIZE', text: '대괄호 [ ] 안의 내용을 자신의 것으로 바꾸세요.' },
            { title: '3. CREATE', text: 'AI 영상 도구에 붙여넣고 프로급 영상을 생성하세요.' }
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
            🎥 실전 수익화 비디오 생성 프롬프트 10선
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {videoSections.map((section) => (
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
            🎬 지금 바로 영상을 생성해 보세요
          </h2>
          <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
            이 10개의 프롬프트만 있으면 영상 PD, 광고 감독, 콘텐츠 제작자가 모두 손 안에 들어옵니다.<br />
            필요한 프롬프트를 복사해서 Google Veo, Runway, Pika에 바로 붙여넣어 보세요.<br />
            결과가 마음에 들지 않으면 "더 빠르게", "색감을 더 따뜻하게", "음악을 더 밝게" 같은 추가 요청으로 완벽하게 다듬을 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIMoneyVideoPromptsPage;

