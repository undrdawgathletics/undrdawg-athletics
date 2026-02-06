import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Zap, Calendar } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] overflow-hidden bg-white pt-20">
        {/* Left Slideshow */}
        <div className="hidden lg:block w-1/5 relative">
          <HeroSlideshow direction="up" />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center relative z-10 py-20">
          <div className="relative mb-8 h-[400px] w-[400px]">
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

          <p className="mx-auto mb-10 max-w-3xl text-xl font-medium text-zinc-600 md:text-2xl italic">
            “Delivering Notable Athletes - it’s in our DNA. We help you book and meet all athletes - overcoming odds to create authentic & memorable experiences!”
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book"
              className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 text-lg font-bold text-white transition-all hover:bg-primary/90 sm:w-auto"
            >
              Book an Athlete
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/shop"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full border border-black/20 bg-black/5 px-8 text-lg font-bold text-black backdrop-blur-sm transition-all hover:bg-black/10 sm:w-auto"
            >
              Shop the Drop
            </Link>
          </div>
        </div>

        {/* Right Slideshow */}
        <div className="hidden lg:block w-1/5 relative">
          <HeroSlideshow direction="down" />
        </div>
      </section>

      {/* Featured Stats/Trust Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Events (Was Philly Born) */}
            <div className="flex items-center justify-center gap-4 text-center md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">Events</h3>
                <p className="text-sm text-zinc-500">Public and Private Signings with your Favorite Athletes and Celebrities</p>
              </div>
            </div>

            {/* Authentic Memorabilia (Was Authentic Gear) */}
            <div className="flex items-center justify-center gap-4 text-center md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">Authentic Memorabilia</h3>
                <p className="text-sm text-zinc-500">Verified Memorbillia from Your Favorite Pros and Celebrities</p>
              </div>
            </div>

            {/* Elite Roster */}
            <div className="flex items-center justify-center gap-4 text-center md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">Elite Roster</h3>
                <p className="text-sm text-zinc-500">Connecting you with Top Talent</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
