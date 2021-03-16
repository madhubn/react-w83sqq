import React from "react";

/* 
1. We can control the values of multiple input controls bt adding name   attribute to each element.
2. when you initialize the state in the contructor, use the filed names
3. To access the field in the event handler use the event. target.name and event.target.value synatx.
4. To update state in the setState method use brackets [] arround the property name
*/

class MultiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      mycar: "Volvo",
      description: "The content of a textarea goes in the value attribute",
      errormessage: ""
    };
  }
  onSubmitForm = event => {
    event.preventDefault();
    let age = this.state.age;
    // if (!Number(age)) {
    //   alert("Your age must be a number");
    // }
  };
  onChanges = event => {
    let name = event.target.name;
    let val = event.target.value;
    let err = "";
    if (name === "age") {
      if (val != "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [name]: val });

    console.log("this.val", this.state);
  };
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <form onSubmit={this.onSubmitForm}>
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
        <p style={{ color: "red" }}>Enter your name:</p>
        <input type="text" onChange={this.onChanges} name="username" />
        <p>Enter your age:</p>
        <input type="text" onChange={this.onChanges} name="age" />
        {this.state.errormessage}
        <p>Enter your age:</p>
        <input type="text" onChange={this.onChanges} name="age" />
        {this.state.errormessage}
        <p>Enter your description:</p>
        <textarea style={mystyle} value={this.state.description} />
        <p>
          <select value={this.state.mycar}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
        </p>
        <p>
          <button type="submit" style={{ backgroundColor: "lightblue" }}>
            Submit
          </button>
        </p>
      </form>
    );
  }
}

export default MultiForm;
