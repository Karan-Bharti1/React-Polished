import React from "react";
import ReactDOM from "react-dom/client";
const number=1
const Heading=()=>{
  return(<>
  <h1>Heading with Functional Components ( {number} )</h1>
  </>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);

