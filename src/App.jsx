import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Home from './pages/Home'
import Theory from './pages/Theory'
import Video from './pages/Video'
import Simulation from './pages/Simulation'
import Quiz from './pages/Quiz'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'theory':
        return <Theory />
      case 'video':
        return <Video />
      case 'simulation':
        return <Simulation />
      case 'quiz':
        return <Quiz />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-slate-100 font-display">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-background-dark/80 backdrop-blur-sm border-t border-border-dark py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs text-center md:text-left">
          <p>2026 STS Guardian. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">이용약관</a>
            <a href="#" className="hover:text-primary transition-colors">개인정보 처리방침</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
