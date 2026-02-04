export default function Home() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[#020202] font-sans selection:bg-indigo-500/30">

            {/* 1. The Atmosphere: "Aura" Gradient */}
            <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1A1A2E] opacity-20 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* 3. The Navigation */}
            <header className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-8 md:px-16 mix-blend-difference">
                <div className="text-sm tracking-widest font-medium uppercase text-white/90">
                    Calm Clarity
                </div>
                <nav className="flex gap-8 text-sm tracking-wide font-light text-white/80">
                    <a href="#" className="hover:text-white transition-colors duration-300">Protocols</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">The Lab</a>
                </nav>
            </header>

            {/* 2. The Typography: Hero Section */}
            <section className="relative z-10 w-full pt-[25vh] pb-32 px-8 flex flex-col items-center justify-center text-center">
                <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[1.1] opacity-90 max-w-5xl">
                    Quiet Minds.<br />
                    <span className="text-white/80">Sharper Focus.</span>
                </h2>
            </section>

            {/* Article Feed - Styled Semantic Blocks */}
            <main className="relative z-10 container mx-auto px-6 md:px-12 max-w-4xl flex flex-col gap-24 pb-32">

                {/* Article Block 1 */}
                <article className="group cursor-pointer">
                    <div className="w-full aspect-[16/9] bg-neutral-900/30 border border-white/5 transition-colors duration-500 group-hover:border-white/10 group-hover:bg-neutral-900/50 mb-6" />
                    <h3 className="font-serif text-3xl md:text-4xl text-white/90 group-hover:text-white transition-colors">The Architecture of Silence</h3>
                    <p className="mt-2 text-neutral-500 font-light tracking-wide text-sm uppercase">Cognitive Design</p>
                </article>

                {/* Article Block 2 */}
                <article className="group cursor-pointer">
                    <div className="w-full aspect-[16/9] bg-neutral-900/30 border border-white/5 transition-colors duration-500 group-hover:border-white/10 group-hover:bg-neutral-900/50 mb-6" />
                    <h3 className="font-serif text-3xl md:text-4xl text-white/90 group-hover:text-white transition-colors">Analog Rituals</h3>
                    <p className="mt-2 text-neutral-500 font-light tracking-wide text-sm uppercase">Productivity</p>
                </article>

                {/* Article Block 3 */}
                <article className="group cursor-pointer">
                    <div className="w-full aspect-[16/9] bg-neutral-900/30 border border-white/5 transition-colors duration-500 group-hover:border-white/10 group-hover:bg-neutral-900/50 mb-6" />
                    <h3 className="font-serif text-3xl md:text-4xl text-white/90 group-hover:text-white transition-colors">Monochrome Thinking</h3>
                    <p className="mt-2 text-neutral-500 font-light tracking-wide text-sm uppercase">Philosophy</p>
                </article>

            </main>

            {/* Footer */}
            <footer className="relative z-10 py-12 text-center text-neutral-800 text-xs font-light tracking-widest uppercase">
                © 2026 Calm Clarity. Verified Build.
            </footer>
        </div>
    );
}
