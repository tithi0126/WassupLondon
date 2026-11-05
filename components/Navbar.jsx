'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { CONTACT_INFO } from '@/lib/data';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [waOpen, setWaOpen] = useState(false);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
            if (typeof window !== 'undefined' && window.__lenis) {
                window.__lenis.stop();
            }
            const onEsc = (e) => {
                if (e.key === 'Escape') setMobileOpen(false);
            };
            document.addEventListener('keydown', onEsc);
            return () => {
                document.body.style.overflow = '';
                if (typeof window !== 'undefined' && window.__lenis) {
                    window.__lenis.start();
                }
                document.removeEventListener('keydown', onEsc);
            };
        } else {
            document.body.style.overflow = '';
            if (typeof window !== 'undefined' && window.__lenis) {
                window.__lenis.start();
            }
        }
    }, [mobileOpen]);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const footerEl = document.querySelector('.main-footer, .editorial-footer');

        // Start in dark mode (over hero)
        if (navbar) {
            navbar.classList.add('on-dark');
            navbar.classList.remove('on-light');
        }

        const updateNavbarColor = () => {
            if (!navbar) return;
            const scrollPos = window.scrollY + navbar.offsetHeight / 2;
            const contentSection = document.querySelector('.content-section');

            if (contentSection && footerEl) {
                const contentTop = contentSection.getBoundingClientRect().top + window.scrollY;

                const showreelSection = document.querySelector('#showreel-section');
                const showreelTop = showreelSection ? showreelSection.getBoundingClientRect().top + window.scrollY : Infinity;

                const serviceCardsSection = document.querySelector('.service-cards-wrapper');
                const serviceCardsTop = serviceCardsSection ? serviceCardsSection.getBoundingClientRect().top + window.scrollY : Infinity;

                const partnersSection = document.querySelector('.editorial-partners');
                const partnersTop = partnersSection ? partnersSection.getBoundingClientRect().top + window.scrollY : Infinity;
                const footerTop = footerEl.getBoundingClientRect().top + window.scrollY;

                if (scrollPos >= footerTop) {
                    navbar.classList.add('on-dark');
                    navbar.classList.remove('on-light');
                } else if (scrollPos >= partnersTop) {
                    navbar.classList.add('on-light');
                    navbar.classList.remove('on-dark');
                } else if (scrollPos >= serviceCardsTop) {
                    navbar.classList.add('on-light');
                    navbar.classList.remove('on-dark');
                } else if (scrollPos >= showreelTop) {
                    navbar.classList.add('on-dark');
                    navbar.classList.remove('on-light');
                } else if (scrollPos >= contentTop) {
                    navbar.classList.add('on-light');
                    navbar.classList.remove('on-dark');
                } else {
                    navbar.classList.add('on-dark');
                    navbar.classList.remove('on-light');
                }
                return;
            }

            // Subpage light/dark detection
            const lightSections = document.querySelectorAll(
                '.wd2-intro, .wd2-story, .wd2-events, .wd2-gallery, .wd2-quote, .ct2-hero, .ct2-philosophy, .ct2-menus, .ct2-quote'
            );
            let isOverLight = false;
            lightSections.forEach((sec) => {
                const rect = sec.getBoundingClientRect();
                const top = rect.top + window.scrollY;
                const bottom = top + rect.height;
                if (scrollPos >= top && scrollPos < bottom) {
                    isOverLight = true;
                }
            });

            if (isOverLight) {
                navbar.classList.add('on-light');
                navbar.classList.remove('on-dark');
            } else {
                navbar.classList.add('on-dark');
                navbar.classList.remove('on-light');
            }
        };

        window.addEventListener('scroll', updateNavbarColor, { passive: true });
        updateNavbarColor();

        const cleanups = [];
        const overlay = document.querySelector('.nav-overlay');
        if (overlay) {
            gsap.set(overlay, { opacity: 0, visibility: 'hidden', pointerEvents: 'none' });
        }

        const showOverlay = () => {
            if (overlay) {
                gsap.set(overlay, { visibility: 'visible', pointerEvents: 'auto' });
                gsap.to(overlay, { opacity: 1, duration: 0.3, ease: 'power2.out' });
            }
        };

        const hideOverlay = () => {
            if (overlay) {
                gsap.to(overlay, {
                    opacity: 0,
                    duration: 0.25,
                    ease: 'power2.in',
                    onComplete: () => gsap.set(overlay, { visibility: 'hidden', pointerEvents: 'none' }),
                });
            }
        };

        // ─── WhatsApp Popout Hover & Click ───
        const waTrigger = document.querySelector('.nav-hover-trigger');
        const waBtn = document.querySelector('.nav-wa-trigger');
        const waBox = document.querySelector('.nav-wa-box');

        if (waTrigger && waBox) {
            gsap.set(waBox, { visibility: 'hidden', scale: 0.96, opacity: 0, transformOrigin: 'top right' });

            const openWa = () => {
                setWaOpen(true);
                gsap.killTweensOf(waBox);
                showOverlay();
                gsap.set(waBox, { visibility: 'visible' });
                gsap.to(waBox, { scale: 1, opacity: 1, duration: 0.35, ease: 'power3.out' });
            };

            const closeWa = () => {
                setWaOpen(false);
                gsap.killTweensOf(waBox);
                hideOverlay();
                gsap.to(waBox, {
                    scale: 0.96,
                    opacity: 0,
                    duration: 0.25,
                    ease: 'power2.in',
                    onComplete: () => gsap.set(waBox, { visibility: 'hidden' }),
                });
            };

            const onToggleClick = (e) => {
                e.stopPropagation();
                if (waBox.style.visibility === 'visible') {
                    closeWa();
                } else {
                    openWa();
                }
            };

            const onKeyDown = (e) => {
                if (e.key === 'Escape' && waBox.style.visibility === 'visible') {
                    closeWa();
                }
            };

            waTrigger.addEventListener('mouseenter', openWa);
            waTrigger.addEventListener('mouseleave', closeWa);
            if (waBtn) waBtn.addEventListener('click', onToggleClick);
            if (overlay) overlay.addEventListener('click', closeWa);
            document.addEventListener('keydown', onKeyDown);

            cleanups.push(() => {
                waTrigger.removeEventListener('mouseenter', openWa);
                waTrigger.removeEventListener('mouseleave', closeWa);
                if (waBtn) waBtn.removeEventListener('click', onToggleClick);
                if (overlay) overlay.removeEventListener('click', closeWa);
                document.removeEventListener('keydown', onKeyDown);
            });
        }

        return () => {
            window.removeEventListener('scroll', updateNavbarColor);
            cleanups.forEach((fn) => fn && fn());
        };
    }, []);

    return (
        <>
            <div
                className="nav-overlay"
                onClick={() => {
                    setMobileOpen(false);
                    setWaOpen(false);
                }}
            />
            <header className={`navbar-container ${mobileOpen ? 'mobile-open' : ''}`}>
                <nav className="navbar" role="navigation" aria-label="Main Navigation">
                    {/* Left: Brand Crest & Typographic Logo (Far Left) */}
                    <div className="nav-left">
                        <Link href="/" className="logo-brand-link" aria-label="Wassup London Home">
                            <div className="logo-brand-crest-frame">
                                <img
                                    src="/logo.png"
                                    alt="Wassup London Crest"
                                    className="logo-brand-crest"
                                />
                            </div>
                            <div className="logo-brand-text">
                                <span className="logo-brand-title">WASSUP LONDON</span>
                                <span className="logo-brand-sub">WEDDINGS &amp; EVENTS</span>
                            </div>
                        </Link>
                    </div>

                    {/* Center: Desktop Discipline Links (Services removed) */}
                    <div className="nav-center">
                        <div className="nav-links-desktop">
                            <Link href="/weddings" className="nav-link">Weddings</Link>
                            <Link href="/dj-entertainment" className="nav-link">DJ &amp; Sound</Link>
                            <Link href="/catering" className="nav-link">Catering</Link>
                            <Link href="/corporate" className="nav-link">Corporate</Link>
                            <Link href="/packages" className="nav-link">Packages</Link>
                        </div>
                    </div>

                    {/* Right: Socials (Instagram & Facebook) + WhatsApp Concierge + Inquiry CTA */}
                    <div className="nav-right">
                        {/* Social Redirect Icons */}
                        <div className="nav-social-links" role="group" aria-label="Social Profiles">
                            <a
                                href={CONTACT_INFO.instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-social-btn"
                                aria-label="Follow Wassup London on Instagram"
                                title="Instagram"
                            >
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a
                                href={CONTACT_INFO.facebookUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-social-btn"
                                aria-label="Follow Wassup London on Facebook"
                                title="Facebook"
                            >
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                        </div>

                        {/* WhatsApp Concierge */}
                        <div className="nav-hover-trigger">
                            <button
                                type="button"
                                className="nav-wa-trigger"
                                aria-label="WhatsApp Concierge"
                                aria-expanded={waOpen}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                                <span className="nav-wa-label">WhatsApp</span>
                            </button>

                            {/* WhatsApp Popout */}
                            <div className="nav-popout nav-wa-box">
                                <div className="nav-popout-inner">
                                    <span className="nav-popout-kicker">INSTANT CONCIERGE</span>
                                    <h4 className="nav-wa-title">Direct Line</h4>
                                    <p className="nav-wa-desc">
                                        Connect directly with our planning directors for availability and quick inquiries.
                                    </p>
                                    <div className="nav-wa-qr-frame">
                                        <img
                                            src="/assets/wa_qr_code.png"
                                            className="nav-wa-qr"
                                            alt="WhatsApp QR Code"
                                        />
                                    </div>
                                    <a
                                        href={CONTACT_INFO.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="nav-wa-btn"
                                    >
                                        Chat Online →
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a
                            href={CONTACT_INFO.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-inquire-btn"
                        >
                            <span>Inquire</span>
                        </a>

                        {/* Mobile Hamburger Toggle */}
                        <button
                            type="button"
                            className="nav-mobile-toggle"
                            aria-label="Toggle Navigation"
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <span className={mobileOpen ? 'nav-burger-open' : ''} />
                        </button>
                    </div>
                </nav>

                {/* Mobile Drawer */}
                <div className={`nav-mobile-drawer ${mobileOpen ? 'is-open' : ''}`}>
                    <div className="nav-mobile-drawer-inner">
                        <div className="nav-mobile-brand">
                            <img src="/logo.png" alt="Wassup London" className="nav-mobile-crest" />
                            <div>
                                <span className="nav-mobile-brand-title">WASSUP LONDON</span>
                                <span className="nav-mobile-kicker">WEDDINGS &amp; EVENTS ATELIER</span>
                            </div>
                        </div>
                        <div className="nav-mobile-links">
                            <Link href="/weddings" onClick={() => setMobileOpen(false)}>Weddings</Link>
                            <Link href="/dj-entertainment" onClick={() => setMobileOpen(false)}>DJ &amp; Sound</Link>
                            <Link href="/catering" onClick={() => setMobileOpen(false)}>Artisanal Catering</Link>
                            <Link href="/corporate" onClick={() => setMobileOpen(false)}>Corporate Events</Link>
                            <Link href="/packages" onClick={() => setMobileOpen(false)}>Packages &amp; Tiers</Link>
                        </div>
                        <div className="nav-mobile-socials">
                            <a
                                href={CONTACT_INFO.instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-mobile-social-link"
                            >
                                Instagram ↗
                            </a>
                            <a
                                href={CONTACT_INFO.facebookUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-mobile-social-link"
                            >
                                Facebook ↗
                            </a>
                        </div>
                        <div className="nav-mobile-footer">
                            <a href={`mailto:${CONTACT_INFO.email}`} className="nav-mobile-wa">
                                Email: {CONTACT_INFO.email}
                            </a>
                            <a
                                href={CONTACT_INFO.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-mobile-inquire"
                            >
                                Request Proposal on WhatsApp ↗
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
