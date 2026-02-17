import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Calendar } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* Main Content Area */}
      <section className="flex pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full gap-8 items-end">
        {/* Left Slideshow */}
        <div className="hidden lg:block w-[28%] relative aspect-[3/4] self-end rounded-2xl overflow-hidden shadow-2xl">
          <HeroSlideshow direction="up" />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-end pb-0 z-10">
          {/* Logo Animation */}
          <div className="relative mb-8 h-[300px] w-[300px]">
            {/* Fragment 1: Top Left */}
            <div className="absolute inset-0 animate-fragment-1" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' }}>
              <Image src="/logo.png" alt="Undrdawg logo" fill className="object-contain" priority />
            </div>
            {/* Fragment 2: Top Right */}
            <div className="absolute inset-0 animate-fragment-2" style={{ clipPath: 'polygon(50% 0, 99.5% 0, 99.5% 50%, 50% 50%)' }}>
              <Image src="/logo.png" alt="Undrdawg logo" fill className="object-contain" priority />
            </div>
            {/* Fragment 3: Bottom Left */}
            <div className="absolute inset-0 animate-fragment-3" style={{ clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)' }}>
              <Image src="/logo.png" alt="Undrdawg logo" fill className="object-contain" priority />
            </div>
            {/* Fragment 4: Bottom Right */}
            <div className="absolute inset-0 animate-fragment-4" style={{ clipPath: 'polygon(50% 50%, 99.5% 50%, 99.5% 100%, 50% 100%)' }}>
              <Image src="/logo.png" alt="Undrdawg logo" fill className="object-contain" priority />
            </div>
          </div>

          {/* 3-Column Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
            {/* Events */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 text-black">
                <Calendar size={20} />
              </div>
              <h3 className="text-lg font-bold text-black uppercase tracking-wide">Events</h3>
              <p className="text-xs text-zinc-500 max-w-[150px]">Public & Private Signings</p>
            </div>

            {/* Memorabilia */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 text-black">
                <Trophy size={20} />
              </div>
              <h3 className="text-lg font-bold text-black uppercase tracking-wide">Memorabilia</h3>
              <p className="text-xs text-zinc-500 max-w-[150px]">Verified Authentic Gear</p>
            </div>

            {/* Roster */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 text-black">
                <Users size={20} />
              </div>
              <h3 className="text-lg font-bold text-black uppercase tracking-wide">Roster</h3>
              <p className="text-xs text-zinc-500 max-w-[150px]">Top Talent Connection</p>
            </div>
          </div>

          {/* Quote Block */}
          <div className="w-full border-t border-black/10 pt-6 mb-8 text-center">
            <p className="text-lg font-medium text-black italic">
              “Delivering Notable Athletes - it’s in our DNA. We help you book and meet all athletes - overcoming odds to create authentic & memorable experiences!”
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row w-full">
            <Link
              href="/book"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-6 text-base font-bold text-white transition-all hover:bg-black/80 sm:w-auto"
            >
              Book an Athlete
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/shop"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-black/20 bg-transparent px-6 text-base font-bold text-black transition-all hover:bg-black/5 sm:w-auto"
            >
              Shop the Drop
            </Link>
          </div>
        </div>

        {/* Right Slideshow */}
        <div className="hidden lg:block w-[28%] relative aspect-[3/4] self-end rounded-2xl overflow-hidden shadow-2xl">
          <HeroSlideshow direction="down" />
        </div>
      </section>
    </div>
  );
}
