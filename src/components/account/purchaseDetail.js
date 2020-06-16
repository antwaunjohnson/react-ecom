import React, { Component } from "react";

import { connect } from "react-redux";

function PurchaseDetailLabel({ className, title, value }) {
  return (
    <div className={`${className} purchase-detail-label`}>
      <div className="purchase-detail-label__title">{title}</div>
      <div className="purchase-detail-label__value">{value}</div>
    </div>
  );
}
class PurchaseDetail extends Component {
  render() {
    const {
      className,
      orderDate,
      orderNumber,
      user,
      total,
      creditCard,
    } = this.props;
    const { name, shippingAddress } = user;
    return (
      <div className={`${className} purchase-detail`}>
        <PurchaseDetailLabel
          className="purchase-detaile__order-number"
          title="Order Number"
          value={orderNumber}
        />
        <PurchaseDetailLabel
          className="purchase-detaile__order-date"
          title="Order Date"
          value={orderDate}
        />
        <PurchaseDetailLabel
          className="purchase-detaile__order-shipping"
          title="Shipping Address"
          value={`${name}\n${shippingAddress}`}
        />
        <PurchaseDetailLabel
          className="purchase-detaile__order-total"
          title="Total"
          value={total}
        />
        <PurchaseDetailLabel
          className="purchase-detaile__order-credit-card"
          title="Credit Card"
          value={creditCard}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { purchaseDetail } = state.user;
  return {
    ...purchaseDetail,
  };
};

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail;
