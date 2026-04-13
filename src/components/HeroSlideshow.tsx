"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface SlideshowImage {
    src: string;
    objectPosition?: string;
    objectFit?: "cover" | "contain";
    scale?: number;
    /** Which side this panel faces toward the center logo (controls gradient direction) */
    side?: "left" | "right";
}

interface HeroSlideshowProps {
    images: SlideshowImage[];
    indexOffset?: number;
    /** "left" fades right edge to white; "right" fades left edge to white */
    side?: "left" | "right";
}

export default function HeroSlideshow({ images, indexOffset = 0, side }: HeroSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(indexOffset % images.length);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                setPrevIndex(prev);
                return (prev + 1) % images.length;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    // Inner gradient fade (toward center logo)
    const innerGradient = side === "left"
        ? "linear-gradient(to right, transparent 60%, white 100%)"
        : side === "right"
        ? "linear-gradient(to left, transparent 60%, white 100%)"
        : undefined;

    // Top/bottom vignette
    const verticalVignette = "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.18) 100%)";

    return (
        <div className="relative w-full h-full overflow-hidden select-none pointer-events-none">
            {images.map((img, index) => {
                const isActive = index === currentIndex;
                return (
                    <div
                        key={`${img.src}-${index}`}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100" : "opacity-0"}`}
                    >
                        {/* Blurred ambient background — fills gaps for zoomed-out images */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${img.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: img.objectPosition || "center",
                                filter: "blur(10px) brightness(0.7) saturate(1.1)",
                                transform: "scale(1.2)",
                                transformOrigin: "center center",
                            }}
                        />

                        {/* Main image with Ken Burns slow zoom */}
                        <div
                            className="absolute inset-0"
                            style={{
                                animation: isActive ? "kenBurns 8s ease-in-out forwards" : "none",
                            }}
                        >
                            <Image
                                src={img.src}
                                alt="Athlete"
                                fill
                                className={img.objectFit === "contain" ? "object-contain" : "object-cover"}
                                style={{
                                    objectPosition: img.objectPosition || "center",
                                    transform: img.scale !== undefined ? `scale(${img.scale})` : undefined,
                                    transformOrigin: "center center",
                                }}
                                priority={index === currentIndex}
                            />
                        </div>

                        {/* Top/bottom vignette */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: verticalVignette }}
                        />
                    </div>
                );
            })}

            {/* Inner edge gradient — blends panel into white center area */}
            {innerGradient && (
                <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{ background: innerGradient }}
                />
            )}
        </div>
    );
}
