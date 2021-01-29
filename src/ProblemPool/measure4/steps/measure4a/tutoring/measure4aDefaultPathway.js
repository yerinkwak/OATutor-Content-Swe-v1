var hints = [{id: "measure4a-h1", type: "hint", dependencies: [], title: "Convert", text: "We will convert gallons to ounces by multiplying by several conversion factors."}, {id: "measure4a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["measure4a-h1"], title: "Convert", text: "How many quarts are in a gallon?"}, {id: "measure4a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["measure4a-h2"], title: "Convert", text: "How many pints are in a quart?"}, {id: "measure4a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["measure4a-h3"], title: "Convert", text: "How many cups are in a pint?"}, {id: "measure4a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["measure4a-h4"], title: "Convert", text: "How many ounces are in a cup?"}, {id: "measure4a-h6", type: "hint", dependencies: ["measure4a-h5"], title: "Multiply", text: "Multiply 1 gallon by (4 $$\\frac{quarts}{1}$$ gallon)*(2 $$\\frac{pints}{1}$$ quart)*(2 $$\\frac{cups}{1}$$ pint)*(8 $$\\frac{ounces}{1}$$ cup)"}, {id: "measure4a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["128"], dependencies: ["measure4a-h6"], title: "Multiply", text: "What do we get after the multiplication?"}, ]; export {hints};