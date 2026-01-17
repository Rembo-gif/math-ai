const results = [];

function saveResult(user, score) {
    results.push({
        name: user.name,
        surname: user.surname,
        score
    });
}

function getResults() {
    return results.sort((a, b) => b.score - a.score);
}

module.exports = { saveResult, getResults };
