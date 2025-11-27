"use client";

import React from "react";
import { motion } from "framer-motion";
// @ts-ignore
import MagicBento from "../MagicBento";

export default function Experience() {
    return (
        <section className="py-20 px-4 md:px-10 bg-black text-white border-t border-neutral-900">
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
                    <div className="p-8 border border-neutral-800 rounded-2xl bg-neutral-900/40 backdrop-blur-md hover:border-red-500/50 transition-colors duration-500">
                        <h3 className="text-2xl font-semibold mb-2">The Tech Mobius Club</h3>
                        <p className="text-neutral-400 mb-4">Indraprastha International School</p>
                        <p className="text-lg text-neutral-300">
                            Developed and maintained the official website:{" "}
                            <a
                                href="https://techmobius.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-400 hover:text-red-300 underline underline-offset-4"
                            >
                                techmobius.in
                            </a>
                        </p>
                    </div>

                    <div className="p-8 border border-neutral-800 rounded-2xl bg-neutral-900/40 backdrop-blur-md hover:border-red-500/50 transition-colors duration-500">
                        <h3 className="text-2xl font-semibold mb-2">Student</h3>
                        <p className="text-neutral-400 mb-4">Indraprastha International School</p>
                        <p className="text-lg text-neutral-300">
                            Class 9
                        </p>
                    </div>
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
                                    rowSpan: 1
                                },
                                {
                                    title: "React",
                                    description: "UI Library",
                                    label: "Frontend",
                                    color: "rgba(23, 23, 23, 0.8)",
                                    colSpan: 2,
                                    rowSpan: 1
                                }
                            ]}
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
