"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();
  const router = useRouter();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Book an Athlete", href: "/book" },
    { name: "Shop", href: "/shop" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between gap-4">
          {/* Logo - Left Corner & Vertically Centered */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Undrdawg Athletics"
                width={90}
                height={90}
                className="invert brightness-200 object-contain max-h-24 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Search Bar - Fill Empty Space */}
          <div className="hidden md:flex flex-1 mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-zinc-900 border-2 border-white text-white text-sm rounded-full py-2 px-4 focus:outline-none focus:border-zinc-300 transition-colors placeholder:text-white"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const target = e.target as HTMLInputElement;
                    if (target.value.trim()) {
                      router.push(`/search?q=${encodeURIComponent(target.value)}`);
                    }
                  }
                }}
              />
            </div>
          </div>

          {/* Desktop Nav - Right Side */}
          <div className="hidden md:block flex-shrink-0">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-widest text-zinc-300 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/verify"
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-white border-2 border-white transition-all hover:bg-white hover:text-black"
              >
                <ShieldCheck size={16} />
                Verify Memorabilia
              </Link>
              <Link href="/checkout" className="relative text-zinc-300 hover:text-white transition-colors">
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-[10px] font-bold text-black">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <Link href="/checkout" className="relative text-zinc-300 hover:text-white transition-colors">
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-[10px] font-bold text-black">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-zinc-800 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/verify"
              className="block rounded-md px-3 py-2 text-base font-medium text-white border border-white hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Verify Memorabilia
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
