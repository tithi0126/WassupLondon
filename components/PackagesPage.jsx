'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const TIERS = [
  {
    tag: 'TICKET / INTIMATE',
    title: 'Essential',
    desc: 'Ideal for birthday parties, private engagements and boutique gatherings looking for pro sound & vibes.',
    includes: [
      'Pro sound system up to 150 guests',
      'Intelligent LED moving head lights',
      'Open-format DJ (up to 5 hours)',
      'Wireless microphones for toasts',
      'Early soundcheck & setup'
    ],
    featured: false
  },
  {
    tag: 'MOST POPULAR',
    title: 'Premium',
    desc: 'The gold standard for multi-function weddings, rooftop raves and milestone celebratory galas.',
    includes: [
      'Concert-spec d&b / L-Acoustics audio',
      'Custom DMX automated lighting rig',
      'Gloss white or LED dance floor (16x16ft)',
      'Resident club DJ + Live Dhol or Sax',
      'Low-fog dry ice machine for special moments',
      'Dedicated on-site sound engineer'
    ],
    featured: true
  },
  {
    tag: 'COMPLETE ARENA PRODUCTION',
    title: 'Luxury',
    desc: 'Uncompromising grand ballroom weddings, awards ceremonies and festival-scale corporate productions.',
    includes: [
      'Full stage design & LED video wall backdrop',
      'Timecode synced beam, spot & laser show',
      'Full live band or 3-piece live musician fusion',
      'Indoor cold spark pyro & confetti drops',
      'Custom monogram projection & infinity floor',
      'Lead event director & production runner'
    ],
    featured: false
  },
  {
    tag: 'CUSTOM BLUEPRINT',
    title: 'Bespoke',
    desc: 'Destination weddings in Europe, multi-day celebrations or blank-canvas spaces built from the ground up.',
    includes: [
      'Complete end-to-end event architecting',
      'Michelin-standard catering curation',
      'International artist booking & riders',
      'Custom scenic build & 3D space renders',
      'Marquee & power generator logistics',
      'Unlimited dedicated planning support'
    ],
    featured: false
  }
];

export default function PackagesPage() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo('.pkx-hero-content > *',
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: 'power4.out' }
      );

      // Hero background parallax
      gsap.to('.pkx-hero-bg', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.pkx-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Ticker marquee
      gsap.to('.pkx-ticker-track', {
        xPercent: -50,
        ease: 'none',
        duration: 22,
        repeat: -1
      });

      // Stagger tier cards
      gsap.fromTo('.pkx-tier-card',
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pkx-tiers-grid',
            start: 'top 80%'
          }
        }
      );

      // Custom section image
      gsap.fromTo('.pkx-custom-img-wrap',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pkx-custom',
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
    <div className="pkx-root" ref={root}>
      {/* Side Rail */}
      <div className="pkx-rail" aria-hidden="true">
        <span className="pkx-rail-text">PACKAGES & TIERS · WASSUP LONDON</span>
      </div>

      {/* Hero Section */}
      <section className="pkx-hero">
        <img
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury event lighting and dining setup"
          className="pkx-hero-bg"
        />
        <div className="pkx-hero-overlay" />

        <div className="pkx-hero-content">
          <span className="pkx-kicker">Wassup London / Packages & Production</span>
          <h1>
            <span>Curated For Impact.</span>
            <span>Tailored <em>To You.</em></span>
          </h1>
          <p className="pkx-hero-desc">
            No cookie-cutter templates. Choose from four finely honed packages or let us build a bespoke production blueprint around your exact vision.
          </p>
          <div>
            <a href="#tiers" className="pkx-btn">
              Compare Tiers ↓
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="pkx-ticker" aria-hidden="true">
        <div className="pkx-ticker-track">
          <span>ALL-INCLUSIVE SOUND & LIGHTING</span><b>✳</b>
          <span>TRANSPARENT VALUE · NO HIDDEN FEES</span><b>✳</b>
          <span>DIRECTOR-LEVEL DEDICATION</span><b>✳</b>
          <span>LONDON · UK · DESTINATION</span><b>✳</b>
          <span>ALL-INCLUSIVE SOUND & LIGHTING</span><b>✳</b>
        </div>
      </div>

      {/* Package Tiers Grid */}
      <section className="pkx-tiers" id="tiers">
        <div className="pkx-tiers-head">
          <p className="pkx-eyebrow">01 / Curated Packages</p>
          <h2>Choose Your <i>Production Level</i></h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', margin: '0' }}>
            Every package can be upgraded with live musicians, LED screens, catering and bespoke decor.
          </p>
        </div>

        <div className="pkx-tiers-grid">
          {TIERS.map((tier) => (
            <div className={`pkx-tier-card ${tier.featured ? 'featured' : ''}`} key={tier.title}>
              <span className="pkx-tier-tag">{tier.tag}</span>
              <h3>{tier.title}</h3>
              <p className="pkx-tier-desc">{tier.desc}</p>
              <ul className="pkx-tier-includes">
                {tier.includes.map((inc, i) => (
                  <li key={i}>{inc}</li>
                ))}
              </ul>
              <a
                href="https://wa.me/447454904611"
                target="_blank"
                rel="noreferrer"
                className="pkx-tier-btn"
              >
                Inquire on WhatsApp ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Bespoke Production Section */}
      <section className="pkx-custom">
        <div className="pkx-custom-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
            alt="Bespoke wedding and gala styling"
          />
        </div>
        <div className="pkx-custom-copy">
          <p className="pkx-eyebrow">02 / Bespoke Creations</p>
          <h2>Have Something Unique<br /><em>In Mind?</em></h2>
          <p className="pkx-custom-lead">
            Many of our clients combine elements across different tiers or bring unusual venues — historic estates, airplane hangars, rooftop terraces, or overseas destinations.
          </p>
          <p className="pkx-custom-p">
            We offer line-item transparency and custom site visits. You get a single point of contact and one combined crew handling audio, lighting, catering, and decor.
          </p>
          <a
            href="https://wa.me/447454904611"
            target="_blank"
            rel="noreferrer"
            className="pkx-btn"
          >
            Start A Custom Quote ↗
          </a>
        </div>
      </section>

      {/* Quote */}
      <section className="pkx-quote">
        <p>
          “Simplicity in the planning. <span className="pink">Spectacle</span> in the execution.”
        </p>
      </section>

      {/* CTA */}
      <section className="pkx-cta">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=85"
          alt="Nightclub and party atmosphere"
          className="pkx-cta-bg"
        />
        <div className="pkx-cta-overlay" />
        <div className="pkx-cta-content">
          <p className="pkx-eyebrow">03 / Availability & Dates</p>
          <h2>Check Your Date<br /><i>With Our Team.</i></h2>
          <p>
            Key weekend dates book 6–12 months in advance. Drop us your location and date for an instant availability check.
          </p>
          <a
            className="pkx-btn"
            href="https://wa.me/447454904611"
            target="_blank"
            rel="noreferrer"
          >
            Check Availability On WhatsApp ↗
          </a>
        </div>
      </section>

      <div className="pkx-back">
        <Link href="/">← Back to Wassup London Home</Link>
      </div>
    </div>
  );
}
