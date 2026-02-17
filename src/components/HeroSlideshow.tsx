"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
    "/images/slideshow/IMG_6507.jpeg",
    "/images/slideshow/IMG_0321.jpeg",
];

export default function HeroSlideshow({ direction = "up" }: { direction?: "up" | "down" }) {
    // Start with different images based on direction so they aren't identical
    const [currentIndex, setCurrentIndex] = useState(direction === "up" ? 0 : 1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2500); // Change every 2.5 seconds (faster)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden select-none pointer-events-none">
            {images.map((src, index) => (
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
