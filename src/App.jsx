import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Home from './pages/Home'
import Theory from './pages/Theory'
import Video from './pages/Video'
import Simulation from './pages/Simulation'
import Quiz from './pages/Quiz'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [fuelType, setFuelType] = useState('NH3')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', fuelType.toLowerCase());
  }, [fuelType]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} fuelType={fuelType} />
      case 'theory':
        return <Theory fuelType={fuelType} />
      case 'video':
        return <Video fuelType={fuelType} />
      case 'simulation':
        return <Simulation fuelType={fuelType} />
      case 'quiz':
        return <Quiz fuelType={fuelType} />
      default:
        return <Home setCurrentPage={setCurrentPage} fuelType={fuelType} />
    }
  }

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-slate-100 font-display overflow-x-hidden transition-colors duration-500">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} fuelType={fuelType} setFuelType={setFuelType} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPage}-${fuelType}`}
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

      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/5 py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs text-center md:text-left">
          <p>2026 STS Guardian. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">이용약관</a>
            <a href="#" className="transition-colors hover:text-primary">개인정보 처리방침</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
