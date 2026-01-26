import React, { useEffect } from 'react';

const TermsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = '이용약관 - AI 야학당';
    }, []);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px', color: '#e2e8f0', lineHeight: '1.8' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '30px', color: '#f8fafc' }}>이용약관</h1>
            <p style={{ marginBottom: '20px' }}>
                본 약관은 AI 야학당(이하 '회사')이 제공하는 서비스의 이용조건 및 절차, 이용자와 회사의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.
            </p>

            <h2 style={{ fontSize: '1.4rem', marginTop: '40px', marginBottom: '16px', color: '#f8fafc' }}>1. 저작권의 귀속 및 이용제한</h2>
            <p>회사가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 회사에 귀속합니다. 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</p>

            <h2 style={{ fontSize: '1.4rem', marginTop: '40px', marginBottom: '16px', color: '#f8fafc' }}>2. 서비스의 제공 및 변경</h2>
            <p>회사는 이용자에게 무료로 AI 교육 콘텐츠를 제공합니다. 회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.</p>

            <h2 style={{ fontSize: '1.4rem', marginTop: '40px', marginBottom: '16px', color: '#f8fafc' }}>3. 면책조항</h2>
            <p>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 또한 회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않습니다.</p>

            <h2 style={{ fontSize: '1.4rem', marginTop: '40px', marginBottom: '16px', color: '#f8fafc' }}>4. 책임의 한계 및 수익 보장 부인 (Disclaimer)</h2>
            <p>본 사이트에서 제공하는 'Money Master', '수익화' 등의 용어는 사용자의 이해를 돕기 위한 마케팅적 표현이며, 특정 기간 내의 구체적인 수익을 보장하지 않습니다. 본 사이트의 모든 콘텐츠, 프롬프트, 전략 및 사례는 참고용 교육 자료입니다.</p>
            <ul style={{ paddingLeft: '20px', margin: '10px 0', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '8px' }}>회사는 본 사이트의 정보를 활용하여 발생한 유무형의 결과(수익 발생 여부, 사업적 성과, 투자 손실 등)에 대해 어떠한 법적 책임도 지지 않습니다.</li>
                <li style={{ marginBottom: '8px' }}>제공되는 정보는 "있는 그대로" 제공되며, 오류가 있을 수 있습니다. 사용자는 본인의 판단과 책임 하에 정보를 비판적으로 수용하고 활용해야 합니다.</li>
                <li style={{ marginBottom: '8px' }}>본 사이트는 "단기간에 고수익을 보장한다"는 식의 허위, 과장 광고를 지양하며, Google의 <a href="https://support.google.com/adspolicy/answer/6020955" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline' }}>오해의 소지가 있는 콘텐츠 정책</a>을 준수하고자 노력합니다.</li>
            </ul>

            <div style={{ marginTop: '60px', borderTop: '1px solid #334155', paddingTop: '20px', fontSize: '0.9rem', color: '#94a3b8' }}>
                시행일자: 2026년 01월 25일
            </div>
        </div>
    );
};

export default TermsPage;
