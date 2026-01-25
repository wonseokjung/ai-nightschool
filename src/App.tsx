import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import Header from './components/Header'
import Footer from './components/Footer'

// 실제 교재 페이지들
import ChatGPTPrompts40Page from './pages/ChatGPTPrompts40Page'
import AIAgentBasicsTextbook from './pages/AIAgentBasicsTextbook'
import AIMoneyMasterPromptsPage from './pages/AIMoneyMasterPromptsPage'
import AIMoneyImagePromptsPage from './pages/AIMoneyImagePromptsPage'
import AIMoneyVideoPromptsPage from './pages/AIMoneyVideoPromptsPage'
import AIRealisticCharacterVideoPage from './pages/AIRealisticCharacterVideoPage'
import AIVideoGenerationPromptsPage from './pages/AIVideoGenerationPromptsPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function App() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>
                <Routes>
                    {/* 메인 페이지 */}
                    <Route path="/" element={<HomePage />} />

                    {/* 카테고리 페이지 */}
                    <Route path="/category/:categoryId" element={<CategoryPage />} />

                    {/* 프롬프트 교재들 */}
                    <Route path="/textbook/chatgpt-prompts-40plus" element={<ChatGPTPrompts40Page />} />
                    <Route path="/textbook/ai-money-master-prompts" element={<AIMoneyMasterPromptsPage />} />

                    {/* 이미지 생성 교재들 */}
                    <Route path="/textbook/ai-money-image-prompts" element={<AIMoneyImagePromptsPage />} />

                    {/* 영상 생성 교재들 */}
                    <Route path="/textbook/ai-money-video-prompts" element={<AIMoneyVideoPromptsPage />} />
                    <Route path="/textbook/ai-character-video-prompts" element={<AIRealisticCharacterVideoPage />} />
                    <Route path="/textbook/ai-video-generation-guide" element={<AIVideoGenerationPromptsPage />} />

                    {/* 자동화 교재들 */}
                    <Route path="/textbook/ai-agent-basics" element={<AIAgentBasicsTextbook />} />

                    {/* 법적 고지 */}
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
