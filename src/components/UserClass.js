import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor")
    this.state = {
      // note this.state will container all the state variables
      count: 0,
    };
  }
  componentDidMount(){
    console.log("Component Did Mount")
  }
  render() {
    const { name, email } = this.props;
    const { count } = this.state;
     console.log("Child render")
    return (
      <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}
export default UserClass;
