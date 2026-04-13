"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShoppingCart } from "lucide-react";

export default function JamieDrysdaleGamePuckPage() {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const ebayLink = "https://www.ebay.com/itm/147157316149?itmmeta=01KND8PXKSZMH9KQFN2K3VV2DV&hash=item2243427235:g:kKwAAeSwV1lpk5DZ";

    const images = [
        "/images/shop/puck1.webp",
        "/images/shop/puck2.webp"
    ];

    const currentImage = images[activeImageIndex];

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
                        <div className="bg-zinc-50 border border-black/5 rounded-[3rem] p-8 aspect-square flex items-center justify-center relative overflow-hidden shadow-sm">
                            <Image
                                src={currentImage}
                                alt="Jamie Drysdale Autographed Signed Official Flyers Game Puck"
                                fill
                                className="object-contain p-6 lg:p-10 transition-all duration-300"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-4">
                            {images.map((img, idx) => (
                                <button
                                    key={img}
                                    onClick={() => setActiveImageIndex(idx)}
                                    className={`relative w-24 h-24 rounded-2xl border-2 overflow-hidden transition-all bg-zinc-50 ${activeImageIndex === idx ? "border-black shadow-md scale-105" : "border-black/5 opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-contain p-2" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="flex flex-col pt-4 lg:pt-8">
                        <div className="inline-block px-4 py-1.5 bg-[#F74F07] text-white text-[10px] font-black uppercase tracking-widest rounded-lg mb-6 shadow-md w-max">
                            Philadelphia Flyers
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-black mb-4 leading-none">
                            Jamie Drysdale<br />Autographed Game Puck
                        </h1>

                        <div className="flex items-center gap-2 text-green-600 font-bold mb-8">
                            <CheckCircle2 size={20} />
                            <span className="uppercase tracking-widest text-sm text-black">Authenticated by Undrdawg Athletics or Dynasty Sports & Framing</span>
                        </div>

                        <p className="text-zinc-500 text-lg mb-10 max-w-lg leading-relaxed">
                            Own a piece of the action with this officially authenticated hand-signed game puck. Autographed by star Philadelphia Flyers defenseman Jamie Drysdale. Perfect for collectors and die-hard Flyers fans.
                        </p>

                        <hr className="border-black/5 mb-10" />

                        {/* Action Buttons */}
                        <div className="flex items-center gap-6">
                            <a
                                href={ebayLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 h-16 bg-[#F74F07] hover:bg-[#d64506] transition-colors text-white rounded-2xl flex items-center justify-center font-black uppercase tracking-widest gap-3 shadow-xl hover:-translate-y-1 text-lg"
                            >
                                <ShoppingCart size={24} />
                                Buy Now on eBay
                            </a>
                        </div>
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-4 text-center">
                            You will be securely redirected to eBay to complete your purchase.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
