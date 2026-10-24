'use client';

import React from 'react';
import { brands } from '@/lib/data';
import '@/app/styles/marquee.css';

export default function DoubleMarquee() {
    // Duplicate brands to make seamless infinite loop
    const marqueeBrands = [...brands, ...brands, ...brands];

    return (
        <section className="editorial-partners" aria-label="Clients and Venue Partners">
            <div className="editorial-partners__meta">
                <span className="editorial-partners__kicker">[ 06 / CLIENTS & VENUE AFFILIATIONS ]</span>
                <span className="editorial-partners__sub">LONDON · EUROPE · INTERNATIONAL</span>
            </div>

            <div className="editorial-partners__header">
                <h2 className="editorial-partners__title">
                    TRUSTED BY ICONIC VENUES, <br />
                    <span className="text-italic">GLOBAL BRANDS & PRIVATE FAMILIES.</span>
                </h2>
                <p className="editorial-partners__desc">
                    From London landmarks to luxury countryside estates, our production and catering 
                    teams operate with vetted compliance, respectful precision, and turnkey calm.
                </p>
            </div>

            {/* Seamless Infinite Monochrome Logo Ticker */}
            <div className="editorial-partners__marquee-wrap">
                <div className="editorial-partners__track editorial-partners__track--left">
                    {marqueeBrands.map((brand, i) => (
                        <div key={`brand-1-${i}`} className="editorial-partners__item">
                            <img
                                src={brand.src}
                                alt={brand.name}
                                loading="lazy"
                                className="editorial-partners__logo"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Second row scrolling opposite direction */}
            <div className="editorial-partners__marquee-wrap">
                <div className="editorial-partners__track editorial-partners__track--right">
                    {marqueeBrands.map((brand, i) => (
                        <div key={`brand-2-${i}`} className="editorial-partners__item">
                            <img
                                src={brand.src}
                                alt={brand.name}
                                loading="lazy"
                                className="editorial-partners__logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
