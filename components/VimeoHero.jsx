'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { EVENTS } from '@/lib/data';

export default function VimeoHero() {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const bubbleRef = useRef(null);
    const titleRef = useRef(null);
    const controlsRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(() => {});
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    // Native video loads immediately enough that we don't need a heavy ready listener.
    // We already handle `setIsLoaded(true)` directly on the <video onLoadedData={...}> element.

    /* ────────────────────────────────────────────────────
       ④ Hover mute bubble — same GSAP elastic spring as CursorBubble
    ──────────────────────────────────────────────────── */
    useEffect(() => {
        const bubble = bubbleRef.current;
        const hero = playerRef.current;
        const title = titleRef.current;
        const controls = controlsRef.current;
        if (!bubble || !hero) return;

        const xTo = gsap.quickTo(bubble, 'x', { duration: 0.5, ease: 'power3' });
        const yTo = gsap.quickTo(bubble, 'y', { duration: 0.5, ease: 'power3' });

        const onMove = (e) => {
            xTo(e.clientX + 13);
            yTo(e.clientY - 43);
        };

        const onEnter = () => {
            gsap.killTweensOf(bubble, 'opacity,scale,rotation');
            gsap.to(bubble, { opacity: 1, scale: 1, rotation: 0, duration: 1.7, delay: 0.05, ease: 'elastic.out(1, 0.4)' });
        };

        const onLeave = () => {
            gsap.killTweensOf(bubble, 'opacity,scale,rotation');
            gsap.to(bubble, { opacity: 0, scale: 0, rotation: -30, duration: 0.3, ease: 'sine.inOut' });
        };

        const hideBubbleForElement = () => {
            gsap.killTweensOf(bubble, 'opacity,scale,rotation');
            gsap.to(bubble, { opacity: 0, scale: 0, rotation: -30, duration: 0.3, ease: 'sine.inOut' });
        };

        const showBubbleForElement = () => {
            gsap.killTweensOf(bubble, 'opacity,scale,rotation');
            gsap.to(bubble, { opacity: 1, scale: 1, rotation: 0, duration: 0.3, ease: 'sine.inOut' });
        };

        const onTitleEnter = () => {
            hideBubbleForElement();
            if (controls) gsap.to(controls, { opacity: 0, duration: 0.3, pointerEvents: 'none' });
        };

        const onTitleLeave = () => {
            showBubbleForElement();
            if (controls) gsap.to(controls, { opacity: 1, duration: 0.3, pointerEvents: 'auto' });
        };

        window.addEventListener('mousemove', onMove);
        hero.addEventListener('mouseenter', onEnter);
        hero.addEventListener('mouseleave', onLeave);

        if (title) {
            title.addEventListener('mouseenter', onTitleEnter);
            title.addEventListener('mouseleave', onTitleLeave);
        }
        if (controls) {
            controls.addEventListener('mouseenter', hideBubbleForElement);
            controls.addEventListener('mouseleave', showBubbleForElement);
        }

        return () => {
            window.removeEventListener('mousemove', onMove);
            hero.removeEventListener('mouseenter', onEnter);
            hero.removeEventListener('mouseleave', onLeave);

            if (title) {
                title.removeEventListener('mouseenter', onTitleEnter);
                title.removeEventListener('mouseleave', onTitleLeave);
            }
            if (controls) {
                controls.removeEventListener('mouseenter', hideBubbleForElement);
                controls.removeEventListener('mouseleave', showBubbleForElement);
            }
        };
    }, []);

    /* ── Controls ── */
    const togglePlay = (e) => {
        if (e) e.stopPropagation();
        setIsPlaying(p => !p);
    };

    const toggleMute = (e) => {
        if (e) e.stopPropagation();
        setIsMuted(m => !m);
    };

    const toggleFullscreen = (e) => {
        if (e) e.stopPropagation();
        if (!document.fullscreenElement) {
            playerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <>
            {/* ④ Hover mute bubble — follows cursor over the video */}
            <div
                ref={bubbleRef}
                className={`vimeo-mute-bubble ${isMuted ? 'is--muted' : 'is--unmuted'}`}
                style={{ pointerEvents: 'none' }}
            >
                <div className="vimeo-mute-bubble__blob">
                    {/* Blob shape */}
                    <img
                        src="/assets/VimeoHero SVG/mute-bubble-blob.svg"
                        alt=""
                        className="vimeo-mute-bubble__blob-svg"
                    />
                    {/* Mute icon (shown when sound is ON → click to mute) */}
                    <div className="vimeo-mute-bubble__icon vimeo-mute-bubble__mute">
                        <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3818 8.50039C12.8934 7.92803 13.7447 7.84041 14.3584 8.26992C14.3696 8.28308 14.3799 8.29711 14.3916 8.30996L14.501 8.41738L52.001 41.9174L52.1201 42.0141C52.6204 42.5885 52.6243 43.4317 52.1182 43.9984C51.6007 44.5775 50.7353 44.6609 50.1201 44.2143L50.001 44.1176L44.999 39.6488C44.2681 40.687 43.4506 41.6601 42.5557 42.5551C41.9699 43.1407 41.0203 43.1408 40.4346 42.5551C39.8493 41.9693 39.8492 41.0197 40.4346 40.434C41.2902 39.5783 42.0647 38.6412 42.7451 37.6361L37.8271 33.2416C37.2776 34.1931 36.6101 35.068 35.8389 35.8393C35.2532 36.4247 34.3035 36.4246 33.7178 35.8393C33.1321 35.2534 33.132 34.3029 33.7178 33.7172C34.452 32.9828 35.0644 32.1286 35.5273 31.1879L29 25.3559V43.4994C28.9999 44.0475 28.7004 44.5517 28.2197 44.8148C27.7389 45.0778 27.1531 45.0583 26.6914 44.7631L14.6846 37.0785C14.6042 37.0272 14.5104 36.9995 14.415 36.9994H8.5C6.56706 36.9994 5.0001 35.4323 5 33.4994V20.4994C5.00017 18.5666 6.56711 16.9994 8.5 16.9994H14.415C14.5105 16.9994 14.6042 16.9718 14.6846 16.9203L17.5225 15.1029L12.501 10.6176L12.3916 10.5102C11.8788 9.94899 11.8646 9.07956 12.3818 8.50039Z" fill="currentColor" />
                            <path d="M40.4346 11.4428C41.0203 10.8572 41.9699 10.8573 42.5557 11.4428C46.5351 15.4222 48.9998 20.924 49 26.9984C49 29.5023 48.5806 31.909 47.8096 34.1518L45.3447 31.9506C45.7703 30.3718 46 28.712 46 26.9984C45.9998 21.7516 43.8744 17.0037 40.4346 13.5639C39.8492 12.9782 39.8492 12.0285 40.4346 11.4428Z" fill="currentColor" />
                            <path d="M33.7178 18.1615C34.3035 17.576 35.2531 17.576 35.8389 18.1615C38.0388 20.3616 39.4237 23.3831 39.4961 26.725L35.8018 23.4242C35.3201 22.2398 34.6083 21.1732 33.7178 20.2826C33.1321 19.6968 33.132 18.7472 33.7178 18.1615Z" fill="currentColor" />
                            <path d="M26.6914 9.23574C27.153 8.94049 27.7389 8.92026 28.2197 9.18301C28.7004 9.44611 28.9999 9.95137 29 10.4994V17.348L22.7451 11.7602L26.6914 9.23574Z" fill="currentColor" />
                        </svg>
                    </div>
                    {/* Unmute icon (shown when muted → click to unmute) */}
                    <div className="vimeo-mute-bubble__icon vimeo-mute-bubble__unmute">
                        <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29 10.5C29 9.95184 28.701 9.44732 28.2202 9.18416C27.7392 8.921 27.1532 8.9411 26.6914 9.2366L14.6843 16.9211C14.6039 16.9726 14.5103 17 14.4148 17H8.5C6.567 17 5 18.567 5 20.5V33.5C5 35.433 6.567 37 8.5 37H14.4148C14.5103 37 14.6039 37.0274 14.6843 37.0788L26.6914 44.7634C27.1532 45.0588 27.7392 45.079 28.2202 44.8158C28.701 44.5526 29 44.0482 29 43.5V10.5Z" fill="currentColor" />
                            <path d="M40.435 11.4432C41.0208 10.8575 41.9704 10.8575 42.5562 11.4432C46.5358 15.4228 49 20.9249 49 26.9996C49 33.0744 46.5358 38.5764 42.5562 42.556C41.9704 43.1418 41.0208 43.1418 40.435 42.556C39.8492 41.9702 39.8492 41.0204 40.435 40.4346C43.875 36.9946 46 32.2468 46 26.9996C46 21.7525 43.875 17.0045 40.435 13.5646C39.8492 12.9788 39.8492 12.029 40.435 11.4432Z" fill="currentColor" />
                            <path d="M35.8388 18.162C35.253 17.5762 34.3032 17.5762 33.7174 18.162C33.1316 18.7478 33.1316 19.6975 33.7174 20.2833C35.4382 22.0041 36.5 24.377 36.5 27.0008C36.5 29.6246 35.4382 31.9976 33.7174 33.7184C33.1316 34.3042 33.1316 35.2538 33.7174 35.8396C34.3032 36.4254 35.253 36.4254 35.8388 35.8396C38.0992 33.5792 39.5 30.4522 39.5 27.0008C39.5 23.5494 38.0992 20.4224 35.8388 18.162Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* ── Main hero container ── */}
            <div
                className={`vimeo-hero ${isPlaying ? 'is-playing' : 'is-paused'} ${isMuted ? 'is-muted' : 'is-unmuted'}`}
                ref={playerRef}
                onClick={toggleMute}
            >
                {/* 
                  Video Placeholder: 
                  Currently left blank to display a solid black background while you work on text, SVGs, and the navbar.
                  Once you have your personal video file in the `public/` folder, uncomment and update the src below!
                */}
                <video
                    ref={videoRef}
                    src="/assets/Videos/Best Latin party in Amsterdam - Cinematic Club Aftermovie.mp4"
                    className="vimeo-hero__iframe"
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    style={{ pointerEvents: 'none', backgroundColor: '#111', objectFit: 'cover' }}
                />

                {/* Gradient fade */}
                <div className="vimeo-hero__fade" />

                {/* ① Upcoming Events — bottom left */}
                <div className="home-header__title" id="upcoming-events" ref={titleRef} onClick={(e) => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

                    {/* Label */}
                    <span style={{ color: '#F0BEFA', fontSize: 'clamp(13px, 1.2vw, 16px)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                        🎉 Upcoming Events
                    </span>

                    {/* Render first 3 events from EVENTS data */}
                    {EVENTS.slice(0, 3).map((event, i) => (
                        <div key={event.id} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.12)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.25)',
                                color: '#ffffff',
                                borderRadius: '14px',
                                padding: '10px 16px',
                                textAlign: 'center',
                                minWidth: '64px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                            }}>
                                <div style={{ fontSize: '22px', fontWeight: 800, lineHeight: 1, color: '#ffffff' }}>{event.date.split(' ')[0]}</div>
                                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F0BEFA', marginTop: '3px' }}>{event.date.split(' ')[1]}</div>
                            </div>
                            <div>
                                <h2 style={{ fontSize: 'clamp(20px, 3vw, 36px)', fontWeight: 800, lineHeight: 1.1, margin: 0, color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>
                                    <span style={{ color: '#ffffff' }}>{event.label}</span>
                                </h2>
                                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.88)', margin: '4px 0 0', letterSpacing: '0.03em', fontWeight: 500, textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>{event.venue}</p>
                            </div>
                        </div>
                    ))}

                </div>



                {/* Loading spinner removed because native HTML video loads silently in background */}
            </div>
        </>
    );
}
