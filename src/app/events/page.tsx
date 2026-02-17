import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import EventsTab from "@/components/EventsTab";

export default function EventsPage() {
    return (
        <div className="bg-white min-h-screen text-black pt-28 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-8 text-black text-center">
                    UPCOMING <span className="text-primary italic">EVENTS</span>
                </h1>

                <EventsTab />

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {/* Coming Soon Card */}
                    <div className="group relative flex flex-col rounded-[2.5rem] bg-zinc-50 border border-black/5 overflow-hidden transition-all duration-300">
                        <div className="relative aspect-square w-full bg-zinc-200 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                            <span className="text-4xl font-black italic uppercase tracking-tighter text-zinc-300 select-none">Coming Soon</span>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-zinc-400 mb-1">New Event</h3>
                                <p className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Public Signing</p>
                            </div>

                            <div className="space-y-3 mb-8 flex-1">
                                <div className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                                    <Calendar size={16} />
                                    <span>TBA 2026</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                                    <MapPin size={16} />
                                    <span>To Be Announced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Global Experiences CTA */}
                <div className="mt-12 rounded-[3rem] bg-gradient-to-br from-primary/5 via-zinc-50 to-zinc-50 border border-black/5 p-12 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[120px] -z-0" />

                    <div className="relative z-10">
                        <h4 className="text-3xl font-black uppercase mb-10 italic tracking-tighter text-black">Want to book a player?</h4>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book" className="h-14 px-10 bg-primary rounded-full font-black uppercase text-sm tracking-widest hover:bg-primary/80 transition-all text-white flex items-center justify-center">
                                Book Player Appearance
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
