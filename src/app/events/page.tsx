import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import EventsTab from "@/components/EventsTab";

export default function EventsPage() {
    return (
        <div className="bg-white min-h-screen text-black pt-28 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-8 text-black text-center">
                    UPCOMING <span className="text-primary italic">EUENTS.</span>
                </h1>

                <EventsTab />

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {/* Jamie Drysdale Event Card */}
                    <Link href="/events/jamie-drysdale" className="group relative flex flex-col rounded-[2.5rem] bg-zinc-50 border border-black/5 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="relative aspect-square w-full bg-zinc-200">
                            <Image
                                src="/images/athletes/athlete-2.jpg"
                                alt="Jamie Drysdale"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-black">
                                Flyers
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-black mb-1">Jamie Drysdale</h3>
                                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Public Signing</p>
                            </div>

                            <div className="space-y-3 mb-8 flex-1">
                                <div className="flex items-center gap-3 text-sm text-zinc-600 font-medium">
                                    <Calendar size={16} className="text-primary" />
                                    <span>Feb 28, 2026</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-zinc-600 font-medium">
                                    <MapPin size={16} className="text-primary" />
                                    <span>Willow Grove Park Mall</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-black/5 pt-6">
                                <span className="text-xs font-black uppercase tracking-widest text-primary">Get Tickets</span>
                                <ArrowRight size={16} className="text-primary group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </Link>
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
