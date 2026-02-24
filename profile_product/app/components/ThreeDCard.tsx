"use client";

import { useEffect, useRef, FC } from "react";
import * as THREE from "three";

const ThreeDCard: FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // Renderer — ยังไม่กำหนด size, ให้ ResizeObserver จัดการ
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const dir = new THREE.DirectionalLight(0xffffff, 1.4);
    dir.position.set(4, 6, 6);
    scene.add(dir);
    const rim = new THREE.DirectionalLight(0x93c5fd, 0.6);
    rim.position.set(-4, -3, -4);
    scene.add(rim);

    // Rounded card shape
    const cW = 6.0, cH = 4.0, cD = 0.10, r = 0.16;
    const shape = new THREE.Shape();
    shape.moveTo(-cW / 2 + r, -cH / 2);
    shape.lineTo( cW / 2 - r, -cH / 2);
    shape.quadraticCurveTo( cW / 2, -cH / 2,  cW / 2, -cH / 2 + r);
    shape.lineTo( cW / 2,  cH / 2 - r);
    shape.quadraticCurveTo( cW / 2,  cH / 2,  cW / 2 - r,  cH / 2);
    shape.lineTo(-cW / 2 + r,  cH / 2);
    shape.quadraticCurveTo(-cW / 2,  cH / 2, -cW / 2,  cH / 2 - r);
    shape.lineTo(-cW / 2, -cH / 2 + r);
    shape.quadraticCurveTo(-cW / 2, -cH / 2, -cW / 2 + r, -cH / 2);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: cD, bevelEnabled: true,
      bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 8,
    });
    geo.center();

    // Canvas texture
    const cvs = document.createElement("canvas");
    cvs.width = 760; cvs.height = 500;
    const ctx = cvs.getContext("2d")!;

    ctx.fillStyle = "#ffffff";
    (ctx as any).roundRect(0, 0, 760, 500, 20);
    ctx.fill();

    // Grid
    ctx.strokeStyle = "rgba(226,232,240,0.8)";
    ctx.lineWidth = 1;
    for (let x = 0; x <= 760; x += 38) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 500); ctx.stroke(); }
    for (let y = 0; y <= 500; y += 38) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(760, y); ctx.stroke(); }

    // Title bar
    const titleBg = ctx.createLinearGradient(0, 0, 760, 0);
    titleBg.addColorStop(0, "#f8fafc"); titleBg.addColorStop(1, "#f1f5f9");
    ctx.fillStyle = titleBg; ctx.fillRect(0, 0, 760, 52);
    ctx.strokeStyle = "#e2e8f0"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, 52); ctx.lineTo(760, 52); ctx.stroke();

    // Traffic lights
    const lights: [string, number][] = [["#ff5f57", 26], ["#febc2e", 52], ["#28c840", 78]];
    lights.forEach(([color, x]) => {
      ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(x, 26, 7, 0, Math.PI * 2); ctx.fill();
    });

    ctx.fillStyle = "#64748b";
    ctx.font = "500 14px 'Fira Code', 'Courier New', monospace";
    ctx.fillText("portfolio.config.ts", 104, 31);

    // Code lines
    const items: { k: string; v: string | null }[] = [
      { k: "  name",       v: '"Your Name"' },
      { k: "  role",       v: '"Full-Stack Engineer"' },
      { k: "  location",   v: '"Bangkok, TH TH"' },
      { k: "  status",     v: '"available"' },
      { k: "  stack",      v: null },
      { k: "  openToWork", v: "true" },
    ];

    const lineH = 54;
    let cy = 90;
    ctx.font = "500 15px 'Fira Code', 'Courier New', monospace";
    ctx.fillStyle = "#64748b";
    ctx.fillText("const config = {", 36, cy);
    cy += lineH;

    items.forEach(({ k, v }) => {
      if (!v) {
        ctx.fillStyle = "#334155"; ctx.fillText(`${k}: [`, 36, cy);
        const kw = ctx.measureText(`${k}: [`).width;
        ctx.fillStyle = "#2563eb";
        const stackStr = '"Next.js", "React", "TypeScript", "Node.js"';
        ctx.fillText(stackStr, 36 + kw, cy);
        ctx.fillStyle = "#334155";
        ctx.fillText("],", 36 + kw + ctx.measureText(stackStr).width, cy);
      } else {
        ctx.fillStyle = "#334155"; ctx.fillText(`${k}: `, 36, cy);
        const kw = ctx.measureText(`${k}: `).width;
        ctx.fillStyle = k.trim() === "status" || k.trim() === "openToWork" ? "#16a34a" : "#2563eb";
        ctx.fillText(`${v},`, 36 + kw, cy);
      }
      cy += lineH;
    });

    ctx.fillStyle = "#64748b"; ctx.fillText("}", 36, cy);

    const fade = ctx.createLinearGradient(0, 420, 0, 500);
    fade.addColorStop(0, "transparent"); fade.addColorStop(1, "rgba(241,245,249,0.6)");
    ctx.fillStyle = fade; ctx.fillRect(0, 0, 760, 500);

    const tex      = new THREE.CanvasTexture(cvs);
    const frontMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.1, metalness: 0.05 });
    const sideMat  = new THREE.MeshStandardMaterial({ color: new THREE.Color("#e2e8f0"), roughness: 0.3, metalness: 0.1 });

    const card = new THREE.Mesh(geo, [sideMat, sideMat, frontMat]);
    card.rotation.y = -0.15; card.rotation.x = 0.06;
    scene.add(card);

    // Particles
    const pGeo = new THREE.BufferGeometry();
    const pos  = new Float32Array(60 * 3);
    for (let i = 0; i < pos.length; i++) pos[i] = (Math.random() - 0.5) * 9;
    pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.022, transparent: true, opacity: 0.4 }));
    scene.add(pts);

    // ResizeObserver — แก้ปัญหา size = 0 ตอน mount
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    ro.observe(el);

    // Mouse tracking
    let targetX = -0.15, targetY = 0.06, currentX = -0.15, currentY = 0.06;

    const onMove = (e: MouseEvent): void => {
      const rect = el.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / el.clientWidth  - 0.5) *  0.7;
      targetY = ((e.clientY - rect.top)  / el.clientHeight - 0.5) * -0.5;
    };
    const onLeave = (): void => { targetX = -0.15; targetY = 0.06; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    // Render loop
    let animId: number;
    const clock = new THREE.Clock();
    const animate = (): void => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;
      card.rotation.y = currentX;
      card.rotation.x = currentY;
      card.position.y = Math.sin(t * 0.7) * 0.045;
      pts.rotation.y  = t * 0.025;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  // div นี้ fill 100% ของ parent — ไม่มี background
  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", cursor: "grab" }}
    />
  );
};

export default ThreeDCard;