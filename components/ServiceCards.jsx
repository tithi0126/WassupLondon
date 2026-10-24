"use client";

import React from "react";
import Link from "next/link";
import { CARDS_DATA } from "@/lib/data";
import "@/app/styles/cards.css";

const SERVICE_NUMS = ["01", "02", "03", "04", "05"];

export default function ServiceCards() {
  return (
    <section className="editorial-services-section" aria-label="Services and Packages">
      {/* ─── Section Header ─── */}
      <div className="editorial-services__header">
        <div className="editorial-services__meta">
          <span className="editorial-services__kicker">[ 05 / SERVICE DIRECTORY ]</span>
          <span className="editorial-services__coord">BESPOKE SPECIFICATIONS FOR EVERY OCCASION</span>
        </div>
        <div className="editorial-services__title-row">
          <h2 className="editorial-services__title">
            TAILORED TIERS. <br />
            <span className="text-italic">EXACTING STANDARDS.</span>
          </h2>
          <p className="editorial-services__lead">
            Select a standalone discipline or engage our turnkey atelier team for unified 
            planning, sound engineering, decor architecture, and banqueting.
          </p>
        </div>
      </div>

      {/* ─── Service Cards Grid ─── */}
      <div className="editorial-services__grid" id="cards-wrapper">
        {CARDS_DATA.map((card, idx) => (
          <article
            key={card.color}
            className="editorial-service-card"
          >
            <div className="editorial-service-card__top">
              <span className="editorial-service-card__num">{SERVICE_NUMS[idx] || `0${idx + 1}`}</span>
              <span className="editorial-service-card__category">{card.sticker}</span>
            </div>

            <h3 className="editorial-service-card__title">
              {card.title}
            </h3>

            <div className="editorial-service-card__divider" />

            <ul className="editorial-service-card__list">
              {card.services.map((service) => (
                <li key={service} className="editorial-service-card__item">
                  <span className="editorial-service-card__bullet">—</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            {card.link && (
              <div className="editorial-service-card__footer">
                <Link href={card.link} className="editorial-service-card__link">
                  <span>Explore Specification</span>
                  <span className="editorial-service-card__arrow">→</span>
                </Link>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
