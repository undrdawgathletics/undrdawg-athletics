import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Ticket } from "lucide-react";

export default function JamieDrysdaleEventPage() {
    return (
        <div className="bg-white min-h-screen text-black pt-28 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/events" className="text-zinc-500 hover:text-black text-sm font-bold uppercase tracking-widest transition-colors">
                        ← Back to Events
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Images */}
                    <div className="space-y-8">
                        <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl">
                            {/* Athlete Image */}
                            <Image
                                src="/images/athletes/athlete-2.jpg"
                                alt="Jamie Drysdale"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="bg-zinc-50 rounded-3xl p-8 border border-black/5">
                            <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-4">Autograph Preview</h3>
                            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-white border border-black/10 flex items-center justify-center">
                                {/* Autograph Placeholder */}
                                <p className="text-zinc-300 font-script text-4xl italic rotate-[-10deg]">Jamie Drysdale</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Info & Tickets */}
                    <div className="flex flex-col justify-center">
                        <div className="inline-block rounded-full px-4 py-1.5 bg-orange-500/10 text-orange-600 text-xs font-black uppercase tracking-widest self-start mb-6 border border-orange-500/20">
                            Flyers Hockey
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 text-black">
                            JAMIE <span className="text-primary italic">DRYSDALE</span>
                        </h1>

                        <p className="text-xl text-zinc-600 leading-relaxed font-medium mb-12">
                            Join us for an exclusive signing event with Philadelphia Flyers defenseman Jamie Drysdale.
                            Don't miss this opportunity to meet one of the bright young stars of the NHL.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-6">
                                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-black/5 border border-black/10">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Date</p>
                                    <p className="text-lg font-bold text-black">February 28, 2026</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-black/5 border border-black/10">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Time</p>
                                    <p className="text-lg font-bold text-black">6:00 PM - 8:00 PM EST</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-black/5 border border-black/10">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Location</p>
                                    <p className="text-lg font-bold text-black">Dynasty Sports - Willow Grove Park Mall</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* Ticket Leap Link */}
                            <a
                                href="https://www.ticketleap.com/events"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-16 w-full rounded-2xl bg-black text-white font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all shadow-xl hover:translate-y-[-2px]"
                            >
                                <Ticket size={24} />
                                Buy Tickets
                            </a>

                            <p className="text-xs text-center text-zinc-400 font-medium mt-2">
                                Powered by TicketLeap. Tickets are limited.
                            </p>
                        </div>

                        {/* Photo Gallery Link (Placeholder functionality) */}
                        <div className="mt-12 pt-12 border-t border-black/5">
                            <button className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors flex items-center gap-2">
                                View Event Gallery (Coming Soon)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
