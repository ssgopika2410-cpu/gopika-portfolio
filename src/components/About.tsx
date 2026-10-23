import { motion } from 'framer-motion'
import aboutImg from '../assets/images/gopika-about.png'

export default function About() {
  return (
    <section id="about" className="px-5 sm:px-10 py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="num text-sm text-stone">01</span>
          <span className="font-mono text-xs tracking-[0.2em] text-stone">ABOUT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 order-2 md:order-1"
          >
            <h2 className="font-display font-medium text-clamp-xl leading-[0.95] tracking-tight">
              Curious about how
              <br />
              intelligence becomes
              <br />
              useful.
            </h2>

            <p className="mt-8 max-w-lg text-stone text-[15px] sm:text-base leading-relaxed">
              MSc graduate in Artificial Intelligence and Machine Learning from
              Christ University, Bangalore (2025), currently working as a
              Teaching Associate at Christ University.
            </p>
            <p className="mt-4 max-w-lg text-stone text-[15px] sm:text-base leading-relaxed">
              Passionate about Artificial Intelligence, Machine Learning and
              data-driven technologies, with hands-on experience in TensorFlow,
              scikit-learn, programming and data analysis.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-y-3 gap-x-6 max-w-xs font-mono text-[11px] tracking-[0.15em] text-stone">
              <span>TRIVANDRUM, INDIA</span>
              <span>AI / ML</span>
              <span>TEACHING</span>
              <span>RESEARCH</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 order-1 md:order-2 relative"
          >
            <div className="relative ml-auto w-[88%] sm:w-[75%] md:w-full border-[3px] border-ink/90 bg-bone p-2 rotate-1">
              <img
                src={aboutImg}
                alt="Gopika S S smiling on campus, wearing a conference lanyard"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <span className="absolute -left-2 bottom-6 sm:bottom-10 bg-lilac text-ink font-mono text-[10px] tracking-[0.2em] px-3 py-1.5 -rotate-2">
              RESEARCHER
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
