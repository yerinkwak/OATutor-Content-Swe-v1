var hints = [{id: "Formula3a-h1", type: "hint", dependencies: [], title: "Identify the Unknown", text: "We are looking for the total distance traveled and we can name it \"d\""}, {id: "Formula3a-h2", type: "hint", dependencies: ["Formula3a-h1"], title: "Translate", text: "We can use the formula $$distance=rate time$$ -->d=rt"}, {id: "Formula3a-h3", type: "hint", dependencies: ["Formula3a-h2"], title: "Substitute", text: "Since we are given that the rate is 3 mph and the time is $$\\frac{7}{3}$$ hours, we can $$substituter=3$$ $$t=\\frac{7}{3}$$ and get d=(3)*(7/3)."}, {id: "Formula3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["Formula3a-h3"], title: "Solve", text: "Solve $$\\frac{\\left(3\\right) \\left(7\\right)}{3}$$ to find the distance in miles. What is the distance?"}, ]; export {hints};