export default function Home() {
    return (
        <div className="min-h-screen bg-black flex flex-col">
            {/* Header */}
            <header className="w-full bg-black border-b border-zinc-800 py-4 px-8">
                <h1 className="text-xl font-bold tracking-tight">Calm Clarity</h1>
            </header>

            {/* Hero Section */}
            <section className="w-full bg-zinc-900 py-32 px-8 flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white">
                    Quiet Minds. Sharper Focus.
                </h2>
            </section>

            {/* Article Feed - Placeholder Blocks */}
            <main className="flex-grow container mx-auto py-20 px-8">
                <div className="flex flex-col gap-12">
                    <div className="w-full h-80 bg-zinc-800 rounded-lg"></div>
                    <div className="w-full h-80 bg-zinc-800 rounded-lg"></div>
                    <div className="w-full h-80 bg-zinc-800 rounded-lg"></div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-10 text-center text-zinc-600 border-t border-zinc-800">
                <p>© 2026 Calm Clarity</p>
            </footer>
        </div>
    );
}
