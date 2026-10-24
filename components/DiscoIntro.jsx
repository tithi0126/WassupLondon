'use client';

import React, { useEffect, useState } from 'react';
import './DiscoIntro.css';

export default function EditorialIntro({ children }) {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Lock scroll briefly during intro sequence
    document.body.classList.add('lock');

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setCount(100);

        setTimeout(() => {
          setLoading(false);
          document.body.classList.remove('lock');
          setTimeout(() => {
            setRemoved(true);
          }, 950);
        }, 320);
      } else {
        setCount(current);
      }
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.classList.remove('lock');
    };
  }, []);

  return (
    <>
      {!removed && (
        <aside
          id="editorial-preloader"
          aria-hidden="true"
          className={!loading ? 'editorial-preloader--done' : ''}
        >
          <div className="editorial-preloader__curtain editorial-preloader__curtain--top" />
          <div className="editorial-preloader__curtain editorial-preloader__curtain--bottom" />

          <div className="editorial-preloader__content">
            <div className="editorial-preloader__meta">
              <span className="editorial-preloader__badge">WASSUP LONDON</span>
              <span className="editorial-preloader__location">LONDON · MAYFAIR · SHOREDITCH · BEYOND</span>
            </div>

            <div className="editorial-preloader__center">
              <div className="editorial-preloader__crest-wrap">
                <img
                  src="/logo.png"
                  alt="Wassup London Crest"
                  className="editorial-preloader__crest"
                />
              </div>
              <h2 className="editorial-preloader__title">
                CURATING MOMENTS OF DISTINCTION
              </h2>
              <p className="editorial-preloader__subtitle">
                Weddings · DJ &amp; Sound · Artisanal Catering · Galas
              </p>
            </div>

            <div className="editorial-preloader__bottom">
              <div className="editorial-preloader__bar">
                <div
                  className="editorial-preloader__bar-fill"
                  style={{ width: `${count}%` }}
                />
              </div>
              <div className="editorial-preloader__counter">
                <span>{count < 10 ? `0${count}` : count}%</span>
              </div>
            </div>
          </div>
        </aside>
      )}
      <div id="site" style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {children}
      </div>
    </>
  );
}
