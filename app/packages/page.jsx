import Navbar from '@/components/Navbar';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import Footer from '@/components/Footer';
import PackagesPage from '@/components/PackagesPage';
import { buildPageMetadata, getPageJsonLd } from '@/lib/seo';

export const metadata = buildPageMetadata({
    title: 'Event Production Packages & Tiers — Essential, Elevated, Grand Ballroom & Bespoke | Wassup London',
    description:
        'Explore Wassup London’s modular event and wedding production tiers: Essential (up to 120 guests), Elevated (150–350 guests), Grand Ballroom (350–800+ guests), and Custom Blueprint packages combining L-Acoustics sound, DMX lighting, LED walls, live musicians & catering.',
    path: '/packages',
    ogImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85',
    ogImageAlt: 'Wassup London luxury event and wedding production packages',
    keywords: [
        'wedding production packages London',
        'DJ and sound packages London',
        'Asian wedding packages UK',
        'all-inclusive event production London',
        'LED video wall and dance floor package',
        'bespoke wedding planning tiers UK',
    ],
});

export default function Page() {
    const packagesJsonLd = getPageJsonLd('packages');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesJsonLd) }}
            />
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <Navbar />
            </header>
            <main>
                <PackagesPage />
            </main>
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
