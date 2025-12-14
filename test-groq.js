const Groq = require("groq-sdk");

async function testGroq() {
    const groq = new Groq({ apiKey: "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" });
    
    try {
        console.log("Listing models...");
        const models = await groq.models.list();
        console.log("Available Models:", models.data.map(m => m.id).join(", "));
        
        const targetModel = "openai/gpt-oss-120b";
        // Also try sans-provider if openai/ prefix is implicit or unwanted
        const targetModel2 = "gpt-oss-120b";

        console.log(`\nTesting ${targetModel}...`);
        try {
            const completion = await groq.chat.completions.create({
                messages: [{ role: "user", content: "Test" }],
                model: targetModel,
            });
            console.log("SUCCESS with full name!");
        } catch (e) {
            console.log("FAILED:", e.message);
        }

    } catch (e) {
        console.error("Fatal Error:", e);
    }
}

testGroq();
