import React, { Component } from "react";

import { UnderlinedTitle, InfoTitle } from "./infoHelp";

class OrderSummary extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} `}>
        <UnderlinedTitle class="order-summary__title" />
        <InfoTitle
          className="order_summary__subtotal"
          title="4 stickers"
          value="$7.96"
        />
        <InfoTitle
          className="order_summary__taxes-shipping"
          title="Taxes & Shipping"
          value="$0.00"
        />
        <InfoTitle
          className="order_summary__total"
          title="Total"
          value="$8.02"
        />
      </div>
    );
  }
}
export default OrderSummary;
