import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-80">
                <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                    alt="Abstract dark mood"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-4 text-center">
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight mix-blend-overlay opacity-90">
                    Quiet Minds.<br />
                    Sharper Focus.
                </h1>
            </div>
        </section>
    );
}
