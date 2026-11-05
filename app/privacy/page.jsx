import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import { CONTACT_INFO } from '@/lib/data';

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
                <div className="legal-container">
                    <span className="legal-kicker">[ LEGAL &amp; COMPLIANCE ]</span>
                    <h1 className="legal-title">
                        PRIVACY <em>POLICY.</em>
                    </h1>
                    <p className="legal-updated">Last updated: 2026 · Wassup London Events Ltd</p>

                    <section className="legal-section">
                        <h2>1. Overview</h2>
                        <p>
                            Wassup London Events Ltd (&ldquo;Wassup London&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal data you share with us when inquiring about or booking weddings, private celebrations, catering, DJ &amp; sound production, and corporate events.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Information We Collect</h2>
                        <p>We collect only the information necessary to plan, quote, and deliver your event:</p>
                        <ul>
                            <li>Contact details (name, email address, phone number, WhatsApp contact).</li>
                            <li>Event specifications (event date, venue location, guest count, dietary requirements, and production preferences).</li>
                            <li>Technical usage data (standard anonymous browser/device analytics to maintain website performance).</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. How We Use Your Data</h2>
                        <p>Your personal information is used strictly to:</p>
                        <ul>
                            <li>Respond to your inquiries and prepare tailored event proposals or tasting appointments.</li>
                            <li>Coordinate logistics with venues and vetted production staff assigned to your event.</li>
                            <li>Comply with UK legal, tax, and safety obligations.</li>
                        </ul>
                        <p>We never sell, rent, or trade your personal information to third parties for marketing purposes.</p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Data Security &amp; Retention</h2>
                        <p>
                            We store client inquiry and event records securely and retain them only as long as necessary to fulfil contractual obligations and comply with UK statutory requirements under the UK GDPR and Data Protection Act 2018.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Your Rights &amp; Contact</h2>
                        <p>
                            Under UK data protection law, you have the right to request access to, correction of, or deletion of your personal data at any time. For any privacy inquiries, please contact us at{' '}
                            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a> or write to us at {CONTACT_INFO.address}.
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

