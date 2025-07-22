import React from "react";
import UserClass from "../components/UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="container">
        <h2>🔥 FLAMES – Food Ordering App</h2>
        <p>
          FLAMES is a Swiggy-inspired food ordering UI built with React and Redux.
          It features real-time restaurant data, dynamic routing, state management,
          and a smooth, responsive design.
          <br />
          <br />
          Built for performance. Designed for users. 🍽️
        </p>

        <h2>About The Developer</h2>
        <UserClass name="Karan" email="karanbharti.0129@gmail.com" />
      </main>
    );
  }
}

export default About;
