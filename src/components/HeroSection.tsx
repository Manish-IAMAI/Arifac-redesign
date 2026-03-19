'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, FileText, Users, Building2 } from 'lucide-react';
import { useRef } from 'react';
import { LogoMark } from './Logo';
import { useLanguage } from './LanguageContext';

export default function HeroSection() {
    const { t } = useLanguage();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

    const stats = [

        { label: t('hero.stats_professionals'), value: "2,500+", icon: Users },
        { label: t('hero.stats_modules'), value: "12", icon: FileText },
    ];

    return (
        <section ref={targetRef} className="relative h-screen flex flex-col justify-center pt-20 md:pt-24 pb-8 overflow-hidden bg-background border-b-4 border-black">
            {/* Minimalist Retro Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

            <div className="container relative z-10 px-6 mx-auto">
                <motion.div
                    style={{ opacity, y }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
                >
                    {/* Left Column */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block border-2 border-black bg-accent text-white px-3 py-1 font-bold text-xs uppercase tracking-widest w-fit shadow-[4px_4px_0_0_#000]"
                        >
                            The ARIFAC Initiative
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-black font-heading leading-[1.15] text-foreground tracking-tight"
                        >
                            {t('hero.title')} <br className="hidden md:block"/>
                            <span className="text-accent underline decoration-black decoration-4 underline-offset-4">
                                {t('hero.title_integrity')}
                            </span>
                            <br className="hidden md:block"/>
                            {t('hero.title_architecture')}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-sm md:text-base text-secondary max-w-2xl font-sans leading-snug border-l-4 border-accent pl-4 whitespace-pre-wrap"
                        >
                            {t('hero.description').split(new RegExp(`(${[
                                'compliance capacity', 'अनुपालन क्षमता', 'knowledge sharing', 'ज्ञान साझाकरण',
                                'professional training', 'पेशेवर प्रशिक्षण', 'training', 'प्रशिक्षण',
                                'certification', 'प्रमाणन', 'policy dialogue', 'नीति संवाद', 'industry collaboration', 'उद्योग सहयोग'
                            ].join('|')})`, 'gi')).map((part, index) => {
                                const isYellowHighlight = [
                                    'compliance capacity', 'अनुपालन क्षमता', 'knowledge sharing', 'ज्ञान साझाकरण',
                                    'professional training', 'पेशेवर प्रशिक्षण', 'training', 'प्रशिक्षण',
                                    'certification', 'प्रमाणन', 'policy dialogue', 'नीति संवाद', 'industry collaboration', 'उद्योग सहयोग'
                                ].includes(part.toLowerCase());

                                if (isYellowHighlight) {
                                    return (
                                        <span key={index} className="font-bold text-foreground bg-yellow-300 px-1 border border-black shadow-[2px_2px_0_0_#000]">
                                            {part}
                                        </span>
                                    );
                                }
                                return <span key={index}>{part}</span>;
                            })}
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-3 mt-2"
                        >
                            <Link
                                href="#certification"
                                className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 font-bold text-xs uppercase tracking-widest border-2 border-black shadow-brutal hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
                            >
                                {t('hero.btn_explore')}
                            </Link>
                            <Link
                                href="/membership/register"
                                className="inline-flex items-center justify-center bg-white text-foreground px-6 py-3 font-bold text-xs uppercase tracking-widest border-2 border-black shadow-brutal hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all group"
                            >
                                {t('hero.btn_join')}
                                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Brutalist Stats Block */}
                    <div className="lg:col-span-4 flex flex-col gap-4 mt-4 lg:mt-0">
                        {stats.map((stat, idx) => {
                            if (!stat.icon) return null;
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 + (idx * 0.2) }}
                                    className="p-5 bg-white border-4 border-black shadow-brutal flex flex-col items-start relative overflow-hidden group"
                                >
                                    {/* Decorative Retro Stripes */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,#000_4px,#000_8px)] opacity-10 group-hover:opacity-20 transition-opacity" />
                                    
                                    <div className="p-2 bg-accent text-white border-2 border-black shadow-[2px_2px_0_0_#000] mb-3 z-10">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-black font-heading text-foreground mb-1 z-10">{stat.value}</div>
                                    <div className="text-xs font-bold text-secondary uppercase tracking-widest border-t-2 border-black pt-2 w-full mt-1 z-10">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
