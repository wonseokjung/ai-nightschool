import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, X, Command } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const navItems = [
        { path: '/category/skills', label: '스킬' },
        { path: '/category/prompts', label: '프롬프트' },
        { path: '/category/mcp', label: 'MCP' },
        { path: '/category/workflows', label: '워크플로우' }
    ]

    const isActive = (path: string) => location.pathname === path

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            background: 'rgba(3, 7, 18, 0.8)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
            <div className="container" style={{
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo */}
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
                    }}>
                        A
                    </div>
                    <span style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#f8fafc',
                        letterSpacing: '-0.02em'
                    }}>
                        Antigravity Hub
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '4px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
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
                                background: isActive(item.path) ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                transition: 'all 0.2s ease',
                                border: isActive(item.path) ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid transparent'
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
                        className="desktop-nav"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: '#94a3b8',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            fontSize: '0.85rem',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <Search size={16} />
                        <span>Search...</span>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            background: 'rgba(0, 0, 0, 0.2)',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            gap: '2px'
                        }}>
                            <Command size={10} />
                            <span>K</span>
                        </div>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="mobile-menu-btn"
                        style={{
                            display: 'none',
                            padding: '8px',
                            color: '#f8fafc'
                        }}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="mobile-nav" style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(3, 7, 18, 0.95)',
                    backdropFilter: 'blur(20px)',
                    padding: '16px 24px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    height: '100vh'
                }}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                padding: '14px 16px',
                                borderRadius: '12px',
                                color: isActive(item.path) ? '#f8fafc' : '#94a3b8',
                                background: isActive(item.path) ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                                fontWeight: 500,
                                fontSize: '1rem',
                                border: isActive(item.path) ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid transparent'
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
