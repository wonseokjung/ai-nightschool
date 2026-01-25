import { Link } from 'react-router-dom'
import { Search, ArrowRight, Eye, Star } from 'lucide-react'
import { useState } from 'react'
import { textbooks, categories, levels, getCategoryCount } from '../data/textbooks'

const HomePage = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    const filters = [
        { id: 'all', label: '전체' },
        { id: 'prompts', label: '프롬프트' },
        { id: 'images', label: '이미지 생성' },
        { id: 'video', label: '영상 생성' },
        { id: 'automation', label: '자동화' }
    ]

    const filteredTextbooks = textbooks.filter(t => {
        if (activeFilter !== 'all' && t.category !== activeFilter) return false
        if (searchQuery && !t.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
        return true
    })

    const popularCategories = Object.values(categories).map(cat => ({
        ...cat,
        count: getCategoryCount(cat.id)
    }))

    return (
        <div>
            {/* Hero Section with Banner Image */}
            <section style={{
                background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
                padding: '40px 24px 60px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(59, 130, 246, 0.15)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        marginBottom: '24px',
                        border: '1px solid rgba(59, 130, 246, 0.3)'
                    }}>
                        <span style={{ color: '#60a5fa', fontSize: '0.8rem' }}>●</span>
                        <span style={{ color: '#60a5fa', fontWeight: 600, fontSize: '0.85rem' }}>
                            NEW V2.0 LIBRARY LIVE
                        </span>
                    </div>




                    {/* Hero Image */}
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto 32px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
                    }}>
                        <img
                            src="/images/hero-banner.jpg"
                            alt="Connect AI LAB"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block'
                            }}
                        />
                    </div>

                    {/* Title */}
                    <h1 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        fontWeight: 800,
                        color: '#f8fafc',
                        marginBottom: '16px',
                        lineHeight: 1.3
                    }}>
                        Connect AI LAB<br />
                        <span style={{ color: '#3b82f6' }}>인공지능 교육 라이브러리</span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        color: '#94a3b8',
                        fontSize: '1rem',
                        maxWidth: '500px',
                        margin: '0 auto 32px',
                        lineHeight: 1.6
                    }}>
                        AI 1인 기업가와 실무자를 위한 고품질 교육 교재.<br />
                        검증된 프롬프트와 실전 가이드를 무료로 만나보세요.
                    </p>

                    {/* Search Bar */}
                    <div style={{
                        maxWidth: '600px',
                        margin: '0 auto 20px',
                        position: 'relative'
                    }}>
                        <Search
                            size={20}
                            style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#64748b'
                            }}
                        />
                        <input
                            type="text"
                            placeholder="프롬프트, 도구 또는 가이드 검색..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '18px 120px 18px 52px',
                                background: '#1e293b',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '14px',
                                color: '#f8fafc',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                        <button style={{
                            position: 'absolute',
                            right: '8px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: '#3b82f6',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '10px',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            검색
                        </button>
                    </div>

                    {/* Popular Searches */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '12px',
                        flexWrap: 'wrap'
                    }}>
                        <span style={{ color: '#64748b', fontSize: '0.85rem' }}>인기:</span>
                        {['ChatGPT 프롬프트', 'Midjourney V6', 'AI 수익화'].map((term) => (
                            <button
                                key={term}
                                onClick={() => setSearchQuery(term)}
                                style={{
                                    color: '#60a5fa',
                                    fontSize: '0.85rem',
                                    background: 'none',
                                    textDecoration: 'underline'
                                }}
                            >
                                {term}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="main-layout">
                {/* Left Content */}
                <main>


                    {/* Latest Textbooks Section */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '32px',
                        marginBottom: '16px'
                    }}>
                        <h2 style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: '#f8fafc'
                        }}>
                            최신 교재 목록
                        </h2>
                        <Link to="/browse" style={{
                            color: '#60a5fa',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}>
                            전체 보기 <ArrowRight size={16} />
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
                                style={{ display: 'block' }}
                            >
                                {/* Card Image */}
                                <div style={{
                                    position: 'relative',
                                    paddingBottom: '56%',
                                    background: 'linear-gradient(135deg, #1e293b, #334155)',
                                    overflow: 'hidden'
                                }}>
                                    {/* Placeholder Icon */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 0
                                    }}>
                                        <span style={{ fontSize: '3rem', opacity: 0.3 }}>
                                            {categories[textbook.category]?.icon || '📚'}
                                        </span>
                                    </div>

                                    {textbook.image ? (
                                        <img
                                            src={textbook.image}
                                            alt={textbook.title}
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                zIndex: 1
                                            }}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none'
                                            }}
                                        />
                                    ) : null}

                                    {/* Badges */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '12px',
                                        left: '12px',
                                        display: 'flex',
                                        gap: '6px'
                                    }}>
                                        <span
                                            className="badge badge-category"
                                            style={{
                                                background: categories[textbook.category]?.color + '30',
                                                color: categories[textbook.category]?.color
                                            }}
                                        >
                                            {categories[textbook.category]?.name}
                                        </span>
                                        {textbook.isNew && (
                                            <span className="badge badge-new">New</span>
                                        )}
                                    </div>

                                    {/* Level Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '12px',
                                        right: '12px'
                                    }}>
                                        <span style={{
                                            background: 'rgba(0, 0, 0, 0.7)',
                                            padding: '4px 10px',
                                            borderRadius: '6px',
                                            fontSize: '0.7rem',
                                            color: levels[textbook.level]?.color
                                        }}>
                                            {levels[textbook.level]?.icon} {levels[textbook.level]?.label}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div style={{ padding: '16px' }}>
                                    <h3 style={{
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        color: '#f8fafc',
                                        marginBottom: '6px',
                                        lineHeight: 1.4,
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {textbook.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.8rem',
                                        color: '#64748b',
                                        marginBottom: '12px',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {textbook.description}
                                    </p>

                                    {/* Meta */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        fontSize: '0.75rem',
                                        color: '#64748b'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <Eye size={14} />
                                            <span>{(textbook.views || 0).toLocaleString()} views</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <Star size={14} fill="#fbbf24" color="#fbbf24" />
                                            <span>4.8</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* 교재 개수가 많을 때만 페이지네이션 표시 */}
                    {filteredTextbooks.length > 8 && (
                        <div className="pagination">
                            <button className="pagination-btn">{'<'}</button>
                            <button className="pagination-btn active">1</button>
                            <button className="pagination-btn">2</button>
                            <button className="pagination-btn">{'>'}</button>
                        </div>
                    )}
                </main>

                {/* Right Sidebar */}
                <aside className="sidebar">
                    {/* Popular Categories */}
                    <div className="sidebar-card">
                        <h3 className="sidebar-title">
                            ⭐ 인기 카테고리
                        </h3>
                        <div className="category-list">
                            {popularCategories.map((cat) => (
                                <Link
                                    key={cat.id}
                                    to={`/category/${cat.id}`}
                                    className="category-item"
                                >
                                    <span className="category-item-name">
                                        <span>{cat.icon}</span>
                                        <span>{cat.name}</span>
                                    </span>
                                    <span className="category-item-count">{cat.count}</span>
                                </Link>
                            ))}
                        </div>
                    </div>




                </aside>
            </div>
        </div>
    )
}

export default HomePage
