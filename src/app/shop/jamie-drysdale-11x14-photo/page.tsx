"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShoppingCart } from "lucide-react";

type Color = "Orange" | "Black";

const EBAY_LINKS: Record<Color, string> = {
    "Orange": "https://www.ebay.com/itm/147192691053?itmmeta=01KN0VBWEYYH0BMG585KSQC5QR&hash=item22455e396d:g:bykAAeSwscxprgE9",
    "Black": "https://www.ebay.com/itm/147192689176?itmmeta=01KN0VBWEY8GHR53A682K3WM32&hash=item22455e3218:g:ZUwAAeSwtj1prf-j"
};

const IMAGE_MAP: Record<Color, string> = {
    "Orange": "/images/shop/11x14orange.webp",
    "Black": "/images/shop/11x14black.webp"
};

export default function JamieDrysdale11x14PhotoPage() {
    const [color, setColor] = useState<Color>("Orange");

    const currentEbayLink = EBAY_LINKS[color];
    const currentImage = IMAGE_MAP[color];

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
                                alt="Jamie Drysdale Autographed 11x14 Photo"
                                fill
                                className="object-contain p-6 lg:p-10 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="flex flex-col pt-4 lg:pt-8">
                        <div className="inline-block px-4 py-1.5 bg-[#F74F07] text-white text-[10px] font-black uppercase tracking-widest rounded-lg mb-6 shadow-md w-max">
                            Philadelphia Flyers
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-black mb-4 leading-none">
                            Jamie Drysdale<br />Autographed 11x14 Photo
                        </h1>

                        <div className="flex items-center gap-2 text-green-600 font-bold mb-8">
                            <CheckCircle2 size={20} />
                            <span className="uppercase tracking-widest text-sm text-black">Authenticated</span>
                        </div>

                        <p className="text-zinc-500 text-lg mb-10 max-w-lg leading-relaxed">
                            Own a distinct piece of the action with this officially authenticated 11x14 photo. Hand signed by star Philadelphia Flyers defenseman Jamie Drysdale at our exclusive public signing event. Choose your preferred signature color below.
                        </p>

                        {/* Variants */}
                        <div className="mb-10 flex flex-col gap-8">
                            {/* Color Selection */}
                            <div>
                                <h3 className="font-black uppercase tracking-widest text-sm mb-4 text-black">Select Signature Color</h3>
                                <div className="flex flex-wrap gap-4">
                                    {(Object.keys(EBAY_LINKS) as Color[]).map((c) => {
                                        const colorMap = {
                                            Orange: "bg-[#F74F07]",
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
                            You will be securely redirected to eBay to complete your purchase of the {color} variant.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
