import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-black/5 bg-black pt-16 pb-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">About Undrdawg</h4>
                        <p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                            Born in Philadelphia, built on grit. We connect elite athletes with the fans and organizations who support them through authentic experiences and premium memorabilia.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
                            <li><Link href="/book" className="hover:text-white transition-colors">Book an Athlete</Link></li>
                            <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
                            <li><Link href="/verify" className="hover:text-white transition-colors">Verify Memorabilia</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/shipping-returns" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col items-center text-center">
                    <Link href="/" className="inline-block mb-6">
                        <Image
                            src="/logo.png"
                            alt="Undrdawg Athletics"
                            width={180}
                            height={70}
                            className="invert brightness-200"
                        />
                    </Link>
                    
                    <div className="flex space-x-6 mb-8">
                        <a href="https://www.instagram.com/undrdawg.athletics/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                            <Instagram size={22} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61584864543399#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                            <Facebook size={22} />
                        </a>
                        <a href="https://www.tiktok.com/@undrdawg.athletics" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                            <svg
                                viewBox="0 0 24 24"
                                width="22"
                                height="22"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </a>
                        <a href="https://x.com/Undrdawg_Ath" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                            <svg
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="currentColor"
                            >
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 2.395H4.295L17.607 20.65z" />
                            </svg>
                        </a>
                    </div>

                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600">
                        © {new Date().getFullYear()} Undrdawg Athletics. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
