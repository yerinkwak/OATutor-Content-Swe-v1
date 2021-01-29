var hints = [{id: "Multiply1a-h1", type: "hint", dependencies: [], title: "Multiplication Definition", text: "$$a b$$ means add a, b times."}, {id: "Multiply1a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["27"], dependencies: ["Multiply1a-h1"], title: "Multiplying Positive Parts", text: "Let's ignore the negative sign first. What is 9*3?", subHints: [{id: "Multiply1a-h2-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["27"], dependencies: [], title: "Multiplying Positive Parts", text: "To calculate $$\\left(9\\right) \\left(3\\right)$$ we can use the definition of multiplication: $$\\left(9\\right) \\left(3\\right)=\\left(9\\right)+\\left(9\\right)+\\left(9\\right)$$ What is 9+9+9?"}]}, {id: "Multiply1a-h3", type: "hint", dependencies: ["Multiply1a-h2"], title: "Negative Sign", text: "For multiplication of two signed numbers, when the signs are different, the product is negative."}, {id: "Multiply1a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-27"], dependencies: ["Multiply1a-h3"], title: "Negative Sign", text: "If the sign for our final answer is negative, what should our final answer be?"}, ]; export {hints};