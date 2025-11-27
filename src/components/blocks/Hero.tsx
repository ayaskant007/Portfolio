import React from "react";
import StarField from "../ui/StarField";
import LetterGlitch from "../ui/LetterGlitch";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <StarField />
            <div className="z-10 text-center space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                    <LetterGlitch text="AYASKANT SAHOO" speed={75} />
                </h1>
                <p className="text-xl md:text-2xl text-neutral-400 font-light tracking-wide">
                    <LetterGlitch text="DEVELOPER / STUDENT" speed={50} />
                </p>
            </div>
            <div className="absolute bottom-10 animate-bounce text-neutral-500">
                <p className="text-sm">Scroll to explore</p>
            </div>
        </section>
    );
}
