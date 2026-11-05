import Navbar from '@/components/Navbar';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import Footer from '@/components/Footer';
import CorporatePage from '@/components/CorporatePage';

export const metadata = {
    title: 'Corporate Event Production & Gala Dinners London — Wassup London',
    description: 'End-to-end corporate event production in London: awards galas, brand activations, product launches, company summits, broadcast stage lighting & keynote AV.',
    openGraph: {
        title: 'Corporate Event Production & Gala Dinners London — Wassup London',
        description: 'High-impact corporate galas, brand activations, keynote AV & turnkey event production across London and Europe.',
        url: 'https://www.wassuplondon.co.uk/corporate',
        siteName: 'Wassup London',
        images: [
            {
                url: '/logo.png',
                width: 1024,
                height: 1024,
                alt: 'Wassup London Weddings & Events Crest',
            },
        ],
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Corporate Event Production & Gala Dinners London — Wassup London',
        description: 'Precision corporate event production, awards galas, brand activations & stagecraft in London.',
        images: ['/logo.png'],
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
            <CorporatePage />
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
