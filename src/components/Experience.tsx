import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="px-5 sm:px-10 py-24 sm:py-32 bg-ink text-cream">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="num text-sm text-cream/50">02</span>
          <span className="font-mono text-xs tracking-[0.2em] text-cream/50">EXPERIENCE</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-clamp-xl leading-[0.95] tracking-tight max-w-3xl"
        >
          Currently teaching
          <br />
          &amp; learning.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 border-t border-cream/15"
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-10 py-10 items-start">
            <span className="sm:col-span-4 font-display text-3xl sm:text-5xl tracking-tight text-cream/90">
              May 2025 — Present
            </span>

            <div className="sm:col-span-8">
              <h3 className="font-display text-xl sm:text-2xl">Teaching Associate</h3>
              <p className="mt-1 text-cream/60 text-sm">
                Christ University, Bangalore · Full-time · On-site
              </p>
              <p className="mt-5 max-w-xl text-cream/70 text-[15px] leading-relaxed">
                Currently working as a Teaching Associate at Christ University,
                contributing to an academic environment centred around
                learning, technology and student engagement.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="border-b border-cream/15" />
      </div>
    </section>
  )
}
