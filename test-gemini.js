const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listModels() {
    const genAI = new GoogleGenerativeAI("AIzaSyCCX2hjH88A95Ya6XwXYt0ZO3V-cV76zKo");
    try {
        console.log("Fetching available models...");
        const modelsToTest = ["gemini-1.5-flash", "gemini-1.5-flash-001", "gemini-pro", "gemini-1.0-pro"];
        
        for (const modelName of modelsToTest) {
             try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Test");
                console.log(`[SUCCESS] ${modelName} is working!`);
                
             } catch (e) {
                 console.log(`[FAIL] ${modelName}: ${e.message}`);
             }
        }
    } catch (e) {
        console.error("Fatal Error:", e);
    }
}

listModels();
