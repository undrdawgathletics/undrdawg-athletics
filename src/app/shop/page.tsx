"use client";

import { useState } from "react";
import { Search, Filter, ShoppingCart, Star, ShieldCheck, Zap } from "lucide-react";
import { useCart } from "@/context/CartContext";

const PRODUCTS = [
    {
        id: 1,
        name: "Founders Edition Jersey",
        price: 129.99,
        category: "Apparel",
        image: "/jersey.png", // Use a generic path or generate one
        badge: "Limited Drop",
        rating: 5,
    },
    {
        id: 2,
        name: "Authentic Team Hoodie",
        price: 84.99,
        category: "Apparel",
        image: "/hoodie.png",
        badge: "Bestseller",
        rating: 4.8,
    },
    {
        id: 3,
        name: "Elite Performance Tee",
        price: 44.99,
        category: "Apparel",
        image: "/tee.png",
        badge: "New Arrival",
        rating: 4.9,
    },
    {
        id: 4,
        name: "Undrdawg Snapback",
        price: 34.99,
        category: "Accessories",
        image: "/hat.png",
        badge: "Verified",
        rating: 4.7,
    },
    {
        id: 5,
        name: "Athlete Signature Series Ball",
        price: 59.99,
        category: "Equipment",
        image: "/ball.png",
        badge: "Autographed",
        rating: 5,
    },
    {
        id: 6,
        name: "Pro Training Shorts",
        price: 49.99,
        category: "Apparel",
        image: "/shorts.png",
        badge: "Verified",
        rating: 4.6,
    }
];

export default function ShopPage() {
    const { addItem } = useCart();
    const [searchQuery, setSearchQuery] = useState("");

    const handleAddToCart = (product: typeof PRODUCTS[0]) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            type: "product",
            quantity: 1,
            image: product.image
        });
    };

    return (
        <div className="bg-black min-h-screen text-white pt-12 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Shop Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-4">
                            SHOP THE <span className="text-primary italic">DROP.</span>
                        </h1>
                        <p className="text-zinc-500 font-medium">
                            Premium apparel and verified memorabilia. Every piece tells a story of
                            overcoming the odds. Limited quantities available.
                        </p>
                    </div>

                    <div className="flex w-full md:w-auto gap-4">
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-12 rounded-xl bg-zinc-900 border border-white/5 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white transition-colors">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            {/* Image Placeholder Container */}
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 mb-6">
                                {product.badge && (
                                    <span className="absolute top-4 left-4 z-10 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">
                                        {product.badge}
                                    </span>
                                )}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 transition-transform group-hover:scale-105 duration-500">
                                    <ShoppingCart className="text-zinc-700 opacity-20" size={80} />
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleAddToCart(product);
                                    }}
                                    className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-xl translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
                                >
                                    <ShoppingCart size={20} />
                                </button>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">
                                        {product.category}
                                    </p>
                                    <h3 className="text-lg font-bold text-white transition-colors group-hover:text-primary">
                                        {product.name}
                                    </h3>
                                </div>
                                <p className="text-lg font-black text-white">
                                    ${product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Collection Callout */}
                <div className="mt-24 rounded-[2.5rem] bg-gradient-to-r from-primary/10 to-transparent border border-primary/10 p-12 overflow-hidden relative">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">
                            THE FOUNDERS <br /><span className="text-primary not-italic">COLLECTION</span>
                        </h2>
                        <p className="text-zinc-400 max-w-md mb-8">
                            Celebrate our roots with a limited batch of gear representing Penn State and Drexel. 100% of proceeds support student-athlete development.
                        </p>
                        <button className="h-12 rounded-full bg-white px-8 text-sm font-black uppercase text-black hover:bg-primary hover:text-white transition-all">
                            View Collection
                        </button>
                    </div>

                    <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/20 blur-[100px] -z-0" />
                </div>
            </div>
        </div>
    );
}
