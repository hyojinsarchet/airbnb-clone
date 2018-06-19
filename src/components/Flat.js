import React from "react";
import "./flat.css";

class Flat extends React.Component {
  render() {
    const title =
      this.props.flat.price +
      this.props.flat.priceCurrency +
      " - " +
      this.props.flat.name;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className="flat">
        <div className="flat-pic" style={style} />
        <div className="flat-title">{title}</div>
        <div className="flat" />
        <div className="flat" />
        <div className="flat" />
        <div className="flat" />
      </div>
    );
  }
}

export default Flat;
