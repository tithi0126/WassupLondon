import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import { CONTACT_INFO } from '@/lib/data';
import '@/app/styles/legal.css';

export const metadata = {
    title: 'Terms of Service | Wassup London',
    description: 'Terms of Service and booking conditions for Wassup London Events Ltd.',
};

export default function TermsPage() {
    return (
        <>
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <Navbar />
            </header>
            <main className="legal-page">
                {/* ── Dark Editorial Hero Banner ── */}
                <section className="legal-hero">
                    <div className="legal-hero__inner">
                        <div className="legal-hero__meta">
                            <span className="legal-kicker">[ LEGAL &amp; COMPLIANCE · ATELIER DOSSIER ]</span>
                            <span className="legal-doc-code">DOC REF: WL-TOS-2026</span>
                        </div>
                        <h1 className="legal-title">
                            TERMS OF <em>SERVICE.</em>
                        </h1>
                        <p className="legal-subtitle">
                            Contractual framework, booking retainers, production logistics, and client engagement terms for Wassup London Events Ltd.
                        </p>
                        <div className="legal-hero__bar">
                            <div className="legal-nav-pills" role="navigation" aria-label="Legal Documents">
                                <Link href="/privacy" className="legal-nav-pill">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="legal-nav-pill is-active" aria-current="page">
                                    Terms of Service
                                </Link>
                            </div>
                            <span className="legal-updated">Effective: 2026 · Jurisdiction: England &amp; Wales</span>
                        </div>
                    </div>
                </section>

                {/* ── Structured Editorial Clauses ── */}
                <div className="legal-body">
                    <div className="legal-container">
                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">01</span>
                                <h2>Scope of Services</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    Wassup London Events Ltd provides bespoke luxury wedding architecture, mandap and floral styling, DJ and concert-grade audio-visual production, artisanal multi-cuisine catering, and corporate event management across London, the United Kingdom, and international destinations.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">02</span>
                                <h2>Quotations, Bookings &amp; Retainers</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>All client engagements are governed by the following reservation milestones:</p>
                                <ul>
                                    <li><strong>Proposal Validity:</strong> All proposals and package estimates issued via email or WhatsApp are subject to date and venue availability until confirmed with a signed booking agreement and retainer deposit.</li>
                                    <li><strong>Booking Retainer:</strong> A non-refundable booking retainer is required to lock in event dates, dedicated production hardware, culinary brigades, and performing artists.</li>
                                    <li><strong>Production Lock-In:</strong> Final guest headcounts, allergen/dietary matrices, and technical riders must be confirmed prior to the scheduled production lock-in date stated in your client agreement.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">03</span>
                                <h2>Venue Access &amp; Technical Requirements</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    Clients and host venues are responsible for providing safe load-in access, adequate three-phase or dedicated power distribution, acoustic limiter specifications, and necessary municipal or venue permits unless explicitly managed by Wassup London as part of a turnkey production package.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">04</span>
                                <h2>Intellectual Property</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    All branding, event photography, custom stage and CAD renders, menu concepts, and written content presented on this website or in client lookbooks remain the intellectual property of Wassup London Events Ltd and may not be reproduced or distributed without prior written consent.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">05</span>
                                <h2>Governing Law &amp; Concierge</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    These terms and all client contracts are governed by and construed in accordance with the laws of England and Wales.
                                </p>
                                <div className="legal-contact-card">
                                    <span className="legal-contact-card__kicker">CONTRACTUAL &amp; BOOKING ENQUIRIES</span>
                                    <p>
                                        For bespoke production agreements, venue rider coordination, or commercial inquiries, reach out to our directors:
                                    </p>
                                    <div className="legal-contact-card__links">
                                        <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                                        <span>·</span>
                                        <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                                            WhatsApp {CONTACT_INFO.whatsappNumber}
                                        </a>
                                        <span>·</span>
                                        <span>{CONTACT_INFO.address}</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="legal-back">
                            <Link href="/">← Back to Wassup London</Link>
                            <Link href="/privacy">Read Privacy Policy →</Link>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}

