
export interface Textbook {
    id: string
    category: 'prompts' | 'images' | 'video' | 'automation' | 'skills' | 'mcp' | 'workflows'
    title: string
    description: string
    author: string
    readTime: string
    date: string
    isNew?: boolean
    link: string
    image?: string
}

export const categories: Record<string, { id: string; name: string; icon: string; color: string; description: string }> = {
    skills: { id: 'skills', name: '스킬', icon: '⚡', color: '#eab308', description: '안티그래비티 스킬 & 도구 정의' },
    prompts: { id: 'prompts', name: '프롬프트', icon: '📚', color: '#3b82f6', description: 'AI 학습 & 실무 프롬프트' },
    mcp: { id: 'mcp', name: 'MCP', icon: '🔌', color: '#10b981', description: 'Model Context Protocol 서버' },
    workflows: { id: 'workflows', name: '워크플로우', icon: '🔄', color: '#8b5cf6', description: '에이전틱 워크플로우 & 자동화' },
    images: { id: 'images', name: '이미지 생성', icon: '🎨', color: '#ec4899', description: 'AI 이미지 생성 프롬프트' },
    video: { id: 'video', name: '영상 제작', icon: '🎬', color: '#f97316', description: 'AI 영상 제작 가이드' },
    automation: { id: 'automation', name: '자동화', icon: '🤖', color: '#6366f1', description: '업무 자동화 스크립트' }
}


export const textbooks: Textbook[] = [
    // NotebookLM Only
    {
        id: 'notebooklm-mcp-guide',
        category: 'mcp',
        title: 'NotebookLM MCP 연결 가이드',
        description: '개인 지식 베이스(NotebookLM)를 에이전트와 연결하는 프롬프트 엔지니어링.',
        author: 'Connect AI LAB',
        readTime: '15분',
        date: '2024-03-18',
        link: '/textbook/notebooklm-mcp-guide'
    },
    {
        id: 'stitch-mcp-guide',
        category: 'mcp',
        title: 'Stitch MCP X Antigravity',
        description: 'Google Stitch MCP로 디자인부터 React 코드까지, AI 디자인실장 영자와 함께.',
        author: 'Connect AI LAB',
        readTime: '20분',
        date: '2024-03-19',
        isNew: true,
        link: '/textbook/stitch-mcp-guide'
    },
    {
        id: 'global-venture-guide',
        category: 'skills',
        title: '글로벌 서비스 개발하기',
        description: '안티그래비티 + 클로드 코드 + 페이팔 MCP로 실제 수익을 창출하는 글로벌 서비스를 개발합니다.',
        author: 'Connect AI LAB',
        readTime: '30분',
        date: '2024-03-20',
        isNew: true,
        link: '/textbook/global-venture-guide'
    },
    {
        id: 'zenpop-pinch-game',
        category: 'skills',
        title: '핀치 게임 만들기 (Zen-Pop)',
        description: 'MediaPipe + Canvas + Web Audio API + Gemini AI로 ASMR 힐링 버블팝 게임을 만듭니다.',
        author: 'Connect AI LAB',
        readTime: '25분',
        date: '2024-03-21',
        isNew: true,
        link: '/textbook/zenpop-pinch-game'
    }
]

export const getCategoryTextbooks = (category: string) => {
    if (category === 'all') return textbooks
    return textbooks.filter(book => book.category === category)
}

export const getRecentTextbooks = (limit: number = 4) => {
    return [...textbooks]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit)
}

export const getCategoryCount = (categoryId: string) => {
    return textbooks.filter(book => book.category === categoryId).length
}
