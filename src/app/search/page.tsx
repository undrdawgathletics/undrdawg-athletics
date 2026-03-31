"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";

// The static search index map
const searchIndex = [
    {
        id: "shop-jamie-puck",
        title: "Jamie Drysdale Autographed Puck",
        url: "/shop/jamie-drysdale-puck",
        category: "Shop",
        description: "Official Undrdawg authenticated Jamie Drysdale autographed puck.",
        keywords: ["jamie", "drysdale", "puck", "flyers", "autograph", "signed", "memorabilia", "shop", "buy"]
    },
    {
        id: "shop-jamie-photo",
        title: "Jamie Drysdale Autographed Photo",
        url: "/shop/jamie-drysdale-photo",
        category: "Shop",
        description: "Official Dynasty authenticated Jamie Drysdale autographed photo.",
        keywords: ["jamie", "drysdale", "photo", "flyers", "autograph", "signed", "memorabilia", "shop", "8x10", "16x20", "buy"]
    },
    {
        id: "shop-apparel",
        title: "Shop Apparel & Gear",
        url: "/shop",
        category: "Shop",
        description: "Browse our latest drops, official tees, and authentic memorabilia.",
        keywords: ["shop", "drop", "apparel", "gear", "store", "buy", "clothes", "t-shirt", "tee"]
    },
    {
        id: "events-upcoming",
        title: "Upcoming Events",
        url: "/events",
        category: "Events",
        description: "See where we'll be next. Public signings, meet and greets, and more.",
        keywords: ["events", "upcoming", "signings", "appearances", "meet", "greet", "schedule"]
    },
    {
        id: "events-past",
        title: "Past Events",
        url: "/events/past",
        category: "Events",
        description: "Check out highlights and photos from our past events.",
        keywords: ["events", "past", "history", "previous", "gallery"]
    },
    {
        id: "events-mail-in",
        title: "Mail-in Events",
        url: "/events/mail-in",
        category: "Events",
        description: "Can't make an event? Mail-in your items to get them signed.",
        keywords: ["mail", "in", "events", "signing", "send", "mail-in", "autograph"]
    },
    {
        id: "book-athlete",
        title: "Book an Athlete",
        url: "/book",
        category: "Booking",
        description: "Book an athlete for your next corporate event, podcast, or signing.",
        keywords: ["book", "athlete", "appearance", "hire", "talent", "contact", "booking"]
    },
    {
        id: "page-about",
        title: "About Undrdawg Athletics",
        url: "/about",
        category: "Information",
        description: "Learn about the Undrdawg Athletics story and our mission.",
        keywords: ["about", "us", "story", "mission", "company", "who", "are", "we"]
    },
    {
        id: "page-verify",
        title: "Verify Memorabilia",
        url: "/verify",
        category: "Verification",
        description: "Verify the authenticity of your exclusive Undrdawg gear.",
        keywords: ["verify", "memorabilia", "authenticity", "gear", "check", "authentic", "cert", "certificate"]
    },
    {
        id: "page-contact",
        title: "Contact Us",
        url: "/contact",
        category: "Information",
        description: "Get in touch with the Undrdawg Athletics team.",
        keywords: ["contact", "email", "support", "help", "reach", "out"]
    }
];

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    
    // Filter logic
    const lowerQuery = query.toLowerCase().trim();
    const results = lowerQuery ? searchIndex.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery);
        const descMatch = item.description.toLowerCase().includes(lowerQuery);
        const keywordMatch = item.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));
        return titleMatch || descMatch || keywordMatch;
    }) : [];

    return (
        <div className="bg-white min-h-screen text-black pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                        Search Results
                    </h1>
                    {query ? (
                        <p className="text-xl text-zinc-600">
                            Showing results for <span className="font-bold text-black">"{query}"</span>
                        </p>
                    ) : (
                        <p className="text-xl text-zinc-600">Please enter a search term.</p>
                    )}
                </div>

                {query && results.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {results.map((result) => (
                            <Link 
                                key={result.id} 
                                href={result.url} 
                                className="group flex flex-col p-8 rounded-3xl bg-zinc-50 border border-black/5 hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl"
                            >
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-black text-white group-hover:bg-white group-hover:text-black text-[10px] font-black uppercase tracking-widest rounded-lg mb-3 shadow-sm transition-colors">
                                        {result.category}
                                    </span>
                                    <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2 leading-tight">
                                        {result.title}
                                    </h3>
                                    <p className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                        {result.description}
                                    </p>
                                </div>
                                <div className="mt-auto pt-4 flex items-center justify-between text-black group-hover:text-white transition-colors">
                                    <span className="text-sm font-bold uppercase tracking-widest">View Details</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : query && results.length === 0 ? (
                    <div className="text-center max-w-3xl mx-auto border border-dashed border-zinc-300 rounded-3xl p-12 bg-zinc-50 mb-12">
                        <p className="text-xl font-bold uppercase tracking-wider mb-2">No exact matches found.</p>
                        <p className="text-zinc-500">Try adjusting your search terms or browsing our specialized sections below.</p>
                    </div>
                ) : null}

                {/* Quick Links */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-8 text-black/20">Quick Links</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
