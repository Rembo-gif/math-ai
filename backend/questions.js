function generateQuestions() {
    return [
        // O‘RTA (1–10)
        { q: "lim x→0 (sin x)/x", a: "1", d: 1 },
        { q: "lim x→∞ 1/x", a: "0", d: 1 },
        { q: "d/dx (x^2)", a: "2x", d: 1 },
        { q: "d/dx (3x)", a: "3", d: 1 },
        { q: "lim x→0 x^2", a: "0", d: 1 },
        { q: "d/dx (sin x)", a: "cos x", d: 1 },
        { q: "lim x→0 x", a: "0", d: 1 },
        { q: "d/dx (5)", a: "0", d: 1 },
        { q: "lim x→∞ 2/x", a: "0", d: 1 },
        { q: "d/dx (x)", a: "1", d: 1 },

        // QIYIN (11–20)
        { q: "d/dx (x^3)", a: "3x^2", d: 2 },
        { q: "lim x→0 (1-cos x)/x^2", a: "1/2", d: 2 },
        { q: "d/dx (x^2+3x)", a: "2x+3", d: 2 },
        { q: "lim x→∞ ln(x)/x", a: "0", d: 2 },
        { q: "d/dx (x·sin x)", a: "x cos x + sin x", d: 2 },
        { q: "lim x→0 (e^x-1)/x", a: "1", d: 2 },
        { q: "d/dx (cos x)", a: "-sin x", d: 2 },
        { q: "lim x→∞ 1/x^2", a: "0", d: 2 },
        { q: "d/dx (x^2 sin x)", a: "2x sin x + x^2 cos x", d: 2 },
        { q: "lim x→0 tan x / x", a: "1", d: 2 },

        // JUDA QIYIN (21–30)
        { q: "d/dx (ln x)", a: "1/x", d: 3 },
        { q: "lim x→∞ x/(e^x)", a: "0", d: 3 },
        { q: "d/dx (x ln x)", a: "ln x + 1", d: 3 },
        { q: "lim x→0 x ln x", a: "0", d: 3 },
        { q: "d/dx (e^(2x))", a: "2e^(2x)", d: 3 },
        { q: "lim x→∞ ln x / x^2", a: "0", d: 3 },
        { q: "d/dx (sin x / x)", a: "(x cos x - sin x)/x^2", d: 3 },
        { q: "lim x→0 (sin x - x)/x^3", a: "-1/6", d: 3 },
        { q: "d/dx (x^x)", a: "x^x(ln x + 1)", d: 3 },
        { q: "lim x→∞ (x^2)/(e^x)", a: "0", d: 3 }
    ];
}

module.exports = generateQuestions;
