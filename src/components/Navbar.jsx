import { useState } from "react"
import { NavLink } from "react-router"
import { motion, AnimatePresence } from "motion/react"
import ThemeToggle from "./ThemeToggle"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <nav className="navbar">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="logo"
        >
          Anamika<span>.</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "nav-link-active" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="navbar-active-line"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-button"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: "auto"
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            className="mobile-menu"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: index * 0.05
                  }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `mobile-link ${
                        isActive
                          ? "mobile-link-active"
                          : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar