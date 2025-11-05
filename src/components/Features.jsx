import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, Truck, Banknote } from 'lucide-react';

const featureData = [
  {
    title: 'Store Credits',
    desc: 'Earn 10% credits on purchases over $50. Withdraw after a year or use instantly.',
    icon: CreditCard,
    accent: 'from-amber-300/30 to-yellow-400/10',
  },
  {
    title: 'Secure Trading',
    desc: 'Verified sellers, buyer protection, and dispute resolution for peace of mind.',
    icon: Shield,
    accent: 'from-emerald-300/30 to-teal-400/10',
  },
  {
    title: 'Flexible Delivery',
    desc: 'Pickup, standard, or urgent delivery options tailored to your schedule.',
    icon: Truck,
    accent: 'from-violet-300/30 to-indigo-400/10',
  },
  {
    title: 'Multiple Payments',
    desc: 'Pay via bank transfer, cash, or store credits — whatever suits you.',
    icon: Banknote,
    accent: 'from-blue-300/30 to-cyan-400/10',
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6 } }),
};

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(250,204,21,0.06),transparent),radial-gradient(50%_60%_at_100%_40%,rgba(139,92,246,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Elevated features, crafted for trust
          </h2>
          <p className="mt-3 text-white/70">
            Luxury-grade experience with the protection and flexibility you expect.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureData.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-transform will-change-transform hover:scale-[1.02]"
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${f.accent} blur-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <f.icon className="h-5 w-5 text-amber-300" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
