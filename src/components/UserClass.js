import React from "react";
import { DUMMY_AVATAR } from "../utils/url";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        public_repos:0,
        html_url:null,
        avatar_url:null
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Karan-Bharti1");
    const json = await data.json();
    console.log("API Response:", json);

    this.setState({
      userInfo: json
    });
  }
componentDidUpdate(){
    console.log("Component Did Updation")
}
  render() {
    const { name, location, avatar_url,public_repos,html_url } = this.state.userInfo;

    console.log("Child Render");

    return (
      <div className="developer-card">
        <div>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Public Repos: {public_repos}</p>
        <p>🔗<a href={html_url} target="_blank" rel="noreferrer">GitHub Profile</a></p>
        </div>
        <img src={avatar_url || DUMMY_AVATAR} alt="Avatar" width={150} />
      </div>
    );
  }
}

export default UserClass;
