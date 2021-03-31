var hints = [{id: "LinIneq13a-h1", type: "hint", dependencies: [], title: "Move Variable Terms", text: "We start by moving variable terms to one side of the inequality"}, {id: "LinIneq13a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$2 \\geq 4x-1$$"], dependencies: ["LinIneq13a-h1"], title: "Move Variable Terms", text: "What inequality do we get after moving the variable terms?", choices: ["$$2 \\geq 10x-1$$", "$$2 \\geq 4x-1$$"]}, {id: "LinIneq13a-h3", type: "hint", dependencies: ["LinIneq13a-h2"], title: "Isolate Variable Term", text: "We proceed by isolating the variable term 4x."}, {id: "LinIneq13a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["LinIneq13a-h3"], title: "Isolate Variable Term", text: "What number should we add to both sides?"}, {id: "LinIneq13a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$3 \\geq 4x$$"], dependencies: ["LinIneq13a-h4"], title: "Isolate Variable Term", text: "What inequality do we get after isolating the variable term?", choices: ["$$1 \\geq 4x$$", "$$3 \\geq 4x$$"]}, {id: "LinIneq13a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/4"], dependencies: ["LinIneq13a-h5"], title: "Apply the Multiplication Property", text: "To make the coeffient of x be 1, what number should we multiply both sides of the inequality by?"}, {id: "LinIneq13a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3/4"], dependencies: ["LinIneq13a-h6"], title: "Left Side", text: "What is the left side after multiplying by $$\\frac{1}{4}$$?"}, {id: "LinIneq13a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x"], dependencies: ["LinIneq13a-h6"], title: "Right Side", text: "What is the right side after multiplying by $$\\frac{1}{4}$$?"}, {id: "LinIneq13a-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$ \\geq $$"], dependencies: ["LinIneq13a-h6"], title: "Sign", text: "What is the sign of the inequality after multiplication?", choices: ["$$ \\leq $$", "$$ \\geq $$"]}, {id: "LinIneq13a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$(-\\infty,3/4]$$"], dependencies: ["LinIneq13a-h7", "LinIneq13a-h8", "LinIneq13a-h9"], title: "Interval Notation", text: "What is $$\\frac{3}{4} \\geq x$$ written in interval notion?", choices: ["$$(-\\infty,3/4]$$", "$$[3/4,\\infty)$$"]}, ]; export {hints};