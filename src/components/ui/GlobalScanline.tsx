"use client";

import React from "react";

export default function GlobalScanline() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,6px_100%] opacity-60 mix-blend-overlay"></div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

            {/* Subtle Noise (optional, can reuse Noise component but this is specific to the screen) */}
        </div>
    );
}
