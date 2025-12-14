"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || "");

const SYSTEM_PROMPT = `
You are "AyaskantOS Kernel", a highly advanced, slightly witty, and cyberpunk-themed system interface for Ayaskant Sahoo's portfolio.
Your goal is to help visitors navigate the site and learn about Ayaskant.

DATA:
- Name: Ayaskant Sahoo
- Title: Developer of various disciplines (Web, Games, Interactive Software)
- Skills: Next.js 16, React Three Fiber, Tailwind CSS, Framer Motion, GSAP, Unity, Python.
- Projects: 
  1. Parano!a (Unity Horror Game)
  2. Vikas Bhi, Virasat Bhi (GSAP Website)
  3. The Last Ember (Ren'Py Visual Novel)
- Contact: contact@ayaskant.dev
- Socials: GitHub, Live Site.

RULES:
1. Keep responses short and terminal-like (under 50 words preferably).
2. Use technical/hacker jargon occasionally (e.g., "Accessing database...", "Query resolved.").
3. If asked about something unrelated to Ayaskant, strictly refuse in a cool way (e.g., "Access Denied: Topic outside system parameters.").
4. Be helpful but maintain the "System Admin" persona.
`;

export async function chatWithAI(message: string) {
    if (!apiKey) {
        return { error: "System Error: API Key missing in environment." };
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const result = await model.generateContent({
            contents: [
                { role: "user", parts: [{ text: SYSTEM_PROMPT + "\n\nUser Query: " + message }] }
            ],
            generationConfig: {
                maxOutputTokens: 100,
                temperature: 0.7,
            }
        });

        const response = result.response.text();
        return { success: response };
    } catch (error) {
        console.error("Gemini Error:", error);
        return { error: "System Malfunction: Connection to AI Core failed." };
    }
}
