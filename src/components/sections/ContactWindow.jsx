import { Window } from '../ui/Window.jsx'

export function ContactWindow({ config }) {
  return (
    <Window title={config.windowTitle}>
      <div className="grid min-h-[280px] place-items-center p-8 text-center">
        <div>
          <p className="text-3xl font-black sm:text-4xl">{config.title}</p>
          <p className="mt-2 text-2xl font-black">{config.subtitle}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {config.links?.map((link, index) => (
              <a
                className={`inline-flex min-h-10 items-center border-[3px] border-black px-4 text-sm font-black shadow-[4px_4px_0_#8cc8ff] transition hover:-translate-y-0.5 ${
                  index === 0 ? 'bg-[#ef73b0]' : 'bg-[#dedede]'
                }`}
                href={link.href}
                key={link.href}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                target={link.href.startsWith('http') ? '_blank' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Window>
  )
}
