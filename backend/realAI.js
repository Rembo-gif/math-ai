const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: "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"

});


async function generateAITest() {
    const prompt =
        "30 ta matematik analiz MISOL yoz.\n" +
        "Mavzu: limit va hosila.\n" +
        "Faqat matematik ifodalar.\n" +
        "Har qator = 1 ta misol.\n" +
        "1-10: limit (juda murakkab)\n" +
        "11-20: hosila (murakkab funksiyalar)\n" +
        "21-30: limit + hosila aralash\n" +
        "Format misollar:\n" +
        "lim_{x->0} (...)\n" +
        "d/dx(...)\n" +
        "ln, e^x, trigonometrik, kasr, ildiz.\n" +
        "Hech qanday izoh, JSON, raqam, ``` yozma.";

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }]
    });

    const text = response.choices[0].message.content;

    return text
        .split("\n")
        .map(q => q.trim())
        .filter(q => q.length > 0);
}

module.exports = generateAITest;
