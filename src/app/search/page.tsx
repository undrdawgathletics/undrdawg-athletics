"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    return (
        <div className="bg-white min-h-screen text-black pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">
                    Search Results
                </h1>

                {query ? (
                    <div className="space-y-6">
                        <p className="text-xl text-zinc-600">
                            Showing results for <span className="font-bold text-black">"{query}"</span>
                        </p>
                        <div className="p-12 border border-dashed border-zinc-300 rounded-3xl bg-zinc-50">
                            <p className="text-zinc-500 italic">No exact matches found. Try browsing our specialized sections:</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-xl text-zinc-600">Please enter a search term.</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                    <Link href="/book" className="p-8 rounded-2xl bg-black text-white hover:bg-zinc-900 transition-colors group">
                        <h3 className="text-xl font-bold uppercase italic mb-2">Book an Athlete</h3>
                        <p className="text-sm text-zinc-400">Find talent for your next event.</p>
                    </Link>
                    <Link href="/shop" className="p-8 rounded-2xl bg-black text-white hover:bg-zinc-900 transition-colors group">
                        <h3 className="text-xl font-bold uppercase italic mb-2">Shop Gear</h3>
                        <p className="text-sm text-zinc-400">Get the latest authentic merchandise.</p>
                    </Link>
                    <Link href="/events" className="p-8 rounded-2xl bg-black text-white hover:bg-zinc-900 transition-colors group">
                        <h3 className="text-xl font-bold uppercase italic mb-2">Upcoming Events</h3>
                        <p className="text-sm text-zinc-400">See where we'll be next.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <SearchContent />
        </Suspense>
    );
}
