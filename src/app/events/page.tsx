"use client";

import { useState } from "react";
import { Calendar, MapPin, Ticket, Clock, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

const EVENTS = [
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
    },
    {
        id: 3,
        team: "Philadelphia 76ers",
        athlete: "Starting Point Guard",
        date: "Feb 10, 2026",
        time: "5:30 PM",
        location: "Wells Fargo Center - Atrium",
        type: "Elite Appearance",
        teamColor: "#006BB6", // Sixers Blue
    },
    {
        id: 4,
        team: "Philadelphia Flyers",
        athlete: "Starting Goaltender",
        date: "Mar 05, 2026",
        time: "7:00 PM",
        location: "South Philly Sports Complex",
        type: "Fan Q&A",
        teamColor: "#F74902", // Flyers Orange
    }
];

export default function EventsPage() {
    const { addItem } = useCart();
    const [selectedPackages, setSelectedPackages] = useState<Record<number, 'picture' | 'autograph' | 'combo'>>({
        1: 'combo',
        2: 'combo',
        3: 'combo',
        4: 'combo'
    });

    const handleBook = (event: typeof EVENTS[0]) => {
        const pkg = selectedPackages[event.id];
        let price = 39;
        let label = "";

        if (pkg === 'picture') label = "Picture Only";
        if (pkg === 'autograph') label = "Autograph Only";
        if (pkg === 'combo') {
            label = "Combo Both (Pic + Auto)";
            price = 59;
        }

        addItem({
            id: `${event.id}-${pkg}`,
            name: `${event.athlete} - ${event.team}`,
            price,
            type: "event",
            quantity: 1,
            metadata: {
                packageType: label,
                team: event.team,
                athlete: event.athlete,
                date: event.date
            }
        });
    };

    return (
        <div className="bg-white min-h-screen text-black pt-12 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-4 text-black">
                        PRO ATHLETE <span className="text-primary italic">EXPERIENCES.</span>
                    </h1>
                    <p className="text-zinc-600 max-w-2xl font-medium">
                        Meet the stars of the Eagles, Phillies, Sixers, and Flyers.
                        Secure your spot for a professional photo, an official autograph, or the full experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EVENTS.map((event) => (
                        <div
                            key={event.id}
                            className="group relative flex flex-col rounded-[2.5rem] bg-zinc-50 border border-black/5 p-8 md:p-10 transition-all hover:border-primary/50 hover:bg-zinc-100 overflow-hidden"
                        >
                            {/* Team Color Accent Bar */}
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
                                    Event #{event.id.toString().padStart(3, '0')}
                                </span>
                            </div>

                            <div className="relative z-10 mb-8">
                                <h3 className="text-3xl font-black mb-2 group-hover:text-primary transition-colors uppercase italic tracking-tighter text-black">
                                    {event.athlete}
                                </h3>
                                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                                    Official {event.type}
                                </p>
                            </div>

                            <div className="space-y-4 mb-10 relative z-10">
                                <div className="flex items-center gap-4 text-sm text-zinc-600">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 border border-black/10">
                                        <Calendar size={14} className="text-zinc-500" />
                                    </div>
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-zinc-600">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 border border-black/10">
                                        <Clock size={14} className="text-zinc-500" />
                                    </div>
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-zinc-600">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 border border-black/10">
                                        <MapPin size={14} className="text-zinc-500" />
                                    </div>
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            {/* Pricing Tiers */}
                            <div className="mt-auto border-t border-black/5 pt-8 relative z-10">
                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-6">Select your package</p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <button
                                        onClick={() => setSelectedPackages(prev => ({ ...prev, [event.id]: 'picture' }))}
                                        className={`flex flex-col items-center justify-center rounded-2xl border p-4 transition-all relative ${selectedPackages[event.id] === 'picture'
                                            ? 'bg-primary/5 border-primary/50'
                                            : 'bg-white border-black/5 hover:border-black/10'
                                            }`}
                                    >
                                        {selectedPackages[event.id] === 'picture' && <Check size={12} className="absolute top-2 right-2 text-primary" />}
                                        <span className="text-[10px] font-black text-zinc-400 uppercase mb-1">Picture Only</span>
                                        <span className="text-lg font-black text-black">$39</span>
                                    </button>
                                    <button
                                        onClick={() => setSelectedPackages(prev => ({ ...prev, [event.id]: 'autograph' }))}
                                        className={`flex flex-col items-center justify-center rounded-2xl border p-4 transition-all relative ${selectedPackages[event.id] === 'autograph'
                                            ? 'bg-primary/5 border-primary/50'
                                            : 'bg-white border-black/5 hover:border-black/10'
                                            }`}
                                    >
                                        {selectedPackages[event.id] === 'autograph' && <Check size={12} className="absolute top-2 right-2 text-primary" />}
                                        <span className="text-[10px] font-black text-zinc-400 uppercase mb-1">Autograph Only</span>
                                        <span className="text-lg font-black text-black">$39</span>
                                    </button>
                                    <button
                                        onClick={() => setSelectedPackages(prev => ({ ...prev, [event.id]: 'combo' }))}
                                        className={`flex flex-col items-center justify-center rounded-2xl border p-4 transition-all relative ${selectedPackages[event.id] === 'combo'
                                            ? 'bg-primary border-primary shadow-[0_10px_20px_rgba(0,76,84,0.1)] text-white'
                                            : 'bg-white border-black/5 hover:border-black/10'
                                            }`}
                                    >
                                        {selectedPackages[event.id] === 'combo' && <Check size={12} className="absolute top-2 right-2 text-white" />}
                                        <span className={`text-[10px] font-black uppercase mb-1 ${selectedPackages[event.id] === 'combo' ? 'text-white/70' : 'text-zinc-400'}`}>Combo Both</span>
                                        <span className={`text-lg font-black ${selectedPackages[event.id] === 'combo' ? 'text-white' : 'text-black'}`}>$59</span>
                                    </button>
                                </div>

                                <button
                                    onClick={() => handleBook(event)}
                                    className="w-full mt-6 h-12 bg-black text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-2 group/btn"
                                >
                                    <Ticket size={16} className="group-hover/btn:scale-110 transition-transform" />
                                    Book Ticket Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Global Experiences CTA */}
                <div className="mt-24 rounded-[3rem] bg-gradient-to-br from-primary/5 via-zinc-50 to-zinc-50 border border-black/5 p-12 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[120px] -z-0" />

                    <div className="relative z-10">
                        <h4 className="text-3xl font-black uppercase mb-4 italic tracking-tighter text-black">The Undrdawg Experience</h4>
                        <p className="text-zinc-600 max-w-2xl mx-auto mb-10 font-medium">
                            We aren't just selling autographs. We're delivering the grit and heart
                            of Philadelphia sports directly to you. Every appearance is verified and authentic.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="h-14 px-10 bg-primary rounded-full font-black uppercase text-sm tracking-widest hover:bg-primary/80 transition-all text-white">
                                Book Custom Appearance
                            </button>
                            <button className="h-14 px-10 bg-black/5 border border-black/10 backdrop-blur-sm rounded-full font-black uppercase text-sm tracking-widest hover:bg-black/10 transition-all text-black">
                                Corporate Packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
