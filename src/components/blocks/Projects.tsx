"use client";

import React from "react";
// @ts-ignore
import FlowingMenu from "../FlowingMenu";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Iridescence from "../ui/Iridescence";
import SplitText from "../ui/SplitText";

export default function Projects() {
    return (
        <section className="min-h-screen w-full py-20 px-4 md:px-10 bg-neutral-950 text-white relative z-10 overflow-hidden">
            <Iridescence />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex justify-center mb-16">
                    <SplitText
                        text="SELECTED PROJECTS"
                        className="text-4xl md:text-6xl font-bold text-center tracking-tighter"
                    />
                </div>
                <div className="h-[600px] w-full relative z-10">
                    <FlowingMenu
                        items={projects.map((project) => ({
                            link: project.link,
                            text: project.title,
                            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070", // Placeholder or project image
                        }))}
                    />
                </div>
            </div>
        </section>
    );
}
