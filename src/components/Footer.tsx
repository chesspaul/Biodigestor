export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-400">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} BioWatch. Demo académico.</div>
          <div className="text-zinc-500">
            Monitoreo, mantenimiento y distribución de biodigestores.
          </div>
        </div>
      </div>
    </footer>
  );
}