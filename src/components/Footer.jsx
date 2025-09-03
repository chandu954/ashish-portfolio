export default function Footer(){
  return (
    <footer className="section py-10 border-t border-white/10 text-white/60 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Ashish Chandan. All rights reserved.</p>
        <p className="opacity-80">Built with React • Tailwind • Vite</p>
      </div>
    </footer>
  )
}
