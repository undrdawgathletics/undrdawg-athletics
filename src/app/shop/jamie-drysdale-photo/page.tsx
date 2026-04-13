"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShoppingCart } from "lucide-react";

type Size = "8x10" | "16x20";
type Color = "Orange" | "Blue" | "Black";

const EBAY_LINKS: Record<Size, Partial<Record<Color, string>>> = {
    "8x10": {
        "Orange": "https://www.ebay.com/itm/147192704203?itmmeta=01KN0SS7CY3AVH2FJ5W48QWTKW&hash=item22455e6ccb:g:hDgAAeSwURJprgNz",
        "Blue": "https://www.ebay.com/itm/147192714133?itmmeta=01KN0T4WVJFXXM6HJBJ44KA5JB&hash=item22455e9395:g:jvwAAeSw~dxprgYZ",
        "Black": "https://www.ebay.com/itm/147192701758?itmmeta=01KN0T4WVJ5TJFFDZ1KR4ACSG6&hash=item22455e633e:g:fCUAAeSwBf9prgH~",
    },
    "16x20": {
        "Orange": "https://www.ebay.com/itm/147192685440?itmmeta=01KN0T4WVKS78REPGR9YRXFMKS&hash=item22455e2380:g:GhIAAeSw2jNprf4b",
        "Black": "https://www.ebay.com/itm/147192676829?itmmeta=01KN0T4WVKD8RYMB9JMJKTRMTX&hash=item22455e01dd:g:Nt8AAeSwmOFpk3~H",
    }
};

export default function JamieDrysdalePhotoPage() {
    const [size, setSize] = useState<Size>("8x10");
    const [color, setColor] = useState<Color>("Orange");

    const availableColors = Object.keys(EBAY_LINKS[size]) as Color[];
    
    const handleSizeChange = (newSize: Size) => {
        setSize(newSize);
        // If the current color isn't available in the new size, fallback to Orange
        if (!EBAY_LINKS[newSize][color]) {
            setColor("Orange");
        }
    };

    const currentEbayLink = EBAY_LINKS[size][color] || "";

    const imageMap: Record<Size, Partial<Record<Color, string>>> = {
        "8x10": {
            "Orange": "/images/shop/orange8x10.webp",
            "Blue": "/images/shop/blue8x10.webp",
            "Black": "/images/shop/black8x10.webp"
        },
        "16x20": {
            "Orange": "/images/shop/orange16x20.webp",
            "Black": "/images/shop/black16x20.webp"
        }
    };

    const currentImage = imageMap[size][color] || "/images/shop/jamie-photo.png";

    return (
        <div className="bg-white min-h-screen text-black pt-28 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Back button */}
                <div className="mb-8">
                    <Link href="/shop" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft size={16} /> Back to Shop
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Product Image Gallery */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-zinc-50 border border-black/5 rounded-[3rem] p-8 aspect-[4/5] lg:aspect-square flex items-center justify-center relative overflow-hidden shadow-sm">
                            <Image
                                src={currentImage}
                                alt="Jamie Drysdale Autographed Photo"
                                fill
                                className="object-contain p-6 lg:p-10 transition-all duration-300"
                            />
                        </div>
                        {/* More thumbnails could go here in the future once images are provided */}
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="flex flex-col pt-4 lg:pt-8">
                        <div className="inline-block px-4 py-1.5 bg-[#F74F07] text-white text-[10px] font-black uppercase tracking-widest rounded-lg mb-6 shadow-md w-max">
                            Philadelphia Flyers
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-black mb-4 leading-none">
                            Jamie Drysdale<br />Autographed Photo
                        </h1>

                        <div className="flex items-center gap-2 text-green-600 font-bold mb-8">
                            <CheckCircle2 size={20} />
                            <span className="uppercase tracking-widest text-sm text-black">Authenticated by Dynasty Sports & Framing</span>
                        </div>

                        <p className="text-zinc-500 text-lg mb-4 max-w-lg leading-relaxed">
                            Own a piece of the action with this officially authenticated photo. Hand signed by star Philadelphia Flyers defenseman Jamie Drysdale at our exclusive public signing event. Perfect for collectors and die-hard Flyers fans. Choose your preferred size and signature color below.
                        </p>
                        <p className="text-zinc-500 text-base mb-10 max-w-lg leading-relaxed">
                            This item was signed on January 16, 2026 at a public signing at Oxford Valley Mall.
                        </p>

                        {/* Variants */}
                        <div className="mb-10 flex flex-col gap-8">
                            {/* Size Selection */}
                            <div>
                                <h3 className="font-black uppercase tracking-widest text-sm mb-4 text-black">Select Size</h3>
                                <div className="flex flex-wrap gap-4">
                                    {(["8x10", "16x20"] as Size[]).map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => handleSizeChange(s)}
                                            className={`relative px-6 py-4 rounded-2xl border-2 transition-all overflow-hidden ${size === s
                                                ? "border-black bg-black text-white shadow-lg"
                                                : "border-black/10 bg-white text-black hover:border-black/30"
                                            }`}
                                        >
                                            <span className="font-bold uppercase tracking-widest text-sm">{s}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div>
                                <h3 className="font-black uppercase tracking-widest text-sm mb-4 text-black">Select Signature Color</h3>
                                <div className="flex flex-wrap gap-4">
                                    {availableColors.map((c) => {
                                        const colorMap = {
                                            Orange: "bg-[#F74F07]", // Flyers orange
                                            Blue: "bg-blue-600",
                                            Black: "bg-black"
                                        };
                                        const dotColor = colorMap[c];

                                        return (
                                            <button
                                                key={c}
                                                onClick={() => setColor(c)}
                                                className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all overflow-hidden ${color === c
                                                    ? "border-black bg-black text-white shadow-lg"
                                                    : "border-black/10 bg-white text-black hover:border-black/30"
                                                }`}
                                            >
                                                <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${dotColor} ${color === c ? 'border-white' : 'border-transparent'}`} />
                                                <span className="font-bold uppercase tracking-widest text-sm">{c} Signature</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <hr className="border-black/5 mb-10" />

                        {/* Action Buttons */}
                        <div className="flex items-center gap-6">
                            <a
                                href={currentEbayLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 h-16 bg-[#F74F07] hover:bg-[#d64506] transition-colors text-white rounded-2xl flex items-center justify-center font-black uppercase tracking-widest gap-3 shadow-xl hover:-translate-y-1 text-lg"
                            >
                                <ShoppingCart size={24} />
                                Buy Now on eBay
                            </a>
                        </div>
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-4 text-center">
                            You will be securely redirected to eBay to complete your purchase of the {size} {color} variant.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
