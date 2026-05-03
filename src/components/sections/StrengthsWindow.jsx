import { Window } from '../ui/Window.jsx'

export function StrengthsWindow({ config }) {
  return (
    <Window title={config.windowTitle} pink>
      <div className="p-6 sm:p-8">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#6f4aa8]">
          {config.eyebrow}
        </p>
        <h2 className="text-3xl font-black sm:text-5xl">{config.heading}</h2>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {config.items.map((item) => (
            <div
              className="border-[3px] border-black bg-white px-4 py-3 font-black shadow-[4px_4px_0_#8cc8ff]"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}
