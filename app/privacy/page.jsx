import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import { CONTACT_INFO } from '@/lib/data';
import { buildPageMetadata, getPageJsonLd } from '@/lib/seo';
import '@/app/styles/legal.css';

export const metadata = buildPageMetadata({
    title: 'Privacy Policy — UK GDPR, Data Protection & PECR | Wassup London',
    description:
        'Privacy Policy for www.wassuplondon.co.uk under the UK GDPR, Data Protection Act 2018, and PECR for Wassup London Events Ltd.',
    path: '/privacy',
    keywords: [
        'Wassup London privacy policy',
        'Wassup London Events Ltd GDPR',
        'www.wassuplondon.co.uk privacy',
    ],
});

export default function PrivacyPage() {
    const privacyJsonLd = getPageJsonLd('privacy');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
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
                            <span className="legal-doc-code">DOC REF: WL-PP-2026</span>
                        </div>
                        <h1 className="legal-title">
                            PRIVACY <em>POLICY.</em>
                        </h1>
                        <p className="legal-subtitle">
                            How Wassup London Events Ltd collects, safeguards, and processes personal data across <a href="https://www.wassuplondon.co.uk" style={{ color: 'var(--color-accent-gold, #c5a880)', textDecoration: 'underline' }}>www.wassuplondon.co.uk</a>, weddings, catering, and event productions.
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
                            <span className="legal-updated">Effective: 2026 · UK GDPR, DPA 2018 &amp; PECR</span>
                        </div>
                    </div>
                </section>

                {/* ── Structured Editorial Clauses ── */}
                <div className="legal-body">
                    <div className="legal-container">
                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">01</span>
                                <h2>Overview, Domain &amp; Data Controller</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    For the purposes of the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the <strong>Data Protection Act 2018</strong>, the data controller responsible for personal data collected through <strong>www.wassuplondon.co.uk</strong> and our event planning communications is <strong>Wassup London Events Ltd</strong> (&ldquo;Wassup London&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a company registered in {CONTACT_INFO.jurisdiction} (Company No. <strong>{CONTACT_INFO.companyNumber}</strong>, incorporated {CONTACT_INFO.incorporationDate}), based in {CONTACT_INFO.address}.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">02</span>
                                <h2>Information We Collect &amp; Special Category Data</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>We collect only the information necessary to plan, quote, and deliver your event safely and accurately:</p>
                                <ul>
                                    <li><strong>Client Contact Details:</strong> Full name, email address, telephone number, and WhatsApp contact details submitted when contacting our concierge.</li>
                                    <li><strong>Event &amp; Dietary Specifications:</strong> Event date, venue location, guest count, cultural or ceremonial preferences, allergen/dietary requirements, and audio-visual production briefs.</li>
                                    <li><strong>Special Category Data (UK GDPR Art. 9):</strong> Where you voluntarily share food allergies/medical dietary needs or religious ceremony traditions (e.g., Hindu, Sikh, Muslim, or Jain requirements), we process this strictly with your explicit consent solely to deliver safe catering and culturally respectful event coordination.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">03</span>
                                <h2>Lawful Bases &amp; How We Use Your Data</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>Under <strong>UK GDPR Article 6</strong>, your personal information is processed only on lawful grounds:</p>
                                <ul>
                                    <li><strong>Contract &amp; Pre-Contract Enquiries (Art. 6(1)(b)):</strong> Responding to enquiries, checking date availability, preparing tailored proposals or CAD renders, and delivering contracted event, DJ, and catering services.</li>
                                    <li><strong>Legitimate Interests (Art. 6(1)(f)):</strong> Coordinating access, RAMS, and logistics with accredited venues and vetted production specialists assigned to your event, and protecting website security.</li>
                                    <li><strong>Legal Obligations (Art. 6(1)(c)):</strong> Maintaining statutory accounting, UK HMRC tax, and food-safety compliance records.</li>
                                </ul>
                                <p>
                                    We never sell, rent, or trade your personal information to third parties for marketing purposes.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">04</span>
                                <h2>Cookies, Browser Storage &amp; PECR</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    In compliance with the UK <strong>Privacy and Electronic Communications Regulations (PECR)</strong>, <strong>www.wassuplondon.co.uk</strong> does not deploy third-party advertising trackers or behavioural marketing cookies. We use only strictly necessary browser session storage (<code>sessionStorage</code>) to remember that you have viewed the opening preloader within your active tab so it does not replay unnecessarily during navigation.
                                </p>
                                <p>
                                    Where you choose to initiate a conversation via external links to WhatsApp (<code>wa.me</code>), Instagram, or Facebook, your interaction with those platforms is governed by their respective privacy notices.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">05</span>
                                <h2>Data Security, Retention &amp; Transfers</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    We store client enquiry and event records using access-controlled systems and retain them only as long as reasonably necessary to fulfil contractual obligations and comply with statutory limitation periods and UK tax retention laws (typically up to 6 years following contract completion). Where destination weddings outside the UK require sharing logistics with overseas venues, appropriate UK international transfer safeguards are applied.
                                </p>
                            </div>
                        </section>

                        <section className="legal-clause">
                            <div className="legal-clause__head">
                                <span className="legal-clause__num">06</span>
                                <h2>Your UK GDPR Rights, ICO &amp; Contact</h2>
                            </div>
                            <div className="legal-clause__content">
                                <p>
                                    Under UK data protection law, you have the right to request access to, rectification of, erasure of, restriction of, or portability of your personal data, and to object to or withdraw consent for processing at any time. Valid requests are fulfilled without charge within one calendar month under UK GDPR Article 12.
                                </p>
                                <p>
                                    You also have the right to lodge a complaint at any time with the UK supervisory authority, the <strong>Information Commissioner&apos;s Office (ICO)</strong>, at{' '}
                                    <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer">ico.org.uk</a>, although we invite you to contact us first so we can resolve any concern promptly.
                                </p>
                                <div className="legal-contact-card">
                                    <span className="legal-contact-card__kicker">PRIVACY &amp; COMPLIANCE DESK</span>
                                    <p>
                                        For any data protection enquiries or subject access requests, please contact our atelier directly:
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

