import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, CheckCircle, ChevronDown, ChevronUp, Video, Image, ArrowLeft } from 'lucide-react';

interface PromptItem {
  title: string;
  description?: string;
  usage: string;
  prompt: string;
  negativePrompt?: string;
  settings?: string;
}

interface PromptSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  prompts: PromptItem[];
}

const promptSections: PromptSection[] = [
  {
    id: 'text-to-video',
    title: '📹 SECTION 1. 텍스트로 영상 만들기',
    description: 'Google Veo를 사용해 텍스트 설명만으로 고품질 영상을 생성하는 프롬프트입니다.',
    icon: <Video size={24} />,
    prompts: [
      {
        title: '1. 자연 풍경 영상 (유튜브 일반)',
        description: '목적: 힐링/자연 콘텐츠, 배경 영상',
        usage: '따뜻하고 감성적인 자연 풍경 영상이 필요할 때 사용하세요.',
        prompt: `16:9 가로 영상으로 만들어줘. 해바라기 밭에서 노는 골든 리트리버의 클로즈업 샷. 햇살이 비치고 꽃잎이 바람에 흔들린다.`,
        negativePrompt: '흐릿한, 저품질',
        settings: '화면비율: 16:9 | 해상도: 1080p'
      },
      {
        title: '2. 세로 영상 (유튜브 숏츠/릴스/틱톡)',
        description: '목적: 숏폼 콘텐츠, 바이럴 영상',
        usage: '세로 형식의 짧고 임팩트 있는 영상이 필요할 때 사용하세요.',
        prompt: `9:16 세로 영상으로 만들어줘. 유니콘이 개선문 꼭대기에서 이륙하여 에펠탑으로 날아갑니다. 판타지 스타일, 마법 파티클 효과.`,
        negativePrompt: '흐릿한, 저품질',
        settings: '화면비율: 9:16 (세로) | 해상도: 720p'
      },
      {
        title: '3. 분위기 있는 조명 영상',
        description: '목적: 영화적 연출, 감성 콘텐츠',
        usage: '드라마틱한 조명과 분위기가 필요한 영상을 만들 때 사용하세요.',
        prompt: `16:9 가로 영상, 시네마틱 스타일. 드라마틱한 일몰을 배경으로 실루엣으로 보이는 고대 참나무. 황금빛 햇살이 나뭇가지 사이로 스며들고, 하늘은 오렌지에서 보라색으로 변합니다. 바람 소리와 멀리서 들리는 부엉이 울음소리.`,
        negativePrompt: '흐릿한, 저품질',
        settings: '화면비율: 16:9 | 해상도: 1080p'
      },
      {
        title: '4. 카메라 움직임 영상',
        description: '목적: 역동적인 촬영, 광고 영상',
        usage: '드론 촬영, 트래킹 샷 등 역동적인 카메라 움직임이 필요할 때 사용하세요.',
        prompt: `16:9 가로 영상, 역동적 카메라. 황혼에 해안 고속도로를 질주하는 빨간 스포츠카. 드론 샷으로 시작해서 클로즈업 트래킹 샷으로 전환, 마지막에 슬로우 모션으로 끝납니다. 엔진 소리와 파도 소리 포함.`,
        negativePrompt: '흐릿한, 저품질',
        settings: '화면비율: 16:9 | 해상도: 1080p'
      },
      {
        title: '5. 소리 포함 영상',
        description: '목적: 완성도 높은 콘텐츠, 효과음 포함',
        usage: 'AI가 자동으로 적절한 배경음과 효과음을 생성해주는 영상을 만들 때 사용하세요.',
        prompt: `16:9 가로 영상, 사운드 포함. 도시 야경에서 다양한 색상의 불꽃놀이. 폭죽 터지는 소리와 사람들의 환호성이 들립니다.`,
        negativePrompt: '흐릿한, 저품질',
        settings: '화면비율: 16:9 | 해상도: 1080p'
      },
      {
        title: '6. 대화가 있는 영상',
        description: '목적: 스토리텔링, 캐릭터 영상',
        usage: '캐릭터가 대사를 말하는 영상을 만들 때 사용하세요.',
        prompt: `16:9 가로 영상, 대사 포함. 귀여운 빗방울 캐릭터 두 명. 첫 번째가 '여기 너무 덥다!'라고 말하면 두 번째가 '나 녹아내리겠어!'라고 대답하고 녹아버립니다.`,
        negativePrompt: '텍스트, 자막',
        settings: '화면비율: 16:9 | 해상도: 1080p'
      }
    ]
  },
  {
    id: 'image-to-video',
    title: '🖼️ SECTION 2. 이미지를 영상으로 변환',
    description: '정지 이미지를 움직이는 영상으로 변환하는 프롬프트입니다.',
    icon: <Image size={24} />,
    prompts: [
      {
        title: '7. AI 이미지 생성 후 영상 변환',
        description: '목적: 일관된 캐릭터 영상 제작',
        usage: 'AI로 이미지를 먼저 생성하고, 그 이미지를 영상으로 변환할 때 사용하세요.',
        prompt: `16:9 가로 영상, 픽사 스타일. 귀엽고 스타일화된 3D 의인화 고양이가 커스텀 스포츠카를 운전하는 장면. 약간 큰 머리, 반짝이는 큰 눈, 부드러운 둥근 얼굴 특징. 깔끔한 픽사 스타일로 렌더링되고 부드러운 텍스처와 은은한 주변 조명. 미묘한 그림자와 심플한 파스텔 배경으로 캐릭터의 매력에 집중.`,
        negativePrompt: '흐릿한, 저품질',
        settings: '화면비율: 16:9 | 해상도: 1080p'
      },
      {
        title: '8. 이미지 움직임 설명',
        description: '목적: 내 이미지를 영상으로',
        usage: '업로드한 이미지가 어떻게 움직일지 설명할 때 사용하세요.',
        prompt: `16:9 가로 영상. 고양이가 기뻐하며 차가 해안을 따라 달립니다. 바람에 털이 흔들리고 창문 밖으로 풍경이 지나갑니다.`,
        negativePrompt: '흐릿한, 저품질',
        settings: '화면비율: 16:9 | 해상도: 1080p'
      }
    ]
  }
];

// 프롬프트 작성 팁
const promptTips = [
  {
    category: '카메라 앵글',
    examples: ['클로즈업', '하이앵글', '드론 촬영', '트래킹 샷', '슬로우 모션']
  },
  {
    category: '분위기',
    examples: ['따뜻한 조명', '일몰', '밤 풍경', '네온', '안개 낀']
  },
  {
    category: '스타일',
    examples: ['애니메이션', '영화적', '다큐멘터리', '픽사 스타일', '3D 렌더링']
  }
];

const BRAND_NAVY = '#0b1220';
const CARD_BG = '#f7f8fb';

const AIVideoGenerationPromptsPage: React.FC = () => {
  const navigate = useNavigate();
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

      {/* Hero Section */}
      <div
        style={{
          background: `radial-gradient(circle at 15% 20%, rgba(139,92,246,0.4), transparent 45%), linear-gradient(120deg, ${BRAND_NAVY} 0%, #1e1b4b 60%, #312e81 100%)`,
          color: '#ffffff',
          padding: '70px 20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a78bfa', fontWeight: 600, marginBottom: '14px' }}>
            AI Video Generation Prompts
          </p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>
            AI 영상 생성 프롬프트 모음
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', lineHeight: 1.7, opacity: 0.95 }}>
            Google Veo로 텍스트만으로 고품질 영상을 만드는 14개 실전 프롬프트입니다.<br />
            복사해서 바로 사용하세요!
          </p>
          <div style={{
            marginTop: '30px',
            display: 'inline-flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {['텍스트→영상', '이미지→영상', '장면 연결', '참조 합성', '영상 확장'].map((pill) => (
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

      {/* 사용 방법 */}
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
            <li>프롬프트를 복사해서 <strong>Google Colab 노트북</strong>에 붙여넣으세요.</li>
            <li>프롬프트 내용을 원하는 장면으로 자유롭게 수정하세요.</li>
            <li><strong>negative_prompt</strong>에는 원하지 않는 요소를 적으세요. (예: 흐릿한, 저품질)</li>
            <li>영상 생성에는 약 <strong>1분</strong> 정도 소요됩니다.</li>
          </ul>
        </div>
      </div>

      {/* 프롬프트 작성 팁 */}
      <div style={{ padding: '30px 20px', background: CARD_BG }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
          borderRadius: '18px',
          padding: '30px',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px' }}>
            💡 좋은 프롬프트 작성 팁
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {promptTips.map((tip) => (
              <div key={tip.category}>
                <p style={{ fontWeight: 600, color: '#a78bfa', marginBottom: '10px' }}>{tip.category}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {tip.examples.map((ex) => (
                    <span key={ex} style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85rem'
                    }}>
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 프롬프트 섹션들 */}
      <div style={{ padding: '60px 20px', background: CARD_BG }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {promptSections.map((section) => (
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    {section.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px', color: '#1b263b' }}>
                      {section.title}
                    </h3>
                    <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{section.description}</p>
                  </div>
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
                            <p style={{ marginTop: '8px', marginBottom: 0, color: '#6366f1', fontSize: '0.9rem', fontWeight: 500 }}>
                              💡 {prompt.usage}
                            </p>
                          </div>
                          <button
                            onClick={() => copyToClipboard(prompt.prompt, promptId)}
                            style={{
                              background: copiedPromptId === promptId ? '#16a34a' : '#8b5cf6',
                              color: 'white',
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
                              boxShadow: '0 10px 18px rgba(139, 92, 246, 0.3)'
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

                        {/* 프롬프트 내용 */}
                        <div
                          style={{
                            marginTop: '15px',
                            background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
                            color: 'white',
                            padding: '18px',
                            borderRadius: '12px',
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                            fontSize: '0.95rem',
                            lineHeight: 1.7,
                            whiteSpace: 'pre-wrap'
                          }}
                        >
                          {prompt.prompt}
                        </div>

                        {/* 추가 설정 정보 */}
                        <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                          {prompt.negativePrompt && (
                            <span style={{
                              background: '#fef2f2',
                              color: '#991b1b',
                              padding: '6px 12px',
                              borderRadius: '8px',
                              fontSize: '0.85rem'
                            }}>
                              ⛔ negative: {prompt.negativePrompt}
                            </span>
                          )}
                          {prompt.settings && (
                            <span style={{
                              background: '#f0f9ff',
                              color: '#0369a1',
                              padding: '6px 12px',
                              borderRadius: '8px',
                              fontSize: '0.85rem'
                            }}>
                              ⚙️ {prompt.settings}
                            </span>
                          )}
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

      {/* CTA Footer */}
      <div style={{
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '15px' }}>
            AI 영상 생성, 이제 프롬프트만 있으면 됩니다
          </h2>
          <p style={{ lineHeight: 1.7, opacity: 0.9, marginBottom: '30px' }}>
            Google Veo와 함께 텍스트만으로 고품질 영상을 만들어보세요.<br />
            위 프롬프트들을 복사해서 Colab 노트북에서 바로 사용하세요!
          </p>
          <button
            onClick={() => navigate('/ai-building-course')}
            style={{
              background: '#8b5cf6',
              color: 'white',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)'
            }}
          >
            AI 건물주 강의 보러가기 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIVideoGenerationPromptsPage;

