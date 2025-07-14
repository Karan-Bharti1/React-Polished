import React from "react"
import ReactDOM from "react-dom/client"
const parent=React.createElement("div",{id:"parent"},React.createElement("h1",{id:"child1"},"Hello Child"))
const root=ReactDOM.createRoot(document.getElementById("root"))
 root.render(parent)
// Passing Mutiple children in one element in form of an array