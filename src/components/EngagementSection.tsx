'use client';

import { motion } from 'framer-motion';
import { engagementFormats } from '@/data/arifac';
import { ArrowRight, MessageSquare, Users, FileText, TrendingUp, Briefcase, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function EngagementSection() {
    const { t } = useLanguage();

    const engageKeys: Record<string, string> = {
        "Sectoral Roundtables": "data.engage.round",
        "Workshops": "data.engage.work",
        "Policy Consultations": "data.engage.policy",
        "Typology Briefings": "data.engage.typology",
        "Working Groups": "data.engage.group"
    };

    const getIcon = (index: number) => {
        const icons = [MessageSquare, Users, FileText, TrendingUp, Briefcase];
        return icons[index % icons.length];
    };

    return (
        <section id="engagement" className="py-24 bg-background border-b-4 border-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b-4 border-black pb-8">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-accent text-white px-3 py-1 font-bold text-xs uppercase tracking-widest border-2 border-black shadow-brutal mb-6">{t('engage.collab')}</span>
                        <h2 className="text-5xl md:text-7xl font-black font-heading text-foreground tracking-tight max-w-3xl">
                            {t('engage.title')}
                        </h2>
                        <p className="text-xl text-secondary max-w-2xl font-sans mt-8 leading-relaxed border-l-4 border-accent pl-4">
                            {t('engage.description')}
                        </p>
                    </div>
                    <button className="group inline-flex items-center gap-2 bg-white border-4 border-black shadow-brutal px-6 py-3 font-bold text-sm uppercase tracking-widest text-foreground hover:translate-y-1 hover:shadow-none transition-all duration-200">
                        {t('engage.calendar')}
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {engagementFormats.map((format, index) => {
                        const Icon = getIcon(index);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-8 hover:shadow-[8px_8px_0_0_#d32f2f] hover:-translate-y-1 transition-all duration-300 flex flex-col relative"
                            >
                                <div className="absolute top-0 right-0 w-8 h-8 bg-black group-hover:bg-accent transition-colors" />
                                <div className="w-14 h-14 bg-yellow-300 border-2 border-black flex items-center justify-center mb-8 shadow-[2px_2px_0_0_#000] group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-7 h-7 text-foreground" />
                                </div>

                                <h3 className="text-3xl font-black font-heading text-foreground mb-4 group-hover:text-accent transition-colors">
                                    {engageKeys[format.title] ? t(`${engageKeys[format.title]}.title`) : format.title}
                                </h3>
                                <p className="text-sm font-bold text-secondary uppercase tracking-widest leading-relaxed mb-8 border-t-2 border-black/10 pt-4">
                                    {engageKeys[format.title] ? t(`${engageKeys[format.title]}.desc`) : format.description}
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-sm text-foreground font-black uppercase tracking-widest group-hover:text-accent transition-colors duration-300">
                                    <span>{t('engage.participate')}</span>
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
