var hints = [{id: "a01e792probsolve2a-h1", type: "hint", dependencies: [], title: "Setting up the equation", text: "The first step is to rewrite the statement as a mathematical equation", variabilization: {}}, {id: "a01e792probsolve2a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["n,n+2,n+4"], dependencies: ["a01e792probsolve2a-h1"], title: "Expressing the numbers in terms of variables", text: "How can we express three consective even integers?", choices: ["n,n+1,n+2", "n,n+3,n+5", "n,n+2,n+4"], variabilization: {}}, {id: "a01e792probsolve2a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["a01e792probsolve2a-h2"], title: "Difference between two consecutive even numbers.", text: "What is 6-4?", variabilization: {}}, {id: "a01e792probsolve2a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["a01e792probsolve2a-h3"], title: "Difference between two consecutive even numbers.", text: "What is 98-96?", variabilization: {}}, {id: "a01e792probsolve2a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["a01e792probsolve2a-h4"], title: "Generalization about the difference between two consecutive even numbers", text: "Based on the examples above, what is the difference between any two consecutive even numbers?", variabilization: {}}, {id: "a01e792probsolve2a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["84"], dependencies: ["a01e792probsolve2a-h5"], title: "Total sum", text: "What should the numbers add up to?", variabilization: {}}, {id: "a01e792probsolve2a-h7", type: "hint", dependencies: ["a01e792probsolve2a-h6"], title: "Solve for n", text: "The next step is to solve for n and find the three consecutive even numbers.", variabilization: {}}, ]; export {hints};