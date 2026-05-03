const chromeClassName = (variant) =>
  `inline-flex min-h-8 items-center border-[3px] border-black px-4 text-xs font-black shadow-[3px_3px_0_#8d8d8d] transition hover:-translate-y-0.5 focus:outline-2 focus:outline-offset-4 focus:outline-black ${
    variant === 'pink' ? 'bg-[#ef73b0]' : 'bg-[#dedede]'
  }`

export function ButtonChrome({ children, href, variant = 'gray' }) {
  if (href) {
    return (
      <a className={chromeClassName(variant)} href={href}>
        {children}
      </a>
    )
  }

  return (
    <span className={chromeClassName(variant)}>
      {children}
    </span>
  )
}
