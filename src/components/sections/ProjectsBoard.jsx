import { PixelIcon } from '../ui/PixelIcon.jsx'
import { Window } from '../ui/Window.jsx'

export function ProjectsBoard({ activeProject, config, onSelectProject }) {
  return (
    <Window title={config.boardTitle}>
      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#c42175]">
              {config.eyebrow}
            </p>
            <h2 className="text-4xl font-black sm:text-5xl">
              {config.heading}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {config.items.map((project, index) => (
              <button
                className={`flex items-center justify-between gap-4 border-[3px] border-black p-4 text-left font-black shadow-[5px_5px_0_#9b8bc8] transition hover:-translate-y-0.5 ${
                  activeProject === index ? 'bg-[#ef73b0]' : 'bg-[#f8f5ff]'
                }`}
                key={project.title}
                onClick={() => onSelectProject(index)}
                type="button"
              >
                <span>{project.title}</span>
                <PixelIcon type={project.icon} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Window>
  )
}
