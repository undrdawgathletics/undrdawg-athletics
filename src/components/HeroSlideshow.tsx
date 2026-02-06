"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
    "/images/slideshow/392419D6-D028-4AB1-9E05-279BAA72BDC4OFF08509-Enhanced-NR (1).jpeg",
    "/images/slideshow/IMG_0186 (1) (1).jpeg",
    "/images/slideshow/IMG_0206.jpeg",
    "/images/slideshow/IMG_0318.jpeg",
    "/images/slideshow/IMG_0319.jpeg",
    "/images/slideshow/IMG_0320.jpeg",
    "/images/slideshow/IMG_0321.jpeg",
    "/images/slideshow/IMG_0322.jpeg",
    "/images/slideshow/IMG_0323.jpeg",
    "/images/slideshow/IMG_0324.jpeg",
    "/images/slideshow/IMG_4290 (1).jpeg",
];

export default function HeroSlideshow({ direction = "up" }: { direction?: "up" | "down" }) {
    // fast-paced vertical scrolling
    return (
        <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden opacity-30 select-none pointer-events-none grayscale hover:grayscale-0 transition-all duration-500">
            <div
                className={`w-full flex flex-col items-center gap-4 ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}
                style={{ animationDuration: '80s' }}
            >
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
