export default function Home() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[#050505] font-sans selection:bg-indigo-500/30 text-white">

            {/* 3. The Atmosphere: Soft Indigo Glow */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgba(79,70,229,0.1)] blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Main Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 flex flex-col min-h-screen">

                {/* 2. The Header Reset */}
                <header className="w-full flex items-center justify-between py-8">
                    <div className="text-sm font-medium tracking-wide text-white/90">
                        Calm Clarity
                    </div>
                    <nav className="flex gap-8 text-sm font-medium text-white/90">
                        <a href="#" className="hover:text-white/60 transition-colors duration-300">Protocols</a>
                        <a href="#" className="hover:text-white/60 transition-colors duration-300">The Lab</a>
                    </nav>
                </header>

                {/* 1. The Center Alignment & 4. Editorial Styling */}
                <main className="flex-grow flex flex-col items-center pt-[15vh]">

                    {/* Main Headline */}
                    <h1 className="text-center font-serif font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white/95">
                        Quiet Minds.<br />
                        Sharper Focus.
                    </h1>

                    {/* Tagline */}
                    <div className="mt-8 text-[10px] md:text-xs font-bold tracking-[0.2em] text-indigo-200/50 uppercase">
                        Nervous System Regulation Protocols
                    </div>

                    {/* Article Feed - Minimalist Placeholders */}
                    <div className="w-full mt-32 flex flex-col gap-16 pb-32">
                        {/* Article 1 */}
                        <div className="group cursor-pointer">
                            <div className="w-full h-80 bg-zinc-900/40 border border-white/5 rounded-sm transition-all duration-500 group-hover:bg-zinc-900/60 group-hover:border-white/10" />
                            <div className="mt-6 flex justify-between items-baseline">
                                <h3 className="font-serif text-2xl text-white/90 group-hover:text-white transition-colors">The Architecture of Silence</h3>
                                <span className="text-[10px] tracking-widest text-neutral-500 uppercase">Read</span>
                            </div>
                        </div>

                        {/* Article 2 */}
                        <div className="group cursor-pointer">
                            <div className="w-full h-80 bg-zinc-900/40 border border-white/5 rounded-sm transition-all duration-500 group-hover:bg-zinc-900/60 group-hover:border-white/10" />
                            <div className="mt-6 flex justify-between items-baseline">
                                <h3 className="font-serif text-2xl text-white/90 group-hover:text-white transition-colors">Analog Rituals</h3>
                                <span className="text-[10px] tracking-widest text-neutral-500 uppercase">Read</span>
                            </div>
                        </div>

                        {/* Article 3 */}
                        <div className="group cursor-pointer">
                            <div className="w-full h-80 bg-zinc-900/40 border border-white/5 rounded-sm transition-all duration-500 group-hover:bg-zinc-900/60 group-hover:border-white/10" />
                            <div className="mt-6 flex justify-between items-baseline">
                                <h3 className="font-serif text-2xl text-white/90 group-hover:text-white transition-colors">Monochrome Thinking</h3>
                                <span className="text-[10px] tracking-widest text-neutral-500 uppercase">Read</span>
                            </div>
                        </div>
                    </div>

                </main>

                {/* Footer - Minimal */}
                <footer className="py-8 text-center border-t border-white/5">
                    <p className="text-[10px] tracking-widest text-neutral-600 uppercase">© 2026 Calm Clarity. Verified Build 0.2</p>
                </footer>

            </div>
        </div>
    );
}
