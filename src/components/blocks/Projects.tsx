"use client";

import React from "react";
// @ts-ignore
import FlowingMenu from "../FlowingMenu";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Iridescence from "../ui/Iridescence";
import SplitText from "../ui/SplitText";


interface MenuItem {
    link: string;
    text: string;
    image: string;
}

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen w-full py-20 bg-neutral-950 text-white relative z-10 overflow-hidden">
            <Iridescence />
            <div className="w-full relative z-10">
                <div className="relative mb-24 text-center">
                    <h2 className="text-[12vw] md:text-[8rem] font-black text-transparent stroke-text tracking-tighter opacity-20 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none">
                        WORK
                    </h2>
                    <h2 className="text-5xl md:text-7xl font-bold relative z-10 tracking-tighter flex justify-center gap-4">
                        <SplitText text="SELECTED" delay={0.2} /> <span className="text-red-600"><SplitText text="PROJECTS" delay={0.2} /></span>
                    </h2>
                </div>
                <div className="h-[600px] w-full relative z-10">
                    <FlowingMenu
                        items={(projects.map((project) => ({
                            link: project.link,
                            text: project.title,
                            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070", // Placeholder or project image
                        })) as any)}
                    />
                </div>
            </div>
        </section>
    );
}
