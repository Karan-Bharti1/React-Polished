import React from "react";
import Header from "../components/Header";
import UserClass from "../components/UserClass";

class About extends React.Component{
  constructor(props){
    super(props)
    console.log("Parent Constructor")
  }
  componentDidMount(){
    console.log("Parent Component Did Mount")
  }
  render() {
    console.log("Parent Render")
  return (<main className="container">
      <h2>This is about page</h2>
      <UserClass name="Karan" email="karanbharti.0129@gmail.com" />
    </main>)}
}


export default About;
