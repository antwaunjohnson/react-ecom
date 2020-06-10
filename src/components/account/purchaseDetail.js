import React, { Component } from "react";

class PurchaseDetail extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} purchase-detail`}>
        <div>Purchase Detail go here...</div>
        <div>Purchase Detail go here...</div>
      </div>
    );
  }
}
export default PurchaseDetail;
