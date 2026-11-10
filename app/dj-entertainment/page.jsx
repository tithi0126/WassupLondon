import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import Footer from '@/components/Footer';
import DJEntertainmentPage from '@/components/DJEntertainmentPage';
import { buildPageMetadata, getPageJsonLd } from '@/lib/seo';

export const metadata = buildPageMetadata({
    title: 'DJ, Sound & Stage Production London — L-Acoustics, Moving Head FX & LED Dance Floors | Wassup London',
    description:
        'Concert-grade L-Acoustics & d&b audiotechnik sound rigs, GrandMA3 intelligent moving-head lighting, 3D infinity LED dance floors, open-format resident club DJs, live saxophonists & Punjabi dhol drummers across London and the UK.',
    path: '/dj-entertainment',
    ogImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    ogImageAlt: 'Wassup London concert-grade DJ, laser, and stage production',
    keywords: [
        'wedding DJ London',
        'Indian wedding DJ London',
        'Bollywood & club DJ hire UK',
        'L-Acoustics sound hire London',
        'LED dance floor hire London',
        'live dhol drummers London',
        'live saxophonist for wedding London',
        'event lighting and stage production UK',
    ],
});

export default function Page() {
    const djJsonLd = getPageJsonLd('dj-entertainment');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(djJsonLd) }}
            />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <Navbar />
            </header>
            <main>
                <DJEntertainmentPage />
            </main>
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
