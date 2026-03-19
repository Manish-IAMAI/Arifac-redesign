'use client';

import { motion } from 'framer-motion';
import { membershipCategories } from '@/data/arifac';
import { Users, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Link from 'next/link';

export default function MembershipSection() {
    const { t } = useLanguage();

    // Mapping keys for translated content
    const memberKeys: Record<string, string> = {
        "Banking Institutions": "data.member.banking",
        "NBFCs": "data.member.nbfc",
        "Insurance": "data.member.ins",
        "Securities Markets": "data.member.sec",
        "VDA Ecosystem": "data.member.vda",
        "DNFBP": "data.member.dnfbp",
        "Technology Providers": "data.member.tech"
    };

    return (
        <section id="membership" className="py-24 bg-background relative border-b-4 border-black overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-4 border-black pb-8 gap-8">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-accent text-white px-3 py-1 font-bold text-xs uppercase tracking-widest border-2 border-black shadow-brutal mb-6">{t('member.network')}</span>
                        <h2 className="text-5xl md:text-7xl font-black font-heading text-foreground tracking-tight">
                            {t('member.title')}
                        </h2>
                    </div>
                    <p className="text-lg text-secondary max-w-lg font-sans leading-relaxed border-l-4 border-accent pl-4">
                        {t('member.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {membershipCategories.map((category, index) => {
                        const Icon = category.icon || Users;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 bg-white border-4 border-black shadow-[4px_4px_0_0_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 flex flex-col"
                            >
                                <div className="w-12 h-12 bg-yellow-300 border-2 border-black flex items-center justify-center mb-6 shadow-[2px_2px_0_0_#000] group-hover:scale-110 transition-transform duration-300 shrink-0">
                                    <Icon className="w-6 h-6 text-foreground" />
                                </div>
                                <h3 className="text-2xl font-black font-heading text-foreground mb-4">
                                    {memberKeys[category.title] ? t(`${memberKeys[category.title]}.title`) : category.title}
                                </h3>
                                <p className="text-sm font-bold text-secondary uppercase tracking-widest leading-relaxed mt-auto border-t-2 border-black/10 pt-4">
                                    {memberKeys[category.title] ? t(`${memberKeys[category.title]}.desc`) : category.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-20 bg-accent text-white border-4 border-black shadow-[16px_16px_0_0_#000] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                    <div className="max-w-2xl relative z-10">
                        <h3 className="text-4xl md:text-5xl font-black font-heading text-white mb-6 uppercase tracking-tight">{t('ARIFAC Membership')}</h3>
                        <p className="text-white/90 text-lg font-bold uppercase tracking-widest leading-relaxed">
                            {t('member.benefits_desc')}
                        </p>
                    </div>

                    <Link href="/member-benefits" className="bg-white text-foreground border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 px-10 py-5 font-black text-lg uppercase tracking-widest transition-all flex items-center gap-3 relative z-10 shrink-0">
                        {t('member.fee_btn')}
                        <div className="bg-accent text-white p-1 border-2 border-black">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
