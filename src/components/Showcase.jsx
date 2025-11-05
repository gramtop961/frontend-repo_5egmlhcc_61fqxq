import React from 'react';
import { motion } from 'framer-motion';
import { Star, User, ShoppingCart } from 'lucide-react';

const categories = [
  { name: 'Watches', color: 'from-amber-400/20 to-yellow-300/10', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Sneakers', color: 'from-violet-400/20 to-indigo-300/10', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Handbags', color: 'from-rose-400/20 to-amber-300/10', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Tech & Audio', color: 'from-cyan-400/20 to-blue-300/10', image: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXYXRjaGVzfGVufDB8MHx8fDE3NjIzODE4NjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

const products = [
  {
    name: 'Monaco Heritage Watch',
    price: '$4,250',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1200&auto=format&fit=crop',
    seller: { name: 'Aria Vault', avatar: 'https://i.pravatar.cc/100?img=65' },
  },
  {
    name: 'Carbon Fiber Sneakers',
    price: '$480',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    seller: { name: 'Nova Kicks', avatar: 'https://i.pravatar.cc/100?img=36' },
  },
  {
    name: 'Aurora Leather Tote',
    price: '$1,150',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
    seller: { name: 'Maison Celine', avatar: 'https://i.pravatar.cc/100?img=14' },
  },
];

const CategoryCard = ({ item, i }) => (
  <motion.div
    custom={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ delay: i * 0.1 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
  >
    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.color}`} />
    <img src={item.image} alt={item.name} className="h-48 w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    <div className="absolute bottom-4 left-4 text-white">
      <h4 className="text-lg font-semibold">{item.name}</h4>
      <p className="text-xs text-white/70">Explore exclusive picks</p>
    </div>
  </motion.div>
);

const ProductCard = ({ item, i }) => (
  <motion.div
    custom={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ delay: i * 0.1 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 text-white backdrop-blur"
  >
    <div className="relative overflow-hidden rounded-xl">
      <img src={item.image} alt={item.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>
    <div className="mt-4 flex items-start justify-between">
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <div className="mt-2 flex items-center gap-2 text-xs text-white/70">
          <img src={item.seller.avatar} className="h-5 w-5 rounded-full" />
          <span>{item.seller.name}</span>
          <span className="flex items-center gap-1"><Star className="h-3 w-3 text-amber-300" />{item.rating}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-amber-300">{item.price}</div>
        <div className="mt-2 flex gap-2">
          <button className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur transition-colors hover:bg-white/20">View</button>
          <button className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-3 py-1 text-xs font-medium text-black shadow-[0_8px_30px_rgba(255,200,0,.35)]">
            <ShoppingCart className="h-3 w-3" /> Add
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const Showcase = () => {
  return (
    <section id="categories" className="relative w-full bg-gradient-to-b from-neutral-950 to-black py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <h3 className="text-2xl font-extrabold sm:text-3xl">Shop by Category</h3>
            <p className="mt-2 text-white/70">Discover curated collections from verified sellers worldwide.</p>
          </div>
          <a href="#" className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm backdrop-blur transition-colors hover:bg-white/10">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.name} item={c} i={i} />
          ))}
        </div>

        <div className="mt-14 flex items-center justify-between">
          <h3 className="text-2xl font-extrabold sm:text-3xl">Featured Products</h3>
          <p className="text-sm text-white/70">From verified sellers</p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.name} item={p} i={i} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_10%_10%,rgba(250,204,21,0.06),transparent),radial-gradient(50%_60%_at_90%_80%,rgba(139,92,246,0.08),transparent)]" />
    </section>
  );
};

export default Showcase;
