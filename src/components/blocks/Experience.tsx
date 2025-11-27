"use client";

import React from "react";
import { motion } from "framer-motion";
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
    return (
        <section id="experience" className="py-20 px-4 md:px-10 bg-black text-white border-t border-neutral-900">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold mb-8 tracking-tight"
                >
                    AFFILIATIONS
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
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
                    className="text-3xl md:text-5xl font-bold mb-8 mt-16 tracking-tight"
                >
                    TECHNICAL SKILLS
                </motion.h2>

                <div className="relative max-w-4xl mx-auto mt-16">
                    {/* Background Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                        <span className="text-[15vw] md:text-[8rem] font-bold text-neutral-700/30 tracking-tighter whitespace-nowrap z-0">
                            TECH STACK
                        </span>
                    </div>

                    {/* Magic Bento Grid */}
                    <div className="relative z-10 h-[600px] w-full">
                        <MagicBento
                            cards={[
                                {
                                    title: "C++",
                                    description: "Core Language",
                                    label: "Expert",
                                    color: "rgba(23, 23, 23, 0.8)", // Semi-transparent
                                    colSpan: 2,
                                    rowSpan: 2
                                },
                                {
                                    title: "Python",
                                    description: "AI & Scripting",
                                    label: "Advanced",
                                    color: "rgba(23, 23, 23, 0.8)",
                                    colSpan: 1,
                                    rowSpan: 1
                                },
                                {
                                    title: "C#",
                                    description: "Game Dev",
                                    label: "Intermediate",
                                    color: "rgba(23, 23, 23, 0.8)",
                                    colSpan: 1,
                                    rowSpan: 1
                                },
                                {
                                    title: "GSAP 3",
                                    description: "Animations",
                                    label: "Creative",
                                    color: "rgba(23, 23, 23, 0.8)",
                                    colSpan: 1,
                                    rowSpan: 2
                                },
                                {
                                    title: "Web Stack",
                                    description: "HTML, CSS, JS",
                                    label: "Full Stack",
                                    color: "rgba(23, 23, 23, 0.8)",
                                    colSpan: 1,
                                    rowSpan: 2
                                },
                                {
                                    title: "React",
                                    description: "UI Library",
                                    label: "Frontend",
                                    color: "rgba(23, 23, 23, 0.8)",
                                    colSpan: 2,
                                    rowSpan: 1
                                }
                            ] as BentoCard[]}
                            glowColor="239, 68, 68" // Red
                            enableStars={true}
                            enableSpotlight={true}
                            enableBorderGlow={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
