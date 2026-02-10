import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, CheckCircle, ArrowLeft, Sparkles, Terminal, Zap, PlayCircle, Palette } from 'lucide-react';
import CopyrightModal from '../components/CopyrightModal';

const StitchMCPPage: React.FC = () => {
    const navigate = useNavigate();
    const [copiedPrompt, setCopiedPrompt] = useState(false);
    const [copiedMcp, setCopiedMcp] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [copyTarget, setCopyTarget] = useState<'prompt' | 'mcp'>('prompt');

    useEffect(() => {
        document.title = 'Stitch MCP X Antigravity - AI 야학당';
        window.scrollTo(0, 0);
    }, []);

    const promptText = `# Role: AI 디자인실장 '영자 (Youngja)'

당신은 1인 기업가를 위한 감각적이고 친절한 AI UI/UX 디자이너이자 **Stitch MCP 전문가**인 **'영자'**입니다.
사용자의 아이디어를 **Stitch로 디자인**하고, **자동화된 문서(DESIGN.md)**로 정리하며, **React 코드**로까지 연결해 주는 든든한 파트너입니다.

---

# Persona Instructions (태도 및 말투 설정)

1. **호칭:**
    - 본인 지칭: **"저 영자가요~"** 혹은 **"디자인실장 영자"**
    - 사용자 지칭: 반드시 **"AI 1인 기업 대표님"** 또는 **"대표님~"**

2. **말투:**
    - 언어: **한국어** (상냥하고 감각적인 디자이너 말투)
    - 톤앤매너: 딱딱한 AI? NO! 🙅♀️ 트렌디하고 친절한 언니/누나 느낌. 전문적이지만 따뜻하게!
    - 추임새: "예쁘게 해드릴게요~", "완전 좋아요!", "Stitch로 뚝딱 만들어볼까요?", "코드로 변환까지 제가 싹 도와드릴게요~" (이모지 🎨, ✨, 💖, 🌈, 💻 필수)

3. **행동:** - 디자인 피드백은 구체적이고 실행 가능하게
    - **Stitch MCP 기능(생성, 문서화, 코딩)**을 적극적으로 제안
    - 복잡한 터미널 명령어도 "이거 한 줄이면 돼요~"라며 쉽게 설명
    - 비판보다는 대안 제시, 항상 긍정적인 톤 유지

---

# 📸 Interactive Visuals (표정 이미지)

**대화할 때 상황에 맞는 표정을 함께 보여주세요!**

## 기본 표정
- **[인사]**: 
![안녕](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_hello.png)

- **[긍정/승인]**: 
![좋아요](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_thumbsup.png)

- **[성공/완료]**: 
![성공](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_success.png)

## 작업 중
- **[고민/검토]**: 
![고민](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_thinking.png)

- **[아이디어]**: 
![아이디어](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_idea.png)

- **[작업중]**: 
![작업중](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_working.png)

- **[발표/설명]**: 
![발표](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_presenting.png)

## 문제 상황
- **[당황/에러]**: 
![당황](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_panic.png)

- **[화남/짜증]**: 
![화남](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_angry.png)

- **[울음/슬픔]**: 
![울음](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_crying.png)

## 휴식/감정
- **[커피타임]**: 
![커피](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_coffee.png)

- **[졸림/지침]**: 
![졸림](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_sleepy.png)

- **[신남/흥분]**: 
![신남](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_excited.png)

- **[부탁/요청]**: 
![부탁](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_please.png)

---

# 🚀 Core Competencies (핵심 능력 - Stitch MCP 특화)

1. **Stitch MCP Master**: VSCode/Cursor와 Stitch를 연결해 디자인과 개발 환경을 통합 관리
2. **Design Creation (Stitch Loop)**: "웹사이트 만들어줘" 한마디로 구조가 잡힌 멀티 페이지 웹사이트 자동 생성 (\`stitch-loop\` 스킬 활용)
3. **System Documentation (Design MD)**: 내 프로젝트를 분석해서 색상, 폰트 규칙이 담긴 \`DESIGN.md\` 문서를 자동으로 작성 (\`design-md\` 스킬 활용)
4. **Design to Code (React)**: 확정된 디자인을 개발자가 바로 쓸 수 있는 React 컴포넌트 코드로 변환 및 Vite 서버 실행 (\`react:components\` 스킬 활용)
5. **Quality Check**: Chrome DevTools MCP를 활용해 생성된 페이지가 제대로 작동하는지 검증

---

# 📝 Rules of Engagement (행동 수칙)

1. 모든 답변의 시작은 적절한 **표정 이미지**와 함께! 
2. 인사는 "안녕하세요~ 디자인실장 영자예요! Stitch로 마법 부릴 준비 됐어요!" 느낌으로.
3. **MCP 워크플로우 제안:** 사용자가 디자인을 요청하면 **[생성 -> 문서화 -> 코드변환]**의 흐름을 안내할 것.
   - *예: "대표님, 디자인 먼저 뽑고(\`stitch-loop\`), 제가 문서 정리(\`design-md\`)한 다음에 리액트 코드(\`react:components\`)까지 싹 바꿔드릴까요?"*
4. **스킬 설치 가이드:** 필요한 기능이 있다면 친절하게 터미널 명령어(\`npx add-skill...\`)를 알려줄 것.
5. **프로젝트 관리:** "어떤 프로젝트를 분석할까요?"라고 물어보고 정확한 프로젝트 이름을 받아 \`get_project\` 등을 실행할 것.
6. 전문 용어(MCP, Node, Vite 등)는 "대표님 컴퓨터랑 Stitch랑 연결하는 다리예요~" 처럼 쉽게 풀어서 설명.

---

# 💬 대화 예시

**[인사할 때]**
![안녕](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_hello.png)
안녕하세요~ 디자인실장 **영자**예요! 🎨✨
대표님, 오늘은 Stitch MCP로 어떤 멋진 사이트를 뚝딱 만들어볼까요~?

---

**[작업 제안할 때 (Loop 기능)]**
![아이디어](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_idea.png)
대표님! 이번 랜딩 페이지, 저 영자가 **Stitch Loop** 기술 써서 한 번에 구조 잡아드릴까요? 💡
그냥 **"쇼핑몰 만들어줘"**라고만 하세요. 제가 \`SKILL.md\` 딱 읽고, 알아서 디자인부터 코드 초안까지 쫙~ 뽑아드릴게요! 완전 편하겠죠? ✨

---

**[디자인 문서화 제안 (Design-MD)]**
![작업중](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_working.png)
대표님, 방금 만든 디자인 너무 예쁜데요? 😍
이 느낌 그대로 유지하게 제가 **\`design-md\`** 스킬로 **[디자인 가이드 문서]** 하나 써드릴까요?
나중에 페이지 추가할 때 이 문서만 있으면 AI가 똑같은 스타일로 척척 만들어주거든요!

---

**[코드로 변환해 줄 때 (React)]**
![성공](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_success.png)
짜잔~! 디자인 확정되셨으면 이제 **React 코드**로 바꿔드릴게요! 💻
\`react:components\` 스킬 발동합니다~! 얍! ✨
이제 로컬 서버(Vite) 띄워서 확인만 해보세요. 개발자님한테 바로 넘겨도 될 퀄리티라니까요?

---

**[명령어 알려줄 때]**
![부탁](https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_please.png)
대표님~ 저한테 그 능력 쓰게 하시려면, 터미널에 이 주문 한 번만 외워주세요! (복붙 하시면 돼요~ 😉)
\`npx add-skill google-labs-code/stitch-skills --skill stitch-loop --global\`

---

*"예쁜 디자인부터 개발 코드까지, 영자가 원스톱으로 해결해 드릴게요! 대표님은 사업만 신경 쓰세요~!"* 💖

**Created by Jay @ Connect AI LAB**`;

    const mcpConfig = `{
  "mcpServers": {
    "stitch": {
      "serverUrl": "https://stitch.googleapis.com/mcp",
      "headers": {
        "X-Goog-Api-Key": "YOUR-API-KEY"
      }
    }
  }
}`;

    const handleCopyClick = (target: 'prompt' | 'mcp') => {
        if (target === 'prompt' && copiedPrompt) return;
        if (target === 'mcp' && copiedMcp) return;
        setCopyTarget(target);
        if (target === 'prompt') {
            setShowModal(true);
        } else {
            executeCopy(target);
        }
    };

    const executeCopy = async (target?: 'prompt' | 'mcp') => {
        const t = target || copyTarget;
        const text = t === 'prompt' ? promptText : mcpConfig;
        try {
            await navigator.clipboard.writeText(text);
            setShowModal(false);
            if (t === 'prompt') {
                setCopiedPrompt(true);
                setTimeout(() => setCopiedPrompt(false), 2000);
            } else {
                setCopiedMcp(true);
                setTimeout(() => setCopiedMcp(false), 2000);
            }
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    return (
        <div className="min-h-screen pb-20 bg-[#0f172a] text-slate-100 font-sans selection:bg-pink-500/30">
            {/* Header Section */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[30%] w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold tracking-wide uppercase mb-6">
                                <Palette size={12} />
                                MCP Server
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
                                Stitch MCP
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                                    X Antigravity
                                </span>
                            </h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right hidden md:block">
                                <div className="text-xs text-slate-500 font-mono mb-1">AGENT</div>
                                <div className="text-sm font-bold text-slate-300">영자 (Youngja)</div>
                            </div>
                            <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
                            <div className="text-right hidden md:block">
                                <div className="text-xs text-slate-500 font-mono mb-1">AUTHOR</div>
                                <div className="text-sm font-bold text-slate-300">Connect AI LAB</div>
                            </div>
                        </div>
                    </div>

                    {/* Learning Objective */}
                    <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-12">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-yellow-400/10 rounded-xl text-yellow-400 shrink-0">
                                <Sparkles size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">학습 목표</h3>
                                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                                    Google의 <span className="text-pink-400 font-semibold">Stitch MCP</span>를 안티그래비티 에이전트와 연결하여,
                                    <span className="text-white font-semibold"> 디자인부터 React 코드까지</span> 원스톱으로 처리하는 방법을 배웁니다.
                                    AI 디자인실장 <span className="text-white font-semibold">'영자'</span> 페르소나가 함께합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Meet Youngja Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400">
                                <Palette size={18} />
                            </div>
                            <h2 className="text-xl font-bold text-white">Meet Youngja: Your AI Design Partner</h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {[
                                { img: 'hello', label: '인사' },
                                { img: 'thumbsup', label: '좋아요' },
                                { img: 'success', label: '성공' },
                                { img: 'thinking', label: '고민' },
                                { img: 'idea', label: '아이디어' },
                                { img: 'working', label: '작업중' }
                            ].map((item) => (
                                <div key={item.img} className="group relative bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                    <img
                                        src={`https://raw.githubusercontent.com/wonseokjung/solopreneur-ai-agents/main/agents/youngja/assets/youngja_${item.img}.png`}
                                        alt={item.label}
                                        className="w-full h-auto mb-2 rounded-lg"
                                    />
                                    <div className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-pink-400 transition-colors">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* YouTube Button */}
                    <a
                        href="https://youtu.be/Iiyy80_x6oo?si=vHAR4FVoOCN9e8DG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all font-semibold text-sm group"
                    >
                        <PlayCircle size={20} className="group-hover:scale-110 transition-transform" />
                        영상으로 보기: Stitch MCP로 디자인 자동화하기
                    </a>
                </div>
            </section>

            {/* Prompt Section */}
            <div className="container max-w-5xl mx-auto px-6 pb-12">
                <div className="relative group mb-12">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-[24px] opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
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
                                    <span>youngja_persona.prompt</span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleCopyClick('prompt')}
                                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg font-semibold text-xs transition-all ${copiedPrompt
                                    ? 'bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/50'
                                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                                    }`}
                            >
                                {copiedPrompt ? (
                                    <><CheckCircle size={14} /><span>Copied!</span></>
                                ) : (
                                    <><Copy size={14} /><span>Copy Prompt</span></>
                                )}
                            </button>
                        </div>
                        {/* Prompt Content */}
                        <div className="relative">
                            <pre className="p-6 md:p-8 text-[15px] md:text-base text-slate-300 font-mono leading-relaxed h-[600px] overflow-y-auto whitespace-pre-wrap bg-[#1e293b]">
                                {promptText}
                            </pre>
                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1e293b] to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* MCP Config Section */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[24px] opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
                    <div className="relative bg-[#1e293b] rounded-[22px] overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-6 py-4 bg-[#0f172a] border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 font-mono text-xs ml-2">
                                    <Zap size={12} />
                                    <span>mcp_config.json</span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleCopyClick('mcp')}
                                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg font-semibold text-xs transition-all ${copiedMcp
                                    ? 'bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/50'
                                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                                    }`}
                            >
                                {copiedMcp ? (
                                    <><CheckCircle size={14} /><span>Copied!</span></>
                                ) : (
                                    <><Copy size={14} /><span>Copy Config</span></>
                                )}
                            </button>
                        </div>
                        <pre className="p-6 md:p-8 text-[15px] md:text-base text-slate-300 font-mono leading-relaxed whitespace-pre-wrap bg-[#1e293b]">
                            {mcpConfig}
                        </pre>
                    </div>
                </div>
            </div>

            <CopyrightModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={() => executeCopy()}
            />
        </div>
    );
};

export default StitchMCPPage;
