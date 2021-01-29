var hints = [{id: "abs4a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute 0 for f(x)."}, {id: "abs4a-h2", type: "hint", dependencies: ["abs4a-h1"], title: "Isolate", text: "Isolate the $$absolute$$ value on one side of the equation."}, {id: "abs4a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["3=abs(x+2)"], dependencies: ["abs4a-h2"], title: "Isolate", text: "What do we get after the isolation?", choices: ["$$-\\\\left(3\\\\right)=|x+\\\\left(2\\\\right)|$$", "$$3=|x+\\\\left(2\\\\right)|$$", "$$5=|x+\\\\left(2\\\\right)|$$"]}, {id: "abs4a-h4", type: "hint", dependencies: ["abs4a-h3"], title: "Separate", text: "Break the above equation into two separate equations and solve."}, {id: "abs4a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["abs4a-h4"], title: "Separate", text: "What do we get for x after solving 3=x+2?"}, {id: "abs4a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5"], dependencies: ["abs4a-h5"], title: "Separate", text: "What do we get for x after solving -3=x+2?"}, ]; export {hints};