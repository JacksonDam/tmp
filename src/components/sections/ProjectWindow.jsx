import { MediaSlot } from '../ui/MediaSlot.jsx'
import { PixelIcon } from '../ui/PixelIcon.jsx'
import { ScrollRail } from '../ui/ScrollRail.jsx'
import { Sticker } from '../ui/Sticker.jsx'
import { Window } from '../ui/Window.jsx'

export function ProjectWindow({ project, index, titlePrefix = 'project' }) {
  return (
    <Window title={`${titlePrefix}-0${index + 1}`} pink>
      <div className="relative flex min-h-[300px]">
        <div className="grid flex-1 gap-6 p-6 sm:p-8 lg:grid-cols-[0.78fr_1fr]">
          <MediaSlot
            alt={project.imageAlt}
            className="min-h-[220px] border-[3px] border-dashed border-[#8d82b6] bg-[#f6f2ff]"
            filename={project.image}
            label={`${project.title} image placeholder`}
          />

          <div>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#c42175]">
                  Project 0{index + 1}
                </p>
                <h3 className="text-2xl font-black sm:text-4xl">
                  {project.title}
                </h3>
              </div>
              <PixelIcon type={project.icon} />
            </div>
            <ul className="space-y-3 text-sm leading-6 sm:text-base">
              {project.bullets.map((bullet) => (
                <li className="flex gap-3" key={bullet}>
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 border-2 border-black bg-[#ef73b0]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ScrollRail />
        <Sticker className="bottom-4 left-5 text-[#8cc8ff]">♥</Sticker>
        <Sticker className="right-8 top-12">✦</Sticker>
      </div>
    </Window>
  )
}
