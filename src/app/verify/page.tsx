"use client";

import { useState } from "react";
import { ShieldCheck, Search, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

type VerificationStatus = "idle" | "verifying" | "valid" | "invalid";

export default function VerifyPage() {
    const [serial, setSerial] = useState("");
    const [status, setStatus] = useState<VerificationStatus>("idle");

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        if (!serial) return;

        setStatus("verifying");

        // Simulate API delay
        setTimeout(() => {
            // Mock logic: Serials starting with "UD" are valid
            if (serial.toUpperCase().startsWith("UD")) {
                setStatus("valid");
            } else {
                setStatus("invalid");
            }
        }, 1500);
    };

    return (
        <div className="bg-black min-h-screen text-white pt-12 pb-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 border border-primary/20 text-primary mb-8 shadow-[0_0_50px_rgba(0,76,84,0.3)]">
                        <ShieldCheck size={40} />
                    </div>
                    <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-4">
                        VERIFY YOUR <span className="text-primary italic">GEAR.</span>
                    </h1>
                    <p className="text-zinc-500 max-w-xl mx-auto font-medium">
                        Authenticity is central to Everything we do. Enter the serial number
                        found on your certificate of authenticity or product tag.
                    </p>
                </div>

                <div className="bg-zinc-950 border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 blur-3xl -z-0" />

                    <form onSubmit={handleVerify} className="relative z-10">
                        <div className="space-y-4">
                            <label htmlFor="serial" className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-600 ml-1">
                                Enter Item Serial Number
                            </label>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <input
                                        id="serial"
                                        type="text"
                                        value={serial}
                                        onChange={(e) => setSerial(e.target.value)}
                                        placeholder="e.g. UD-2024-8892"
                                        className="w-full h-16 bg-zinc-900 border border-white/5 rounded-2xl px-6 font-mono text-lg tracking-wider focus:border-primary focus:outline-none transition-all placeholder:text-zinc-700"
                                    />
                                    {status === "verifying" && (
                                        <Loader2 className="absolute right-6 top-1/2 -translate-y-1/2 text-primary animate-spin" size={20} />
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "verifying"}
                                    className="h-16 px-10 bg-primary hover:bg-primary/90 disabled:opacity-50 text-white rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3"
                                >
                                    <Search size={20} />
                                    Verify
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Results Area */}
                    <div className="mt-12 min-h-[160px] flex items-center justify-center border-t border-white/5 pt-12">
                        {status === "idle" && (
                            <p className="text-zinc-700 text-sm italic font-medium">Waiting for serial number input...</p>
                        )}

                        {status === "valid" && (
                            <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="h-14 w-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4 border border-green-500/20">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Authenticity Verified</h3>
                                <p className="text-zinc-500 text-sm">This is a legitimate Undrdawg Athletics product.</p>
                                <div className="mt-4 flex gap-4">
                                    <span className="text-[10px] font-bold px-3 py-1 bg-zinc-900 rounded-full text-zinc-400 uppercase tracking-widest">UD-ORIGINAL</span>
                                    <span className="text-[10px] font-bold px-3 py-1 bg-zinc-900 rounded-full text-zinc-400 uppercase tracking-widest">PHILLY-MADE</span>
                                </div>
                            </div>
                        )}

                        {status === "invalid" && (
                            <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="h-14 w-14 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4 border border-red-500/20">
                                    <AlertTriangle size={32} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Unverified Serial</h3>
                                <p className="text-zinc-500 text-sm text-center max-w-xs">We could not find this serial number in our database. Please check and try again.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 text-xs font-bold text-primary uppercase underline tracking-widest"
                                >
                                    Clear and retry
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Info Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5">
                        <h4 className="font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                            <ShieldCheck size={18} className="text-primary" />
                            Blockchain Secured
                        </h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Every piece of memorabilia is logged on our private ledger at the point of origin, ensuring a tamper-proof chain of custody.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5">
                        <h4 className="font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                            <ShieldCheck size={18} className="text-primary" />
                            Athlete Witnessed
                        </h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Our representatives witness every signing session to ensure the validity of the signatures before assigning a serial tag.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
