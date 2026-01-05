"use client";

import { useState } from "react";
import { Check, CreditCard, Package, Truck, ArrowRight, ShieldCheck, ShoppingCart, Trash2, Plus, Minus, ChevronLeft, Ticket } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

type Step = "cart" | "shipping" | "payment" | "confirmation";

export default function CheckoutPage() {
    const { cart, removeItem, updateQuantity, cartTotal, itemCount, clearCart } = useCart();
    const [step, setStep] = useState<Step>("cart");

    const steps = [
        { id: "cart", name: "Review", icon: ShoppingCart },
        { id: "shipping", name: "Shipping", icon: Truck },
        { id: "payment", name: "Payment", icon: CreditCard },
        { id: "confirmation", name: "Status", icon: Check },
    ];

    const subtotal = cartTotal;
    const shipping = subtotal > 0 ? 9.99 : 0;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    return (
        <div className="bg-black min-h-screen text-white pt-12 pb-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Progress Bar */}
                <nav className="mb-16 max-w-3xl mx-auto">
                    <ol className="flex items-center justify-between w-full">
                        {steps.map((s, idx) => (
                            <li key={s.id} className={`flex items-center ${idx < steps.length - 1 ? "flex-1" : ""}`}>
                                <div className="flex flex-col items-center gap-2">
                                    <div
                                        className={`h-10 w-10 flex items-center justify-center rounded-full border-2 transition-colors ${(s.id === "cart" && step !== "cart") ||
                                            (s.id === "shipping" && (step === "payment" || step === "confirmation")) ||
                                            (s.id === "payment" && step === "confirmation") ||
                                            step === s.id
                                            ? "bg-primary border-primary text-white"
                                            : "border-zinc-800 text-zinc-500"
                                            }`}
                                    >
                                        {(s.id === "cart" && step !== "cart") ||
                                            (s.id === "shipping" && (step === "payment" || step === "confirmation")) ||
                                            (s.id === "payment" && step === "confirmation")
                                            ? <Check size={18} /> : <s.icon size={18} />}
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${step === s.id ? "text-white" : "text-zinc-600"}`}>
                                        {s.name}
                                    </span>
                                </div>
                                {idx < steps.length - 1 && (
                                    <div className={`flex-1 h-[2px] mx-4 ${(s.id === "cart" && step !== "cart") || (s.id === "shipping" && (step === "payment" || step === "confirmation")) ? "bg-primary" : "bg-zinc-800"}`} />
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="bg-zinc-950 border border-white/5 rounded-[2.5rem] p-8 md:p-12">
                            {step === "cart" && (
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-3xl font-black uppercase italic tracking-tight mb-2">Your Cart</h2>
                                            <p className="text-zinc-500 text-sm">Review your grit and glory before we ship.</p>
                                        </div>
                                        <span className="text-xs font-bold text-zinc-700 uppercase tracking-widest">
                                            {itemCount} Items
                                        </span>
                                    </div>

                                    {cart.length === 0 ? (
                                        <div className="text-center py-12">
                                            <p className="text-zinc-500 mb-6">Your cart is empty.</p>
                                            <Link href="/shop" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-primary/80">
                                                Return to Shop
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="space-y-6">
                                            {cart.map((item) => (
                                                <div key={`${item.id}-${item.metadata?.packageType || ''}`} className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5">
                                                    <div className="h-20 w-20 flex-shrink-0 rounded-xl bg-zinc-900 flex items-center justify-center overflow-hidden">
                                                        {item.type === "event" ? (
                                                            <div className="bg-primary/20 p-2 rounded-lg">
                                                                <Ticket size={32} className="text-primary" />
                                                            </div>
                                                        ) : (
                                                            <ShoppingCart size={32} className="text-zinc-700 opacity-30" />
                                                        )}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h4 className="font-bold text-lg">{item.name}</h4>
                                                                {item.metadata?.packageType && (
                                                                    <p className="text-xs text-primary font-bold uppercase tracking-wider mt-1">
                                                                        {item.metadata.packageType}
                                                                    </p>
                                                                )}
                                                            </div>
                                                            <span className="font-black text-white">${(item.price * item.quantity).toFixed(2)}</span>
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between">
                                                            <div className="flex items-center border border-white/10 rounded-lg h-10 overflow-hidden">
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.metadata?.packageType)}
                                                                    className="px-3 hover:bg-white/5"
                                                                >
                                                                    <Minus size={12} />
                                                                </button>
                                                                <span className="px-4 text-sm font-bold border-x border-white/10">{item.quantity}</span>
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.metadata?.packageType)}
                                                                    className="px-3 hover:bg-white/5"
                                                                >
                                                                    <Plus size={12} />
                                                                </button>
                                                            </div>
                                                            <button
                                                                onClick={() => removeItem(item.id, item.metadata?.packageType)}
                                                                className="text-zinc-600 hover:text-red-500 transition-colors"
                                                            >
                                                                <Trash2 size={18} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            <button
                                                onClick={() => setStep("shipping")}
                                                className="w-full h-14 bg-primary text-white rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/90 transition-all mt-8"
                                            >
                                                Next: Shipping Info
                                                <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {step === "shipping" && (
                                <div className="space-y-8">
                                    <button onClick={() => setStep("cart")} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                                        <ChevronLeft size={14} /> Back to Cart
                                    </button>
                                    <div>
                                        <h2 className="text-2xl font-black uppercase italic tracking-tight mb-2">Shipping Information</h2>
                                        <p className="text-zinc-500 text-sm">Where should we deliver your Undrdawg gear?</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">First Name</label>
                                            <input type="text" className="w-full h-12 bg-zinc-900 border border-white/5 rounded-xl px-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Last Name</label>
                                            <input type="text" className="w-full h-12 bg-zinc-900 border border-white/5 rounded-xl px-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Address</label>
                                        <input type="text" className="w-full h-12 bg-zinc-900 border border-white/5 rounded-xl px-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                                    </div>

                                    <button
                                        onClick={() => setStep("payment")}
                                        className="w-full h-14 bg-primary text-white rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/90 transition-all mt-8"
                                    >
                                        Proceed to Payment
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            )}

                            {step === "payment" && (
                                <div className="space-y-8">
                                    <button onClick={() => setStep("shipping")} className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                                        <ChevronLeft size={14} /> Back to Shipping
                                    </button>
                                    <div>
                                        <h2 className="text-2xl font-black uppercase italic tracking-tight mb-2">Secure Payment</h2>
                                        <p className="text-zinc-500 text-sm">Protected by Undrdawg vault encryption.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Card Number</label>
                                        <div className="relative">
                                            <input type="text" placeholder="**** **** **** ****" className="w-full h-12 bg-zinc-900 border border-white/5 rounded-xl px-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                                            <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-700" size={18} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Expiry</label>
                                            <input type="text" placeholder="MM/YY" className="w-full h-12 bg-zinc-900 border border-white/5 rounded-xl px-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">CVV</label>
                                            <input type="text" placeholder="***" className="w-full h-12 bg-zinc-900 border border-white/5 rounded-xl px-4 text-sm focus:border-primary focus:outline-none transition-colors" />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-primary/5 border border-primary/20 p-4 flex gap-3">
                                        <ShieldCheck className="text-primary flex-shrink-0" size={20} />
                                        <p className="text-[10px] text-zinc-400 leading-normal">
                                            Your transactions are guaranteed authentic. We verify every signature
                                            and every piece of fabric before it reaches your door.
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setStep("confirmation");
                                            clearCart();
                                        }}
                                        className="w-full h-14 bg-primary text-white rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/90 transition-all mt-8 shadow-[0_0_20px_rgba(0,76,84,0.3)]"
                                    >
                                        Place Order
                                    </button>
                                </div>
                            )}

                            {step === "confirmation" && (
                                <div className="text-center py-12 space-y-6">
                                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 border-2 border-primary text-primary mb-4 animate-bounce">
                                        <Package size={40} />
                                    </div>
                                    <h2 className="text-3xl font-black uppercase italic tracking-tight">Order Received!</h2>
                                    <p className="text-zinc-500 text-sm max-w-sm mx-auto">
                                        Thank you for supporting Undrdawg Athletics. Your gear is being
                                        prepared for inspection and shipping.
                                    </p>
                                    <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
                                        <button className="h-12 border border-white/10 rounded-full px-8 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                            View Receipt
                                        </button>
                                        <Link href="/" className="h-12 bg-primary flex items-center justify-center rounded-full px-8 text-xs font-black uppercase tracking-widest hover:bg-primary/80 transition-all">
                                            Continue Shopping
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="bg-zinc-950 border border-white/5 rounded-[2.5rem] p-8 md:p-10 sticky top-32">
                            <h3 className="text-xl font-black uppercase italic mb-8">Summary</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm text-zinc-400">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-zinc-400">
                                    <span>Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-zinc-400">
                                    <span>Estimated Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <div className="pt-4 border-t border-white/10 flex justify-between">
                                    <span className="font-black uppercase tracking-wider text-white">Total</span>
                                    <span className="font-black text-white text-xl">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest leading-relaxed text-center">
                                Free shipping on orders over $150. Authentic gear guaranteed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
