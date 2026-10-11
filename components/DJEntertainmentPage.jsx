'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const GEAR = [
  {
    num: '01',
    title: 'Club-Spec Sound',
    desc: 'L-Acoustics and d&b audiotechnik touring rigs tuned to every venue’s acoustic profile. Pristine bass, punchy mids, crystal vocals.',
    specs: ['Subwoofers down to 28Hz', 'Digital soundcraft & Dante networking', 'Wireless Shure Axient microphones', 'Live sound engineering on-site']
  },
  {
    num: '02',
    title: 'Moving Head FX',
    desc: 'Robotic beam, spot and wash fixtures synced directly to the DJ drop. Atmospheric haze, laser grids and pixel-mapped staging.',
    specs: ['GrandMA3 timecode lighting control', 'Low-smoke dry ice for first dance & reveals', 'High-power club laser installations', 'Cold spark indoor pyrotechnics']
  },
  {
    num: '03',
    title: 'LED Dance Floors',
    desc: 'Bespoke 3D infinity mirrors, gloss white acrylic or full pixel-video dance floors designed as the focal point of the party.',
    specs: ['Seamless white acrylic & gold trims', 'Interactive pressure-sensitive LED matrices', 'Custom monogram projection', 'Integrated perimeter wash lighting']
  }
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
    badge: 'Open-Format Masters',
    desc: 'Turntablists with Fabric, Ministry of Sound & international festival credentials. Flawless live mixing across genres.',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: 'Visuals & Laser Rig',
    badge: 'Visual Experience',
    desc: 'Custom live motion graphics generated dynamically to match the BPM, audio spectrum and branded event assets.',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85'
  }
];

export default function DJEntertainmentPage() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo('.djx-hero-content > *',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: 'power4.out' }
      );

      // Hero background video parallax
      gsap.to('.djx-hero-video', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.djx-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Equalizer bars speed change on scroll
      gsap.to('.djx-rail-bars span', {
        scaleY: 1.8,
        duration: 0.3,
        stagger: 0.05,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      // Soundwave box scale in
      gsap.fromTo('.djx-soundwave-box',
        { scale: 0.88, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.djx-philosophy',
            start: 'top 75%'
          }
        }
      );

      // Gear cards stagger reveal with rotation kick
      gsap.fromTo('.djx-gear-card',
        { y: 60, opacity: 0, rotationY: 10 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.djx-gear-grid',
            start: 'top 80%'
          }
        }
      );

      // Lineup cards zoom parallax
      gsap.utils.toArray('.djx-lineup-card').forEach((card) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%'
            }
          }
        );
      });

      // Infinite Marquee
      gsap.to('.djx-marquee-track', {
        xPercent: -50,
        ease: 'none',
        duration: 18,
        repeat: -1
      });

      // Quote reveal
      gsap.fromTo('.djx-quote p',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.djx-quote',
            start: 'top 75%'
          }
        }
      );
    }, root);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div className="djx-root" ref={root}>
      {/* Side Audio Spectrum Rail */}
      <div className="djx-rail" aria-hidden="true">
        <div className="djx-rail-bars">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <span className="djx-rail-text">BPM 128 · AUDIO HIGH-VOLTAGE</span>
        <div className="djx-rail-bars">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Hero Section */}
      <section className="djx-hero">
        <div className="djx-hero-video-wrap">
          <video
            className="djx-hero-video"
            autoPlay
            loop
            muted
            playsInline
            src="/assets/Videos/ODYSSEY ( nightclub promo video ).mp4"
          />
        </div>
        <div className="djx-hero-overlay" />

        <div className="djx-hero-content">
          <div className="djx-kicker">
            <span className="djx-live-dot" />
            Wassup London / Stage & Sound
          </div>
          <h1>
            <span>Maximum</span>
            <span>Energy. <i>Pure Sound.</i></span>
          </h1>
          <p className="djx-hero-desc">
            We don’t just supply speakers; we engineer atmospheric rave moments, festival-grade lighting rigs and dance floors that stay packed until the final second.
          </p>
          <div>
            <a href="https://wa.me/447454904611" target="_blank" rel="noreferrer" className="djx-btn">
              Book Your Lineup ↗
            </a>
            <a href="#gear" className="djx-btn djx-btn-secondary">
              Explore The Rig ↓
            </a>
          </div>
        </div>

        <div className="djx-hero-stats">
          <div className="djx-stat-item">
            <span className="djx-stat-val">130+ dB</span>
            <span className="djx-stat-lbl">Concert Rig Power</span>
          </div>
          <div className="djx-stat-item">
            <span className="djx-stat-val">500+</span>
            <span className="djx-stat-lbl">Packed Dancefloors</span>
          </div>
          <div className="djx-stat-item">
            <span className="djx-stat-val">London</span>
            <span className="djx-stat-lbl">To Ibiza & Beyond</span>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="djx-marquee" aria-hidden="true">
        <div className="djx-marquee-track">
          <span>NO SCRIPTED PLAYLISTS</span><b>✳</b>
          <span>IMMERSIVE LIGHTING RIOT</span><b>✳</b>
          <span>BASS YOU FEEL IN YOUR CHEST</span><b>✳</b>
          <span>LIVE DHOL & SAX FUSION</span><b>✳</b>
          <span>NO SCRIPTED PLAYLISTS</span><b>✳</b>
          <span>IMMERSIVE LIGHTING RIOT</span><b>✳</b>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="djx-philosophy">
        <div className="djx-soundwave-box">
          <span className="djx-soundwave-tag">Club Heritage</span>
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85"
            alt="Crowd reacting to DJ drop"
          />
        </div>
        <div>
          <p className="djx-eyebrow">01 / The Sound Philosophy</p>
          <h2>Reading The Room.<br /><em>Dropping The Anthem.</em></h2>
          <p className="djx-philosophy-lead">
            Great entertainment isn’t a Spotify playlist on shuffle. It’s an unbroken conversation between the DJ, the lighting technician, and 500 people with their hands in the air.
          </p>
          <p className="djx-philosophy-p">
            Whether it’s an underground UK garage breakdown, an explosive Bollywood sangeet crescendo, or a sophisticated sunset rooftop set at Skylight London — we engineer the tempo to elevate every heartbeat.
          </p>
          <a href="https://wa.me/447454904611" target="_blank" rel="noreferrer" className="djx-btn">
            Customise Your Sound Profile ↗
          </a>
        </div>
      </section>

      {/* Hardware / Gear Showcase */}
      <section className="djx-gear-section" id="gear">
        <div className="djx-gear-head">
          <p className="djx-eyebrow">02 / Technical Arsenal</p>
          <h2>Tour-Grade <i>Hardware</i></h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', margin: '0' }}>
            No home-audio compromises. We deploy hardware trusted by European mega-clubs and arena concert tours.
          </p>
        </div>

        <div className="djx-gear-grid">
          {GEAR.map((item) => (
            <div className="djx-gear-card" key={item.num}>
              <span className="djx-gear-num">{item.num} // SPEC</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul className="djx-gear-spec-list">
                {item.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Live Acts & Performance Roster */}
      <section className="djx-lineup">
        <div className="djx-lineup-head">
          <div>
            <p className="djx-eyebrow">03 / The Collective</p>
            <h2>Live Musicians &<br /><i>Resident Performers</i></h2>
          </div>
          <p style={{ maxWidth: '380px', color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>
            Pair our resident DJs with blistering live instruments to blur the line between a private event and an arena gig.
          </p>
        </div>

        <div className="djx-lineup-grid">
          {ACTS.map((act) => (
            <div className="djx-lineup-card" key={act.title}>
              <img src={act.img} alt={act.title} className="djx-lineup-img" />
              <div className="djx-lineup-overlay">
                <span className="djx-lineup-badge">{act.badge}</span>
                <h3>{act.title}</h3>
                <p>{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big Impact Quote */}
      <section className="djx-quote">
        <p>
          “The moment the bass hits, <span className="glow">nobody remembers</span> who planned the schedule.”
        </p>
      </section>

      {/* CTA Section */}
      <section className="djx-cta">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=85"
          alt="Nightclub lasers"
          className="djx-cta-bg"
        />
        <div className="djx-cta-overlay" />
        <div className="djx-cta-content">
          <p className="djx-eyebrow">04 / Bring The Noise</p>
          <h2>Turn Your Venue<br /><i>Into An Electric Space.</i></h2>
          <p>
            Tell us about your crowd, your date, and your venue in London or worldwide. We’ll design a custom AV & DJ production proposal within 24 hours.
          </p>
          <a
            className="djx-btn"
            href="https://wa.me/447454904611"
            target="_blank"
            rel="noreferrer"
          >
            Chat On WhatsApp With Our Sound Lead ↗
          </a>
        </div>
      </section>

      <div className="djx-back">
        <Link href="/">← Back to Wassup London Home</Link>
      </div>
    </div>
  );
}
