'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EVENTS } from '@/lib/data';
import '@/app/styles/showreel.css';

gsap.registerPlugin(ScrollTrigger);

export default function Showreel() {
    const sectionRef = useRef(null);
    const heroVideoRef = useRef(null);
    const gridRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Expand hero video on scroll
            gsap.fromTo(
                heroVideoRef.current,
                { borderRadius: '28px', scale: 0.94 },
                {
                    borderRadius: '16px',
                    scale: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: heroVideoRef.current,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: 1,
                    },
                }
            );

            // Stagger in cards
            gsap.fromTo(
                '.showreel-card',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power3.out',
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 85%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const categories = ['ALL', 'EGG LONDON', 'FABRIC', 'PRIVATE VENUES', 'THE SHARD'];

    const filteredEvents = selectedCategory === 'ALL'
        ? EVENTS
        : EVENTS.filter(e => e.tag.toLowerCase().includes(selectedCategory.toLowerCase()) || e.venue.toLowerCase().includes(selectedCategory.toLowerCase()));

    return (
        <section ref={sectionRef} className="editorial-showreel" id="showreel-section">
            {/* ── Section Meta Header ── */}
            <div className="editorial-showreel__header">
                <div className="editorial-showreel__meta">
                    <span className="editorial-showreel__kicker">[ 04 / CURATED REPERTORY ]</span>
                    <span className="editorial-showreel__status">SELECTED RECENT & UPCOMING PRODUCTIONS</span>
                </div>
                <div className="editorial-showreel__title-row">
                    <h2 className="editorial-showreel__title">
                        DISTINGUISHED NIGHTS. <br />
                        <span className="text-italic">ARCHITECTURAL SOUND.</span>
                    </h2>
                    <p className="editorial-showreel__desc">
                        A retrospective of bespoke mandap environments, high-intensity club takeovers, 
                        and private rooftop galas orchestrated throughout the capital.
                    </p>
                </div>
            </div>

            {/* ── Hero Expanding Video Feature ── */}
            <div className="editorial-showreel__hero-wrap">
                <div ref={heroVideoRef} className="editorial-showreel__hero-frame">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="editorial-showreel__hero-video"
                    >
                        <source
                            src="/assets/Videos/Best Latin party in Amsterdam - Cinematic Club Aftermovie.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="editorial-showreel__hero-scrim" />
                    <div className="editorial-showreel__hero-badge">
                        <span>CINEMATIC ARCHIVE · LONDON</span>
                    </div>
                </div>
            </div>

            {/* ── Category Filter Pills ── */}
            <div className="editorial-showreel__controls">
                <div className="editorial-showreel__filters">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => setSelectedCategory(cat)}
                            className={`editorial-showreel__filter-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <Link href="/packages" className="editorial-showreel__inquire-link">
                    Check Date Availability →
                </Link>
            </div>

            {/* ── Event Grid ── */}
            <div ref={gridRef} className="showreel-grid">
                {filteredEvents.map((event, i) => (
                    <article
                        key={event.id}
                        className={`showreel-card ${i === 0 ? 'showreel-card--wide' : ''}`}
                    >
                        <div className="showreel-card__media-wrap">
                            {event.type === 'localvideo' ? (
                                <video
                                    src={event.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="showreel-card__video"
                                />
                            ) : (
                                <img
                                    src={event.src}
                                    alt={event.label}
                                    loading="lazy"
                                    className="showreel-card__img"
                                />
                            )}
                            <div className="showreel-card__scrim" />
                        </div>

                        {/* Card Meta Content */}
                        <div className="showreel-card__content">
                            <div className="showreel-card__date-pill">
                                <span className="showreel-card__day">{event.date.split(' ')[0]}</span>
                                <span className="showreel-card__month">{event.date.split(' ')[1]}</span>
                            </div>

                            <div className="showreel-card__info">
                                <span className="showreel-card__tag">{event.tag}</span>
                                <h3 className="showreel-card__title">{event.label}</h3>
                                <p className="showreel-card__venue">{event.venue}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
