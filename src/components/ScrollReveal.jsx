import { motion } from "motion/react"

function ScrollReveal({
  children,
  delay = 0,
  direction = "up"
}) {
  const animations = {
    up: {
      initial: {
        opacity: 0,
        y: 40
      },
      whileInView: {
        opacity: 1,
        y: 0
      }
    },

    down: {
      initial: {
        opacity: 0,
        y: -40
      },
      whileInView: {
        opacity: 1,
        y: 0
      }
    },

    left: {
      initial: {
        opacity: 0,
        x: -40
      },
      whileInView: {
        opacity: 1,
        x: 0
      }
    },

    right: {
      initial: {
        opacity: 0,
        x: 40
      },
      whileInView: {
        opacity: 1,
        x: 0
      }
    }
  }

  const animation = animations[direction]

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.whileInView}
      viewport={{
        once: true,
        amount: 0.15
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal