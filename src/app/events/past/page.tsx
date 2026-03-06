"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EventsTab from "@/components/EventsTab";

const FLYERS_ORANGE = "#F74F07";

export default function PastEventsPage() {
    return (
        <div className="bg-white min-h-screen text-black pt-28 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-8 text-black">
                        PAST <span className="text-primary italic">EXPERIENCES</span>
                    </h1>
                    <EventsTab />
                </div>

                {/* Jamie Drysdale Card */}
                <div className="group relative flex flex-col rounded-[2.5rem] bg-zinc-50 border border-black/5 p-8 md:p-10 transition-all overflow-hidden max-w-2xl shadow-sm hover:shadow-md">
                    {/* Background glow */}
                    <div
                        className="absolute top-0 right-0 h-32 w-32 blur-[80px] opacity-10 transition-opacity group-hover:opacity-20"
                        style={{ backgroundColor: FLYERS_ORANGE }}
                    />

                    {/* Team badge + status */}
                    <div className="mb-8 flex justify-between items-start relative z-10">
                        <div
                            className="rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl"
                            style={{ backgroundColor: FLYERS_ORANGE }}
                        >
                            Philadelphia Flyers
                        </div>
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                            COMPLETED
                        </span>
                    </div>

                    {/* Athlete name */}
                    <div className="relative z-10 mb-6">
                        <h3 className="text-4xl md:text-5xl font-black mb-2 uppercase italic tracking-tighter text-black leading-none whitespace-nowrap">
                            Jamie Drysdale
                        </h3>
                    </div>

                    {/* Signature + Photo — fill full width */}
                    <div className="relative z-10 flex gap-4 mb-4 w-full items-center h-80">
                        {/* Signature */}
                        <div className="relative w-[45%] h-48 flex items-center justify-center overflow-visible z-20">
                            <Image
                                src="/images/past-events/signature-nobg.png"
                                alt="Jamie Drysdale Signature"
                                fill
                                className="object-contain scale-[1.4]"
                            />
                        </div>
                        {/* Photo */}
                        <div className="relative w-[55%] h-full flex items-end justify-center overflow-visible z-10">
                            <Image
                                src="/images/past-events/image-nobg.png"
                                alt="Jamie Drysdale"
                                fill
                                className="object-contain object-bottom scale-[1.6] translate-x-6 origin-bottom"
                            />
                        </div>
                    </div>

                    {/* Date and Event Type */}
                    <div className="relative z-10 mb-6 flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center gap-3 text-sm font-bold text-white bg-black px-4 py-2 rounded-xl">
                            <Calendar size={16} />
                            <span>Jan 16, 2026</span>
                        </div>
                        <div className="inline-flex items-center gap-3 text-sm font-black text-white bg-[#F74F07] px-4 py-2 rounded-xl uppercase tracking-widest">
                            Public Signing
                        </div>
                    </div>

                    {/* Gallery link */}
                    <div className="mt-auto pt-6 border-t border-black/5 relative z-10">
                        <Link
                            href="/events/past/drysdale-gallery"
                            className="flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-colors hover:opacity-70"
                            style={{ color: FLYERS_ORANGE }}
                        >
                            <span>→ View Event Gallery</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
