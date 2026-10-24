'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import '@/app/styles/packages.css';

const TIERS = [
  {
    tag: 'Boutique & Intimate',
    title: 'Essential',
    desc: 'For refined engagements, cocktail soirees, and private villa dinners demanding pristine audio clarity and tasteful ambiance.',
    features: [
      'Pro crystal-audio sound rig up to 120 guests',
      'Dual wireless handheld Shure Axient microphones',
      'Architectural warm-white LED uplighting suite',
      'Club-credentialed resident DJ (up to 5 hours)',
      'Pre-event technical walkthrough & early soundcheck',
      'On-site audio technician throughout event'
    ],
    featured: false
  },
  {
    tag: 'Signature Choice',
    title: 'Elevated',
    desc: 'The gold standard for luxury receptions, rooftop celebrations, and landmark birthday milestones.',
    features: [
      'Concert-spec d&b Audiotechnik / L-Acoustics system',
      'Intelligent DMX moving heads & custom lighting scenes',
      'Seamless gloss white or mirror-gold DJ booth build',
      'Resident open-format DJ + Live Saxophone or Dhol set',
      'Low-fog dry ice machine for cinematic first dance',
      'Dedicated lead sound designer & lighting programmer'
    ],
    featured: true
  },
  {
    tag: 'Arena Scale Production',
    title: 'Grand Ballroom',
    desc: 'Uncompromising high-drama production engineered for 5-star hotel ballrooms, awards galas, and multi-day celebrations.',
    features: [
      'High-resolution P2.6 LED video wall backdrop (16x9ft)',
      'Timecode-synced beam, spot, and club laser show',
      'Full 3-piece live musician fusion (Sax, Dhol & Percussion)',
      'Cold spark indoor pyrotechnics & confetti moment',
      'Custom 3D infinity LED or gloss acrylic dance floor',
      'Executive event director & on-site production runner'
    ],
    featured: false
  },
  {
    tag: 'Bespoke Atelier',
    title: 'Custom Blueprint',
    desc: 'Destination weddings across Europe, historic country estates, or raw blank-canvas venues built from the ground up.',
    features: [
      '3D CAD spatial visualization & acoustic simulation',
      'Michelin-calibre multi-course catering curation',
      'International headline artist & DJ talent booking',
      'Custom marquee structure, staging & generator logistics',
      'End-to-end supplier coordination & rehearsal direction',
      'Unlimited dedicated senior planning consultation'
    ],
    featured: false
  }
];

const ADDONS = [
  {
    icon: '✨',
    title: 'Live Musician Collective',
    desc: 'Electric violinist, live saxophonist, master dhol drummers, or brass section improvising live with the DJ.'
  },
  {
    icon: '⚡',
    title: 'Cold Spark Pyro & FX',
    desc: 'Indoor-safe cold spark pyrotechnics, cryogenic Co2 jet cannons, and low-lying atmospheric cloud fog.'
  },
  {
    icon: '🪩',
    title: '3D Infinity Dance Floor',
    desc: 'Pressure-sensitive interactive LED dance floors or high-gloss mirrored staging with personalized monograms.'
  },
  {
    icon: '🎥',
    title: 'Ultra-HD LED Video Walls',
    desc: 'Modular video walls displaying custom cinematic visuals, ambient generative graphics, and live camera feeds.'
  },
  {
    icon: '🍸',
    title: 'Bespoke Mixology Bar',
    desc: 'Flair bartenders crafting personalized signature cocktails infused with botanical syrups and smoked aromatics.'
  },
  {
    icon: '🎙️',
    title: 'Broadcast AV & Autocue',
    desc: 'Multi-camera 4K recording, live streaming, wireless teleprompters, and stage monitoring for corporate addresses.'
  }
];

const METRICS = [
  { val: '100%', lbl: 'Transparent Line Items' },
  { val: '15+', lbl: 'Years Production Mastery' },
  { val: 'd&b / L-Acoustics', lbl: 'Concert-Grade Rigs' },
  { val: '24/7', lbl: 'Direct Director Access' }
];

export default function PackagesPage() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        '.pk2-hero-eyebrow, .pk2-hero-title, .pk2-hero-desc, .pk2-hero-actions, .pk2-hero-metrics',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: 'power4.out', delay: 0.15 }
      );

      // Hero background parallax
      gsap.to('.pk2-hero-img', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.pk2-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Ticker marquee
      gsap.to('.pk2-ticker-track', {
        xPercent: -50,
        ease: 'none',
        duration: 25,
        repeat: -1
      });

      // Tiers stagger
      gsap.fromTo(
        '.pk2-tier-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pk2-tiers-grid',
            start: 'top 82%'
          }
        }
      );

      // Addons stagger
      gsap.fromTo(
        '.pk2-addon-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pk2-addons-grid',
            start: 'top 85%'
          }
        }
      );

      // Bespoke reveal
      gsap.fromTo(
        '.pk2-bespoke-visual, .pk2-bespoke-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pk2-bespoke-grid',
            start: 'top 80%'
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
    <div className="pk2-root" ref={root}>
      {/* Hero Section */}
      <section className="pk2-hero">
        <div className="pk2-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=2200&q=85"
            alt="Luxury ballroom lighting and event production"
            className="pk2-hero-img"
          />
          <div className="pk2-hero-gradient" />
        </div>

        <div className="pk2-hero-inner">
          <div className="pk2-eyebrow">Production Tiers & Packages</div>
          <h1 className="pk2-hero-title">
            Curated For Impact.<br />
            Scaled <em>To Perfection.</em>
          </h1>
          <p className="pk2-hero-desc">
            No cookie-cutter templates or hidden overtime surcharges. Choose from our four core production tiers or build a modular blueprint tailored precisely to your venue and guest count.
          </p>

          <div className="pk2-hero-actions">
            <a href="#tiers" className="pk2-btn-primary">
              Explore Tiers ↓
            </a>
            <a
              href="https://wa.me/447471557773?text=Hello%20Wassup%20London,%20I%20would%20like%20to%20discuss%20a%20package%20quote"
              target="_blank"
              rel="noreferrer"
              className="pk2-btn-outline"
            >
              Request Custom Quote ↗
            </a>
          </div>

          <div className="pk2-hero-metrics">
            {METRICS.map((metric, i) => (
              <div key={i} className="pk2-metric-item">
                <div className="pk2-metric-val">{metric.val}</div>
                <div className="pk2-metric-lbl">{metric.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="pk2-ticker" aria-hidden="true">
        <div className="pk2-ticker-track">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="pk2-ticker-item">
              <span>All-Inclusive Concert Audio & Lighting</span>
              <span className="pk2-ticker-star">✦</span>
              <span>Transparent Line-Item Estimates</span>
              <span className="pk2-ticker-star">✦</span>
              <span>Director-Level Precision</span>
              <span className="pk2-ticker-star">✦</span>
              <span>London · UK · Destination Worldwide</span>
              <span className="pk2-ticker-star">✦</span>
              <span>Bespoke 3D Spatial Staging</span>
              <span className="pk2-ticker-star">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tiers Section */}
      <section className="pk2-tiers-section" id="tiers">
        <div className="pk2-section-head">
          <div className="pk2-eyebrow">01 / Modular Frameworks</div>
          <h2 className="pk2-section-title">
            Choose Your <em>Production Tier</em>
          </h2>
          <p className="pk2-section-sub">
            Every tier serves as an engineered baseline. Layer in live musicians, staging, and custom visual content to reflect your signature vision.
          </p>
        </div>

        <div className="pk2-tiers-grid">
          {TIERS.map((tier) => (
            <div
              className={`pk2-tier-card ${tier.featured ? 'featured' : ''}`}
              key={tier.title}
            >
              {tier.featured && (
                <div className="pk2-featured-badge">Most Requested</div>
              )}
              <div className="pk2-tier-tag">{tier.tag}</div>
              <h3 className="pk2-tier-name">{tier.title}</h3>
              <p className="pk2-tier-desc">{tier.desc}</p>
              <div className="pk2-tier-divider" />
              <ul className="pk2-tier-features">
                {tier.features.map((feature, i) => (
                  <li key={i} className="pk2-tier-feature-item">
                    <span className="pk2-tier-feature-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/447471557773?text=Hi%20Wassup%20London,%20I'm%20interested%20in%20the%20${tier.title}%20Tier`}
                target="_blank"
                rel="noreferrer"
                className="pk2-tier-btn"
              >
                Inquire on WhatsApp ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Modular Add-ons */}
      <section className="pk2-addons-section">
        <div className="pk2-addons-inner">
          <div className="pk2-section-head">
            <div className="pk2-eyebrow">02 / Tailored Enhancements</div>
            <h2 className="pk2-section-title">
              Modular <em>Production Upgrades</em>
            </h2>
            <p className="pk2-section-sub">
              Add individual focal points to any tier without paying for full package upgrades you don’t need.
            </p>
          </div>

          <div className="pk2-addons-grid">
            {ADDONS.map((addon, i) => (
              <div key={i} className="pk2-addon-card">
                <span className="pk2-addon-icon">{addon.icon}</span>
                <h3 className="pk2-addon-title">{addon.title}</h3>
                <p className="pk2-addon-desc">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Architecture */}
      <section className="pk2-bespoke-section">
        <div className="pk2-bespoke-grid">
          <div className="pk2-bespoke-visual">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
              alt="Bespoke wedding and gala styling"
              className="pk2-bespoke-img"
            />
            <div className="pk2-bespoke-badge">
              <div className="pk2-bespoke-badge-dot" />
              <div className="pk2-bespoke-badge-text">100% Bespoke Execution</div>
            </div>
          </div>

          <div className="pk2-bespoke-content">
            <div className="pk2-eyebrow">03 / Beyond Standard Formats</div>
            <h2 className="pk2-bespoke-title">
              Have A Blank Canvas <em>Or Destination?</em>
            </h2>
            <p className="pk2-bespoke-p">
              Whether you are transforming a listed manor, a marquee on private grounds, or flying our crew out to Lake Como or the French Riviera, our bespoke division manages every detail.
            </p>
            <p className="pk2-bespoke-p">
              We conduct full acoustic and power surveys, liaise with venue heritage managers, and provide 3D CAD staging renders so you can step inside your celebration before opening day.
            </p>

            <div className="pk2-bespoke-steps">
              <div className="pk2-step-card">
                <div className="pk2-step-num">STEP 01</div>
                <div className="pk2-step-title">Acoustic Survey</div>
                <p className="pk2-step-desc">Venue inspection & power distribution audit</p>
              </div>
              <div className="pk2-step-card">
                <div className="pk2-step-num">STEP 02</div>
                <div className="pk2-step-title">3D Staging Render</div>
                <p className="pk2-step-desc">Photorealistic lighting & floorplan visualization</p>
              </div>
              <div className="pk2-step-card">
                <div className="pk2-step-num">STEP 03</div>
                <div className="pk2-step-title">Timecode Rehearsal</div>
                <p className="pk2-step-desc">Audio-visual cue programming & artist sync</p>
              </div>
              <div className="pk2-step-card">
                <div className="pk2-step-num">STEP 04</div>
                <div className="pk2-step-title">Director Execution</div>
                <p className="pk2-step-desc">Calm, cue-to-cue oversight until final lights down</p>
              </div>
            </div>

            <div>
              <a
                href="https://wa.me/447471557773?text=Hello%20Wassup%20London,%20I'd%20like%20to%20arrange%20a%20bespoke%20production%20consultation"
                target="_blank"
                rel="noreferrer"
                className="pk2-btn-primary"
              >
                Schedule Production Consultation ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="pk2-quote-section">
        <div className="pk2-quote-inner">
          <p className="pk2-quote-text">
            “Effortless calm behind the scenes. <span>Uncompromising spectacle</span> on the floor.”
          </p>
          <div className="pk2-quote-author">Wassup London · Production Philosophy</div>
        </div>
      </section>

      {/* CTA */}
      <section className="pk2-cta-section">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1800&q=85"
          alt="Nightclub and party atmosphere"
          className="pk2-cta-bg"
        />
        <div className="pk2-cta-overlay" />
        <div className="pk2-cta-content">
          <div className="pk2-eyebrow">04 / Availability & Bookings</div>
          <h2 className="pk2-cta-title">
            Lock In Your Date <em>With Confidence</em>
          </h2>
          <p className="pk2-cta-desc">
            Prime weekend dates across London and Surrey book out 6 to 12 months ahead. Check date availability with our production desk in minutes.
          </p>
          <div className="pk2-cta-buttons">
            <a
              className="pk2-btn-primary"
              href="https://wa.me/447471557773?text=Hi%20Wassup%20London,%20can%20you%20check%20availability%20for%20my%20event%20date?"
              target="_blank"
              rel="noreferrer"
            >
              Check Date On WhatsApp ↗
            </a>
            <Link href="/" className="pk2-btn-outline">
              Back to Overview
            </Link>
          </div>
        </div>
      </section>

      <Link href="/" className="pk2-back-link">
        ← Back to Wassup London Home
      </Link>
    </div>
  );
}
