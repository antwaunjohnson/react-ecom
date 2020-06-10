import React, { Component } from "react";

class Purchases extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} purchases`}>
        <div>purchases go here...</div>
        <div>purchases go here...</div>
      </div>
    );
  }
}
export default Purchases;
