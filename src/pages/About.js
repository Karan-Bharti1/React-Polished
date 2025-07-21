import React from "react";
import Header from "../components/Header";
import UserClass from "../components/UserClass";

function About() {
  return (
    <main className="container">
      <h2>This is about page</h2>
      <UserClass name="Karan" email="karanbharti.0129@gmail.com" />
    </main>
  );
}

export default About;
