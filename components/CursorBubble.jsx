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

        const onMouseOver = (e) => {
            const link = e.target.closest('a, button, [role="button"], input, .card, .motion-card__card, .showreel-card, .vimeo-player-area');
            if (link) {
                cursor.classList.add('cursor--active');
                if (link.closest('.vimeo-player-area')) {
                    cursor.setAttribute('data-text', 'SOUND');
                } else if (link.closest('.showreel-card')) {
                    cursor.setAttribute('data-text', 'PLAY');
                } else if (link.closest('.card, .motion-card__card')) {
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
