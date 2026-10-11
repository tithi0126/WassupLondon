'use client';

import Navbar from '@/components/Navbar';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import Footer from '@/components/Footer';
import DJEntertainmentPage from '@/components/DJEntertainmentPage';

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
