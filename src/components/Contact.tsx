import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="px-5 sm:px-10 py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="num text-sm text-stone">07</span>
          <span className="font-mono text-xs tracking-[0.2em] text-stone">CONTACT</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-clamp-xl leading-[0.95] tracking-tight max-w-3xl"
        >
          Let&apos;s talk about
          <br />
          what&apos;s next.
        </motion.h2>

        <p className="mt-8 max-w-lg text-stone text-[15px] sm:text-base leading-relaxed">
          Whether it&apos;s technology, teaching, research or an interesting
          idea, I&apos;m always open to meaningful conversations.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-8">
          <a
            href="https://www.linkedin.com/in/gopika-s-s-b63b02233/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-ink text-cream rounded-full pl-7 pr-5 py-4 w-fit font-display text-lg sm:text-xl tracking-tight transition-transform hover:scale-[1.03]"
          >
            Connect on LinkedIn
            <ArrowUpRight
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              size={22}
            />
          </a>

          <span className="font-mono text-[11px] tracking-[0.2em] text-stone">
            TRIVANDRUM, KERALA, INDIA
          </span>
        </div>
      </div>
    </section>
  )
}
