'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function TransitionScribble() {
    const curtainRef = useRef(null);

    useEffect(() => {
        const logoClickables = document.querySelectorAll('.logo-brand-link, .logo-wassup');
        const curtain = curtainRef.current;
        if (!logoClickables.length || !curtain) return;

        const onLogoClick = (e) => {
            // If already at top or transitioning, just let normal behavior happen
            if (window.scrollY === 0) return;
            e.preventDefault();

            gsap.timeline()
                .set(curtain, { display: 'block', yPercent: 100 })
                .to(curtain, {
                    yPercent: 0,
                    duration: 0.5,
                    ease: 'power4.inOut',
                    onComplete: () => {
                        window.scrollTo({ top: 0, behavior: 'instant' });
                    }
                })
                .to(curtain, {
                    yPercent: -100,
                    duration: 0.5,
                    ease: 'power4.inOut',
                    delay: 0.1,
                    onComplete: () => {
                        gsap.set(curtain, { display: 'none', yPercent: 100 });
                    }
                });
        };

        logoClickables.forEach(el => el.addEventListener('click', onLogoClick));

        return () => {
            logoClickables.forEach(el => el.removeEventListener('click', onLogoClick));
        };
    }, []);

    return (
        <div
            ref={curtainRef}
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#0c0c0e',
                zIndex: 99999,
                display: 'none',
                pointerEvents: 'none',
            }}
            aria-hidden="true"
        />
    );
}
