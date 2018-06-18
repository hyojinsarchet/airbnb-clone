import React from "react";
import "./flat.css";

const style = {
  backgroundImage: `url('${this.props.flat.imageUrl}')`
};

class Flat extends React.Component {
  render() {
    const title =
      this.props.flat.price +
      this.props.flat.priceCurrency +
      " - " +
      this.props.flat.name;

    return (
      <div className="flat">
        <div className="flat-pic" />
        <div className="flat-title" />
        {title}
      </div>
    );
  }
}

export default Flat;
