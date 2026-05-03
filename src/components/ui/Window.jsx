import { useEffect, useRef, useState } from 'react'

export function Window({ title, children, className = '', pink = false }) {
  const windowRef = useRef(null)
  const [hasOpened, setHasOpened] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const node = windowRef.current

    if (!node) {
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasOpened(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12,
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`window-open-shell relative ${hasOpened ? 'is-open' : ''} ${className}`}
      ref={windowRef}
    >
      <span className="window-open-outline" aria-hidden="true" />
      <div className="window-open-content border-[3px] border-black bg-white shadow-[10px_10px_0_#7d6ab0]">
        <div
          className={`flex min-h-10 items-center justify-between border-b-[3px] border-black px-3 ${
            pink ? 'bg-[#ef73b0]' : 'bg-[#c9c9c9]'
          }`}
        >
          <span className="text-sm font-black uppercase tracking-[0.08em]">
            {title}
          </span>
          <div className="flex gap-1.5">
            <span className="h-3 w-3 border-2 border-black bg-[#f7f7f7]" />
            <span className="h-3 w-3 border-2 border-black bg-[#f7f7f7]" />
            <span className="h-3 w-3 border-2 border-black bg-[#f7f7f7]" />
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
