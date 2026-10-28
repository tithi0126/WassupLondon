'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as THREE from 'three';
import { EVENTS } from '@/lib/data';

export default function VimeoHero() {
    const heroRef = useRef(null);
    const canvasBgRef = useRef(null);
    const canvas3dRef = useRef(null);
    const videoRef = useRef(null);
    const flashRef = useRef(null);
    const coverRef = useRef(null);
    const contentRef = useRef(null);

    const [isMuted, setIsMuted] = useState(true);
    const [scrollP, setScrollP] = useState(0);

    // Audio toggle
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
            if (!isMuted) {
                videoRef.current.play().catch(() => {});
            }
        }
    }, [isMuted]);

    const toggleAudio = (e) => {
        e.stopPropagation();
        setIsMuted((prev) => !prev);
    };

    // ─── Three.js 3D Disco Ball & Radiant Atmosphere ──────────────────────────
    useEffect(() => {
        const bgCanvas = canvasBgRef.current;
        const c3d = canvas3dRef.current;
        const heroEl = heroRef.current;
        if (!bgCanvas || !c3d || !heroEl) return;

        let animId;
        const bx = bgCanvas.getContext('2d');

        // Logo-themed Palette: Deep Obsidian, Royal Indigo, Luminous Purple, Neon Violet, Champagne Gold
        const LOGO_PAL = [
            '#9d4edd', // Vivid Purple
            '#4361ee', // Electric Royal Blue
            '#d4af37', // Champagne Gold
            '#c77dff', // Soft Neon Lavender
            '#f72585', // Radiant Magenta
            '#ffd166', // Warm Gold
            '#ffffff', // Pure Diamond Specular
        ];
        const LOGO_PAL_HEX = [0x9d4edd, 0x4361ee, 0xd4af37, 0xc77dff, 0xf72585, 0xffd166, 0xffffff];

        // 1. Renderer Setup
        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({
                canvas: c3d,
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance',
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.35;
        } catch (e) {
            console.warn("WebGL not supported or failed to initialize:", e);
            return;
        }

        // 2. Procedural Logo-Themed Equirectangular Environment Map
        function makeEnv() {
            const c = document.createElement('canvas');
            c.width = 1024;
            c.height = 512;
            const g = c.getContext('2d');

            // Deep obsidian velvet base with rich royal purple & indigo glow
            const bgr = g.createLinearGradient(0, 0, 0, 512);
            bgr.addColorStop(0, '#060410');
            bgr.addColorStop(0.35, '#1e0c3a');
            bgr.addColorStop(0.55, '#3b125e');
            bgr.addColorStop(0.85, '#0e0826');
            bgr.addColorStop(1, '#05030d');
            g.fillStyle = bgr;
            g.fillRect(0, 0, 1024, 512);

            // Shimmering colored light spots in the environment reflection
            for (let i = 0; i < 28; i++) {
                const x = Math.random() * 1024;
                const y = Math.random() * 512;
                const r = 40 + Math.random() * 140;
                const col = LOGO_PAL[i % LOGO_PAL.length];
                const rg = g.createRadialGradient(x, y, 0, x, y, r);
                rg.addColorStop(0, col);
                rg.addColorStop(1, col + '00');
                g.globalAlpha = 0.85;
                g.fillStyle = rg;
                g.fillRect(x - r, y - r, r * 2, r * 2);
            }

            // Glistening starry speckles
            g.globalAlpha = 1;
            g.fillStyle = '#ffffff';
            for (let i = 0; i < 200; i++) {
                g.beginPath();
                g.arc(Math.random() * 1024, Math.random() * 512, 1 + Math.random() * 3.5, 0, Math.PI * 2);
                g.fill();
            }

            const tex = new THREE.CanvasTexture(c);
            tex.mapping = THREE.EquirectangularReflectionMapping;
            if (THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace;

            const pm = new THREE.PMREMGenerator(renderer);
            const env = pm.fromEquirectangular(tex).texture;
            tex.dispose();
            pm.dispose();
            return env;
        }

        const scene = new THREE.Scene();
        const envTexture = makeEnv();
        scene.environment = envTexture;

        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
        camera.position.set(0, 0, 6.4);

        // 3. Disco Ball Construction
        const R = 1.62;
        const ball = new THREE.Group();
        scene.add(ball);

        // Gold suspension chain from above
        const strGeo = new THREE.CylinderGeometry(0.012, 0.012, 10, 6);
        const strMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });
        const str = new THREE.Mesh(strGeo, strMat);
        str.position.y = R + 5;
        scene.add(str);

        // Faceted mirror tiles with slight natural variance
        const rings = 35;
        const tiles = [];
        for (let i = 0; i < rings; i++) {
            const lat = -Math.PI / 2 + ((i + 0.5) * Math.PI) / rings;
            const cnt = Math.max(4, Math.round(rings * 2 * Math.cos(lat)));
            for (let j = 0; j < cnt; j++) {
                tiles.push([lat, (j / cnt) * Math.PI * 2]);
            }
        }

        const size = ((Math.PI * R) / rings) * 0.92;
        const tileMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.98,
            roughness: 0.03,
            envMapIntensity: 2.3,
        });

        const inst = new THREE.InstancedMesh(
            new THREE.BoxGeometry(size, size, size * 0.22),
            tileMat,
            tiles.length
        );

        const dummy = new THREE.Object3D();
        const col = new THREE.Color();

        tiles.forEach(([lat, lon], k) => {
            dummy.position
                .set(Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon))
                .multiplyScalar(R);
            dummy.lookAt(dummy.position.clone().multiplyScalar(2));
            // Subtle authentic random tilt so light glints individually
            dummy.rotateX((Math.random() - 0.5) * 0.28);
            dummy.rotateY((Math.random() - 0.5) * 0.28);
            dummy.updateMatrix();
            inst.setMatrixAt(k, dummy.matrix);

            const brightness = 0.8 + Math.random() * 0.2;
            col.setRGB(brightness, brightness, brightness * 0.98);
            if (Math.random() < 0.15) {
                col.set(LOGO_PAL_HEX[Math.floor(Math.random() * LOGO_PAL_HEX.length)]);
            }
            inst.setColorAt(k, col);
        });
        inst.instanceMatrix.needsUpdate = true;
        if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
        ball.add(inst);

        // Dark obsidian core
        const coreGeo = new THREE.SphereGeometry(R * 0.975, 26, 26);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0x070412 });
        const core = new THREE.Mesh(coreGeo, coreMat);
        ball.add(core);

        // Sparkle stars on ball surface
        const st = document.createElement('canvas');
        st.width = st.height = 64;
        {
            const g = st.getContext('2d');
            const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
            r.addColorStop(0, '#ffffff');
            r.addColorStop(0.2, 'rgba(212, 175, 55, 0.7)');
            r.addColorStop(0.4, 'rgba(168, 85, 247, 0.35)');
            r.addColorStop(1, 'rgba(0, 0, 0, 0)');
            g.fillStyle = r;
            g.fillRect(0, 0, 64, 64);
            g.fillStyle = 'rgba(255, 255, 255, 0.9)';
            g.fillRect(31, 3, 2, 58);
            g.fillRect(3, 31, 58, 2);
        }

        const sp = [];
        for (let i = 0; i < 110; i++) {
            const u = Math.random() * 2 - 1;
            const a = Math.random() * Math.PI * 2;
            const q = Math.sqrt(1 - u * u);
            sp.push(q * Math.cos(a) * R * 1.025, u * R * 1.025, q * Math.sin(a) * R * 1.025);
        }
        const spG = new THREE.BufferGeometry();
        spG.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
        const spTex = new THREE.CanvasTexture(st);
        const spM = new THREE.PointsMaterial({
            size: 0.35,
            map: spTex,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            color: 0xffffff,
        });
        const sparkles = new THREE.Points(spG, spM);
        ball.add(sparkles);

        // Orbiting Colored Point Lights (Purple, Royal Blue, Gold, Lavender, White)
        scene.add(new THREE.AmbientLight(0x2d174d, 0.8));
        const lightColors = [0x9d4edd, 0x4361ee, 0xd4af37, 0xc77dff, 0xf72585, 0xffffff];
        const lights = lightColors.map((c) => {
            const l = new THREE.PointLight(c, 3.8, 24);
            scene.add(l);
            return l;
        });

        // 4. Background 2D Radiant Beams & Atmosphere
        const spots = Array.from({ length: 220 }, (_, i) => ({
            a: Math.random() * Math.PI * 2,
            r: Math.random(),
            s: 0.4 + Math.random() * 1.6,
            c: LOGO_PAL[i % LOGO_PAL.length],
            t: Math.random() * 9,
        }));
        const beams = Array.from({ length: 18 }, (_, i) => ({
            a: (i / 18) * Math.PI * 2,
            c: LOGO_PAL[i % LOGO_PAL.length],
            w: 0.03 + Math.random() * 0.05,
        }));

        function drawBg(t, p) {
            const W = bgCanvas.width;
            const H = bgCanvas.height;
            const cx = W / 2;
            const cy = H * 0.46;
            const M = Math.hypot(W, H) / 2;
            const u = W / 1000;

            bx.globalCompositeOperation = 'source-over';
            bx.clearRect(0, 0, W, H);

            // Midnight velvet base
            bx.fillStyle = '#080512';
            bx.fillRect(0, 0, W, H);

            bx.globalCompositeOperation = 'lighter';

            const rot = t * 0.00018 + p * 5.2;
            const zoom = 1 + p * 2.4;

            // Central radiant purple & gold aura
            const gl = bx.createRadialGradient(cx, cy, 0, cx, cy, M * 0.62 * zoom);
            gl.addColorStop(0, `rgba(157, 78, 221, ${0.4 + 0.08 * Math.sin(t * 0.003)})`);
            gl.addColorStop(0.35, 'rgba(67, 97, 238, 0.22)');
            gl.addColorStop(0.65, 'rgba(212, 175, 55, 0.12)');
            gl.addColorStop(1, 'rgba(7, 5, 18, 0)');
            bx.fillStyle = gl;
            bx.fillRect(0, 0, W, H);

            // Sweeping volumetric light beams
            beams.forEach((b, i) => {
                const a = b.a + rot * (i % 2 ? 1 : -0.75);
                const L = M * 1.35;
                const g = bx.createLinearGradient(cx, cy, cx + Math.cos(a) * L, cy + Math.sin(a) * L);
                g.addColorStop(0, b.c + '55');
                g.addColorStop(0.7, b.c + '18');
                g.addColorStop(1, b.c + '00');
                bx.fillStyle = g;
                bx.beginPath();
                bx.moveTo(cx, cy);
                bx.lineTo(cx + Math.cos(a - b.w) * L, cy + Math.sin(a - b.w) * L);
                bx.lineTo(cx + Math.cos(a + b.w) * L, cy + Math.sin(a + b.w) * L);
                bx.fill();
            });

            // Drifting luminous light spots
            spots.forEach((s) => {
                const a = s.a + rot * s.s;
                const r = (((s.r + t * 0.00003 * s.s) % 1) * M * 1.15) * zoom;
                const x = cx + Math.cos(a) * r;
                const y = cy + Math.sin(a) * r * 0.85;
                const tw = 0.45 + 0.55 * Math.abs(Math.sin(t * 0.003 * s.s + s.t));
                const sz = (8 + s.r * 26) * u * Math.sqrt(zoom);
                const g = bx.createRadialGradient(x, y, 0, x, y, sz);
                g.addColorStop(0, '#ffffff');
                g.addColorStop(0.25, s.c);
                g.addColorStop(1, s.c + '00');
                bx.globalAlpha = tw * Math.min(1, r / (M * 0.12));
                bx.fillStyle = g;
                bx.beginPath();
                bx.arc(x, y, sz, 0, Math.PI * 2);
                bx.fill();
            });
            bx.globalAlpha = 1;
        }

        // 5. Responsive Resize
        function resize() {
            const w = heroEl.clientWidth || window.innerWidth;
            const h = window.innerHeight;
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

            bgCanvas.width = w * dpr;
            bgCanvas.height = h * dpr;

            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        }
        window.addEventListener('resize', resize);
        resize();

        // 6. Scroll Tracking & Smooth Inertia
        let targetP = 0;
        let smoothP = 0;
        let mouseX = 0;
        let mouseY = 0;

        const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
        const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

        function readScroll() {
            const rect = heroEl.getBoundingClientRect();
            const totalScrollable = heroEl.offsetHeight - window.innerHeight;
            if (totalScrollable > 0) {
                targetP = clamp(-rect.top / totalScrollable);
            }
        }
        window.addEventListener('scroll', readScroll, { passive: true });
        if (typeof window !== 'undefined' && window.__lenis) {
            window.__lenis.on('scroll', readScroll);
        }
        readScroll();

        const handleMouseMove = (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        // 7. Render Loop with onscroll Acceleration & Camera Zoom
        let lastTime = 0;
        function tick(t) {
            const dt = (t - lastTime) * 0.001 || 0.016;
            lastTime = t;

            // Direct check on each RAF keeps targetP in immediate sync with Lenis/wheel
            const rect = heroEl.getBoundingClientRect();
            const totalScrollable = heroEl.offsetHeight - window.innerHeight;
            if (totalScrollable > 0) {
                targetP = clamp(-rect.top / totalScrollable);
            }

            smoothP += (targetP - smoothP) * 0.09;
            setScrollP(smoothP);

            const z = ease(clamp(smoothP / 0.85));

            // Onscroll spin acceleration & tilt
            ball.rotation.y = smoothP * Math.PI * 9.0 + t * 0.00035;
            ball.rotation.x = Math.sin(smoothP * 3.2) * 0.32 + mouseY * 0.12;
            ball.rotation.z = Math.sin(t * 0.0008) * 0.03 + mouseX * 0.08;

            // Camera smoothly pushes into the ball as you scroll
            camera.position.set(0, 0, 6.4 - z * 5.15);
            camera.lookAt(0, 0, 0);

            // Suspension chain disappears as camera pushes forward
            str.visible = z < 0.22;

            // Shimmering stars bloom with scroll acceleration
            spM.size = 0.32 + Math.sin(t * 0.006) * 0.12 + smoothP * 0.45;

            // Orbiting lights swirl dynamically
            lights.forEach((l, i) => {
                const a = t * 0.0006 * (1 + i * 0.3) + i * 1.6 + smoothP * 4;
                l.position.set(Math.cos(a) * 4.2, Math.sin(a * 1.3) * 3.2, Math.sin(a) * 4.2 + 1);
            });

            // Draw radiant background
            drawBg(t, smoothP);
            if (bgCanvas) {
                bgCanvas.style.opacity = 1 - clamp((smoothP - 0.82) / 0.12);
            }

            // Full Animation Climax: Radiant Flash / Starburst Flare
            if (flashRef.current) {
                const flashVal = clamp((smoothP - 0.65) / 0.20) * (1 - clamp((smoothP - 0.88) / 0.08));
                flashRef.current.style.opacity = flashVal;
            }

            // Climax Seamless Cover: Obsidian velvet blend
            if (coverRef.current) {
                const coverVal = clamp((smoothP - 0.88) / 0.10);
                coverRef.current.style.opacity = coverVal;
            }

            // Headline elements fade and float up gracefully as user scrolls into the ball
            if (contentRef.current) {
                const textOpacity = clamp(1 - smoothP * 3.6);
                const textY = -smoothP * 110;
                contentRef.current.style.opacity = textOpacity;
                contentRef.current.style.transform = `translateY(${textY}px)`;
                contentRef.current.style.pointerEvents = textOpacity > 0.05 ? 'auto' : 'none';
            }

            renderer.render(scene, camera);
            animId = requestAnimationFrame(tick);
        }
        animId = requestAnimationFrame(tick);

        // Cleanup
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', readScroll);
            if (typeof window !== 'undefined' && window.__lenis) {
                window.__lenis.off('scroll', readScroll);
            }
            window.removeEventListener('mousemove', handleMouseMove);

            inst.geometry.dispose();
            tileMat.dispose();
            coreGeo.dispose();
            coreMat.dispose();
            strGeo.dispose();
            strMat.dispose();
            spG.dispose();
            spM.dispose();
            spTex.dispose();
            envTexture.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="editorial-hero"
            aria-label="Wassup London Hero Showcase"
        >
            <div className="editorial-hero__stage">
                {/* 2D Radiant Beams Canvas */}
                <canvas ref={canvasBgRef} className="editorial-hero__canvas-bg" />

                {/* Ambient Subtle Atmosphere Video (Optional) */}
                <video
                    ref={videoRef}
                    className="editorial-hero__video-ambient"
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="auto"
                />

                {/* 3D Three.js Disco Ball Canvas */}
                <canvas ref={canvas3dRef} className="editorial-hero__canvas-3d" />

                {/* Soft Vignette Scrim for Maximum Text Contrast */}
                <div className="editorial-hero__scrim" />

                {/* Full Animation Climax Flash / Flare */}
                <div ref={flashRef} className="editorial-hero__flash" />

                {/* Full Animation Climax Seamless Obsidian Velvet Cover */}
                <div ref={coverRef} className="editorial-hero__cover" />

                {/* Foreground Hero Content (Pitted against the 3D ball) */}
                <div ref={contentRef} className="editorial-hero__container">
                    {/* Top Status */}
                    <div className="editorial-hero__top">
                        <div className="editorial-hero__badge">
                            <span className="editorial-hero__badge-dot" />
                            <span>LONDON ATELIER · 2026/2027 CALENDAR OPEN</span>
                        </div>
                        <div className="editorial-hero__coords">
                            <span>MAYFAIR · SHOREDITCH · CANARY WHARF</span>
                        </div>
                    </div>

                    {/* Architectural Main Headline */}
                    <div className="editorial-hero__middle">
                        <h1 className="editorial-hero__title">
                            UNCOMPROMISED ARTISTRY. <br />
                            <span className="editorial-hero__title-italic">IMMERSIVE CELEBRATIONS.</span>
                        </h1>
                        <p className="editorial-hero__lead">
                            A singular collective uniting master event directors, club-tier acoustic engineers, 
                            and Michelin-level culinary artisans under one calm, meticulous point of contact.
                        </p>
                    </div>

                    {/* Bottom Metadata & Controls */}
                    <div className="editorial-hero__bottom">
                        {/* Featured Showcase Date */}
                        <div className="editorial-hero__event-preview">
                            <span className="editorial-hero__event-label">
                                {EVENTS.length > 0 ? 'NEXT FEATURED PRODUCTION' : 'PRIVATE ATELIER RESERVATIONS'}
                            </span>
                            <div className="editorial-hero__event-row">
                                <span className="editorial-hero__event-date">
                                    {EVENTS.length > 0 ? EVENTS[0].date : '2026 / 2027'}
                                </span>
                                <span className="editorial-hero__event-sep">/</span>
                                <span className="editorial-hero__event-name">
                                    {EVENTS.length > 0 ? EVENTS[0].label : 'BESPOKE COMMISSIONS'}
                                </span>
                                <span className="editorial-hero__event-venue">
                                    {EVENTS.length > 0 ? `· ${EVENTS[0].venue}` : '· LONDON & UK'}
                                </span>
                            </div>
                        </div>

                        {/* Interactive Audio Toggle & CTA */}
                        <div className="editorial-hero__actions">
                            <button
                                type="button"
                                onClick={toggleAudio}
                                className={`editorial-hero__audio-btn ${!isMuted ? 'is-active' : ''}`}
                                aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                            >
                                <span className="editorial-hero__eq-bars" aria-hidden="true">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                                <span>{isMuted ? 'AUDIO OFF' : 'AUDIO ON'}</span>
                            </button>

                            <Link href="/packages" className="editorial-hero__cta">
                                Explore Atelier Services →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Subtle Scroll Cue at Base */}
                <div
                    className="editorial-hero__scroll-cue"
                    style={{ opacity: Math.max(0, 1 - scrollP * 3.5) }}
                >
                    <span className="editorial-hero__scroll-indicator">
                        <span className="editorial-hero__scroll-wheel" />
                    </span>
                    <span className="editorial-hero__scroll-label">SCROLL TO IMMERSE</span>
                </div>
            </div>
        </section>
    );
}
