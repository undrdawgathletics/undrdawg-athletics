"use client";

import { Calendar, MapPin, Clock } from "lucide-react";

const PAST_EVENTS = [
    {
        id: 1,
        team: "Philadelphia Eagles",
        athlete: "Star Defensive End",
        date: "Dec 22, 2025",
        time: "6:00 PM - 8:00 PM",
        location: "Lincoln Financial Field - Suite Level",
        type: "Meet & Greet",
        teamColor: "#004C54", // Eagles Green
    },
    {
        id: 2,
        team: "Philadelphia Phillies",
        athlete: "All-Star Infielder",
        date: "Jan 15, 2026",
        time: "2:00 PM - 5:00 PM",
        location: "Citizens Bank Park - Diamond Club",
        type: "Autograph Session",
        teamColor: "#E81828", // Phillies Red
    }
];

export default function PastEventsPage() {
    return (
        <div className="bg-white min-h-screen text-black pt-28 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-4 text-black">
                        PAST <span className="text-primary italic">EXPERIENCES.</span>
                    </h1>
                    <p className="text-zinc-600 max-w-2xl font-medium">
                        A look back at our exclusive events and athlete appearances.
                        Subscribe to our newsletter to never miss the next one.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PAST_EVENTS.map((event) => (
                        <div
                            key={event.id}
                            className="group relative flex flex-col rounded-[2.5rem] bg-zinc-50 border border-black/5 p-8 md:p-10 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all overflow-hidden"
                        >
                            <div
                                className="absolute top-0 right-0 h-32 w-32 blur-[80px] opacity-10 transition-opacity group-hover:opacity-20"
                                style={{ backgroundColor: event.teamColor }}
                            />

                            <div className="mb-8 flex justify-between items-start relative z-10">
                                <div
                                    className="rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl"
                                    style={{ backgroundColor: event.teamColor }}
                                >
                                    {event.team}
                                </div>
                                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                                    COMPLETED
                                </span>
                            </div>

                            <div className="relative z-10 mb-8">
                                <h3 className="text-3xl font-black mb-2 uppercase italic tracking-tighter text-black">
                                    {event.athlete}
                                </h3>
                                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                                    {event.type}
                                </p>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-4 text-sm text-zinc-400 line-through">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 border border-black/10">
                                        <Calendar size={14} />
                                    </div>
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-zinc-400">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 border border-black/10">
                                        <MapPin size={14} />
                                    </div>
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-black/5 flex items-center justify-between relative z-10">
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Gallery Coming Soon</span>
                                <div className="h-2 w-2 rounded-full bg-zinc-200" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
