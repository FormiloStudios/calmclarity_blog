import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ArticleFeed } from "@/components/ArticleFeed";

export default function Home() {
    return (
        <main className="bg-black min-h-screen">
            <Navigation />
            <Hero />
            <ArticleFeed />

            {/* Footer */}
            <footer className="py-12 text-center text-neutral-600 text-sm font-light">
                <p>© 2026 Calm Clarity. All rights reserved.</p>
            </footer>
        </main>
    );
}
