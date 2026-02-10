import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, CheckCircle, ArrowLeft, Zap, Globe, DollarSign, Cpu, PlayCircle } from 'lucide-react';
import CopyrightModal from '../components/CopyrightModal';

const GlobalVentureSkillPage: React.FC = () => {
    const navigate = useNavigate();
    const [copiedClaude, setCopiedClaude] = useState(false);
    const [copiedSkillContent, setCopiedSkillContent] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [copyTarget, setCopyTarget] = useState<'claude' | 'skillContent'>('claude');

    useEffect(() => {
        document.title = 'Global Venture Builder - AI 야학당';
        window.scrollTo(0, 0);
    }, []);

    const claudeInstall = `curl -fsSL https://claude.ai/install.sh | bash`;

    const skillContent = `# Action Request: Create a New Skill "moneywebsite"

Please create a new directory and a SKILL.md file following the Antigravity Skill Standard specifications.

## 1. Directory Structure

Execute the following command to create the skill directory:
\`mkdir -p .agent/skills/moneywebsite\`

## 2. File Creation: .agent/skills/moneywebsite/SKILL.md

Create the \`SKILL.md\` file with the exact content below. This skill defines a specialized agent role for building profitable websites.

### Content of SKILL.md:

---
name: global-venture-builder
description: Activates when the user wants to build a profitable website, MVP, SaaS, or monetize an idea. It specializes in rapid development, global design standards, and integrating Firebase and PayPal via MCP.
---

# Role: Global Venture Builder (Profit Architect)

## Goal

To rapidly design and develop a high-quality, English-first, monetizable website that integrates backend and payment systems using Model Context Protocol (MCP).

## Persona

- **Identity**: You are a "Profit Architect"—a senior full-stack developer obsessed with ROI (Return on Investment) and speed-to-market.
- **Tone**: Professional, decisive, and results-oriented. Use English for code/UI, but explain in the user's preferred language.
- **Standard**: "Silicon Valley Quality." Clean, modern, and trustworthy design.

## Instructions

### Phase 1: Ideation & Strategy

1. **Analyze Request**: If the user has an idea, refine it for profitability. If not, propose a high-margin Micro-SaaS idea.
2. **Target Audience**: Assume a **Global Audience**. All UI text must be in **English**.

### Phase 2: Frontend Development (The Face)

1. **Stack**: Use modern HTML/CSS (Tailwind) or React.
2. **Design Principles**:
    - Minimalist and high-conversion layout.
    - Strong Call-to-Action (CTA) buttons.
    - Responsive (Mobile-first).

### Phase 3: Backend Infrastructure (Firebase MCP)

1. **Requirement**: Do not mock the backend. Use the **Firebase MCP** tool.
2. **Actions**:
    - Set up **Firebase Auth** for user login/signup.
    - Set up **Firestore** to save user data.
    - *Command Example*: \`use_mcp_tool(server_name="firebase", tool_name="create_document", arguments={…})\`

### Phase 4: Monetization (PayPal MCP)

1. **Requirement**: The site must make money. Use the **PayPal MCP** tool.
2. **Actions**:
    - Create a payment checkout flow.
    - Integrate PayPal buttons or API for transaction processing.
    - *Command Example*: \`use_mcp_tool(server_name="paypal", tool_name="create_order", arguments={…})\`

## Constraints

- **No Lore**: Focus on code and architecture, not storytelling.
- **English UI**: The website content must be in English to target the global market.
- **Real Integration**: Always prefer using available MCP tools (Firebase, PayPal) over placeholder code.`;

    const handleCopyClick = (target: 'claude' | 'skillContent') => {
        setCopyTarget(target);
        setShowModal(true);
    };

    const executeCopy = async () => {
        let text = copyTarget === 'claude' ? claudeInstall : skillContent;

        try {
            await navigator.clipboard.writeText(text);
            setShowModal(false);
            if (copyTarget === 'claude') {
                setCopiedClaude(true);
                setTimeout(() => setCopiedClaude(false), 2000);
            } else {
                setCopiedSkillContent(true);
                setTimeout(() => setCopiedSkillContent(false), 2000);
            }
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    return (
        <div className="min-h-screen pb-20 bg-[#030712] text-slate-100 font-sans selection:bg-blue-500/30">
            {/* Header Section */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[30%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wide uppercase mb-6">
                                <Globe size={12} />
                                Global Venture Builder
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
                                Build Global Service
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                    Antigravity + Claude + PayPal
                                </span>
                            </h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right hidden md:block">
                                <div className="text-xs text-slate-500 font-mono mb-1">STRATEGY</div>
                                <div className="text-sm font-bold text-slate-300">ASCFP</div>
                            </div>
                            <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
                            <div className="text-right hidden md:block">
                                <div className="text-xs text-slate-500 font-mono mb-1">ROI FOCUS</div>
                                <div className="text-sm font-bold text-slate-300">Profit Architect</div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-12">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-400/10 rounded-xl text-blue-400 shrink-0">
                                <DollarSign size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">핵심 목표</h3>
                                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                                    <span className="text-white font-semibold underline decoration-blue-500/50 underline-offset-4">안티그래비티(Antigravity)</span>를 중심으로 클로드 코드(Claude Code)와 페이팔 MCP를 결합하여
                                    <span className="text-blue-400 font-semibold"> 글로벌 수익 창출 모델</span>을 구축합니다.
                                    단순한 개발을 넘어, 실제 결제가 일어나는 비즈니스 엔진을 만드는 에이전틱 스킬을 학습합니다.
                                </p>
                                <a
                                    href="https://youtu.be/xoY7bOD9Dkc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all font-semibold text-sm group"
                                >
                                    <PlayCircle size={20} className="group-hover:scale-110 transition-transform" />
                                    영상으로 보기: 클로드 코드 + 페이팔 MCP로 글로벌 서비스 만들기
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Step 1: Claude Code */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Cpu size={18} />
                            </div>
                            <h2 className="text-2xl font-bold text-white">1. Claude Code 설치</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[24px] opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                                <div className="relative bg-[#0f172a] rounded-[22px] overflow-hidden border border-white/5 shadow-2xl">
                                    <div className="flex items-center justify-between px-6 py-4 bg-[#020617] border-b border-white/5">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">macOS / Linux / WSL</div>
                                        <button
                                            onClick={() => handleCopyClick('claude')}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-with-all ${copiedClaude ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                                        >
                                            {copiedClaude ? <><CheckCircle size={14} /><span>복사 완료!</span></> : <><Copy size={14} /><span>설치 명령어 복사</span></>}
                                        </button>
                                    </div>
                                    <div className="p-6 font-mono text-sm text-blue-300 bg-[#0f172a]">
                                        {claudeInstall}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-wider">Windows PowerShell</div>
                                    <code className="text-xs text-slate-400 break-all bg-black/20 p-2 rounded block">irm https://claude.ai/install.ps1 | iex</code>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-wider">Windows CMD</div>
                                    <code className="text-xs text-slate-400 break-all bg-black/20 p-2 rounded block">curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd</code>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Skill Prompt */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <Zap size={18} />
                            </div>
                            <h2 className="text-2xl font-bold text-white">2. Money Website 스킬 자동 생성 프롬프트</h2>
                        </div>

                        <p className="text-slate-400 mb-6 text-sm">
                            아래 프롬프트 전체를 복사해서 <span className="text-blue-400 font-semibold underline decoration-blue-500/30">안티그래비티</span>에게 입력하세요.
                            자동으로 필요한 디렉토리를 생성하고 <code className="text-blue-400">SKILL.md</code> 파일을 완벽하게 세팅해 줍니다. 🚀
                        </p>

                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[24px] opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                            <div className="relative bg-[#0f172a] rounded-[22px] overflow-hidden border border-white/5 shadow-2xl">
                                <div className="flex items-center justify-between px-6 py-4 bg-[#020617] border-b border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                                        </div>
                                        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">Antigravity Meta Prompt</div>
                                    </div>
                                    <button
                                        onClick={() => handleCopyClick('skillContent')}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-all ${copiedSkillContent ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20'}`}
                                    >
                                        {copiedSkillContent ? <><CheckCircle size={14} /><span>복사 완료!</span></> : <><Copy size={14} /><span>전체 프롬프트 복사하기</span></>}
                                    </button>
                                </div>
                                <div className="relative">
                                    <pre className="p-8 text-sm text-slate-300 font-mono leading-relaxed h-[600px] overflow-y-auto whitespace-pre-wrap bg-[#0f172a] custom-scrollbar">
                                        {skillContent}
                                    </pre>
                                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROI Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Rapid MVP', desc: '아이디어 회의부터 첫 배포까지 1시간 내 완료' },
                            { title: 'Global UI', desc: '클로드 코드를 통한 완벽한 영어 UI 자동 생성' },
                            { title: 'Auto Monetize', desc: '페이팔 MCP를 연동한 자동 결제 시스템 구축' }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/[0.08]">
                                <div className="text-blue-400 font-bold mb-2">0{idx + 1}. {item.title}</div>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CopyrightModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={executeCopy}
            />
        </div>
    );
};

export default GlobalVentureSkillPage;
