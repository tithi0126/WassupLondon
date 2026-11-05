'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CursorBubble() {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        // Only run on non-touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const cursor = cursorRef.current;
        const dot = dotRef.current;
        if (!cursor || !dot) return;

        const xToCursor = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power2.out' });
        const yToCursor = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power2.out' });
        const xToDot = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power2.out' });
        const yToDot = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power2.out' });

        const onMouseMove = (e) => {
            xToCursor(e.clientX);
            yToCursor(e.clientY);
            xToDot(e.clientX);
            yToDot(e.clientY);
        };

        const DARK_SECTION_SELECTOR = [
            '.editorial-hero',
            '.editorial-showreel',
            '.editorial-footer',
            '.navbar',
            '.nav-mobile-drawer',
            '.dj2-root',
            '.cp2-root',
            '.pk2-root',
            '.not-found-main',
            '.wd2-hero',
            '.wd2-services',
            '.wd2-cta',
            '.ct2-stations',
            '.ct2-cta',
        ].join(', ');

        const onMouseOver = (e) => {
            if (!e.target || typeof e.target.closest !== 'function') return;

            const isOnDark = Boolean(e.target.closest(DARK_SECTION_SELECTOR));
            cursor.classList.toggle('cursor--on-dark', isOnDark);

            const interactive = e.target.closest(
                'a, button, [role="button"], input, .editorial-card-item, .editorial-service-card, .showreel-card'
            );
            if (interactive) {
                cursor.classList.add('cursor--active');
                if (interactive.closest('.showreel-card')) {
                    cursor.setAttribute('data-text', 'PLAY');
                } else if (interactive.closest('.editorial-card-item, .editorial-service-card')) {
                    cursor.setAttribute('data-text', 'VIEW');
                } else {
                    cursor.removeAttribute('data-text');
                }
            } else {
                cursor.classList.remove('cursor--active');
                cursor.removeAttribute('data-text');
            }
        };

        const onMouseLeaveDoc = () => {
            gsap.to([cursor, dot], { opacity: 0, duration: 0.25 });
        };

        const onMouseEnterDoc = () => {
            gsap.to([cursor, dot], { opacity: 1, duration: 0.25 });
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseleave', onMouseLeaveDoc);
        document.addEventListener('mouseenter', onMouseEnterDoc);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseleave', onMouseLeaveDoc);
            document.removeEventListener('mouseenter', onMouseEnterDoc);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor-follower" aria-hidden="true" />
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
        </>
    );
}
