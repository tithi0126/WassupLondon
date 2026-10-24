'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import '@/app/styles/corporate.css';

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
  },
];

const METRICS = [
  { val: '100%', lbl: 'On-Time Cues' },
  { val: '2,500+', lbl: 'Capacity Handled' },
  { val: 'Tier-1', lbl: 'AV & Stage Rig' },
];

export default function CorporatePage() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.cp2-hero-eyebrow, .cp2-hero-title, .cp2-hero-desc, .cp2-hero-actions, .cp2-hero-metrics',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      );

      gsap.to('.cp2-hero-img', {
        yPercent: 14, ease: 'none',
        scrollTrigger: { trigger: '.cp2-hero', start: 'top top', end: 'bottom top', scrub: true }
      });

      gsap.utils.toArray('.cp2-reveal').forEach(el => {
        gsap.fromTo(el, { y: 36, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 84%', once: true }
        });
      });

      gsap.fromTo('.cp2-sol-card',
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.13, ease: 'power3.out',
          scrollTrigger: { trigger: '.cp2-sol-grid', start: 'top 80%' } }
      );

      gsap.to('.cp2-ticker-inner', { xPercent: -50, ease: 'none', duration: 22, repeat: -1 });
    }, root);

    setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => ctx.revert();
  }, []);

  return (
    <div className="cp2-root" ref={root}>

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="cp2-hero">
        <div className="cp2-hero-img-wrap">
          <img
            className="cp2-hero-img"
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85"
            alt=""
          />
          <div className="cp2-hero-veil" />
        </div>
        <div className="cp2-hero-body">
          <p className="cp2-hero-eyebrow">Wassup London · Corporate Production</p>
          <h1 className="cp2-hero-title">
            Precision At Scale.<br /><em>Impeccable Impact.</em>
          </h1>
          <p className="cp2-hero-desc">
            We deliver high-stakes galas, product reveals, awards ceremonies, and corporate
            celebrations where your brand reputation is front and centre.
          </p>
          <div className="cp2-hero-actions">
            <a href="https://wa.me/447471557773" target="_blank" rel="noreferrer" className="cp2-btn-primary">
              Consult With Our Director ↗
            </a>
            <a href="#cp2-solutions" className="cp2-btn-ghost">
              Our Capabilities ↓
            </a>
          </div>
        </div>
        <div className="cp2-hero-metrics">
          {METRICS.map((m, i) => (
            <div key={i} className="cp2-metric">
              <span className="cp2-metric-val">{m.val}</span>
              <span className="cp2-metric-lbl">{m.lbl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ticker ───────────────────────────────────── */}
      <div className="cp2-ticker" aria-hidden="true">
        <div className="cp2-ticker-inner">
          {['BROADCAST STAGE LIGHTING', 'DIRECTOR-LEVEL EVENT CALLING', 'BESPOKE BRAND EXPERIENCES', 'FLAWLESS LOGISTICS & VIP HOSPITALITY',
            'BROADCAST STAGE LIGHTING', 'DIRECTOR-LEVEL EVENT CALLING', 'BESPOKE BRAND EXPERIENCES', 'FLAWLESS LOGISTICS & VIP HOSPITALITY'].map((t, i) => (
            <span key={i}>{t} <b>·</b></span>
          ))}
        </div>
      </div>

      {/* ── Solutions ────────────────────────────────── */}
      <section className="cp2-solutions" id="cp2-solutions">
        <div className="cp2-sol-head cp2-reveal">
          <div>
            <p className="cp2-eyebrow">01 · Event Formats</p>
            <h2>End-To-End <em>Production</em></h2>
          </div>
          <p className="cp2-sol-sub">
            From blank-canvas warehouse transformations to five-star hotel ballrooms
            across London and Europe.
          </p>
        </div>
        <div className="cp2-sol-grid">
          {SOLUTIONS.map(sol => (
            <div className="cp2-sol-card" key={sol.num}>
              <span className="cp2-sol-num">{sol.num}</span>
              <h3>{sol.title}</h3>
              <p>{sol.desc}</p>
              <ul className="cp2-feature-list">
                {sol.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stagecraft ───────────────────────────────── */}
      <section className="cp2-stagecraft">
        <div className="cp2-stage-img cp2-reveal">
          <img
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=85"
            alt="Corporate event production team"
          />
        </div>
        <div className="cp2-stage-copy cp2-reveal">
          <p className="cp2-eyebrow">02 · Technical Rigour</p>
          <h2>Zero Fluffs.<br /><em>Total Reliability.</em></h2>
          <p className="cp2-stage-lead">
            Corporate productions have no second takes. When the CEO takes the stage or the
            winner is announced, every cue must fire with millisecond accuracy.
          </p>
          <p className="cp2-stage-body">
            Our event directors provide full technical riders, 3D venue renders, health &
            safety certifications, and unified show calling so your internal team can relax
            and host.
          </p>
          <a href="https://wa.me/447471557773" target="_blank" rel="noreferrer" className="cp2-text-link">
            Request a production proposal →
          </a>
        </div>
      </section>

      {/* ── Quote ────────────────────────────────────── */}
      <section className="cp2-quote cp2-reveal">
        <p>"When the production is seamless,<br /><em>the message is unforgettable.</em>"</p>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="cp2-cta">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85"
          alt="" className="cp2-cta-bg"
        />
        <div className="cp2-cta-veil" />
        <div className="cp2-cta-body">
          <p className="cp2-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>03 · Next Steps</p>
          <h2>Plan Your Next<br /><em>High-Impact Event.</em></h2>
          <p>
            Contact our corporate production division to review venue availability,
            stage designs, and turnkey budgets.
          </p>
          <a className="cp2-cta-btn" href="https://wa.me/447471557773" target="_blank" rel="noreferrer">
            Connect On WhatsApp ↗
          </a>
        </div>
      </section>

      <div className="cp2-back">
        <Link href="/">← Back to Wassup London</Link>
      </div>
    </div>
  );
}
