import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-white px-4 py-32 text-center">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-secondary/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center">
          <div className="mb-12">
            <Image
              src="/logo.png"
              alt="Undrdawg logo"
              width={200}
              height={200}
              className="opacity-90"
              priority
            />
          </div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            <Zap size={14} className="text-primary" />
            The Future of Athlete Engagement
          </span>

          <h1 className="mb-8 text-6xl font-[900] leading-[1.1] tracking-tighter text-black md:text-8xl">
            DELIVERING <br />
            <span className="text-primary">NOTABLE ATHLETES</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-zinc-600 md:text-xl">
            It's in our DNA. We help you book and meet all athletes —
            overcoming odds to create authentic & memorable experiences.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/events"
              className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 text-lg font-bold text-white transition-all hover:bg-primary/90 sm:w-auto"
            >
              Book an Athlete
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/shop"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full border border-black/20 bg-black/5 px-8 text-lg font-bold text-black backdrop-blur-sm transition-all hover:bg-black/10 sm:w-auto"
            >
              Shop the Drop
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stats/Trust Section */}
      <section className="border-y border-black/5 bg-zinc-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center justify-center gap-4 text-center md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">Authentic Gear</h3>
                <p className="text-sm text-zinc-500">Verified memorabilia from pros.</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-center md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">Elite Roster</h3>
                <p className="text-sm text-zinc-500">Connecting you with top talent.</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-center md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">Philly Born</h3>
                <p className="text-sm text-zinc-500">Student-led, grit-fueled.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
