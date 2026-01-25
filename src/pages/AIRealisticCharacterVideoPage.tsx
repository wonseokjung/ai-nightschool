import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, CheckCircle, ArrowLeft } from 'lucide-react';

const BRAND_NAVY = '#0b1220';
const BRAND_GOLD = '#facc15';
const CARD_BG = '#f7f8fb';

const AIRealisticCharacterVideoPage: React.FC = () => {
  const navigate = useNavigate();
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPromptId(id);
      setTimeout(() => setCopiedPromptId(null), 2000);
    } catch (error) {
      console.error('프롬프트 복사 실패:', error);
    }
  };

  // 이미지 생성 JSON 프롬프트
  const imagePrompt = `{
  "image_request": {
    "goal": "A hyper-realistic cinematic portrait of an extraordinarily beautiful woman with short hair covering one eye, leaning casually on a red motorcycle beside a lonely bus station in the middle of an untamed wilderness.",
    "meta": {
      "image_type": "Cinematic Portrait",
      "quality": "8k Masterpiece with analog imperfections",
      "color_mode": "High Contrast with dusty earth tones",
      "style_mode": "Neo-Cinematic with Analog Film Texture",
      "aspect_ratio": "4:5",
      "resolution": "4096x5120"
    },
    "creative_style": "A blend of Denis Villeneuve desert cinematography, 1980s Vogue editorial edge, Wim Wenders Americana solitude, and a hint of cyber-western surrealism.",
    "overall_theme": "Beauty in isolation at a forgotten crossing",
    "mood_vibe": "Quiet, confident, atmospheric, slightly melancholic",
    "style_keywords": [
      "analog grain",
      "wind-swept hair",
      "chrome reflections",
      "cinematic depth",
      "sun-faded signage",
      "subtle imperfection",
      "bokeh haze",
      "volumetric dust",
      "hyperreal skin",
      "desert solitude"
    ],
    "subject": {
      "count": "1",
      "type": "Human",
      "identity": "A strikingly beautiful woman with a mysterious presence",
      "age_appearance": "Mid 20s",
      "skin": "Smooth realistic texture with visible pores, subtle sun-kissed tone, faint freckles across the cheekbones",
      "facial_features": {
        "expression": "Calm confidence with a touch of introspective distance",
        "eyes": "One eye hidden under hair; visible eye is deep green with razor-sharp highlight"
      },
      "hair": {
        "style": "Short asymmetrical cut draping over one eye",
        "texture": "Slightly windswept with natural movement",
        "color": "Ink-black with muted auburn undertones"
      },
      "clothing": {
        "top": "Fitted black leather jacket with worn creases and matte finish",
        "bottom": "Dark denim riding pants, dust-kissed at the knees",
        "accessories": "Single silver ring, thin chain necklace peeking under jacket collar",
        "condition": "Lightly worn, giving authentic travel vibes"
      },
      "props": {
        "primary": "A vintage red motorcycle with chrome detailing",
        "secondary": "Weathered wooden bus-stop sign, rusted metal bench, scattered dry grass tufts"
      }
    },
    "pose_action": {
      "description": "She leans against the motorcycle with one arm resting on the seat, body turned slightly toward camera as the wind pulls gently at her jacket.",
      "body_position": "Leaning, relaxed posture with one leg crossed at the ankle",
      "camera_interaction": "Looking slightly past the camera, not directly at it"
    },
    "environment": {
      "setting": "A remote bus station in a vast wilderness of dry plains and low hills",
      "time_of_day": "Late golden hour",
      "weather": "Clear with drifting dust carried by warm wind",
      "atmosphere": "Dry, cinematic, softly glowing in warm light"
    },
    "lighting": {
      "type": "Golden hour directional with rim lighting",
      "source": "Low sun casting warm highlights",
      "quality": "Soft but directional, creating sculpted cheekbones and metallic shimmer on motorcycle",
      "shadows": "Long, warm, gently feathered shadows",
      "imperfections": "Lens flare streak, mild chromatic aberration at frame edges"
    }
  }
}`;

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

      {/* 유튜브 강의 영상 섹션 */}
      <div style={{
        background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
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
            fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '15px',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            lineHeight: 1.4
          }}>
            유튜브 CEO 경고, AI 영상 '삭제 기준'<br />
            구글 논문 VideoBERT에서 찾았습니다 (해결책 공개)
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            marginBottom: '30px',
            maxWidth: '800px',
            margin: '0 auto 30px'
          }}>
            "쓰레기 같은 AI 영상은 오물처럼 청소될 것입니다."<br />
            이 기준은 구글의 핵심 AI 모델 'VideoBERT' 논문에 정확히 나와있습니다.
          </p>
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
              src="https://www.youtube.com/embed/qBU8TSu_UFU?si=TZgsyqVEM_Hykzyf"
              title="유튜브 CEO 경고, AI 영상 삭제 기준"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* 영상 설명 섹션 */}
      <div style={{
        background: '#0d1b2a',
        padding: '40px 20px',
        borderBottom: '2px solid #1b263b'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(251, 191, 36, 0.1)',
            borderRadius: '16px',
            padding: '30px',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}>
            <h3 style={{ color: '#ffd60a', fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>
              💡 오늘 영상 핵심 내용
            </h3>
            <ul style={{
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 2,
              margin: 0,
              paddingLeft: '20px'
            }}>
              <li><strong>🚨 팩트 체크:</strong> 유튜브 CEO 경고의 실체와 'VideoBERT' 논문 분석</li>
              <li><strong>📉 삭제 기준:</strong> 알고리즘은 영상과 텍스트의 '불일치'를 어떻게 찾아내는가?</li>
              <li><strong>🛠️ 생존 전략:</strong> 구글 오팔로 '똑똑한 AI 직원' 채용하기</li>
              <li><strong>🤖 실전 시연:</strong> 에이전트(제니퍼, 영식이)가 자동으로 만드는 고퀄리티 영상 워크플로우</li>
            </ul>
          </div>

          <div style={{
            marginTop: '30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            {['VideoBERT 논문', 'Google OPAL', 'Google Veo 3.1', 'AI 에이전트'].map(tag => (
              <div key={tag} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '12px 20px',
                borderRadius: '10px',
                textAlign: 'center',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.95rem',
                fontWeight: '600',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                📚 {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 헤더 섹션 */}
      <div
        style={{
          background: `linear-gradient(rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.92)), url('/images/aicitybuilder/citybuilder_share.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '70px 20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '4px solid #ffd60a'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ letterSpacing: '0.3em', textTransform: 'uppercase', color: BRAND_GOLD, fontWeight: 600, marginBottom: '14px' }}>
            Realistic Character Generation
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>
            🎭 사람 같은 AI 캐릭터 만들기<br />
            <span style={{ color: BRAND_GOLD }}>이미지 → 영상 변환 프롬프트</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', lineHeight: 1.7, opacity: 0.95 }}>
            유튜브 알고리즘이 삭제하지 않는 고퀄리티 AI 캐릭터를 만들고,<br />
            그 캐릭터가 자연스럽게 움직이는 영상까지 생성하는 실전 프롬프트입니다.
          </p>
          <div style={{
            marginTop: '30px',
            display: 'inline-flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {['리얼리스틱', '시네마틱', 'JSON 프롬프트', 'Veo 3.1', 'Gemini'].map((pill) => (
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

      {/* 실전 예제 섹션 */}
      <div style={{ padding: 'clamp(40px, 6vw, 60px) clamp(15px, 4vw, 20px)', background: CARD_BG }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* 이미지 생성 프롬프트 */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(15, 23, 42, 0.1)',
            marginBottom: '40px'
          }}>
            <div style={{
              padding: '25px 30px',
              background: `linear-gradient(135deg, ${BRAND_NAVY} 0%, #1e3a5f 100%)`,
              borderBottom: '3px solid ' + BRAND_GOLD
            }}>
              <h2 style={{ color: 'white', fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: '800', margin: 0 }}>
                🎨 STEP 1: 리얼리스틱 캐릭터 이미지 생성
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: '8px 0 0 0', fontSize: '0.95rem' }}>
                Gemini, ChatGPT에서 사용할 수 있는 사람 같은 캐릭터 JSON 프롬프트
              </p>
            </div>

            <div style={{ padding: '30px' }}>
              {/* 생성된 이미지 */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1b263b', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>🖼️</span>
                  <span>생성된 이미지</span>
                </h3>
                <div style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '2px solid #e2e8f0',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.15)'
                }}>
                  <img
                    src="/images/lady.png"
                    alt="AI 생성 캐릭터 - 사막 버스 정류장의 여성"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>
                <p style={{
                  color: '#64748b',
                  fontSize: '0.9rem',
                  marginTop: '12px',
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}>
                  아래 JSON 프롬프트로 생성된 이미지입니다
                </p>
              </div>

              {/* JSON 프롬프트 */}
              <div style={{
                background: CARD_BG,
                borderRadius: '16px',
                padding: '25px',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1b263b', margin: 0 }}>
                      📝 이미지 생성 JSON 프롬프트
                    </h3>
                    <p style={{ color: '#64748b', margin: '8px 0 0 0', fontSize: '0.95rem' }}>
                      시네마틱 포트레이트 - 사막 버스 정류장의 신비로운 여성
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(imagePrompt, 'image-prompt')}
                    style={{
                      background: copiedPromptId === 'image-prompt' ? '#10b981' : BRAND_GOLD,
                      color: copiedPromptId === 'image-prompt' ? 'white' : '#ffffff',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 12px rgba(250, 204, 21, 0.3)'
                    }}
                  >
                    {copiedPromptId === 'image-prompt' ? <CheckCircle size={18} /> : <Copy size={18} />}
                    {copiedPromptId === 'image-prompt' ? '복사됨!' : '프롬프트 복사'}
                  </button>
                </div>
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid #d1d5db',
                  overflowX: 'auto',
                  maxHeight: '500px',
                  overflowY: 'auto'
                }}>
                  <pre style={{
                    margin: 0,
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    fontSize: '0.8rem',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    color: '#1b263b'
                  }}>
                    {imagePrompt}
                  </pre>
                </div>
              </div>

              {/* 핵심 포인트 */}
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
                  <span>프롬프트 핵심 포인트</span>
                </h5>
                <ul style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#78350f',
                  lineHeight: 1.8,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>
                  <li><strong>meta 섹션</strong>: 이미지 품질, 색상 모드, 해상도 등 기술적 설정</li>
                  <li><strong>creative_style</strong>: Denis Villeneuve 스타일 + 1980s Vogue 감성 조합</li>
                  <li><strong>subject</strong>: 피부 질감, 머리카락, 의상까지 세밀하게 지정</li>
                  <li><strong>lighting</strong>: 골든아워 조명과 아날로그 필름 느낌의 불완전함</li>
                  <li><strong>style_keywords</strong>: AI가 이해하기 쉬운 핵심 키워드 목록</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 영상 변환 결과 */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(15, 23, 42, 0.1)'
          }}>
            <div style={{
              padding: '25px 30px',
              background: `linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)`,
              borderBottom: '3px solid #c084fc'
            }}>
              <h2 style={{ color: 'white', fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: '800', margin: 0 }}>
                🎬 STEP 2: 이미지 → 영상 변환 결과
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: '8px 0 0 0', fontSize: '0.95rem' }}>
                위 이미지를 Veo 3.1로 영상으로 변환한 결과물입니다
              </p>
            </div>

            <div style={{ padding: '30px' }}>
              <div style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.3)'
              }}>
                <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1146825061?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="AI 캐릭터 영상 - 사막 버스 정류장의 여성"
                  />
                </div>
              </div>

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
                  <span>이미지 → 영상 변환 포인트</span>
                </h5>
                <ul style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#5b21b6',
                  lineHeight: 1.8,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>
                  <li><strong>자연스러운 움직임</strong>: 바람에 흩날리는 머리카락, 미세한 호흡</li>
                  <li><strong>환경 애니메이션</strong>: 먼지가 날리고 빛이 변하는 효과</li>
                  <li><strong>캐릭터 일관성</strong>: 원본 이미지의 특징을 정확히 유지</li>
                  <li><strong>시네마틱 분위기</strong>: 영화 같은 질감과 색감 보존</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 워크플로우 가이드 */}
      <div style={{ padding: '60px 20px', background: '#0d1b2a' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '1.8rem', fontWeight: '800', textAlign: 'center', marginBottom: '40px' }}>
            📋 실전 워크플로우
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { step: '1단계', title: 'JSON 프롬프트 작성', desc: '위의 구조화된 JSON 형식으로 원하는 캐릭터와 장면을 상세히 기술', icon: '📝' },
              { step: '2단계', title: 'Gemini/ChatGPT로 이미지 생성', desc: 'JSON 프롬프트를 입력하여 고퀄리티 리얼리스틱 이미지 생성', icon: '🎨' },
              { step: '3단계', title: '이미지 품질 확인 및 수정', desc: '얼굴 비율, 표정, 조명이 자연스러운지 확인하고 필요시 재생성', icon: '✅' },
              { step: '4단계', title: 'Veo 3.1로 영상 변환', desc: '생성된 이미지를 입력하여 자연스럽게 움직이는 영상으로 변환', icon: '🎬' },
              { step: '5단계', title: '최종 편집 및 업로드', desc: '영상 편집 후 유튜브에 업로드 - 알고리즘 삭제 걱정 없음!', icon: '🚀' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                padding: '25px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  background: BRAND_GOLD,
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ color: BRAND_GOLD, fontSize: '0.85rem', fontWeight: '700', margin: '0 0 5px 0' }}>{item.step}</p>
                  <h3 style={{ color: 'white', fontSize: '1.15rem', fontWeight: '700', margin: '0 0 8px 0' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 핵심 포인트 */}
      <div style={{ padding: '60px 20px', background: CARD_BG }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            borderRadius: '20px',
            padding: '35px',
            border: '3px solid #ffd60a'
          }}>
            <h3 style={{ color: '#92400e', fontSize: '1.4rem', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>⚠️</span>
              <span>유튜브 삭제를 피하는 핵심 포인트</span>
            </h3>
            <ul style={{ color: '#78350f', lineHeight: 2, margin: 0, paddingLeft: '20px' }}>
              <li><strong>영상-텍스트 일치:</strong> VideoBERT가 감지하는 불일치를 피하기 위해 말하는 내용과 영상이 정확히 일치해야 함</li>
              <li><strong>자연스러운 움직임:</strong> 로봇 같은 움직임은 AI로 판별됨 - 미세한 떨림, 눈 깜빡임 필수</li>
              <li><strong>일관된 캐릭터:</strong> 같은 캐릭터가 영상 전체에서 일관되게 유지되어야 함</li>
              <li><strong>고퀄리티 음성:</strong> 립싱크가 정확하고 음성이 자연스러워야 함</li>
              <li><strong>오리지널 콘텐츠:</strong> 단순 복제가 아닌 실제 가치 있는 정보 제공</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA 섹션 */}
      <div style={{
        padding: '60px 20px',
        background: BRAND_NAVY,
        color: 'white',
        textAlign: 'center',
        borderTop: `4px solid ${BRAND_GOLD}`
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '15px' }}>
            🎭 지금 바로 AI 캐릭터를 만들어보세요
          </h2>
          <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
            위의 JSON 프롬프트를 복사해서 Gemini나 ChatGPT에 바로 붙여넣어 보세요.<br />
            유튜브 알고리즘이 삭제하지 않는 고퀄리티 AI 캐릭터가 바로 생성됩니다.<br />
            이 캐릭터로 수익화 가능한 콘텐츠를 만들어보세요!
          </p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/ai-money-video-prompts')}
              style={{
                background: BRAND_GOLD,
                color: '#ffffff',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(250, 204, 21, 0.3)'
              }}
            >
              🎬 영상 생성 프롬프트 더 보기
            </button>
            <button
              onClick={() => navigate('/ai-money-image-prompts')}
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '15px 30px',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              🎨 이미지 생성 프롬프트 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRealisticCharacterVideoPage;
