import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook } from "lucide-react";

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
                        {/* Social Icons moved up since text is gone */}
                        <div className="mt-6 flex space-x-4">
                            <a href="https://www.instagram.com/undrdawg.athletics/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://x.com/Undrdawg_Ath" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                >
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 2.395H4.295L17.607 20.65z" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@undrdawg.athletics" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61584864543399#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
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

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-600">
                        © {new Date().getFullYear()} Undrdawg Athletics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
