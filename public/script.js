const API = "http://localhost:3000";

let questions = [];

async function loadTest() {
    const res = await fetch(API + "/ai-test");
    const data = await res.json();

    // agar backend { test: "..." } qaytarsa
    if (data.test) {
        questions = data.test.split("\n").filter(q => q.trim() !== "");
    }
    // agar backend { questions: [] } qaytarsa
    else {
        questions = data.questions;
    }

    const form = document.getElementById("testForm");
    form.innerHTML = "";

    questions.forEach((q, i) => {
        form.innerHTML += `
            <p>${i + 1}. ${q}</p>
            <input id="a${i}" placeholder="Javob">
            <br><br>
        `;
    });
}

async function submitTest() {
    const answers = questions.map((_, i) =>
        document.getElementById("a" + i).value
    );

    const res = await fetch(API + "/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userAnswers: answers })
    });

    const data = await res.json();
    alert(`Natija: ${data.score} / ${data.total}`);
}
