'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

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
    dishes: ['Smoked Burrata with Heritage Tomatoes', 'Whipped Truffle Ricotta Crostini', 'Za’atar Crusted Lamb Cutlets', 'Charred Cauliflower Steaks with Tahini']
  }
];

const COUNTERS = [
  {
    icon: '🥟',
    title: 'Live Chaat Street',
    desc: 'Pani puri shot fountains, papdi chaat assembled fresh per guest, and spicy aloo tikki on sizzling tawa plates.'
  },
  {
    icon: '🔥',
    title: 'Robata & Tandoor',
    desc: 'Open charcoal grills filling the air with smoky aromas — skewers, kebabs and naans fired right in front of guests.'
  },
  {
    icon: '🍸',
    title: 'Bespoke Mixology',
    desc: 'Cocktails and mocktails infused with cardamom, chilli mango, elderflower and smoked rosemary.'
  },
  {
    icon: '🍰',
    title: 'Dessert Architecture',
    desc: 'Nitro ice creams, warm jalebi with rabri, pistachio macarons, and molten chocolate installations.'
  }
];

export default function CateringPage() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero image parallax
      gsap.to('.ctx-hero-art img', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.ctx-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Hero text entrance
      gsap.fromTo('.ctx-hero-copy > *',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out' }
      );

      // Heritage images float on scroll
      gsap.fromTo('.ctx-heritage-img-wrap',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ctx-heritage',
            start: 'top 80%'
          }
        }
      );

      // Menu cards cascade
      gsap.fromTo('.ctx-menu-card',
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ctx-menu-grid',
            start: 'top 80%'
          }
        }
      );

      // Live counters reveal
      gsap.fromTo('.ctx-counter-item',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.ctx-counters-grid',
            start: 'top 85%'
          }
        }
      );

      // Flavour ticker marquee
      gsap.to('.ctx-ticker-track', {
        xPercent: -50,
        ease: 'none',
        duration: 22,
        repeat: -1
      });
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
    <div className="ctx-root" ref={root}>
      {/* Side Culinary Rail */}
      <div className="ctx-rail" aria-hidden="true">
        <span className="ctx-rail-text">TASTE · TEXTURE · HERITAGE · WASSUP LONDON</span>
      </div>

      {/* Hero Section */}
      <section className="ctx-hero">
        <div className="ctx-hero-copy">
          <span className="ctx-kicker">Wassup London / Exceptional Catering</span>
          <h1>
            <span>Food That</span>
            <span>Steals <em>The Show.</em></span>
          </h1>
          <p className="ctx-hero-desc">
            Catering isn’t just fuel for an event — it’s the conversation starter, the sensory anchor and the warmth people talk about on the journey home.
          </p>
          <div>
            <a href="https://wa.me/447454904611" target="_blank" rel="noreferrer" className="ctx-btn">
              Request A Menu Tasting ↗
            </a>
            <a href="#menus" className="ctx-btn ctx-btn-outline">
              Explore Cuisines ↓
            </a>
          </div>
        </div>

        <div className="ctx-hero-art">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85"
            alt="Artisanal catering tablescape"
          />
          <div className="ctx-hero-badge">
            <span>🌿</span>
            <div className="ctx-hero-badge-text">
              <strong>100% Halal & Veg Friendly</strong>
              <small>Certified dietary kitchens</small>
            </div>
          </div>
        </div>
      </section>

      {/* Flavour Marquee */}
      <div className="ctx-ticker" aria-hidden="true">
        <div className="ctx-ticker-track">
          <span>FRESH CLAY OVEN NAANS</span><b>✳</b>
          <span>SIZZLING LIVE TAWA COUNTERS</span><b>✳</b>
          <span>BESPOKE CANAPÉS & MOCKTAILS</span><b>✳</b>
          <span>AUTHENTIC ASIAN & GUJARATI SPECIALS</span><b>✳</b>
          <span>FRESH CLAY OVEN NAANS</span><b>✳</b>
          <span>SIZZLING LIVE TAWA COUNTERS</span><b>✳</b>
        </div>
      </div>

      {/* Heritage & Standard */}
      <section className="ctx-heritage">
        <div className="ctx-heritage-grid">
          <div className="ctx-heritage-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85"
              alt="Chef plating food"
            />
          </div>
          <div className="ctx-heritage-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=85"
              alt="Gourmet dish presentation"
            />
          </div>
        </div>

        <div className="ctx-heritage-copy">
          <p className="ctx-eyebrow">01 / The Kitchen Philosophy</p>
          <h2>Honouring Tradition.<br /><i>Plating Innovation.</i></h2>
          <p className="ctx-heritage-lead">
            Whether catering for an intimate 60-guest dinner or an 800-guest multi-course gala, our head chefs refuse industrial warming trays and tired menus.
          </p>
          <p className="ctx-heritage-p">
            We cook with generational recipes, source locally from British farmers, and finish dishes live in the venue to guarantee piping-hot flavours, crispy textures, and Michelin-worthy presentation.
          </p>
          <a href="https://wa.me/447454904611" target="_blank" rel="noreferrer" className="ctx-btn">
            Book A Consultation Call ↗
          </a>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="ctx-menu-section" id="menus">
        <div className="ctx-menu-head">
          <p className="ctx-eyebrow">02 / Curated Cuisines</p>
          <h2>Crafted For <em>Every Palette</em></h2>
          <p style={{ color: '#55524d', fontSize: '18px', margin: '0' }}>
            From time-honoured South Asian rituals to modern international culinary theatre.
          </p>
        </div>

        <div className="ctx-menu-grid">
          {CUISINES.map((item) => (
            <div className="ctx-menu-card" key={item.title}>
              <div className="ctx-menu-card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="ctx-menu-card-body">
                <span className="ctx-menu-badge">{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul className="ctx-menu-dishes">
                  {item.dishes.map((dish, i) => (
                    <li key={i}>{dish}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Stations Theatre */}
      <section className="ctx-counters">
        <div className="ctx-counters-head">
          <div>
            <p className="ctx-eyebrow" style={{ color: 'var(--ctx-orange)' }}>03 / Live Interactive Stations</p>
            <h2>Culinary Theatre<br /><i>Right In The Room</i></h2>
          </div>
          <p style={{ maxWidth: '400px', color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>
            Transform mealtime into an engaging experience with live chefs crafting hot dishes to each guest’s preference.
          </p>
        </div>

        <div className="ctx-counters-grid">
          {COUNTERS.map((counter) => (
            <div className="ctx-counter-item" key={counter.title}>
              <span className="ctx-counter-icon">{counter.icon}</span>
              <h4>{counter.title}</h4>
              <p>{counter.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="ctx-quote">
        <p>
          “Food is the memory that lingers <em>long after the music stops.</em>”
        </p>
      </section>

      {/* CTA Tasting Box */}
      <section className="ctx-cta">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
          alt="Catering dining experience"
          className="ctx-cta-bg"
        />
        <div className="ctx-cta-overlay" />
        <div className="ctx-cta-content">
          <p className="ctx-eyebrow" style={{ color: 'var(--ctx-lightgreen)' }}>04 / Taste First</p>
          <h2>Experience The Flavours<br /><i>At A Private Tasting.</i></h2>
          <p>
            Meet our executive head chef at our London tasting kitchen. Sample your proposed menu, refine spice balances, and pair signature drinks.
          </p>
          <a
            className="ctx-btn"
            href="https://wa.me/447454904611"
            target="_blank"
            rel="noreferrer"
          >
            Arrange Your Tasting On WhatsApp ↗
          </a>
        </div>
      </section>

      <div className="ctx-back">
        <Link href="/">← Back to Wassup London Home</Link>
      </div>
    </div>
  );
}
