const allQuestions = require("./questions")();

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function generateAIQuestions() {
    const easy = allQuestions.filter(q => q.d === 1);
    const medium = allQuestions.filter(q => q.d === 2);
    const hard = allQuestions.filter(q => q.d === 3);

    return [
        ...shuffle(easy).slice(0, 10),
        ...shuffle(medium).slice(0, 10),
        ...shuffle(hard).slice(0, 10)
    ];
}

module.exports = generateAIQuestions;
