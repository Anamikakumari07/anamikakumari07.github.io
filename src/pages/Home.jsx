import { motion } from "motion/react"
import { Link } from "react-router"
import PageTransition from "../components/PageTransition"

function Home() {
  const availableForInternship = true

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center px-6 pt-28 pb-16 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"
        />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-10 w-64 h-64 bg-fuchsia-600/10 blur-3xl rounded-full"
        />

        <div className="max-w-7xl w-full mx-auto relative">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-center">

            <div className="max-w-4xl">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.6
                }}
                className="flex flex-wrap items-center gap-3 mb-6"
              >
                <span className="text-lg text-gray-400">
                  Hi, I'm Anamika 👋
                </span>

                {availableForInternship && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>

                    Available for Internship
                  </span>
                )}
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1
                }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                MERN Stack

                <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Developer
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2
                }}
                className="text-gray-400 text-lg md:text-xl mt-7 max-w-2xl leading-relaxed"
              >
                I build modern web applications and solve real-world
                problems using JavaScript, React and the MERN stack.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3
                }}
                className="flex flex-wrap gap-4 mt-9"
              >
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 hover:scale-105 transition duration-300"
                >
                  View My Projects ↗
                </Link>

                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 rounded-full border border-white/15 text-white font-medium hover:bg-white/10 hover:border-purple-500/50 hover:scale-105 transition duration-300"
                >
                  Download Resume ↓
                </a>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5
                }}
                className="flex flex-wrap gap-7 mt-9"
              >
                <a
                  href="https://github.com/Anamikakumari07"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple-400 hover:-translate-y-1 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/anamika-kumari-895142322/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple-400 hover:-translate-y-1 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://leetcode.com/u/Anamikaa_kumari/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple-400 hover:-translate-y-1 transition"
                >
                  LeetCode
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                x: 40
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">

                <motion.div
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -inset-5 rounded-full border border-purple-500/20 border-dashed"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.04, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-3 rounded-full bg-purple-500/20 blur-2xl"
                />

                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-br from-purple-400 via-purple-600 to-fuchsia-500">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#050505] bg-black">
                    <img
                      src="/profile.jpg"
                      alt="Anamika Kumari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <motion.div
                  animate={{
                    y: [0, -8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-full border border-white/10 bg-black/80 backdrop-blur-xl text-sm text-gray-300"
                >
                  💻 Building & Learning
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home