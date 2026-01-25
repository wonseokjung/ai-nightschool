import { Youtube, MessageCircle } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
                {/* Brand */}
                <div className="footer-section" style={{ alignItems: 'center' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '16px',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/favicon.jpg"
                            alt="AI 야학당"
                            style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px'
                            }}
                        />
                        <span style={{ fontWeight: 700, color: '#f8fafc' }}>
                            AI 야학당
                        </span>
                    </div>
                    <p style={{
                        color: '#64748b',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        marginBottom: '20px',
                        maxWidth: '500px'
                    }}>
                        누구나 쉽게 고품질 AI 교육을 받을 수 있도록 돕는 무료 프롬프트 가이드 플랫폼입니다.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <a
                            href="https://www.youtube.com/@aimentorjay"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '12px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#94a3b8',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Youtube size={20} />
                        </a>
                        <a
                            href="https://open.kakao.com/o/gJKmyiNg"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '12px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#94a3b8',
                                transition: 'all 0.2s'
                            }}
                        >
                            <MessageCircle size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom" style={{ marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
                © 2026 AI 야학당. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
