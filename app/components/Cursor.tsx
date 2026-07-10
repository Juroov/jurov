"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let rx = 0, ry = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      dot.style.left  = `${e.clientX - 3.5}px`;
      dot.style.top   = `${e.clientY - 3.5}px`;
      rx += (e.clientX - 16 - rx) * 0.18;
      ry += (e.clientY - 16 - ry) * 0.18;
      ring.style.left = `${rx}px`;
      ring.style.top  = `${ry}px`;
    };

    const smoothLoop = () => {
      raf = requestAnimationFrame(smoothLoop);
    };
    smoothLoop();

    const addHover = () => { dot.classList.add("hovering"); ring.classList.add("hovering"); };
    const rmHover  = () => { dot.classList.remove("hovering"); ring.classList.remove("hovering"); };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [role=button]").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", rmHover);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot"  className="cursor-dot"  aria-hidden />
      <div id="cursor-ring" className="cursor-ring" aria-hidden />
    </>
  );
}
