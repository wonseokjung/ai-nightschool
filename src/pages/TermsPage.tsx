import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const TermsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Terms of Service - Connect AI LAB';
    }, []);

    return (
        <div style={{ paddingBottom: '80px' }}>
            {/* Header */}
            <section style={{
                position: 'relative',
                padding: '60px 24px',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60%',
                    height: '60%',
                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                    zIndex: -1,
                    filter: 'blur(80px)'
                }} />

                <div className="container">
                    <Link
                        to="/"
                        className="btn btn-secondary"
                        style={{
                            display: 'inline-flex',
                            marginBottom: '40px',
                            padding: '8px 20px',
                            fontSize: '0.85rem'
                        }}
                    >
                        <ArrowLeft size={16} />
                        Back to Dashboard
                    </Link>

                    <div style={{
                        width: '64px',
                        height: '64px',
                        margin: '0 auto 24px',
                        borderRadius: '20px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FileText size={32} color="#3b82f6" />
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: 800,
                        color: 'white',
                        marginBottom: '16px',
                        letterSpacing: '-0.02em'
                    }}>
                        Terms of <span className="text-gradient">Service</span>
                    </h1>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem' }}>
                        Last updated: January 25, 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="glass-panel" style={{
                    padding: '48px',
                    borderRadius: '24px',
                    color: '#e2e8f0',
                    lineHeight: '1.8'
                }}>
                    <p style={{ marginBottom: '24px', color: '#94a3b8' }}>
                        본 약관은 AI 야학 도서관(이하 '회사')이 제공하는 서비스의 이용조건 및 절차, 이용자와 회사의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.
                    </p>

                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '32px 0' }} />

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#3b82f6' }}>01</span> 저작권의 귀속 및 이용제한
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '32px' }}>
                        회사가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 회사에 귀속합니다. 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                    </p>

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#3b82f6' }}>02</span> 서비스의 제공 및 변경
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '32px' }}>
                        회사는 이용자에게 무료로 AI 교육 콘텐츠를 제공합니다. 회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.
                    </p>

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#3b82f6' }}>03</span> 면책조항
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '32px' }}>
                        회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 또한 회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않습니다.
                    </p>

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#3b82f6' }}>04</span> 책임의 한계 및 수익 보장 부인
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '16px' }}>
                        본 사이트에서 제공하는 'Money Master', '수익화' 등의 용어는 사용자의 이해를 돕기 위한 마케팅적 표현이며, 특정 기간 내의 구체적인 수익을 보장하지 않습니다.
                    </p>
                    <ul style={{ paddingLeft: '20px', color: '#94a3b8', listStyleType: 'disc' }}>
                        <li style={{ marginBottom: '12px' }}>회사는 본 사이트의 정보를 활용하여 발생한 유무형의 결과에 대해 어떠한 법적 책임도 지지 않습니다.</li>
                        <li style={{ marginBottom: '12px' }}>제공되는 정보는 "있는 그대로" 제공되며, 오류가 있을 수 있습니다.</li>
                        <li style={{ marginBottom: '12px' }}>
                            본 사이트는 Google의{' '}
                            <a href="https://support.google.com/adspolicy/answer/6020955" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline' }}>
                                오해의 소지가 있는 콘텐츠 정책
                            </a>을 준수하고자 노력합니다.
                        </li>
                    </ul>

                    <div style={{ marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', fontSize: '0.85rem', color: '#64748b' }}>
                        시행일자: 2026년 01월 25일
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
