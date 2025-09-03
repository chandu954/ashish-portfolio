import SectionHeader from './SectionHeader'

export default function Contact(){
  return (
    <section id="contact" className="section py-20">
      <SectionHeader eyebrow="Next step" title="Let’s build something impactful" subtitle="Open to full‑time roles, internships, and collaborations." />
      <div className="grid md:grid-cols-2 gap-8">
        <a href="mailto:ashishchandan844@gmail.com" className="rounded-2xl p-6 bg-brand/10 border border-brand/30 hover:shadow-glow transition">
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-white/80">ashishchandan844@gmail.com</p>
        </a>
        <div className="card">
          <h3 className="text-xl font-semibold">Elsewhere</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a className="hover:underline" href="https://github.com/chandu954" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="hover:underline" href="https://www.linkedin.com/in/ashish-chandan-4421a2259" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
