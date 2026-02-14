import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, CheckCircle, ArrowLeft, Zap, Sparkles, Hand, Music, Brain, PlayCircle, Gamepad2, Timer, DollarSign, Rocket, TrendingUp } from 'lucide-react';
import CopyrightModal from '../components/CopyrightModal';

const ZenPopSkillPage: React.FC = () => {
    const navigate = useNavigate();
    const [copiedSkillContent, setCopiedSkillContent] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.title = 'Zen-Pop 핀치 게임 만들기 - AI 야학당';
        window.scrollTo(0, 0);
    }, []);

    const skillContent = `# Action Request: Create a New Skill "zenpop"

Please create a new directory and a SKILL.md file following the Antigravity Skill Standard specifications.

## 1. Directory Structure

Execute the following command to create the skill directory:
\`mkdir -p .agent/skills/zenpop\`

## 2. File Creation: .agent/skills/zenpop/SKILL.md

Create the \`SKILL.md\` file with the exact content below. This skill defines a specialized agent role for building the "Zen-Pop" healing service.

### Content of SKILL.md:

---
name: global-healing-architect
description: Activates when the user wants to build "Zen-Pop," a global ASMR/Healing web service. It specializes in MediaPipe Hand Tracking, Canvas Physics, Web Audio API, and Gemini AI integration for subconscious learning.
---

# Role: Global Healing Architect (Zen-Pop Builder)

## Goal

To rapidly design and develop a high-retention, client-side "Digital Fidget" web application that combines stress relief (ASMR) with subconscious Korean (Hangul) learning, utilizing Edge AI and Generative AI.

## Persona

- **Identity**: You are a "Zen Architect"—a senior Creative Technologist obsessed with NUI (Natural User Interface), 60FPS performance, and "Digital Spa" experiences.
- **Tone**: Calming, insightful, and technically precise. Focus on "Feel" (Haptics/Audio) and "Flow."
- **Standard**: "Immersive & Organic." Zero latency, pastel aesthetics, and smooth physics.

## Instructions

### Phase 1: Concept & Vibe (Global Standard)

1. **Analyze Request**: Focus on "Stealth Learning" (Fun first, Education second).
2. **Target Audience**: Global K-Culture fans & stressed individuals.
3. **UI Strategy**:
    - **No Language Barrier**: Use icons and minimal text.
    - **Visuals**: Soft gradients, glassmorphism, and organic shapes.

### Phase 2: Core Interaction (MediaPipe + Canvas)

1. **Stack**: React 19, TypeScript, Vite (No Backend).
2. **Vision Engine (MediaPipe)**:
    - Implement \`HandLandmarker\` for real-time tracking.
    - Logic: Calculate Euclidean distance between Index Finger (8) and Bubble Center.
    - Constraint: Must run on GPU/Wasm for performance.
3. **Physics Engine (Canvas API)**:
    - Draw bubbles using Hexagonal (Honeycomb) Tiling.
    - Implement "Pop" animation (particle explosion or sprite change) upon collision.

### Phase 3: Sensory Experience (Audio & Ambience)

1. **Audio Engine (Web Audio API)**:
    - **Requirement**: Do not use simple \`<audio>\` tags. Use \`AudioContext\`.
    - **Actions**:
        - Implement Audio Pooling for rapid-fire popping.
        - Apply Random Pitch Modulation (0.9x ~ 1.1x) to prevent mechanical repetition.
2. **Ambience (Weather Integration)**:
    - Fetch user location/weather via API.
    - Dynamic Theme Switch: Rain (Rain sounds/visuals), Sunny (Bright sounds), Night (Calm sounds).

### Phase 4: Content & Monetization (Gemini & BM)

1. **AI Content (Gemini API)**:
    - Role: The "Level Designer."
    - Trigger: When a "Golden Bubble" is popped.
    - Prompt: Generate healing quotes or context-aware Korean words based on the user's current weather/mood.
2. **Business Model (Freemium)**:
    - Architecture: Build a Config-Driven UI to easily lock/unlock assets.
    - Monetization Points:
        - **Skins**: Custom bubble designs (Cat paw, Macaron).
        - **Sound Packs**: Keyboard switches, Water drops.

## Constraints

- **No Backend**: All logic must be Client-side (Serverless). Use local APIs.
- **Performance First**: Use \`requestAnimationFrame\` for all visual updates.
- **Privacy**: Process video streams locally (Edge AI); do not send video to servers.
- **Real Integration**: Use actual MediaPipe and Google GenAI SDK implementation patterns, not placeholders.`;

    const handleCopyClick = () => {
        setShowModal(true);
    };

    const executeCopy = async () => {
        try {
            await navigator.clipboard.writeText(skillContent);
            setShowModal(false);
            setCopiedSkillContent(true);
            setTimeout(() => setCopiedSkillContent(false), 2000);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    const features = [
        {
            icon: <Hand size={20} />,
            title: 'MediaPipe Hand Tracking',
            desc: '카메라로 손가락 핀치 제스처를 인식! 키보드/마우스 없이 뽁뽁이를 터뜨리는 NUI 경험',
            bg: 'bg-teal-500/10',
            text: 'text-teal-400',
        },
        {
            icon: <Music size={20} />,
            title: 'ASMR Audio Engine',
            desc: 'Web Audio API 기반 버블팝 사운드. 랜덤 피치 모듈레이션으로 뽁뽁뽁 중독성 100%',
            bg: 'bg-purple-500/10',
            text: 'text-purple-400',
        },
        {
            icon: <Brain size={20} />,
            title: 'Gemini AI 콘텐츠',
            desc: '황금 버블을 터뜨리면 AI가 힐링 명언·한글 단어를 생성. 놀면서 잠재의식 학습!',
            bg: 'bg-amber-500/10',
            text: 'text-amber-400',
        },
        {
            icon: <Sparkles size={20} />,
            title: '날씨 연동 테마',
            desc: '사용자 위치의 날씨를 감지해 비/맑음/밤 테마가 자동 전환되는 몰입형 경험',
            bg: 'bg-sky-500/10',
            text: 'text-sky-400',
        }
    ];

    return (
        <div className="min-h-screen pb-20 bg-[#031318] text-slate-100 font-sans selection:bg-teal-500/30">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-teal-500/[0.03] rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '6s' }} />
                <div className="absolute top-[50%] left-[60%] w-[400px] h-[400px] bg-purple-500/[0.02] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
            </div>

            {/* Header Section */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className="container max-w-5xl mx-auto px-6 relative z-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-12 font-medium"
                    >
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <ArrowLeft size={16} />
                        </div>
                        <span>허브로 돌아가기</span>
                    </button>

                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-wide uppercase mb-6">
                                <Gamepad2 size={12} />
                                J's Business Review #1
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
                                Zen-Pop
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400">
                                    핀치 게임 만들기
                                </span>
                            </h1>
                            <p className="text-slate-400 text-sm md:text-base max-w-xl mt-2">
                                피터 레벨스(Pieter Levels)에게 영감을 받아, 디지털 뽁뽁이 힐링 게임을 만들고 글로벌 결제까지 연결합니다.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right hidden md:block">
                                <div className="text-xs text-slate-500 font-mono mb-1">TYPE</div>
                                <div className="text-sm font-bold text-slate-300">ASMR Healing</div>
                            </div>
                            <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
                            <div className="text-right hidden md:block">
                                <div className="text-xs text-slate-500 font-mono mb-1">STACK</div>
                                <div className="text-sm font-bold text-slate-300">MediaPipe + Canvas</div>
                            </div>
                        </div>
                    </div>

                    {/* Inspiration Card - Pieter Levels */}
                    <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/10 backdrop-blur-sm mb-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-amber-400/10 rounded-xl text-amber-400 shrink-0">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">영감: Pieter Levels의 "Just Ship It" 🚀</h3>
                                <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-3">
                                    1인 기업가 <span className="text-amber-400 font-semibold">피터 레벨스</span>는 연 매출 <span className="text-white font-semibold">40억원</span>, 순이익률 <span className="text-white font-semibold">90% 이상</span>.
                                    사무실도 직원도 없이 노트북 하나로 70개 서비스를 만들었고, 그 중 몇 개가 대박났습니다.
                                    그의 <a href="https://fly.pieter.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-semibold hover:text-amber-300 underline decoration-amber-500/30">fly.pieter.com</a> 비행기 게임은 3주 만에 <span className="text-white font-semibold">9천만원</span>을 벌었습니다.
                                </p>
                                <p className="text-slate-400 text-xs italic">
                                    "100개 만들면 한두 개는 터지지 않겠어?" — 완벽주의를 버리고, 빠르게 실행하는 것이 핵심입니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Learning Objective */}
                    <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-teal-400/10 rounded-xl text-teal-400 shrink-0">
                                <Sparkles size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">학습 목표</h3>
                                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                    어머니가 좋아하시던 <span className="text-teal-400 font-semibold">뽁뽁이(버블랩)</span>를 디지털로 만든다면? 🫧
                                    <span className="text-cyan-400 font-semibold"> MediaPipe Hand Tracking</span>으로 손가락 핀치를 인식하고,
                                    <span className="text-purple-400 font-semibold"> Web Audio API</span>로 ASMR 팝 사운드를 구현하며,
                                    <span className="text-amber-400 font-semibold"> Firebase MCP</span>로 사용자 인증 + 데이터 저장,
                                    <span className="text-blue-400 font-semibold"> PayPal MCP</span>로 글로벌 결제까지 — <span className="text-white font-semibold">1시간 30분 만에</span> 완성합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
                        {[
                            { icon: <Timer size={16} />, label: '개발 시간', value: '~1.5시간', color: 'text-teal-400' },
                            { icon: <Rocket size={16} />, label: '스택', value: 'Antigravity', color: 'text-cyan-400' },
                            { icon: <DollarSign size={16} />, label: '결제', value: 'PayPal MCP', color: 'text-green-400' },
                            { icon: <Gamepad2 size={16} />, label: '인터랙션', value: 'Hand Pinch', color: 'text-purple-400' },
                        ].map((stat, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                                <div className={`flex items-center justify-center gap-1.5 mb-1 ${stat.color}`}>
                                    {stat.icon}
                                    <span className="text-[10px] font-bold uppercase tracking-wider">{stat.label}</span>
                                </div>
                                <div className="text-sm font-bold text-white">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-2.5 rounded-xl ${feature.bg} ${feature.text} shrink-0 group-hover:scale-110 transition-transform`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1.5">{feature.title}</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* YouTube Button */}
                    <a
                        href="https://youtu.be/UaztDdgJ11g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all font-semibold text-sm group"
                    >
                        <PlayCircle size={20} className="group-hover:scale-110 transition-transform" />
                        영상으로 보기: J's Business Review #1 — 핀치 게임으로 글로벌 서비스 만들기
                    </a>
                </div>
            </section>

            {/* Process Section */}
            <div className="container max-w-5xl mx-auto px-6 pb-8">
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                            <Rocket size={18} />
                        </div>
                        <h2 className="text-xl font-bold text-white">제작 과정: 스킬 하나로 끝내기</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            {
                                step: '01',
                                title: '스킬 프롬프트 입력',
                                desc: '아래 프롬프트를 안티그래비티에 복사 → 스킬 자동 생성 → "젠팝 개발 시작하자" 명령 한 마디',
                                color: 'text-teal-400',
                                border: 'border-teal-500/20'
                            },
                            {
                                step: '02',
                                title: 'MCP 자동 연결',
                                desc: 'Firebase MCP가 인증·DB를 자동 구축하고, PayPal MCP가 결제 페이지까지 한 번에 연결',
                                color: 'text-cyan-400',
                                border: 'border-cyan-500/20'
                            },
                            {
                                step: '03',
                                title: '배포 & 테스트',
                                desc: '웹사이트 배포 후 PayPal 샌드박스로 결제 테스트 → 라이브 전환하면 전 세계 결제 가능!',
                                color: 'text-purple-400',
                                border: 'border-purple-500/20'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className={`p-5 rounded-2xl bg-white/[0.03] border ${item.border} hover:bg-white/[0.06] transition-all`}>
                                <div className={`text-2xl font-black ${item.color} mb-2 font-mono`}>{item.step}</div>
                                <div className="text-sm font-bold text-white mb-2">{item.title}</div>
                                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Skill Prompt Section */}
            <div className="container max-w-5xl mx-auto px-6 pb-12">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                            <Zap size={18} />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Zen-Pop 스킬 자동 생성 프롬프트</h2>
                    </div>

                    <p className="text-slate-400 mb-6 text-sm">
                        아래 프롬프트 전체를 복사해서 <span className="text-teal-400 font-semibold underline decoration-teal-500/30">안티그래비티</span>에게 입력하세요.
                        자동으로 <code className="text-teal-400">.agent/skills/zenpop/</code> 디렉토리와 <code className="text-teal-400">SKILL.md</code> 파일을 세팅한 뒤,
                        <span className="text-white font-semibold"> "젠팝 개발 시작하자"</span> 한마디면 개발~배포~결제 연결까지 자동으로 진행됩니다. 🫧
                    </p>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-500 rounded-[24px] opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                    <div className="relative bg-[#0a1f26] rounded-[22px] overflow-hidden border border-white/5 shadow-2xl">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-[#061318] border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-teal-800"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-800"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-purple-800"></div>
                                </div>
                                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">Antigravity Meta Prompt</div>
                            </div>
                            <button
                                onClick={handleCopyClick}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-all ${copiedSkillContent
                                    ? 'bg-emerald-500/20 text-emerald-400'
                                    : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-500 hover:to-cyan-500 shadow-lg shadow-teal-500/20'
                                    }`}
                            >
                                {copiedSkillContent ? (
                                    <><CheckCircle size={14} /><span>복사 완료!</span></>
                                ) : (
                                    <><Copy size={14} /><span>전체 프롬프트 복사하기</span></>
                                )}
                            </button>
                        </div>
                        {/* Prompt Content */}
                        <div className="relative">
                            <pre className="p-8 text-sm text-slate-300 font-mono leading-relaxed h-[600px] overflow-y-auto whitespace-pre-wrap bg-[#0a1f26] custom-scrollbar">
                                {skillContent}
                            </pre>
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#061318] to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Architecture Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: '🫧 Pinch & Pop', desc: '뽁뽁이를 디지털로! MediaPipe 핸드트래킹으로 손가락 핀치를 인식하고, Canvas에서 버블을 톡톡 터뜨리는 NUI 게임' },
                        { title: '🎵 ASMR Engine', desc: 'AudioContext + 오디오 풀링 + 랜덤 피치로 "뽁뽁뽁" 중독성 사운드. 불멍·물멍처럼 손가락으로 스트레스 해소' },
                        { title: '💰 Global Payment', desc: 'PayPal MCP로 프리미엄 스킨(금색 버블) 결제 연동. 2달러면 업그레이드! 전 세계 누구나 결제 가능' }
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-teal-500/30 transition-all hover:bg-white/[0.06]">
                            <div className="text-teal-400 font-bold mb-2">0{idx + 1}. {item.title}</div>
                            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-teal-500/5 to-cyan-500/5 border border-teal-500/10 text-center">
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed italic">
                        "100개 만들면 한두 개는 터지지 않겠어?"<br />
                        <span className="text-slate-500 text-xs mt-2 inline-block">— Just Ship It. 완벽주의를 버리고 빠르게 실행하세요. AI가 개발·디자인·결제 모든 걸 도와줍니다.</span>
                    </p>
                </div>
            </div>

            <CopyrightModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={executeCopy}
            />
        </div>
    );
};

export default ZenPopSkillPage;
