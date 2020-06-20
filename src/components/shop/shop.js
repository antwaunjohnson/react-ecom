import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../../actions";

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
    // fetch shop products action creator
    // set the header links
    // fetch navbar links
    // set navbar links
    // filter products with links
  }
  render() {
    return (
      <div className="shop">
        {/* {shop search bar component} */}
        {/* {shop product component} */}
        {/* {shop search cart} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;
