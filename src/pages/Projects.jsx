import { motion } from "motion/react"
import PageTransition from "../components/PageTransition"
import ScrollReveal from "../components/ScrollReveal"

function Projects() {
  const projects = [
    {
      number: "01",
      title: "AI Resume Matcher",
      description:
        "An AI-powered MERN application that analyzes resumes against job descriptions, generates ATS compatibility scores, provides improvement suggestions, and recommends relevant jobs using Google Gemini AI.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Multer",
        "PDF-Parse",
        "Gemini API"
      ],
      featured: true,
      github:
        "https://github.com/Anamikakumari07/AI-Resume-Matcher",
      live:
        "https://ai-resume-matcher-4.onrender.com/"
    },
    {
      number: "02",
      title: "Amazon Frontend Clone",
      description:
        "A responsive Amazon homepage clone built from scratch using HTML and CSS with Flexbox, CSS Grid, responsive layouts, and interactive hover effects.",
      tech: [
        "HTML5",
        "CSS3",
        "Flexbox",
        "CSS Grid"
      ],
      featured: false
    },
    {
      number: "03",
      title: "Tic-Tac-Toe & Rock Paper Scissors",
      description:
        "Interactive browser games with real-time gameplay, winner detection, score tracking, click handling, and dynamic DOM manipulation.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "DOM"
      ],
      featured: false
    }
  ]

  return (
    <PageTransition>

      <section className="min-h-screen px-5 sm:px-6 pt-28 md:pt-32 pb-20 md:pb-24 relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative">

          <ScrollReveal>

            <div className="mb-10 md:mb-14">

              <p className="text-purple-500 font-medium mb-3 tracking-wider">
                MY PROJECTS
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                Things I've

                <span className="block bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                  built
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
                A selection of projects where I applied my skills to
                build practical, interactive, and useful applications.
              </p>

            </div>

          </ScrollReveal>


          <div className="space-y-5 md:space-y-6">

            {projects.map((project, index) => (

              <ScrollReveal
                key={project.number}
                delay={index * 0.1}
              >

                <motion.div
                  whileHover={{
                    y: -6
                  }}
                  className="group relative"
                >

                  <div
                    className={`absolute -inset-1 bg-purple-500/10 blur-2xl rounded-3xl transition duration-500 ${
                      project.featured
                        ? "opacity-40 group-hover:opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  <div
                    className={`relative border rounded-3xl p-5 sm:p-6 md:p-8 bg-white/5 backdrop-blur-xl transition duration-500 ${
                      project.featured
                        ? "border-purple-500/30"
                        : "border-white/10 hover:border-purple-500/30"
                    }`}
                  >

                    {project.featured && (
                      <div className="absolute top-5 right-5">

                        <motion.span
                          animate={{
                            boxShadow: [
                              "0 0 0 rgba(168,85,247,0)",
                              "0 0 20px rgba(168,85,247,0.25)",
                              "0 0 0 rgba(168,85,247,0)"
                            ]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity
                          }}
                          className="hidden sm:block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm"
                        >
                          Featured Project
                        </motion.span>

                      </div>
                    )}


                    <div className="flex gap-4 sm:gap-5">

                      <motion.span
                        whileHover={{
                          scale: 1.1
                        }}
                        className="text-purple-500 text-lg font-semibold pt-1 shrink-0"
                      >
                        {project.number}
                      </motion.span>


                      <div className="flex-1 min-w-0">

                        <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-400 transition duration-300 pr-0 sm:pr-20">
                          {project.title}
                        </h2>


                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-4 max-w-4xl">
                          {project.description}
                        </p>


                        <div className="flex flex-wrap gap-2.5 mt-6">

                          {project.tech.map((technology, techIndex) => (

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
                                delay:
                                  index * 0.1 +
                                  techIndex * 0.04
                              }}
                              whileHover={{
                                scale: 1.06,
                                y: -2
                              }}
                              className="px-3 py-2 rounded-xl border border-white/10 bg-black/30 text-gray-300 text-sm hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300"
                            >
                              {technology}
                            </motion.span>

                          ))}

                        </div>


                        {(project.github || project.live) && (

                          <div className="flex flex-wrap gap-3 sm:gap-4 mt-7">

                            {project.github && (
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{
                                  scale: 1.05
                                }}
                                whileTap={{
                                  scale: 0.97
                                }}
                                className="px-5 py-2.5 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition"
                              >
                                GitHub ↗
                              </motion.a>
                            )}


                            {project.live && (
                              <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{
                                  scale: 1.05
                                }}
                                whileTap={{
                                  scale: 0.97
                                }}
                                className="px-5 py-2.5 rounded-full border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition"
                              >
                                Live Demo ↗
                              </motion.a>
                            )}

                          </div>

                        )}

                      </div>

                    </div>

                  </div>

                </motion.div>

              </ScrollReveal>

            ))}

          </div>


          <ScrollReveal delay={0.2}>

            <div className="mt-10">

              <div className="border border-white/10 rounded-3xl p-6 sm:p-7 bg-white/5 backdrop-blur-sm">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                  <div>

                    <p className="text-gray-500 text-sm">
                      MORE PROJECTS
                    </p>

                    <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">
                      Check out my GitHub for more work.
                    </h3>

                  </div>


                  <motion.a
                    href="https://github.com/Anamikakumari07"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.05
                    }}
                    whileTap={{
                      scale: 0.97
                    }}
                    className="self-start md:self-auto px-6 py-3 rounded-full border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition"
                  >
                    Visit GitHub ↗
                  </motion.a>

                </div>

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>

    </PageTransition>
  )
}

export default Projects