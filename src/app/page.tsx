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

            {/* 1. The Cinematic Hero */}
            <div className="relative h-[70vh] w-full bg-zinc-950 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000")' }}
                />

                {/* The Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* The Headline */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="font-serif font-bold text-6xl md:text-7xl lg:text-8xl text-white tracking-tight drop-shadow-lg">
                        Quiet Minds.<br />
                        Sharper Focus.
                    </h1>
                </div>
            </div>

            {/* 2. The Article Feed (Visual Cards) */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 -mt-20 pb-32 flex flex-col gap-16">

                {/* Card 1 */}
                <div className="group bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl hover:border-zinc-700 transition-all duration-500 cursor-pointer">
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                            alt="Architecture"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col items-center text-center">
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 group-hover:text-indigo-100 transition-colors">The Architecture of Silence</h3>
                        <button className="px-8 py-3 rounded-full border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                            Read Article
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl hover:border-zinc-700 transition-all duration-500 cursor-pointer">
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950">
                        <img
                            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200"
                            alt="Analog"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col items-center text-center">
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 group-hover:text-indigo-100 transition-colors">Analog Rituals</h3>
                        <button className="px-8 py-3 rounded-full border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                            Read Article
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl hover:border-zinc-700 transition-all duration-500 cursor-pointer">
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950">
                        <img
                            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200"
                            alt="Monochrome"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col items-center text-center">
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 group-hover:text-indigo-100 transition-colors">Monochrome Thinking</h3>
                        <button className="px-8 py-3 rounded-full border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                            Read Article
                        </button>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <footer className="py-12 text-center text-neutral-600 text-[10px] tracking-widest uppercase border-t border-zinc-900">
                © 2026 Calm Clarity. Verified Build v0.4
            </footer>

        </div>
    );
}
