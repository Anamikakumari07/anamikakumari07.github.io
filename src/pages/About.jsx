import { motion } from "motion/react"
import PageTransition from "../components/PageTransition"
import ScrollReveal from "../components/ScrollReveal"

function About() {
  const technologies = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "C++",
    "DSA"
  ]

  const focusAreas = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Building modern and responsive web applications using React and the MERN stack."
    },
    {
      icon: "🧠",
      title: "Problem Solving",
      description:
        "Practicing Data Structures and Algorithms to improve logical thinking and problem-solving skills."
    },
    {
      icon: "🚀",
      title: "Continuous Learning",
      description:
        "Learning new technologies and improving my development skills through practical projects."
    }
  ]

  return (
    <PageTransition>

      <section className="min-h-screen px-5 sm:px-6 pt-28 md:pt-32 pb-20 md:pb-24 relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative">

          <ScrollReveal>

            <div className="mb-10 md:mb-14">

              <p className="text-purple-500 font-medium mb-3 tracking-wider">
                ABOUT ME
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                A little bit

                <span className="block bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                  about me
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
                A software-focused developer who enjoys building useful
                applications, solving problems, and continuously learning.
              </p>

            </div>

          </ScrollReveal>


          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">


            <ScrollReveal direction="left">

              <motion.div
                whileHover={{
                  y: -6
                }}
                className="group relative h-full"
              >

                <div className="absolute -inset-1 bg-purple-500/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative h-full border border-white/10 rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-xl hover:border-purple-500/30 transition duration-500">

                  <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mb-7">
                    <span className="text-2xl">
                      👋
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Who I am
                  </h2>

                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-5">
                    I'm Anamika, a B.Tech student at Indian Institute of
                    Information Technology Senapati, Manipur, with a strong
                    interest in software development and modern web
                    technologies.
                  </p>

                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-5">
                    I enjoy building web applications, learning new
                    technologies, and solving problems using Data Structures
                    and Algorithms.
                  </p>

                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-5">
                    Currently, I'm focused on strengthening my skills in
                    JavaScript, React, and the MERN stack while improving my
                    problem-solving abilities.
                  </p>

                  <div className="mt-8">

                    <p className="text-sm text-gray-500 mb-4">
                      CURRENTLY WORKING WITH
                    </p>

                    <div className="flex flex-wrap gap-3">

                      {technologies.map((technology, index) => (

                        <motion.span
                          key={technology}
                          initial={{
                            opacity: 0,
                            scale: 0.8
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1
                          }}
                          viewport={{
                            once: true
                          }}
                          transition={{
                            delay: index * 0.05
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -2
                          }}
                          className="px-3 py-2 rounded-xl border border-white/10 bg-black/30 text-gray-300 text-sm hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition"
                        >
                          {technology}
                        </motion.span>

                      ))}

                    </div>

                  </div>

                </div>

              </motion.div>

            </ScrollReveal>


            <ScrollReveal direction="right">

              <motion.div
                whileHover={{
                  y: -6
                }}
                className="group relative h-full"
              >

                <div className="absolute -inset-1 bg-purple-500/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative h-full border border-white/10 rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-xl hover:border-purple-500/30 transition duration-500">

                  <p className="text-purple-500 font-medium mb-3 tracking-wider">
                    EDUCATION
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                    Indian Institute of Information Technology Senapati
                  </h2>

                  <p className="text-gray-400 mt-4 text-base sm:text-lg">
                    B.Tech in Electronics and Communication Engineering
                  </p>

                  <div className="h-px bg-white/10 my-8" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <p className="text-sm text-gray-500">
                        Duration
                      </p>

                      <p className="text-white font-semibold mt-2">
                        2024 — 2028
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <p className="text-sm text-gray-500">
                        CGPA
                      </p>

                      <p className="text-purple-400 font-bold text-2xl mt-1">
                        7.74
                      </p>
                    </div>

                  </div>

                  <div className="mt-8">

                    <p className="text-sm text-gray-500 mb-3">
                      COURSEWORK & INTERESTS
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                      Data Structures and Algorithms, Object-Oriented
                      Programming, Operating Systems, Digital Signal
                      Processing, Signals & Systems, and Communication
                      Systems.
                    </p>

                  </div>

                  <div className="mt-8 flex items-center gap-3">

                    <span className="relative flex h-3 w-3">

                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />

                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500" />

                    </span>

                    <span className="text-gray-400 text-sm">
                      Currently pursuing my degree
                    </span>

                  </div>

                </div>

              </motion.div>

            </ScrollReveal>

          </div>


          <ScrollReveal delay={0.1}>

            <div className="mt-12 md:mt-16 mb-7">

              <p className="text-purple-500 font-medium mb-3 tracking-wider">
                WHAT I DO
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What I'm focused on
              </h2>

            </div>

          </ScrollReveal>


          <div className="grid md:grid-cols-3 gap-5 md:gap-6">

            {focusAreas.map((area, index) => (

              <ScrollReveal
                key={area.title}
                delay={index * 0.1}
              >

                <motion.div
                  whileHover={{
                    y: -7,
                    scale: 1.01
                  }}
                  className="group relative h-full"
                >

                  <div className="absolute -inset-1 bg-purple-500/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative h-full border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm hover:border-purple-500/30 transition duration-500">

                    <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center mb-5">
                      <span className="text-xl">
                        {area.icon}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {area.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mt-3">
                      {area.description}
                    </p>

                  </div>

                </motion.div>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>

    </PageTransition>
  )
}

export default About