'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../app/styles/horizontal-words.css';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
    { number: '12+', label: 'Years of Atelier Curation' },
    { number: '500+', label: 'Distinguished Productions' },
    { number: '100%', label: 'Turnkey Calm & Delivery' },
];

export default function HorizontalWords() {
    const sectionRef = useRef(null);
    const marqueeTrackRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const track = marqueeTrackRef.current;
            if (!track) return;

            // Smooth parallax scroll
            gsap.to(track, {
                xPercent: -35,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.2,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="editorial-manifesto content-section">
            {/* Architectural Kicker */}
            <div className="editorial-manifesto__meta">
                <span className="editorial-manifesto__kicker">[ 02 / OUR PHILOSOPHY ]</span>
                <span className="editorial-manifesto__coord">LONDON HQ · THE ART OF HOSPITALITY</span>
            </div>

            {/* Kinetic Minimalist Editorial Ribbon */}
            <div className="editorial-manifesto__marquee-wrap">
                <div ref={marqueeTrackRef} className="editorial-manifesto__marquee-track">
                    <span className="editorial-manifesto__ribbon-text">
                        ATMOSPHERE <span className="text-accent">·</span> PRECISION <span className="text-accent">·</span> SOUND ARCHITECTURE <span className="text-accent">·</span> GASTRONOMY <span className="text-accent">·</span> DISTINCTION <span className="text-accent">·</span> CELEBRATION <span className="text-accent">·</span>
                    </span>
                    <span className="editorial-manifesto__ribbon-text" aria-hidden="true">
                        ATMOSPHERE <span className="text-accent">·</span> PRECISION <span className="text-accent">·</span> SOUND ARCHITECTURE <span className="text-accent">·</span> GASTRONOMY <span className="text-accent">·</span> DISTINCTION <span className="text-accent">·</span> CELEBRATION <span className="text-accent">·</span>
                    </span>
                </div>
            </div>

            {/* Editorial Statement Grid */}
            <div className="editorial-manifesto__grid">
                <div className="editorial-manifesto__left">
                    <h2 className="editorial-manifesto__statement">
                        Everything your event demands. <br />
                        <span className="text-italic">Executed without compromise.</span>
                    </h2>
                </div>

                <div className="editorial-manifesto__right">
                    <p className="editorial-manifesto__description">
                        From private estate weddings to club-scale sound installations at iconic London venues, 
                        we orchestrate every layer in-house. Mandaps and bespoke floral architecture, multi-course 
                        live culinary theatre, and acoustic rigs that move rooms — handled by one dedicated team 
                        from concept to close.
                    </p>

                    <div className="editorial-manifesto__stats">
                        {STATS.map((stat, idx) => (
                            <div key={idx} className="editorial-manifesto__stat-item">
                                <span className="editorial-manifesto__stat-num">{stat.number}</span>
                                <span className="editorial-manifesto__stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
