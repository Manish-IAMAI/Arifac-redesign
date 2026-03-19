'use client';

import { motion } from 'framer-motion';
import { resourcesData } from '@/data/arifac';
import { FileText, Lock, Download, ExternalLink, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function ResourcesSection() {
    const { t } = useLanguage();
    const getAccessColor = (level: string) => {
        switch (level) {
            case 'Public': return 'bg-[#a3e635] text-black border-2 border-black shadow-[2px_2px_0_0_#000]'; // Lime
            case 'Member': return 'bg-[#60a5fa] text-black border-2 border-black shadow-[2px_2px_0_0_#000]'; // Blue
            case 'Certified Professional': return 'bg-[#facc15] text-black border-2 border-black shadow-[2px_2px_0_0_#000]'; // Yellow
            default: return 'bg-white text-black border-2 border-black shadow-[2px_2px_0_0_#000]';
        }
    };

    return (
        <section id="resources" className="py-16 md:py-24 bg-background border-b-4 border-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b-4 border-black pb-8">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-black text-white px-3 py-1 font-bold text-xs uppercase tracking-widest border-2 border-black mb-6">{t('nav.resources')}</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-foreground tracking-tight max-w-3xl">
                            {t('resources.title')}
                        </h2>
                        <p className="text-xl text-secondary max-w-2xl font-sans mt-8 leading-relaxed border-l-4 border-black pl-4">
                            {t('resources.description')}
                        </p>
                    </div>
                    <button className="group inline-flex items-center gap-2 bg-white border-4 border-black shadow-brutal px-6 py-3 font-bold text-sm uppercase tracking-widest text-foreground hover:translate-y-1 hover:shadow-none transition-all duration-200">
                        {t('resources.all')} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resourcesData.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group bg-white border-4 border-black p-8 hover:-translate-y-1 hover:shadow-brutal transition-all duration-300 flex flex-col relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] -z-0" />
                            
                            <div className="flex justify-between items-start mb-8 z-10 relative">
                                <div className={`text-[10px] uppercase tracking-widest font-black px-3 py-1 ${getAccessColor(resource.accessLevel)}`}>
                                    {resource.accessLevel === 'Public' ? t('res.vis_public') : t('res.vis_member')}
                                </div>
                                <div className="text-foreground text-[10px] font-bold uppercase tracking-widest border-2 border-black bg-white px-2 py-1 shadow-[2px_2px_0_0_#000]">
                                    {resource.date.includes('Oct') ? resource.date.replace('Oct', t('common.oct')) :
                                        resource.date.includes('Nov') ? resource.date.replace('Nov', t('common.nov')) :
                                            resource.date.includes('Dec') ? resource.date.replace('Dec', t('common.dec')) : resource.date}
                                </div>
                            </div>

                            <div className="mb-8 z-10 relative">
                                <span className="text-[10px] font-bold text-accent uppercase tracking-widest border-b-2 border-accent pb-1 inline-block">
                                    {resource.type === 'Report' ? t('res.cat_report') :
                                        resource.type === 'Guidance' ? t('res.cat_guidance') :
                                            resource.type === 'Whitepaper' ? t('res.cat_whitepaper') : resource.type}
                                </span>
                                <h3 className="text-2xl font-black font-heading text-foreground mt-4 line-clamp-3 leading-tight group-hover:text-accent transition-colors duration-300">
                                    {resource.title}
                                </h3>
                            </div>

                            <div className="pt-6 border-t-4 border-black flex items-center justify-between mt-auto z-10 relative bg-white">
                                <div className="flex items-center gap-2 text-[11px] text-foreground uppercase tracking-widest font-bold">
                                    <FileText className="w-4 h-4 text-accent" />
                                    <span>{t('resources.pdf')}</span>
                                </div>

                                {resource.accessLevel === 'Public' ? (
                                    <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-foreground group-hover:text-accent transition-colors duration-300">
                                        <Download className="w-4 h-4" />
                                        {t('resources.download')}
                                    </button>
                                ) : (
                                    <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-secondary hover:text-foreground transition-colors duration-300">
                                        <Lock className="w-4 h-4" />
                                        {t('resources.signin')}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
