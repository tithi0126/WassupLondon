import Navbar from '@/components/Navbar';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import Footer from '@/components/Footer';
import CorporatePage from '@/components/CorporatePage';
import { buildPageMetadata, getPageJsonLd } from '@/lib/seo';

export const metadata = buildPageMetadata({
    title: 'Corporate Event Production & Gala Dinners London — AV, Staging & Brand Activations | Wassup London',
    description:
        'End-to-end corporate event production in London for up to 2,500+ guests: black-tie awards galas, brand activations, product launches, company summits, broadcast stage lighting, P2.6 LED video walls & keynote AV.',
    path: '/corporate',
    ogImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
    ogImageAlt: 'Corporate gala dinner and conference stage production by Wassup London',
    keywords: [
        'corporate event production London',
        'gala dinner production London',
        'awards ceremony AV production UK',
        'brand activation agency London',
        'product launch event planner London',
        'corporate party planner London',
        'conference staging and AV hire London',
    ],
});

export default function Page() {
    const corporateJsonLd = getPageJsonLd('corporate');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateJsonLd) }}
            />
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <Navbar />
            </header>
            <main>
                <CorporatePage />
            </main>
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
