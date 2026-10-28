'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import '@/app/styles/dj-entertainment.css';

const GEAR = [
  {
    num: '01',
    title: 'Club-Spec Sound',
    desc: 'L-Acoustics and d&b audiotechnik touring rigs tuned to every venue\'s acoustic profile. Pristine bass, punchy mids, crystal vocals.',
    specs: ['Subwoofers down to 28Hz', 'Digital Soundcraft & Dante networking', 'Wireless Shure Axient microphones', 'Live sound engineering on-site']
  },
  {
    num: '02',
    title: 'Moving Head FX',
    desc: 'Robotic beam, spot and wash fixtures synced directly to the DJ drop. Atmospheric haze, laser grids and pixel-mapped staging.',
    specs: ['GrandMA3 timecode lighting control', 'Low-smoke dry ice for first dance', 'High-power club laser installations', 'Cold spark indoor pyrotechnics']
  },
  {
    num: '03',
    title: 'LED Dance Floors',
    desc: 'Bespoke 3D infinity mirrors, gloss white acrylic or full pixel-video dance floors designed as the focal point of the party.',
    specs: ['Seamless white acrylic & gold trims', 'Interactive pressure-sensitive LED matrices', 'Custom monogram projection', 'Integrated perimeter wash lighting']
  },
];

const ACTS = [
  {
    title: 'Live Sax & Percussion',
    badge: 'Live Fusion',
    desc: 'Electric saxophone improvising over house, UK garage, Afrobeats and classic anthems, weaving into the crowd.',
    img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: 'Live Dhol Drummers',
    badge: 'High Energy',
    desc: 'Thunderous rhythm section bringing raw Punjabi energy for grand bridal entries, sangeet drops and peak dancefloor moments.',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: 'Club Resident DJs',
    badge: 'Open-Format',
    desc: 'Turntablists with Fabric, Ministry of Sound & international festival credentials. Flawless live mixing across genres.',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: 'Visuals & Laser Rig',
    badge: 'Visual Experience',
    desc: 'Custom live motion graphics generated dynamically to match the BPM, audio spectrum and branded event assets.',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85'
  },
];

export default function DJEntertainmentPage() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.dj2-hero-eyebrow, .dj2-hero-title, .dj2-hero-desc, .dj2-hero-actions, .dj2-hero-stats',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      );

      gsap.to('.dj2-hero-video', {
        yPercent: 16, ease: 'none',
        scrollTrigger: { trigger: '.dj2-hero', start: 'top top', end: 'bottom top', scrub: true }
      });

      gsap.utils.toArray('.dj2-reveal').forEach(el => {
        gsap.fromTo(el, { y: 36, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true }
        });
      });

      gsap.fromTo('.dj2-gear-card',
        { y: 48, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, stagger: 0.13, ease: 'power3.out',
          scrollTrigger: { trigger: '.dj2-gear-grid', start: 'top 80%' }
        }
      );

      gsap.utils.toArray('.dj2-act-card').forEach(card => {
        gsap.fromTo(card, { y: 44, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 86%', once: true }
        });
      });

      gsap.to('.dj2-ticker-inner', { xPercent: -50, ease: 'none', duration: 22, repeat: -1 });
    }, root);

    setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => ctx.revert();
  }, []);

  return (
    <div className="dj2-root" ref={root}>

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="dj2-hero">
        <div className="dj2-hero-video-wrap">
          <video
            className="dj2-hero-video"
            autoPlay loop muted playsInline
            poster="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1800&q=85"
          />
          <div className="dj2-hero-veil" />
        </div>

        <div className="dj2-hero-body">
          <p className="dj2-hero-eyebrow">
            <span className="dj2-live-dot" /> Wassup London · Stage & Sound
          </p>
          <h1 className="dj2-hero-title">
            Maximum Energy.<br /><em>Pure Sound.</em>
          </h1>
          <p className="dj2-hero-desc">
            We don't just supply speakers — we engineer atmospheric moments,
            festival-grade lighting rigs and dance floors that stay packed until the final second.
          </p>
          <div className="dj2-hero-actions">
            <a href="https://wa.me/447471557773" target="_blank" rel="noreferrer" className="dj2-btn-primary">
              Book Your Lineup ↗
            </a>
            <a href="#dj2-gear" className="dj2-btn-ghost">
              Explore The Rig ↓
            </a>
          </div>
        </div>

        <div className="dj2-hero-stats">
          <div className="dj2-stat">
            <span className="dj2-stat-val">130+ dB</span>
            <span className="dj2-stat-lbl">Concert Rig Power</span>
          </div>
          <div className="dj2-stat-divider" />
          <div className="dj2-stat">
            <span className="dj2-stat-val">500+</span>
            <span className="dj2-stat-lbl">Packed Dancefloors</span>
          </div>
          <div className="dj2-stat-divider" />
          <div className="dj2-stat">
            <span className="dj2-stat-val">London</span>
            <span className="dj2-stat-lbl">To Ibiza & Beyond</span>
          </div>
        </div>
      </section>

      {/* ── Ticker ───────────────────────────────────── */}
      <div className="dj2-ticker" aria-hidden="true">
        <div className="dj2-ticker-inner">
          {['NO SCRIPTED PLAYLISTS', 'IMMERSIVE LIGHTING', 'BASS YOU FEEL IN YOUR CHEST', 'LIVE DHOL & SAX FUSION',
            'NO SCRIPTED PLAYLISTS', 'IMMERSIVE LIGHTING', 'BASS YOU FEEL IN YOUR CHEST', 'LIVE DHOL & SAX FUSION'].map((t, i) => (
            <span key={i}>{t} <b>·</b></span>
          ))}
        </div>
      </div>

      {/* ── Philosophy ───────────────────────────────── */}
      <section className="dj2-philosophy">
        <div className="dj2-philosophy-img dj2-reveal">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85"
            alt="Crowd reacting to DJ drop"
          />
          <span className="dj2-img-badge">Club Heritage</span>
        </div>
        <div className="dj2-philosophy-copy dj2-reveal">
          <p className="dj2-eyebrow">01 · Sound Philosophy</p>
          <h2>Reading The Room.<br /><em>Dropping The Anthem.</em></h2>
          <p className="dj2-philosophy-lead">
            Great entertainment isn't a Spotify playlist on shuffle. It's an unbroken
            conversation between the DJ, the lighting technician, and 500 people with
            their hands in the air.
          </p>
          <p className="dj2-philosophy-p">
            Whether it's an underground UK garage breakdown, an explosive Bollywood sangeet
            crescendo, or a sophisticated sunset rooftop set at Skylight London — we engineer
            the tempo to elevate every heartbeat.
          </p>
          <a href="https://wa.me/447471557773" target="_blank" rel="noreferrer" className="dj2-text-link">
            Customise your sound profile →
          </a>
        </div>
      </section>

      {/* ── Gear ─────────────────────────────────────── */}
      <section className="dj2-gear-section" id="dj2-gear">
        <div className="dj2-section-head dj2-reveal">
          <p className="dj2-eyebrow">02 · Technical Arsenal</p>
          <h2>Tour-Grade <em>Hardware</em></h2>
          <p className="dj2-section-sub">
            No home-audio compromises. We deploy hardware trusted by European mega-clubs and arena concert tours.
          </p>
        </div>
        <div className="dj2-gear-grid">
          {GEAR.map(item => (
            <div className="dj2-gear-card" key={item.num}>
              <span className="dj2-gear-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul className="dj2-spec-list">
                {item.specs.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lineup ───────────────────────────────────── */}
      <section className="dj2-lineup">
        <div className="dj2-lineup-head dj2-reveal">
          <div>
            <p className="dj2-eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>03 · The Collective</p>
            <h2>Live Musicians &<br /><em>Resident Performers</em></h2>
          </div>
          <p className="dj2-lineup-sub">
            Pair our resident DJs with blistering live instruments to blur the line between a private event and an arena gig.
          </p>
        </div>
        <div className="dj2-act-grid">
          {ACTS.map(act => (
            <div className="dj2-act-card" key={act.title}>
              <img src={act.img} alt={act.title} />
              <div className="dj2-act-overlay">
                <span className="dj2-act-badge">{act.badge}</span>
                <h3>{act.title}</h3>
                <p>{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote ────────────────────────────────────── */}
      <section className="dj2-quote dj2-reveal">
        <p>"The moment the bass hits,<br /><em>nobody remembers who planned the schedule.</em>"</p>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="dj2-cta">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=85"
          alt="Nightclub lasers"
          className="dj2-cta-bg"
        />
        <div className="dj2-cta-veil" />
        <div className="dj2-cta-body">
          <p className="dj2-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>04 · Bring The Noise</p>
          <h2>Turn Your Venue<br /><em>Into An Electric Space.</em></h2>
          <p>
            Tell us about your crowd, your date, and your venue in London or worldwide.
            We'll design a custom AV & DJ production proposal within 24 hours.
          </p>
          <a className="dj2-cta-btn" href="https://wa.me/447471557773" target="_blank" rel="noreferrer">
            Chat On WhatsApp ↗
          </a>
        </div>
      </section>

      <div className="dj2-back">
        <Link href="/">← Back to Wassup London</Link>
      </div>
    </div>
  );
}
