"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const PRODUCTS = [
    {
        id: "prod_1",
        name: "Undrdawg Official Tee",
        price: 35.00,
        image: "/images/athletes/athlete-1.jpg", // Placeholder
        category: "Apparel"
    },
    {
        id: "prod_2",
        name: "Signed Official Puck",
        price: 85.00,
        image: "/images/athletes/athlete-2.jpg", // Placeholder
        category: "Memorabilia"
    }
];

export default function ShopPage() {
    const { addItem } = useCart();

    return (
        <div className="bg-white min-h-screen text-black pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase text-black mb-4">
                        SHOP <span className="text-primary">THE DROP</span>
                    </h1>
                    <p className="text-zinc-500 font-medium">Limited edition releases and exclusive memorabilia.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Jamie Drysdale Autographed Puck Card */}
                    <div className="bg-zinc-50 border border-black/5 rounded-[2.5rem] p-6 hover:shadow-lg transition-all flex flex-col items-center">
                        {/* Image Placeholder */}
                        <div className="relative w-full aspect-square bg-zinc-200 rounded-3xl mb-6 flex items-center justify-center overflow-hidden">
                            <ShoppingCart size={48} className="text-zinc-400 opacity-50 mb-2" />
                            <span className="absolute bottom-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">Image Here</span>
                        </div>

                        <div className="mb-6 w-full text-left">
                            <div className="inline-block px-3 py-1 bg-[#F74F07] text-white text-[10px] font-black uppercase tracking-widest rounded-lg mb-3 shadow-md">
                                Philadelphia Flyers
                            </div>
                            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-black mb-1 leading-none">
                                Jamie Drysdale<br />Autographed Puck
                            </h2>
                            {/* Assumed price layout – typical for these shops, though actual price is on eBay */}
                            <p className="text-zinc-500 font-bold mt-2">Check eBay for price</p>
                        </div>

                        <a
                            href="https://www.ebay.com/itm/147157282022?_skw=jamie+drysdale+autographed+puck&itmmeta=01KK88T2G1EGTR8TJ03RX5KF5J&hash=item224341ece6:g:efAAAeSwLQFpk4fX&itmprp=enc%3AAQALAAAA4GfYFPkwiKCW4ZNSs2u11xDNJ9y%2Fu%2BJUy8zjQndbOB3qbyj3lVrYIGZurPakke2A4Z5%2F%2BHltNO9CWdMPnF%2B%2Bko%2BEoqkjVRvw30iOysdu6KoL%2FoakOYxxfvrQFMMPkKqg8rDZy7sp3ZP%2FBoAToaRhAOjodSDm0ncortBLFxcXXTFmttTcmlluPGqAiNBQBHDTlKME8vIHyNqbqWuAFO%2Fz15qT7Ct2vBjr7rVb0H36Xjahaoy6BeuvxjZXGGfqOUN8Fj2zaMAF3fZcaRN3q%2B6kilxOo9weijpRO3Xqga81mhis%7Ctkp%3ABk9SR5qo6IiaZw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto w-full h-14 bg-black hover:bg-zinc-800 transition-colors text-white rounded-2xl flex items-center justify-center font-black uppercase tracking-widest gap-2 shadow-xl hover:-translate-y-1"
                        >
                            Buy Now on eBay
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
