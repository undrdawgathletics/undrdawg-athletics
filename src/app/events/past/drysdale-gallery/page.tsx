"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";

const GALLERY_MEDIA = [
    "/images/gallery/drysdale/copy_3A950674-934A-4EA3-BB02-1614CD7222B5.mov",
    "/images/gallery/drysdale/IMG_0165.JPG",
    "/images/gallery/drysdale/unnamed.jpg",
    "/images/gallery/drysdale/unnamed-1.jpg",
    "/images/gallery/drysdale/JMF09269.jpg",
    "/images/gallery/drysdale/JMF09274.jpg",
    "/images/gallery/drysdale/JMF09275.jpg",
    "/images/gallery/drysdale/JMF09279.jpg",
    "/images/gallery/drysdale/JMF09289 (2).jpg",
    "/images/gallery/drysdale/JMF09295 (1).jpg",
    "/images/gallery/drysdale/JMF09299 (2).jpg",
    "/images/gallery/drysdale/JMF09323.jpg",
];

const isVideo = (src: string) => src.endsWith(".mov") || src.endsWith(".mp4");

export default function DrysdaleGalleryPage() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [current, setCurrent] = useState(0);

    const prev = useCallback(() => {
        setCurrent((c) => (c - 1 + GALLERY_MEDIA.length) % GALLERY_MEDIA.length);
    }, []);

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % GALLERY_MEDIA.length);
    }, []);

    const prevLightbox = useCallback(() => {
        setLightboxIndex((i) => i !== null ? (i - 1 + GALLERY_MEDIA.length) % GALLERY_MEDIA.length : null);
    }, []);

    const nextLightbox = useCallback(() => {
        setLightboxIndex((i) => i !== null ? (i + 1) % GALLERY_MEDIA.length : null);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prevLightbox();
            if (e.key === "ArrowRight") nextLightbox();
            if (e.key === "Escape") setLightboxIndex(null);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [lightboxIndex, prevLightbox, nextLightbox]);

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Auto-advance slideshow
    useEffect(() => {
        if (lightboxIndex !== null || isVideoPlaying) return;
        const t = setInterval(next, 3500);
        return () => clearInterval(t);
    }, [lightboxIndex, next, isVideoPlaying]);

    return (
        <div className="bg-black min-h-screen text-white pt-28 pb-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12">
                    <Link href="/events/past" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-8">
                        <ArrowLeft size={16} /> Back to Past Events
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl" style={{ backgroundColor: "#F74F07" }}>
                            Philadelphia Flyers
                        </span>
                        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Jan 16, 2026</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-2">
                        Jamie <span className="text-[#F74F07] italic">Drysdale</span>
                    </h1>
                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">Meet &amp; Greet · Event Gallery</p>
                </div>

                {/* Hero Slideshow */}
                <div className="relative w-full h-[70vh] rounded-[2rem] overflow-hidden mb-6 group bg-zinc-900 border border-zinc-800">
                    {GALLERY_MEDIA.map((src, i) => (
                        <div
                            key={src}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer flex items-center justify-center ${i === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
                            onClick={() => setLightboxIndex(i)}
                        >
                            {isVideo(src) ? (
                                <video
                                    src={src}
                                    autoPlay
                                    muted
                                    loop={false}
                                    playsInline
                                    className="w-full h-full object-contain"
                                    onPlay={() => setIsVideoPlaying(true)}
                                    onPause={() => setIsVideoPlaying(false)}
                                    onEnded={() => {
                                        setIsVideoPlaying(false);
                                        next();
                                    }}
                                />
                            ) : (
                                <Image src={src} alt={`Gallery photo ${i + 1}`} fill className="object-contain" />
                            )}
                        </div>
                    ))}

                    {/* Slide controls */}
                    <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all opacity-0 group-hover:opacity-100">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all opacity-0 group-hover:opacity-100">
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {GALLERY_MEDIA.map((_, i) => (
                            <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-[#F74F07]" : "w-1.5 bg-white/40"}`} />
                        ))}
                    </div>

                    {/* Click to expand hint */}
                    <div className="absolute top-4 right-4 z-20 bg-black/50 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                        Click to expand
                    </div>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                    {GALLERY_MEDIA.map((src, i) => (
                        <button
                            key={src}
                            onClick={() => { setCurrent(i); setLightboxIndex(i); }}
                            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all bg-zinc-900 ${i === current ? "border-[#F74F07]" : "border-transparent hover:border-white/30"}`}
                        >
                            {isVideo(src) ? (
                                <video src={src} className="w-full h-full object-cover opacity-80" />
                            ) : (
                                <Image src={src} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
                    <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" onClick={() => setLightboxIndex(null)}>
                        <X size={32} />
                    </button>
                    <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors" onClick={(e) => { e.stopPropagation(); prevLightbox(); }}>
                        <ChevronLeft size={48} />
                    </button>
                    <div className="relative w-[90vw] h-[85vh] flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                        {isVideo(GALLERY_MEDIA[lightboxIndex]) ? (
                            <video src={GALLERY_MEDIA[lightboxIndex]} controls autoPlay className="max-w-full max-h-full object-contain rounded-xl" />
                        ) : (
                            <div className="relative w-full h-full">
                                <Image src={GALLERY_MEDIA[lightboxIndex]} alt="Gallery photo" fill className="object-contain" />
                            </div>
                        )}
                    </div>
                    <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors" onClick={(e) => { e.stopPropagation(); nextLightbox(); }}>
                        <ChevronRight size={48} />
                    </button>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-bold uppercase tracking-widest">
                        {lightboxIndex + 1} / {GALLERY_MEDIA.length}
                    </div>
                </div>
            )}
        </div>
    );
}
