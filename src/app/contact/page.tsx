"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        topic: "General Inquiry",
        message: "",
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzmPxAYtxze4GrotOiq7akyk5naZJ5Si93WpXZV3qYanA08RsyB_UGN_VffyMVQQxpg/exec";

        try {
            const payload = {
                ...formData,
                isContactForm: true // Flag to tell the Google Apps Script to route to the second tab
            };

            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Request timed out')), 5000)
            );

            await Promise.race([
                fetch(WEB_APP_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify(payload)
                }),
                timeoutPromise
            ]);

            setStatus('success');
        } catch (error) {
            console.error("Error submitting contact form:", error);
            setStatus('error');
        }
    };

    return (
        <div className="bg-white min-h-screen text-black pt-24 pb-24 px-4">
            <div className="mx-auto max-w-4xl">
                <section className="relative pb-12 overflow-hidden border-b border-black/5 mb-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4 text-black">
                            GET IN <span className="text-black italic">TOUCH</span>
                        </h1>
                        <p className="text-zinc-600 font-medium text-lg max-w-2xl mx-auto">
                            Have a question about an event, an order, or booking an athlete?
                            We're here to help.
                        </p>
                    </div>
                </section>

                <div className="bg-zinc-50 border border-black/5 rounded-[3rem] p-8 md:p-16 shadow-sm">
                    {status === 'success' ? (
                        <div className="text-center py-20 animate-in fade-in zoom-in">
                            <div className="mx-auto h-20 w-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                                <Send size={40} />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-2">Message Sent!</h3>
                            <p className="text-zinc-500">We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status === 'error' && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100 text-center">
                                    Something went wrong. Please try again or email us directly.
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                                    <input 
                                        required 
                                        type="text" 
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full bg-white h-14 rounded-2xl border border-black/5 px-6 focus:outline-none focus:border-black transition-colors" 
                                        placeholder="Your Name" 
                                        disabled={status === 'loading'}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                                    <input 
                                        required 
                                        type="email" 
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full bg-white h-14 rounded-2xl border border-black/5 px-6 focus:outline-none focus:border-black transition-colors" 
                                        placeholder="email@address.com" 
                                        disabled={status === 'loading'}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Topic</label>
                                <select 
                                    className="w-full bg-white h-14 rounded-2xl border border-black/5 px-6 focus:outline-none focus:border-black transition-colors appearance-none"
                                    value={formData.topic}
                                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                                    disabled={status === 'loading'}
                                >
                                    <option>General Inquiry</option>
                                    <option>Event Details</option>
                                    <option>Order Support</option>
                                    <option>Booking Request</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                                <textarea 
                                    required 
                                    rows={5} 
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full bg-white rounded-2xl border border-black/5 p-6 focus:outline-none focus:border-black transition-colors resize-none" 
                                    placeholder="How can we help?" 
                                    disabled={status === 'loading'}
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={status === 'loading'}
                                className="w-full bg-black text-white h-16 rounded-2xl font-black uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'} 
                                {status !== 'loading' && <Send size={18} />}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
