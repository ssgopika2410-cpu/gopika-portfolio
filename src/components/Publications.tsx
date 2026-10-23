import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const PUBLICATIONS = [
  {
    number: '01',
    title:
      'Employing Artificial Intelligence Methods for the Diagnosis of Autism Spectrum Disorder in Children',
    authors:
      'R Sridevi, Helen K Joy, KJ Karthikeyan, SS Gopika, Neha Seirah Biju, PA Shriniha',
    conference: '2024 International Conference on IoT Based Control Networks and Intelligent Systems (ICICNIS)',
    date: '17 December 2024',
    pages: '823–827',
    publisher: 'IEEE',
    topics: ['AI', 'Machine Learning', 'Healthcare AI', 'ASD'],
    description:
      'Accurate and timely diagnosis of autism spectrum disorder (ASD) in children is challenging because of the complexity and variation of its clinical presentation. This work examines the application of artificial intelligence and machine learning methods for improving ASD diagnosis in pediatric populations, covering supervised and unsupervised learning approaches, feature selection techniques and ensemble methods.',
    url: 'https://ieeexplore.ieee.org/abstract/document/10823377/',
  },
  {
    number: '02',
    title: 'Reinforcement Learning for Quantum Phase Estimation Using Deep Q-Network',
    authors: 'B Sundharess, SS Gopika',
    conference: '2025 IEEE Madhya Pradesh Section Conference (MPCON)',
    date: '29 August 2025',
    pages: '316–321',
    publisher: 'IEEE',
    topics: ['Quantum Computing', 'Reinforcement Learning', 'Deep Q-Network', 'QPE'],
    description:
      'Quantum Phase Estimation is a fundamental quantum algorithm for estimating the eigenphases of unitary operators. This study explores reinforcement learning with a Deep Q-Network to learn effective strategies for quantum phase estimation using a customized environment based on the OpenAI Gym framework.',
    url: 'https://ieeexplore.ieee.org/abstract/document/11256566/',
  },
]

export default function Publications() {
  return (
    <section id="research" className="px-5 sm:px-10 py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="num text-sm text-stone">05</span>
          <span className="font-mono text-xs tracking-[0.2em] text-stone">RESEARCH</span>
        </div>

        <h2 className="font-display font-medium text-clamp-xl leading-[0.95] tracking-tight max-w-2xl">
          Asking better
          <br />
          questions.
        </h2>

        <p className="mt-8 max-w-xl text-stone text-[15px] sm:text-base leading-relaxed">
          Research interests spanning Artificial Intelligence, Machine
          Learning, healthcare applications, reinforcement learning and
          quantum computing.
        </p>

        <div className="mt-16 sm:mt-20 border-t border-ink/15">
          {PUBLICATIONS.map((p) => (
            <motion.a
              key={p.number}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group block border-b border-ink/15 py-10 sm:py-14 transition-colors hover:bg-ink hover:text-cream -mx-5 sm:-mx-10 px-5 sm:px-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="md:col-span-2 flex md:block items-center justify-between">
                  <span className="font-display text-5xl sm:text-7xl tracking-tight transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 inline-block origin-left text-stone group-hover:text-cream">
                    {p.number}
                  </span>
                  <ArrowUpRight
                    className="md:hidden transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={22}
                  />
                </div>

                <div className="md:col-span-10">
                  <h3 className="font-display text-xl sm:text-3xl leading-tight tracking-tight max-w-3xl">
                    {p.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-[15px] text-stone group-hover:text-cream/70">
                    {p.authors}
                  </p>

                  <p className="mt-1 text-sm sm:text-[15px] text-stone group-hover:text-cream/70">
                    {p.conference} · {p.date} · pp. {p.pages} · {p.publisher}
                  </p>

                  <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-stone group-hover:text-cream/80">
                    {p.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {p.topics.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] tracking-[0.12em] border border-current/25 rounded-full px-3 py-1.5 opacity-70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="hidden md:inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.15em] ml-auto">
                      READ ON IEEE
                      <ArrowUpRight
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        size={14}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
