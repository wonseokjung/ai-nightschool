import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Image, Video, Zap } from 'lucide-react'



// 교재 데이터 - App.tsx 라우트에 실제 존재하는 페이지만 포함
const textbooks = [
    {
        id: 'chatgpt-prompts-40plus',
        category: 'prompts',
        title: '40대+ 직장인을 위한 ChatGPT 프롬프트 100선',
        subtitle: '실전 업무 최적화 프롬프트 모음',
        description: '경험 많은 직장인을 위한 AI 활용 가이드북. 보고서, 이메일, 기획안 작성에 바로 쓸 수 있는 프롬프트!',
        isNew: true
    },
    {
        id: 'ai-money-master-prompts',
        category: 'prompts',
        title: 'AI Business Prompt Vault',
        subtitle: '기획부터 마케팅까지 38개 실전 프롬프트',
        description: '디지털 제품·콘텐츠 가치 창출을 위한 비즈니스 프롬프트 패키지',
        isNew: false
    },
    {
        id: 'ai-money-image-prompts',
        category: 'images',
        title: 'AI 비즈니스 이미지 생성 프롬프트 10선',
        subtitle: '썸네일부터 제품 사진까지',
        description: 'Gemini, ChatGPT, Midjourney로 만드는 상업용 고퀄리티 이미지',
        isNew: false
    },
    {
        id: 'ai-money-video-prompts',
        category: 'video',
        title: 'AI 커머셜 비디오 생성 프롬프트 10선',
        subtitle: '숏폼부터 브랜드 광고까지',
        description: 'Google Veo, Runway, Pika로 만드는 프로급 상업 영상 가이드',
        isNew: false
    },
    {
        id: 'andrew-ng-ai-vision',
        category: 'automation',
        title: '앤드류 응의 AI 비전: 지금 바로 만들어라',
        subtitle: '코딩보다 기획이 중요한 시대의 생존 전략',
        description: 'AI 거장 앤드류 응이 말하는 AI Agent 시대의 기회와 전략',
        isNew: true
    }
]

const categoryInfo: Record<string, { name: string; icon: React.ElementType; color: string; description: string }> = {
    prompts: {
        name: '📝 프롬프트',
        icon: BookOpen,
        color: '#8b5cf6',
        description: 'ChatGPT, Gemini 등 텍스트 AI를 위한 프롬프트 모음'
    },
    images: {
        name: '🖼️ 이미지 생성',
        icon: Image,
        color: '#10b981',
        description: 'Midjourney, DALL-E, Gemini 이미지 생성 프롬프트'
    },
    video: {
        name: '🎬 영상 생성',
        icon: Video,
        color: '#ef4444',
        description: 'Veo, Runway, Pika 등 AI 영상 생성 가이드'
    },
    automation: {
        name: '🤖 자동화',
        icon: Zap,
        color: '#3b82f6',
        description: 'AI 에이전트, n8n, 자동화 워크플로우 구축'
    }
}

const CategoryPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>()
    const category = categoryInfo[categoryId || 'prompts']
    const categoryTextbooks = textbooks.filter(t => t.category === categoryId)

    if (!category) {
        return (
            <div style={{ padding: '100px 24px', textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>카테고리를 찾을 수 없습니다</h1>
                <Link to="/" style={{ color: '#f59e0b' }}>홈으로 돌아가기</Link>
            </div>
        )
    }

    return (
        <div>
            {/* Header */}
            <section style={{
                padding: '40px 24px 60px',
                background: 'linear-gradient(180deg, #0a0a1a 0%, #0d1527 100%)',
                textAlign: 'center'
            }}>
                <Link
                    to="/"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        marginBottom: '30px',
                        fontSize: '0.9rem'
                    }}
                >
                    <ArrowLeft size={18} />
                    홈으로 돌아가기
                </Link>

                <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 20px',
                    borderRadius: '20px',
                    background: `${category.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <category.icon size={40} color={category.color} />
                </div>

                <h1 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    fontWeight: 800,
                    color: 'white',
                    marginBottom: '12px'
                }}>
                    {category.name}
                </h1>

                <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '1.1rem',
                    maxWidth: '500px',
                    margin: '0 auto'
                }}>
                    {category.description}
                </p>
            </section>

            {/* Ad Banner */}


            {/* Textbooks Grid */}
            <section style={{
                padding: '40px 24px 80px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '24px'
                }}>
                    <h2 style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'white'
                    }}>
                        총 {categoryTextbooks.length}개 교재
                    </h2>
                </div>

                {categoryTextbooks.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '60px 20px',
                        color: 'rgba(255, 255, 255, 0.5)'
                    }}>
                        <p style={{ fontSize: '3rem', marginBottom: '16px' }}>📚</p>
                        <p>아직 이 카테고리에 교재가 없습니다.</p>
                        <p>곧 추가될 예정이에요!</p>
                    </div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '24px'
                    }}>
                        {categoryTextbooks.map((textbook) => (
                            <Link
                                key={textbook.id}
                                to={`/textbook/${textbook.id}`}
                                style={{
                                    background: 'var(--color-bg-card)',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                {/* Image Placeholder */}
                                <div style={{
                                    height: '160px',
                                    background: `linear-gradient(135deg, ${category.color}20, ${category.color}05)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}>
                                    <span style={{ fontSize: '4rem' }}>📚</span>
                                    {textbook.isNew && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '12px',
                                            left: '12px',
                                            background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                                            color: '#0a0f1a',
                                            padding: '6px 12px',
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            fontWeight: 700
                                        }}>
                                            NEW
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{
                                        color: 'white',
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        marginBottom: '8px',
                                        lineHeight: 1.3
                                    }}>
                                        {textbook.title}
                                    </h3>
                                    <p style={{
                                        color: category.color,
                                        fontSize: '0.85rem',
                                        fontWeight: 500,
                                        marginBottom: '8px'
                                    }}>
                                        {textbook.subtitle}
                                    </p>
                                    <p style={{
                                        color: '#64748b',
                                        fontSize: '0.85rem',
                                        lineHeight: 1.5,
                                        flex: 1
                                    }}>
                                        {textbook.description}
                                    </p>

                                    <button style={{
                                        marginTop: '16px',
                                        width: '100%',
                                        background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                                        color: '#0a0f1a',
                                        padding: '12px',
                                        borderRadius: '10px',
                                        fontWeight: 700,
                                        fontSize: '0.9rem'
                                    }}>
                                        무료로 보기
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            {/* Bottom Ad */}

        </div>
    )
}

export default CategoryPage
