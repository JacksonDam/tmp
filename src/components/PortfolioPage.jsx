import { useState } from 'react'
import { AboutSection } from './sections/AboutSection.jsx'
import { ContactWindow } from './sections/ContactWindow.jsx'
import { FriendsWindow } from './sections/FriendsWindow.jsx'
import { IntroSection } from './sections/IntroSection.jsx'
import { ProjectWindow } from './sections/ProjectWindow.jsx'
import { ProjectsBoard } from './sections/ProjectsBoard.jsx'
import { StrengthsWindow } from './sections/StrengthsWindow.jsx'
import { ScrollPrompt } from './ui/ScrollPrompt.jsx'

export function PortfolioPage({ config }) {
  const [activeProject, setActiveProject] = useState(0)
  const projects = config.projects.items

  return (
    <main className="pinstripe-bg min-h-screen p-4 font-mono text-black sm:p-6 lg:p-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <IntroSection config={config.hero} />

        <AboutSection config={config.about} />

        <ProjectsBoard
          activeProject={activeProject}
          config={config.projects}
          onSelectProject={setActiveProject}
        />

        <ProjectWindow
          project={projects[activeProject]}
          index={activeProject}
          titlePrefix={config.projects.detailTitlePrefix}
        />

        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <StrengthsWindow config={config.strengths} />
          <ContactWindow config={config.contact} />
        </section>

        <FriendsWindow config={config.friends} />
      </div>
      <ScrollPrompt config={config.scrollPrompt} />
    </main>
  )
}
