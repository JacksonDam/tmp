import { PortfolioPage } from './components/PortfolioPage.jsx'

// Image filenames resolve from public/portfolio-images.
// Example: image: 'portrait.jpg'. Using undefined will make it fall back to a placeholder.
const portfolioConfig = {
  hero: {
    windowTitle: 'intro',
    eyebrow: 'Who am I?',
    title: 'Anya Chaudhary',
    description: "i'm so cracked or something",
    // this is the first image
    image: undefined,
    imageAlt: 'Main portrait',
    imageLabel: 'Main image placeholder',
    buttons: [
      { label: 'NEXT', variant: 'pink', href: '#about' },
    ],
  },
  about: {
    galleryTitle: 'photo-gallery',
    windowTitle: 'about-me',
    eyebrow: 'About me!!',
    heading: 'i do lots of different things like x, y, and z.',
    // these are the collage photos, so you can specify up to 6 filenames here of photos in 
    // public/portfolio-images.
    images: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    items: [
      'MSci Computer Science, University of Glasgow',
      'Was GU Tech Society President',
      'Was intern at JPMorganChase',
    ],
  },
  projects: {
    boardTitle: 'my-projects',
    eyebrow: 'My projects',
    heading: "I've done",
    detailTitlePrefix: 'project',
    items: [
      {
        title: 'Project 1',
        icon: 'chat',
        image: undefined,
        imageAlt: 'Project 1 preview',
        bullets: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
      },
      {
        title: 'Project 2',
        icon: 'tasks',
        image: undefined,
        imageAlt: 'Project 2 preview',
        bullets: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
      },
      {
        title: 'Project 3',
        icon: 'heart',
        image: undefined,
        imageAlt: 'Project 3 preview',
        bullets: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
      },
      {
        title: 'Project 4',
        icon: 'link',
        image: undefined,
        imageAlt: 'Project 4 preview',
        bullets: ['feature 1', 'feature 2', 'feature 3', 'feature 4'],
      },
    ],
  },
  strengths: {
    windowTitle: 'why-i-am-pro',
    eyebrow: 'why i am pro',
    heading: 'i have social skills',
    items: [
      'Social',
      'Good leadership skills',
      'Happy to work in a team',
      'Hard-working',
      'Enthusiastic',
    ],
  },
  contact: {
    windowTitle: 'connect-with-me',
    title: 'Thanks for visiting!',
    subtitle: 'Get in touch',
    links: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/anya-chaudhary/',
      },
      {
        // replace the email with your own
        label: 'Email',
        href: 'mailto:hello@example.com',
      },
    ],
  },
  friends: {
    windowTitle: 'friends',
    eyebrow: 'friends',
    heading: 'cool people',
    description: 'some placeholder links for friends\' sites',
    links: [
      { label: 'Friend 01', href: '#' },
      { label: 'Friend 02', href: '#' },
      { label: 'Friend 03', href: '#' },
      { label: 'Friend 04', href: '#' },
    ],
  },
  scrollPrompt: {
    label: 'scroll',
    arrow: '↓',
  },
}

function App() {
  return <PortfolioPage config={portfolioConfig} />
}

export default App
