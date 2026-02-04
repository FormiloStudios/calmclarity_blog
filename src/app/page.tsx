export default function Home() {
    return (
        <main className="bg-black min-h-screen text-white font-sans selection:bg-indigo-500/30">

            {/* Navbar */}
            <nav className="max-w-6xl mx-auto p-10 flex justify-between items-center bg-black relative z-10">
                <div className="font-bold tracking-tighter text-lg">Calm Clarity</div>
                <div className="flex gap-6 text-sm font-medium text-zinc-400">
                    <a href="#" className="hover:text-white transition-colors">Protocols</a>
                    <a href="#" className="hover:text-white transition-colors">The Lab</a>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

                <h1 className="relative z-10 text-7xl md:text-8xl font-bold tracking-tighter text-white max-w-4xl leading-tight">
                    Quiet Minds.<br />Sharper Focus.
                </h1>
            </section>

            {/* Grid */}
            <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 pb-32">

                {/* Card 1 */}
                <div className="group cursor-pointer">
                    <div className="aspect-video w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 relative">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                            alt="Architecture"
                            className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="mt-6 flex flex-col items-start px-2">
                        <span className="text-xs tracking-widest text-indigo-400 mb-2 uppercase font-semibold">Environment</span>
                        <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-200 transition-colors">The Architecture of Silence</h2>
                        <span className="text-sm font-medium text-zinc-500 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white pb-0.5">Read Protocol</span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group cursor-pointer">
                    <div className="aspect-video w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 relative">
                        <img
                            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200"
                            alt="Analog"
                            className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="mt-6 flex flex-col items-start px-2">
                        <span className="text-xs tracking-widest text-indigo-400 mb-2 uppercase font-semibold">Focus</span>
                        <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-200 transition-colors">Analog Rituals</h2>
                        <span className="text-sm font-medium text-zinc-500 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white pb-0.5">Read Protocol</span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group cursor-pointer">
                    <div className="aspect-video w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 relative">
                        <img
                            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=1200"
                            alt="Cognition"
                            className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="mt-6 flex flex-col items-start px-2">
                        <span className="text-xs tracking-widest text-indigo-400 mb-2 uppercase font-semibold">Mindset</span>
                        <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-200 transition-colors">Monochrome Thinking</h2>
                        <span className="text-sm font-medium text-zinc-500 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white pb-0.5">Read Protocol</span>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="group cursor-pointer">
                    <div className="aspect-video w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 relative">
                        <img
                            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=1200"
                            alt="Nature"
                            className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="mt-6 flex flex-col items-start px-2">
                        <span className="text-xs tracking-widest text-indigo-400 mb-2 uppercase font-semibold">Nature</span>
                        <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-200 transition-colors">Digital Detachment</h2>
                        <span className="text-sm font-medium text-zinc-500 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white pb-0.5">Read Protocol</span>
                    </div>
                </div>

            </section>

            <footer className="py-12 text-center text-zinc-800 text-xs uppercase tracking-widest border-t border-zinc-900 bg-black">
                © 2026 Calm Clarity. Verified Build 0.6
            </footer>

        </main>
    );
}
