import { MediaSlot } from './MediaSlot.jsx'
import { Sticker } from './Sticker.jsx'

const slots = [
  {
    label: 'Photo 01',
    className: 'absolute left-[12%] top-[4%] h-[25%] w-[68%]',
  },
  {
    label: 'Photo 02',
    className: 'absolute left-[4%] top-[31%] h-[36%] w-[35%]',
  },
  {
    label: 'Photo 03',
    className: 'absolute left-[38%] top-[29%] z-10 h-[31%] w-[36%]',
  },
  {
    label: 'Photo 04',
    className: 'absolute right-[3%] top-[32%] h-[34%] w-[24%]',
  },
  {
    label: 'Photo 05',
    className: 'absolute left-[31%] bottom-[3%] h-[26%] w-[28%]',
  },
  {
    label: 'Photo 06',
    className: 'absolute right-[6%] bottom-[5%] h-[29%] w-[30%]',
  },
]

const normalizeImage = (image, fallbackLabel) => {
  if (typeof image === 'string') {
    return { filename: image, alt: fallbackLabel, label: fallbackLabel }
  }

  return {
    filename: image?.filename,
    alt: image?.alt ?? fallbackLabel,
    label: image?.label ?? fallbackLabel,
  }
}

export function PhotoCollage({ images = [] }) {
  return (
    <div className="relative min-h-[540px] overflow-hidden border-[3px] border-black bg-white p-4">
      <Sticker className="left-1 top-16">✦</Sticker>
      <Sticker className="left-9 top-24 text-[#8cc8ff]">♥</Sticker>
      {slots.map((slot, index) => {
        const image = normalizeImage(images[index], slot.label)

        return (
          <MediaSlot
            alt={image.alt}
            className={`border-[3px] border-black ${slot.className}`}
            filename={image.filename}
            key={slot.label}
            label={image.label}
          />
        )
      })}
    </div>
  )
}
