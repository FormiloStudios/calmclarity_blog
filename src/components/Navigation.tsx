import Link from "next/link";

export function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-transparent mix-blend-difference text-white">
            <Link href="/" className="text-lg font-medium tracking-tight hover:opacity-70 transition-opacity">
                Calm Clarity
            </Link>
            <div className="flex gap-8">
                <Link href="/lab" className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity">
                    The Lab
                </Link>
            </div>
        </nav>
    );
}
