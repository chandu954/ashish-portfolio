import SectionHeader from './SectionHeader'

const GROUPS = [
  { name: 'Languages', items: ['JavaScript', 'Java', 'Go', 'Python'] },
  { name: 'Frontend', items: ['React', 'Redux', 'Tailwind'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'Flask', 'Gin (Go)'] },
  { name: 'Data & DB', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  { name: 'Tools', items: ['Git', 'Docker', 'LangGraph', 'REST APIs', 'WebSockets'] },
]

export default function Skills(){
  return (
    <section id="skills" className="section py-20">
      <SectionHeader eyebrow="Expertise" title="Skills & Tools" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {GROUPS.map(g => (
          <div key={g.name} className="card">
            <h3 className="font-semibold text-white/90 mb-3">{g.name}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map(i => <span key={i} className="badge">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
