'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const WEDDING_SERVICES = [
    { id: 'full-planning', title: 'Full Planning', desc: 'Venue sourcing, supplier management, budget control and a detailed timeline for every function — from engagement to reception.' },
    { id: 'decor-design', title: 'Décor & Design', desc: 'Mandaps, floral installations, lighting rigs and stage design built around your palette, theme and cultural tradition.' },
    { id: 'catering', title: 'Catering', desc: 'Indian, Asian, Fusion and international menus. Canapé receptions, buffets and seated dinners with full front-of-house service.' },
    { id: 'guest-hospitality', title: 'Guest Hospitality', desc: 'Hotel room blocks, airport transfers, welcome gifts and day-of itineraries for travelling families across the UK and abroad.' },
    { id: 'entertainment', title: 'Entertainment', desc: 'DJ, MC, live musicians, dhol players, saxophonists — professionally curated sound, intelligent lighting and LED dance floors.' },
    { id: 'day-of-team', title: 'Day-of Coordination', desc: 'A dedicated floor team that runs cues, suppliers and family logistics from morning setup to the final farewell.' },
];

const PROMISES = [
    { num: '01', heading: 'One team, every function', body: 'We plan the mehndi, garba, sangeet, pheras and reception as one continuous story. No coordination gaps, no dropped balls.' },
    { num: '02', heading: 'UK-rooted, culturally fluent', body: 'Based in London, we work across the UK and destination venues. We understand both British expectations and South Asian traditions.' },
    { num: '03', heading: 'Transparent pricing', body: 'No hidden extras. Every supplier quote, catering rate and décor cost is itemised in a single shared document before you sign anything.' },
];

const PAL = {
    1: ['#29725f', '#0e2219'], 2: ['#4b69f0', '#0d1a5c'],
    3: ['#a0325a', '#2e0a1a'], 4: ['#f5693c', '#5c1e0a'],
    5: ['#82a0ff', '#1a2a5c'], 6: ['#1a1a1a', '#0a0a0a'],
};
function artSVG(k) {
    const p = PAL[k] || PAL[1];
    const motifs = [
        '<circle cx="50" cy="62" r="34" fill="none" stroke="#fff6ee" stroke-opacity=".35" stroke-width=".8"/><circle cx="50" cy="62" r="22" fill="none" stroke="#fff6ee" stroke-opacity=".35" stroke-width=".8"/><path d="M50 26v72M14 62h72" stroke="#fff6ee" stroke-opacity=".35" stroke-width=".8"/>',
        '<path d="M6 130V66a44 44 0 0 1 88 0v64M22 130V68a28 28 0 0 1 56 0v62" fill="none" stroke="#fff6ee" stroke-opacity=".35" stroke-width=".8"/>',
        '<path d="M18 104h64M26 104c0-34 48-34 48 0M50 38v14M44 44h12M30 96h40" fill="none" stroke="#fff6ee" stroke-opacity=".35" stroke-width=".8"/>',
        '<path d="M30 34L50 14L70 34M22 70L50 22L78 70M10 100L50 30L90 100" fill="none" stroke="#fff6ee" stroke-opacity=".35" stroke-width=".8"/>',
        '<rect x="20" y="30" width="60" height="80" rx="4" fill="none" stroke="#fff6ee" stroke-opacity=".35" stroke-width=".8"/><path d="M30 50h40M30 65h30M30 80h20" stroke="#fff6ee" stroke-opacity=".35" stroke-width=".8"/>',
        '<path d="M50 20c0 0-30 30-30 50s30 40 30 40s30-20 30-40S50 20 50 20z" fill="none" stroke="#fff6ee" stroke-opacity=".35" stroke-width=".8"/>',
    ];
    return `<svg viewBox="0 0 100 130" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="wg${k}x" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p[0]}"/><stop offset="1" stop-color="${p[1]}"/></linearGradient></defs><rect width="100" height="130" fill="url(#wg${k}x)"/>${motifs[(k - 1) % motifs.length]}</svg>`;
}

function Ring3D() {
    const wrapRef = useRef(null);
    useEffect(() => {
        if (!wrapRef.current) return;
        let layers = '';
        for (let z = -11; z <= 11; z++) {
            const l = 40 + Math.round((1 - Math.abs(z) / 11) * 22);
            layers += `<i style="transform:translateZ(${z}px);border-color:hsl(40 ${55 + Math.abs(z)}% ${l}%)"></i>`;
        }
        wrapRef.current.innerHTML = `<div class="wd-gem"></div>${layers}`;
    }, []);
    return <div className="wd-ring" ref={wrapRef} />;
}

function ArrowSvg() {
    return (
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" className="wd-pill-arrow" aria-hidden="true">
            <path d="M2 10 10 2M4 2h6v6" />
        </svg>
    );
}

export default function WeddingPage() {
    const railRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        /* Rail */
        if (railRef.current) {
            let u = '';
            for (let i = 0; i < 14; i++) u += '<span>Bespoke UK Weddings \u25cf</span>';
            railRef.current.innerHTML = u + u;
        }

        /* Placeholder art */
        document.querySelectorAll('[data-artk]').forEach(n => {
            n.innerHTML = artSVG(+(n.getAttribute('data-artk')) || 1);
        });

        /* Fit text — resize only, never scroll */
        function fit() {
            document.querySelectorAll('[data-fit-text]').forEach(el => {
                const w = el.parentElement.clientWidth;
                el.style.fontSize = '100px';
                const sw = el.scrollWidth || el.getBoundingClientRect().width;
                if (sw > 0) el.style.fontSize = (100 * w / sw) + 'px';
            });
        }
        fit();
        window.addEventListener('resize', fit);

        /* ══ Hero: ONE timeline = one scrub tick for both targets ══ */
        gsap.timeline({
            scrollTrigger: { trigger: '.wd-hero', start: 'top top', end: 'bottom top', scrub: 1 }
        })
            .to('.wd-ring3d', { x: '30vw', y: '40vh', scale: 1.75, ease: 'none' }, 0)
            .to('.wd-mega', { y: '-12vh', ease: 'none' }, 0);

        /* ══ Story: entrance + spin + fade share two triggers ══ */
        gsap.fromTo('.wd-disk', { y: '60vh', scale: 0.3, opacity: 0 }, {
            y: '0', scale: 1, opacity: 1, ease: 'none',
            scrollTrigger: { trigger: '.wd-story-scene', start: 'top 90%', end: 'top 20%', scrub: 1 }
        });
        gsap.timeline({
            scrollTrigger: { trigger: '.wd-story-scene', start: 'top 90%', end: 'bottom top', scrub: 1 }
        })
            .to('.wd-disk-textgroup', { rotation: 420, ease: 'none' }, 0)
            .fromTo(['.wd-story-para', '.wd-story-cta'], { opacity: 0, y: 28 }, { opacity: 1, y: 0, ease: 'none' }, 0.25);

        /* ══ Horizontal scroller ══ */
        const track = document.querySelector('.wd-track');
        if (track) {
            const getMax = () => Math.max(0, track.scrollWidth - window.innerWidth * 0.92);
            gsap.to('.wd-track', {
                x: () => -getMax(), ease: 'none',
                scrollTrigger: {
                    trigger: '.wd-hs-scene', start: 'top top',
                    end: () => `+=${getMax()}`,
                    scrub: 1, pin: true, invalidateOnRefresh: true,
                }
            });
        }

        /* ══ Promises: ONE trigger, staggered timeline (was 4 triggers) ══ */
        gsap.timeline({
            scrollTrigger: { trigger: '.wd-promises-section', start: 'top 75%', toggleActions: 'play none none reverse' }
        })
            .fromTo('.wd-promise-head', { y: 80, opacity: 0 }, { y: 0, opacity: 1, ease: 'power3.out', duration: 0.7 })
            .fromTo('.wd-promise-card', { opacity: 0, y: 60 }, { opacity: 1, y: 0, ease: 'power3.out', duration: 0.7, stagger: 0.12 }, '-=0.3');

        /* ══ Journey: TWO triggers instead of 8 (4 lines + 4 photos) ══ */
        gsap.timeline({
            scrollTrigger: { trigger: '.wd-journey-scene', start: 'top 80%', toggleActions: 'play none none reverse' }
        })
            .fromTo('.wd-ln-inner', { y: '105%' }, { y: '0%', ease: 'power3.out', duration: 0.8, stagger: 0.12 });

        gsap.timeline({
            scrollTrigger: { trigger: '.wd-journey-scene', start: 'top 65%', toggleActions: 'play none none reverse' }
        })
            .fromTo('.wd-jp', { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, ease: 'power3.out', duration: 0.9, stagger: 0.14 });

        /* ══ Finale: ONE scrub timeline + one fade (was 3 triggers) ══ */
        gsap.timeline({
            scrollTrigger: { trigger: '.wd-finale-scene', start: 'top top', end: 'bottom top', scrub: 1 }
        })
            .fromTo('.wd-fin-img', { y: '6vh' }, { y: '-60vh', ease: 'none' }, 0)
            .to('.wd-fin-ring-rot', { rotation: 300, ease: 'none' }, 0);

        gsap.fromTo(['.wd-fin-cta', '.wd-fin-right', '.wd-fin-credit'], { opacity: 0, y: 20 }, {
            opacity: 1, y: 0, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: '.wd-finale-scene', start: 'top 50%', toggleActions: 'play none none reverse' }
        });

        /* ══ Navbar colour: ScrollTrigger callbacks — ZERO raw scroll listeners ══ */
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            ['.wd-promises-section', '.wd-services-section'].forEach(sel => {
                const el = document.querySelector(sel);
                if (!el) return;
                ScrollTrigger.create({
                    trigger: el, start: 'top 60px', end: 'bottom 60px',
                    onEnter: () => { navbar.classList.add('on-light'); navbar.classList.remove('on-dark'); },
                    onLeave: () => { navbar.classList.add('on-dark'); navbar.classList.remove('on-light'); },
                    onEnterBack: () => { navbar.classList.add('on-light'); navbar.classList.remove('on-dark'); },
                    onLeaveBack: () => { navbar.classList.add('on-dark'); navbar.classList.remove('on-light'); },
                });
            });
        }

        return () => {
            window.removeEventListener('resize', fit);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="wd-root">
            <aside className="wd-rail" aria-hidden="true">
                <div className="wd-rail-track" ref={railRef} />
            </aside>

            {/* ══ HERO ══════════════════════════════════════════════════════ */}
            <section className="wd-hero" id="wd-top">
                <div className="wd-hero-in">
                    <div className="wd-ring3d" aria-hidden="true"><Ring3D /></div>
                    <h1 className="wd-mega wd-disp">
                        <span className="wd-mega-l1">Your</span>
                        <span className="wd-mega-l2">Wedding</span>
                    </h1>
                </div>
                <a className="wd-small-link" href="#wd-story">
                    Bespoke UK Weddings <span aria-hidden="true">&#8599;</span>
                </a>
                <p className="wd-hero-sub">
                    Every tradition, every detail, one team — delivering flawless weddings across London and the UK.
                </p>
            </section>

            {/* ══ STORY ═════════════════════════════════════════════════════ */}
            <section className="wd-scene wd-story-scene" id="wd-story">
                <div className="wd-stick wd-story-stick">
                    <div className="wd-disk" aria-hidden="true">
                        <svg viewBox="0 0 400 400" aria-hidden="true">
                            <defs><path id="wdCp2" d="M200,200 m-165,0 a165,165 0 1,1 330,0 a165,165 0 1,1 -330,0" /></defs>
                            <g className="wd-disk-textgroup">
                                <text><textPath href="#wdCp2" textLength="1026" lengthAdjust="spacing">{"Let's plan your perfect day \u2736 Let's plan your perfect day \u2736"}</textPath></text>
                            </g>
                            <circle cx="200" cy="200" r="92" fill="var(--color-orange)" />
                            <g transform="translate(200 200)" fill="none" stroke="#fbf1e6" strokeOpacity=".7" strokeWidth="1.2">
                                <circle r="28" /><circle r="18" /><circle r="8" /><path d="M0-36V36M-36 0H36" />
                            </g>
                        </svg>
                    </div>
                    <p className="wd-story-para">
                        Wassup London is the UK&apos;s trusted wedding planning and events company. We plan the mehndi, garba,
                        sangeet, pheras and reception as one seamless story — managing every supplier, cultural detail and
                        guest so your families can simply enjoy every moment.
                    </p>
                    <div className="wd-story-cta">
                        <a className="wd-pill" href="#wd-services">Explore our services <ArrowSvg /></a>
                    </div>
                </div>
            </section>

            {/* ══ HORIZONTAL LETTER SCROLL ══════════════════════════════════ */}
            <section className="wd-hs-scene" id="wd-hs">
                <div className="wd-hs-inner">
                    <div className="wd-track" id="wd-track">
                        {['W', 'E', 'D', 'D', 'I', 'N', 'G'].map((l, i) => <span key={i} className="wd-let">{l}</span>)}
                        {[1, 2, 3, 4].map(k => (
                            <div key={k} className="wd-shot">
                                <div data-artk={k} className="wd-shot-art" />
                                <div className="wd-shot-lab">Wassup London</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ PROMISES ══════════════════════════════════════════════════ */}
            <section className="wd-promises-section" id="wd-promises">
                <div className="wd-promise-inner">
                    <h2 className="wd-promise-head wd-disp"><span>Every detail,</span><br /><em>handled</em></h2>
                    <div className="wd-promise-grid">
                        {PROMISES.map(p => (
                            <article key={p.num} className="wd-promise-card">
                                <span className="wd-promise-num">{p.num}</span>
                                <h3 className="wd-promise-heading">{p.heading}</h3>
                                <p className="wd-promise-body">{p.body}</p>
                            </article>
                        ))}
                    </div>
                    <div className="wd-promise-photos">
                        {[5, 6, 3].map((k, i) => (
                            <div key={i} className={`wd-pphoto wd-pphoto--${i + 1}`}>
                                <div data-artk={k} className="wd-pphoto-art" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ JOURNEY LINES ═════════════════════════════════════════════ */}
            <section className="wd-scene wd-journey-scene" id="wd-journey">
                <div className="wd-stick">
                    <div className="wd-lines wd-disp">
                        {['Your', 'Vision', 'Our', 'Expertise'].map((word, i) => (
                            <span key={i} className="wd-ln"><span className="wd-ln-inner">{word}</span></span>
                        ))}
                    </div>
                    <div className="wd-jp wd-jp1"><div data-artk={4} className="wd-jp-art" /></div>
                    <div className="wd-jp wd-jp2"><div data-artk={1} className="wd-jp-art" /></div>
                    <div className="wd-jp wd-jp3"><div data-artk={5} className="wd-jp-art" /></div>
                    <div className="wd-jp wd-jp4"><div data-artk={6} className="wd-jp-art" /></div>
                    <div className="wd-journey-cta">
                        <a className="wd-pill wd-pill--dark" href="#wd-services">See all services <ArrowSvg /></a>
                    </div>
                </div>
            </section>

            {/* ══ SERVICES ══════════════════════════════════════════════════ */}
            <section className="wd-services-section" id="wd-services">
                <span className="wd-eyebrow">What we plan</span>
                {WEDDING_SERVICES.map(svc => (
                    <a key={svc.id} className="wd-row" href="#wd-contact">
                        <h3 className="wd-row-title">{svc.title}</h3>
                        <p className="wd-row-desc">{svc.desc}</p>
                        <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" className="wd-row-arrow" aria-hidden="true">
                            <path d="M3 19 19 3M7 3h12v12" />
                        </svg>
                    </a>
                ))}
            </section>

            {/* ══ FINALE ════════════════════════════════════════════════════ */}
            <section className="wd-scene wd-finale-scene" id="wd-finale">
                <div className="wd-stick wd-finale-stick">
                    <div className="wd-fin-img">
                        <div data-artk={2} className="wd-fin-art" />
                        <div className="wd-fin-ring-wrap" aria-hidden="true">
                            <svg viewBox="0 0 400 400">
                                <defs><path id="wdFp2" d="M200,200 m-185,0 a185,185 0 1,1 370,0 a185,185 0 1,1 -370,0" /></defs>
                                <g className="wd-fin-ring-rot">
                                    <text><textPath href="#wdFp2" textLength="1150" lengthAdjust="spacing">WE HAVE THE PLAN &middot; YOU HAVE THE DAY &middot; WE HAVE THE PLAN &middot; YOU HAVE THE DAY &middot;</textPath></text>
                                </g>
                                <g transform="translate(200 200)" fill="none" stroke="#fbf1e6" strokeOpacity=".6" strokeWidth=".9">
                                    <circle r="18" /><circle r="8" /><path d="M0-26V26M-26 0H26" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="wd-fin-lines" aria-hidden="true">
                        <div data-fit-text className="wd-fin-word">Say I do</div>
                        <div data-fit-text className="wd-fin-word">Say I do</div>
                        <div data-fit-text className="wd-fin-word">Say I do</div>
                        <div data-fit-text className="wd-fin-word wd-fin-word--accent">With us</div>
                    </div>
                    <div className="wd-fin-cta" id="wd-contact">
                        <a className="wd-pill" href="https://wa.me/447454904611" target="_blank" rel="noopener noreferrer">
                            Book a free consultation <ArrowSvg />
                        </a>
                    </div>
                    <div className="wd-fin-right">
                        Now planning 2026 &amp; 2027
                        <small>London &middot; Birmingham &middot; Manchester &middot; Destination</small>
                    </div>
                    <Link className="wd-fin-credit" href="/">&larr; Back to Wassup London</Link>
                </div>
            </section>
        </div>
    );
}
