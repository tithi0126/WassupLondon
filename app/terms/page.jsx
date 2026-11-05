import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import { CONTACT_INFO } from '@/lib/data';

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
                <div className="legal-container">
                    <span className="legal-kicker">[ LEGAL &amp; COMPLIANCE ]</span>
                    <h1 className="legal-title">
                        TERMS OF <em>SERVICE.</em>
                    </h1>
                    <p className="legal-updated">Last updated: 2026 · Wassup London Events Ltd</p>

                    <section className="legal-section">
                        <h2>1. Scope of Services</h2>
                        <p>
                            Wassup London Events Ltd provides bespoke event planning, mandap and floral styling, DJ and concert-grade audio-visual production, artisanal catering, and corporate event management across London, the United Kingdom, and international destinations.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Quotations, Bookings &amp; Deposits</h2>
                        <ul>
                            <li>All proposals and package estimates issued via email or WhatsApp are subject to date and venue availability until confirmed with a signed booking agreement and deposit.</li>
                            <li>A non-refundable booking retainer is required to secure event dates, production hardware, culinary teams, and performing artists.</li>
                            <li>Final guest headcounts, dietary specifications, and technical riders must be confirmed prior to the scheduled production lock-in date stated in your client contract.</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. Venue Access &amp; Technical Requirements</h2>
                        <p>
                            Clients and host venues are responsible for providing safe load-in access, adequate power distribution, and necessary venue permits unless explicitly managed by Wassup London as part of a turnkey production package.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Intellectual Property</h2>
                        <p>
                            All branding, photography, custom stage renders, and written content on this website remain the intellectual property of Wassup London Events Ltd and may not be reproduced without prior written permission.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Governing Law &amp; Contact</h2>
                        <p>
                            These terms are governed by the laws of England and Wales. For contractual inquiries, please reach out to{' '}
                            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a> or WhatsApp{' '}
                            <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                                {CONTACT_INFO.whatsappNumber}
                            </a>.
                        </p>
                    </section>

                    <div className="legal-back">
                        <Link href="/">← Back to Wassup London</Link>
                    </div>
                </div>
            </main>
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}

