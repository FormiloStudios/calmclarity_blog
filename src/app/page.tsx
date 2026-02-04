export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30">

            {/* Navigation - Overlay */}
            <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center py-8 px-8 md:px-12">
                <div className="text-sm font-bold tracking-widest uppercase text-white/90">
                    Calm Clarity
                </div>
                <nav className="flex gap-8 text-sm font-medium text-white/80">
                    <a href="#" className="hover:text-white transition-colors duration-300">Protocols</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">The Lab</a>
                </nav>
            </header>

            {/* 3. The Hero Section (Refinement) */}
            <div className="relative h-[70vh] w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000")' }}
                />

                {/* The Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* The Headline */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
                    <h1 className="font-serif font-bold text-6xl md:text-7xl lg:text-8xl text-white tracking-tight drop-shadow-2xl">
                        Quiet Minds.<br />
                        Sharper Focus.
                    </h1>
                </div>
            </div>

            {/* 4. Global Spacing Container */}
            <div className="max-w-5xl mx-auto px-6 -mt-24 pb-32 relative z-10 flex flex-col gap-12">

                {/* Card 1 */}
                <div className="group bg-zinc-950 rounded-3xl border border-zinc-800 p-8 shadow-2xl hover:border-zinc-700 transition-all duration-500">
                    {/* Image Constraint: h-[400px] & rounded-2xl */}
                    <div className="w-full h-[400px] overflow-hidden rounded-2xl mb-8">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                            alt="Architecture"
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                    {/* Content Below Image */}
                    <div className="flex flex-col items-start px-2">
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 group-hover:text-indigo-100 transition-colors">The Architecture of Silence</h3>
                        <p className="text-neutral-500 text-sm tracking-wide mb-6">Building spaces for deep work.</p>
                        <button className="text-xs font-bold tracking-widest uppercase text-white/70 border-b border-white/20 pb-1 hover:text-white hover:border-white transition-all">
                            Read Article
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group bg-zinc-950 rounded-3xl border border-zinc-800 p-8 shadow-2xl hover:border-zinc-700 transition-all duration-500">
                    <div className="w-full h-[400px] overflow-hidden rounded-2xl mb-8">
                        <img
                            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200"
                            alt="Analog"
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                    <div className="flex flex-col items-start px-2">
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 group-hover:text-indigo-100 transition-colors">Analog Rituals</h3>
                        <p className="text-neutral-500 text-sm tracking-wide mb-6">Disconnecting to reconnect.</p>
                        <button className="text-xs font-bold tracking-widest uppercase text-white/70 border-b border-white/20 pb-1 hover:text-white hover:border-white transition-all">
                            Read Article
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group bg-zinc-950 rounded-3xl border border-zinc-800 p-8 shadow-2xl hover:border-zinc-700 transition-all duration-500">
                    <div className="w-full h-[400px] overflow-hidden rounded-2xl mb-8">
                        <img
                            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200"
                            alt="Monochrome"
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                    <div className="flex flex-col items-start px-2">
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 group-hover:text-indigo-100 transition-colors">Monochrome Thinking</h3>
                        <p className="text-neutral-500 text-sm tracking-wide mb-6">Simplicity as a mental framework.</p>
                        <button className="text-xs font-bold tracking-widest uppercase text-white/70 border-b border-white/20 pb-1 hover:text-white hover:border-white transition-all">
                            Read Article
                        </button>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <footer className="py-12 text-center text-neutral-600 text-[10px] tracking-widest uppercase border-t border-zinc-900 bg-zinc-950">
                © 2026 Calm Clarity. Verified Build v0.5
            </footer>

        </div>
    );
}
