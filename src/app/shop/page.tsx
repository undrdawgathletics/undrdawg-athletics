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
                        SHOP <span className="text-primary">THE DROP.</span>
                    </h1>
                    <p className="text-zinc-500 font-medium">Limited edition releases and exclusive memorabilia.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="group relative bg-zinc-50 rounded-[2.5rem] border border-black/5 overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="relative aspect-square w-full bg-white">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-black/90 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    {product.category}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-black uppercase italic tracking-tight text-black mb-1">{product.name}</h3>
                                        <p className="text-lg font-bold text-zinc-500">${product.price.toFixed(2)}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => addItem({
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        image: product.image,
                                        quantity: 1,
                                        type: "product"
                                    })}
                                    className="w-full h-14 bg-white border border-black/10 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
                                >
                                    <ShoppingCart size={16} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
