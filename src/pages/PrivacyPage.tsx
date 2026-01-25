import React, { useEffect } from 'react';

const PrivacyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = '개인정보처리방침 - AI 야학당';
    }, []);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px', color: '#e2e8f0', lineHeight: '1.8' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '30px', color: '#f8fafc' }}>개인정보처리방침</h1>
            <p style={{ marginBottom: '20px' }}>
                AI 야학당(이하 '회사')은 개인정보 보호법 등 관련 법령을 준수하며, 이용자의 개인정보 보호를 중요하게 생각합니다.
            </p>

            <h2 style={{ fontSize: '1.4rem', marginTop: '40px', marginBottom: '16px', color: '#f8fafc' }}>1. 수집하는 개인정보 항목</h2>
            <p>회사는 별도의 회원가입 없이 서비스를 제공하므로, 원칙적으로 이용자의 개인정보를 수집하지 않습니다. 단, 뉴스레터 구독 등 일부 기능 이용 시 이메일 주소를 수집할 수 있습니다.</p>

            <h2 style={{ fontSize: '1.4rem', marginTop: '40px', marginBottom: '16px', color: '#f8fafc' }}>2. 개인정보의 수집 및 이용 목적</h2>
            <p>서비스 이용 통계 분석 및 서비스 품질 개선을 위한 목적으로만 사용됩니다.</p>

            <h2 style={{ fontSize: '1.4rem', marginTop: '40px', marginBottom: '16px', color: '#f8fafc' }}>3. 쿠키(Cookie)의 운용 및 거부</h2>
            <p>회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는 소량의 정보이며 이용자 컴퓨터의 하드디스크에 저장되기도 합니다.</p>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                <li>쿠키의 사용 목적: 이용자의 접속 빈도나 방문 시간 등을 분석</li>
                <li>쿠키 설정 거부 방법: 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
            </ul>

            <h2 style={{ fontSize: '1.4rem', marginTop: '40px', marginBottom: '16px', color: '#f8fafc' }}>4. 개인정보 보호책임자</h2>
            <p>이메일: wonseokjung1987@gmail.com</p>

            <div style={{ marginTop: '60px', borderTop: '1px solid #334155', paddingTop: '20px', fontSize: '0.9rem', color: '#94a3b8' }}>
                공고일자: 2026년 01월 25일<br />
                시행일자: 2026년 01월 25일
            </div>
        </div>
    );
};

export default PrivacyPage;
