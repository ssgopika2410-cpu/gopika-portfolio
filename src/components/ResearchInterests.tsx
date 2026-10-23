import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const WORDS = [
  'ARTIFICIAL INTELLIGENCE',
  'MACHINE LEARNING',
  'HEALTHCARE AI',
  'NATURAL LANGUAGE PROCESSING',
  'COMPUTER VISION',
  'DEEP LEARNING',
  'REINFORCEMENT LEARNING',
  'QUANTUM COMPUTING',
  'LARGE LANGUAGE MODELS',
  'DATA SCIENCE',
  'IOT',
]

function Row({ text, direction, progress }: { text: string; direction: number; progress: any }) {
  const x = useTransform(progress, [0, 1], [0, direction * 120])
  return (
    <motion.div style={{ x }} className="whitespace-nowrap">
      <span className="font-display text-[9vw] sm:text-[5.5vw] leading-[1.05] tracking-tight text-ink/90">
        {text} &nbsp;·&nbsp; {text} &nbsp;·&nbsp;
      </span>
    </motion.div>
  )
}

export default function ResearchInterests() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  return (
    <section ref={ref} className="py-20 sm:py-28 overflow-hidden bg-bone">
      <div className="px-5 sm:px-10 max-w-[1500px] mx-auto mb-14">
        <span className="font-mono text-xs tracking-[0.2em] text-stone">
          CURRENTLY CURIOUS ABOUT
        </span>
      </div>

      <div className="flex flex-col gap-2 sm:gap-3">
        {WORDS.map((w, i) => (
          <Row key={w} text={w} direction={i % 2 === 0 ? -1 : 1} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}
