"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EventsTab from "@/components/EventsTab";

const FLYERS_ORANGE = "#F74F07";
const EAGLES_GREEN = "#004C54";

export default function PastEventsPage() {
    return (
        <div className="bg-white min-h-screen text-black pt-24 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <section className="relative pb-12 overflow-hidden border-b border-black/5 mb-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4 text-black">
                            PAST <span className="text-black italic">EXPERIENCES</span>
                        </h1>
                    </div>
                </section>
                <div className="mb-16 text-center">
                    <EventsTab />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Jamie Drysdale Card */}
                <div className="group relative flex flex-col rounded-[2.5rem] bg-zinc-50 border border-black/5 p-8 md:p-10 transition-all overflow-hidden shadow-sm hover:shadow-md">
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

                {/* Hugh Douglas Card */}
                <div className="group relative flex flex-col rounded-[2.5rem] bg-zinc-50 border border-black/5 p-8 md:p-10 transition-all overflow-hidden shadow-sm hover:shadow-md">
                    {/* Background glow */}
                    <div
                        className="absolute top-0 right-0 h-32 w-32 blur-[80px] opacity-10 transition-opacity group-hover:opacity-20"
                        style={{ backgroundColor: EAGLES_GREEN }}
                    />

                    {/* Team badge + status */}
                    <div className="mb-8 flex justify-between items-start relative z-10">
                        <div
                            className="rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl"
                            style={{ backgroundColor: EAGLES_GREEN }}
                        >
                            Philadelphia Eagles
                        </div>
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                            COMPLETED
                        </span>
                    </div>

                    {/* Athlete name */}
                    <div className="relative z-10 mb-6">
                        <h3 className="text-4xl md:text-5xl font-black mb-2 uppercase italic tracking-tighter text-black leading-none whitespace-nowrap">
                            Hugh Douglas
                        </h3>
                    </div>

                    {/* Signature + Photo cutout */}
                    <div className="relative z-10 flex gap-4 mb-4 w-full items-center h-80">
                        {/* Signature — coming soon */}
                        <div className="relative w-[45%] h-48 flex flex-col items-center justify-center bg-zinc-100 rounded-2xl border-2 border-dashed border-zinc-300">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-2 opacity-30">
                                <path d="M8 36 Q16 20 24 28 Q32 36 40 12" stroke="#004C54" strokeWidth="3" strokeLinecap="round" fill="none"/>
                                <path d="M8 40 H40" stroke="#004C54" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Signature</span>
                            <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest mt-0.5">Coming Soon</span>
                        </div>
                        {/* Photo cutout */}
                        <div className="relative w-[55%] h-full flex items-end justify-center overflow-visible z-10">
                            <Image
                                src="/images/past-events/hugh-douglas-nobg.png"
                                alt="Hugh Douglas"
                                fill
                                className="object-contain object-bottom scale-[1.6] translate-x-6 origin-bottom"
                            />
                        </div>
                    </div>

                    {/* Date and Event Type */}
                    <div className="relative z-10 mb-6 flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center gap-3 text-sm font-bold text-white bg-black px-4 py-2 rounded-xl">
                            <Calendar size={16} />
                            <span>May 15, 2026</span>
                        </div>
                        <div
                            className="inline-flex items-center gap-3 text-sm font-black text-white px-4 py-2 rounded-xl uppercase tracking-widest"
                            style={{ backgroundColor: EAGLES_GREEN }}
                        >
                            Meet &amp; Greet
                        </div>
                    </div>

                    {/* Gallery link */}
                    <div className="mt-auto pt-6 border-t border-black/5 relative z-10">
                        <Link
                            href="/events/past/hugh-douglas-gallery"
                            className="flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-colors hover:opacity-70"
                            style={{ color: EAGLES_GREEN }}
                        >
                            <span>→ View Event Gallery</span>
                        </Link>
                    </div>
                </div>

                </div>{/* end grid */}
            </div>
        </div>
    );
}
