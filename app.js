const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"Hello World")))
const root=ReactDOM.createRoot(document.getElementById("root"))
 root.render(parent)
//  <div id="parent">
//     <div id="child">
//         <h1 id="heading">Hello World</h1> We get such a structure returned using these nested elements
//     </div>
//  </div>