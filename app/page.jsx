import SvgSymbols from '@/components/SvgSymbols';
import Navbar from '@/components/Navbar';
import VimeoHero from '@/components/VimeoHero';
import ServiceCards from '@/components/ServiceCards';
import MotionCards from '@/components/MotionCards';
import Showreel from '@/components/Showreel';
import Footer from '@/components/Footer';
import TransitionScribble from '@/components/TransitionScribble';
import CursorBubble from '@/components/CursorBubble';
import SmoothScroll from '@/components/SmoothScroll';
import DiscoIntro from '@/components/DiscoIntro';
import HorizontalWords from '@/components/HorizontalWords';
import { buildPageMetadata, getPageJsonLd } from '@/lib/seo';

export const metadata = buildPageMetadata({
    title: 'Wassup London — Best Events in London | Bespoke Weddings, DJ, Catering & Event Production',
    description:
        'Looking for the best events in London? Based in Paddington, Central London, Wassup London unites bespoke wedding planning, club-tier L-Acoustics DJ & lighting production, artisanal Indian & Pan-Asian catering, and corporate galas under one roof.',
    path: '/',
    keywords: [
        'events in London',
        'best events in London',
        'best event company in London',
        'luxury wedding planner London',
        'Asian wedding planner London',
        'event production company London',
        'Indian wedding DJ London',
        'wedding catering London',
        'mandap decor London',
        'corporate event planner London',
    ],
});

export default function Home() {
    const homeJsonLd = getPageJsonLd('home');

    return (
        <DiscoIntro>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
            />
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <Navbar />
                <VimeoHero />
            </header>
            <HorizontalWords />
            <main>
                <div className="content-section motion-cards-wrapper">
                    <MotionCards />
                </div>
                <Showreel />
                <div className="content-section service-cards-wrapper">
                    <ServiceCards />
                </div>
            </main>
            <footer className="main-footer">
                <Footer />
            </footer>
            <TransitionScribble />
        </DiscoIntro>
    );
}
