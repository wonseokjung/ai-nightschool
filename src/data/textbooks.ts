// src/data/textbooks.ts
// 📚 모든 교재 데이터 - 실제 페이지들과 연결됨

export interface Textbook {
    id: string
    category: 'prompts' | 'images' | 'video' | 'automation'
    level: 'beginner' | 'intermediate' | 'advanced'

    // 메타 정보
    title: string
    subtitle: string
    description: string
    image: string

    // 태그
    tools: string[]
    tags: string[]

    // 상태
    isNew: boolean
    isFeatured: boolean

    // 통계
    views?: number

    // 날짜
    createdAt: string
    updatedAt: string
}

export const textbooks: Textbook[] = [
    // ===== 프롬프트 카테고리 =====
    {
        id: 'chatgpt-prompts-40plus',
        category: 'prompts',
        level: 'beginner',
        title: '40대+ 직장인을 위한 ChatGPT 프롬프트 100선',
        subtitle: '실전 업무 최적화 프롬프트 모음',
        description: '경험 많은 직장인을 위한 AI 활용 가이드북. 보고서, 이메일, 기획안 작성에 바로 쓸 수 있는 프롬프트!',
        image: '/images/textbook_40plus_prompt.png',
        tools: ['ChatGPT', 'Gemini'],
        tags: ['업무', '직장인', '이메일', '보고서'],
        isNew: true,
        isFeatured: true,
        views: 5200,
        createdAt: '2026-01-20',
        updatedAt: '2026-01-25'
    },
    {
        id: 'ai-money-master-prompts',
        category: 'prompts',
        level: 'intermediate',
        title: 'AI Business Prompt Vault',
        subtitle: '기획부터 마케팅까지 38개 실전 프롬프트',
        description: '디지털 제품·콘텐츠 가치 창출을 위한 비즈니스 프롬프트 패키지',
        image: '/images/textbook_ai_money_vault.png',
        tools: ['ChatGPT', 'Claude', 'Gemini'],
        tags: ['비즈니스', '마케팅', '생산성'],
        isNew: false,
        isFeatured: true,
        views: 3400,
        createdAt: '2026-01-15',
        updatedAt: '2026-01-20'
    },

    // ===== 이미지 생성 카테고리 =====
    {
        id: 'ai-money-image-prompts',
        category: 'images',
        level: 'beginner',
        title: 'AI 비즈니스 이미지 생성 프롬프트 10선',
        subtitle: '썸네일부터 제품 사진까지',
        description: 'Gemini, ChatGPT, Midjourney로 만드는 상업용 고퀄리티 이미지',
        image: '/images/textbook_ai_image_money.png',
        tools: ['Midjourney', 'ChatGPT', 'Gemini'],
        tags: ['이미지', '썸네일', '제품사진'],
        isNew: false,
        isFeatured: false,
        views: 2100,
        createdAt: '2026-01-10',
        updatedAt: '2026-01-18'
    },

    // ===== 영상 생성 카테고리 =====
    {
        id: 'ai-money-video-prompts',
        category: 'video',
        level: 'intermediate',
        title: 'AI 커머셜 비디오 생성 프롬프트 10선',
        subtitle: '숏폼부터 브랜드 광고까지',
        description: 'Google Veo, Runway, Pika로 만드는 프로급 상업 영상 가이드',
        image: '/images/textbook_ai_video_money.png',
        tools: ['Veo', 'Runway', 'Pika'],
        tags: ['영상', '숏폼', '광고'],
        isNew: false,
        isFeatured: true,
        views: 4200,
        createdAt: '2026-01-12',
        updatedAt: '2026-01-22'
    },

    // ===== 자동화/인사이트 카테고리 =====
    {
        id: 'andrew-ng-ai-vision',
        category: 'automation',
        level: 'beginner',
        title: '앤드류 응의 AI 비전: 지금 바로 만들어라',
        subtitle: '코딩보다 기획이 중요한 시대의 생존 전략',
        description: 'AI 거장 앤드류 응이 말하는 "AI Agent 시대의 기회와 전략". 엔지니어와 PM의 경계가 무너지는 지금, 당신이 취해야 할 행동은?',
        image: '/images/andrew_ng_vision_cover.png',
        tools: ['AI Vision', 'Mindset', 'Agentic Workflow'],
        tags: ['앤드류응', '전략', '인사이트', '동기부여'],
        isNew: true,
        isFeatured: true,
        views: 120,
        createdAt: '2026-01-26',
        updatedAt: '2026-01-26'
    },
    /*
    {
        id: 'ai-character-video-prompts',
        category: 'video',
        level: 'advanced',
        title: '🎭 AI 캐릭터 영상 생성',
        subtitle: '유튜브 CEO 경고, VideoBERT 분석',
        description: '사람 같은 고퀄리티 캐릭터 만들고 영상으로 변환하는 JSON 프롬프트',
        image: '/images/main.jpeg',
        tools: ['Veo', 'Runway', 'Midjourney'],
        tags: ['캐릭터', '영상', 'JSON'],
        isNew: true,
        isFeatured: false,
        views: 980,
        createdAt: '2026-01-24',
        updatedAt: '2026-01-25'
    },
    {
        id: 'ai-video-generation-guide',
        category: 'video',
        level: 'beginner',
        title: 'AI 영상 생성 완벽 가이드',
        subtitle: 'Veo, Runway, Pika 비교',
        description: '초보자를 위한 AI 영상 생성 도구 완벽 비교 가이드',
        image: '/images/video_guide.png',
        tools: ['Veo', 'Runway', 'Pika', 'Kling'],
        tags: ['영상', '가이드', '비교'],
        isNew: false,
        isFeatured: false,
        views: 1500,
        createdAt: '2026-01-08',
        updatedAt: '2026-01-15'
    },

    // ===== 자동화 카테고리 =====
    {
        id: 'ai-agent-basics',
        category: 'automation',
        level: 'intermediate',
        title: '📘 자동화 에이전트의 기초',
        subtitle: '노코드에서 에이전틱까지',
        description: 'AI에게 일 잘 시키는 법: n8n과 Antigravity 비교 분석',
        image: '/images/agent_basics.png',
        tools: ['n8n', 'Antigravity', 'Claude'],
        tags: ['자동화', '에이전트', '노코드'],
        isNew: true,
        isFeatured: false,
        views: 1800,
        createdAt: '2026-01-22',
        updatedAt: '2026-01-25'
    }
    */
]

// 카테고리 정보
export const categories = {
    prompts: {
        id: 'prompts',
        name: '프롬프트',
        icon: '📝',
        color: '#8b5cf6',
        description: 'ChatGPT, Gemini, Claude 등 AI 프롬프트'
    },
    images: {
        id: 'images',
        name: '이미지 생성',
        icon: '🖼️',
        color: '#10b981',
        description: 'Midjourney, DALL-E, Stable Diffusion 프롬프트'
    },
    video: {
        id: 'video',
        name: '영상 생성',
        icon: '🎬',
        color: '#ef4444',
        description: 'Veo, Runway, Pika 영상 생성 프롬프트'
    },
    automation: {
        id: 'automation',
        name: '자동화',
        icon: '🤖',
        color: '#3b82f6',
        description: 'AI 에이전트, n8n, 자동화 워크플로우'
    }
}

// 난이도 정보
export const levels = {
    beginner: { label: '초급', color: '#22c55e', icon: '🟢' },
    intermediate: { label: '중급', color: '#eab308', icon: '🟡' },
    advanced: { label: '고급', color: '#ef4444', icon: '🔴' }
}

// 유틸리티 함수
export const getTextbooksByCategory = (category: string) =>
    textbooks.filter(t => t.category === category)

export const getFeaturedTextbooks = () =>
    textbooks.filter(t => t.isFeatured || t.isNew).slice(0, 6)

export const getNewTextbooks = () =>
    textbooks.filter(t => t.isNew)

export const getCategoryCount = (category: string) =>
    textbooks.filter(t => t.category === category).length

export const getTextbookById = (id: string) =>
    textbooks.find(t => t.id === id)
