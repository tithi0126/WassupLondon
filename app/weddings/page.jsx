'use client';

import Navbar from '@/components/Navbar';
import SvgSymbols from '@/components/SvgSymbols';
import SmoothScroll from '@/components/SmoothScroll';
import CursorBubble from '@/components/CursorBubble';
import Footer from '@/components/Footer';
import WeddingPage from '@/components/WeddingPage';

export default function WeddingsPage() {
    return (
        <>
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <header className="main-header">
                <Navbar />
            </header>
            <WeddingPage />
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
