"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

const images = [
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

export default function HeroSlideshow({ direction = "up" }: { direction?: "up" | "down" }) {
    // Each instance gets its own randomized order
    const shuffledImages = useMemo(() => shuffleArray(images), []);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [shuffledImages.length]);

    return (
        <div className="relative w-full h-full overflow-hidden select-none pointer-events-none">
            {shuffledImages.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                >
                    <Image
                        src={src}
                        alt="Athlete"
                        fill
                        className="object-cover"
                        priority={index === currentIndex}
                    />
                </div>
            ))}
        </div>
    );
}
