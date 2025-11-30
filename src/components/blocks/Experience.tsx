"use client";

import React from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
// @ts-ignore
import MagicBento from "../MagicBento";

interface BentoCard {
    title: string;
    description: string;
    label: string;
    color: string;
    colSpan?: number;
    rowSpan?: number;
}

export default function Experience() {
    const { scrollYProgress } = useScroll();
    const skewVelocity = useVelocity(scrollYProgress);
    const skew = useTransform(skewVelocity, [0, 1], [0, 5], { clamp: false });
    const smoothSkew = useSpring(skew, { stiffness: 400, damping: 90 });

    return (
        <section id="experience" className="py-20 px-4 md:px-10 bg-black text-white border-t border-neutral-900 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold mb-8 tracking-tight"
                >
                    AFFILIATIONS
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-32">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-md border border-white/5 hover:border-red-500/50 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">The Tech Mobius Club</h3>
                            <p className="text-neutral-400 mb-6 font-light tracking-wide">Indraprastha International School</p>
                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                                <span className="text-sm text-neutral-500 uppercase tracking-widest">Role: Lead Developer</span>
                                <a
                                    href="https://techmobius.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-red-400 transition-colors"
                                >
                                    Visit Site &rarr;
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-md border border-white/5 hover:border-red-500/50 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">Hack Club</h3>
                            <p className="text-neutral-400 mb-6 font-light tracking-wide">Global Nonprofit Network</p>
                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                                <span className="text-sm text-neutral-500 uppercase tracking-widest">Role: Member</span>
                                <a
                                    href="https://hackclub.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-red-400 transition-colors"
                                >
                                    Visit Site &rarr;
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-md border border-white/5 hover:border-red-500/50 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">Student</h3>
                            <p className="text-neutral-400 mb-6 font-light tracking-wide">Indraprastha International School</p>
                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                                <span className="text-sm text-neutral-500 uppercase tracking-widest">Grade: Class 9</span>
                                <span className="text-neutral-600">2018 - Present</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold mb-8 mt-16 tracking-tight relative z-20 bg-black inline-block px-4"
                >
                    TECHNICAL SKILLS
                </motion.h2>

                <div className="relative max-w-4xl mx-auto mt-16 min-h-[800px]">
                    {/* Sticky Background Text */}
                    <div className="sticky top-1/3 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-50 mix-blend-overlay">
                        <span className="text-[15vw] md:text-[8rem] font-bold text-neutral-800 tracking-tighter whitespace-nowrap">
                            TECH STACK
                        </span>
                    </div>

                    {/* Magic Bento Grid with Scroll Skew */}
                    <motion.div
                        className="relative z-10 w-full mt-[-100px]"
                        style={{ skewY: smoothSkew }}
                    >
                        <MagicBento
                            cards={[
                                {
                                    title: "C++",
                                    description: "Core Language",
                                    label: "Expert",
                                    color: "rgba(23, 23, 23, 0.3)", // More transparent
                                    colSpan: 2,
                                    rowSpan: 2,
                                    // @ts-ignore
                                    fontSize: "font-black font-sans tracking-tighter", // Switched to font-sans for better weight support
                                    titleStyle: { fontSize: "40cqw", lineHeight: "0.8" } // Massive container-relative size
                                },
                                {
                                    title: "Python",
                                    description: "AI & Scripting",
                                    label: "Advanced",
                                    color: "rgba(23, 23, 23, 0.3)",
                                    colSpan: 1,
                                    rowSpan: 1,
                                    // @ts-ignore
                                    fontSize: "font-black font-sans tracking-tighter",
                                    titleStyle: { fontSize: "22cqw", lineHeight: "0.8" }
                                },
                                {
                                    title: "C#",
                                    description: "Game Dev",
                                    label: "Intermediate",
                                    color: "rgba(23, 23, 23, 0.3)",
                                    colSpan: 1,
                                    rowSpan: 1,
                                    // @ts-ignore
                                    fontSize: "font-black font-sans tracking-tighter",
                                    titleStyle: { fontSize: "35cqw", lineHeight: "0.8" }
                                },
                                {
                                    title: "GSAP 3",
                                    description: "Animations",
                                    label: "Creative",
                                    color: "rgba(23, 23, 23, 0.3)",
                                    colSpan: 1,
                                    rowSpan: 2,
                                    // @ts-ignore
                                    fontSize: "font-black font-sans tracking-tighter",
                                    titleStyle: { fontSize: "25cqw", lineHeight: "0.8" }
                                },
                                {
                                    title: "Web Stack",
                                    description: "HTML, CSS, JS",
                                    label: "Full Stack",
                                    color: "rgba(23, 23, 23, 0.3)",
                                    colSpan: 1,
                                    rowSpan: 2,
                                    // @ts-ignore
                                    fontSize: "font-black font-sans tracking-tighter",
                                    titleStyle: { fontSize: "25cqw", lineHeight: "0.8" }
                                },
                                {
                                    title: "React",
                                    description: "UI Library",
                                    label: "Frontend",
                                    color: "rgba(23, 23, 23, 0.3)",
                                    colSpan: 2,
                                    rowSpan: 1,
                                    // @ts-ignore
                                    fontSize: "font-black font-sans tracking-tighter",
                                    titleStyle: { fontSize: "35cqw", lineHeight: "0.8" }
                                }
                            ] as any[]}
                            textAutoHide={false}
                            glowColor="220, 38, 38" // Stronger Red
                            enableStars={true}
                            enableSpotlight={true}
                            enableBorderGlow={true}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
