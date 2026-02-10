import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface CopyrightModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const CopyrightModal: React.FC<CopyrightModalProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            backdropFilter: 'blur(8px)'
        }}>
            <div style={{
                background: 'linear-gradient(180deg, #111827, #0b1120)',
                padding: '36px',
                borderRadius: '24px',
                maxWidth: '480px',
                width: '100%',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.08)',
                animation: 'fadeIn 0.2s ease-out'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{
                        width: '56px',
                        height: '56px',
                        background: 'rgba(239, 68, 68, 0.1)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px',
                        border: '1px solid rgba(239, 68, 68, 0.2)'
                    }}>
                        <AlertTriangle size={28} color="#ef4444" />
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                        Copyright & Usage Notice
                    </h3>

                    <p style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#ef4444',
                        marginBottom: '20px',
                    }}>
                        이 프롬프트는 연습용 버전입니다.
                    </p>

                    <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '24px', fontSize: '0.9rem', wordBreak: 'keep-all' }}>
                        본 프롬프트의 저작권은 <b style={{ color: '#e2e8f0' }}>Connect AI LAB</b>에 있습니다.<br /><br />
                        타사 강의, 교육 자료, 유료 콘텐츠 등에서 출처 표기 없이 무단으로 도용하거나 상업적으로 이용하는 경우, <b style={{ color: '#e2e8f0' }}>저작권법 위반으로 법적 책임</b>을 질 수 있습니다.
                    </p>

                    <div style={{
                        background: 'rgba(255,255,255,0.03)',
                        padding: '16px',
                        borderRadius: '12px',
                        width: '100%',
                        marginBottom: '24px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <p style={{ margin: 0, color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem' }}>
                            위 규정을 확인하였으며,<br />무단으로 사용하지 않으시겠습니까?
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
                        <button
                            onClick={onClose}
                            style={{
                                flex: 1,
                                padding: '14px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                color: '#94a3b8',
                                border: '1px solid rgba(255,255,255,0.1)',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            취소
                        </button>
                        <button
                            onClick={onConfirm}
                            style={{
                                flex: 1,
                                padding: '14px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                color: 'white',
                                border: 'none',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                                transition: 'all 0.2s'
                            }}
                        >
                            동의합니다 (복사)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CopyrightModal;
