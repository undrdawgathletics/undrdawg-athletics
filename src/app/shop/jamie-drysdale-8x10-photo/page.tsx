"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShoppingCart } from "lucide-react";

type Color = "Black" | "Orange" | "Gold";

const EBAY_LINKS: Record<Color, string> = {
    "Black": "https://www.ebay.com/itm/147192721841?itmmeta=01KND9TABXVDVNXE57W6W8HNC2&hash=item22455eb1b1:g:hvAAAeSwk1pprgcS",
    "Orange": "https://www.ebay.com/itm/147192723506?itmmeta=01KND9TABXHKBBZ5JHVNG8BZ2C&hash=item22455eb832:g:R-4AAeSw4JZprged",
    "Gold": "https://www.ebay.com/itm/147192720433?itmmeta=01KND9TABXTYT7B1EQZP1D6SS1&hash=item22455eac31:g:jrsAAeSwM7Jprga0"
};

const IMAGE_MAP: Record<Color, string> = {
    "Black": "/images/shop/8x10black.webp",
    "Orange": "/images/shop/8x10orange.webp",
    "Gold": "/images/shop/8x10gold.webp"
};

export default function JamieDrysdaleNew8x10PhotoPage() {
    const [color, setColor] = useState<Color>("Black");

    const availableColors: Color[] = ["Black", "Orange", "Gold"];
    
    const currentEbayLink = EBAY_LINKS[color] || "";
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
                                alt={`Jamie Drysdale Autographed 8x10 Photo - ${color}`}
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
                            Jamie Drysdale<br />Autographed 8x10 Photo
                        </h1>

                        <div className="flex items-center gap-2 text-green-600 font-bold mb-8">
                            <CheckCircle2 size={20} />
                            <span className="uppercase tracking-widest text-sm text-black">Authenticated by Dynasty Sports & Framing</span>
                        </div>

                        <p className="text-zinc-500 text-lg mb-10 max-w-lg leading-relaxed">
                            Own a piece of the action with this officially authenticated 8x10 photo. Hand signed by star Philadelphia Flyers defenseman Jamie Drysdale. Perfect for collectors and die-hard Flyers fans. Choose your preferred signature color below.
                        </p>

                        {/* Variants */}
                        <div className="mb-10 flex flex-col gap-8">
                            {/* Color Selection */}
                            <div>
                                <h3 className="font-black uppercase tracking-widest text-sm mb-4 text-black">Select Signature Color</h3>
                                <div className="flex flex-wrap gap-4">
                                    {availableColors.map((c) => {
                                        const colorMap = {
                                            Black: "bg-black",
                                            Orange: "bg-[#F74F07]", // Flyers orange
                                            Gold: "bg-[#D4AF37]" // Metallic gold
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
