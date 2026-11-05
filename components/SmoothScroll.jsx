'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.5,
        });

        const onTick = (time) => {
            lenis.raf(time * 1000);
        };

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(onTick);
        gsap.ticker.lagSmoothing(0);

        // Dynamic Tab Title Change
        let savedTitle = document.title;
        const handleVisibility = () => {
            if (document.hidden) {
                savedTitle = document.title;
                document.title = "Hey, over here!👋 - Wassup London";
            } else {
                document.title = savedTitle;
            }
        };
        document.addEventListener('visibilitychange', handleVisibility);

        // Store lenis on window so other components can access it
        window.__lenis = lenis;

        return () => {
            gsap.ticker.remove(onTick);
            lenis.destroy();
            document.removeEventListener('visibilitychange', handleVisibility);
            delete window.__lenis;
        };
    }, []);

    return null;
}
