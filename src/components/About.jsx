import SectionHeader from './SectionHeader'

export default function About(){
  return (
    <section id="about" className="section py-20">
      <SectionHeader eyebrow="Profile" title="About Me" />
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="card">
          <p className="text-white/80 leading-relaxed">
            I'm an aspiring software engineer who loves building scalable, user‑centric products. I thrive where
            ownership meets high standards—shipping features quickly without compromising quality.
          </p>
          <ul className="mt-4 list-disc list-inside text-white/70 space-y-1">
            <li>Value punctuality, discipline, and clear communication</li>
            <li>Hands‑on with full‑stack projects and deployments</li>
            <li>Always learning—AI, systems design, and performance</li>
          </ul>
        </div>
        <div className="card">
          <h4 className="font-semibold text-white/90">Highlights</h4>
          <ul className="mt-3 space-y-2 text-white/75">
            <li>🎯 Built QuickCart, QuickChat, and Imagify end‑to‑end</li>
            <li>🧠 IBM SkillBuild: CampusConnect Chatbot (Watsonx)</li>
            <li>📈 Esports landing page that boosted signups by ~30%</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
