import React, { Component } from "react";
import Shop from "./shop";
import Quantity from "../quantity";
import GreenPriceTag from "../greenPriceTag";

class ShopProduct extends Component {
  render() {
    const { _id, title, description, amount } = this.props;
    return (
      <div className="shop-product">
        <div className="shop-product__title">{title}</div>
        <div className="shop-product__description">{description}</div>
        <GreenPriceTag className="shop-product__price" title={amount} />
        <Quantity className="shop-product__quantity" quantity={1} />
        <div className="shop-product__add-to-cart">Add to Cart</div>
      </div>
    );
  }
}
export default ShopProduct;
