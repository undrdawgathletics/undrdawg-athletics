"use client";

export default function ShopPage() {
    return (
        <div className="bg-white min-h-screen text-black pt-12 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Shop Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-4 text-black">
                            SHOP THE <span className="text-primary italic">DROP.</span>
                        </h1>
                        <p className="text-zinc-600 font-medium pt-8">
                            Premium apparel and verified memorabilia. Every piece tells a story of
                            overcoming the odds. Limited quantities available.
                        </p>
                    </div>
                </div>

                {/* Announcing Soon Section */}
                <div className="flex flex-col items-center justify-center py-32">
                    <h2 className="text-4xl md:text-6xl font-black uppercase text-black tracking-widest text-center italic">
                        Coming Soon!
                    </h2>
                </div>
            </div>
        </div>
    );
}
