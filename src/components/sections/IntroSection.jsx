import { ButtonChrome } from '../ui/ButtonChrome.jsx'
import { MediaSlot } from '../ui/MediaSlot.jsx'
import { Sticker } from '../ui/Sticker.jsx'
import { Window } from '../ui/Window.jsx'

export function IntroSection({ config }) {
  return (
    <Window title={config.windowTitle}>
      <div className="relative overflow-hidden p-5 sm:p-8 lg:p-10">
        <Sticker className="left-8 top-10">✦</Sticker>
        <Sticker className="right-20 top-16 text-[#8cc8ff]">✦</Sticker>
        <Sticker className="bottom-24 left-12 text-[#8cc8ff]">♥</Sticker>
        <Sticker className="bottom-16 right-16">♥</Sticker>

        <div className="grid min-h-[520px] items-center gap-8 lg:grid-cols-[1fr_380px]">
          <section className="mx-auto max-w-3xl text-center lg:text-left">
            <p className="mb-5 inline-block border-[3px] border-black bg-[#ef73b0] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[5px_5px_0_#9b8bc8]">
              {config.eyebrow}
            </p>
            <h1 className="text-5xl font-black leading-none sm:text-7xl lg:text-8xl">
              {config.title}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 sm:text-lg lg:mx-0">
              {config.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {config.buttons.map((button) => (
                <ButtonChrome
                  href={button.href}
                  key={button.label}
                  variant={button.variant}
                >
                  {button.label}
                </ButtonChrome>
              ))}
            </div>
          </section>

          <div className="mx-auto w-full max-w-sm border-[3px] border-black bg-white p-4 shadow-[8px_8px_0_#ef73b0]">
            <MediaSlot
              alt={config.imageAlt}
              className="aspect-[4/5] border-[3px] border-dashed border-[#8d82b6] bg-[#f6f2ff]"
              filename={config.image}
              label={config.imageLabel}
            />
          </div>
        </div>
      </div>
    </Window>
  )
}
