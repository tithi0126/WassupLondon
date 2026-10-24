"use client";

import React, { useRef } from "react";
import Link from "next/link";
import "../app/styles/motion-cards.css";

const DISCIPLINES = [
    {
        num: "01",
        title: "Bespoke Weddings",
        subtitle: "Mandap Architecture & Floral Styling",
        desc: "From sacred rituals to opulent evening receptions, we engineer every floral and stage composition with timeless grace.",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
        link: "/weddings",
        tag: "Weddings"
    },
    {
        num: "02",
        title: "Acoustics & Stage",
        subtitle: "Club-Grade Audio & Intelligent FX",
        desc: "Equipped with touring-standard sound systems, custom LED staging, and resident DJs playing London’s most legendary dancefloors.",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
        link: "/dj-entertainment",
        tag: "Production"
    },
    {
        num: "03",
        title: "Artisanal Dining",
        subtitle: "Live Theatrical Food Stations & Banquets",
        desc: "Michelin-experienced chefs curating vibrant Pan-Asian, Gujarati, Punjabi, and global contemporary tasting menus.",
        img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80",
        link: "/catering",
        tag: "Gastronomy"
    },
    {
        num: "04",
        title: "Corporate Galas",
        subtitle: "Brand Summits & Landmark Galas",
        desc: "Flawless technical precision, keynote AV arrays, and seamless guest hospitality for global institutions and brands.",
        img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
        link: "/corporate",
        tag: "Corporate"
    }
];

export default function MotionCards() {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className="editorial-cards-section" aria-label="Our Core Disciplines">
            {/* Header */}
            <div className="editorial-cards__header">
                <div className="editorial-cards__meta">
                    <span className="editorial-cards__kicker">[ 03 / CRAFT & MASTERY ]</span>
                    <span className="editorial-cards__coord">FOUR DISCIPLINES · ONE POINT OF CONTACT</span>
                </div>
                <div className="editorial-cards__title-row">
                    <h2 className="editorial-cards__title">
                        FOUR PILLARS. <br />
                        <span className="text-italic">ONE UNIFIED EXPERIENCE.</span>
                    </h2>
                    <p className="editorial-cards__lead">
                        No fragmented vendors or missed handoffs. We unify decor, audio engineering, live gastronomy, 
                        and event direction under an exacting architectural standard.
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="editorial-cards__grid">
                {DISCIPLINES.map((item, idx) => (
                    <article key={idx} className="editorial-card-item">
                        <Link href={item.link} className="editorial-card-item__link">
                            <div className="editorial-card-item__image-frame">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    className="editorial-card-item__img"
                                />
                                <div className="editorial-card-item__badge">
                                    <span>{item.tag}</span>
                                </div>
                                <span className="editorial-card-item__index">{item.num}</span>
                            </div>

                            <div className="editorial-card-item__content">
                                <div className="editorial-card-item__header">
                                    <h3 className="editorial-card-item__title">{item.title}</h3>
                                    <span className="editorial-card-item__arrow">↗</span>
                                </div>
                                <p className="editorial-card-item__sub">{item.subtitle}</p>
                                <p className="editorial-card-item__desc">{item.desc}</p>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="editorial-cards__footer">
                <div className="editorial-cards__guarantee">
                    <span className="editorial-cards__dot" />
                    <span>Every production is backed by our single point-of-contact guarantee from initial discovery to finale.</span>
                </div>
                <Link href="/packages" className="editorial-cards__all-link">
                    Explore Tiered Packages →
                </Link>
            </div>
        </section>
    );
}
