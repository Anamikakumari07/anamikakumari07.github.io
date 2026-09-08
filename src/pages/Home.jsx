import { motion } from "motion/react"
import { Link } from "react-router"
import PageTransition from "../components/PageTransition"

function Home() {
  return (
    <PageTransition>

      <section className="min-h-screen flex items-center px-5 sm:px-6 pt-28 pb-20 relative overflow-hidden">

        <div className="max-w-7xl w-full mx-auto">

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">


            <div className="max-w-4xl">

              <motion.p
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
                className="text-base sm:text-lg text-gray-400 mb-5"
              >
                Hi, I'm Anamika 👋
              </motion.p>


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
                className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
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
                className="text-gray-400 text-base sm:text-lg md:text-xl mt-7 max-w-2xl leading-relaxed"
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
                className="flex flex-wrap gap-3 sm:gap-4 mt-9"
              >

                <motion.div
                  whileHover={{
                    scale: 1.05
                  }}
                  whileTap={{
                    scale: 0.97
                  }}
                >

                  <Link
                    to="/projects"
                    className="inline-block px-5 sm:px-6 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition"
                  >
                    View My Projects ↗
                  </Link>

                </motion.div>


                <motion.div
                  whileHover={{
                    scale: 1.05
                  }}
                  whileTap={{
                    scale: 0.97
                  }}
                >

                  <a
                    href="/resume.pdf"
                    download
                    className="inline-block px-5 sm:px-6 py-3 rounded-full border border-white/15 text-white font-medium hover:bg-white/10 hover:border-purple-500/50 transition"
                  >
                    Download Resume ↓
                  </a>

                </motion.div>

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
                className="flex gap-6 sm:gap-7 mt-9"
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
                delay: 0.3
              }}
              className="hidden lg:block"
            >

              <motion.div
                animate={{
                  y: [0, -12, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >

                <div className="absolute -inset-5 bg-purple-500/10 blur-3xl rounded-full" />

                <div className="relative border border-white/10 rounded-3xl p-7 bg-white/5 backdrop-blur-xl">

                  <div className="flex items-center gap-3 mb-7">

                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />

                  </div>


                  <div className="font-mono text-sm leading-8">

                    <p className="text-gray-500">
                      01
                    </p>

                    <p>
                      <span className="text-purple-400">
                        const
                      </span>{" "}
                      <span className="text-gray-200">
                        developer
                      </span>{" "}
                      =
                    </p>

                    <p className="pl-5">
                      <span className="text-yellow-300">
                        {"{"}
                      </span>
                    </p>

                    <p className="pl-10 text-gray-400">
                      name:{" "}
                      <span className="text-green-400">
                        "Anamika"
                      </span>
                      ,
                    </p>

                    <p className="pl-10 text-gray-400">
                      role:{" "}
                      <span className="text-green-400">
                        "MERN Developer"
                      </span>
                      ,
                    </p>

                    <p className="pl-10 text-gray-400">
                      passion:{" "}
                      <span className="text-green-400">
                        "Building"
                      </span>
                    </p>

                    <p className="pl-5">
                      <span className="text-yellow-300">
                        {"}"}
                      </span>
                    </p>

                  </div>


                  <div className="mt-7 flex items-center gap-3">

                    <span className="relative flex h-3 w-3">

                      <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 animate-ping" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-500" />

                    </span>

                    <span className="text-gray-400 text-sm">
                      Available for opportunities
                    </span>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

    </PageTransition>
  )
}

export default Home