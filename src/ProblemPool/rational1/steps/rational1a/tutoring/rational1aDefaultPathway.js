var hints = [{id: "rational1a-h1", type: "hint", dependencies: [], title: "Factor the expression", text: "Factoring is the process to split a product into a group of factors (a multiplication of simpler expressions)."}, {id: "rational1a-h2", type: "hint", dependencies: ["rational1a-h1"], title: "Factor the expression", text: "Not all terms can be factored. Factor the terms that can be split further."}, {id: "rational1a-h3", type: "hint", dependencies: ["rational1a-h2"], title: "Factor the expression", text: "In this case, we can factor $$x^2+\\left(4\\right) x-\\left(5\\right)$$ and (3x+18)."}, {id: "rational1a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x+5)(x-1)"], dependencies: ["rational1a-h3"], title: "Factor the expression", text: "What does $$x^2+\\left(4\\right) x-\\left(5\\right)$$ factor into?"}, {id: "rational1a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3(x+6)"], dependencies: ["rational1a-h4"], title: "Factor the expression", text: "What does $$\\left(3\\right) x+\\left(18\\right)$$ factor into?"}, {id: "rational1a-h6", type: "hint", dependencies: ["rational1a-h5"], title: "Cancel terms", text: "Now that you have factored all possible terms, if you see the same term in the numerator and the denominator of the product, you can cancel it out."}, {id: "rational1a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x+5"], dependencies: ["rational1a-h6"], title: "Cancel terms", text: "What term can we cancel out?"}, {id: "rational1a-h8", type: "hint", dependencies: ["rational1a-h7"], title: "Final Answer", text: "After canceling out terms, your final answer will remain in product form. What is the answer?"}, ]; export {hints};