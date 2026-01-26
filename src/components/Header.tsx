import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const navItems = [
        { path: '/category/prompts', label: '프롬프트' },
        { path: '/category/images', label: '이미지' },
        { path: '/category/video', label: '영상' },
        { path: '/category/automation', label: '자동화' }
    ]

    const isActive = (path: string) => location.pathname === path

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 24px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo */}
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <img
                        src="/favicon.jpg"
                        alt="AI 야학당"
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '8px',
                            objectFit: 'cover'
                        }}
                    />
                    <span style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: '#f8fafc'
                    }}>
                        AI 야학 도서관
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }} className="desktop-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '8px',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                color: isActive(item.path) ? '#f8fafc' : '#94a3b8',
                                background: isActive(item.path) ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Section */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                }}>
                    {/* Search Button */}
                    <button
                        style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: '#94a3b8',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            transition: 'all 0.2s ease'
                        }}
                        className="desktop-nav"
                    >
                        <Search size={18} />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            display: 'none',
                            padding: '8px',
                            color: '#f8fafc'
                        }}
                        className="mobile-menu-btn"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(15, 23, 42, 0.98)',
                    padding: '16px 24px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }} className="mobile-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                padding: '12px 16px',
                                borderRadius: '10px',
                                color: isActive(item.path) ? '#f8fafc' : '#94a3b8',
                                background: isActive(item.path) ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                                fontWeight: 500
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                }
            `}</style>
        </header>
    )
}

export default Header
