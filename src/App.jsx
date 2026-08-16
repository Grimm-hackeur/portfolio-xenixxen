import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar.jsx'
import BottomTabBar from './components/BottomTabBar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Friends from './pages/Friends.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen pb-20 relative overflow-x-hidden">
      <div className="bg-mesh" />
      <div className="bg-grain" />
      <div className="relative z-[2]">
        <ScrollToTop />
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <BottomTabBar />
    </div>
  )
}
