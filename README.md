# Portfolio v2 - The macOS Portfolio

[Click here to visit my Portfolio!](https://ayaskant007.is-a.dev)

<img width="1911" height="998" alt="image" src="https://github.com/user-attachments/assets/8fe7a49b-b5d8-4a60-ad93-ce9dc0058049" />

My Portfolio is a super immersive, physics-driven web portfolio that mimics modern macOS architecture using React, GSAP 3, and Tailwind CSS v4. It gives a pixel-perfect liquid glass experience right in the browser.

## Key Features

- **Advanced Window Management:** Fully functional Draggable windows constrained by viewport bounds. It also has the famous Apple's **GENIE EFFECT** which is made by using GSAP for minimize animations, double-click to maximize, and an intelligent z-index drop-shadow stacking based on active window focus.
- **System-Wide Dark Mode:** My portfolio has a deep integration with Tailwind v4's custom class variants, which allows the entire os to seamlessly toggle between Ligh and Dark mode, while still preserving the unique apple-like look.
- **Interactive Top Bar & Control Center:** A live macOS top bar that detects active apps, alongside a functional Control Center featuring draggable brightness sliders and system toggles.
- It also features fully working apps, like the terminal, safari, finder.
- The system also features a live weather widget powered by Open-Meteo API, a real-time clock, and also handles Spotlight Search overlay filtering dynamically.

## Dependencies

- **React 18 + Vite**
- **Zustand**
- **Tailwind CSS v4**
- **GSAP 3**
- **lucide React**
- **Day.js**
- **dot-lottie React**

## Quick Start

To run this repository locally, you will need Node.js installed on your machine.

**1. Clone the repository**
```bash
git clone https://github.com/ayaskant007/Portfolio.git
cd Portfolio
```

**2. Install all dependencies**
```bash
npm install
```

**3. Configure Environment Variables**
To run the interactive AI chat within the custom Terminal app, you will need a Groq API key since the AI is a llama model which run through Groq. 

Create a `.env` file in the root directory and add your key:
```env
VITE_GROQ_API_KEY=your_api_key_here
```

**4. Start the Dev Server**
```bash
npm run dev
```

Navigate to `http://localhost:5173` to experience the operating system.

---

Licensed under the MIT License.
Developed by Ayaskant Sahoo.
Project made for [#horizons](https://horizons.hackclub.com)
A YSWS Program of [Hack Club](https://hackclub.com)

---

#Acknowledgments & AI Usage

Inspiration, code snippets, etc.

AI was used to implement the genie animation, and the spotlight search and also sometimes to debug the code.
JS Mastery Tutorial for MacOS Portfolio
