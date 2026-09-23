export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Divyansh Tulsyan</p>
        <p>Designed and built with Next.js</p>
      </div>
    </footer>
  )
}
