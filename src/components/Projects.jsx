import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

const DATA = [
  {
    title: 'QuickCart',
    tagline: 'Scalable e‑commerce with admin dashboard',
    description: 'End‑to‑end e‑commerce with filters, cart, order tracking, payments, and admin controls.',
    stack: ['React', 'Redux Toolkit', 'Node', 'Express', 'MongoDB', 'Tailwind'],
    live: 'https://quick-cart-woad-omega.vercel.app/',
    repo: 'https://github.com/chandu954/QuickCart'
  },
  {
    title: 'QuickChat',
    tagline: 'Real‑time messaging',
    description: 'Socket.IO chat with auth, privacy, and sleek UI for instant communication.',
    stack: ['React', 'Node', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind'],
    live: 'https://quick-chat-client-nine.vercel.app/',
    repo: 'https://github.com/chandu954/QuickChat'
  },
  {
    title: 'Imagify',
    tagline: 'AI Text‑to‑Image Generator',
    description: 'Generate images from prompts with a clean, intuitive interface and fast delivery.',
    stack: ['React', 'Node', 'Express', 'MongoDB', 'Vercel', 'AWS S3'],
    live: 'https://imagify-client-eta.vercel.app/',
    repo: 'https://github.com/chandu954/imagify'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="section py-20">
      <SectionHeader eyebrow="Work" title="Featured Projects" subtitle="A selection of apps I've built end‑to‑end—design, code, and deployment." />
      <div className="grid md:grid-cols-2 gap-6">
        {DATA.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
