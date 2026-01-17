require("dotenv").config();

let currentUser = null;
let lastQuestions = [];

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const { saveResult, getResults } = require("./results");
const generateAIQuestions = require("./aiGenerator");
const generateAITest = require("./realAI");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// upload
const upload = multer({ dest: "uploads/" });

// ================= OPENAI =================
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// ================= LOGIN =================
app.post("/login", (req, res) => {
    const { name, surname, birth } = req.body;
    const nameRegex = /^[A-Za-z]{2,}$/;

    if (!name || !surname || !birth || !nameRegex.test(name) || !nameRegex.test(surname)) {
        return res.json({ success: false });
    }

    currentUser = { name, surname, birth };
    res.json({ success: true });
});

// ================= AI TEST =================
app.get("/ai-test", async (req, res) => {
    try {
        const questions = await generateAITest();
        lastQuestions = questions;
        res.json({ questions });
    } catch (e) {
        res.status(500).json({ error: "AI test olinmadi" });
    }
});

// ================= IMAGE CHECK =================
app.post("/check-image", upload.single("image"), async (req, res) => {
    try {
        const imageBuffer = fs.readFileSync(req.file.path);

        const response = await openai.responses.create({
            model: "gpt-4o",
            input: [{
                role: "user",
                content: [
                    { type: "input_text", text: "Matematik yechimni tekshir" },
                    { type: "input_image", image_base64: imageBuffer.toString("base64") }
                ]
            }]
        });

        fs.unlinkSync(req.file.path);

        res.json({ result: response.output_text });

    } catch (e) {
        res.status(500).json({ result: "Xato" });
    }
});

// ================= CHECK =================
app.post("/check", (req, res) => {
    const { userAnswers } = req.body;
    let score = 0;

    lastQuestions.forEach((_, i) => {
        if (userAnswers[i]?.trim()) score++;
    });

    if (currentUser) saveResult(currentUser, score);

    res.json({ score, total: lastQuestions.length });
});

// ================= RATING =================
app.get("/rating", (req, res) => {
    res.json(getResults());
});

// ================= FRONTEND =================
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ================= START SERVER =================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server ishlayapti: http://localhost:" + PORT);
});
