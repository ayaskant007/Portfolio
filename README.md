# Portfolio v2

---

- **Portfolio Link:** https://ayaskant007.is-a.dev

---

My Portfolio is a MacOS-like web portfolio that mimics modern macOS architecture using React, GSAP 3, and Tailwind CSS v4. It has features like desktop widgets, custom made fully working apps like Safari/Terminal, a Control Center etc.

---

## Dependencies

- **React 18 + Vite**
- **Zustand**
- **Tailwind CSS v4**
- **GSAP 3**
- **lucide React**
- **Day.js**
- **dot-lottie React**

## Running the website on your local machine.

Visit the hosted url to view the portfolio, or.
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

**3. Configure .env**
To run the interactive AI chat within the custom Terminal app, you will need a Groq API key since the AI is a llama model which run through Groq. 

Create a `.env` file in the root directory and add your key:
```env
VITE_GROQ_API_KEY=your_api_key_here
```

**4. Start the Dev Server**
```bash
npm run dev
```

Navigate to `http://localhost:5173`.

---

## Acknowledgments & AI Usage

- AI was used to implement the genie animation, and the spotlight search and also sometimes to debug the code.

- macOS Tahoe

- macOS Sequoia

- JS Mastery Tutorial for macOS Portfolio
