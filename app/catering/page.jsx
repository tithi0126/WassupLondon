import Navbar from '@/components/Navbar';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import Footer from '@/components/Footer';
import CateringPage from '@/components/CateringPage';

export const metadata = {
    title: 'Artisanal Event & Wedding Catering London — Wassup London',
    description: 'Bespoke Indian, Punjabi, Gujarati, Pan-Asian and contemporary fusion event catering in London. Live chaat counters, robata grills, mixology bars & 100% halal/vegetarian menus.',
    openGraph: {
        title: 'Artisanal Event & Wedding Catering London — Wassup London',
        description: 'Heritage Indian, Pan-Asian and contemporary fusion banqueting, live culinary theatre & bespoke mixology across London and the UK.',
        url: 'https://wassuplondon.co.uk/catering',
        siteName: 'Wassup London',
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Artisanal Event & Wedding Catering London — Wassup London',
        description: 'Heritage Indian, Gujarati, Punjabi & Pan-Asian live catering and banqueting across London and the UK.',
    },
};

export default function Page() {
    return (
        <>
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <Navbar />
            </header>
            <CateringPage />
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
