import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';

export const metadata = {
    title: 'Page Not Found | Wassup London',
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <>
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <Navbar />
            </header>
            <main className="not-found-main" role="main" aria-labelledby="not-found-heading">
                <div className="not-found-container">
                    <div className="not-found-crest-wrap">
                        <img
                            src="/logo.png"
                            alt="Wassup London Crest"
                            className="not-found-crest"
                        />
                    </div>
                    <span className="not-found-kicker">[ 404 / BEYOND THE REPERTORY ]</span>
                    <h1 id="not-found-heading" className="not-found-title">
                        AN UNMAPPED <em>DESTINATION.</em>
                    </h1>
                    <p className="not-found-copy">
                        The page you are looking for has been moved or does not exist in our atelier repertory.
                    </p>
                    <div className="not-found-actions">
                        <Link href="/" className="not-found-btn-outline">
                            ← Back to Home
                        </Link>
                        <Link href="/packages" className="not-found-btn-primary">
                            Plan Your Event →
                        </Link>
                    </div>
                </div>
            </main>
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
