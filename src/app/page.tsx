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
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* 3-Column Stats Row - Spaced out */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl mb-16">
            {/* Events */}
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100 transition-all hover:bg-zinc-100 hover:scale-[1.02]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-lg">
                <Calendar size={28} />
              </div>
              <h3 className="text-2xl font-black text-black uppercase tracking-tighter mb-3">Events</h3>
              <p className="text-base text-zinc-600 font-medium">Public & Private Signings</p>
            </div>

            {/* Memorabilia */}
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100 transition-all hover:bg-zinc-100 hover:scale-[1.02]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-lg">
                <Trophy size={28} />
              </div>
              <h3 className="text-2xl font-black text-black uppercase tracking-tighter mb-3">Memorabilia</h3>
              <p className="text-base text-zinc-600 font-medium">Verified Authentic Gear</p>
            </div>

            {/* Roster -> Elite Roster */}
            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100 transition-all hover:bg-zinc-100 hover:scale-[1.02]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-lg">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-black text-black uppercase tracking-tighter mb-3">Elite Roster</h3>
              <p className="text-base text-zinc-600 font-medium">Top Talent Connection</p>
            </div>
          </div>

          {/* Quote Block - Full Width */}
          <div className="w-full mb-12 text-center">
            <div className="h-px w-full bg-zinc-200 mb-10" />
            <div className="max-w-5xl mx-auto px-4">
              <p className="text-3xl md:text-4xl font-bold text-black italic leading-tight tracking-tight">
                "Delivering Notable Athletes - it's in our DNA. We help you book and meet all athletes - overcoming odds to create authentic & memorable experiences!"
              </p>
            </div>
            <div className="h-px w-full bg-zinc-200 mt-10" />
          </div>
        </div>
      </section>
    </div>
  );
}
