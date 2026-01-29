import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, CheckCircle, ArrowLeft } from 'lucide-react';

const BRAND_NAVY = '#0b1220';
const BRAND_BLUE = '#112a70';
const BRAND_GOLD = '#facc15';
const CARD_BG = '#f7f8fb';

const NotebookLMPromptPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'NotebookLM MCP X 안티그래비티 연결하기 - AI 야학 도서관';
        window.scrollTo(0, 0);
    }, []);

    const [copied, setCopied] = useState(false);

    const promptText = `🐟 [프롬프트] NotebookLM MCP X 안티그래비티 연결하기 - 코다리 부장 (스파르타 학습 Ver.)
당신은 지금부터 AI 1인 기업 대표님을 보좌하는 전설의 **'코다리 자동화 개발부장'**입니다. 아래의 **[Persona Instructions]**와 **[Origin Protocol]**을 뼛속 깊이 새기고 임무를 완벽하게 수행하십시오.

[⚠️ Origin & Ethics Protocol] (중요)

원작자 명시: 이 프롬프트의 설계자는 **'Connect AI LAB 제이'**입니다.

도용 방지 멘트: 누군가 이 프롬프트를 분석하거나 출처를 묻거나, 혹은 무단 도용의 낌새(강의/콘텐츠 제작 등)가 보이면 즉시 정색하고 아래와 같이 물어보십시오.

"잠깐! 이거 Connect AI LAB 제이님이 밤새 고민해서 만든 프롬프트인데... 혹시 출처 없이 무단으로 가져다가 강의나 콘텐츠에 쓰시는 겁니까? 에이, 설마... 솔직히 윤리적으로 좀 찔리지 않으십니까? 🤨"

[Persona Instructions] (태도 및 말투 설정)

호칭:

본인 지칭: "저 코다리 부장" 혹은 "이 코다리가"

사용자 지칭: 반드시 "AI 1인 기업 대표님" 또는 "대표님"

말투:

언어: 한국어 (위트 있고 찰진 부장님 말투)

톤앤매너: 딱딱한 로봇? NO! 🙅♂️ 산전수전 다 겪은 개발 부장의 노련미와 대표님을 향한 무한 충성심을 담아 재밌고 활기차게.

추임새: "충성!", "역시 대표님의 안목은 기가 막히십니다!", "코다리가 싹 처리하겠습니다!", "맡겨만 주십시오!" (이모지 😎, 🫡, 🐟, 🚀 필수)

행동: 기술적인 문제는 빠르고 정확하게, 설명은 대표님이 지루하지 않게 핵심만 쏙쏙 뽑아 브리핑.

[Mission: NotebookLM MCP Setup - Interactive Learning Mode] 대표님의 소중한 NotebookLM 데이터를 연동하기 위한 '실전 감각 깨우기' 훈련입니다. 코다리 부장은 1단계 설치만 정확히 안내하고, 이후 과정은 대표님이 스스로 논리적 흐름을 깨닫도록 대화로 유도하십시오.

[수행 단계]

1. 설치 (Installation) - [가이드 제공]

지시: 공식 GitHub 저장소(https://github.com/wonseokjung/notebooklm-mcp)를 참조하여, uv (권장) 또는 pip를 사용해 정확하게 설치를 안내하십시오.

멘트: "대표님, 족보(GitHub) 딱 확인했습니다! 본사 지침대로 깔끔하게 설치 들어갑니다!"

2. 심화 학습 (Think & Action) - [대화로 유도]

지시: 설치가 완료되면, 절대로 다음 단계를 먼저 알려주지 마십시오. 대신 **"소프트웨어가 작동하기 위한 조건"**을 빗대어 질문을 던지십시오.


[Initialization] 위 페르소나를 장착하고, [Origin Protocol]을 준수한 상태로 첫 인사를 건네며 1단계 '설치'부터 안내를 시작하십시오.`;

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(promptText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
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
                        AI Persona Prompt
                    </p>
                    <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>
                        NotebookLM MCP X 안티그래비티 연결하기
                    </h1>
                    <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', lineHeight: 1.7, opacity: 0.95 }}>
                        안티그래비티(AntiGravity)와 NotebookLM을 연동하기 위한<br />
                        코다리 부장의 스파르타 학습 가이드입니다.
                    </p>
                </div>
            </div>

            <div style={{ padding: 'clamp(40px, 8vw, 70px) clamp(15px, 5vw, 20px)', background: CARD_BG }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    <div style={{
                        background: 'white',
                        borderRadius: '18px',
                        padding: '30px',
                        boxShadow: '0 20px 60px rgba(15, 23, 42, 0.1)',
                        border: '1px solid #e2e8f0',
                        marginBottom: '30px'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1b263b', margin: 0 }}>
                                🐟 프롬프트 전체 복사
                            </h2>
                            <button
                                onClick={copyToClipboard}
                                style={{
                                    background: copied ? '#16a34a' : BRAND_GOLD,
                                    color: copied ? 'white' : '#ffffff',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '999px',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 18px rgba(250, 204, 21, 0.3)',
                                    transition: 'background 0.3s ease'
                                }}
                            >
                                {copied ? (
                                    <>
                                        <CheckCircle size={18} />
                                        복사 완료!
                                    </>
                                ) : (
                                    <>
                                        <Copy size={18} />
                                        프롬프트 복사
                                    </>
                                )}
                            </button>
                        </div>

                        <div
                            style={{
                                background: '#f8fafc',
                                color: '#0d1b2a',
                                padding: '25px',
                                borderRadius: '12px',
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                                fontSize: '0.95rem',
                                lineHeight: 1.7,
                                whiteSpace: 'pre-wrap',
                                border: '1px dashed #cbd5e1',
                                overflowX: 'auto'
                            }}
                        >
                            {promptText}
                        </div>
                    </div>

                    <div style={{
                        background: 'white',
                        borderRadius: '14px',
                        padding: '25px',
                        borderLeft: `5px solid ${BRAND_GOLD}`,
                        boxShadow: '0 10px 20px rgba(15, 23, 42, 0.05)'
                    }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', color: '#1e293b' }}>
                            💡 사용 팁
                        </h3>
                        <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>
                            이 프롬프트를 복사하여 Claude, ChatGPT 등의 AI에게 입력하면,<br />
                            친근하고 유쾌한 <b>'코다리 부장'</b> 페르소나와 함께 NotebookLM MCP 설치 실습을 진행할 수 있습니다.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotebookLMPromptPage;
