"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Asteroids404() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        if (!gameStarted || gameOver) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Game State
        const player = { x: canvas.width / 2, y: canvas.height - 50, size: 20, speed: 5, angle: 0 };
        const bullets: { x: number; y: number; vx: number; vy: number }[] = [];
        const enemies: { x: number; y: number; vx: number; vy: number; size: number; text: string }[] = [];
        const particles: { x: number; y: number; vx: number; vy: number; life: number; color: string }[] = [];
        const keys: { [key: string]: boolean } = {};
        let frameId: number;
        let lastEnemyTime = 0;

        // Utils
        const spawnEnemy = () => {
            const size = 30 + Math.random() * 30;
            const x = Math.random() * (canvas.width - size);
            enemies.push({
                x,
                y: -50,
                vx: (Math.random() - 0.5) * 2,
                vy: 1 + Math.random() * 2,
                size,
                text: ["404", "ERR", "NULL", "?"][Math.floor(Math.random() * 4)]
            });
        };

        const createExplosion = (x: number, y: number, color: string) => {
            for (let i = 0; i < 10; i++) {
                particles.push({
                    x, y,
                    vx: (Math.random() - 0.5) * 10,
                    vy: (Math.random() - 0.5) * 10,
                    life: 1.0,
                    color
                });
            }
        };

        // Inputs
        const handleKeyDown = (e: KeyboardEvent) => keys[e.code] = true;
        const handleKeyUp = (e: KeyboardEvent) => keys[e.code] = false;
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        // Resize
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            player.x = canvas.width / 2;
            player.y = canvas.height - 100;
        };
        window.addEventListener("resize", resize);
        resize();

        // Loop
        const loop = (timestamp: number) => {
            if (gameOver) return;

            // Update Player
            if (keys["ArrowLeft"] || keys["KeyA"]) player.x -= player.speed;
            if (keys["ArrowRight"] || keys["KeyD"]) player.x += player.speed;

            // Boundary
            player.x = Math.max(player.size, Math.min(canvas.width - player.size, player.x));

            // Spawn Enemies
            if (timestamp - lastEnemyTime > 1000) {
                spawnEnemy();
                lastEnemyTime = timestamp;
            }

            // Update Bullets
            for (let i = bullets.length - 1; i >= 0; i--) {
                bullets[i].x += bullets[i].vx;
                bullets[i].y += bullets[i].vy;
                if (bullets[i].y < 0) bullets.splice(i, 1);
            }

            // Update Enemies
            for (let i = enemies.length - 1; i >= 0; i--) {
                const e = enemies[i];
                e.x += e.vx;
                e.y += e.vy;

                // Collision with player
                const dx = player.x - e.x;
                const dy = player.y - e.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < player.size + e.size) {
                    setGameOver(true);
                    createExplosion(player.x, player.y, "red");
                }

                // Cleanup
                if (e.y > canvas.height) enemies.splice(i, 1);
            }

            // Bullet Collision
            for (let i = bullets.length - 1; i >= 0; i--) {
                for (let j = enemies.length - 1; j >= 0; j--) {
                    const b = bullets[i];
                    const e = enemies[j];
                    if (!b || !e) continue; // Safety

                    const dx = b.x - e.x;
                    const dy = b.y - e.y;
                    if (Math.sqrt(dx * dx + dy * dy) < e.size) {
                        createExplosion(e.x, e.y, "white");
                        enemies.splice(j, 1);
                        bullets.splice(i, 1);
                        setScore(s => s + 100);
                        break; // Bullet destroyed
                    }
                }
            }

            // Update Particles
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].x += particles[i].vx;
                particles[i].y += particles[i].vy;
                particles[i].life -= 0.05;
                if (particles[i].life <= 0) particles.splice(i, 1);
            }

            // Draw
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Stars (Static background reused or just simple dots)
            ctx.fillStyle = "#333";
            for (let i = 0; i < 50; i++) {
                ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
            }

            // Draw Player
            ctx.save();
            ctx.translate(player.x, player.y);
            ctx.beginPath();
            ctx.moveTo(0, -player.size);
            ctx.lineTo(-player.size, player.size);
            ctx.lineTo(player.size, player.size);
            ctx.closePath();
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.restore();

            // Draw Enemies
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            enemies.forEach(e => {
                ctx.font = `bold ${e.size}px monospace`;
                ctx.fillStyle = "red";
                ctx.fillText(e.text, e.x, e.y);
            });

            // Draw Bullets
            ctx.fillStyle = "cyan";
            bullets.forEach(b => {
                ctx.fillRect(b.x - 2, b.y - 10, 4, 20);
            });

            // Draw Particles
            particles.forEach(p => {
                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            frameId = requestAnimationFrame(loop);
        };

        // Shooting listener
        const shoot = (e: KeyboardEvent) => {
            if (e.code === "Space") {
                bullets.push({ x: player.x, y: player.y - 20, vx: 0, vy: -15 });
            }
        };
        window.addEventListener("keydown", shoot);

        frameId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("keydown", shoot);
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(frameId);
        };
    }, [gameStarted, gameOver]);

    return (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
            {!gameStarted && !gameOver && (
                <div className="text-center z-10 pointer-events-none absolute bottom-40 w-full animate-pulse">
                    <p className="text-neutral-500 font-mono">ARROWS to MOVE | SPACE to FIRE</p>
                </div>
            )}

            {gameOver && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/80 backdrop-blur-sm">
                    <h2 className="text-6xl font-black text-red-600 mb-4 animate-glitch">FAILURE</h2>
                    <p className="text-2xl mb-8 font-mono">SCORE: {score}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition"
                    >
                        RETRY
                    </button>
                    <a href="/" className="mt-4 text-neutral-500 hover:text-white underline">Return Home</a>
                </div>
            )}

            <canvas
                ref={canvasRef}
                className="absolute inset-0"
            />

            {gameStarted && (
                <div className="absolute top-10 left-10 z-10 font-mono text-xl text-red-500">
                    THREATS ELIMINATED: {score}
                </div>
            )}
        </div>
    );
}
