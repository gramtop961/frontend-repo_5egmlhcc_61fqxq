import React from 'react';
import { motion } from 'framer-motion';
import { Play, Gift, Info } from 'lucide-react';

const Rewards = () => {
  return (
    <section id="rewards" className="relative w-full overflow-hidden bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(250,204,21,0.06),transparent),radial-gradient(40%_40%_at_90%_90%,rgba(99,102,241,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-extrabold sm:text-4xl">Earn Store Credits on Every Purchase</h3>
            <p className="mt-4 text-white/80">
              Spend $50 or more and get 10% back in store credits. Use them instantly or withdraw as cash after a year.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(255,200,0,.35)] transition-transform hover:scale-[1.02]">
                <Gift className="h-4 w-4" /> Learn More About Credits
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
                <Play className="h-4 w-4" /> Watch Video & Earn Credits
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
              <Info className="h-4 w-4 text-amber-300" />
              Credits appear instantly at checkout. Withdrawals unlocked after 12 months.
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-400/20 via-yellow-300/10 to-violet-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Bonus Credit', value: '+50%' },
                  { label: 'Referral Bonus', value: '$1' },
                  { label: 'Min Spend', value: '$50' },
                  { label: 'Instant Use', value: 'Yes' },
                ].map((c) => (
                  <div key={c.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">{c.label}</div>
                    <div className="mt-1 text-xl font-semibold text-amber-300">{c.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-white/70">
                Invite friends to earn extra credits. Preview the referral flow and see how easy it is to share products and earn more.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
