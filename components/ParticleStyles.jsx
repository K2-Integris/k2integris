"use client";
import { useEffect } from "react";

export default function ParticleStyles({ total, orbSize, time, colors }) {
  useEffect(() => {
    const style = document.createElement("style");
    let css = "";

    for (let i = 1; i <= total; i++) {
      const z = Math.floor(Math.random() * 360);
      const y = Math.floor(Math.random() * 360);
      const color = colors[(i - 1) % colors.length];

      css += `
        .c:nth-child(${i}) {
          animation: orbit${i} ${time} infinite;
          animation-delay: ${i * 0.01}s;
          background-color: ${color};
        }
        @keyframes orbit${i} {
          20% { opacity: 1; }
          30% { transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(${orbSize}) rotateZ(${z}deg); }
          80% { transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(${orbSize}) rotateZ(${z}deg); opacity: 1; }
          100% { transform: rotateZ(-${z}deg) rotateY(${y}deg) translateX(${parseInt(orbSize) * 3}px) rotateZ(${z}deg); }
        }
      `;
    }

    style.textContent = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, [total, orbSize, time, colors]);

  return null;
}
