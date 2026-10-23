import { motion } from 'framer-motion'

const SKILLS = [
  'AI',
  'Machine Learning',
  'Deep Learning',
  'NLP',
  'Computer Vision',
  'LLMs',
  'TensorFlow',
  'scikit-learn',
  'Python',
  'NLTK',
  'Node.js',
  'AngularJS',
  'Bootstrap',
  'Amazon EC2',
  'Data Analysis',
  'IoT',
]

// weight variety gives the "mixed small + huge typography" baggy contrast
const SIZES = [
  'text-3xl sm:text-5xl',
  'text-xl sm:text-3xl',
  'text-4xl sm:text-6xl',
  'text-2xl sm:text-4xl',
]

export default function Skills() {
  return (
    <section id="skills" className="px-5 sm:px-10 py-24 sm:py-32 bg-bone">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="num text-sm text-stone">04</span>
          <span className="font-mono text-xs tracking-[0.2em] text-stone">TOOLKIT</span>
        </div>

        <h2 className="font-display font-medium text-clamp-xl leading-[0.95] tracking-tight max-w-2xl mb-14 sm:mb-20">
          Things I like to
          <br />
          build with.
        </h2>

        <div className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-8 sm:gap-y-5">
          {SKILLS.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
              whileHover={{ scale: 1.08, color: '#A79CC9', rotate: -1 }}
              className={`font-display cursor-default tracking-tight leading-none select-none transition-colors ${SIZES[i % SIZES.length]}`}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
