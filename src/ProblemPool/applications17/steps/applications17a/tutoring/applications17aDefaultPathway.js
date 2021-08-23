var hints = [{id: "applications17a-h1", type: "hint", dependencies: [], title: "Identify the Numbers", text: "The problem specifies there are \"two numbers.\"", variabilization: {}}, {id: "applications17a-h2", type: "hint", dependencies: ["applications17a-h1"], title: "Create Variables", text: "Name the two unknown numbers x and y to represent those quantities. Let $$x=one$$ number and $$y=second$$ number.", variabilization: {}}, {id: "applications17a-h3", type: "hint", dependencies: ["applications17a-h2"], title: "Translate Into System", text: "Since the sum of the two number is negative twenty-three we can write $$x+y=-23$$. Additionally one number is seven less than the other so we can write $$x=y-7$$.", variabilization: {}}, {id: "applications17a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x+y=-23, x=y-7$$"], dependencies: ["applications17a-h3"], title: "Translate Into System", text: "What is the systems of equation represented in the problem?", choices: ["$$x+y=-23, x=y-7Ix-y=23, x=y-\\left(4\\right) Ix+y=-23, x=y+\\left(7\\right) Ix+y=23, x=y+\\left(7\\right)$$"], variabilization: {}}, ]; export {hints};