import { Link } from 'react-router-dom'
import { Search, ArrowRight, Sparkles, Zap, Box } from 'lucide-react'
import { useState } from 'react'
import { textbooks, categories, getCategoryCount } from '../data/textbooks'

const HomePage = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    const filters = [
        { id: 'all', label: '전체' },
        { id: 'skills', label: '스킬' },
        { id: 'prompts', label: '프롬프트' },
        { id: 'mcp', label: 'MCP' },
        { id: 'workflows', label: '워크플로우' }
    ]

    const filteredTextbooks = textbooks.filter(t => {
        if (activeFilter !== 'all' && t.category !== activeFilter) return false
        if (searchQuery && !t.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
        return true
    })

    // Trending Categories (Focus on the new main ones)
    const trendingCategories = ['skills', 'prompts', 'mcp', 'workflows'].map(id => ({
        ...categories[id],
        count: getCategoryCount(id)
    }))

    return (
        <div style={{ paddingBottom: '80px' }}>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                padding: '120px 24px 100px',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Decoration */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '80%',
                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
                    zIndex: -1,
                    filter: 'blur(80px)'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Badge */}
                    <div className="badge badge-new" style={{ marginBottom: '32px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                        <Sparkles size={14} style={{ color: '#fbbf24' }} />
                        <span>ANTIGRAVITY SYSTEM V2.0 // VIBE CODING</span>
                    </div>

                    {/* Title */}
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: 800,
                        marginBottom: '24px',
                        lineHeight: 1.1,
                        letterSpacing: '-0.03em'
                    }}>
                        Antigravity<br />
                        <span className="text-gradient">Vibe Coding Hub</span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '1.2rem',
                        maxWidth: '640px',
                        margin: '0 auto 48px',
                        lineHeight: 1.6
                    }}>
                        구글의 에이전틱 툴, 바이브 코딩 강의, 그리고 MCP 서버까지.<br />
                        당신의 1인 기업을 위한 모든 무기가 여기에 있습니다.
                    </p>

                    {/* Search Bar */}
                    <div className="search-container" style={{ marginBottom: '60px' }}>
                        <Search
                            size={20}
                            style={{
                                position: 'absolute',
                                left: '24px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'var(--color-text-muted)'
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Search skills, lectures, or MCP servers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <div style={{
                            position: 'absolute',
                            right: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            display: 'flex',
                            gap: '8px'
                        }}>
                            <span style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                color: 'var(--color-text-muted)',
                                padding: '4px 8px',
                                borderRadius: '6px',
                                fontSize: '0.75rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>CMD+K</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="main-layout">
                {/* Left Content */}
                <main>
                    {/* Section Header */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '32px'
                    }}>
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: 'var(--color-text-primary)',
                            letterSpacing: '-0.02em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{
                                width: '10px',
                                height: '10px',
                                background: '#3b82f6',
                                borderRadius: '2px',
                                boxShadow: '0 0 10px #3b82f6'
                            }} />
                            안티그래비티 리소스
                        </h2>
                        <Link to="/category/prompts" style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'color 0.2s'
                        }}>
                            전체 보기 <ArrowRight size={14} />
                        </Link>
                    </div>

                    {/* Filter Tabs */}
                    <div className="filter-tabs">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Textbook Grid */}
                    <div className="textbook-grid">
                        {filteredTextbooks.map((textbook) => (
                            <Link
                                key={textbook.id}
                                to={`/textbook/${textbook.id}`}
                                className="card"
                                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                            >
                                {/* Simplied Card Header */}
                                <div style={{
                                    padding: '24px 24px 0',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span
                                        className="badge badge-category"
                                        style={{
                                            background: 'rgba(59, 130, 246, 0.1)',
                                            border: `1px solid ${categories[textbook.category]?.color || '#3b82f6'}30`,
                                            color: categories[textbook.category]?.color || '#3b82f6',
                                            padding: '4px 10px',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            borderRadius: '6px'
                                        }}
                                    >
                                        <span style={{ marginRight: '6px' }}>{categories[textbook.category]?.icon || '⚡'}</span>
                                        {categories[textbook.category]?.name || 'Module'}
                                    </span>
                                    {textbook.isNew && (
                                        <span className="badge badge-new" style={{ boxShadow: '0 0 10px rgba(245, 158, 11, 0.2)' }}>NEW</span>
                                    )}
                                </div>

                                {/* Card Content */}
                                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        color: '#f8fafc',
                                        marginBottom: '12px',
                                        lineHeight: 1.4,
                                        letterSpacing: '-0.01em'
                                    }}>
                                        {textbook.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#94a3b8',
                                        marginBottom: '20px',
                                        flex: 1,
                                        lineHeight: 1.6
                                    }}>
                                        {textbook.description}
                                    </p>

                                    {/* Footer Meta */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingTop: '16px',
                                        borderTop: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            fontSize: '0.8rem',
                                            color: '#64748b'
                                        }}>
                                            <span>Connect AI LAB</span>
                                        </div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                                            {textbook.readTime}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>

                {/* Right Sidebar */}
                <aside className="sidebar">
                    {/* Trending Modules */}
                    <div className="sidebar-card">
                        <h3 className="sidebar-title">
                            <Zap size={18} style={{ color: '#fbbf24' }} />
                            허브 탐험
                        </h3>
                        <div className="category-list">
                            {trendingCategories.map((cat) => (
                                <Link
                                    key={cat.id}
                                    to={`/category/${cat.id}`}
                                    className="category-item"
                                >
                                    <span className="category-item-name">
                                        <span style={{ opacity: 0.9 }}>{cat.icon}</span>
                                        <span style={{ fontWeight: 500 }}>{cat.name}</span>
                                    </span>
                                    <span className="category-item-count">{cat.count}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="sidebar-card" style={{ marginTop: '24px' }}>
                        <h3 className="sidebar-title">
                            <Box size={18} style={{ color: '#3b82f6' }} />
                            시스템 상태
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                                <span style={{ color: '#94a3b8' }}>Antigravity Engines</span>
                                <span style={{
                                    color: '#10b981',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    padding: '2px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.75rem'
                                }}>정상 작동 중</span>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748b', marginBottom: '6px' }}>
                                    <span>Vibe Coding Index</span>
                                    <span>High</span>
                                </div>
                                <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                                    <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: '2px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default HomePage
