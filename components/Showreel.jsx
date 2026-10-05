'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EVENTS } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function Showreel() {
    const sectionRef = useRef(null);
    const heroVideoRef = useRef(null);
    const overlayTitleRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the hero video and expand it on scroll
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=600',
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            heroTl
                .fromTo(heroVideoRef.current,
                    { borderRadius: '24px', scale: 0.72 },
                    { borderRadius: '0px', scale: 1, ease: 'none' }
                )
                .fromTo(overlayTitleRef.current,
                    { opacity: 1, y: 0 },
                    { opacity: 0, y: -40, ease: 'none' },
                    0
                );

            // Stagger the grid cards in
            gsap.fromTo('.showreel-card',
                { opacity: 0, y: 60, scale: 0.94 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="showreel-section" id="showreel-section" style={{ background: '#0a0a0a', paddingBottom: '100px', overflow: 'visible' }}>

            {/* ── Hero video expanding panel ── */}
            <div style={{ position: 'relative', width: '100%', padding: '60px 40px 0', boxSizing: 'border-box' }}>
                <div
                    ref={heroVideoRef}
                    style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '16/7',
                        overflow: 'hidden',
                        borderRadius: '24px',
                        background: '#111',
                    }}
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', border: 'none', pointerEvents: 'none' }}
                    >
                        <source src="/assets/Videos/Best Latin party in Amsterdam - Cinematic Club Aftermovie.mp4" type="video/mp4" />
                    </video>
                    {/* Dark overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44, 39, 39, 0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />

                    {/* Overlay title */}
                    <div ref={overlayTitleRef} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(24px, 4vw, 56px)' }}>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(11px, 1.1vw, 14px)', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>
                            🎬 Our Events Showreel
                        </p>
                        <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 5.5vw, 80px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', margin: 0 }}>
                            London&apos;s most
                            <br />
                            <em style={{ fontStyle: 'italic', color: '#F0BEFA' }}>unforgettable</em> nights
                        </h2>
                        {/* Tag strip */}
                        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
                            {['DJ EVENTS', 'WEDDINGS', 'CORPORATE', 'ROOFTOP PARTIES'].map(tag => (
                                <span key={tag} style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', color: '#fff', borderRadius: '100px', padding: '6px 14px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.15)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section header ── */}
            <div style={{ padding: '80px 40px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Featured Events</span>
                    <h3 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', margin: '12px 0 0' }}>
                        Events we&apos;ve
                        <br />
                        <em style={{ color: '#82A0FF', fontStyle: 'italic' }}>brought to life</em>
                    </h3>
                </div>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#0a0a0a', borderRadius: '100px', padding: '14px 28px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', letterSpacing: '0.02em', transition: 'transform 0.2s ease', flexShrink: 0 }}>
                    View All Events
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
            </div>

            {/* ── Events grid ── */}
            <div ref={gridRef} className="showreel-grid">
                {EVENTS.map((event, i) => (
                    <div
                        key={event.id}
                        className={`showreel-card ${i === 0 ? 'showreel-card--wide' : ''}`}
                        style={{
                            position: 'relative',
                            aspectRatio: '4/5',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            background: '#111',
                            cursor: 'pointer',
                        }}
                    >
                        {event.type === 'localvideo' ? (
                            <video
                                src={event.src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '140%', height: '140%', objectFit: 'cover', border: 'none', pointerEvents: 'none' }}
                            />
                        ) : event.type === 'video' ? (
                            <iframe
                                src={event.src}
                                title={event.label}
                                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '140%', height: '140%', border: 'none', pointerEvents: 'none' }}
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            />
                        ) : (
                            <img
                                src={event.src}
                                alt={event.label}
                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        )}
                        {/* Card gradient overlay */}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }} />
                        {/* Card info */}
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <div>
                                <p style={{ color: '#F0BEFA', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 4px' }}>{event.tag}</p>
                                <h4 style={{ color: '#fff', fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>{event.label}</h4>
                            </div>
                            <div style={{ background: '#F0BEFA', color: '#14142b', borderRadius: '10px', padding: '6px 12px', textAlign: 'center', flexShrink: 0 }}>
                                <div style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1 }}>{event.date.split(' ')[0]}</div>
                                <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{event.date.split(' ')[1]}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
