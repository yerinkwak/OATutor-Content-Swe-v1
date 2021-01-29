var hints = [{id: "GenStr13a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible."}, {id: "GenStr13a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2-6y=0"], dependencies: ["GenStr13a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation."}, {id: "GenStr13a-h3", type: "hint", dependencies: ["GenStr13a-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation."}, {id: "GenStr13a-h4", type: "hint", dependencies: ["GenStr13a-h3"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation."}, {id: "GenStr13a-h5", type: "hint", dependencies: ["GenStr13a-h4"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "GenStr13a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-6y=2"], dependencies: ["GenStr13a-h5"], title: "Addition", text: "Add 2 to each side of the equation."}, {id: "GenStr13a-h7", type: "hint", dependencies: ["GenStr13a-h6"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "GenStr13a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y=-1/3"], dependencies: ["GenStr13a-h7"], title: "Division", text: "Divide -6 from each side."}, {id: "GenStr13a-h9", type: "hint", dependencies: ["GenStr13a-h8"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "GenStr13a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["GenStr13a-h9"], title: "Verification", text: "Check whether $$\\left(8\\right)-\\left(2\\right) \\left(\\left(3\\right) \\frac{-\\left(1\\right)}{3}+\\left(5\\right)\\right)$$ equals 0.", choices: ["TRUE", "FALSE"]}, ]; export {hints};