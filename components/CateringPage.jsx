'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import '@/app/styles/catering.css';

const CUISINES = [
  {
    badge: 'North & West India',
    title: 'Heritage Indian',
    desc: 'Rich royal gravies, clay-oven tandoori grills, delicate Punjabi spiced roasts, and authentic Gujarati regional delicacies.',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=85',
    dishes: ['Slow-cooked Dal Makhani & Truffle Naan', 'Smoked Paneer Tikka & Lamb Rogan Josh', 'Gujarati Kadhi & Methi Thepla Platters', 'Saffron Infused Shahi Biryani']
  },
  {
    badge: 'South East Asia',
    title: 'Pan-Asian & Wok',
    desc: 'Vibrant, zesty aromas crafted live. From delicate dim sum baskets to fiery wok-tossed noodles and aromatic curries.',
    img: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=85',
    dishes: ['Steamed Truffle Edamame Dim Sum', 'Crispy Aromatic Duck Rolls & Plum Glaze', 'Thai Basil & Lemongrass King Prawns', 'Katsu Bao Sliders with Pickled Slaw']
  },
  {
    badge: 'Modern Mediterranean',
    title: 'Contemporary Fusion',
    desc: 'Artisanal grazing tables, vibrant seasonal salads, charcoal-grilled skewers, and delicate mezze plates designed to share.',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
    dishes: ["Smoked Burrata with Heritage Tomatoes", 'Whipped Truffle Ricotta Crostini', "Za'atar Crusted Lamb Cutlets", 'Charred Cauliflower Steaks with Tahini']
  },
];

const STATIONS = [
  { icon: '🥟', title: 'Live Chaat Street', desc: 'Pani puri shot fountains, papdi chaat assembled fresh per guest, and spicy aloo tikki on sizzling tawa plates.' },
  { icon: '🔥', title: 'Robata & Tandoor', desc: 'Open charcoal grills filling the air with smoky aromas — skewers, kebabs and naans fired right in front of guests.' },
  { icon: '🍸', title: 'Bespoke Mixology', desc: 'Cocktails and mocktails infused with cardamom, chilli mango, elderflower and smoked rosemary.' },
  { icon: '🍰', title: 'Dessert Architecture', desc: 'Nitro ice creams, warm jalebi with rabri, pistachio macarons, and molten chocolate installations.' },
];

export default function CateringPage() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.ct2-hero-eyebrow, .ct2-hero-title, .ct2-hero-desc, .ct2-hero-actions, .ct2-hero-badge',
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );

      gsap.to('.ct2-hero-img', {
        yPercent: 12, ease: 'none',
        scrollTrigger: { trigger: '.ct2-hero', start: 'top top', end: 'bottom top', scrub: true }
      });

      gsap.utils.toArray('.ct2-reveal').forEach(el => {
        gsap.fromTo(el, { y: 36, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 84%', once: true }
        });
      });

      gsap.fromTo('.ct2-menu-card',
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.ct2-menu-grid', start: 'top 80%' } }
      );

      gsap.fromTo('.ct2-station',
        { scale: 0.94, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'back.out(1.3)',
          scrollTrigger: { trigger: '.ct2-stations-grid', start: 'top 82%' } }
      );

      gsap.to('.ct2-ticker-inner', { xPercent: -50, ease: 'none', duration: 26, repeat: -1 });
    }, root);

    setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => ctx.revert();
  }, []);

  return (
    <div className="ct2-root" ref={root}>

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="ct2-hero">
        <div className="ct2-hero-left">
          <p className="ct2-hero-eyebrow">Wassup London · Exceptional Catering</p>
          <h1 className="ct2-hero-title">
            Food That<br /><em>Steals The Show.</em>
          </h1>
          <p className="ct2-hero-desc">
            Catering isn't just fuel for an event — it's the conversation starter,
            the sensory anchor and the warmth people talk about on the journey home.
          </p>
          <div className="ct2-hero-actions">
            <a href="https://wa.me/447471557773" target="_blank" rel="noreferrer" className="ct2-btn-dark">
              Request A Menu Tasting ↗
            </a>
            <a href="#ct2-menus" className="ct2-btn-outline">
              Explore Cuisines ↓
            </a>
          </div>
        </div>
        <div className="ct2-hero-right">
          <div className="ct2-hero-img-wrap">
            <img className="ct2-hero-img"
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85"
              alt="Artisanal catering tablescape"
            />
          </div>
          <div className="ct2-hero-badge">
            <span className="ct2-badge-icon">🌿</span>
            <div>
              <strong>100% Halal & Veg Friendly</strong>
              <small>Certified dietary kitchens</small>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker ───────────────────────────────────── */}
      <div className="ct2-ticker" aria-hidden="true">
        <div className="ct2-ticker-inner">
          {['FRESH CLAY OVEN NAANS', 'SIZZLING LIVE TAWA COUNTERS', 'BESPOKE CANAPÉS & MOCKTAILS', 'AUTHENTIC ASIAN & GUJARATI SPECIALS',
            'FRESH CLAY OVEN NAANS', 'SIZZLING LIVE TAWA COUNTERS', 'BESPOKE CANAPÉS & MOCKTAILS', 'AUTHENTIC ASIAN & GUJARATI SPECIALS'].map((t, i) => (
            <span key={i}>{t} <b>·</b></span>
          ))}
        </div>
      </div>

      {/* ── Philosophy ───────────────────────────────── */}
      <section className="ct2-philosophy">
        <div className="ct2-phil-imgs ct2-reveal">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85"
            alt="Chef plating food" className="ct2-phil-img ct2-phil-img-1"
          />
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=85"
            alt="Gourmet dish presentation" className="ct2-phil-img ct2-phil-img-2"
          />
        </div>
        <div className="ct2-phil-copy ct2-reveal">
          <p className="ct2-eyebrow">01 · Kitchen Philosophy</p>
          <h2>Honouring Tradition.<br /><em>Plating Innovation.</em></h2>
          <p className="ct2-phil-lead">
            Whether catering for an intimate 60-guest dinner or an 800-guest multi-course gala,
            our head chefs refuse industrial warming trays and tired menus.
          </p>
          <p className="ct2-phil-body">
            We cook with generational recipes, source locally from British farmers, and finish
            dishes live in the venue to guarantee piping-hot flavours, crispy textures, and
            Michelin-worthy presentation.
          </p>
          <a href="https://wa.me/447471557773" target="_blank" rel="noreferrer" className="ct2-text-link">
            Book a consultation call →
          </a>
        </div>
      </section>

      {/* ── Menu grid ────────────────────────────────── */}
      <section className="ct2-menus" id="ct2-menus">
        <div className="ct2-menus-head ct2-reveal">
          <p className="ct2-eyebrow">02 · Curated Cuisines</p>
          <h2>Crafted For <em>Every Palette</em></h2>
          <p className="ct2-menus-sub">From time-honoured South Asian rituals to modern international culinary theatre.</p>
        </div>
        <div className="ct2-menu-grid">
          {CUISINES.map(item => (
            <div className="ct2-menu-card" key={item.title}>
              <div className="ct2-menu-img-wrap">
                <img src={item.img} alt={item.title} />
                <span className="ct2-menu-badge">{item.badge}</span>
              </div>
              <div className="ct2-menu-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul className="ct2-dish-list">
                  {item.dishes.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Live stations ─────────────────────────────── */}
      <section className="ct2-stations">
        <div className="ct2-stations-head ct2-reveal">
          <p className="ct2-eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>03 · Live Interactive Stations</p>
          <h2>Culinary Theatre<br /><em>Right In The Room</em></h2>
          <p className="ct2-stations-sub">
            Transform mealtime into an engaging experience with live chefs crafting hot dishes
            to each guest's preference.
          </p>
        </div>
        <div className="ct2-stations-grid">
          {STATIONS.map(s => (
            <div className="ct2-station" key={s.title}>
              <span className="ct2-station-icon">{s.icon}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote ────────────────────────────────────── */}
      <section className="ct2-quote ct2-reveal">
        <p>"Food is the memory that lingers<br /><em>long after the music stops.</em>"</p>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="ct2-cta">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
          alt="Catering dining experience" className="ct2-cta-bg"
        />
        <div className="ct2-cta-veil" />
        <div className="ct2-cta-body">
          <p className="ct2-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>04 · Taste First</p>
          <h2>Experience The Flavours<br /><em>At A Private Tasting.</em></h2>
          <p>
            Meet our executive head chef at our London tasting kitchen. Sample your proposed menu,
            refine spice balances, and pair signature drinks.
          </p>
          <a className="ct2-cta-btn" href="https://wa.me/447471557773" target="_blank" rel="noreferrer">
            Arrange Your Tasting On WhatsApp ↗
          </a>
        </div>
      </section>

      <div className="ct2-back">
        <Link href="/">← Back to Wassup London</Link>
      </div>
    </div>
  );
}
