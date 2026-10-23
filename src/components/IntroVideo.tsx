import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import introVideo from '../assets/video/intro.mp4'
import posterImg from '../assets/images/gopika-hero.png'

interface Props {
  onComplete: () => void
}

export default function IntroVideo({ onComplete }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ended, setEnded] = useState(false)
  const [needsTap, setNeedsTap] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const tryPlay = async () => {
      try {
        await v.play()
      } catch {
        setNeedsTap(true)
      }
    }
    tryPlay()
  }, [])

  const finish = () => {
    setEnded(true)
    // allow the exit animation to play before unmounting / revealing the site
    window.setTimeout(() => {
      setHidden(true)
      onComplete()
    }, 900)
  }

  const handlePlayClick = () => {
    videoRef.current?.play()
    setNeedsTap(false)
  }

  if (hidden) return null

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="fixed inset-0 z-50 bg-ink"
          initial={{ opacity: 1 }}
          animate={{ opacity: ended ? 0 : 1 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <video
            ref={videoRef}
            src={introVideo}
            poster={posterImg}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={finish}
            className="h-full w-full object-cover"
          />

          {/* darken overlay that intensifies right before transition */}
          <motion.div
            className="absolute inset-0 bg-ink"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: ended ? 0.75 : 0.15 }}
            transition={{ duration: 0.9 }}
          />

          <motion.div
            className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-10 md:p-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: ended ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-display text-cream/90 text-xl sm:text-2xl tracking-tight">
              Gopika S S
            </span>
            <span className="mt-2 font-mono text-[11px] sm:text-xs tracking-[0.25em] text-cream/60">
              AI / ML · TEACHING · RESEARCH
            </span>
          </motion.div>

          {needsTap && !ended && (
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-ink/40 text-cream font-display text-lg"
            >
              <span className="rounded-full border border-cream/50 px-7 py-3">
                Tap to begin
              </span>
            </button>
          )}

          <button
            onClick={finish}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 font-mono text-[11px] tracking-[0.2em] text-cream/70 hover:text-cream transition-colors"
          >
            SKIP ↗
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
