'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'HI';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    EN: {
        // Navbar
        'nav.certifications': 'Certifications & Training',
        'nav.events': 'Industry Engagement',
        'nav.explore': 'Explore',
        'nav.resources': 'Resources',
        'nav.help': 'Help',
        'nav.top_aegis': 'Operating under the aegis of IAMAI',
        'nav.top_guidance': 'with strategic guidance from FIU-IND and collaboration with regulators.',
        'nav.nodal': 'Sectoral Nodal Officers',
        'nav.training_leads': 'Training Leads',
        'nav.volunteers': 'Training Volunteers',
        'nav.topics': 'Training Topics Request',
        'nav.gallery': 'Media',
        'nav.chapters': 'Regional Chapters',
        'nav.about': 'About ARIFAC',
        'nav.members': 'Members',
        'nav.benefits': 'Member Benefits',
        'nav.partnerships': 'Partnerships',
        'nav.updates': 'Regulatory Updates',
        'nav.research': 'Research & Reports',
        'nav.enterprise': 'Enterprise Solutions',
        'nav.tools': 'Compliance Tools',
        'nav.webinars': 'Webinars',
        'nav.press': 'Press Room',
        'nav.insights': 'News & Insights',
        'nav.papers': 'White Papers',
        'nav.contact': 'Contact Us',
        'nav.exam': 'Exam Framework',
        'nav.materials': 'Study Materials',
        'nav.verify': 'Verify a Certificate',
        'nav.directory': 'Member Directory',
        'nav.join': 'Join Now',
        'nav.platform_access': 'Platform Access',
        'nav.learning_platform': 'ARIFAC Certification',
        'nav.member_platform': 'ARIFAC Membership',
        'nav.team_login': 'ARIFAC Team Login',
        'nav.logout': 'Logout',
        'nav.search_placeholder': 'Search for courses, certifications, or news...',
        'nav.search_title': 'What are you looking for?',
        'nav.search_quick': 'Quick results',
        'nav.training': 'Training',
        'logo.tagline': 'Building Partnerships in AML/CFT',
        'logo.badge': 'Professional Framework',
        'res.cat_report': 'Report',
        'res.cat_guidance': 'Guidance',
        'res.cat_whitepaper': 'Whitepaper',
        'res.vis_public': 'Public',
        'res.vis_member': 'Member',
        'common.oct': 'Oct',
        'common.nov': 'Nov',
        'common.dec': 'Dec',
        'data.cert.title1': 'Foundations of AML, CFT & Sanctions',
        'data.cert.title2': 'Intermediate Compliance & Regulatory Oversight',
        'data.cert.title3': 'India’s AML/CFT capability platform supported by FIU India',

        // Data: Meetings (Revised from file)
        'data.meeting.consult.title_short': '5th Multilateral Consultation',
        'data.meeting.consult.loc': 'FIU-IND, New Delhi',
        'data.meeting.consult.type_short': 'High-Level Briefing',
        'data.meeting.regional.title': 'North India Regional Meet',
        'data.meeting.regional.loc': 'IAMAI Office, Gurugram',
        'data.meeting.regional.type': 'Operational Workshop',

        // Data: About
        'data.about.title': 'About ARIFAC',
        'data.about.desc': 'The Alliance of Reporting Entities in India for AML/CFT (ARIFAC) is a national, industry-led initiative operating under the aegis of IAMAI, with strategic guidance from the Financial Intelligence Unit - India (FIU-IND). We bridge the gap between regulatory expectation and operational execution.',
        'data.about.feat.nat.title': 'National Coordination',
        'data.about.feat.nat.desc': 'Unifying diverse reporting entities under a common compliance framework.',
        'data.about.feat.cap.title': 'Capability Development',
        'data.about.feat.cap.desc': 'Standardizing competency through tiered professional certifications.',
        'data.about.f