import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import { CONTACT_INFO } from '@/lib/data';
import '@/app/styles/legal.css';

export const metadata = {
    title: 'Privacy Policy | Wassup London',
    description: 'Privacy Policy and data protection guidelines for Wassup London Events Ltd.',
};

export default function PrivacyPage() {
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
                            <span className="legal-doc-code">DOC REF: WL-PP-2026</span>
                        </div>
                        <h1 className="legal-title">
                            PRIVACY <em>POLICY.</em>
                        </h1>
                        <p className="legal-subtitle">
                            How Wassup London Events Ltd collects, safeguards, and processes client information across bespoke weddings, culinary productions, and private events.
                        </p>
                        <div className="legal-hero__bar">
                            <div className="legal-nav-pills" role="navigation" aria-label="Legal Documents">
                                <Link href="/privacy" className="legal-nav-pill is-active" aria-current="page">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="legal-nav-pill">
                                    Terms of Service
                                </Link>
                            </div>
                            <span className="legal-updated">Effective: 2026 · UK GDPR &amp; Data Protection Act 2018</span>
                        </div>
                    </div>
                </section>

                {/* ── Structured Editorial Clauses ── */}
                <div className="legal-body">
                    <div className="legal-container">
                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">01</span>
                                <h2>Overview &amp; Data Controller</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    Wassup London Events Ltd (&ldquo;Wassup London&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal data you share with us when inquiring about or booking weddings, private celebrations, artisanal catering, DJ &amp; sound production, and corporate events across London, the United Kingdom, and international destinations.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">02</span>
                                <h2>Information We Collect</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>We collect only the information necessary to plan, quote, and deliver your event with precision:</p>
                                <ul>
                                    <li><strong>Client Contact Details:</strong> Full name, email address, telephone number, and WhatsApp contact handle.</li>
                                    <li><strong>Event Specifications:</strong> Event date, venue location, estimated guest count, cultural or ceremonial traditions, dietary/allergen requirements, and technical production preferences.</li>
                                    <li><strong>Technical Telemetry:</strong> Standard anonymous browser and device diagnostics used strictly to maintain website security and playback performance.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">03</span>
                                <h2>How We Use Your Data</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>Your personal information is processed strictly to:</p>
                                <ul>
                                    <li>Respond to your inquiries and prepare tailored event proposals, production renders, or private tasting appointments.</li>
                                    <li>Coordinate event logistics with accredited venues and vetted production specialists assigned to your event.</li>
                                    <li>Comply with UK legal, financial, and health-and-safety obligations.</li>
                                </ul>
                                <p>
                                    We never sell, rent, or trade your personal information to third parties for marketing purposes.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">04</span>
                                <h2>Data Security &amp; Retention</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    We store client inquiry and event records securely with restricted internal access and retain them only as long as necessary to fulfil contractual obligations and comply with UK statutory requirements under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">05</span>
                                <h2>Your Rights &amp; Contact</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    Under UK data protection law, you have the right to request access to, correction of, restriction of, or deletion of your personal data at any time.
                                </p>
                                <div className="legal-contact-card">
                                    <span className="legal-contact-card__kicker">PRIVACY &amp; COMPLIANCE DESK</span>
                                    <p>
                                        For any data protection inquiries or subject access requests, please contact our atelier directly:
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
                            <Link href="/terms">Read Terms of Service →</Link>
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

