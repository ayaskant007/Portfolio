"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Magnet from "../ui/Magnet";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 md:px-10 bg-neutral-950 text-white border-t border-neutral-900">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="overflow-hidden mb-12">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{
                                repeat: Infinity,
                                duration: 20,
                                ease: "linear",
                            }}
                            className="flex whitespace-nowrap"
                        >
                            {[...Array(4)].map((_, i) => (
                                <h2 key={i} className="text-6xl md:text-8xl font-black tracking-tighter mr-12 text-transparent stroke-text-red">
                                    LET'S CONNECT <span className="text-red-600 stroke-none">LET'S CONNECT</span>
                                </h2>
                            ))}
                        </motion.div>
                    </div>
                    <p className="text-neutral-400 text-lg mb-8">
                        Open to collaborations, hackathons, and innovative projects.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-neutral-300">
                            <Mail className="w-5 h-5 text-red-500" />
                            <a href="mailto:ayaskantsahoo007@gmail.com" className="hover:text-white transition-colors">
                                ayaskantsahoo007@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-neutral-300">
                            <Phone className="w-5 h-5 text-red-500" />
                            <span>+91 7428600928</span>
                        </div>
                        <div className="flex items-center gap-4 text-neutral-300">
                            <MapPin className="w-5 h-5 text-red-500" />
                            <span>New Delhi, India</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center space-y-6"
                >
                    <SocialLink
                        href="https://instagram.com/ayaskant_007"
                        icon={<Instagram className="w-6 h-6" />}
                        label="Instagram"
                    />
                    <SocialLink
                        href="https://www.linkedin.com/in/ayaskant-sahoo/"
                        icon={<Linkedin className="w-6 h-6" />}
                        label="LinkedIn"
                    />
                    <SocialLink
                        href="https://github.com/ayaskant007"
                        icon={<Github className="w-6 h-6" />}
                        label="GitHub"
                    />
                </motion.div>
            </div>
            <div className="mt-20 text-center text-neutral-600 text-sm">
                <p>© {new Date().getFullYear()} Ayaskant Sahoo. All rights reserved.</p>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Magnet>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-neutral-800 rounded-xl hover:bg-neutral-900 hover:border-red-500/50 transition-all group bg-black"
            >
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-neutral-900 rounded-lg text-white group-hover:text-red-500 transition-colors">
                        {icon}
                    </div>
                    <span className="font-medium text-lg">{label}</span>
                </div>
                <span className="text-neutral-500 group-hover:translate-x-1 transition-transform">
                    &rarr;
                </span>
            </a>
        </Magnet>
    );
}
