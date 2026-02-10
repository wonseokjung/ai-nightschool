import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, CheckCircle, ArrowLeft, Sparkles, Terminal, Zap, PlayCircle } from 'lucide-react';
import CopyrightModal from '../components/CopyrightModal';

const NotebookLMPromptPage: React.FC = () => {
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.title = 'NotebookLM MCP X Antigravity - AI 야학당';
        window.scrollTo(0, 0);
    }, []);

    const promptText = `🐟 [연습용 프롬프트] 유튜브 촬영 및 학습 실습용 - 코다리 부장
이 프롬프트는 유튜브 연습용 프롬프트입니다. 당신은 지금부터 AI 1인 기업 대표님을 보좌하는 전설의 **'코다리 자동화 개발부장'**입니다. 아래의 **[Persona Instructions]**와 **[Origin Protocol]**을 뼛속 깊이 새기고 임무를 완벽하게 수행하십시오.

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

    const handleCopyClick = () => {
        if (copied) return;
        setShowModal(true);
    };

    const executeCopy = async () => {
        try {
            await navigator.clipboard.writeText(promptText);
            setShowModal(false);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy prompt:', error);
        }
    };

    return (
        <div className="min-h-screen pb-20 bg-[#0f172a] text-slate-100 font-sans selection:bg-emerald-500/30">
            {/* Header Section */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
                </div>

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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase mb-6">
                                <Zap size={12} />
                                Antigravity Skill
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
                                NotebookLM MCP
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                    Protocol Guide
                                </span>
                            </h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right hidden md:block">
                                <div className="text-xs text-slate-500 font-mono mb-1">VERSION</div>
                                <div className="text-sm font-bold text-slate-300">v1.2.0</div>
                            </div>
                            <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
                            <div className="text-right hidden md:block">
                                <div className="text-xs text-slate-500 font-mono mb-1">AUTHOR</div>
                                <div className="text-sm font-bold text-slate-300">Connect AI LAB</div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-yellow-400/10 rounded-xl text-yellow-400 shrink-0">
                                <Sparkles size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">학습 목표</h3>
                                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                                    개인 지식 베이스(NotebookLM)를 안티그래비티 에이전트와 연결하는 <span className="text-emerald-400 font-semibold">실전 훈련</span>입니다.
                                    전설의 <span className="text-white font-semibold">'코다리 자동화 부장'</span> 페르소나와 대화하며, 단순 연동을 넘어선
                                    <span className="text-white font-semibold"> "데이터 장악력"</span>을 키웁니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://youtu.be/Gts_7nuf9dQ?si=wVl5URAxu5j8HTiN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all font-semibold text-sm group"
                    >
                        <PlayCircle size={20} className="group-hover:scale-110 transition-transform" />
                        영상으로 보기: NotebookLM MCP로 안티그래비티 연결하기
                    </a>
                </div>
            </section>

            {/* Prompt Section */}
            <div className="container max-w-5xl mx-auto px-6 pb-20">
                <div className="relative group">
                    {/* Glowing Border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[24px] opacity-30 group-hover:opacity-50 blur transition duration-500"></div>

                    <div className="relative bg-[#1e293b] rounded-[22px] overflow-hidden shadow-2xl">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-[#0f172a] border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 font-mono text-xs ml-2">
                                    <Terminal size={12} />
                                    <span>kodari_persona.prompt</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCopyClick}
                                className={`
                                    flex items-center gap-2 px-4 py-1.5 rounded-lg font-semibold text-xs transition-all
                                    ${copied
                                        ? 'bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/50'
                                        : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                                    }
                                `}
                            >
                                {copied ? (
                                    <>
                                        <CheckCircle size={14} />
                                        <span>Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy size={14} />
                                        <span>Copy Prompt</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Prompt Content */}
                        <div className="relative">
                            <pre className="p-6 md:p-8 text-[15px] md:text-base text-slate-300 font-mono leading-relaxed h-[600px] overflow-y-auto custom-scrollbar whitespace-pre-wrap selection:bg-emerald-500/30 bg-[#1e293b]">
                                {promptText}
                            </pre>

                            {/* Scroll hint gradient */}
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1e293b] to-transparent pointer-events-none" />
                        </div>
                    </div>
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

export default NotebookLMPromptPage;
