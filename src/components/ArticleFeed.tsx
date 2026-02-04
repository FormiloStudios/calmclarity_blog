import { ArticleCard } from "./ArticleCard";

const ARTICLES = [
    {
        title: "The Architecture of Silence",
        excerpt: "How physical space influences cognitive clarity. Designing your environment for deep work.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop", // Minimal interior
        href: "/articles/architecture-of-silence"
    },
    {
        title: "Analog Rituals",
        excerpt: "Rediscovering the tactile satisfaction of pen and paper in a digital world.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2574&auto=format&fit=crop", // Book/desk
        href: "/articles/analog-rituals"
    },
    {
        title: "Monochrome Thinking",
        excerpt: "Why simplifying your visual input leads to more complex thoughts.",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop", // Fashion/Dark
        href: "/articles/monochrome-thinking"
    }
];

export function ArticleFeed() {
    return (
        <section className="bg-black text-white py-32 px-6">
            <div className="flex flex-col gap-32 md:gap-48 container mx-auto">
                {ARTICLES.map((article) => (
                    <ArticleCard key={article.title} {...article} />
                ))}
            </div>
        </section>
    );
}
