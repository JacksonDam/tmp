export function Sticker({ className = '', children }) {
  return (
    <span
      className={`handdrawn-sticker absolute grid h-9 w-9 place-items-center text-3xl font-black leading-none text-[#2d2554] drop-shadow-[2px_2px_0_#f4aad0] ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}
