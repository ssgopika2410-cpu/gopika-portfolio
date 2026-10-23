import { motion } from 'framer-motion'
import aboutImg from '../assets/images/gopika-about.png'

export default function Philosophy() {
  return (
    <section className="relative px-5 sm:px-10 py-32 sm:py-48 bg-ink text-cream overflow-hidden">
      <div className="max-w-[1500px] mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-[16vw] sm:text-[10vw] leading-[0.82] tracking-tight"
        >
          KEEP
          <br />
          LEARNING.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 max-w-sm text-cream/60 text-[15px] sm:text-base"
        >
          Technology changes quickly. Curiosity keeps you moving.
        </motion.p>
      </div>

      <motion.img
        src={aboutImg}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 0.9, x: 0 }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block absolute right-[-4%] bottom-0 w-[26%] max-w-[360px] grayscale contrast-125"
      />
    </section>
  )
}
