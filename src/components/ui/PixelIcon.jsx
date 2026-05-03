export function PixelIcon({ type }) {
  if (type === 'chat') {
    return (
      <span className="relative block h-9 w-9 border-[3px] border-black bg-[#ef73b0]">
        <span className="absolute left-2 top-2 h-2 w-4 border-2 border-black bg-white" />
        <span className="absolute bottom-1 right-1 h-2 w-2 border-b-[3px] border-r-[3px] border-black" />
      </span>
    )
  }

  if (type === 'tasks') {
    return (
      <span className="block h-9 w-9 border-[3px] border-black bg-[#ef73b0] p-1.5">
        <span className="mb-1 block h-1 border-b-2 border-black" />
        <span className="mb-1 block h-1 border-b-2 border-black" />
        <span className="block h-1 border-b-2 border-black" />
      </span>
    )
  }

  if (type === 'heart') {
    return (
      <span className="grid h-9 w-9 place-items-center border-[3px] border-black bg-[#ef73b0] text-xl leading-none">
        ♥
      </span>
    )
  }

  return (
    <span className="grid h-9 w-9 place-items-center border-[3px] border-black bg-[#ef73b0] text-xl leading-none">
      ↔
    </span>
  )
}
