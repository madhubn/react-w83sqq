import React from "react";
// Jsut like in HTML, React uses forms to allow users to interact with web pages

// Handling data is about How u handle data when it changse and gets submitted

// In HTML, form data is usually handled by DOM
// In React, Form data is usually handled by Componnets
// When data is handled by components, all the data is stored in componnets state
// you can control changes by adding event handler in the onchange method
class Form extends React.Component {
  render() {
    return (
      <form>
        <h4> Enter Username</h4>
        <input type="text" />
      </form>
    );
  }
}

export default Form;
