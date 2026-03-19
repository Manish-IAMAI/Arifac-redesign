"use client";

import { useState } from 'react';
import { CheckCircle2, Clock, BookOpen, ChevronRight, ArrowRight } from 'lucide-react';
import { certificationLevels, CertificationLevel } from '@/data/arifac';
import Link from 'next/link';
import { isLoggedIn, hasPaidForCourse } from '@/lib/auth';
import SyllabusModal from './SyllabusModal';
import { useLanguage } from './LanguageContext';

export default function CertificationScrollSection() {
    const { t } = useLanguage();
    const [selectedLevel, setSelectedLevel] = useState<CertificationLevel | null>(null);

    return (
        <section id="certification" className="py-16 md:py-24 bg-background border-b-4 border-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b-4 border-black pb-8">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-foreground text-background px-3 py-1 font-bold text-xs uppercase tracking-widest border-2 border-black shadow-brutal mb-6">{t('cert.level')} 1-3</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-foreground tracking-tight max-w-3xl">
                            {t('cert.title')} <br />
                            <span className="text-accent underline decoration-black decoration-8 underline-offset-8">{t('cert.title_framework')}</span>
                        </h2>
                        <p className="text-xl text-secondary max-w-2xl font-sans mt-8 leading-relaxed border-l-4 border-foreground pl-4">
                            {t('cert.description')}
                        </p>
                    </div>
                    <Link
                        href="/certifications"
                        className="group inline-flex items-center gap-2 bg-white border-4 border-black shadow-brutal px-6 py-3 font-bold text-sm uppercase tracking-widest text-foreground hover:translate-y-1 hover:shadow-none transition-all duration-200"
                    >
                        {t('cert.all')} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Course Cards */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {certificationLevels.map((level, index) => (
                        <div
                            key={level.level}
                            className="bg-white border-4 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 p-8 flex flex-col transition-all duration-300 relative group overflow-hidden"
                        >
                            {/* Decorative stripe */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(211,47,47,0.1)_4px,rgba(211,47,47,0.1)_8px)] -z-0" />
                            
                            {/* Level Badge + Meta */}
                            <div className="flex items-center justify-between mb-8 z-10 relative">
                                <span className="text-[10px] font-black tracking-widest uppercase text-foreground bg-yellow-300 border-2 border-black px-3 py-1 shadow-[2px_2px_0_0_#000]">
                                    {t('cert.level')} {index + 1}
                                </span>
                                <div className="flex items-center gap-2 text-foreground font-bold text-[12px] uppercase tracking-wider bg-white border-2 border-black px-3 py-1 shadow-[2px_2px_0_0_#000]">
                                    <Clock size={14} className="text-accent" />
                                    <span>{level.validity}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-black font-heading text-foreground mb-4 leading-tight group-hover:text-accent transition-colors duration-300 z-10 relative">
                                {level.title === "Foundations of AML, CFT & Sanctions" ? t('data.cert.title1') :
                                    level.title === "Intermediate Compliance & Regulatory Oversight" ? t('data.cert.title2') :
                                        level.title === "Advanced AML Strategy & Institutional Design" ? t('data.cert.title3') : level.title}
                            </h3>
                            <p className="text-[14px] font-bold text-secondary mb-8 leading-relaxed uppercase tracking-wider z-10 relative border-l-2 border-accent pl-3">
                                {level.title.includes("AML & Financial Crime") ? t('data.cert.course1.desc') : level.targetAudience}
                            </p>

                            {/* Feature list */}
                            <ul className="space-y-4 mb-10 flex-1 z-10 relative">
                                {level.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-[14px] text-foreground font-medium">
                                        <div className="bg-black text-white p-0.5 border border-black shadow-[2px_2px_0_0_#d32f2f] shrink-0 mt-0.5">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Actions */}
                            <div className="flex items-center items-stretch gap-4 pt-6 border-t-4 border-black z-10 relative">
                                <button
                                    onClick={() => setSelectedLevel(level)}
                                    className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-black shadow-[2px_2px_0_0_#000] py-3 text-[12px] font-bold uppercase tracking-widest text-foreground hover:bg-black hover:text-white hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
                                >
                                    <BookOpen size={16} />
                                    {t('cert.syllabus')}
                                </button>

                                {isLoggedIn() && hasPaidForCourse(level.level) ? (
                                    <Link
                                        href="/lms/dashboard"
                                        className="flex-1 flex items-center justify-center gap-1 bg-accent text-white border-2 border-black shadow-[2px_2px_0_0_#000] py-3 text-[12px] font-bold uppercase tracking-widest hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
                                    >
                                        Dashboard <ChevronRight size={16} />
                                    </Link>
                                ) : level.enrollUrl ? (
                                    <a
                                        href={level.enrollUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-1 bg-accent text-white border-2 border-black shadow-[2px_2px_0_0_#000] py-3 text-[12px] font-bold uppercase tracking-widest hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
                                    >
                                        {t('cert.enroll')} <ChevronRight size={16} />
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => setSelectedLevel(level)}
                                        className="flex-1 flex items-center justify-center gap-1 bg-accent text-white border-2 border-black shadow-[2px_2px_0_0_#000] py-3 text-[12px] font-bold uppercase tracking-widest hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
                                    >
                                        {t('cert.enroll')} <ChevronRight size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Syllabus Modal */}
            <SyllabusModal
                course={selectedLevel}
                onClose={() => setSelectedLevel(null)}
            />
        </section>
    );
}
