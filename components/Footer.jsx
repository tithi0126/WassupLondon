'use client';

import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO, SOCIAL_ICONS } from '@/lib/data';
import '@/app/styles/footer.css';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="editorial-footer" role="contentinfo">
            <div className="editorial-footer__container">
                {/* ─── Massive Call to Action Headline ─── */}
                <div className="editorial-footer__hero">
                    <span className="editorial-footer__kicker">[ INITIATE A CONVERSATION ]</span>
                    <h2 className="editorial-footer__headline">
                        LET&apos;S CURATE SOMETHING <br />
                        <span className="text-italic">EXTRAORDINARY TOGETHER.</span>
                    </h2>
                    <div className="editorial-footer__cta-row">
                        <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="editorial-footer__cta-btn"
                        >
                            Request Consultation →
                        </a>
                        <a
                            href={CONTACT_INFO.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="editorial-footer__wa-btn"
                        >
                            WhatsApp Director
                        </a>
                    </div>
                </div>

                {/* ─── Four Column Directory Grid ─── */}
                <div className="editorial-footer__grid">
                    {/* Column 1: Brand Atelier */}
                    <div className="editorial-footer__col">
                        <div className="editorial-footer__brand-head">
                            <img
                                src="/logo.png"
                                alt="Wassup London Crest"
                                className="editorial-footer__crest"
                            />
                            <div className="editorial-footer__brand-info">
                                <span className="editorial-footer__col-title">ATELIER</span>
                                <span className="editorial-footer__brand-badge">WEDDINGS &amp; EVENTS</span>
                            </div>
                        </div>
                        <p className="editorial-footer__brand-text">
                            Wassup London is an integrated event production, sound design, and culinary atelier 
                            delivering high-calibre weddings, club nights, and private galas across the United Kingdom.
                        </p>
                        <div className="editorial-footer__status">
                            <span className="editorial-footer__status-dot" />
                            <span>Currently taking reservations for 2026 / 2027</span>
                        </div>
                    </div>

                    {/* Column 2: Disciplines */}
                    <div className="editorial-footer__col">
                        <span className="editorial-footer__col-title">DISCIPLINES</span>
                        <ul className="editorial-footer__links">
                            <li><Link href="/weddings">Bespoke Weddings & Mandaps</Link></li>
                            <li><Link href="/dj-entertainment">Club Sound & Staging</Link></li>
                            <li><Link href="/catering">Artisanal Dining & Catering</Link></li>
                            <li><Link href="/corporate">Corporate Summits & Galas</Link></li>
                            <li><Link href="/packages">Curated Packages & Tiers</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div className="editorial-footer__col">
                        <span className="editorial-footer__col-title">DIRECT INQUIRIES</span>
                        <div className="editorial-footer__contact-box">
                            <a href={`mailto:${CONTACT_INFO.email}`} className="editorial-footer__contact-link">
                                {CONTACT_INFO.email}
                            </a>
                            <a
                                href={CONTACT_INFO.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="editorial-footer__contact-link"
                            >
                                {CONTACT_INFO.whatsappNumber}
                            </a>
                            <p className="editorial-footer__address">
                                {CONTACT_INFO.address}<br />
                                Available across London &amp; United Kingdom
                            </p>
                        </div>
                    </div>

                    {/* Column 4: Newsletter / Connect */}
                    <div className="editorial-footer__col">
                        <span className="editorial-footer__col-title">CHANNELS</span>
                        <div className="editorial-footer__socials">
                            {SOCIAL_ICONS.map(({ href, label, svg }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="editorial-footer__social-link"
                                    aria-label={label}
                                    dangerouslySetInnerHTML={{ __html: svg }}
                                />
                            ))}
                        </div>
                        <div className="editorial-footer__newsletter">
                            <span className="editorial-footer__news-label">PRIVATE DOSSIER</span>
                            <form
                                className="editorial-footer__form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert('Thank you for subscribing to the Wassup London atelier dossier.');
                                }}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="editorial-footer__input"
                                />
                                <button type="submit" className="editorial-footer__submit-btn">
                                    →
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* ─── Massive Typographic Brand Mark ─── */}
                <div className="editorial-footer__wordmark">
                    <div className="editorial-footer__wordmark-crest-wrap">
                        <img
                            src="/logo.png"
                            alt="Wassup London Crest"
                            className="editorial-footer__wordmark-crest"
                        />
                    </div>
                    <span>WASSUP LONDON</span>
                </div>

                {/* ─── Bottom Bar ─── */}
                <div className="editorial-footer__bottom">
                    <div className="editorial-footer__copyright">
                        © {new Date().getFullYear()} Wassup London Events Ltd. All rights reserved.
                    </div>
                    <div className="editorial-footer__legal">
                        <span className="editorial-footer__legal-item">Privacy Policy</span>
                        <span className="editorial-footer__legal-item">Terms of Service</span>
                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="editorial-footer__top-btn"
                        >
                            Back to Top ↑
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
