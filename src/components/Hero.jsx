import { Rocket, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'

function Badge({children}){ return <span className="badge">{children}</span> }

export default function Hero(){
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radials" />
      <div className="section pt-24 pb-20 relative">
        <motion.p initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="text-white/60 uppercase tracking-widest text-sm">Full‑Stack Developer</motion.p>
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.2}} className="text-4xl md:text-6xl font-black leading-tight mt-2">
          Hi, I'm <span className="gradient-text">Ashish Chandan</span>
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3}} className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
          I build <span className="font-semibold">scalable</span>, <span className="font-semibold">user‑centric</span> apps that ship fast and look sharp.
        </motion.p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary"><Rocket className="w-5 h-5"/>View Projects</a>
          <a href="#contact" className="btn btn-ghost"><Code2 className="w-5 h-5"/>Contact Me</a>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-white/70">
          <Badge>React</Badge><Badge>Node.js</Badge><Badge>Express</Badge><Badge>MongoDB</Badge>
        </div>
      </div>
    </section>
  )
}
