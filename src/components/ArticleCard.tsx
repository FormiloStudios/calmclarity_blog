import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
    title: string;
    excerpt: string;
    image: string;
    href: string;
}

export function ArticleCard({ title, excerpt, image, href }: ArticleProps) {
    return (
        <article className="group flex flex-col gap-6 w-full max-w-4xl mx-auto">
            <Link href={href} className="relative block aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-90 opacity-80"
                    sizes="(max-width: 768px) 100vw, 80vw"
                />
                {/* Subtle overlay for consistency */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </Link>
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl md:text-4xl font-serif text-neutral-100 group-hover:text-white transition-colors">
                    <Link href={href}>{title}</Link>
                </h2>
                <p className="text-lg text-neutral-400 font-light max-w-2xl">
                    {excerpt}
                </p>
            </div>
        </article>
    );
}
