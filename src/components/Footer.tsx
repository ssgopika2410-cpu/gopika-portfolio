import { ArrowUpRight, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="px-5 sm:px-10 pt-16 pb-10 border-t border-ink/15">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <span className="font-display text-4xl sm:text-5xl tracking-tight">
              Gopika S S
            </span>
            <p className="mt-3 text-stone text-sm">
              Teaching Associate · Artificial Intelligence &amp; Machine Learning
            </p>
            <p className="text-stone text-sm">Trivandrum, India</p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/gopika-s-s-b63b02233/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.15em] hover:text-lilac transition-colors"
            >
              LINKEDIN
              <ArrowUpRight size={14} />
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.15em] hover:text-lilac transition-colors"
            >
              BACK TO TOP
              <ArrowUp size={14} />
            </a>
          </div>
        </div>

        <div className="mt-12 rule" />
        <p className="mt-6 font-mono text-[11px] tracking-[0.1em] text-stone">
          © 2026 Gopika S S
        </p>
      </div>
    </footer>
  )
}
