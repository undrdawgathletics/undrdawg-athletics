import Image from "next/image";
import { GraduationCap, MapPin, Rocket } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-white text-black">
            {/* Introduction Hero */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-black/5">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 text-black">
                        BORN FROM <span className="text-primary italic">GRIT.</span>
                    </h1>
                    <p className="text-xl text-zinc-600 leading-relaxed font-medium">
                        Undrdawg Athletics isn't just a brand; it's a movement born in the classrooms
                        and on the campuses of Philadelphia's hardest-working institutions.
                    </p>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-24 px-4 bg-zinc-50">
                <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black tracking-tight uppercase text-black">
                            The University <br />
                            <span className="text-primary">Connection</span>
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1 h-10 w-10 flex items-center justify-center rounded-lg bg-black/5 border border-black/10 text-primary">
                                    <GraduationCap size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-black">Student-Led & Driven</h4>
                                    <p className="text-zinc-600 mt-1">
                                        Founded by visionary students from <span className="text-black font-semibold">Penn State University</span> and <span className="text-black font-semibold">Drexel University</span>,
                                        we understand the hustle of the next generation of athletes.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1 h-10 w-10 flex items-center justify-center rounded-lg bg-black/5 border border-black/10 text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-black">Philadelphia Roots</h4>
                                    <p className="text-zinc-600 mt-1">
                                        Operated out of the City of Brotherly Love. Our "Undrdawg" mentality
                                        is etched into the Philadelphia region's identity.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1 h-10 w-10 flex items-center justify-center rounded-lg bg-black/5 border border-black/10 text-primary">
                                    <Rocket size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-black">The Mission</h4>
                                    <p className="text-zinc-600 mt-1">
                                        To deliver premium, authentic experiences that bridge the gap
                                        between notable athletes and their most dedicated fans.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-3xl bg-white border border-black/5 overflow-hidden flex flex-col items-center justify-center p-12 shadow-xl">
                            <Image
                                src="/logo.png"
                                alt="Undrdawg Official Logo"
                                width={180}
                                height={180}
                                className="mb-8"
                            />
                            <div className="text-center">
                                <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">Established 2024</p>
                                <h3 className="text-2xl font-black italic uppercase text-black">"Notable by Nature. Underdog by Choice."</h3>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-primary/10 blur-3xl" />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-4 border-t border-black/5">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-black uppercase mb-12 text-black">The Undrdawg Manifesto</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="p-8 rounded-2xl bg-zinc-50 border border-black/5">
                            <h3 className="text-primary font-bold mb-4 italic">01. GRIT ABOVE ALL</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">
                                Success isn't given; it's earned in the shadows when no one is watching.
                                We celebrate the grind that creates notable athletes.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-zinc-50 border border-black/5">
                            <h3 className="text-primary font-bold mb-4 italic">02. RADICAL AUTHENTICITY</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">
                                In a world of filters, we deal in truth. Every item we sell and
                                every athlete we book is verified for 100% authenticity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
