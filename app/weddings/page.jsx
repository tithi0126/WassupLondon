import Navbar from '@/components/Navbar';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import Footer from '@/components/Footer';
import WeddingPage from '@/components/WeddingPage';
import { getPageJsonLd } from '@/lib/seo';

export default function WeddingsPage() {
    const weddingsJsonLd = getPageJsonLd('weddings');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingsJsonLd) }}
            />
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <Navbar />
            </header>
            <main>
                <WeddingPage />
            </main>
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
