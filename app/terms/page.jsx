import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import { CONTACT_INFO } from '@/lib/data';
import { buildPageMetadata, getPageJsonLd } from '@/lib/seo';
import '@/app/styles/legal.css';

export const metadata = buildPageMetadata({
    title: 'Terms of Service — Booking Conditions & UK Compliance | Wassup London',
    description:
        'Terms of Service for www.wassuplondon.co.uk, governed by the laws of England & Wales. Covers booking retainers, Consumer Rights Act 2015, catering allergens, sound compliance, and client agreements for Wassup London Events Ltd.',
    path: '/terms',
    keywords: [
        'Wassup London terms of service',
        'Wassup London booking terms',
        'www.wassuplondon.co.uk terms',
    ],
});

export default function TermsPage() {
    const termsJsonLd = getPageJsonLd('terms');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
            />
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
                            Website terms for <a href="https://www.wassuplondon.co.uk" style={{ color: 'var(--color-accent-gold, #c5a880)', textDecoration: 'underline' }}>www.wassuplondon.co.uk</a>, contractual framework, statutory UK consumer disclosures, and production conditions for Wassup London Events Ltd.
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
                            <span className="legal-updated">Effective: 2026 · Courts of England &amp; Wales</span>
                        </div>
                    </div>
                </section>

                {/* ── Structured Editorial Clauses ── */}
                <div className="legal-body">
                    <div className="legal-container">
                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">01</span>
                                <h2>Company Identity, Domain &amp; Scope</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    These Terms of Service govern your use of <strong>www.wassuplondon.co.uk</strong> and set out the baseline commercial and consumer principles for event production services supplied by <strong>Wassup London Events Ltd</strong> (&ldquo;Wassup London&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a private company incorporated in {CONTACT_INFO.jurisdiction} on {CONTACT_INFO.incorporationDate} under Companies House registration number <strong>{CONTACT_INFO.companyNumber}</strong>, operating from {CONTACT_INFO.address}.
                                </p>
                                <p>
                                    Our services include bespoke wedding planning, mandap and floral styling, DJ and concert-grade audio-visual production, artisanal multi-cuisine catering, and corporate event management across London, the United Kingdom, and destination venues. Written client booking agreements supersede these general website terms where express project schedules differ.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">02</span>
                                <h2>Quotations, Retainers &amp; UK Consumer Law</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>All client reservations and distance enquiries are structured in accordance with the <strong>Consumer Rights Act 2015</strong> and the <strong>Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013</strong>:</p>
                                <ul>
                                    <li><strong>Proposal Validity:</strong> All written quotations, menus, and technical specifications issued via email or WhatsApp are subject to date, hardware, and venue availability until confirmed by a signed client agreement and cleared booking retainer.</li>
                                    <li><strong>Booking Retainer:</strong> A booking retainer is required to secure event dates, reserve dedicated audio-visual hardware, allocate culinary brigades, and lock in performing artists. Retainers are applied to the final contract balance and are governed by your signed agreement and your statutory rights under the Consumer Rights Act 2015 (including where services are not performed with reasonable care and skill or are cancelled by us).</li>
                                    <li><strong>Specific-Date Event Exemption (Reg. 28(1)(h)):</strong> Under the Consumer Contracts Regulations 2013, contracts for catering or leisure/entertainment services booked for a specific date or period of performance, as well as bespoke custom-fabricated décor made to client specification, do not carry an automatic 14-day statutory cooling-off cancellation right once confirmed for that scheduled date.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">03</span>
                                <h2>Cancellations, Postponements &amp; Force Majeure</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    Requests to reschedule or cancel a confirmed event must be submitted in writing to{' '}
                                    <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>. Where a client cancels prior to delivery, any refund or retention is assessed transparently by reference to reasonable administrative costs, pre-booked artist fees, custom fabrication, and non-recoverable third-party commitments already incurred at the date of notice.
                                </p>
                                <p>
                                    Neither party shall be in breach of contract where performance is prevented by circumstances genuinely beyond reasonable control (Force Majeure). Where an event becomes impossible or frustrated under the <strong>Law Reform (Frustrated Contracts) Act 1943</strong>, the parties will act in good faith to offer a mutually agreeable transfer date or reconcile recoverable costs fairly.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">04</span>
                                <h2>Venue Safety, Sound Compliance &amp; Allergens</h2>
                            </div>
                            <div className="legal-clause__content">
                                <ul>
                                    <li><strong>Venue Technical Access:</strong> Clients and host venues must ensure safe load-in/load-out access, suitable dedicated electrical distribution (including three-phase power where specified), and any required local authority or venue permissions.</li>
                                    <li><strong>Noise Limiters &amp; Safety Certifications:</strong> Wassup London supplies PAT-tested equipment, Public Liability Insurance (PLI), and venue Risk Assessments and Method Statements (RAMS). Acoustic output remains subject to venue decibel limiters and the <strong>Control of Noise at Work Regulations 2005</strong>; Wassup London cannot be held liable for SPL reductions or power cut-offs enforced by third-party venue limiters.</li>
                                    <li><strong>Catering &amp; Food Information Regulations 2014:</strong> Final guest numbers and guest allergen/dietary matrices (covering all 14 UK regulated allergens) must be submitted prior to the contractual lock-in deadline. While our Halal, Vegetarian, Vegan, and Jain kitchens follow strict cross-contamination protocols, clients must notify guests with severe anaphylactic allergies before service.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">05</span>
                                <h2>Intellectual Property</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    All branding, text, audio-visual media, custom stage and 3D CAD renders, culinary menu architecture, and source materials published on <strong>www.wassuplondon.co.uk</strong> or issued in private client dossiers remain the copyright and intellectual property of Wassup London Events Ltd under the <strong>Copyright, Designs and Patents Act 1988</strong> and may not be reproduced or distributed commercially without prior written consent.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">06</span>
                                <h2>Limitation of Liability</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    Nothing in these Terms of Service or any client agreement limits or excludes liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot lawfully be excluded or restricted under the <strong>Unfair Contract Terms Act 1977</strong> or the <strong>Consumer Rights Act 2015</strong>.
                                </p>
                                <p>
                                    Subject to the foregoing, Wassup London shall not be liable for indirect or consequential losses in commercial (business-to-business) contracts, and website content on <strong>www.wassuplondon.co.uk</strong> is provided for general portfolio and guide purposes without binding warranty until formal written booking confirmation.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">07</span>
                                <h2>Governing Law, UK Jurisdiction &amp; Concierge</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    These terms and all client contracts (whether contractual or non-contractual) are governed by and construed in accordance with the <strong>laws of England and Wales</strong>. The <strong>courts of England and Wales</strong> shall have exclusive jurisdiction to settle any dispute arising out of or in connection with these terms or your use of <strong>www.wassuplondon.co.uk</strong>, save that UK consumers domiciled in Scotland or Northern Ireland retain any mandatory statutory right to bring proceedings in their local UK courts.
                                </p>
                                <div className="legal-contact-card">
                                    <span className="legal-contact-card__kicker">CONTRACTUAL &amp; BOOKING ENQUIRIES</span>
                                    <p>
                                        For bespoke production agreements, venue rider coordination, PLI/RAMS documentation, or commercial enquiries, reach out to our directors:
                                    </p>
                                    <div className="legal-contact-card__links">
                                        <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                                        <span>·</span>
                                        <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                                            WhatsApp {CONTACT_INFO.whatsappNumber}
                                        </a>
                                        <span>·</span>
                                        <span>Company No. {CONTACT_INFO.companyNumber}</span>
                                        <span>·</span>
                                        <span>www.wassuplondon.co.uk</span>
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

