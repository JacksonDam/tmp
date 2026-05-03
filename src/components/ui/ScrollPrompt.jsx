import { useEffect, useState } from 'react'

export function ScrollPrompt({ config }) {
  const [hasScrolled, setHasScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 12,
  )

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        setHasScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 border-[3px] border-black bg-white px-4 py-3 font-mono font-black shadow-[5px_5px_0_#ef73b0] transition duration-500 sm:bottom-8 sm:right-8 ${
        hasScrolled
          ? 'pointer-events-none translate-y-3 opacity-0'
          : 'opacity-100'
      }`}
      aria-hidden={hasScrolled}
    >
      <span className="text-sm uppercase tracking-[0.18em]">{config.label}</span>
      <span className="scroll-prompt-arrow grid h-8 w-8 place-items-center border-[3px] border-black bg-[#ef73b0] text-xl leading-none">
        {config.arrow}
      </span>
    </div>
  )
}
