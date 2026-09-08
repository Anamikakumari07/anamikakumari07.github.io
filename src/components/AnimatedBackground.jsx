import { motion } from "motion/react"

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-[15%] w-72 h-72 bg-purple-600/10 blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-[10%] w-80 h-80 bg-fuchsia-600/10 blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] left-[45%] w-60 h-60 bg-violet-500/10 blur-3xl rounded-full"
      />

    </div>
  )
}

export default AnimatedBackground