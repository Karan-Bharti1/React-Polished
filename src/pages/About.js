import React from "react";
import Header from "../components/Header";
import UserClass from "../components/UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <main className="container">
        <h2>This is about page</h2>
        <UserClass name="Karan" email="karanbharti.0129@gmail.com" />
        <UserClass name="Ram" email="Ram.0129@gmail.com" />
      </main>
    );
  }
}

export default About;
//Mounting Phase
// Parent Constructor
// Parent Render
//    Karan Constructor Note : Render phase that includes constructor and render will be batched tagether (for two children
//    Karan Render)
//    Ram Constructor
//    Ram Render
//    Karan Component Did Render Note : commit phase  that includes Dom Updation and component Did render will be batched tagether, dom manipulation is expensive so commit phhases are batched together
//    Ram Component Did Render
// Parent Component Did Render
