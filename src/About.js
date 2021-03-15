import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: "Ford", model: "Mustang", color: "red", year: 1964 };
  }
  changeColor = () => {
    this.setState({ color: "RED" });
  };
  getDerivedStateFromProps(props, state) {
    return { color: props.color };
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "green" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevProps.color;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.color;
  }
  render() {
    const names = "Madhu";
    const element = (
      <div>
        <h2>I am a {this.state.color}!</h2>
        <h2>I am a {this.props.color}!</h2>
        <div id="div1" />
        <div id="div2" />
        <Garbage name={names} />
        <button type="button" onClick={this.changeColor}>
          {" "}
          Click Me
        </button>
      </div>
    );
    return element;
  }
}

export default About;

class Garbage extends React.Component {
  render() {
    return <h2>My name is {this.props.name}</h2>;
  }
}
