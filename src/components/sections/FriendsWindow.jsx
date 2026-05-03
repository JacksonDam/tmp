import { PixelIcon } from '../ui/PixelIcon.jsx'
import { ScrollRail } from '../ui/ScrollRail.jsx'
import { Sticker } from '../ui/Sticker.jsx'
import { Window } from '../ui/Window.jsx'

export function FriendsWindow({ config }) {
  return (
    <Window title={config.windowTitle} pink>
      <div className="relative flex min-h-[300px]">
        <div className="grid flex-1 gap-6 p-6 sm:p-8 lg:grid-cols-[0.78fr_1fr]">
          <div className="grid min-h-[220px] place-items-center border-[3px] border-dashed border-[#8d82b6] bg-[#f6f2ff] p-6 text-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c42175]">
                {config.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                {config.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-6">
                {config.description}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#c42175]">
                  links
                </p>
                <h3 className="text-2xl font-black sm:text-4xl">
                  visit friends
                </h3>
              </div>
              <PixelIcon type="link" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {config.links.map((link, index) => (
                <a
                  className={`inline-flex min-h-12 items-center justify-between border-[3px] border-black px-4 font-black shadow-[4px_4px_0_#8cc8ff] transition hover:-translate-y-0.5 ${
                    index % 2 === 0 ? 'bg-[#ef73b0]' : 'bg-[#dedede]'
                  }`}
                  href={link.href}
                  key={`${link.label}-${link.href}`}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <ScrollRail />
        <Sticker className="bottom-4 left-5 text-[#8cc8ff]">♥</Sticker>
        <Sticker className="right-8 top-12">✦</Sticker>
      </div>
    </Window>
  )
}
