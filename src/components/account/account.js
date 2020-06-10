import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../../actions";

import PurchaseHistory from "./purchaseHistory";
import AccountInformation from "./accountInformation";

class Account extends Component {
  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: "Shop",
        path: "/shop",
      },
      {
        _id: 1,
        title: "Logout",
        path: "/",
      },
    ];
    const navbarLinks = [
      {
        _id: 0,
        title: "Purchase History",
        active: true,
        component: <PurchaseHistory />,
      },
      {
        _id: 1,
        title: "Account Information",
        active: false,
        component: <AccountInformation />,
      },
    ];
    this.props.setHeaderLinks(headerLinks);
    this.props.setNavbarLinks(navbarLinks);
  }

  renderContent() {
    let jsx;
    if (this.props.navbarLinks) {
      this.props.navbarLinks.map((link) => {
        if (link.active) {
          jsx = link.component;
        }
      });
    }
    return jsx;
  }

  render() {
    return <div className="account">{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state) => {
  const { headerLinks, navbarLinks } = state.headerNavbar;
  return { headerLinks, navbarLinks };
};

Account = connect(mapStateToProps, actions)(Account);

export default Account;
