interface AdBannerProps {
    position: 'top' | 'bottom' | 'sidebar'
}

const AdBanner = ({ position }: AdBannerProps) => {
    // 실제 애드센스 승인 후 이 컴포넌트 내용을 실제 광고 코드로 교체하세요

    const getHeight = () => {
        switch (position) {
            case 'sidebar': return '250px'
            case 'top': return '90px'
            case 'bottom': return '90px'
            default: return '90px'
        }
    }

    return (
        <div style={{
            maxWidth: position === 'sidebar' ? '300px' : '1200px',
            margin: position === 'sidebar' ? '0' : '0 auto',
            padding: position === 'sidebar' ? '0' : '0 24px'
        }}>
            <div style={{
                background: 'rgba(31, 41, 55, 0.5)',
                borderRadius: '12px',
                height: getHeight(),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px dashed rgba(255, 255, 255, 0.1)',
                margin: '24px 0'
            }}>
                {/* 
          실제 애드센스 코드 예시:
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        */}
                <span style={{
                    color: 'rgba(255, 255, 255, 0.3)',
                    fontSize: '0.85rem'
                }}>
                    📢 광고 영역 ({position})
                </span>
            </div>
        </div>
    )
}

export default AdBanner
