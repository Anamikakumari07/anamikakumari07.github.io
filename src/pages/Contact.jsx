import { motion } from "motion/react"
import PageTransition from "../components/PageTransition"
import ScrollReveal from "../components/ScrollReveal"

function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      value: "Anamikakumari07",
      url: "https://github.com/Anamikakumari07"
    },
    {
      name: "LinkedIn",
      value: "Anamika Kumari",
      url: "https://www.linkedin.com/in/anamika-kumari-895142322/"
    },
    {
      name: "LeetCode",
      value: "Anamikaa_kumari",
      url: "https://leetcode.com/u/Anamikaa_kumari/"
    }
  ]

  return (
    <PageTransition>

      <section className="min-h-screen px-5 sm:px-6 pt-28 md:pt-32 pb-20 md:pb-24 relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative">

          <ScrollReveal>

            <div className="text-center mb-10 md:mb-14">

              <p className="text-purple-500 font-medium mb-3 tracking-wider">
                GET IN TOUCH
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                Let's start a

                <span className="block bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                  conversation
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
                Have a project idea, internship opportunity, or just
                want to connect? Feel free to reach out.
              </p>

            </div>

          </ScrollReveal>


          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">


            <ScrollReveal direction="left">

              <motion.div
                whileHover={{
                  y: -6
                }}
                className="relative group h-full"
              >

                <div className="absolute -inset-1 bg-purple-500/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative h-full border border-white/10 rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-xl hover:border-purple-500/30 transition duration-500">

                  <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mb-7">
                    <span className="text-2xl">
                      ✉️
                    </span>
                  </div>

                  <p className="text-purple-500 font-medium tracking-wider">
                    CONTACT
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                    Let's connect
                  </h2>

                  <p className="text-gray-400 leading-relaxed mt-4">
                    I'm always open to discussing new projects,
                    internships, collaborations, and opportunities
                    to learn and grow.
                  </p>


                  <div className="mt-8">

                    <p className="text-sm text-gray-500 mb-2">
                      EMAIL
                    </p>

                    <a
                      href="mailto:kumari.anamika1611@gmail.com"
                      className="text-gray-300 hover:text-purple-400 transition break-all"
                    >
                      kumari.anamika1611@gmail.com
                    </a>

                  </div>


                  <div className="mt-8 space-y-4">

                    {socialLinks.map((social, index) => (

                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{
                          opacity: 0,
                          x: -15
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0
                        }}
                        viewport={{
                          once: true
                        }}
                        transition={{
                          delay: index * 0.1
                        }}
                        whileHover={{
                          x: 6
                        }}
                        className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-black/20 hover:bg-purple-500/10 hover:border-purple-500/30 transition duration-300"
                      >

                        <div>

                          <p className="text-gray-500 text-sm">
                            {social.name}
                          </p>

                          <p className="text-gray-300 mt-1">
                            {social.value}
                          </p>

                        </div>

                        <span className="text-purple-400">
                          ↗
                        </span>

                      </motion.a>

                    ))}

                  </div>


                  <motion.a
                    href="/resume.pdf"
                    download
                    whileHover={{
                      scale: 1.03
                    }}
                    whileTap={{
                      scale: 0.97
                    }}
                    className="inline-flex mt-8 px-6 py-3 rounded-full border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition"
                  >
                    Download My Resume ↓
                  </motion.a>

                </div>

              </motion.div>

            </ScrollReveal>


            <ScrollReveal direction="right">

              <motion.div
                whileHover={{
                  y: -6
                }}
                className="relative group h-full"
              >

                <div className="absolute -inset-1 bg-purple-500/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative h-full border border-white/10 rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-xl hover:border-purple-500/30 transition duration-500">

                  <p className="text-purple-500 font-medium tracking-wider">
                    SEND A MESSAGE
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                    Tell me about your idea
                  </h2>


                  <form className="mt-8">

                    <div className="mb-5">

                      <label className="block text-gray-300 mb-2">
                        Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition"
                      />

                    </div>


                    <div className="mb-5">

                      <label className="block text-gray-300 mb-2">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition"
                      />

                    </div>


                    <div className="mb-6">

                      <label className="block text-gray-300 mb-2">
                        Message
                      </label>

                      <textarea
                        rows="6"
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition resize-none"
                      />

                    </div>


                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.02
                      }}
                      whileTap={{
                        scale: 0.98
                      }}
                      className="w-full px-6 py-3.5 rounded-xl bg-purple-500 text-white font-medium hover:bg-purple-600 transition duration-300"
                    >
                      Send Message ↗
                    </motion.button>

                  </form>

                </div>

              </motion.div>

            </ScrollReveal>

          </div>


          <ScrollReveal delay={0.2}>

            <div className="text-center mt-12">

              <p className="text-gray-600 text-sm">
                © 2026 Anamika Kumari. Built with React & Tailwind CSS.
              </p>

            </div>

          </ScrollReveal>

        </div>

      </section>

    </PageTransition>
  )
}

export default Contact