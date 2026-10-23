import { motion } from 'framer-motion'

const SCHOOLS = [
  {
    period: '2023 — 2025',
    school: 'Christ University, Bangalore',
    degree: "Master's Degree",
    field: 'Artificial Intelligence and Machine Learning',
    areas: [
      'Machine Learning Algorithms',
      'Natural Language Processing',
      'Artificial Intelligence',
      'Deep Learning',
      'Computer Vision',
      'Data Analysis',
    ],
  },
  {
    period: '2021 — 2023',
    school: 'Christ Nagar College, Maranalloor',
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    areas: ['Computer Science', 'AngularJS', 'Bootstrap', 'Programming'],
  },
]

export default function Education() {
  return (
    <section id="education" className="px-5 sm:px-10 py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="num text-sm text-stone">03</span>
          <span className="font-mono text-xs tracking-[0.2em] text-stone">EDUCATION</span>
        </div>

        <h2 className="font-display font-medium text-clamp-xl leading-[0.95] tracking-tight max-w-2xl mb-16 sm:mb-20">
          Where it started.
        </h2>

        <div className="relative pl-8 sm:pl-14">
          <div className="absolute left-0 sm:left-4 top-2 bottom-2 w-px bg-ink/15" />

          {SCHOOLS.map((s, i) => (
            <motion.div
              key={s.school}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-16 last:mb-0"
            >
              <span className="absolute -left-8 sm:-left-14 top-2 w-3 h-3 rounded-full bg-gold border-2 border-cream" />

              <span className="font-mono text-[11px] tracking-[0.2em] text-stone">
                {s.period}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl mt-2 tracking-tight">
                {s.school}
              </h3>
              <p className="mt-2 text-ink/80 text-[15px] sm:text-base">
                {s.degree} · {s.field}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {s.areas.map((a) => (
                  <span
                    key={a}
                    className="font-mono text-[11px] tracking-[0.1em] border border-ink/15 rounded-full px-3 py-1.5 text-stone"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
