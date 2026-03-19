'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, HelpCircle, Search, User, ShoppingCart, Linkedin } from 'lucide-react';
import Logo from './Logo';
import { getUser, logout } from '@/lib/auth';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const { language: currentLang, setLanguage: setCurrentLang, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: t('nav.explore'),
            href: '#',
            dropdown: [
                { name: t('nav.about'), href: '/about' },
                { name: t('nav.members'), href: '/members' },
                { name: t('nav.benefits'), href: '/member-benefits' },
                { name: t('nav.partnerships'), href: '#' },
            ]
        },

        {
            name: t('nav.events'),
            href: '/meetings',
            dropdown: [
                { name: t('Events & Meetings'), href: '/meetings' },
                { name: t('nav.gallery'), href: '/gallery' },
                { name: t('nav.chapters'), href: '#' },
            ]
        },
        {
            name: t('nav.resources'),
            href: '#',
            dropdown: [
                { name: t('nav.updates'), href: '/regulatory-updates' },
                { name: t('nav.research'), href: '#' },
                { name: t('nav.enterprise'), href: '#' },
                { name: t('nav.tools'), href: '#' },
                { name: t('nav.webinars'), href: '#' },
                { name: t('nav.press'), href: '#' },
                { name: t('nav.insights'), href: '#' },
                { name: t('nav.papers'), href: '#' },
            ]
        },
        {
            name: t('nav.certifications'),
            href: '/certifications',
            sections: [
                {
                    title: t('nav.certifications'),
                    links: [
                        { name: t('cert.all'), href: '/certifications' },
                        { name: t('nav.exam'), href: '#' },
                        { name: t('nav.materials'), href: '#' },
                        { name: t('nav.verify'), href: '#' },
                    ]
                },
                {
                    title: t('nav.training'),
                    links: [
                        { name: t('nav.training_leads'), href: '/training-leads' },
                        { name: t('nav.volunteers'), href: '/training-volunteers' },
                        { name: t('nav.topics'), href: '/training-topics' },
                    ]
                }
            ]
        },
    ];

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (name: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            {/* IAMAI Partnership Top Bar */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: isScrolled ? -32 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 left-0 right-0 z-[100] h-8 bg-black flex flex-wrap items-center justify-between px-6"
            >
                {/* Left side area to balance the news ticker */}
                <div className="flex-1 flex items-center justify-start min-w-[20px] md:min-w-[140px]" />

                {/* News Ticker Container - Centered */}
                <div className="flex-[10] overflow-hidden relative h-full flex items-center min-w-0 max-w-6xl mx-auto px-4">
                    <div className="flex items-center shrink-0 pr-4">
                        <span className="text-white bg-accent text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-none whitespace-nowrap">
                            {'NEWS'}
                        </span>
                    </div>

                    <div className="relative flex-1 overflow-hidden h-full">
                        <motion.div
                            animate={{ x: ["5%", "-100%"] }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex items-center gap-16 whitespace-nowrap pr-20 h-full"
                        >
                            {[
                                "ARIFAC successfully launches the 2025 AML/CFT Certification program.",
                                "New regulatory guidelines for Fintech reporting released for Q1 2025.",
                                "Join our upcoming national level webinar on Virtual Digital Asset (VDA) compliance.",
                                "Developing best practices papers and typology reports for member institutions.",
                                "Collaborative efforts to leverage expertise of the private sector in financial integrity."
                            ].map((headline, i) => (
                                <span key={i} className="text-white/80 text-[11px] font-medium tracking-wide flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-accent" />
                                    {headline}
                                </span>
                            ))}
                        </motion.div>
                        {/* Fade mask for smooth entry/exit */}
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#1d1d1f] to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#1d1d1f] to-transparent z-10" />
                    </div>
                </div>

                {/* Right side area for Help and Language */}
                <div className="flex-1 flex items-center justify-end gap-4 min-w-[140px]">
                    <Link href="/help" className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors group">
                        <HelpCircle size={14} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[11px] font-bold hidden sm:block uppercase tracking-wider">{t('nav.help')}</span>
                    </Link>
                    <div className="w-px h-3 bg-white/10" />
                    <div className="relative">
                        <button
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors group"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-wider">{currentLang}</span>
                            <ChevronDown size={10} className={`transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
                        </button>

                        <AnimatePresence>
                            {isLanguageOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={() => setIsLanguageOpen(false)}
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute right-0 mt-2 w-32 bg-white/95 backdrop-blur-2xl rounded-xl border border-gray-100 shadow-xl z-50 overflow-hidden"
                                    >
                                        <div className="py-1">
                                            {[
                                                { code: 'EN', name: 'English' },
                                                { code: 'HI', name: 'Hindi' }
                                            ].map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => {
                                                        setCurrentLang(lang.code as 'EN' | 'HI');
                                                        setIsLanguageOpen(false);
                                                    }}
                                                    className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center justify-between transition-colors ${currentLang === lang.code
                                                        ? 'text-accent bg-gray-50'
                                                        : 'text-gray-600 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {lang.name}
                                                    {currentLang === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            <nav
                className={`fixed left-0 right-0 z-[100] transition-all duration-300 bg-background border-b-4 border-black ${isScrolled
                    ? 'top-0 py-2 shadow-brutal'
                    : 'top-8 py-3'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-6 shrink-0">
                        <a
                            href="https://fiuindia.gov.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-16 md:h-22 bg-white shrink-0 flex items-center justify-center hover:opacity-90 transition-opacity"
                        >
                            <Image
                                src="/images/fiu-logo.png"
                                alt="FIU-IND"
                                width={100}
                                height={44}
                                className="object-contain h-full w-auto max-w-[60px] md:max-w-none"
                            />
                        </a>
                        <div className="w-px h-8 md:h-10 bg-gray-200 shrink-0 hidden md:block" />
                        <Link href="/" className="group flex items-center ml-2 md:ml-0">
                            <Logo variant="light" className="scale-75 md:scale-100 origin-left" />
                        </Link>

                        <div className="w-px h-10 bg-gray-200 shrink-0 ml-2 hidden lg:block" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 flex-1 ml-4 justify-between">
                        <div className="flex items-center">
                            {navLinks.map((link, index) => (
                                <div
                                    key={link.name}
                                    className="flex items-center h-full"
                                    onMouseEnter={() => handleMouseEnter(link.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button
                                        className={`relative group px-5 py-2 text-[13px] font-bold tracking-tight transition-colors duration-200 flex items-center gap-1.5 ${activeDropdown === link.name ? 'text-accent' : 'text-[#1d1d1f]/80 hover:text-accent'}`}
                                    >
                                        {link.name}
                                        <ChevronDown size={12} className={`mt-0.5 opacity-40 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                        
                                        {/* Bottom Highlight Indicator */}
                                        <span className={`absolute left-5 right-5 -bottom-0.5 h-[3px] bg-accent rounded-t-full transition-transform duration-300 origin-center ${activeDropdown === link.name ? 'scale-x-100' : 'scale-x-0'}`} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Action Icons */}
                    <div className="hidden lg:flex items-center gap-5">
                        <a
                            href="https://www.linkedin.com/company/arifacpanindia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 transition-colors duration-200 text-[#1d1d1f]/60 hover:text-accent"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 transition-colors duration-200 text-[#1d1d1f]/60 hover:text-accent"
                        >
                            <Search size={20} />
                        </button>

                        <button
                            className="p-2 relative transition-colors duration-200 text-[#1d1d1f]/60 hover:text-accent"
                        >
                            <ShoppingCart size={20} />
                            <span className="absolute -top-0 -right-0 w-4 h-4 bg-accent text-white text-[9px] font-bold rounded-full flex items-center justify-center">0</span>
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'account' ? null : 'account')}
                                className="p-2 transition-colors duration-200 text-[#1d1d1f]/60 hover:text-accent"
                            >
                                <User size={20} />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'account' && (
                                    <motion.div
                               