"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShoppingCart } from "lucide-react";

export default function JamieDrysdalePuckPage() {
    // True for 'white', False for 'orange'
    const [isWhiteSignature, setIsWhiteSignature] = useState(true);

    // Dynamic data based on selection
    const currentImage = isWhiteSignature
        ? "/images/shop/hpuck.webp"
        : "/images/shop/orangepuck.webp";

    const ebayLink = isWhiteSignature
        ? "https://www.ebay.com/itm/147157282022?_skw=jamie+drysdale+autographed+puck&itmmeta=01KK88T2G1EGTR8TJ03RX5KF5J&hash=item224341ece6:g:efAAAeSwLQFpk4fX&itmprp=enc%3AAQALAAAA4GfYFPkwiKCW4ZNSs2u11xDNJ9y%2Fu%2BJUy8zjQndbOB3qbyj3lVrYIGZurPakke2A4Z5%2F%2BHltNO9CWdMPnF%2B%2Bko%2BEoqkjVRvw30iOysdu6KoL%2FoakOYxxfvrQFMMPkKqg8rDZy7sp3ZP%2FBoAToaRhAOjodSDm0ncortBLFxcXXTFmttTcmlluPGqAiNBQBHDTlKME8vIHyNqbqWuAFO%2Fz15qT7Ct2vBjr7rVb0H36Xjahaoy6BeuvxjZXGGfqOUN8Fj2zaMAF3fZcaRN3q%2B6kilxOo9weijpRO3Xqga81mhis%7Ctkp%3ABk9SR5qo6IiaZw"
        : "https://www.ebay.com/itm/147157294272?itmmeta=01KK89GGZDT7H6GQASX38Y4F1X&hash=item2243421cc0:g:TUEAAeSwIoBpk4vG";

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

                    {/* Left Column: Product Image */}
                    <div className="bg-zinc-50 border border-black/5 rounded-[3rem] p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                        <Image
                            src={currentImage}
                            alt="Jamie Drysdale Autographed Puck"
                            fill
                            className="object-contain p-8 lg:p-12 transition-all duration-300"
                        />
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="flex flex-col pt-4 lg:pt-8">
                        <div className="inline-block px-4 py-1.5 bg-[#F74F07] text-white text-[10px] font-black uppercase tracking-widest rounded-lg mb-6 shadow-md w-max">
                            Philadelphia Flyers
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-black mb-4 leading-none">
                            Jamie Drysdale<br />Autographed Puck
                        </h1>

                        <div className="flex items-center gap-2 text-green-600 font-bold mb-8">
                            <CheckCircle2 size={20} />
                            <span className="uppercase tracking-widest text-sm text-black">Undrdawg Authenticated</span>
                        </div>

                        <p className="text-zinc-500 text-lg mb-10 max-w-lg leading-relaxed">
                            Own a piece of the action with this officially authenticated Jamie Drysdale autographed puck. Perfect for collectors and die-hard Flyers fans. Choose your preferred signature color below.
                        </p>

                        {/* Variants */}
                        <div className="mb-10">
                            <h3 className="font-black uppercase tracking-widest text-sm mb-4">Select Signature Color</h3>
                            <div className="flex flex-wrap gap-4">
                                {/* White Variant */}
                                <button
                                    onClick={() => setIsWhiteSignature(true)}
                                    className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all overflow-hidden ${isWhiteSignature
                                            ? "border-black bg-black text-white shadow-lg"
                                            : "border-black/10 bg-white text-black hover:border-black/30"
                                        }`}
                                >
                                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${isWhiteSignature ? "bg-white border-white" : "bg-white border-zinc-200"
                                        }`} />
                                    <span className="font-bold uppercase tracking-widest text-sm">White Signature</span>
                                    {isWhiteSignature && (
                                        <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                                    )}
                                </button>

                                {/* Orange Variant */}
                                <button
                                    onClick={() => setIsWhiteSignature(false)}
                                    className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all overflow-hidden ${!isWhiteSignature
                                            ? "border-black bg-black text-white shadow-lg"
                                            : "border-black/10 bg-white text-black hover:border-black/30"
                                        }`}
                                >
                                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${!isWhiteSignature ? "bg-[#F74F07] border-[#F74F07]" : "bg-[#F74F07] border-[#F74F07]/20"
                                        }`} />
                                    <span className="font-bold uppercase tracking-widest text-sm">Orange Signature</span>
                                    {!isWhiteSignature && (
                                        <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                                    )}
                                </button>
                            </div>
                        </div>

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
