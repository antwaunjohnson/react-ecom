import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../../actions";
import ShopSearchBar from "./shopSearchbar";
import ShopProduct from "./shopProduct";

class Shop extends Component {
  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: "Login",
        path: "/signin",
      },
      // {
      //   _id: 1,
      //   title: "Logout",
      //   path: "/",
      // },
    ];
    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();
    this.props.fetchShopProducts();
    // filter products with links
  }

  shouldComponentUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories, (_id) =>
        this.props.filterProductsWithCategoryId(_id)
      );
    }
    return true;
  }

  onSubmit = (fields) => {
    this.props.filterProductsWithQuery(fields);
  };
  render() {
    return (
      <div className="shop">
        <ShopSearchBar onSubmit={this.onSubmit} className="shop__search-bar" />
        <div className="shop__products">
          {this.props.filteredProducts.map((product) => {
            return <ShopProduct {...product} key={product._id} />;
          })}
        </div>
        {/* {shop search cart} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { categories, filteredProducts } = state.shop;
  return { categories, filteredProducts };
};

Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;
