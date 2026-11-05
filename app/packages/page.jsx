import Navbar from '@/components/Navbar';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import Footer from '@/components/Footer';
import PackagesPage from '@/components/PackagesPage';

export const metadata = {
    title: 'Event Production Packages & Tiers — Wassup London',
    description: 'Explore Wassup London’s curated event production packages: Essential, Elevated, Grand Ballroom and Custom Blueprint tiers for weddings, parties and galas.',
    openGraph: {
        title: 'Event Production Packages & Tiers — Wassup London',
        description: 'Modular event production tiers combining concert-spec audio, intelligent lighting, live musicians, catering & bespoke staging.',
        url: 'https://wassuplondon.co.uk/packages',
        siteName: 'Wassup London',
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Event Production Packages & Tiers — Wassup London',
        description: 'Transparent, modular production tiers for London weddings, private parties & corporate galas.',
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
            <PackagesPage />
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
