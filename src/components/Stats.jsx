import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Users, PackageCheck, ShieldCheck } from 'lucide-react';

const Counter = ({ target, label, icon: Icon }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      controls.start({ value: target, transition: { duration: 1.6, ease: 'easeOut' } });
    }
  }, [isInView, controls, target]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400/20 to-violet-500/20">
        <Icon className="h-6 w-6 text-amber-300" />
      </div>
      <motion.span
        initial={{ value: 0 }}
        animate={controls}
      >
        {({ value }) => (
          <span className="text-3xl font-extrabold tracking-tight text-white">
            {value.toFixed(0)}{label.includes('%') ? '' : '+'}
          </span>
        )}
      </motion.span>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-neutral-950 py-14 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_40%)]" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-3">
        <Counter target={50} label="50K+ Active Users" icon={Users} />
        <Counter target={1000} label="1M+ Products Sold" icon={PackageCheck} />
        <Counter target={100} label="99.9% Satisfaction" icon={ShieldCheck} />
      </div>
    </section>
  );
};

export default Stats;
