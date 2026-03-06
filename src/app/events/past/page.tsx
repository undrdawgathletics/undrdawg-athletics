"use client";

import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
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
                <div className="group relative flex flex-col rounded-[2.5rem] bg-zinc-50 border border-black/5 p-8 md:p-10 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all overflow-hidden max-w-2xl">
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

                    {/* Athlete name + event type */}
                    <div className="relative z-10 mb-8">
                        <h3 className="text-3xl font-black mb-2 uppercase italic tracking-tighter text-black">
                            Jamie Drysdale
                        </h3>
                        <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                            Meet &amp; Greet
                        </p>
                    </div>

                    {/* Photo + Signature */}
                    <div className="relative z-10 flex gap-6 mb-8 items-center">
                        <div className="relative w-40 h-48 rounded-2xl overflow-hidden bg-zinc-200 flex-shrink-0">
                            <Image
                                src="/images/past-events/image.png"
                                alt="Jamie Drysdale"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-48 h-28 flex-shrink-0">
                            <Image
                                src="/images/past-events/5E312072-67F2-4F46-B732-5C782185D579_4_5005_c.jpeg"
                                alt="Jamie Drysdale Signature"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Date + Location */}
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-4 text-sm text-zinc-400 line-through">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 border border-black/10">
                                <Calendar size={14} />
                            </div>
                            <span>Dec 22, 2025</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-zinc-400">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 border border-black/10">
                                <MapPin size={14} />
                            </div>
                            <span>Lincoln Financial Field - Suite Level</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-8 border-t border-black/5 flex items-center justify-between relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Gallery Coming Soon</span>
                        <div className="h-2 w-2 rounded-full bg-zinc-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}
