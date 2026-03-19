'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import { useLanguage } from './LanguageContext';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    const { t } = useLanguage();
    const footerLinks: { title: string; links: { name: string; href: string }[] }[] = [
        {
            title: t('nav.explore'),
            links: [
                { name: t('nav.events'), href: '/meetings' },
                { name: 'Sectoral Nodal Officers', href: '/sectoral-nodal-officers' },
                { name: 'Training Leads', href: '/training-leads' },
                { name: 'Contact Us', href: '/contact' },
            ],
        },
        {
            title: t('nav.certifications'),
            links: [
                { name: 'Exam Framework', href: '#' },
                { name: 'Study Materials', href: '#' },
                { name: 'Continuing Education', href: '#' },
                { name: 'Verify a Certificate', href: '#' },
            ],
        },
        {
            title: 'Membership',
            links: [
                { name: 'Member Directory', href: '/members' },
                { name: 'Benefits', href: '#' },
                { name: 'Fee Structure', href: '#' },
                { name: 'Join Now', href: '/membership/register' },
            ],
        },
        {
            title: t('nav.resources'),
            links: [
                { name: 'Regulatory Updates', href: '/regulatory-updates' },
                { name: 'Research & Reports', href: '#' },
                { name: 'Webinars', href: '#' },
                { name: 'Press Room', href: '#' },
            ],
        },
    ];

    return (
        <footer className="bg-black pt-24 pb-12 border-t-8 border-accent text-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
                    <div className="lg:col-span-2">
                        {/* We use logo variant light which renders black text usually, but since bg is black, we might need a dark variant. Actually Logo variant="light" in the navbar means white background usually. Let's see if there's a "dark" variant */}
                        <Logo className="mb-4 grayscale invert brightness-0 pb-4 border-b-2 border-white/20" variant="light" />
                        <p className="text-gray-400 font-medium text-[13px] leading-relaxed max-w-sm mt-6">
                            {t('footer.desc')}
                        </p>
                        <div className="flex items-center gap-4 mt-8">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/company/arifacpanindia/", label: "LinkedIn" },
                                { icon: Twitter, href: "/", label: "X" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white border-2 border-white flex items-center justify-center text-black hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 group shadow-[2px_2px_0_0_#d32f2f]"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {footerLinks.map((column, index) => (
                        <div key={index}>
                            <h4 className="text-white text-[11px] font-black mb-6 uppercase tracking-widest">{column.title}</h4>
                            <ul className="space-y-3 border-l-2 border-white/10 pl-4">
                                {column.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={link.href}
                                            className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors block uppercase tracking-wider"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* IAMAI Technology Partner Strip */}
                <div className="mb-12 p-6 border-2 border-white/20 bg-white/5 flex flex-col sm:flex-row items-center gap-6 justify-between">
                    <div className="flex items-center gap-4">
                        <a
                            href="https://iamai.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
                        >
                            <div className="relative w-32 h-16 bg-white border-2 border-white overflow-hidden p-2 shadow-[2px_2px_0_0_#d32f2f]">
                                <Image
                                    src="/iamai-logo.png"
                                    alt="IAMAI"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            <div className="hidden md:flex flex-col">
                                <span className="text-white text-[12px] font-black uppercase tracking-widest">{t('footer.iamai_aegis')}</span>
                                <span className="text-gray-400 text-[11px] font-bold mt-1 uppercase tracking-wider">{t('footer.iamai_full')}</span>
                            </div>
                        </a>
                    </div>
                    <p className="text-gray-400 text-[11px] font-medium leading-relaxed text-center sm:text-right max-w-sm uppercase tracking-wider">
                        {t('footer.iamai_desc')}
                    </p>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                        © {new Date().getFullYear()} ARIFAC | IAMAI. <span className="text-white ml-2">{t('footer.rights')}</span>
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors tracking-widest">
                            {t('footer.privacy')}
                        </Link>
                        <Link href="#" className="text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors tracking-widest">
                            {t('footer.terms')}
                        </Link>
                        <Link href="#" className="text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors tracking-widest">
                            {t('footer.cookie')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
