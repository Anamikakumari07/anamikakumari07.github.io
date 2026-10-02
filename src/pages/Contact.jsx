import { motion } from "motion/react"
import PageTransition from "../components/PageTransition"

function Contact() {
  const phoneNumber = "+919661569833"
  const email = "kumari.anamika1611@gmail.com"

  const formEndpoint = "https://formspree.io/f/xoevoqvp"

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

  const contactOptions = [
    {
      icon: "📞",
      title: "Call Me",
      description: "Have a quick discussion?",
      url: `tel:${phoneNumber}`,
      text: "Call"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Let's chat on WhatsApp.",
      url: `https://wa.me/${phoneNumber.replace("+", "")}`,
      text: "Message"
    },
    {
      icon: "📱",
      title: "Send SMS",
      description: "Send me a quick message.",
      url: `sms:${phoneNumber}`,
      text: "SMS"
    },
    {
      icon: "📧",
      title: "Email Me",
      description: "For internships and opportunities.",
      url: `mailto:${email}`,
      text: "Email"
    }
  ]

  return (
    <PageTransition>
      <section className="min-h-screen px-6 pt-32 pb-24 relative overflow-hidden">

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-0 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full"
        />

        <div className="max-w-7xl mx-auto relative">

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="text-center mb-14"
          >
            <p className="text-purple-500 font-medium mb-3 tracking-wider">
              GET IN TOUCH
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Let's start a

              <span className="block bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                conversation
              </span>
            </h1>

            <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              Have a project idea, internship opportunity, or just
              want to connect? Feel free to reach out.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">

            <motion.div
              initial={{
                opacity: 0,
                x: -40
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.1
              }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-purple-500/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative h-full border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-xl hover:border-purple-500/30 transition duration-500">

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

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {contactOptions.map((option, index) => (
                    <motion.a
                      key={option.title}
                      href={option.url}
                      target={
                        option.title === "WhatsApp"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        option.title === "WhatsApp"
                          ? "noreferrer"
                          : undefined
                      }
                      initial={{
                        opacity: 0,
                        y: 20
                      }}
                      animate={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        delay: 0.3 + index * 0.08
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.02
                      }}
                      className="p-5 rounded-2xl border border-white/10 bg-black/20 hover:bg-purple-500/10 hover:border-purple-500/30 transition duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">
                          {option.icon}
                        </span>

                        <span className="text-purple-400">
                          ↗
                        </span>
                      </div>

                      <h3 className="text-white font-semibold mt-4">
                        {option.title}
                      </h3>

                      <p className="text-gray-500 text-sm mt-2">
                        {option.description}
                      </p>

                      <span className="inline-block text-purple-400 text-sm mt-4">
                        {option.text}
                      </span>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-sm text-gray-500 mb-2">
                    EMAIL
                  </p>

                  <a
                    href={`mailto:${email}`}
                    className="text-gray-300 hover:text-purple-400 transition break-all"
                  >
                    {email}
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
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      transition={{
                        delay: 0.6 + index * 0.1
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

            <motion.div
              initial={{
                opacity: 0,
                x: 40
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.2
              }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-purple-500/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-xl hover:border-purple-500/30 transition duration-500">

                <p className="text-purple-500 font-medium tracking-wider">
                  SEND A MESSAGE
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                  Tell me about your idea
                </h2>

                <form
                  action={formEndpoint}
                  method="POST"
                  className="mt-8"
                >

                  <div className="mb-5">
                    <label className="block text-gray-300 mb-2">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition"
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-gray-300 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Tell me about your project..."
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 rounded-xl bg-purple-500 text-white font-medium hover:bg-purple-600 hover:scale-[1.01] transition duration-300"
                  >
                    Send Message ↗
                  </button>

                </form>

              </div>
            </motion.div>

          </div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 0.8
            }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-sm">
              © 2026 Anamika Kumari. Built with React & Tailwind CSS.
            </p>
          </motion.div>

        </div>
      </section>
    </PageTransition>
  )
}

export default Contact