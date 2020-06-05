import React, { Component } from "react";

class Details extends Component {
  render() {
    const { title, links, onClick } = this.props;
    return (
      <div className="details">
        <div className="details__title">{title}</div>
        <div className="details__lins">
          {links.map((link) => {
            return (
              <a key={link._id} onClick={link.onClick} className="details_link">
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Details;
