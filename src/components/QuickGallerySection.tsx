'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Image as ImageIcon } from 'lucide-react';

import Image from 'next/image';

const previewImages = [
    { id: 1, title: "Annual Meet 2025", category: "Events", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
    { id: 2, title: "Training Session L2", category: "Training", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" },
    { id: 3, title: "Volunteer Recognition", category: "Community", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" },
];

export default function QuickGallerySection() {
    return (
        <section className="py-24 bg-background border-b-4 border-black overflow-hidden relative">
            {/* Background geometric pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b-4 border-black pb-8">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-accent text-white px-3 py-1 font-bold text-xs uppercase tracking-widest border-2 border-black shadow-brutal mb-6">Visual Journey</span>
                        <h2 className="text-5xl md:text-7xl font-black font-heading text-foreground tracking-tight max-w-3xl">
                            Gallery
                        </h2>
                        <p className="text-xl text-secondary max-w-2xl font-sans mt-8 leading-relaxed border-l-4 border-accent pl-4">
                            Capturing moments of collaboration, learning, and recognition across our national network.
                        </p>
                    </div>
                    <Link
                        href="/gallery"
                        className="group inline-flex items-center gap-2 bg-white border-4 border-black shadow-brutal px-6 py-3 font-bold text-sm uppercase tracking-widest text-foreground hover:translate-y-1 hover:shadow-none transition-all duration-200"
                    >
                        View Full Gallery <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {previewImages.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative aspect-[4/3] border-4 border-black shadow-brutal overflow-hidden hover:shadow-brutal-lg hover:-translate-y-2 hover:-translate-x-2 transition-all duration-500 bg-white"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-8 border-t-4 border-accent">
                                <span className="inline-block bg-accent px-2 py-1 text-white font-black text-[10px] uppercase tracking-widest w-fit mb-3 border-2 border-black">{item.category}</span>
                                <h3 className="text-white font-black font-heading text-2xl tracking-tight">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
