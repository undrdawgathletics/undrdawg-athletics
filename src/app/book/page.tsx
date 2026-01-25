"use client";

import { useState } from "react";
import { ArrowRight, Calendar, User, AlignLeft, Mail } from "lucide-react";
import { bookAthlete } from "../actions/book-athlete";

export default function BookPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        date: "",
        description: "",
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        const result = await bookAthlete(data);
        setLoading(false);

        if (result.success) {
            alert("Request received! We'll be in touch soon.");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                date: "",
                description: "",
            });
        } else {
            console.error(result.error);
            alert("Something went wrong. Please try again or contact us directly.");
        }
    };

    return (
        <div className="bg-white min-h-screen text-black pt-12 pb-24">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4 text-black">
                        BOOK AN <span className="text-primary italic">ATHLETE.</span>
                    </h1>
                    <p className="text-zinc-600 font-medium">
                        Tell us about your event and who you'd like to book. We'll handle the rest.
                    </p>
                </div>

                <div className="bg-zinc-50 border border-black/5 rounded-[2.5rem] p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                                    <User size={12} /> First Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full h-12 bg-white border border-black/5 rounded-xl px-4 text-sm focus:border-primary focus:outline-none transition-colors text-black"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                                    <User size={12} /> Last Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full h-12 bg-white border border-black/5 rounded-xl px-4 text-sm focus:border-primary focus:outline-none transition-colors text-black"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                                <Mail size={12} /> Email Address
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full h-12 bg-white border border-black/5 rounded-xl px-4 text-sm focus:border-primary focus:outline-none transition-colors text-black"
                                placeholder="name@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                                <Calendar size={12} /> Request Date
                            </label>
                            <input
                                type="date"
                                required
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="w-full h-12 bg-white border border-black/5 rounded-xl px-4 text-sm focus:border-primary focus:outline-none transition-colors text-black"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                                <AlignLeft size={12} /> Event Details & Player Request
                            </label>
                            <textarea
                                required
                                rows={5}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full bg-white border border-black/5 rounded-xl p-4 text-sm focus:border-primary focus:outline-none transition-colors text-black resize-none"
                                placeholder="Describe your event and tell us which athlete(s) you are interested in booking..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-14 bg-black text-white rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-xl text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Submit Request"} <ArrowRight size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
