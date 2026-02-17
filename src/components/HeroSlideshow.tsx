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
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);

            // Wait for fade out, then swap
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setIsFading(false);
            }, 500); // 500ms fade duration matches CSS transition

        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute top-0 bottom-0 w-full h-full overflow-hidden select-none pointer-events-none">
            {/* Current Image */}
            <div
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
            >
                <div className="relative w-full h-full">
                    <Image
                        src={images[currentIndex]}
                        alt="Athlete"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Next Image (Background) - ensures no white flash if we wanted cross-fade, 
                but for "flash in and out" we might want to fade to background or fade between. 
                The user said "flash in and out".
                A simple fade out then in (to white/background) might be what they mean, 
                or a cross-fade.
                "Flash in and out" usually implies checking visibility. 
                Let's do a cross-fade style or a pulse. 
                
                Actually, "flash in and out" with "one at a time" might mean:
                Image A shows -> Fades to nothing? -> Image B shows?
                
                Or just a smooth transition. "Still on each side... one at a time"
                
                Let's try a cross-fade where we verify the next image is behind it? 
                Or if they want strict "one at a time", maybe fade out, wait, fade in next.
                
                Given "flash in and out", and "one at a time", I will implement:
                Show Image A.
                Fade out Image A (revealing background or next image?).
                
                If I put the next image *behind* the current one, and fade out the current one, 
                that creates a cross-fade.
                
                If I fade out to white/transparent, then switch src, then fade in, that's "flash in and out".
                
                Let's stick to a smooth cross-fade for now as it's cleaner, but strictly speaking 
                "flash" might mean disjointed. I'll make it a smooth cross-fade which is generally preferred.
                
                Actually, let's implement the cross-fade by stacking them.
            */}

            {/* 
                Simpler approach for updating state:
                Just render the current image and control its opacity? No, we need two to cross fade.
                
                Let's try a simple approach: 
                Render all images, but only show the active one?
                Or just one image tag that changes src?
                
                If I change src, it might flicker.
                
                Let's position both images absolutely and toggle their opacity.
             */}

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
