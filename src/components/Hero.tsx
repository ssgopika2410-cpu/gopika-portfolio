import { motion } from 'framer-motion'
import heroImg from '../assets/images/gopika-hero.png'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-24 px-5 sm:px-10 overflow-hidden">
      <div className="relative max-w-[1500px] mx-auto">
        {/* big name typography */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-clamp-hero leading-[0.85] tracking-tight"
        >
          GOPIKA
          <br />
          S&nbsp;S
        </motion.h1>

        {/* floating portrait, overlapping the type on larger screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative sm:absolute sm:right-2 md:right-10 sm:top-6 md:top-2 w-[78%] sm:w-[34%] md:w-[30%] max-w-[420px] mt-8 sm:mt-0 ml-auto sm:ml-0"
        >
          <div className="relative border-[3px] border-ink/90 bg-bone p-2 shadow-[10px_14px_0_0_rgba(23,21,15,0.12)]">
            <img
              src={heroImg}
              alt="Gopika S S, Teaching Associate in Artificial Intelligence and Machine Learning, standing on campus"
              className="w-full aspect-[4/5] object-cover grayscale-0"
            />
            <span className="absolute -bottom-4 -left-4 bg-ink text-cream font-mono text-[10px] tracking-[0.2em] px-3 py-1.5 rotate-[-2deg]">
              CHRIST UNIVERSITY
            </span>
          </div>
          <span className="absolute -top-5 right-2 font-mono text-[10px] tracking-[0.2em] text-stone rotate-2">
            AI / ML
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 sm:mt-6 max-w-xl"
        >
          <p className="font-display text-xl sm:text-2xl leading-snug">
            Teaching Associate — Artificial Intelligence &amp; Machine Learning
          </p>
          <p className="mt-5 text-stone text-[15px] sm:text-base leading-relaxed">
            MSc graduate in Artificial Intelligence and Machine Learning from Christ
            University, Bangalore, currently working as a Teaching Associate at
            Christ University.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.18em] text-stone">
            <span>TRIVANDRUM, INDIA</span>
            <span className="rule w-8" />
            <span>IEEE PUBLISHED</span>
            <span className="rule w-8" />
            <span>2025</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="max-w-[1500px] mx-auto mt-20 sm:mt-28 rule"
      />
    </section>
  )
}
