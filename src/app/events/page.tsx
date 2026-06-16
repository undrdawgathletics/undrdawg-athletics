import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

                {/* Empty state — no upcoming events */}
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 border border-black/5">
                        <ArrowRight size={24} className="text-zinc-400 -rotate-45" />
                    </div>
                    <h2 className="text-2xl font-black uppercase italic tracking-tighter text-black mb-2">No Upcoming Events</h2>
                    <p className="text-zinc-500 font-medium max-w-sm">
                        Check back soon — new signings and appearances are added regularly.
                    </p>
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
