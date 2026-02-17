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

                <div className="flex flex-col items-center justify-center py-20 bg-zinc-50 rounded-[3rem] border border-black/5">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-black text-white shadow-xl">
                        <ShoppingCart size={40} />
                    </div>
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-black mb-4">Coming Soon</h2>
                    <p className="text-zinc-500 font-medium max-w-md text-center px-4">
                        Our official shop is currently under construction. Check back soon for exclusive limited-edition merchandise and authentic memorabilia!
                    </p>
                </div>
            </div>
        </div>
    );
}
