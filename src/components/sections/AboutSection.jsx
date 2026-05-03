import { PhotoCollage } from '../ui/PhotoCollage.jsx'
import { Window } from '../ui/Window.jsx'

export function AboutSection({ config }) {
  return (
    <section
      id="about"
      className="grid items-start gap-8 lg:grid-cols-[0.9fr_1fr]"
    >
      <Window title={config.galleryTitle} pink>
        <div className="p-5">
          <PhotoCollage images={config.images} />
        </div>
      </Window>

      <Window title={config.windowTitle} className="lg:mt-12">
        <div className="p-6 sm:p-8">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#c42175]">
            {config.eyebrow}
          </p>
          <h2 className="text-3xl font-black sm:text-5xl">{config.heading}</h2>
          <ul className="mt-8 space-y-4 text-base leading-7 sm:text-lg">
            {config.items.map((item, index) => (
              <li className="flex gap-3" key={item}>
                <span
                  className={`mt-2 h-3 w-3 shrink-0 border-2 border-black ${
                    index === 1 ? 'bg-[#ef73b0]' : 'bg-[#8cc8ff]'
                  }`}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Window>
    </section>
  )
}
