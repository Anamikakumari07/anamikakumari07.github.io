import { motion } from "motion/react"
import PageTransition from "../components/PageTransition"
import ScrollReveal from "../components/ScrollReveal"

function Skills() {
  const skillCategories = [
    {
      icon: "💻",
      title: "Programming",
      description:
        "Languages I use for problem solving and development.",
      skills: [
        "C",
        "C++",
        "JavaScript",
        "Python",
        "SQL"
      ]
    },
    {
      icon: "⚛️",
      title: "Frontend",
      description:
        "Technologies I use to create modern user interfaces.",
      skills: [
        "HTML5",
        "CSS3",
        "React.js"
      ]
    },
    {
      icon: "⚙️",
      title: "Backend",
      description:
        "Tools I use to build server-side applications.",
      skills: [
        "Node.js",
        "Express.js"
      ]
    },
    {
      icon: "🗄️",
      title: "Database",
      description:
        "Database technology I use for application data.",
      skills: [
        "MongoDB"
      ]
    },
    {
      icon: "🛠️",
      title: "Tools",
      description:
        "Development tools I use in my workflow.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman"
      ]
    },
    {
      icon: "⚛️",
      title: "React Concepts",
      description:
        "React concepts and tools I have worked with.",
      skills: [
        "React Router",
        "Context API",
        "Local Storage",
        "Custom Hooks"
      ]
    }
  ]

  return (
    <PageTransition>

      <section className="min-h-screen px-5 sm:px-6 pt-28 md:pt-32 pb-20 md:pb-24 relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative">

          <ScrollReveal>

            <div className="mb-10 md:mb-14">

              <p className="text-purple-500 font-medium mb-3 tracking-wider">
                MY SKILLS
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                Technologies I

                <span className="block bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                  work with
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
                A collection of technologies, programming languages,
                frameworks, and tools that I use to build projects
                and solve problems.
              </p>

            </div>

          </ScrollReveal>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

            {skillCategories.map((category, index) => (

              <ScrollReveal
                key={category.title}
                delay={index * 0.08}
              >

                <motion.div
                  whileHover={{
                    y: -8
                  }}
                  className="group relative h-full"
                >

                  <div className="absolute -inset-1 bg-purple-500/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative h-full border border-white/10 rounded-3xl p-6 sm:p-7 bg-white/5 backdrop-blur-xl hover:border-purple-500/30 transition duration-500">

                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5
                      }}
                      className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mb-6"
                    >

                      <span className="text-2xl">
                        {category.icon}
                      </span>

                    </motion.div>


                    <h2 className="text-2xl font-bold text-white">
                      {category.title}
                    </h2>


                    <p className="text-gray-500 mt-3 leading-relaxed">
                      {category.description}
                    </p>


                    <div className="h-px bg-white/10 my-6" />


                    <div className="flex flex-wrap gap-2.5">

                      {category.skills.map((skill, skillIndex) => (

                        <motion.span
                          key={skill}
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
                              index * 0.08 +
                              skillIndex * 0.05
                          }}
                          whileHover={{
                            scale: 1.06,
                            y: -2
                          }}
                          className="px-3 py-2 rounded-xl border border-white/10 bg-black/30 text-gray-300 text-sm hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300"
                        >
                          {skill}
                        </motion.span>

                      ))}

                    </div>

                  </div>

                </motion.div>

              </ScrollReveal>

            ))}

          </div>


          <ScrollReveal delay={0.2}>

            <div className="mt-10">

              <div className="relative overflow-hidden border border-purple-500/20 rounded-3xl p-6 sm:p-7 md:p-8 bg-purple-500/5">

                <motion.div
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                  <div>

                    <p className="text-purple-400 font-medium">
                      ALWAYS LEARNING
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                      Improving one skill at a time.
                    </h3>

                    <p className="text-gray-400 mt-3 max-w-2xl">
                      I'm continuously learning new technologies and
                      strengthening my existing skills through projects,
                      practice, and problem solving.
                    </p>

                  </div>


                  <motion.div
                    animate={{
                      y: [0, -6, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-5xl"
                  >
                    🚀
                  </motion.div>

                </div>

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>

    </PageTransition>
  )
}

export default Skills