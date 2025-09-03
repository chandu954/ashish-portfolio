import { Github, Linkedin, Mail, Download } from 'lucide-react'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-ink/70 border-b border-white/10">
      <nav className="section py-4 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-xl gradient-text">Ashish</a>
        <div className="flex items-center gap-2">
          <a className="btn btn-ghost" href="#projects">Projects</a>
          <a className="btn btn-ghost" href="#skills">Skills</a>
          <a className="btn btn-ghost" href="#about">About</a>
          <a className="btn btn-ghost" href="#contact">Contact</a>
          <a className="btn btn-primary" href="/resume.pdf" download title="Download Resume">
            <Download className="w-5 h-5" />
          </a>
          <a className="btn btn-ghost" href="https://github.com/chandu954" target="_blank" rel="noreferrer" title="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/ashish-chandan-4421a2259" target="_blank" rel="noreferrer" title="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a className="btn btn-ghost" href="mailto:ashishchandan844@gmail.com" title="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  )
}
