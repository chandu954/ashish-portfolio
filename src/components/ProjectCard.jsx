import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({title, tagline, description, stack, live, repo}){
  return (
    <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-white/70">{tagline}</p>
      <p className="mt-3 text-white/80">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {stack.map(s => <span key={s} className="badge">{s}</span>)}
      </div>
      <div className="mt-5 flex gap-3">
        <a href={live} target="_blank" rel="noreferrer" className="btn btn-primary"><ExternalLink className="w-4 h-4"/>Live</a>
        <a href={repo} target="_blank" rel="noreferrer" className="btn btn-ghost"><Github className="w-4 h-4"/>Code</a>
      </div>
    </motion.div>
  )
}
