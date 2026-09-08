import { motion } from "motion/react"
import { Link } from "react-router"
import PageTransition from "../components/PageTransition"
import ScrollReveal from "../components/ScrollReveal"

function Achievements() {
  const achievements = [
    {
      icon: "⌘",
      number: "300+",
      title: "DSA Problems Solved",
      description:
        "Solved 300+ Data Structures and Algorithms problems on LeetCode, continuously improving problem-solving and algorithmic thinking.",
      link: "https://leetcode.com/u/Anamikaa_kumari/"
    },
    {
      icon: "★",
      number: "7.74",
      title: "Current CGPA",
      description:
        "Maintaining a strong academic performance while pursuing B.Tech in Electronics and Communication Engineering."
    },
    {
      icon: "⚡",
      number: "Lead",
      title: "Think India Academic Club",
      description:
        "Leading academic club initiatives, student engagement activities, mentoring students, and coordinating literary and academic events."
    }
  ]

  return (
    <PageTransition>

      <section className="min-h-screen px-5 sm:px-6 pt-28 md:pt-32 pb-20 md:pb-24 relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative">

          <ScrollReveal>

            <div className="mb-10 md:mb-14">

              <p className="text-purple-500 font-medium mb-3 tracking-wider">
                ACHIEVEMENTS
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                More than

                <span className="block bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                  just code
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
                A few highlights that reflect my problem-solving skills,
                academic journey, and leadership experience.
              </p>

            </div>

          </ScrollReveal>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

            {achievements.map((achievement, index) => (

              <ScrollReveal
                key={achievement.title}
                delay={index * 0.1}
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
                        scale: 1.12,
                        rotate: 6
                      }}
                      className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mb-7"
                    >

                      <span className="text-purple-400 text-xl">
                        {achievement.icon}
                      </span>

                    </motion.div>


                    <motion.p
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
                        duration: 0.5,
                        delay: 0.2 + index * 0.1
                      }}
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent"
                    >
                      {achievement.number}
                    </motion.p>


                    <h2 className="text-xl md:text-2xl font-semibold text-white mt-3">
                      {achievement.title}
                    </h2>


                    <p className="text-gray-400 leading-relaxed mt-4">
                      {achievement.description}
                    </p>


                    {achievement.link && (
                      <motion.a
                        href={achievement.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{
                          x: 5
                        }}
                        className="inline-flex items-center gap-2 text-purple-400 mt-6 hover:text-purple-300 transition"
                      >
                        View LeetCode Profile
                        <span>
                          ↗
                        </span>
                      </motion.a>
                    )}

                  </div>

                </motion.div>

              </ScrollReveal>

            ))}

          </div>


          <ScrollReveal delay={0.2}>

            <div className="mt-8">

              <div className="border border-white/10 rounded-3xl p-6 sm:p-7 md:p-8 bg-white/5 backdrop-blur-xl">

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">

                  <div>
                    <p className="text-3xl font-bold text-white">
                      300+
                    </p>

                    <p className="text-gray-500 mt-2">
                      DSA Problems
                    </p>
                  </div>


                  <div>
                    <p className="text-3xl font-bold text-white">
                      7.74
                    </p>

                    <p className="text-gray-500 mt-2">
                      Current CGPA
                    </p>
                  </div>


                  <div>
                    <p className="text-3xl font-bold text-white">
                      2024
                    </p>

                    <p className="text-gray-500 mt-2">
                      Started B.Tech
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </ScrollReveal>


          <ScrollReveal delay={0.3}>

            <div className="mt-8 text-center">

              <p className="text-gray-500 mb-4">
                Want to know more about my work?
              </p>

              <motion.div
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.97
                }}
                className="inline-block"
              >

                <Link
                  to="/projects"
                  className="inline-flex px-6 py-3 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition"
                >
                  Explore My Projects ↗
                </Link>

              </motion.div>

            </div>

          </ScrollReveal>

        </div>

      </section>

    </PageTransition>
  )
}

export default Achievements