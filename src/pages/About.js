import React from "react";
import UserClass from "../components/UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* App Info */}
        <section className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            🔥 FLAMES – Food Ordering App
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            FLAMES is a Swiggy-inspired food ordering UI built with React and Redux.
            It features real-time restaurant data, dynamic routing, state management,
            and a smooth, responsive design.
            <br className="hidden sm:block" />
            <br />
            Built for performance. Designed for users. 🍽️
          </p>
          
          <UserContext.Consumer>
            {
              data=>{
                return(<>
                <input placeholder="Update UserName" value={data.About} onChange={event=>data.setUser(event.target.value)} className="border border-black p-2" />
                </>)
              }
            }
          
          </UserContext.Consumer>
          <UserContext.Consumer>
            {data=>{return (<h1 className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            User: {data?.loggedInUser}
            </h1>)}}
          </UserContext.Consumer>
        </section>

        {/* Developer Info */}
        <section>
  
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            👨‍💻 About The Developer
          </h2>
          <UserClass name="Karan" email="karanbharti.0129@gmail.com" />
        </section>
      </main>
    );
  }
}

export default About;
