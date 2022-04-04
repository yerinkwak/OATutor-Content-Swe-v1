var hints = [{id: "a57f999ser13a-h1", type: "hint", dependencies: [], title: "Identify $$a_1$$", text: "The first term is $$a_1=-2$$.", variabilization: {}}, {id: "a57f999ser13a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["a57f999ser13a-h1"], title: "Identify r", text: "To find r, divide the 2nd term by the 1st term. What is $$r=\\frac{-10}{-2}$$?", variabilization: {}}, {id: "a57f999ser13a-h3", type: "hint", dependencies: ["a57f999ser13a-h2"], title: "Identify n", text: "We are given that $$n=6$$.", variabilization: {}}, {id: "a57f999ser13a-h4", type: "hint", dependencies: ["a57f999ser13a-h3"], title: "Formula for the Sum of the first n terms of a Geometric Series", text: "Substitute values for $$a_1$$, r, and n into the formula: $$S_n=\\frac{a_1 \\left(1-r^n\\right)}{1-r}$$.", variabilization: {}}, {id: "a57f999ser13a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-7812"], dependencies: ["a57f999ser13a-h4"], title: "Simplify to find $$S_6$$", text: "What is $$S_6=\\frac{-2\\left(1-5^6\\right)}{1-5}$$?", variabilization: {}}, {id: "a57f999ser13a-h6", type: "hint", dependencies: ["a57f999ser13a-h5"], title: "Partial Sum", text: "The partial sum is -7812.", variabilization: {}}, ]; export {hints};