"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EventsTab() {
    const pathname = usePathname();
    // Simple check for active state
    const isUpcoming = pathname === "/events";
    const isPast = pathname.includes("/past");
    const isMailIn = pathname.includes("/mail-in");

    return (
        <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-[2rem] bg-zinc-100 p-1 border border-black/5">
                <Link
                    href="/events"
                    className={`px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-black uppercase tracking-widest transition-all ${isUpcoming
                            ? "bg-black text-white shadow-lg"
                            : "text-zinc-500 hover:text-black"
                        }`}
                >
                    Upcoming
                </Link>
                <Link
                    href="/events/past"
                    className={`px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-black uppercase tracking-widest transition-all ${isPast
                            ? "bg-black text-white shadow-lg"
                            : "text-zinc-500 hover:text-black"
                        }`}
                >
                    Past
                </Link>
                <Link
                    href="/events/mail-in"
                    className={`px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-black uppercase tracking-widest transition-all ${isMailIn
                            ? "bg-black text-white shadow-lg"
                            : "text-zinc-500 hover:text-black"
                        }`}
                >
                    Mail-in
                </Link>
            </div>
        </div>
    );
}
