var hints = [{id: "RadRat2c-h1", type: "hint", dependencies: [], title: "Parentheses", text: "The first step is to simplify the parentheses."}, {id: "RadRat2c-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["RadRat2c-h1"], title: "Subtraction", text: "What is 25-9?"}, {id: "RadRat2c-h3", type: "hint", dependencies: ["RadRat2c-h2"], title: "Simplify", text: "Simlify the expression: $$\\sqrt{\\left(25\\right)-\\left(9\\right)}=\\sqrt{16}$$"}, {id: "RadRat2c-h4", type: "hint", dependencies: ["RadRat2c-h3"], title: "Principal Square Root", text: "The principal square root of a is the nonnegative number that, when multiplied by itself, equals a. It is written as a radical expression, with a symbol called a radical over the term called the radicand: sqrt(a)."}, {id: "RadRat2c-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["RadRat2c-h4"], title: "Principal Square Root", text: "What number multiplied by itself equals 16?"}, ]; export {hints};