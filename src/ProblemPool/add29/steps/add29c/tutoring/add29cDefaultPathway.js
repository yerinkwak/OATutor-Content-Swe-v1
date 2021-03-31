var hints = [{id: "add29c-h1", type: "hint", dependencies: [], title: "Simplify Both Sides", text: "We want to start by simplifying both sides and comparing the simplified value. Since the left hand side is already simplified, all we need to do is to evaluate the right hand side."}, {id: "add29c-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["add29c-h1"], title: "Right Hand Side", text: "What does $$|\\left(-8\\right)|$$ evaluate to?", subHints: [{id: "add29c-h2-s1", type: "hint", dependencies: [], title: "Right Hand Side", text: "The absolute value of a number is its distance from 0 on the number line. Distance is never negative, so the absolute value is never negative."}]}, {id: "add29c-h3", type: "hint", dependencies: ["add29c-h2"], title: "Comparing Numbers", text: "Now we are left to compare -8 and 8. Since -8 is to the left of 8 on the number line, we say $$-\\left(8\\right)<8$$. Therefore, $$-\\left(8\\right)<|\\left(-8\\right)|$$."}, ]; export {hints};