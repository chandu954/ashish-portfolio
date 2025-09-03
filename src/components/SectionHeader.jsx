import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle }){
  return (
    <div className="text-center mb-10">
      <motion.p initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="uppercase tracking-widest text-sm text-white/60">{eyebrow}</motion.p>
      <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-5xl font-extrabold gradient-text">{title}</motion.h2>
      {subtitle && <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="mt-3 text-white/70 max-w-2xl mx-auto">{subtitle}</motion.p>}
    </div>
  )
}
