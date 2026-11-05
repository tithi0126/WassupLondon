import Navbar from '@/components/Navbar';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import Footer from '@/components/Footer';
import DJEntertainmentPage from '@/components/DJEntertainmentPage';

export const metadata = {
    title: 'DJ, Sound & Stage Production London — Wassup London',
    description: 'Concert-grade L-Acoustics & d&b sound rigs, intelligent moving-head lighting, LED dance floors, resident club DJs, live saxophonists & dhol drummers across London and the UK.',
    openGraph: {
        title: 'DJ, Sound & Stage Production London — Wassup London',
        description: 'Tour-grade sound engineering, intelligent lighting rigs, LED dance floors, resident DJs & live musicians for weddings, club nights and private galas.',
        url: 'https://www.wassuplondon.co.uk/dj-entertainment',
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
        title: 'DJ, Sound & Stage Production London — Wassup London',
        description: 'Concert-spec sound systems, intelligent lighting, LED dance floors & resident DJs across London and the UK.',
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
            <DJEntertainmentPage />
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
