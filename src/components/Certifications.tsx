import { motion } from 'framer-motion'

const CERTS = [
  {
    title: 'AWS Academy Graduate',
    issuer: 'Amazon Web Services',
    date: 'June 2024',
    detail: 'AWS Academy Cloud Foundations',
  },
  {
    title: 'Getting Started With Arduino UNO',
    issuer: 'Infosys Springboard',
    date: 'June 2024',
  },
  {
    title: 'Natural Language Processing using Python',
    issuer: 'Infosys Springboard',
    date: 'April 2024',
  },
  {
    title: 'Data Engineering Getting Started',
    issuer: 'Infosys Springboard',
    date: 'November 2023',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="px-5 sm:px-10 py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="num text-sm text-stone">06</span>
          <span className="font-mono text-xs tracking-[0.2em] text-stone">CERTIFICATIONS</span>
        </div>

        <h2 className="font-display font-medium text-clamp-xl leading-[0.95] tracking-tight max-w-2xl mb-14 sm:mb-20">
          Keeping the
          <br />
          fundamentals sharp.
        </h2>

        <div className="border-t border-ink/15">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline border-b border-ink/15 py-7 sm:py-8"
            >
              <span className="sm:col-span-2 font-mono text-[11px] tracking-[0.15em] text-stone">
                {c.date}
              </span>
              <h3 className="sm:col-span-6 font-display text-xl sm:text-2xl tracking-tight">
                {c.title}
              </h3>
              <p className="sm:col-span-4 text-sm text-stone sm:text-right">
                {c.issuer}
                {c.detail ? ` · ${c.detail}` : ''}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
