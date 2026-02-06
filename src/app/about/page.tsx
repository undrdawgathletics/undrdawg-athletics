import Image from "next/image";
import { GraduationCap, MapPin, Rocket, PlayCircle } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-white text-black">
            {/* Header */}
            <section className="relative pt-24 pb-12 px-4 overflow-hidden border-b border-black/5">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4 text-black">
                        THE UNDRDAWG <span className="text-primary italic">STORY</span>
                    </h1>
                </div>
            </section>

            {/* The Undrdawg Story */}
            <section className="py-16 px-4 bg-white">
                <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6 text-lg text-zinc-700 leading-relaxed font-medium">
                        <p>
                            Founded in January 2026 by four partners, Undrdawg Athletics wasn’t built in a boardroom—it was built on a lifelong bond. Two of the founders, Chris and Julian, have been friends since birth, a relationship that continued through their years at St. Mary Interparochial School for grade school. That decades-long trust serves as the primary engine behind everything we do, and our "Undrdawg" identity is rooted in our different, yet complementary, paths through sports, defined by a shared commitment to outworking the competition.
                        </p>
                        <p>
                            Julian’s athletic journey is marked by high-level success; a National Champion and high school Tournament MVP, he eventually proved the doubters wrong by earning a spot on the Division I Drexel Men’s Soccer roster as a walk-on. Chris’s story is one of discipline and rapid growth; despite never playing football prior to high school, he earned his place in the elite St. Joseph’s Prep football program. He was a member of the 2019 team that secured a PIAA State Championship, a Philadelphia City Title, and a Philadelphia Catholic League Title.
                        </p>
                        <p>
                            After attending different high schools, the two reunited at Drexel University, where they successfully conceptualized and executed a series of historic public meet-and-greets. Beginning with Brandon Graham in 2023 and expanding in 2024 to include AJ Brown and Jake Elliott, they managed every aspect of these high-profile appearances. Their work captured major media attention, earning coverage on 6abc and Fox 29, as they independently fundraised and navigated the complex logistics of professional athlete events. This successful venture served as the ultimate proof of concept and provided the inspiration for Undrdawg Athletics. Whether as a national standout, a championship teammate, or partners delivering historic, televised events, we have lived the grind and are here to bring that South Philly work ethic to the industry.
                        </p>
                    </div>

                    <div className="relative h-full min-h-[400px] w-full bg-black rounded-3xl overflow-hidden flex items-center justify-center group cursor-pointer shadow-2xl">
                        {/* Placeholder for 6abc News Clip */}
                        <Image
                            src="/images/athletes/athlete-1.jpg" // Using an existing image as placeholder poster
                            alt="6abc News Coverage"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute z-10 flex flex-col items-center text-white">
                            <PlayCircle size={80} className="mb-4 drop-shadow-md group-hover:scale-110 transition-transform" />
                            <span className="text-xl font-bold uppercase tracking-widest drop-shadow-md">Watch the 6abc News Clip</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Founders */}
            <section className="py-24 px-4 bg-zinc-50 border-t border-black/5">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-20 text-black">
                        Meet the <span className="text-primary italic">Founders</span>
                    </h2>

                    <div className="space-y-24">
                        {/* Chris */}
                        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                            <div className="flex-shrink-0 w-64 h-64 relative rounded-full overflow-hidden border-4 border-primary shadow-xl">
                                <Image
                                    src="/logo.png" // Placeholder
                                    alt="Chris Gallelli"
                                    fill
                                    className="object-cover invert brightness-200 bg-black"
                                />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-3xl font-black uppercase text-black mb-2">Chris Gallelli</h3>
                                <p className="text-primary font-bold tracking-widest uppercase mb-6">President & CEO</p>
                                <p className="text-zinc-600 leading-relaxed text-lg">
                                    A Senior at Drexel University double-majoring in Finance and Sport Management, Chris is the strategic engine behind Undrdawg Athletics. Drawing on the discipline and leadership cultivated within the championship-winning football program at St. Joseph’s Prep, he specializes in high-stakes talent negotiation and the logistical strategy required to secure premier athletes. Chris excels at navigating the intricate landscape of sports contracts, leveraging his finance background to manage budgets and ensure favorable terms for all parties involved. With professional experience as a Financial Analyst, he combines fiscal precision with industry-specific grit, ensuring that every partnership and event is executed with the highest standard of corporate service.
                                </p>
                            </div>
                        </div>

                        {/* Julian */}
                        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                            <div className="flex-shrink-0 w-64 h-64 relative rounded-full overflow-hidden border-4 border-primary shadow-xl">
                                <Image
                                    src="/logo.png" // Placeholder
                                    alt="Julian Pittaoulis"
                                    fill
                                    className="object-cover invert brightness-200 bg-black"
                                />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-3xl font-black uppercase text-black mb-2">Julian Pittaoulis</h3>
                                <p className="text-primary font-bold tracking-widest uppercase mb-6">Chief Marketing Officer (CMO)</p>
                                <p className="text-zinc-600 leading-relaxed text-lg">
                                    Julian is a Senior at Drexel University majoring in Economics and brings an elite competitive mindset to the brand. His journey to the Division I level as a walk-on for Drexel Men’s Soccer defines the persistence and "Undrdawg" work ethic he applies to every project. He specializes in market analysis and fan engagement to ensure every activation delivers maximum impact. Leveraging his professional background in Marketing, Operations, and Logistics Management, Julian excels at generating massive notability and public visibility, utilizing his marketing expertise to put "eyes" on every event and secure the media attention necessary for a historic turnout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
