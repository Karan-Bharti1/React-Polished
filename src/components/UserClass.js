import React from "react";
import { DUMMY_AVATAR } from "../utils/url";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Somewhere",
        public_repos: 0,
        html_url: "https://github.com/",
        avatar_url: DUMMY_AVATAR,
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Karan-Bharti1");
    const json = await data.json();
    console.log("API Response:", json);

    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, avatar_url, public_repos, html_url } = this.state.userInfo;

    return (
      <div className="w-full bg-white shadow-md border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 transition duration-300 hover:shadow-lg">
        {/* Avatar */}
        <img
          src={avatar_url || DUMMY_AVATAR}
          alt="Avatar"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
        />

        {/* Info */}
        <div className="text-center sm:text-left space-y-2">
          <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">📍 {location || "Unknown"}</p>
          <p className="text-gray-600">📦 Public Repos: {public_repos}</p>
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 text-blue-600 hover:underline font-medium"
          >
            🔗 View GitHub Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserClass;
