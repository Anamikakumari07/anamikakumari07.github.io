import { Routes, Route, useLocation } from "react-router"
import { AnimatePresence } from "motion/react"

import Navbar from "./components/Navbar"
import AnimatedBackground from "./components/AnimatedBackground"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Achievements from "./pages/Achievements"
import Contact from "./pages/Contact"

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <AnimatedBackground />

      <Navbar />

      <ScrollToTop />

      <AnimatePresence mode="wait">

        <Routes
          location={location}
          key={location.pathname}
        >

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/skills"
            element={<Skills />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/achievements"
            element={<Achievements />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </AnimatePresence>

    </div>
  )
}

export default App