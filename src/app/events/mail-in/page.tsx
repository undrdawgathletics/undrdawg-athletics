import EventsTab from "@/components/EventsTab";
import { Download, Package, PenTool, Mail } from "lucide-react";

export default function MailInPage() {
    return (
        <div className="bg-white min-h-screen text-black pt-24 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <section className="relative pb-12 overflow-hidden border-b border-black/5 mb-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4 text-black">
                            MAIL-IN <span className="text-black italic">ORDER</span>
                        </h1>
                    </div>
                </section>
                <div className="text-center mb-16">
                    <EventsTab />
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-zinc-50 border border-black/5 rounded-[3rem] p-8 md:p-12">
                        <div className="flex flex-col items-center text-center mb-12">
                            <div className="h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Mail size={40} />
                            </div>
                            <h2 className="text-3xl font-black uppercase italic text-black mb-4">Send us your item</h2>
                            <p className="text-zinc-600 max-w-lg font-medium">
                                Can't make it to the signing? No problem. Send us your memorabilia and our team will get it signed for you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white p-6 rounded-2xl border border-black/5 text-center">
                                <div className="mx-auto h-12 w-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-4 text-black font-black text-xl">1</div>
                                <h3 className="font-bold uppercase mb-2">Download Form</h3>
                                <p className="text-sm text-zinc-500">Print and fill out the order form</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-black/5 text-center">
                                <div className="mx-auto h-12 w-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-4 text-black font-black text-xl">2</div>
                                <h3 className="font-bold uppercase mb-2">Ship Item</h3>
                                <p className="text-sm text-zinc-500">Ship your item with the form</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-black/5 text-center">
                                <div className="mx-auto h-12 w-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-4 text-black font-black text-xl">3</div>
                                <h3 className="font-bold uppercase mb-2">Signed &amp; Returned</h3>
                                <p className="text-sm text-zinc-500">Item is signed and returned to you</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <a
                                href="/pdfs/Undrdawg%20Athletics%20Mail%20in%20Form%20(1).pdf"
                                download="Undrdawg_Athletics_Mail_in_Form.pdf"
                                target="_blank"
                                className="h-16 px-10 bg-black text-white rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:bg-zinc-800 transition-all shadow-xl hover:-translate-y-1"
                            >
                                <Download size={20} />
                                Download Form
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
