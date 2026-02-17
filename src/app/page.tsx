"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Calendar } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import { useMemo } from "react";

const SLIDESHOW_IMAGES = [
  "/images/slideshow/IMG_6507.jpeg",
  "/images/slideshow/IMG_0321.jpeg",
  "/images/slideshow/392419D6-D028-4AB1-9E05-279BAA72BDC4OFF08509-Enhanced-NR (1).jpeg",
  "/images/slideshow/IMG_0186 (1) (1).jpeg",
  "/images/slideshow/IMG_0206.jpeg",
  "/images/slideshow/IMG_0318.jpeg",
  "/images/slideshow/IMG_0319.jpeg",
  "/images/slideshow/IMG_0320.jpeg",
  "/images/slideshow/IMG_0321 copy.jpeg",
  "/images/slideshow/IMG_0322.jpeg",
  "/images/slideshow/IMG_0323.jpeg",
  "/images/slideshow/IMG_0324.jpeg",
  "/images/slideshow/IMG_4290 (1).jpeg",
];

function shuffleArray(arr: string[]) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  const shuffledImages = useMemo(() => shuffleArray(SLIDESHOW_IMAGES), []);

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Row - flush under navbar */}
      <section className="relative w-full -mt-20 pt-24 overflow-hidden">
        <div className="flex w-full items-center">
          {/* Left Slideshow */}
          <div className="hidden lg:block w-[30%] relative overflow-hidden h-[400px]">
            <HeroSlideshow images={shuffledImages} indexOffset={0} />
          </div>

          {/* Center Logo Area */}
          <div className="flex-1 flex flex-col items-center justify-center z-10 px-4 h-[400px]">
            <div className="relative h-[400px] w-[400px]">
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
          </div>

          {/* Right Slideshow */}
          <div className="hidden lg:block w-[30%] relative overflow-hidden h-[400px]">
            <HeroSlideshow images={shuffledImages} indexOffset={1} />
          </div>
        </div>
      </section>

      {/* Main Content Area - Below the Hero section to fill the white space */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* 3-Column Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
            {/* Events */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100 transition-colors hover:bg-zinc-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-black uppercase tracking-wider mb-2">Events</h3>
              <p className="text-sm text-zinc-600">Public & Private Signings</p>
            </div>

            {/* Memorabilia */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100 transition-colors hover:bg-zinc-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-bold text-black uppercase tracking-wider mb-2">Memorabilia</h3>
              <p className="text-sm text-zinc-600">Verified Authentic Gear</p>
            </div>

            {/* Roster */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100 transition-colors hover:bg-zinc-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-black uppercase tracking-wider mb-2">Roster</h3>
              <p className="text-sm text-zinc-600">Top Talent Connection</p>
            </div>
          </div>

          {/* Quote Block */}
          <div className="w-full max-w-3xl mb-12 text-center decoration-zinc-200">
            <div className="h-px w-full bg-zinc-100 mb-8" />
            <p className="text-2xl font-medium text-black italic leading-relaxed">
              "Delivering Notable Athletes - it's in our DNA. We help you book and meet all athletes - overcoming odds to create authentic & memorable experiences!"
            </p>
            <div className="h-px w-full bg-zinc-100 mt-8" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row w-full max-w-2xl">
            <Link
              href="/book"
              className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-black px-10 text-lg font-bold text-white transition-all hover:bg-zinc-800 sm:w-auto shadow-lg hover:shadow-xl active:scale-95"
            >
              Book an Athlete
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/shop"
              className="flex h-14 w-full items-center justify-center gap-3 rounded-full border-2 border-zinc-200 bg-transparent px-10 text-lg font-bold text-black transition-all hover:bg-zinc-50 sm:w-auto hover:border-zinc-300 active:scale-95"
            >
              Shop the Drop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
