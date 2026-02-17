"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
