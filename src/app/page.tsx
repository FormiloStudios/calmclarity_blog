export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 font-sans">

            {/* 2. The Header (Professional Navigation) */}
            <header className="w-full max-w-6xl flex justify-between items-center py-10">
                <div className="text-xl font-bold tracking-tight">Calm Clarity</div>
                <nav className="flex gap-8 text-neutral-300">
                    <a href="#" className="hover:text-white transition-colors">Protocols</a>
                    <a href="#" className="hover:text-white transition-colors">The Lab</a>
                </nav>
            </header>

            {/* 3. The Hero (Size and Impact) */}
            <div className="py-32 text-center">
                <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6">
                    Quiet Minds.<br />Sharper Focus.
                </h1>
                <p className="text-sm tracking-widest text-neutral-500 uppercase mt-8">
                    Nervous System Regulation Protocols
                </p>
            </div>

            {/* 4. The Article List (Clean Cards) */}
            <div className="w-full flex flex-col items-center pb-20">

                {/* Card 1 */}
                <div className="w-full max-w-3xl border border-zinc-800 rounded-xl p-8 mb-6 hover:border-zinc-600 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-serif text-neutral-200 group-hover:text-white transition-colors">The Architecture of Silence</h3>
                        <span className="text-xs uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors">Read</span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full max-w-3xl border border-zinc-800 rounded-xl p-8 mb-6 hover:border-zinc-600 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-serif text-neutral-200 group-hover:text-white transition-colors">Analog Rituals</h3>
                        <span className="text-xs uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors">Read</span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full max-w-3xl border border-zinc-800 rounded-xl p-8 mb-6 hover:border-zinc-600 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-serif text-neutral-200 group-hover:text-white transition-colors">Monochrome Thinking</h3>
                        <span className="text-xs uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors">Read</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
