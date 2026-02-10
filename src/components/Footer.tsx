import { Link } from 'react-router-dom'
import { Youtube, MessageCircle } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container" style={{ padding: '60px 24px 40px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    paddingBottom: '60px'
                }}>
                    {/* Brand Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                A
                            </div>
                            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.02em' }}>
                                Connect AI LAB
                            </span>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '300px' }}>
                            The next-generation AI agent library for developers and creators. Built for the future of automation.
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <a
                                href="https://www.youtube.com/@aimentorjay"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#94a3b8',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                <Youtube size={18} />
                            </a>
                            <a
                                href="https://open.kakao.com/o/gJKmyiNg"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#94a3b8',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>


                    <div>
                        <h4 style={{ color: '#f8fafc', fontWeight: 600, marginBottom: '20px', fontSize: '0.95rem' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Link to="/privacy" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Privacy Policy</Link>
                            <Link to="/terms" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Terms of Service</Link>
                        </div>
                    </div>
                </div>

                <div style={{
                    marginTop: '40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                    color: '#64748b',
                    fontSize: '0.85rem'
                }}>
                    <div>
                        © 2026 Connect AI LAB. All rights reserved.
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
                        All Systems Operational
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
