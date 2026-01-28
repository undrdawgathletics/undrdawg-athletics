"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, User, AlignLeft, Mail, Mic, Store, Handshake, Flag, Share2, GraduationCap, Target, Truck, Heart, Quote, CheckCircle } from "lucide-react";

export default function BookAthletePage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        date: "",
        description: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzmPxAYtxze4GrotOiq7akyk5naZJ5Si93WpXZV3qYanA08RsyB_UGN_VffyMVQQxpg/exec";

        try {
            console.log("Submitting form to Apps Script...");

            // Create a timeout promise to prevent hanging
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Request timed out')), 5000)
            );

            await Promise.race([
                fetch(WEB_APP_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Important for Google Apps Script
                    // Content-Type header removed to avoid preflight issues in no-cors mode
                    body: JSON.stringify(formData)
                }),
                timeoutPromise
            ]);

            setStatus('success');
            // Form data remains populated for the "Thank you, {firstName}" message
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const activities = [
        {
            icon: <Mic className="text-primary" size={24} />,
            title: "Speaking Engagements",
            description: "Bring a powerful message of perseverance and leadership to your corporate keynote, school assembly, or gala."
        },
        {
            icon: <Store className="text-primary" size={24} />,
            title: "Grand Openings & Product Launches",
            description: "Generate immediate buzz and \"can't-miss\" excitement for your new location or brand debut."
        },
        {
            icon: <Handshake className="text-primary" size={24} />,
            title: "Sponsorship & Brand Partnerships",
            description: "Humanize your brand through authentic athlete endorsements and long-term partnership activations."
        },
        {
            icon: <Flag className="text-primary" size={24} />,
            title: "Golf Outings & Charity Events",
            description: "Add a competitive edge and \"wow\" factor to your next fundraiser or corporate retreat."
        },
        {
            icon: <Share2 className="text-primary" size={24} />,
            title: "Digital & Social Media Campaigns",
            description: "Reach a passionate sports audience through native content and influencer-style engagement."
        },
        {
            icon: <GraduationCap className="text-primary" size={24} />,
            title: "Youth Clinics & Camps",
            description: "Give the next generation of athletes the chance to learn directly from the pros."
        }
    ];

    const whyWorkWithUs = [
        {
            icon: <Target className="text-white" size={24} />,
            title: "Strategic Matching",
            description: "We align athlete personalities with your brand values to ensure the partnership feels authentic."
        },
        {
            icon: <Truck className="text-white" size={24} />,
            title: "Full-Service Logistics",
            description: "From initial outreach to event-day management, we handle the details so you can focus on your guests."
        },
        {
            icon: <Heart className="text-white" size={24} />,
            title: "Real Connection",
            description: "We focus on creating authentic moments that resonate, leaving a lasting legacy."
        }
    ];

    return (
        <div className="bg-white min-h-screen text-black pt-20 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Hero Section - Stacked & Centered */}
                <div className="mb-12 text-center max-w-7xl mx-auto space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-9xl font-[900] italic tracking-tighter uppercase text-black leading-none whitespace-nowrap">
                            BOOK AN <span className="text-primary italic">ATHLETE</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-500 font-bold uppercase tracking-[0.2em]">
                            Elevate Your Event with Undrdawg Athletics
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto relative group">
                        <div className="p-4 md:p-6 relative">
                            <p className="text-zinc-600 text-lg leading-relaxed italic font-semibold tracking-tight relative z-10">
                                "Whether you are looking to drive brand loyalty, inspire a team, or draw a crowd, our roster of professional talent is ready to deliver."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Introduction & Image Gallery */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black uppercase italic tracking-tight">The Undrdawg Spirit</h2>
                        <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                            <p>
                                At Undrdawg Athletics, we believe every great success story begins with grit and a "never count us out" attitude. We specialize in connecting businesses, brands, and organizations with professional athletes who embody this spirit.
                            </p>
                            <p>
                                By leveraging our deep industry relationships and expertise in sports marketing, we help you create high-impact experiences that resonate with your audience.
                            </p>
                            <div className="pt-4">
                                <a href="#inquiry-form" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:gap-4 transition-all">
                                    Start an Inquiry <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            {/* Top Left: Was Top Right (Athlete 3) */}
                            <div className="relative h-72 w-full overflow-hidden rounded-[2.5rem] border border-black/5 shadow-xl">
                                <Image src="/images/athletes/athlete-3.png" alt="Event appearance" fill className="object-cover object-top hover:scale-105 transition-transform duration-500" />
                            </div>
                            {/* Bottom Left: Was Top Left (Athlete 1) */}
                            <div className="relative h-56 w-full overflow-hidden rounded-[2.5rem] border border-black/5 shadow-xl">
                                <Image src="/images/athletes/athlete-1.jpg" alt="In-game performance" fill className="object-cover object-[center_30%] hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                            {/* Top Right: Was Bottom Right (Athlete 4) */}
                            <div className="relative h-56 w-full overflow-hidden rounded-[2.5rem] border border-black/5 shadow-xl">
                                <Image src="/images/athletes/athlete-4.png" alt="Community impact" fill className="object-cover object-top hover:scale-105 transition-transform duration-500" />
                            </div>
                            {/* Bottom Right: Was Bottom Left (Athlete 2) - Zoomed */}
                            <div className="relative h-72 w-full overflow-hidden rounded-[2.5rem] border border-black/5 shadow-xl">
                                <Image src="/images/athletes/athlete-2.jpg" alt="Fan engagement" fill className="object-cover object-top scale-125 hover:scale-125 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* What can you book for */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black uppercase italic tracking-tight mb-4">What Can You Book an Athlete For?</h2>
                        <p className="text-zinc-500 max-w-2xl mx-auto">We work with you to find the perfect match for your specific goals.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity, index) => (
                            <div key={index} className="bg-zinc-50 border border-black/5 p-8 rounded-3xl hover:border-primary/20 transition-colors group">
                                <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center border border-black/5 shadow-sm group-hover:scale-110 transition-transform">
                                    {activity.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{activity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why work with us */}
                <div className="mb-32 py-24 bg-black rounded-[4rem] text-white px-8 md:px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight mb-4">Why Work with Undrdawg?</h2>
                        <p className="text-white">We don't just "find a name"; we find the right fit.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {whyWorkWithUs.map((item, index) => (
                            <div key={index} className="space-y-6">
                                <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                                <p className="text-white/80 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form Section */}
                <div id="inquiry-form" className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black uppercase italic tracking-tight mb-4">Ready to get started?</h2>
                        <p className="text-zinc-600">
                            Fill out our inquiry form below. Tell us about your event, and a member of the Undrdawg Athletics team will reach out to discuss how we can make your vision a reality.
                        </p>
                    </div>

                    <div className="bg-zinc-50 border border-black/5 rounded-[2.5rem] p-8 md:p-12">
                        {status === 'success' ? (
                            <div className="text-center space-y-4 py-12">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-black italic uppercase">Request Received!</h3>
                                <p className="text-zinc-600 max-w-md mx-auto">
                                    Thank you, {formData.firstName}. We have received your inquiry and will be in touch shortly.
                                </p>
                                <button
                                    onClick={() => {
                                        setStatus('idle');
                                        setFormData({ firstName: "", lastName: "", email: "", date: "", description: "" });
                                    }}
                                    className="pt-4 text-primary text-sm font-bold uppercase tracking-widest hover:underline"
                                >
                                    Send Another Request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {status === 'error' && (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center text-sm font-medium">
                                        Something went wrong. Please try again later.
                                    </div>
                                )}
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
