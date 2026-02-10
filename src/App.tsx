import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import Header from './components/Header'
import Footer from './components/Footer'

// Core Modules
import NotebookLMPromptPage from './pages/NotebookLMPromptPage'
import StitchMCPPage from './pages/StitchMCPPage'
import GlobalVentureSkillPage from './pages/GlobalVentureSkillPage'

// Legal
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function App() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-bg-primary)' }}>
            <Header />
            <main style={{ flex: 1, position: 'relative' }}>
                <Routes>
                    {/* Main Page */}
                    <Route path="/" element={<HomePage />} />

                    {/* Category Pages */}
                    <Route path="/category/:categoryId" element={<CategoryPage />} />

                    {/* Core Textbooks */}
                    <Route path="/textbook/notebooklm-mcp-guide" element={<NotebookLMPromptPage />} />
                    <Route path="/textbook/stitch-mcp-guide" element={<StitchMCPPage />} />
                    <Route path="/textbook/global-venture-guide" element={<GlobalVentureSkillPage />} />

                    {/* Legal */}
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
