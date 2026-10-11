'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const SOLUTIONS = [
  {
    num: '01',
    title: 'Awards & Galas',
    desc: 'High-production dinners and red-carpet award ceremonies with bespoke stage backdrops, broadcast-quality lighting and flawless cue-to-cue execution.',
    features: ['Custom branded stage & LED backdrops', 'Multi-camera live streaming & recordings', 'VIP dining, hospitality & table styling', 'Presenter autocue & sound engineering']
  },
  {
    num: '02',
    title: 'Brand Activations',
    desc: 'Product reveals, pop-up environments, and press launch experiences built to captivate journalists, influencers and global clientele.',
    features: ['Interactive experiential installations', 'Custom scenic fabrication & branding', 'Spatial audio & bespoke show reveals', 'Guest check-in & credential logistics']
  },
  {
    num: '03',
    title: 'Company Summits',
    desc: 'End-of-year corporate celebrations, town halls, and international summits that balance keynote prestige with an unforgettable party.',
    features: ['Crystal-clear keynote audio & mic rigs', 'Dynamic transition into evening entertainment', 'Resident DJs, live bands & headline acts', 'Full venue sourcing & vendor management']
  }
];

export default function CorporatePage() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo('.cpx-hero-content > *',
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: 'power4.out' }
      );

      // Hero background parallax
      gsap.to('.cpx-hero-bg', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.cpx-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Ticker marquee
      gsap.to('.cpx-ticker-track', {
        xPercent: -50,
        ease: 'none',
        duration: 20,
        repeat: -1
      });

      // Solutions cards entrance
      gsap.fromTo('.cpx-sol-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cpx-solutions-grid',
            start: 'top 80%'
          }
        }
      );

      // Stagecraft image parallax
      gsap.fromTo('.cpx-stage-img-wrap',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cpx-stagecraft',
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
    <div className="cpx-root" ref={root}>
      {/* Side Rail */}
      <div className="cpx-rail" aria-hidden="true">
        <span className="cpx-rail-dot" />
        <span className="cpx-rail-text">PRECISION · PRODUCTION · LONDON</span>
        <span className="cpx-rail-dot" />
      </div>

      {/* Hero Section */}
      <section className="cpx-hero">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85"
          alt="Corporate Gala at The Shard"
          className="cpx-hero-bg"
        />
        <div className="cpx-hero-overlay" />

        <div className="cpx-hero-content">
          <span className="cpx-kicker">Wassup London / Corporate Production</span>
          <h1>
            <span>Precision At</span>
            <span>Scale. <em>Impeccable Impact.</em></span>
          </h1>
          <p className="cpx-hero-desc">
            We deliver high-stakes galas, product reveals, awards ceremonies, and corporate celebrations where your brand reputation is front and centre.
          </p>
          <div>
            <a href="https://wa.me/447454904611" target="_blank" rel="noreferrer" className="cpx-btn">
              Consult With Our Production Director ↗
            </a>
            <a href="#solutions" className="cpx-btn cpx-btn-outline">
              Our Capabilities ↓
            </a>
          </div>
        </div>

        <div className="cpx-hero-metrics">
          <div className="cpx-metric">
            <span className="cpx-metric-num">100%</span>
            <span className="cpx-metric-lbl">On-Time Cues</span>
          </div>
          <div className="cpx-metric">
            <span className="cpx-metric-num">2,500+</span>
            <span className="cpx-metric-lbl">Capacity Handled</span>
          </div>
          <div className="cpx-metric">
            <span className="cpx-metric-num">Tier-1</span>
            <span className="cpx-metric-lbl">AV & Stage Rig</span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="cpx-ticker" aria-hidden="true">
        <div className="cpx-ticker-track">
          <span>BROADCAST STAGE LIGHTING</span><b>✳</b>
          <span>DIRECTOR-LEVEL EVENT CALLING</span><b>✳</b>
          <span>BESPOKE BRAND EXPERIENCES</span><b>✳</b>
          <span>FLAWLESS LOGISTICS & VIP HOSPITALITY</span><b>✳</b>
          <span>BROADCAST STAGE LIGHTING</span><b>✳</b>
          <span>DIRECTOR-LEVEL EVENT CALLING</span><b>✳</b>
        </div>
      </div>

      {/* Solutions */}
      <section className="cpx-solutions" id="solutions">
        <div className="cpx-solutions-head">
          <div>
            <p className="cpx-eyebrow">01 / Event Formats</p>
            <h2>End-To-End<br /><i>Production</i></h2>
          </div>
          <p style={{ maxWidth: '380px', color: 'var(--cpx-slate)', fontSize: '15px' }}>
            From blank-canvas warehouse transformations to five-star hotel ballrooms across London and Europe.
          </p>
        </div>

        <div className="cpx-solutions-grid">
          {SOLUTIONS.map((sol) => (
            <div className="cpx-sol-card" key={sol.num}>
              <span className="cpx-sol-num">{sol.num} // FORMAT</span>
              <h3>{sol.title}</h3>
              <p>{sol.desc}</p>
              <ul className="cpx-sol-features">
                {sol.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* High-Stakes Stagecraft */}
      <section className="cpx-stagecraft">
        <div className="cpx-stage-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=85"
            alt="Corporate event production team"
          />
        </div>
        <div className="cpx-stagecraft-copy">
          <p className="cpx-eyebrow">02 / Technical Rigour</p>
          <h2>Zero Fluffs.<br /><em>Total Reliability.</em></h2>
          <p className="cpx-stagecraft-lead">
            Corporate productions have no second takes. When the CEO takes the stage or the winner is announced, every cue must fire with millisecond accuracy.
          </p>
          <p className="cpx-stagecraft-p">
            Our event directors provide full technical riders, 3D venue renders, health & safety certifications, and unified show calling so your internal team can relax and host.
          </p>
          <a href="https://wa.me/447454904611" target="_blank" rel="noreferrer" className="cpx-btn">
            Request A Production Proposal ↗
          </a>
        </div>
      </section>

      {/* Quote */}
      <section className="cpx-quote">
        <p>
          “When the production is seamless, <span className="accent">the message</span> is unforgettable.”
        </p>
      </section>

      {/* CTA */}
      <section className="cpx-cta">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85"
          alt="Corporate event stage"
          className="cpx-cta-bg"
        />
        <div className="cpx-cta-overlay" />
        <div className="cpx-cta-content">
          <p className="cpx-eyebrow" style={{ color: 'var(--cpx-orange)' }}>03 / Next Steps</p>
          <h2>Plan Your Next<br /><i>High-Impact Event.</i></h2>
          <p>
            Contact our corporate production division to review venue availability, stage designs, and turnkey budgets.
          </p>
          <a
            className="cpx-btn"
            href="https://wa.me/447454904611"
            target="_blank"
            rel="noreferrer"
          >
            Connect On WhatsApp ↗
          </a>
        </div>
      </section>

      <div className="cpx-back">
        <Link href="/">← Back to Wassup London Home</Link>
      </div>
    </div>
  );
}
