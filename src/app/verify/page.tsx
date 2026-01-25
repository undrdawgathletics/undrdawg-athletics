"use client";

import { useState } from "react";
import { ShieldCheck, Search, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { verifySerialNumber } from "../actions/verify";

type VerificationResult = {
    serial: string;
    athlete: string;
    item: string;
    hologram: string;
    location: string;
    status: string;
    date: string;
} | null;

type VerificationStatus = "idle" | "verifying" | "valid" | "invalid";

export default function VerifyPage() {
    const [serial, setSerial] = useState("");
    const [status, setStatus] = useState<VerificationStatus>("idle");
    const [result, setResult] = useState<VerificationResult>(null);
    const [errorMsg, setErrorMsg] = useState("");

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!serial) return;

        setStatus("verifying");
        setErrorMsg("");

        try {
            const res = await verifySerialNumber(serial);

            if (res.success && res.data) {
                setResult(res.data);
                setStatus("valid");
            } else {
                setStatus("invalid");
                setErrorMsg(res.error || "Not Found");
            }
        } catch (err) {
            console.error(err);
            setStatus("invalid");
            setErrorMsg("Connection Error");
        }
    };

    return (
        <div className="bg-white min-h-screen text-black pt-12 pb-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/5 border border-primary/10 text-primary mb-8 shadow-sm">
                        <ShieldCheck size={40} />
                    </div>
                    <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-4 text-black">
                        VERIFY <span className="text-primary italic">MEMORABILIA.</span>
                    </h1>
                    <p className="text-zinc-600 max-w-xl mx-auto font-medium">
                        Undrdawg Athletics provides witness based authentication. Our representatives are present at all events and signings.
                    </p>
                </div>

                <div className="bg-zinc-50 border border-black/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 blur-3xl -z-10" />

                    <form onSubmit={handleVerify} className="relative z-10">
                        <div className="space-y-4">
                            <label htmlFor="serial" className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">
                                Enter Item Serial Number
                            </label>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <input
                                        id="serial"
                                        type="text"
                                        value={serial}
                                        onChange={(e) => setSerial(e.target.value)}
                                        placeholder="e.g. 67"
                                        className="w-full h-16 bg-white border border-black/5 rounded-2xl px-6 font-mono text-lg tracking-wider focus:border-primary focus:outline-none transition-all placeholder:text-zinc-300 text-black shadow-sm"
                                    />
                                    {status === "verifying" && (
                                        <Loader2 className="absolute right-6 top-1/2 -translate-y-1/2 text-primary animate-spin" size={20} />
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "verifying"}
                                    className="h-16 px-10 bg-black hover:bg-zinc-800 disabled:opacity-50 text-white rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3"
                                >
                                    <Search size={20} />
                                    Verify
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Results Area */}
                    <div className="mt-12 min-h-[200px] flex items-center justify-center border-t border-black/5 pt-12">
                        {status === "idle" && (
                            <p className="text-zinc-400 text-sm italic font-medium">Waiting for serial number input...</p>
                        )}

                        {status === "valid" && result && (
                            <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                                <div className="h-14 w-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 mb-4 border border-green-500/20">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-1">Authenticity Verified</h3>
                                <p className="text-primary text-sm font-black uppercase tracking-widest mb-4">Hologram # {result.hologram}</p>

                                <div className="grid grid-cols-2 gap-4 w-full max-w-lg mt-4">
                                    <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm text-left">
                                        <p className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">Signed by</p>
                                        <p className="text-sm font-black text-black">{result.athlete}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm text-left">
                                        <p className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">Item Type</p>
                                        <p className="text-sm font-black text-black">{result.item}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm text-left">
                                        <p className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">Date Signed</p>
                                        <p className="text-sm font-black text-black">{result.date}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm text-left">
                                        <p className="text-[10px] text-zinc-400 uppercase font-black tracking-widest mb-1">Location Signed</p>
                                        <p className="text-sm font-black text-black">{result.location}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {status === "invalid" && (
                            <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="h-14 w-14 rounded-full bg-red-500/10 flex items-center justify-center text-red-600 mb-4 border border-red-500/20">
                                    <AlertTriangle size={32} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">
                                    {errorMsg === "Configuration Error" ? "System Offline" : "Unverified Serial"}
                                </h3>
                                <p className="text-zinc-600 text-sm text-center max-w-xs">
                                    {errorMsg === "Configuration Error"
                                        ? "Supabase connection is not yet configured. Please add your credentials."
                                        : "We could not find this serial number in our database. Please check and try again."}
                                </p>
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
                    <div className="p-8 rounded-3xl bg-zinc-50 border border-black/5">
                        <h4 className="font-black uppercase tracking-tight mb-4 flex items-center gap-2 text-black">
                            <ShieldCheck size={18} className="text-primary" />
                            What is witness authentication?
                        </h4>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Witness authentication occurs when a representative from a certifying company physically watches an athlete or celebrity sign an item in person. This process guarantees the signature's authenticity because the representative verifies the origin of the autograph at the exact moment it is created.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-50 border border-black/5">
                        <h4 className="font-black uppercase tracking-tight mb-4 flex items-center gap-2 text-black">
                            <ShieldCheck size={18} className="text-primary" />
                            Authentication Process
                        </h4>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Undrdawg Athletics utilizes on-site representatives to personally witness each athlete or celebrity signature. Following the session, every item is affixed with a tamper-evident sticker, and the corresponding hologram number and details are recorded in our official database.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
