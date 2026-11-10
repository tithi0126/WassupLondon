import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import Footer from '@/components/Footer';
import CateringPage from '@/components/CateringPage';
import { buildPageMetadata, getPageJsonLd } from '@/lib/seo';

export const metadata = buildPageMetadata({
    title: 'Artisanal Event & Wedding Catering London — Indian, Gujarati, Punjabi & Pan-Asian | Wassup London',
    description:
        'Bespoke Heritage Indian, Punjabi, Gujarati, Pan-Asian, and contemporary Mediterranean fusion event catering in London. Live chaat street counters, robata & tandoor grills, bespoke mixology bars & 100% Halal, Vegetarian, Vegan, and Jain menus.',
    path: '/catering',
    ogImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85',
    ogImageAlt: 'Artisanal Indian, Pan-Asian and fusion banqueting by Wassup London',
    keywords: [
        'Indian wedding catering London',
        'Gujarati wedding caterers London',
        'Punjabi wedding catering UK',
        'Pan-Asian event catering London',
        'live chaat counter hire London',
        'halal wedding catering London',
        'vegetarian & Jain wedding caterers UK',
        'bespoke cocktail bar hire London',
    ],
});

export default function Page() {
    const cateringJsonLd = getPageJsonLd('catering');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringJsonLd) }}
            />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <Navbar />
            </header>
            <main>
                <CateringPage />
            </main>
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
