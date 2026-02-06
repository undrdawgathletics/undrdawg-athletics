"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate submission
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="bg-white min-h-screen text-black pt-32 pb-24 px-4">
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 text-black">
                        GET IN <span className="text-primary italic">TOUCH.</span>
                    </h1>
                    <p className="text-zinc-600 font-medium text-lg max-w-2xl mx-auto">
                        Have a question about an event, an order, or booking an athlete?
                        We're here to help.
                    </p>
                </div>

                <div className="bg-zinc-50 border border-black/5 rounded-[3rem] p-8 md:p-16 shadow-sm">
                    {submitted ? (
                        <div className="text-center py-20 animate-in fade-in zoom-in">
                            <div className="mx-auto h-20 w-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                                <Send size={40} />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-2">Message Sent!</h3>
                            <p className="text-zinc-500">We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                                    <input required type="text" className="w-full bg-white h-14 rounded-2xl border border-black/5 px-6 focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                                    <input required type="email" className="w-full bg-white h-14 rounded-2xl border border-black/5 px-6 focus:outline-none focus:border-primary transition-colors" placeholder="email@address.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Topic</label>
                                <select className="w-full bg-white h-14 rounded-2xl border border-black/5 px-6 focus:outline-none focus:border-primary transition-colors appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Event Details</option>
                                    <option>Order Support</option>
                                    <option>Booking Request</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                                <textarea required rows={5} className="w-full bg-white rounded-2xl border border-black/5 p-6 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help?" />
                            </div>

                            <button type="submit" className="w-full bg-black text-white h-16 rounded-2xl font-black uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-3">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
