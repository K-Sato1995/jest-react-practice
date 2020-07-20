import React from "react";

class HeadLine extends React.Component {
  render() {
    const { header, description } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div className="headlineComponent">
        <h1 className="header">{header}</h1>
        <p className="description">{description}</p>
      </div>
    );
  }
}

export default HeadLine;
