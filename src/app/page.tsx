"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Calendar, Handshake } from "lucide-react";
import HeroSlideshow, { SlideshowImage } from "@/components/HeroSlideshow";

const LEFT_IMAGES: SlideshowImage[] = [
  { src: "/images/slideshow/IMG_6507.jpeg" },
  { src: "/images/slideshow/392419D6-D028-4AB1-9E05-279BAA72BDC4OFF08509-Enhanced-NR (1).jpeg" },
  { src: "/images/slideshow/IMG_0206.jpeg", objectPosition: "center 30%" },
  { src: "/images/slideshow/IMG_0319.jpeg" },
  { src: "/images/slideshow/IMG_0321 copy.jpeg" },
  { src: "/images/slideshow/IMG_0323.jpeg" },
  { src: "/images/slideshow/IMG_4290 (1).jpeg" },
];

const RIGHT_IMAGES: SlideshowImage[] = [
  { src: "/images/slideshow/IMG_0321.jpeg" },
  { src: "/images/slideshow/IMG_0186 (1) (1).jpeg", objectPosition: "center 25%" },
  { src: "/images/slideshow/IMG_0318.jpeg" },
  { src: "/images/slideshow/IMG_0320.jpeg" },
  { src: "/images/slideshow/IMG_0322.jpeg" },
  { src: "/images/slideshow/IMG_0324.jpeg" },
  { src: "/images/slideshow/JMF09275.jpg", objectPosition: "center bottom" },
];

export default function Home() {

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Row - flush under navbar */}
      <section className="relative w-full -mt-20 pt-24 overflow-hidden">
        <div className="flex w-full items-center">
          {/* Left Slideshow */}
          <div className="hidden lg:block w-[30%] relative overflow-hidden h-[400px]">
            <HeroSlideshow images={LEFT_IMAGES} />
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
            <HeroSlideshow images={RIGHT_IMAGES} />
          </div>
        </div>
      </section>

      {/* Main Content Area - Below the Hero section to fill the white space */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* 4-Column Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4 sm:px-8 lg:px-12 mb-16">
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
              <p className="text-sm text-zinc-600">100% Verified Authentic Memorabilia</p>
            </div>

            {/* Roster */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100 transition-colors hover:bg-zinc-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-black uppercase tracking-wider mb-2">Elite Roster</h3>
              <p className="text-sm text-zinc-600">Top Talent Connection</p>
            </div>

            {/* Partnerships */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100 transition-colors hover:bg-zinc-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                <Handshake size={24} />
              </div>
              <h3 className="text-xl font-bold text-black uppercase tracking-wider mb-2">Partnerships</h3>
              <p className="text-sm text-zinc-600">Elevate Your Event</p>
            </div>
          </div>

          {/* About Text Section */}
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-lg text-zinc-700 leading-relaxed space-y-6 text-center md:text-left">
            <p>
              At Undrdawg Athletics, we understand that an athlete's presence can transform an ordinary event into a landmark occasion. Our firm is built on the foundation of professional excellence, providing seamless coordination between elite talent and the organizations or fans who support them.
            </p>
            <p>
              Our fan-centric services are designed to bring you closer to the action than ever before. Through high-quality signing events and structured meet-and-greets, we facilitate genuine interactions with sports icons. Each event is meticulously planned to ensure that every photograph and autograph represents a high-standard experience for both the athlete and the attendee.
            </p>
            <p>
              For our business and event partners, we offer comprehensive booking and appearance services. We leverage our network to help you secure the right athlete for your specific needs, focusing on building brand equity and enhancing guest engagement. From keynote speaking to brand ambassadorships, Undrdawg Athletics is your partner in creating high-impact professional moments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
