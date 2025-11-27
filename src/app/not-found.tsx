"use client";

import Link from "next/link";
import LetterGlitch from "@/components/ui/LetterGlitch";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white p-4">
            <h1 className="text-9xl font-black text-red-600 mb-4 tracking-tighter">
                <LetterGlitch text="404" speed={50} />
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-neutral-400">
                SYSTEM FAILURE: PAGE NOT FOUND
            </h2>
            <Link
                href="/"
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-red-600 hover:text-white transition-colors"
            >
                RETURN TO BASE
            </Link>
        </div>
    );
}
