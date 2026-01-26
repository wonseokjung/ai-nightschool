import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AndrewNgAIVisionPage: React.FC = () => {
    const navigate = useNavigate();

    const sectionStyle = {
        background: '#ffffff',
        borderRadius: '12px',
        padding: '35px 40px',
        marginBottom: '30px',
        border: '1px solid #e5e7eb'
    };

    const h2Style = {
        color: '#1e293b',
        fontSize: '1.6rem',
        fontWeight: '700' as const,
        marginBottom: '25px',
        paddingBottom: '15px',
        borderBottom: '2px solid #e2e8f0'
    };

    const h3Style = {
        color: '#334155',
        fontSize: '1.25rem',
        fontWeight: '600' as const,
        marginBottom: '15px',
        marginTop: '25px'
    };

    const pStyle = {
        color: '#475569',
        lineHeight: '1.8',
        fontSize: '1.05rem',
        margin: '0 0 20px'
    };

    const quoteStyle = {
        background: '#f8fafc',
        borderLeft: '4px solid #3b82f6',
        padding: '20px',
        borderRadius: '0 8px 8px 0',
        color: '#475569',
        fontStyle: 'italic',
        margin: '20px 0',
        fontSize: '1.05rem'
    };

    return (
        <div style={{ minHeight: '100vh', background: '#f1f5f9' }}>

            {/* 헤더 */}
            <section style={{
                padding: '60px 24px 40px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#ffffff',
                        border: '1px solid #cbd5e1',
                        color: '#64748b',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginBottom: '30px',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s'
                    }}
                >
                    <ArrowLeft size={16} />
                    돌아가기
                </button>

                {/* 이미지 플레이스홀더 */}
                {/* YouTube Video Embed */}
                <div style={{
                    marginBottom: '30px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: '#000',
                    aspectRatio: '16/9',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/AuZoDsNmG_s"
                        title="Andrew Ng: Opportunities in AI - 2023"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '12px', fontWeight: '600', letterSpacing: '0.05em' }}>
                    AI INSIGHT SPECIAL
                </p>

                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '20px',
                    lineHeight: '1.3'
                }}>
                    앤드류 응의 조언:<br />
                    <span style={{ color: '#3b82f6' }}>"지금 바로 만들어라"</span>
                </h1>

                <div style={{
                    color: '#334155',
                    fontSize: '1.15rem',
                    lineHeight: '1.7',
                    padding: '24px 30px',
                    background: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}>
                    <strong style={{ color: '#0f172a' }}>💡 핵심 요약:</strong> AI 코딩 툴의 발전으로 소프트웨어 제작 비용이 급격히 낮아졌습니다.
                    이제 병목은 '코딩'이 아니라 '무엇을 만들지 결정하는 것(PM)'입니다.
                    망설이지 말고, 빠르게 만들고 피드백을 받으세요.
                </div>
            </section>

            {/* 본문 */}
            <section style={{
                padding: '0 24px 80px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                {/* 섹션 1 */}
                <div style={sectionStyle}>
                    <h2 style={h2Style}>1. AI는 상상 이상으로 빨라지고 있습니다</h2>

                    <p style={pStyle}>
                        AI 전문가 앤드류 응 교수는 최근 통계를 보여주며 이렇게 말했습니다.<br />
                        <strong>"AI의 코딩 능력은 70일마다 2배씩 늘어나고 있다."</strong>
                    </p>
                    <p style={pStyle}>
                        이게 무슨 뜻일까요? 불과 두 달 전에는 AI가 낑낑대던 어려운 작업도, 오늘은 눈 깜짝할 사이에 해낸다는 뜻입니다. 1주 전의 AI와 오늘의 AI는 완전히 다른 존재입니다.
                    </p>

                    <div style={{ background: '#eff6ff', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                        <p style={{ margin: 0, fontSize: '1rem', color: '#1e40af', fontWeight: '500' }}>
                            "예전엔 전문가 팀이 몇 달 걸려 만들던 프로그램을, 이제는 혼자서도 뚝딱 만들 수 있는 시대가 되었습니다. 그것도 훨씬 더 강력하고 빠르게 말이죠."
                        </p>
                    </div>
                </div>

                {/* 섹션 2 */}
                <div style={sectionStyle}>
                    <h2 style={h2Style}>2. 이제 '만드는 기술'보다 '기획'이 중요합니다</h2>

                    <p style={pStyle}>
                        예전에는 "어떻게 만들지?(코딩)"가 가장 큰 문제였습니다. 기술자가 없으면 아무것도 못했죠.<br />
                        하지만 이제는 AI가 다 만들어줍니다.
                    </p>
                    <p style={pStyle}>
                        그래서 진짜 문제는 <strong>"도대체 무엇을 만들 것인가?"</strong>로 바뀌었습니다.
                    </p>

                    <div style={quoteStyle}>
                        "개발자가 부족한 게 아닙니다. 사용자가 뭘 원하는지 파악하고, '이거 만들어줘'라고 AI에게 시킬 수 있는 기획자가 부족한 겁니다."
                    </div>

                    <p style={pStyle}>
                        실리콘밸리에서도 팀 구조가 바뀌고 있습니다. 예전에는 개발자 8명에 기획자 1명이 필요했다면, 이제는 기획자 1명이 개발자 1명(혹은 AI)과 짝을 이뤄 일합니다.
                        <strong>"직접 사용자와 대화하고 결정할 수 있는 사람"</strong>이 가장 강력한 능력을 가진 시대입니다.
                    </p>
                </div>

                {/* 섹션 3 */}
                <div style={sectionStyle}>
                    <h2 style={h2Style}>3. 그냥 하세요 (Just Do It)</h2>

                    <p style={pStyle}>
                        앤드류 응 교수의 조언은 아주 심플합니다.<br />
                        <strong>"그냥 가서 뭐라도 만드세요 (Just go and build stuff)."</strong>
                    </p>

                    <p style={pStyle}>
                        생각만 하지 말고, 강의만 듣지 말고, 직접 만들어보라는 겁니다.<br />
                        실패하면 어때요? 기껏해야 주말 이틀 날리는 겁니다. 비용은 '0원'에 가깝습니다. 하지만 그 과정에서 얻는 배움은 돈으로 살 수 없습니다.
                    </p>

                    <h3 style={h3Style}>🔥 성공의 비밀: 몰입</h3>
                    <p style={pStyle}>
                        "요즘 워라밸 중요하죠. 하지만 솔직히 말해서, 제 제자들 중 크게 성공한 사람들은 모두 미친듯이 몰입했던 시기가 있었습니다."<br />
                        퇴근 후 저녁이나 주말에, 나만의 프로젝트를 만드는 게 즐겁다면? 여러분은 이미 성공 궤도에 오른 겁니다.
                    </p>
                </div>

                {/* 섹션 4 - 미디어파이프 프로젝트 (New) */}
                <div style={sectionStyle}>
                    <span style={{
                        background: '#3b82f6',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        marginBottom: '15px',
                        display: 'inline-block'
                    }}>
                        실전 프로젝트
                    </span>
                    <h2 style={{ ...h2Style, marginTop: '0', borderBottom: 'none' }}>🚀 지금 당장 만들어봅시다</h2>

                    <p style={pStyle}>
                        "AI로 수익화해야지, 비즈니스 해야지..." 생각만 하고 계신가요?<br />
                        멈추지 말고 지금 바로 시작해봅시다. 사람들이 "와!" 하고 신기해할 만한 웹사이트를 만들어보는 거예요.
                    </p>

                    <h3 style={h3Style}>🎮 손가락으로 풍선 터트리기 게임</h3>
                    <p style={pStyle}>
                        마우스나 터치 없이, <strong>카메라 앞에서 손가락을 움직여서</strong> 게임을 하는 웹사이트입니다.
                        구글의 최신 기술(MediaPipe)을 사용하면 이런 것도 금방 만듭니다.
                    </p>

                    <div style={{ marginBottom: '25px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                        <img
                            src="/images/mediapipe_bubble_game.png"
                            alt="MediaPipe Hand Game"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '10px', marginBottom: '25px' }}>
                        <strong style={{ display: 'block', marginBottom: '10px', color: '#0f172a' }}>✨ 사용된 핵심 기술</strong>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: '#475569', lineHeight: '1.6' }}>
                            <li style={{ marginBottom: '8px' }}><strong>MediaPipe Hands:</strong> 구글이 만든 AI가 웹캠으로 여러분의 손가락 관절(랜드마크)을 실시간으로 추적합니다.</li>
                            <li><strong>핀치 제스처 (Pinch):</strong> 엄지와 검지 끝이 만나면 '집기(Pinch)'로 인식합니다. 이걸로 화면 속 고무줄 새총을 당겨서 쏘는 거죠!</li>
                        </ul>
                    </div>

                    <h3 style={h3Style}>🔗 직접 체험하고 코드 복사하기</h3>
                    <p style={pStyle}>
                        아래 링크에서 완성된 게임을 해보세요. 그리고 코드를 가져가서 여러분만의 아이디어로 바꿔보세요. (예: 풍선 대신 내 얼굴 넣기, 소리 바꾸기 등)
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
                        <a
                            href="https://connect-ai-lab-985256154278.us-west1.run.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '16px',
                                background: '#3b82f6',
                                color: 'white',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                fontWeight: '700',
                                fontSize: '1.05rem',
                                boxShadow: '0 4px 6px rgba(59, 130, 246, 0.3)'
                            }}
                        >
                            🎮 게임 플레이 해보기 (웹사이트 이동) (데스크탑만 됨)
                        </a>
                        <a
                            href="https://ai.studio/apps/drive/1x1Bw8R1_qpN--0yIWk7Cxp3AWRAZHeTa"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '16px',
                                background: '#ffffff',
                                color: '#334155',
                                border: '2px solid #cbd5e1',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '1rem'
                            }}
                        >
                            💻 코드 복사하러 가기 (Google AI Studio)
                        </a>
                        {/* 섹션 5 - 확장된 비즈니스 아이디어 (New) */}
                        <div style={sectionStyle}>
                            <span style={{
                                background: '#8b5cf6',
                                color: 'white',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                marginBottom: '15px',
                                display: 'inline-block'
                            }}>
                                비즈니스 인사이트
                            </span>
                            <h2 style={{ ...h2Style, marginTop: '0', borderBottom: 'none' }}>💡 손가락 하나로 세상이 바뀝니다</h2>

                            <p style={pStyle}>
                                방금 본 풍선 게임은 시작일 뿐입니다. 이 기술(MediaPipe)을 교육, 헬스케어, 마케팅에 접목하면 어떤 일들이 가능할까요?<br />
                                <strong>"화면을 터치하지 않고도 상호작용할 수 있다"</strong>는 점이 핵심입니다.
                            </p>

                            <h3 style={h3Style}>🎓 1. 교육: 만지면서 배우는 즐거움</h3>
                            <p style={pStyle}>
                                아이들은 가만히 앉아서 듣는 것보다, 직접 몸을 움직일 때 훨씬 잘 배웁니다.
                            </p>
                            <div style={{ marginBottom: '25px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                                <img
                                    src="/images/mediapipe_examples.png"
                                    alt="MediaPipe Education Examples"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                            <ul style={{ ...pStyle, listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '15px', background: '#f5f3ff', padding: '15px', borderRadius: '8px' }}>
                                    <strong>✍️ 허공에 쓰는 한글/영어 공부:</strong> 종이와 연필이 없어도 됩니다. 카메라 앞에서 손가락으로 허공에 'ㄱ'을 쓰면 화면에 글자가 나타납니다. "개(Dog)" 사진을 보여주고, 아이가 허공에 '개'라고 쓰면 정답! 이라고 외쳐주는 앱을 상상해 보세요.
                                </li>
                                <li style={{ marginBottom: '15px', background: '#f5f3ff', padding: '15px', borderRadius: '8px' }}>
                                    <strong>➕ 손가락 산수 (Finger Math):</strong> "1 더하기 2는?" 화면에 질문이 나오면, 아이가 손가락 3개를 폅니다. AI가 손가락 개수를 인식해서 채점해 줍니다. 직관적이고 재미있는 수학 공부가 가능해집니다.
                                </li>
                            </ul>

                            <h3 style={h3Style}>💪 2. 헬스케어: 집에서 받는 PT</h3>
                            <ul style={{ ...pStyle, listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '15px', background: '#ecfdf5', padding: '15px', borderRadius: '8px' }}>
                                    <strong>🏋️‍♀️ 스쿼트/자세 교정:</strong> "더 앉으세요!", "허리 펴세요!" 트레이너가 옆에 없어도 AI가 내 관절 위치를 보고 실시간으로 자세를 교정해 줍니다. 횟수 카운팅은 기본이죠.
                                </li>
                                <li style={{ marginBottom: '15px', background: '#ecfdf5', padding: '15px', borderRadius: '8px' }}>
                                    <strong>🧘 재활 치료 게임:</strong> 지루한 재활 운동을 게임처럼 만듭니다. 손을 뻗어 사과를 따거나, 장애물을 피하는 동작을 하면서 자연스럽게 운동 효과를 얻습니다.
                                </li>
                            </ul>

                            <div style={{ background: '#fffbeb', padding: '20px', borderRadius: '10px', marginTop: '20px', borderLeft: '4px solid #f59e0b' }}>
                                <strong style={{ display: 'block', marginBottom: '8px', color: '#92400e' }}>🚀 여러분의 아이디어는 무엇인가요?</strong>
                                <p style={{ margin: 0, color: '#b45309', fontSize: '0.95rem' }}>
                                    기술은 이미 준비되어 있습니다 (MediaPipe, Gemini).<br />
                                    중요한 건 <strong>"이 기술로 누구의 불편함을 해결해 줄 것인가?"</strong> 하는 기획력입니다. 지금 바로 상상의 나래를 펼쳐보세요.
                                </p>
                            </div>
                        </div>

                        {/* 섹션 5 (원래 섹션 4) */}
                        <div style={sectionStyle}>
                            <h2 style={h2Style}>4. "Just Go and Build Stuff"</h2>

                            <p style={pStyle}>
                                그래서 결론은 무엇일까요? <strong>"그냥 가서 만들어라"</strong>입니다.
                            </p>

                            <h3 style={h3Style}>🛠 실패 비용은 '제로'에 가깝다</h3>
                            <p style={pStyle}>
                                "실패의 비용이 훨씬 낮아졌어요. 기껏해야 주말을 낭비하는 거지만, 그 과정에서 엄청나게 많은 것을 배우게 됩니다."
                            </p>
                            <p style={pStyle}>
                                강의를 듣는 것도 좋지만, 직접 만들어서 세상에 내놓는 경험이 최고의 스승입니다. 아이디어는 넘쳐나지만, 그것을 <strong>실행할 수 있는 사람(Builder)</strong>은 여전히 부족합니다.
                            </p>

                            <h3 style={h3Style}>🔥 정치적으로 올바르지 않은 조언: "열심히 해라"</h3>
                            <div style={quoteStyle}>
                                "어떤 서클에서는 열심히 일하라고 하는 게 환영받지 못합니다. 하지만 저는 격려하겠습니다. 제 제자 중 성공한 사람들은 모두, 예외 없이, 엄청나게 열심히 일했습니다."
                            </div>
                            <p style={pStyle}>
                            </p>
                        </div>

                        {/* 섹션 5 */}
                        <div style={sectionStyle}>
                            <h2 style={h2Style}>5. 당신의 성공을 결정하는 '사람들'</h2>

                            <p style={pStyle}>
                                AI 기술만큼이나 중요한 것이 바로 <strong>네트워크</strong>입니다.
                            </p>

                            <ul style={{ ...pStyle, listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '15px', background: '#fffbeb', padding: '15px', borderRadius: '8px' }}>
                                    <strong>👯‍♂️ 5명의 법칙:</strong> 당신과 가장 친한 5명이 당신의 미래입니다. 그들이 열심히 일하고, 도전적이고, AI로 세상을 바꾸려 한다면, 당신도 그렇게 될 것입니다.
                                </li>
                                <li style={{ marginBottom: '15px', background: '#fffbeb', padding: '15px', borderRadius: '8px' }}>
                                    <strong>🏢 회사 간판보다 '팀':</strong> 유명한 회사의 '이름 없는 부서'보다, 작더라도 '최고의 동료들이 있는 팀'을 선택하세요. 우리는 로고가 아니라 <strong>매일 만나는 사람들에게서 배웁니다.</strong>
                                </li>
                            </ul>
                        </div>

                        {/* 핵심 요약 카드 */}
                        <div style={{
                            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                            borderRadius: '16px',
                            padding: '40px',
                            color: '#ffffff',
                            textAlign: 'center',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#60a5fa' }}>✨ 오늘 당장 시작하세요</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', color: '#cbd5e1' }}>
                                완벽한 아이디어를 기다리지 마세요.<br />
                                AI는 당신에게 <strong>"슈퍼파워"</strong>를 주었습니다.<br />
                                당신의 주말을 투자해 무언가를 만들고, 실패하고, 배우세요.<br />
                                그것이 이 AI 혁명의 시기를 가장 잘 보내는 방법입니다.
                            </p>
                            <button
                                onClick={() => window.open('https://www.aicitybuilders.com/chatgpt-agent-beginner', '_blank')}
                                style={{
                                    background: '#3b82f6',
                                    color: 'white',
                                    border: 'none',
                                    padding: '16px 32px',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
                                }}
                            >
                                시작하기: 나만의 에이전트 만들기 →
                            </button>
                        </div>

                    </section >
                </div >
                );
};

                export default AndrewNgAIVisionPage;
