import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Image, Video, Zap, Box, Terminal, Layout, Server } from 'lucide-react'
import { textbooks, categories } from '../data/textbooks'
import React, { useEffect } from 'react'

// Map category IDs to Lucide icons
const iconMap: Record<string, React.ElementType> = {
    skills: Zap,
    prompts: BookOpen,
    mcp: Server,
    workflows: Layout,
    images: Image,
    video: Video,
    automation: Terminal
}

const CategoryPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryId]);

    // Get category info from data/textbooks.ts
    const categoryData = categories[categoryId || 'prompts']

    // Get related textbooks
    const categoryTextbooks = textbooks.filter(t => t.category === categoryId)

    if (!categoryData) {
        return (
            <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
                <h1 style={{ color: 'white', marginBottom: '20px' }}>모듈을 찾을 수 없습니다</h1>
                <button onClick={() => navigate('/')} className="btn btn-secondary">메인으로 돌아가기</button>
            </div>
        )
    }

    const IconComponent = iconMap[categoryId || 'prompts'] || Box

    return (
        <div style={{ paddingBottom: '80px' }}>
            {/* Header */}
            <section style={{
                position: 'relative',
                padding: '80px 24px 60px',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Glow */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60%',
                    height: '60%',
                    background: `radial-gradient(circle at center, ${categoryData.color}15 0%, transparent 70%)`,
                    zIndex: -1,
                    filter: 'blur(80px)'
                }} />

                <div className="container">
                    <button
                        onClick={() => navigate('/')}
                        className="btn btn-secondary"
                        style={{
                            display: 'inline-flex',
                            marginBottom: '40px',
                            padding: '8px 20px',
                            fontSize: '0.85rem'
                        }}
                    >
                        <ArrowLeft size={16} style={{ marginRight: '8px' }} />
                        허브로 돌아가기
                    </button>

                    <div style={{
                        width: '80px',
                        height: '80px',
                        margin: '0 auto 24px',
                        borderRadius: '24px',
                        background: `linear-gradient(135deg, ${categoryData.color}20, ${categoryData.color}10)`,
                        border: `1px solid ${categoryData.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 0 30px ${categoryData.color}20`
                    }}>
                        <IconComponent size={40} color={categoryData.color} />
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        color: 'white',
                        marginBottom: '16px',
                        letterSpacing: '-0.02em'
                    }}>
                        {categoryData.name} <span className="text-gradient">Hub</span>
                    </h1>

                    <p style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '1.1rem',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        {categoryData.description}
                    </p>
                </div>
            </section>

            {/* Textbooks Grid */}
            <section className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '32px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <h2 style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Box size={20} className="text-gradient" />
                        사용 가능한 리소스
                        <span style={{
                            fontSize: '0.85rem',
                            background: 'rgba(255,255,255,0.1)',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            color: '#94a3b8'
                        }}>
                            {categoryTextbooks.length}
                        </span>
                    </h2>
                </div>

                {categoryTextbooks.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '80px 20px',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '24px',
                        border: '1px dashed rgba(255,255,255,0.1)'
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '20px', opacity: 0.5 }}>🚧</div>
                        <h3 style={{ color: 'white', marginBottom: '8px' }}>리소스를 찾을 수 없습니다</h3>
                        <p style={{ color: '#94a3b8' }}>이 카테고리의 새로운 콘텐츠는 현재 준비 중입니다.</p>
                    </div>
                ) : (
                    <div className="textbook-grid">
                        {categoryTextbooks.map((textbook) => (
                            <Link
                                key={textbook.id}
                                to={`/textbook/${textbook.id}`}
                                className="card"
                                style={{ display: 'flex', flexDirection: 'column' }}
                            >
                                {/* Simplied Card Header */}
                                <div style={{
                                    padding: '24px 24px 0',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center'
                                }}>
                                    {textbook.isNew && (
                                        <div className="badge badge-new" style={{
                                            zIndex: 3,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                                        }}>
                                            NEW
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{
                                        color: 'white',
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        marginBottom: '8px',
                                        lineHeight: 1.4,
                                        letterSpacing: '-0.01em'
                                    }}>
                                        {textbook.title}
                                    </h3>

                                    <p style={{
                                        color: '#94a3b8',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.6,
                                        flex: 1,
                                        marginBottom: '24px'
                                    }}>
                                        {textbook.description}
                                    </p>

                                    <button className="btn btn-primary" style={{ width: '100%' }}>
                                        리소스 확인하기
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}

export default CategoryPage
