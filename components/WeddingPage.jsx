'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const SERVICES = [
  ['01', 'Full Planning', 'From first moodboard to the last guest leaving — suppliers, schedules, budgets and every moving part.'],
  ['02', 'Décor & Design', 'Floral installations, mandaps, tablescapes, lighting and spaces designed around your story.'],
  ['03', 'Food & Hospitality', 'Indian, fusion and international menus, guest accommodation, transfers and welcome moments.'],
  ['04', 'Entertainment', 'Dhol, DJs, live musicians, performers, lighting and dance floors — all curated as one experience.'],
  ['05', 'Day-of Production', 'A calm, experienced team running cues, suppliers, family logistics and every transition on the day.'],
  ['06', 'Destination Weddings', 'London, across the UK or somewhere entirely different. We bring the plan with you.'],
];

const EVENTS = [
  ['01', 'Mehndi', 'Colour, music, movement.'],
  ['02', 'Sangeet', 'Big energy, perfectly timed.'],
  ['03', 'Ceremony', 'Tradition, intimacy, meaning.'],
  ['04', 'Reception', 'The night everyone remembers.'],
];

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90',
  couple: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=90',
  details: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=90',
  ceremony: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=90',
  dance: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=90',
  table: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=90',
};

function Arrow() {
  return <span className="wdx-arrow" aria-hidden="true">↗</span>;
}

export default function WeddingPage() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.wdx-hero-copy > *',
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: .1, ease: 'power3.out' }
      );

      gsap.to('.wdx-hero-image', {
        yPercent: 12, ease: 'none',
        scrollTrigger: { trigger: '.wdx-hero', start: 'top top', end: 'bottom top', scrub: true }
      });

      gsap.fromTo('.wdx-intro-word',
        { yPercent: 110 },
        {
          yPercent: 0, duration: 1.1, stagger: .12, ease: 'power4.out',
          scrollTrigger: { trigger: '.wdx-intro', start: 'top 70%' }
        }
      );

      gsap.utils.toArray('.wdx-reveal').forEach((el) => {
        gsap.fromTo(el, { y: 45, opacity: 0 }, {
          y: 0, opacity: 1, duration: .8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true }
        });
      });

      gsap.to('.wdx-marquee-track', {
        xPercent: -50, ease: 'none', duration: 24, repeat: -1
      });

      gsap.to('.wdx-ring', {
        rotation: 360, ease: 'none',
        scrollTrigger: { trigger: '.wdx-story', start: 'top bottom', end: 'bottom top', scrub: true }
      });

      gsap.fromTo('.wdx-gallery-card',
        { y: 60 },
        {
          y: -30, stagger: .08, ease: 'none',
          scrollTrigger: { trigger: '.wdx-gallery', start: 'top bottom', end: 'bottom top', scrub: true }
        }
      );
    }, root);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div className="wdx-root" ref={root}>
      <div className="wdx-rail" aria-hidden="true">
        <span>Weddings · Wassup London · Weddings · Wassup London · </span>
        <span>Weddings · Wassup London · Weddings · Wassup London · </span>
      </div>

      <section className="wdx-hero">
        <img className="wdx-hero-image" src={IMAGES.hero} alt="" />
        <div className="wdx-hero-overlay" />
        <div className="wdx-hero-copy">
          <p className="wdx-kicker">Wassup London / Bespoke Weddings</p>
          <h1>
            <span>Made</span>
            <span>for <i>you.</i></span>
          </h1>
          <p className="wdx-hero-desc">
            Weddings with personality, precision and a little bit of chaos — planned beautifully from the first idea to the final dance.
          </p>
          <a href="#wdx-contact" className="wdx-button">Plan your wedding <Arrow /></a>
        </div>
        <div className="wdx-hero-meta">
          <span>London · UK · Worldwide</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      <div className="wdx-marquee" aria-hidden="true">
        <div className="wdx-marquee-track">
          <span>LOVE LOUDER</span><b>✳</b><span>PLAN BOLDER</span><b>✳</b>
          <span>CELEBRATE EVERYTHING</span><b>✳</b><span>LOVE LOUDER</span><b>✳</b>
          <span>PLAN BOLDER</span><b>✳</b><span>CELEBRATE EVERYTHING</span><b>✳</b>
        </div>
      </div>

      <section className="wdx-intro">
        <div className="wdx-intro-left">
          <p className="wdx-eyebrow">01 / The idea</p>
          <div className="wdx-ring">✳</div>
        </div>
        <div className="wdx-intro-copy">
          <h2>
            <span className="wdx-intro-word">Not</span>
            <span className="wdx-intro-word">just</span>
            <span className="wdx-intro-word wdx-accent">a wedding.</span>
          </h2>
          <p className="wdx-lede">
            Your people. Your rituals. Your music. Your weird little details.
            We turn all of it into one unforgettable experience.
          </p>
        </div>
      </section>

      <section className="wdx-story">
        <div className="wdx-story-image wdx-reveal">
          <img src={IMAGES.couple} alt="Couple celebrating together" />
        </div>
        <div className="wdx-story-copy wdx-reveal">
          <p className="wdx-eyebrow">02 / Our approach</p>
          <h2>Big feeling.<br /><em>Small details.</em></h2>
          <p>
            We build weddings like creative productions. There is a big picture,
            but the magic lives in the details: the entrance music, the lighting
            shift, the handwritten place card, the food your grandparents love.
          </p>
          <a href="#wdx-services" className="wdx-text-link">See what we do <Arrow /></a>
        </div>
      </section>

      <section className="wdx-events">
        <div className="wdx-section-head wdx-reveal">
          <p className="wdx-eyebrow">03 / The celebrations</p>
          <h2>Every function.<br /><i>One story.</i></h2>
        </div>
        <div className="wdx-event-grid">
          {EVENTS.map(([n, title, desc]) => (
            <article className="wdx-event-card wdx-reveal" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Arrow />
            </article>
          ))}
        </div>
      </section>

      <section className="wdx-gallery">
        <div className="wdx-gallery-card wdx-g1"><img src={IMAGES.details} alt="Wedding details" /></div>
        <div className="wdx-gallery-card wdx-g2"><img src={IMAGES.ceremony} alt="Wedding ceremony" /></div>
        <div className="wdx-gallery-card wdx-g3"><img src={IMAGES.dance} alt="Wedding celebration" /></div>
        <div className="wdx-gallery-card wdx-g4"><img src={IMAGES.table} alt="Wedding table styling" /></div>
        <div className="wdx-gallery-title">
          <span>THE</span><strong>GOOD</strong><span>STUFF</span>
        </div>
      </section>

      <section className="wdx-services" id="wdx-services">
        <div className="wdx-services-head">
          <p className="wdx-eyebrow">04 / What we do</p>
          <h2>From “yes”<br />to <i>let's dance.</i></h2>
        </div>
        <div className="wdx-service-list">
          {SERVICES.map(([n, title, desc]) => (
            <a href="#wdx-contact" className="wdx-service" key={n}>
              <span className="wdx-service-num">{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="wdx-quote wdx-reveal">
        <p>“The best weddings don't feel produced.<br /><i>They feel completely you.</i>”</p>
      </section>

      <section className="wdx-cta" id="wdx-contact">
        <img src={IMAGES.hero} alt="" />
        <div className="wdx-cta-overlay" />
        <div className="wdx-cta-content">
          <p className="wdx-eyebrow">05 / Let's make it happen</p>
          <h2>Ready to make<br /><i>some memories?</i></h2>
          <a className="wdx-button wdx-button-light" href="https://wa.me/447454904611" target="_blank" rel="noreferrer">
            Start the conversation <Arrow />
          </a>
          <p className="wdx-small">London · Birmingham · Manchester · Destination</p>
        </div>
      </section>

      <div className="wdx-back">
        <Link href="/">← Back to Wassup London</Link>
      </div>
    </div>
  );
}
