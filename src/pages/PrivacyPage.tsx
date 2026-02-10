import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Privacy Policy - Connect AI LAB';
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
                    background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
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
                        background: 'rgba(139, 92, 246, 0.1)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Shield size={32} color="#8b5cf6" />
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: 800,
                        color: 'white',
                        marginBottom: '16px',
                        letterSpacing: '-0.02em'
                    }}>
                        Privacy <span className="text-gradient">Policy</span>
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
                        AI 야학 도서관(이하 '회사')은 개인정보 보호법 등 관련 법령을 준수하며, 이용자의 개인정보 보호를 중요하게 생각합니다.
                    </p>

                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '32px 0' }} />

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#8b5cf6' }}>01</span> 수집하는 개인정보 항목
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '32px' }}>
                        회사는 별도의 회원가입 없이 서비스를 제공하므로, 원칙적으로 이용자의 개인정보를 수집하지 않습니다. 단, 뉴스레터 구독 등 일부 기능 이용 시 이메일 주소를 수집할 수 있습니다.
                    </p>

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#8b5cf6' }}>02</span> 개인정보의 수집 및 이용 목적
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '32px' }}>
                        서비스 이용 통계 분석 및 서비스 품질 개선을 위한 목적으로만 사용됩니다.
                    </p>

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#8b5cf6' }}>03</span> 쿠키(Cookie) 및 광고 아이디
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '12px' }}>
                        회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 '쿠키(cookie)'를 사용합니다.
                    </p>
                    <ul style={{ paddingLeft: '20px', color: '#94a3b8', listStyleType: 'disc', marginBottom: '32px' }}>
                        <li style={{ marginBottom: '8px' }}>쿠키의 사용 목적: 이용자의 접속 빈도나 방문 시간 등을 분석하여 이용자 취향과 관심분야를 파악합니다.</li>
                        <li style={{ marginBottom: '8px' }}>쿠키 설정 거부 방법: 웹 브라우저의 개인정보 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#8b5cf6' }}>04</span> Google 애드센스 광고
                    </h2>
                    <p style={{ color: '#94a3b8', marginBottom: '12px' }}>
                        본 사이트는 <strong style={{ color: '#e2e8f0' }}>Google AdSense</strong>를 사용합니다.
                    </p>
                    <ul style={{ paddingLeft: '20px', color: '#94a3b8', listStyleType: 'disc', marginBottom: '32px' }}>
                        <li style={{ marginBottom: '8px' }}>Google은 광고 쿠키를 사용하여 적절한 광고를 제공합니다.</li>
                        <li style={{ marginBottom: '8px' }}>
                            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>광고 설정</a>에서 맞춤형 광고를 사용 중지할 수 있습니다.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Google의 데이터 사용은{' '}
                            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>Google 파트너 사이트 정책</a>을 참고하세요.
                        </li>
                    </ul>

                    <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#8b5cf6' }}>05</span> 개인정보 보호책임자
                    </h2>
                    <p style={{ color: '#94a3b8' }}>
                        이메일: <a href="mailto:wonseokjung1987@gmail.com" style={{ color: '#60a5fa' }}>wonseokjung1987@gmail.com</a>
                    </p>

                    <div style={{ marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', fontSize: '0.85rem', color: '#64748b' }}>
                        공고일자: 2026년 01월 25일<br />
                        시행일자: 2026년 01월 25일
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
