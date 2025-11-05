import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Store, Gift, Coins } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D scene background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Luxury gradient washes */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-gradient-to-tr from-yellow-400/20 via-amber-400/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-500/20 via-blue-400/10 to-transparent blur-3xl" />

      {/* Top bar with floating balance */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
            <Coins className="h-5 w-5 text-amber-300" />
          </div>
          <div className="text-lg font-semibold tracking-wide">
            <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">Premium</span>
            <span className="text-white/80"> Market</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#categories" className="hover:text-white transition-colors">Categories</a>
            <a href="#rewards" className="hover:text-white transition-colors">Rewards</a>
          </div>
          <div className="ml-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
            <Gift className="h-4 w-4 text-amber-300" />
            <span className="text-sm font-medium">Credits: <span className="text-amber-300">$128.40</span></span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur"
        >
          <span>🎉 Launch Week - Get 50% Extra Store Credits</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          <span className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">The Premium Brand Marketplace</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          Buy, sell, and discover premium brands with our innovative store credit system. Earn rewards, get exclusive offers, and connect with verified sellers worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#categories"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(255,200,0,.35)] transition-transform will-change-transform hover:scale-[1.02]"
          >
            <ShoppingBag className="h-4 w-4 transition-transform group-hover:-rotate-6" />
            Start Shopping
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            <Store className="h-4 w-4" />
            Sell Your Products
          </a>
        </motion.div>
      </div>

      {/* Bottom fade for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
