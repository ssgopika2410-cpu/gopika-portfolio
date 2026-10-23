import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ visible }: { visible: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-5 sm:px-10 py-5"
      >
        <button
          onClick={() => go('#top')}
          className="font-display text-base sm:text-lg tracking-tight"
        >
          Gopika&nbsp;S&nbsp;S
        </button>

        <nav
          className={`hidden md:flex items-center gap-1 rounded-full border border-ink/10 px-2 py-2 transition-colors duration-300 ${
            scrolled ? 'bg-cream/90 backdrop-blur-md shadow-[0_4px_30px_-10px_rgba(0,0,0,0.15)]' : 'bg-cream/40 backdrop-blur-sm'
          }`}
        >
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="px-4 py-2 text-sm font-medium rounded-full hover:bg-ink hover:text-cream transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-ink/15 bg-cream/70"
        >
          <Menu size={20} />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink text-cream flex flex-col justify-between p-7"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg">Gopika S S</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-cream/20"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  onClick={() => go(l.href)}
                  className="text-left font-display text-[12vw] leading-[1.05] tracking-tight"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>

            <span className="font-mono text-xs tracking-[0.2em] text-cream/50">
              TRIVANDRUM, INDIA
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
