'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import '@/app/styles/wedding.css';

const SERVICES = [
  ['01', 'Full Planning', 'From first moodboard to the last guest leaving — suppliers, schedules, budgets and every moving part.'],
  ['02', 'Décor & Design', 'Floral installations, mandaps, tablescapes, lighting and spaces designed around your story.'],
  ['03', 'Food & Hospitality', 'Indian, fusion and international menus, guest accommodation, transfers and welcome moments.'],
  ['04', 'Entertainment', 'Dhol, DJs, live musicians, performers, lighting and dance floors — all curated as one experience.'],
  ['05', 'Day-of Production', 'A calm, experienced team running cues, suppliers, family logistics and every transition on the day.'],
  ['06', 'Destination Weddings', 'London, across the UK or somewhere entirely different. We bring the plan with you.'],
];

const EVENTS = [
  { n: '01', title: 'Mehndi', desc: 'Colour, music, movement.' },
  { n: '02', title: 'Sangeet', desc: 'Big energy, perfectly timed.' },
  { n: '03', title: 'Ceremony', desc: 'Tradition, intimacy, meaning.' },
  { n: '04', title: 'Reception', desc: 'The night everyone remembers.' },
];

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90',
  couple: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=90',
  details: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=90',
  ceremony: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=90',
  dance: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=90',
  table: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=90',
};

export default function WeddingPage() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.wd2-hero-eyebrow, .wd2-hero-title, .wd2-hero-desc, .wd2-hero-cta',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );

      gsap.to('.wd2-hero-img', {
        yPercent: 14, ease: 'none',
        scrollTrigger: { trigger: '.wd2-hero', start: 'top top', end: 'bottom top', scrub: true }
      });

      gsap.utils.toArray('.wd2-reveal').forEach(el => {
        gsap.fromTo(el, { y: 36, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 84%', once: true }
        });
      });

      gsap.to('.wd2-ticker-inner', { xPercent: -50, ease: 'none', duration: 28, repeat: -1 });
    }, root);

    setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => ctx.revert();
  }, []);

  return (
    <div className="wd2-root" ref={root}>

      {/* ── Hero ───────────────────────────────────── */}
      <section className="wd2-hero">
        <div className="wd2-hero-img-wrap">
          <img className="wd2-hero-img" src={IMAGES.hero} alt="" />
          <div className="wd2-hero-veil" />
        </div>
        <div className="wd2-hero-body">
          <p className="wd2-hero-eyebrow">Wassup London · Bespoke Weddings</p>
          <h1 className="wd2-hero-title">
            Made for<br /><em>you.</em>
          </h1>
          <p className="wd2-hero-desc">
            Weddings with personality, precision and a little bit of chaos —<br />
            planned beautifully from the first idea to the final dance.
          </p>
          <a href="#wd2-contact" className="wd2-hero-cta">
            Plan your wedding <span>↗</span>
          </a>
        </div>
        <div className="wd2-hero-scroll">
          <span>London · UK · Worldwide</span>
          <span>Scroll ↓</span>
        </div>
      </section>

      {/* ── Ticker ─────────────────────────────────── */}
      <div className="wd2-ticker" aria-hidden="true">
        <div className="wd2-ticker-inner">
          {['LOVE LOUDER', 'PLAN BOLDER', 'CELEBRATE EVERYTHING', 'LOVE LOUDER', 'PLAN BOLDER', 'CELEBRATE EVERYTHING'].map((t, i) => (
            <span key={i}>{t} <b>·</b></span>
          ))}
        </div>
      </div>

      {/* ── Intro ──────────────────────────────────── */}
      <section className="wd2-intro wd2-reveal">
        <div className="wd2-intro-index">
          <span>01</span>
          <div className="wd2-intro-line" />
        </div>
        <div className="wd2-intro-copy">
          <p className="wd2-eyebrow">The idea</p>
          <h2>Not just<br /><em>a wedding.</em></h2>
          <p className="wd2-intro-body">
            Your people. Your rituals. Your music. Your weird little details.
            We turn all of it into one unforgettable experience.
          </p>
        </div>
      </section>

      {/* ── Story split ────────────────────────────── */}
      <section className="wd2-story">
        <div className="wd2-story-img wd2-reveal">
          <img src={IMAGES.couple} alt="Couple celebrating together" />
        </div>
        <div className="wd2-story-copy wd2-reveal">
          <span className="wd2-index-badge">02</span>
          <p className="wd2-eyebrow">Our approach</p>
          <h2>Big feeling.<br /><em>Small details.</em></h2>
          <p>
            We build weddings like creative productions. There is a big picture,
            but the magic lives in the details: the entrance music, the lighting
            shift, the handwritten place card, the food your grandparents love.
          </p>
          <a href="#wd2-services" className="wd2-text-link">See what we do →</a>
        </div>
      </section>

      {/* ── Event types ────────────────────────────── */}
      <section className="wd2-events">
        <div className="wd2-events-head wd2-reveal">
          <p className="wd2-eyebrow">03 · The celebrations</p>
          <h2>Every function.<br /><em>One story.</em></h2>
        </div>
        <div className="wd2-event-grid">
          {EVENTS.map(({ n, title, desc }) => (
            <article className="wd2-event-card wd2-reveal" key={n}>
              <span className="wd2-card-num">{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="wd2-card-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* ── Gallery ────────────────────────────────── */}
      <section className="wd2-gallery">
        <div className="wd2-gallery-grid">
          <div className="wd2-g wd2-g1"><img src={IMAGES.details} alt="" /></div>
          <div className="wd2-g wd2-g2"><img src={IMAGES.ceremony} alt="" /></div>
          <div className="wd2-g wd2-g3"><img src={IMAGES.dance} alt="" /></div>
          <div className="wd2-g wd2-g4"><img src={IMAGES.table} alt="" /></div>
        </div>
        <p className="wd2-gallery-label">The Good Stuff</p>
      </section>

      {/* ── Services ───────────────────────────────── */}
      <section className="wd2-services" id="wd2-services">
        <div className="wd2-services-head wd2-reveal">
          <p className="wd2-eyebrow">04 · What we do</p>
          <h2>From "yes"<br /><em>to let's dance.</em></h2>
        </div>
        <div className="wd2-service-list">
          {SERVICES.map(([n, title, desc]) => (
            <a href="#wd2-contact" className="wd2-service wd2-reveal" key={n}>
              <span className="wd2-service-num">{n}</span>
              <div className="wd2-service-body">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <span className="wd2-service-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Pull quote ─────────────────────────────── */}
      <section className="wd2-quote wd2-reveal">
        <p>"The best weddings don't feel produced.<br /><em>They feel completely you.</em>"</p>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="wd2-cta" id="wd2-contact">
        <div className="wd2-cta-img-wrap">
          <img src={IMAGES.hero} alt="" />
          <div className="wd2-cta-veil" />
        </div>
        <div className="wd2-cta-body">
          <p className="wd2-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>05 · Let's make it happen</p>
          <h2>Ready to make<br /><em>some memories?</em></h2>
          <a className="wd2-cta-btn" href="https://wa.me/447471557773" target="_blank" rel="noreferrer">
            Start the conversation ↗
          </a>
          <p className="wd2-cta-locs">London · Birmingham · Manchester · Destination</p>
        </div>
      </section>

      <div className="wd2-back">
        <Link href="/">← Back to Wassup London</Link>
      </div>
    </div>
  );
}
