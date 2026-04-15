import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import EventsTab from "@/components/EventsTab";

export default function EventsPage() {
    return (
        <div className="bg-white min-h-screen text-black pt-24 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <section className="relative pb-12 overflow-hidden border-b border-black/5 mb-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4 text-black">
                            UPCOMING <span className="text-black italic">EVENTS</span>
                        </h1>
                    </div>
                </section>

                <EventsTab />

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {/* Hugh Douglas Event Card */}
                    <div className="group relative flex flex-col rounded-[2.5rem] bg-white border border-black/10 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-black/20">
                        <div className="relative aspect-square w-full bg-zinc-200 overflow-hidden flex items-center justify-center">
                            <span className="text-zinc-400 absolute z-0 text-sm font-medium">Flyer Placeholder</span>
                            <Image 
                                src="/events/hugh-douglas/flyer.png" 
                                alt="Hugh Douglas Meet & Greet Flyer" 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500 z-10"
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-black mb-1">Hugh Douglas</h3>
                                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Meet & Greet</p>
                            </div>

                            <div className="space-y-3 mb-8 flex-1">
                                <div className="flex items-center gap-3 text-sm text-zinc-600 font-medium">
                                    <Calendar size={16} />
                                    <span>May 15, 2026 at 7:00 PM</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-zinc-600 font-medium">
                                    <MapPin size={16} />
                                    <span>Palmisano's Sandwich Shop</span>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <a 
                                    href="https://events.ticketleap.com/tickets/undrdawg-athletics/hugh-douglas-meet-greet" 
                                    target="_blank" 
                                    id="btn-constructor" 
                                    rel="noreferrer" 
                                    className="bg-[#00944A] border border-[#00944A] rounded-[22.5rem] text-white hover:bg-[#007a3d] hover:border-[#007a3d] cursor-pointer flex items-center justify-center font-['Helvetica','Arial',sans-serif] text-[0.875rem] font-normal leading-[1.5] w-full py-[10px] px-[20px] text-center no-underline whitespace-nowrap transition-colors duration-150 ease-in-out select-none shadow-sm"
                                >
                                    Buy Tickets
                                </a>
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
