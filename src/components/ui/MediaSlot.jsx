const imagePath = (filename) =>
  filename ? `${import.meta.env.BASE_URL}portfolio-images/${filename}` : null

export function MediaSlot({
  alt = '',
  className = '',
  filename,
  label = 'Image placeholder',
}) {
  const src = imagePath(filename)

  return (
    <div className={`overflow-hidden ${className}`}>
      {src ? (
        <img className="h-full w-full object-cover" src={src} alt={alt} />
      ) : (
        <div className="grid h-full w-full place-items-center bg-[linear-gradient(135deg,#f7f7f7_0%,#f7f7f7_48%,#e4dcff_48%,#e4dcff_52%,#f7f7f7_52%)] p-4 text-center text-xs font-black uppercase tracking-[0.12em] text-[#6f6593]">
          <span className="border-2 border-black bg-white px-2 py-1 shadow-[3px_3px_0_#ef73b0]">
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
