import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-black/5 bg-black pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/logo.png"
                                alt="Undrdawg Athletics"
                                width={160}
                                height={60}
                                className="invert brightness-200"
                            />
                        </Link>
                        <p className="mt-4 max-w-xs text-zinc-500 text-sm leading-relaxed">
                            Delivering Notable Athletes - it's in our DNA. Born in Philadelphia,
                            fueled by grit, and dedicated to authentic athletic experiences.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a href="https://www.instagram.com/undrdawg.athletics/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-zinc-400 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><Link href="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
                            <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="/verify" className="hover:text-white transition-colors">Verify Gear</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">

                            <li><Link href="/book" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/shipping-returns" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-600">
                        © {new Date().getFullYear()} Undrdawg Athletics. All rights reserved.
                    </p>
                    <p className="text-xs text-zinc-600 italic">
                        Founded by the Underdogs of Philadelphia.
                    </p>
                </div>
            </div>
        </footer>
    );
}
