'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './DiscoIntro.css';

export default function DiscoIntro({ children }) {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const loaderRef = useRef(null);
  const sceneElRef = useRef(null);
  const bgRef = useRef(null);
  const cRef = useRef(null);
  const flashRef = useRef(null);
  const coverRef = useRef(null);
  const titleRef = useRef(null);
  const hintRef = useRef(null);

  // Loader logic
  useEffect(() => {
    document.body.classList.add('lock');
    let n = 0;
    const iv = setInterval(() => {
      n += Math.ceil(Math.random() * 6);
      if (n >= 100) {
        n = 100;
        clearInterval(iv);
        setTimeout(() => {
          setLoading(false);
          document.body.classList.remove('lock');
        }, 300);
      }
      setCount(n);
    }, 45);
    return () => {
      clearInterval(iv);
      document.body.classList.remove('lock');
    };
  }, []);

  // Auto scroll through 3D scene after loading completes
  useEffect(() => {
    if (loading) return;

    let animId = null;
    let userInterrupted = false;

    const stopAutoScroll = () => {
      userInterrupted = true;
      if (animId) cancelAnimationFrame(animId);
    };

    const handleUserInteraction = () => {
      stopAutoScroll();
    };

    // Delay binding user interrupt listeners so residual wheel/touch events don't immediately cancel
    const listenerTimer = setTimeout(() => {
      window.addEventListener('wheel', handleUserInteraction, { passive: true });
      window.addEventListener('touchstart', handleUserInteraction, { passive: true });
      window.addEventListener('keydown', handleUserInteraction, { passive: true });
    }, 500);

    const startY = window.scrollY;
    const targetY = sceneElRef.current ? sceneElRef.current.offsetHeight : window.innerHeight * 5;
    const duration = 3500;
    const startTime = performance.now();

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    function step(currentTime) {
      if (userInterrupted) return;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + (targetY - startY) * easedProgress);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    }

    animId = requestAnimationFrame(step);

    return () => {
      clearTimeout(listenerTimer);
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [loading]);

  // Three.js logic
  useEffect(() => {
    if (!cRef.current || !bgRef.current) return;

    // ---- Palette ----
    const PAL = ['#F0BEFA', '#82A0FF', '#ffe27a', '#7dffd4', '#ff8fb1', '#ff9f5a', '#b69cff', '#ffffff'];
    const PALN = PAL.map(c => parseInt(c.slice(1), 16));

    const canvas = cRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // renderer.outputEncoding = THREE.sRGBEncoding;
    // renderer.toneMapping = THREE.ACESFilmicToneMapping; 
    renderer.toneMappingExposure = 1.2;

    function makeEnv() {
      const c = document.createElement('canvas'); c.width = 1024; c.height = 512; const g = c.getContext('2d');
      const bgr = g.createLinearGradient(0, 0, 0, 512);
      bgr.addColorStop(0, '#0a0828'); bgr.addColorStop(.5, '#3a2a8c'); bgr.addColorStop(1, '#07061a');
      g.fillStyle = bgr; g.fillRect(0, 0, 1024, 512);
      for (let i = 0; i < 22; i++) {
        const x = Math.random() * 1024, y = Math.random() * 512, r = 40 + Math.random() * 120, col = PAL[i % PAL.length];
        const rg = g.createRadialGradient(x, y, 0, x, y, r);
        rg.addColorStop(0, col); rg.addColorStop(1, col + '00');
        g.globalAlpha = .9; g.fillStyle = rg; g.fillRect(x - r, y - r, r * 2, r * 2);
      }
      g.globalAlpha = 1; g.fillStyle = '#fff';
      for (let i = 0; i < 180; i++) { g.beginPath(); g.arc(Math.random() * 1024, Math.random() * 512, 1.5 + Math.random() * 4, 0, 7); g.fill(); }
      for (let i = 0; i < 7; i++) g.fillRect(Math.random() * 1000, 70 + Math.random() * 300, 25 + Math.random() * 50, 50 + Math.random() * 90);
      const tex = new THREE.CanvasTexture(c);
      // tex.mapping = THREE.EquirectangularReflectionMapping; 
      // tex.encoding = THREE.sRGBEncoding;
      const pm = new THREE.PMREMGenerator(renderer); const env = pm.fromEquirectangular(tex).texture; tex.dispose(); pm.dispose(); return env;
    }

    const scene = new THREE.Scene(); scene.environment = makeEnv();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
    const R = 1.5, ball = new THREE.Group(); scene.add(ball);

    const str = new THREE.Mesh(new THREE.CylinderGeometry(.015, .015, 4, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    str.position.y = R + 2; scene.add(str);

    const rings = 34, tiles = [];
    for (let i = 0; i < rings; i++) {
      const lat = -Math.PI / 2 + (i + .5) * Math.PI / rings, cnt = Math.max(4, Math.round(rings * 2 * Math.cos(lat)));
      for (let j = 0; j < cnt; j++) tiles.push([lat, j / cnt * Math.PI * 2]);
    }
    const size = Math.PI * R / rings * .9;
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: .04, envMapIntensity: 1.8 });
    const inst = new THREE.InstancedMesh(new THREE.BoxGeometry(size, size, size * .25), mat, tiles.length);
    const d = new THREE.Object3D(), col = new THREE.Color();
    tiles.forEach(([lat, lon], k) => {
      d.position.set(Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon)).multiplyScalar(R);
      d.lookAt(d.position.clone().multiplyScalar(2));
      d.rotateX((Math.random() - .5) * .4); d.rotateY((Math.random() - .5) * .4);
      d.updateMatrix(); inst.setMatrixAt(k, d.matrix);
      const g = .75 + Math.random() * .25; col.setRGB(g, g, g * (.95 + Math.random() * .1));
      if (Math.random() < .1) col.set(PALN[Math.floor(Math.random() * PALN.length)]);
      inst.setColorAt(k, col);
    });
    ball.add(inst);
    ball.add(new THREE.Mesh(new THREE.SphereGeometry(R * .97, 24, 24), new THREE.MeshBasicMaterial({ color: 0x0b0c22 })));

    const st = document.createElement('canvas'); st.width = st.height = 64;
    {
      const g = st.getContext('2d'), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      r.addColorStop(0, '#fff'); r.addColorStop(.25, 'rgba(255,255,255,.5)'); r.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = r; g.fillRect(0, 0, 64, 64); g.fillStyle = '#fff'; g.fillRect(31, 2, 2, 60); g.fillRect(2, 31, 60, 2);
    }
    const sp = []; for (let i = 0; i < 90; i++) { const u = Math.random() * 2 - 1, a = Math.random() * 6.283, q = Math.sqrt(1 - u * u); sp.push(q * Math.cos(a) * R * 1.03, u * R * 1.03, q * Math.sin(a) * R * 1.03); }
    const spG = new THREE.BufferGeometry(); spG.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
    const spM = new THREE.PointsMaterial({ size: .32, map: new THREE.CanvasTexture(st), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, color: 0xffffff });
    ball.add(new THREE.Points(spG, spM));
    scene.add(new THREE.AmbientLight(0x6670bb, .3));
    const lights = [0xF0BEFA, 0x82A0FF, 0xffe27a, 0x7dffd4, 0xff8fb1, 0xffffff].map(c => { const l = new THREE.PointLight(c, 3.2, 22); scene.add(l); return l });

    const bg = bgRef.current, bx = bg.getContext('2d');
    const spots = Array.from({ length: 240 }, (_, i) => ({ a: Math.random() * 6.283, r: Math.random(), s: .4 + Math.random() * 1.6, c: PAL[i % PAL.length], t: Math.random() * 9 }));
    const beams = Array.from({ length: 16 }, (_, i) => ({ a: i / 16 * 6.283, c: PAL[i % PAL.length], w: .035 + Math.random() * .05 }));
    function drawBg(t, p) {
      const W = bg.width, H = bg.height, cx = W / 2, cy = H * .48, M = Math.hypot(W, H) / 2, u = W / 1000;
      bx.globalCompositeOperation = 'source-over'; bx.clearRect(0, 0, W, H);
      bx.globalCompositeOperation = 'lighter';
      const rot = t * .00022 + p * 6, zoom = 1 + p * 2.2;
      const gl = bx.createRadialGradient(cx, cy, 0, cx, cy, M * .55 * zoom);
      gl.addColorStop(0, 'rgba(240,190,250,' + (.35 + .1 * Math.sin(t * .004)) + ')'); gl.addColorStop(.4, 'rgba(130,160,255,.15)'); gl.addColorStop(1, 'rgba(130,160,255,0)');
      bx.fillStyle = gl; bx.fillRect(0, 0, W, H);
      beams.forEach((b, i) => {
        const a = b.a + rot * (i % 2 ? 1 : -.7), L = M * 1.3;
        const g = bx.createLinearGradient(cx, cy, cx + Math.cos(a) * L, cy + Math.sin(a) * L);
        g.addColorStop(0, b.c + '66'); g.addColorStop(1, b.c + '00');
        bx.fillStyle = g; bx.beginPath(); bx.moveTo(cx, cy);
        bx.lineTo(cx + Math.cos(a - b.w) * L, cy + Math.sin(a - b.w) * L);
        bx.lineTo(cx + Math.cos(a + b.w) * L, cy + Math.sin(a + b.w) * L); bx.fill();
      });
      spots.forEach(s => {
        const a = s.a + rot * s.s, r = ((s.r + t * .00003 * s.s) % 1) * M * 1.1 * zoom;
        const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r * .8;
        const tw = .45 + .55 * Math.abs(Math.sin(t * .003 * s.s + s.t)), sz = (8 + s.r * 30) * u * Math.sqrt(zoom);
        const g = bx.createRadialGradient(x, y, 0, x, y, sz);
        g.addColorStop(0, '#fff'); g.addColorStop(.25, s.c); g.addColorStop(1, s.c + '00');
        bx.globalAlpha = tw * Math.min(1, r / (M * .15)); bx.fillStyle = g; bx.beginPath(); bx.arc(x, y, sz, 0, 6.283); bx.fill();
      });
      bx.globalAlpha = 1;
    }
    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 1.5); bg.width = window.innerWidth * dpr; bg.height = window.innerHeight * dpr;
      const w = window.innerWidth, h = window.innerHeight; renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
      scene.position.y = 0;
    }
    window.addEventListener('resize', resize); resize();

    let target = 0, p = 0;
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    function readScroll() {
      if (!sceneElRef.current) return;
      const max = sceneElRef.current.offsetHeight - window.innerHeight;
      target = clamp(-sceneElRef.current.getBoundingClientRect().top / max);
    }
    window.addEventListener('scroll', readScroll, { passive: true }); readScroll();

    let reqId;
    function tick(t) {
      p += (target - p) * .08;
      const z = ease(clamp(p / .85));
      ball.rotation.y = p * Math.PI * 7 + t * 0.0003;
      ball.rotation.x = Math.sin(p * 3) * .3;
      camera.position.set(0, 0, 6.5 - z * 5.4);
      camera.lookAt(0, 0, 0);
      str.visible = z < .2;
      ball.rotation.z = Math.sin(t * .0008) * .03;
      spM.size = .3 + Math.sin(t * .006) * .12;
      lights.forEach((l, i) => {
        const a = t * 0.0006 * (1 + i * .3) + i * 1.6;
        l.position.set(Math.cos(a) * 4, Math.sin(a * 1.3) * 3, Math.sin(a) * 4 + 1);
      });
      drawBg(t, p);
      if (bg) bg.style.opacity = 1 - clamp((p - .8) / .1);
      if (flashRef.current) flashRef.current.style.opacity = clamp((p - .62) / .2) * (1 - clamp((p - .84) / .1));
      if (coverRef.current) coverRef.current.style.opacity = clamp((p - .86) / .1);
      if (titleRef.current) titleRef.current.style.opacity = 1 - clamp(p / .15);
      if (hintRef.current) hintRef.current.style.opacity = 1 - clamp(p / .05);
      renderer.render(scene, camera);
      reqId = requestAnimationFrame(tick);
    }
    reqId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', readScroll);
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <>
      <div id="loader" className={!loading ? 'done' : ''}>
        <h1>Warming up the dance floor</h1>
        <div id="count">{count}</div>
      </div>
      <div id="scene" ref={sceneElRef}>
        <div id="stage">
          <canvas id="bg" ref={bgRef}></canvas>
          <canvas id="c" ref={cRef}></canvas>
          <div id="title" ref={titleRef}>Welcome to Wassup London</div>
          <div id="hint" ref={hintRef}>Scroll</div>
          <div className="flash" id="flash" ref={flashRef}></div>
          <div className="cover" id="cover" ref={coverRef}></div>
        </div>
      </div>
      <div id="site" style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </>
  );
}
