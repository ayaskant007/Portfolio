"use client";

import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

interface GravityProps {
    triggerId?: string;
    onActivate?: () => void;
}

export default function Gravity({ triggerId = "gravity-trigger", onActivate }: GravityProps) {
    const [isActive, setIsActive] = useState(false);
    const engineRef = useRef<Matter.Engine | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);
    const bodiesMapRef = useRef<Map<HTMLElement, Matter.Body>>(new Map());

    useEffect(() => {
        // Wait for DOM to handle client side check
        if (typeof window === "undefined") return;

        const triggerBtn = document.getElementById(triggerId);
        if (!triggerBtn) return;

        const startGravity = (e: Event) => {
            // Prevent default navigation if it's a link
            e.preventDefault();
            if (isActive) return;
            setIsActive(true);
            onActivate && onActivate();

            // Slight delay to allow any ripple/click animations
            setTimeout(initPhysics, 100);
        };

        triggerBtn.addEventListener("click", startGravity);
        return () => triggerBtn.removeEventListener("click", startGravity);
    }, [triggerId, isActive, onActivate]);

    const initPhysics = () => {
        if (typeof window === "undefined") return;

        // 1. Setup Matter.js
        const Engine = Matter.Engine,
            Runner = Matter.Runner,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        const engine = Engine.create();
        engineRef.current = engine;

        const world = engine.world;

        // 2. Find target elements
        // We target mostly everything solid
        const selectors = [
            "h1", "h2", "p", "a.group",
            ".magic-bento-card", ".menu__item",
            "img", ".avatar-container"
        ];

        // Grab elements but excluding the gravity trigger itself if possible
        const elements = Array.from(document.querySelectorAll(selectors.join(","))) as HTMLElement[];

        const validElements = elements.filter(el => {
            const rect = el.getBoundingClientRect();
            const style = window.getComputedStyle(el);
            // Only visible elements, sizable, and on screen
            return (
                rect.width > 20 &&
                rect.height > 20 &&
                style.display !== "none" &&
                style.opacity !== "0" &&
                rect.top < window.innerHeight &&
                rect.bottom > 0
            );
        });

        // 3. Create Bodies
        validElements.forEach(el => {
            // Snapshot visual state
            const rect = el.getBoundingClientRect();

            // Calculate center for Matter.js
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            const body = Bodies.rectangle(x, y, rect.width, rect.height, {
                restitution: 0.8,
                friction: 0.1,
                density: 0.002
            });

            bodiesMapRef.current.set(el, body);
            World.add(world, body);

            // Lock element visual style to purely transform-based
            // We set fixed so they detach from document flow
            el.style.position = "fixed";
            el.style.left = "0";
            el.style.top = "0";
            el.style.width = `${rect.width}px`;
            el.style.height = `${rect.height}px`;
            el.style.margin = "0";
            el.style.zIndex = "1000"; // Bring to front
            el.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
            el.style.transition = "none"; // Disable CSS transitions so physics is smooth
            el.style.pointerEvents = "none"; // Let mouse interact via Physics constraint, not DOM
        });

        // 4. Add Boundaries
        const floor = Bodies.rectangle(
            window.innerWidth / 2,
            window.innerHeight + 100, // Slightly below
            window.innerWidth * 2,
            200,
            { isStatic: true }
        );
        const leftWall = Bodies.rectangle(
            -100,
            window.innerHeight / 2,
            200,
            window.innerHeight * 2,
            { isStatic: true }
        );
        const rightWall = Bodies.rectangle(
            window.innerWidth + 100,
            window.innerHeight / 2,
            200,
            window.innerHeight * 2,
            { isStatic: true }
        );

        World.add(world, [floor, leftWall, rightWall]);

        // 5. Mouse Interaction
        const mouse = Mouse.create(document.body);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        // Need to allow scrolling if we want? No, gravity mode usually breaks scrolling.
        // disable scrolling
        document.body.style.overflow = "hidden";

        World.add(world, mouseConstraint);

        // 6. Runner
        const runner = Runner.create();
        Runner.run(runner, engine);
        runnerRef.current = runner;

        // 7. Render Loop (Sync Physics -> DOM)
        // We bind the update loop
        const update = () => {
            if (!engineRef.current) return;

            bodiesMapRef.current.forEach((body, el) => {
                const { x, y } = body.position;
                const rotation = body.angle;
                // Apply transform
                el.style.transform = `translate(${x - el.offsetWidth / 2}px, ${y - el.offsetHeight / 2}px) rotate(${rotation}rad)`;
            });

            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };

    return null;
}
