"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
    "/images/athletes/athlete-1.jpg",
    "/images/athletes/athlete-2.jpg",
    "/images/athletes/athlete-3.png",
    "/images/athletes/athlete-4.png",
];

export default function HeroSlideshow({ direction = "up" }: { direction?: "up" | "down" }) {
    // fast-paced vertical scrolling
    return (
        <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden opacity-30 select-none pointer-events-none grayscale hover:grayscale-0 transition-all duration-500">
            <div className={`w-full flex flex-col items-center gap-4 ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}>
                {/* Double the images for seamless loop */}
                {[...images, ...images, ...images].map((src, i) => (
                    <div key={i} className="relative w-full aspect-[3/4] flex-shrink-0 rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src={src}
                            alt="Athlete"
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
