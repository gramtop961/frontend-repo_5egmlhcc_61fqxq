import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Rewards from './components/Rewards';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-[Inter] text-white">
      <Hero />
      <Stats />
      <Features />
      <Showcase />
      <Rewards />

      <footer className="border-t border-white/10 bg-black/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} The Premium Brand Marketplace. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#categories" className="hover:text-white">Categories</a>
            <a href="#rewards" className="hover:text-white">Rewards</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
