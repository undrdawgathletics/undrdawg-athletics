"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface SlideshowImage {
    src: string;
    objectPosition?: string;
    objectFit?: "cover" | "contain";
}

interface HeroSlideshowProps {
    images: SlideshowImage[];
    indexOffset?: number;
}

export default function HeroSlideshow({ images, indexOffset = 0 }: HeroSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(indexOffset % images.length);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-full overflow-hidden select-none pointer-events-none">
            {images.map((img, index) => (
                <div
                    key={`${img.src}-${index}`}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-black ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                >
                    <Image
                        src={img.src}
                        alt="Athlete"
                        fill
                        className={img.objectFit === "contain" ? "object-contain" : "object-cover"}
                        style={{ objectPosition: img.objectPosition || "center" }}
                        priority={index === currentIndex}
                    />
                </div>
            ))}
        </div>
    );
}
