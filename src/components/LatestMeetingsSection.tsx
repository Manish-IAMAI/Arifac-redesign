'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, ChevronRight, Building2 } from 'lucide-react';

import { useLanguage } from './LanguageContext';

const inPersonMeetings = [
    {
        id: 1,
        title: "4th National Chapter Meeting",
        date: "December 10, 2025",
        location: "Mumbai",
        host: "IAMAI",
        minutesLink: "/Minutes-of-the-5th-National-ARIFAC-Meeting.docx",
    },
    {
        id: 2,
        title: "3rd National Chapter Meeting",
        date: "July 24, 2024",
        location: "Mumbai",
        host: "Citibank NA India",
        minutesLink: null,
    },
    {
        id: 3,
        title: "2nd National Chapter Meeting",
        date: "October 19, 2023",
        location: "Mumbai",
        host: "Standard Chartered Bank",
        minutesLink: null,
    },
    {
        id: 4,
        title: "Inaugural National Chapter Meeting",
        date: "August 4, 2023",
        location: "New Delhi",
        host: "Paytm",
        minutesLink: null,
    },
];

export default function LatestMeetingsSection() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-background relative border-b-4 border-black">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b-4 border-black pb-8">
                        <div>
                            <span className="inline-block bg-accent text-white px-3 py-1 font-bold text-xs uppercase tracking-widest border-2 border-black shadow-brutal mb-6">{t('meetings.engagements')}</span>
                            <h2 className="text-5xl md:text-7xl font-black font-heading text-foreground tracking-tight max-w-3xl">
                                {t('meetings.title')}
                            </h2>
                            <p className="text-xl text-secondary max-w-2xl font-sans mt-6 leading-relaxed border-l-4 border-accent pl-4">
                                {t('meetings.description')}
                            </p>
                        </div>
                        <Link
                            href="/meetings"
                            className="group inline-flex items-center gap-2 bg-white border-4 border-black shadow-brutal px-6 py-3 font-bold text-sm uppercase tracking-widest text-foreground hover:translate-y-1 hover:shadow-none transition-all duration-200"
                        >
                            {t('meetings.all')} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {inPersonMeetings.map((meeting, idx) => (
                            <motion.div
                                key={meeting.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 border-4 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-300 flex flex-col relative group"
                            >
                                <div className="absolute top-0 right-0 w-8 h-8 bg-black group-hover:bg-accent transition-colors" />
                                <div className="text-[10px] font-black text-black uppercase tracking-widest mb-4 border-2 border-black px-2 py-1 w-fit bg-yellow-300">In-person Meeting</div>
                                <h3 className="text-3xl font-black font-heading text-foreground mb-6 group-hover:text-accent transition-colors duration-300 leading-tight">{meeting.title}</h3>

                                <div className="space-y-4 mb-8 pt-4 border-t-2 border-black/10">
                                    <div className="flex items-center gap-4 text-[13px] text-foreground font-bold uppercase tracking-wider">
                                        <div className="p-2 border-2 border-black shadow-[2px_2px_0_0_#000] bg-white text-accent">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <span>{meeting.date} <br/> <span className="text-secondary">{meeting.location}</span></span>
                                    </div>
                                    <div className="flex items-center gap-4 text-[13px] text-foreground font-bold uppercase tracking-wider">
                                        <div className="p-2 border-2 border-black shadow-[2px_2px_0_0_#000] bg-white text-accent">
                                            <Building2 className="w-5 h-5" />
                                        </div>
                                        <span>Hosted by <br/> <span className="text-secondary">{meeting.host}</span></span>
                                    </div>
                                </div>

                                <div className="mt-auto border-t-4 border-black pt-4">
                                    {meeting.minutesLink ? (
                                        <a
                                            href={meeting.minutesLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 py-3 px-0 text-foreground font-bold hover:text-accent transition-all text-sm uppercase tracking-widest"
                                        >
                                            Read Summary <ChevronRight size={16} />
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center gap-2 py-3 px-0 text-secondary font-bold text-sm uppercase tracking-widest cursor-default">
                                            Summary Unavailable
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
