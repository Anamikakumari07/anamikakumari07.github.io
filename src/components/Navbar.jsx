import { useState } from "react"
import { NavLink } from "react-router"
import { motion, AnimatePresence } from "motion/react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Skills",
      path: "/skills"
    },
    {
      name: "Projects",
      path: "/projects"
    },
    {
      name: "Achievements",
      path: "/achievements"
    },
    {
      name: "Contact",
      path: "/contact"
    }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">

        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-xl sm:text-2xl font-bold text-white"
        >
          Anamika<span className="text-purple-500">.</span>
        </NavLink>


        <div className="hidden md:flex items-center gap-6 lg:gap-7">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm transition duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-500"
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

        </div>


        <motion.button
          whileTap={{
            scale: 0.9
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300"
        >
          {menuOpen ? "✕" : "☰"}
        </motion.button>

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
            transition={{
              duration: 0.3
            }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/70 backdrop-blur-xl"
          >

            <div className="px-5 py-5 flex flex-col gap-2">

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
                      `block px-4 py-3 rounded-xl transition ${
                        isActive
                          ? "text-purple-400 bg-purple-500/10"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
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