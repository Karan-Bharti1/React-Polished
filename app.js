const parent=React.createElement("div",{id:"parent"},[React.createElement("h1",{id:"child1"},"Hello Child 1"),React.createElement("h2",{id:"child2"},"Hello Child 2")])
const root=ReactDOM.createRoot(document.getElementById("root"))
 root.render(parent)
// Passing Mutiple children in one element in form of an array