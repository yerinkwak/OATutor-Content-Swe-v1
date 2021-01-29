var hints = [{id: "transformation10a-h1", type: "hint", dependencies: [], title: "Order of Transformations", text: "The first step is to recognize the order of transformations. First, $$\\sqrt{x}$$ is reflected over the x axis, and then it is horizontally stretched by a factor of 2."}, {id: "transformation10a-h2", type: "hint", dependencies: ["transformation10a-h1"], title: "Reflecting over the y axis", text: "The second step is to reflect the function over the x axis. Multiply the entire function by -1 to get -f(x), which is f(x) reflected over the x axis."}, {id: "transformation10a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["-sqrt(x)"], dependencies: ["transformation10a-h2"], title: "Reflecting over the y axis", text: "What is -f(x)?", choices: ["$$\\\\sqrt{x}$$", "$$\\\\sqrt{-x}$$", "$$-\\\\sqrt{-x}$$", "$$-\\\\sqrt{x}$$"]}, {id: "transformation10a-h4", type: "hint", dependencies: ["transformation10a-h3"], title: "How to Horizontally Compress a Function", text: "The last step is to stretch the graph horizontally by a scale factor of 2. The coefficient needed for a horizontal stretch or compression is the reciprocal of the stretch or compression. So to compress the graph horizontally by a scale factor of 2, we need a coefficient of $$\\frac{1}{2}$$ in our function. Therefore, replace every x in the function with 1/2x."}, {id: "transformation10a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["-sqrt((1/2)*x)"], dependencies: ["transformation10a-h4"], title: "Horizontal Compression", text: "What is the function after it has been horizontally compressed by a factor of 1/4?", choices: ["$$\\\\sqrt{\\\\frac{1}{2} x}$$", "$$-\\\\sqrt{\\\\frac{1}{2} x}$$", "$$-\\\\sqrt{\\\\left(2\\\\right) x}$$", "$$\\\\sqrt{\\\\left(2\\\\right) x}$$"]}, ]; export {hints};