import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Lock } from 'lucide-react';


const AIAgentBasicsTextbook: React.FC = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // null = 로딩중
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [userName, setUserName] = useState<string>(''); // 추후 사용 예정

    // 로그인 체크
    useEffect(() => {
        const userInfo = sessionStorage.getItem('aicitybuilders_user_session');
        if (userInfo) {
            try {
                const parsed = JSON.parse(userInfo);
                setIsLoggedIn(true);
                setUserName(parsed.name || parsed.email?.split('@')[0] || '');
            } catch {
                setIsLoggedIn(false);
            }
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    // 로딩 중
    if (isLoggedIn === null) {
        return (
            <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    color: '#6b7280'
                }}>
                    로딩 중...
                </div>
            </div>
        );
    }

    // 로그인 필요
    if (!isLoggedIn) {
        return (
            <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    padding: '20px',
                    textAlign: 'center'
                }}>
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        padding: '50px 40px',
                        maxWidth: '450px',
                        width: '100%',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                        border: '1px solid #e5e7eb'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 25px'
                        }}>
                            <Lock size={36} color="white" />
                        </div>
                        <h2 style={{
                            color: '#111827',
                            fontSize: '1.6rem',
                            fontWeight: '700',
                            marginBottom: '15px'
                        }}>
                            로그인이 필요합니다
                        </h2>
                        <p style={{
                            color: '#6b7280',
                            fontSize: '1rem',
                            lineHeight: '1.7',
                            marginBottom: '30px'
                        }}>
                            이 교재는 AI City Builders 회원 전용 콘텐츠입니다.<br />
                            로그인 후 이용해 주세요.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => navigate('/login')}
                                style={{
                                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '14px 32px',
                                    borderRadius: '12px',
                                    fontSize: '1rem',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(245,158,11,0.3)'
                                }}
                            >
                                로그인하기
                            </button>
                            <button
                                onClick={() => navigate('/signup')}
                                style={{
                                    background: 'transparent',
                                    color: '#374151',
                                    border: '2px solid #d1d5db',
                                    padding: '14px 28px',
                                    borderRadius: '12px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                회원가입
                            </button>
                        </div>
                        <button
                            onClick={() => navigate('/prompts')}
                            style={{
                                background: 'transparent',
                                color: '#9ca3af',
                                border: 'none',
                                padding: '12px',
                                marginTop: '20px',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}
                        >
                            ← 돌아가기
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('📋 복사되었습니다!');
    };

    const agentsMdContent = `# Agent Instructions

> This file is mirrored across CLAUDE.md, AGENTS.md, and GEMINI.md so the same instructions load in any AI environment.

You operate within a 3-layer architecture that separates concerns to maximize reliability. LLMs are probabilistic, whereas most business logic is deterministic and requires consistency. This system fixes that mismatch.

## Language

**Always respond in Korean (한국어).** All communications, explanations, error messages, and reports must be written in Korean. Code comments can remain in English for maintainability.

## The 3-Layer Architecture

**Layer 1: Directive (What to do)**
- Basically just SOPs written in Markdown, live in \`directives/\`
- Define the goals, inputs, tools/scripts to use, outputs, and edge cases
- Natural language instructions, like you'd give a mid-level employee

**Layer 2: Orchestration (Decision making)**
- This is you. Your job: intelligent routing.
- Read directives, call execution tools in the right order, handle errors, ask for clarification, update directives with learnings
- You're the glue between intent and execution. E.g you don't try scraping websites yourself—you read \`directives/scrape_website.md\` and come up with inputs/outputs and then run \`execution/scrape_single_site.py\`

**Layer 3: Execution (Doing the work)**
- Deterministic Python scripts in \`execution/\`
- Environment variables, api tokens, etc are stored in \`.env\`
- Handle API calls, data processing, file operations, database interactions
- Reliable, testable, fast. Use scripts instead of manual work. Commented well.

**Why this works:** if you do everything yourself, errors compound. 90% accuracy per step = 59% success over 5 steps. The solution is push complexity into deterministic code. That way you just focus on decision-making.

## Operating Principles

**1. Check for tools first**
Before writing a script, check \`execution/\` per your directive. Only create new scripts if none exist.

**2. Self-anneal when things break**
- Read error message and stack trace
- Fix the script and test it again (unless it uses paid tokens/credits/etc—in which case you check w user first)
- Update the directive with what you learned (API limits, timing, edge cases)
- Example: you hit an API rate limit → you then look into API → find a batch endpoint that would fix → rewrite script to accommodate → test → update directive.

**3. Update directives as you learn**
Directives are living documents. When you discover API constraints, better approaches, common errors, or timing expectations—update the directive. But don't create or overwrite directives without asking unless explicitly told to. Directives are your instruction set and must be preserved (and improved upon over time, not extemporaneously used and then discarded).

## Self-annealing loop

Errors are learning opportunities. When something breaks:
1. Fix it
2. Update the tool
3. Test tool, make sure it works
4. Update directive to include new flow
5. System is now stronger

## File Organization

**Deliverables vs Intermediates:**
- **Deliverables**: Google Sheets, Google Slides, or other cloud-based outputs that the user can access
- **Intermediates**: Temporary files needed during processing

**Directory structure:**
- \`.tmp/\` - All intermediate files (dossiers, scraped data, temp exports). Never commit, always regenerated.
- \`execution/\` - Python scripts (the deterministic tools)
- \`directives/\` - SOPs in Markdown (the instruction set)
- \`.env\` - Environment variables and API keys
- \`credentials.json\`, \`token.json\` - Google OAuth credentials (required files, in \`.gitignore\`)

**Key principle:** Local files are only for processing. Deliverables live in cloud services (Google Sheets, Slides, etc.) where the user can access them. Everything in \`.tmp/\` can be deleted and regenerated.

## Summary

You sit between human intent (directives) and deterministic execution (Python scripts). Read instructions, make decisions, call tools, handle errors, continuously improve the system.

Be pragmatic. Be reliable. Self-anneal.`;

    const sectionStyle = {
        background: '#ffffff',
        borderRadius: '12px',
        padding: '35px 40px',
        marginBottom: '30px',
        border: '1px solid #e5e7eb'
    };

    const h2Style = {
        color: '#111827',
        fontSize: '1.6rem',
        fontWeight: '700' as const,
        marginBottom: '25px',
        paddingBottom: '15px',
        borderBottom: '2px solid #e5e7eb'
    };

    const h3Style = {
        color: '#374151',
        fontSize: '1.2rem',
        fontWeight: '600' as const,
        marginBottom: '12px'
    };

    const pStyle = {
        color: '#4b5563',
        lineHeight: '1.9',
        fontSize: '1.05rem',
        margin: '0 0 20px'
    };

    return (
        <div style={{ minHeight: '100vh', background: '#f9fafb' }}>

            {/* 헤더 */}
            <section style={{
                padding: '50px 24px 40px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <button
                    onClick={() => navigate('/prompts')}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#ffffff',
                        border: '1px solid #d1d5db',
                        color: '#6b7280',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginBottom: '30px',
                        fontSize: '0.9rem'
                    }}
                >
                    <ArrowLeft size={16} />
                    돌아가기
                </button>

                <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '10px', fontWeight: '500' }}>
                    AI 수익화 야학당 교재
                </p>

                <h1 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                    fontWeight: '800',
                    color: '#111827',
                    marginBottom: '20px',
                    lineHeight: '1.4'
                }}>
                    자동화 에이전트의 기초:<br />
                    노코드에서 에이전틱(Agentic)까지
                </h1>

                <div style={{
                    color: '#4b5563',
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    padding: '20px 25px',
                    background: '#ffffff',
                    borderRadius: '10px',
                    border: '1px solid #e5e7eb'
                }}>
                    <strong style={{ color: '#111827' }}>🎯 강의 목표:</strong> 코딩을 몰라도 나만의 자동화 비서를 만드는 법.
                    과거의 방식(n8n)과 미래의 방식(Antigravity)을 이해하고, 진짜 '일 잘하는 AI'를 부리는 방법을 배웁니다.
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
                    <h2 style={h2Style}>1. 노코딩(No-Code)이란 무엇인가?</h2>

                    <h3 style={h3Style}>🧩 정의</h3>
                    <p style={pStyle}>
                        복잡한 프로그래밍 언어를 타이핑하는 대신, <strong>마우스 클릭과 드래그 앤 드롭</strong>만으로 프로그램이나 서비스를 만드는 기술입니다.
                    </p>

                    <h3 style={h3Style}>🍳 쉬운 비유: 요리</h3>
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ padding: '15px 20px', background: '#fef2f2', borderRadius: '8px', marginBottom: '12px' }}>
                            <strong style={{ color: '#991b1b' }}>코딩 (Coding):</strong>
                            <span style={{ color: '#4b5563', marginLeft: '10px' }}>밀가루 반죽부터 시작해 면을 뽑고, 육수를 직접 우려내어 요리하는 것. (자유도 높음, 어려움)</span>
                        </div>
                        <div style={{ padding: '15px 20px', background: '#f0fdf4', borderRadius: '8px' }}>
                            <strong style={{ color: '#166534' }}>노코딩 (No-Code):</strong>
                            <span style={{ color: '#4b5563', marginLeft: '10px' }}>밀키트나 레고 블록. 이미 만들어진 재료를 설명서대로 조립. (쉽고 빠름, 정해진 틀이 있음)</span>
                        </div>
                    </div>

                    <h3 style={h3Style}>🚀 왜 등장했나?</h3>
                    <ol style={{ color: '#4b5563', lineHeight: '1.9', paddingLeft: '20px', fontSize: '1.05rem', margin: 0 }}>
                        <li style={{ marginBottom: '8px' }}><strong>개발자 부족:</strong> 아이디어는 많은데 그걸 만들 개발자가 너무 부족하고 비쌉니다.</li>
                        <li><strong>시민 개발자:</strong> 마케터, 기획자, 사장님들도 "내 업무는 내가 제일 잘 아니까, 직접 자동화하고 싶다"는 니즈가 폭발했습니다.</li>
                    </ol>
                </div>

                {/* 섹션 2 */}
                <div style={sectionStyle}>
                    <h2 style={h2Style}>2. 노코드 자동화 에이전트의 종류</h2>

                    <p style={pStyle}>현재 가장 많이 쓰이는 두 가지 스타일의 도구를 비교해 봅니다.</p>

                    <div style={{ overflowX: 'auto', marginBottom: '25px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                            <thead>
                                <tr style={{ background: '#f3f4f6' }}>
                                    <th style={{ padding: '14px', textAlign: 'left', color: '#374151', borderBottom: '1px solid #e5e7eb' }}>구분</th>
                                    <th style={{ padding: '14px', textAlign: 'left', color: '#374151', borderBottom: '1px solid #e5e7eb' }}>Google OPAL</th>
                                    <th style={{ padding: '14px', textAlign: 'left', color: '#374151', borderBottom: '1px solid #e5e7eb' }}>n8n</th>
                                </tr>
                            </thead>
                            <tbody style={{ color: '#4b5563' }}>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '14px', fontWeight: '500' }}>특징</td>
                                    <td style={{ padding: '14px' }}>구글 AI(Gemini 등) 탑재</td>
                                    <td style={{ padding: '14px' }}>업무 자동화의 표준 툴</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '14px', fontWeight: '500' }}>장점</td>
                                    <td style={{ padding: '14px' }}>글쓰기, 이미지 생성 등 창작에 강함</td>
                                    <td style={{ padding: '14px' }}>CRM 연동, 이메일 발송 등 연결에 강함</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '14px', fontWeight: '500' }}>비유</td>
                                    <td style={{ padding: '14px' }}>🎨 천재 작가 조수</td>
                                    <td style={{ padding: '14px' }}>🏭 꼼꼼한 공장장</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '14px', fontWeight: '500' }}>한계</td>
                                    <td style={{ padding: '14px' }}>복잡한 업무 순서 처리 힘듦</td>
                                    <td style={{ padding: '14px', color: '#dc2626', fontWeight: '500' }}>노코드인데 코딩만큼 어려워짐</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{ background: '#fef2f2', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                        <h4 style={{ color: '#991b1b', margin: '0 0 10px', fontSize: '1.1rem' }}>⚠️ n8n의 딜레마</h4>
                        <p style={{ color: '#4b5563', margin: 0, lineHeight: '1.8' }}>
                            자동화가 고도화될수록 JSON, 자바스크립트 등 <strong>결국 코딩 지식이 필요</strong>해집니다. 에러가 발생하면 전체 시스템이 멈추고, 사람이 직접 고쳐야 합니다.
                        </p>
                    </div>
                </div>

                {/* 섹션 3 */}
                <div style={sectionStyle}>
                    <h2 style={h2Style}>3. 게임 체인저: 에이전틱 워크플로우</h2>

                    <p style={pStyle}>
                        이제 우리는 <strong>내가 직접 조립하는 시대</strong>에서 <strong>AI에게 조립을 시키는 시대</strong>로 넘어가고 있습니다.
                    </p>

                    <h3 style={h3Style}>🤖 에이전틱(Agentic)이란?</h3>
                    <p style={pStyle}>
                        단순히 시키는 일만 하는 게 아니라, <strong>스스로 생각하고, 계획을 짜고, 문제를 해결하는</strong> 능동적인 AI를 말합니다. (예: 구글 Antigravity)
                    </p>

                    <h3 style={h3Style}>🆚 기존 방식 vs 에이전틱 방식</h3>
                    <p style={{ ...pStyle, color: '#6b7280', fontStyle: 'italic' }}>상황: 매일 아침 뉴스 요약해서 이메일 보내줘.</p>

                    <div style={{ marginBottom: '15px', padding: '20px', background: '#fef2f2', borderRadius: '8px' }}>
                        <strong style={{ color: '#991b1b' }}>기존 방식 (n8n):</strong>
                        <ol style={{ color: '#4b5563', margin: '10px 0 10px 20px', lineHeight: '1.8' }}>
                            <li>RSS 피드 노드 가져와서 URL 입력</li>
                            <li>필터 노드 연결해서 날짜 설정</li>
                            <li>이메일 노드 연결해서 수신자 설정</li>
                            <li>(에러 발생 시) 사람이 직접 수정</li>
                        </ol>
                        <p style={{ color: '#dc2626', margin: 0, fontWeight: '600' }}>👉 "어떻게(How)" 할지 사람이 다 정해줘야 함</p>
                    </div>

                    <div style={{ marginBottom: '20px', padding: '20px', background: '#f0fdf4', borderRadius: '8px' }}>
                        <strong style={{ color: '#166534' }}>에이전틱 방식 (Antigravity):</strong>
                        <p style={{ color: '#4b5563', margin: '10px 0', lineHeight: '1.8' }}>
                            명령: "최근 뉴스 긁어와서 요약해서 나한테 보고해. 방법은 네가 알아서 찾아."<br />
                            (에러 발생 시) AI: "어? RSS 주소가 바뀌었네? 내가 찾아서 수정하고 다시 보냈어."
                        </p>
                        <p style={{ color: '#16a34a', margin: 0, fontWeight: '600' }}>👉 "무엇을(What)" 원하는지만 말하면 됨</p>
                    </div>

                    <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
                        <h4 style={{ color: '#166534', margin: '0 0 10px', fontSize: '1.1rem' }}>✨ 핵심 기능: 자가 치유 (Self-Healing)</h4>
                        <p style={{ color: '#4b5563', margin: 0, lineHeight: '1.8' }}>
                            에이전트가 코드를 실행하다가 에러가 나면, 멈추지 않고 <strong>스스로 코드를 고쳐서 다시 실행</strong>합니다. 이것이 바로 '바이브 코딩'의 핵심입니다.
                        </p>
                    </div>
                </div>

                {/* 섹션 4 */}
                <div style={sectionStyle}>
                    <h2 style={h2Style}>4. D.O.E 프레임워크</h2>

                    <p style={pStyle}>
                        앞으로 여러분이 갖춰야 할 능력은 코딩 실력이 아니라, AI에게 일을 잘 시키는 <strong>기획력</strong>입니다.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ padding: '20px', background: '#f3f4f6', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                                <span style={{ background: '#374151', color: 'white', padding: '6px 14px', borderRadius: '6px', fontWeight: '700' }}>D</span>
                                <h4 style={{ margin: 0, color: '#111827', fontSize: '1.1rem' }}>Directive (지시) - Layer 1</h4>
                            </div>
                            <p style={{ color: '#4b5563', margin: 0, lineHeight: '1.7' }}>
                                <strong>역할: 사장님 (여러분)</strong> — "무엇을 만들고 싶은지" 명확한 작업 지시서(SOP)를 주는 것. AGENTS.md 파일을 정의하는 단계.
                            </p>
                        </div>

                        <div style={{ padding: '20px', background: '#f3f4f6', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                                <span style={{ background: '#374151', color: 'white', padding: '6px 14px', borderRadius: '6px', fontWeight: '700' }}>O</span>
                                <h4 style={{ margin: 0, color: '#111827', fontSize: '1.1rem' }}>Orchestration (조율) - Layer 2</h4>
                            </div>
                            <p style={{ color: '#4b5563', margin: 0, lineHeight: '1.7' }}>
                                <strong>역할: 관리자 (AI 에이전트)</strong> — 지시서를 보고 어떤 도구가 필요한지 판단하고, 계획을 세우고, 실행을 감독.
                            </p>
                        </div>

                        <div style={{ padding: '20px', background: '#f3f4f6', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                                <span style={{ background: '#374151', color: 'white', padding: '6px 14px', borderRadius: '6px', fontWeight: '700' }}>E</span>
                                <h4 style={{ margin: 0, color: '#111827', fontSize: '1.1rem' }}>Execution (실행) - Layer 3</h4>
                            </div>
                            <p style={{ color: '#4b5563', margin: 0, lineHeight: '1.7' }}>
                                <strong>역할: 실무자 (파이썬 스크립트)</strong> — 실제로 데이터를 긁어오고, 파일을 만들고, 메일을 보내는 작업. (AI가 자동 작성)
                            </p>
                        </div>
                    </div>
                </div>

                {/* 부록: AGENTS.md */}
                <div style={{ ...sectionStyle, background: '#fffbeb', border: '1px solid #fde68a' }}>
                    <h2 style={{ ...h2Style, borderBottom: '2px solid #fde68a' }}>🎁 부록: 에이전트 초기 설정 파일 (AGENTS.md)</h2>

                    <p style={pStyle}>
                        안티그래비티 같은 툴을 쓸 때, 아래 내용을 복사해서 AGENTS.md 파일을 만들면 AI가 천재 비서처럼 일하기 시작합니다.
                    </p>

                    <div style={{ background: '#ffffff', padding: '15px 20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #fde68a' }}>
                        <p style={{ color: '#4b5563', margin: 0, fontSize: '0.95rem' }}>
                            <strong>사용법:</strong> 프로젝트 폴더에 <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: '4px' }}>AGENTS.md</code> 파일을 만들고 아래 내용을 붙여넣으세요.
                            그 후 채팅창에 <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: '4px' }}>Instantiate based on AGENTS.md</code>라고 입력하세요.
                        </p>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => copyToClipboard(agentsMdContent)}
                            style={{
                                position: 'absolute',
                                top: '12px',
                                right: '12px',
                                background: '#111827',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                zIndex: 10
                            }}
                        >
                            <Copy size={16} /> 복사하기
                        </button>
                        <pre style={{
                            background: '#1f2937',
                            padding: '25px',
                            paddingTop: '60px',
                            borderRadius: '10px',
                            overflow: 'auto',
                            fontSize: '0.9rem',
                            lineHeight: '1.7',
                            color: '#e5e7eb',
                            maxHeight: '500px'
                        }}>
                            {agentsMdContent}
                        </pre>
                    </div>
                </div>

                {/* 오늘의 요약 */}
                <div style={sectionStyle}>
                    <h2 style={h2Style}>📝 오늘의 요약</h2>

                    <ol style={{ color: '#4b5563', lineHeight: '2', paddingLeft: '25px', fontSize: '1.05rem', margin: 0 }}>
                        <li style={{ marginBottom: '10px' }}>노코드는 쉬운 시작이었지만, 복잡한 업무에는 한계(n8n의 복잡성)가 있었다.</li>
                        <li style={{ marginBottom: '10px' }}>이제는 툴을 직접 만지는 게 아니라, AI에게 일을 시키는 <strong>에이전틱 워크플로우</strong> 시대다.</li>
                        <li style={{ marginBottom: '10px' }}><strong>자가 치유(Self-Healing)</strong> 덕분에 유지보수 스트레스에서 해방된다.</li>
                        <li>우리는 <strong>"무엇을(What)"</strong> 만들지만 고민하면 된다. <strong>"어떻게(How)"</strong>는 AI가 한다.</li>
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default AIAgentBasicsTextbook;
