"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroSlideshowProps {
    images: string[];
    indexOffset: number;
}

export default function HeroSlideshow({ images, indexOffset }: HeroSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(indexOffset % images.length);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-full overflow-hidden select-none pointer-events-none">
            {images.map((src, index) => (
                <div
                    key={`${src}-${index}`}
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
