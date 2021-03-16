import React from "react";
// Jsut like in HTML, React uses forms to allow users to interact with web pages

// Handling data is about How u handle data when it changse and gets submitted

// In HTML, form data is usually handled by DOM
// In React, Form data is usually handled by Componnets
// When data is handled by components, all the data is stored in componnets state
// you can control changes by adding event handler in the onchange method
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    // You must initailize the state in the constructor before you use it
  }
  onChangeUsername = event => {
    // you get access to the field value by using event.target.value
    this.setState({ username: event.target.value });
  };

  mySubmitHandler = event => {
    event.preventDefault();
    // we use   `event.preventDefault` to prevent form from actually being submitted
    alert("You are submitting " + this.state.username + " " + event.type);
  };

  render() {
    let header = "";
    if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = "";
    }
    return (
      <form onSubmit={this.mySubmitHandler}>
        {header}
        <h4> Enter Username</h4>
        <input type="text" onChange={this.onChangeUsername} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
