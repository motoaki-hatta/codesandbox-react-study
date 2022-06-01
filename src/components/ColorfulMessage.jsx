import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入させておくと視認性がアップする
  const { color, children } = props;

  const contentLadyStyle = {
    color,
    // color: color, // 同じ名前なら省略できる
    fontSize: "18px"
  };

  return <p style={contentLadyStyle}>{children}</p>;
};

export default ColorfulMessage;
