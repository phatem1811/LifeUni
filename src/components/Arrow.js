import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-40px", zIndex: 10 }}
      onClick={onClick}
    >
      <FaChevronLeft
        color="#00acc1"
        style={{
          width: "40px",
          height: "40px",
          fontSize: "14px",
          padding: "15px",
          boxShadow: "rgb(204, 204, 204) 0px 0px 3px",
          borderRadius: "50%",
          position: "relative",
          top: "-40px",
          right: "6px",
          background : "#fff",
          zIndex: 10,
        }}
        size={40}
      />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-40px", zIndex: 10 }}
      onClick={onClick}
    >
      <FaChevronRight
        color="#00acc1"
        style={{
          width: "40px",
          height: "40px",
          fontSize: "14px",
          padding: "15px",
          boxShadow: "rgb(204, 204, 204) 0px 0px 3px",
          borderRadius: "50%",
          position: "relative",
          top: "-40px",
          right: "60px",
          background : "#fff",
          zIndex: 10,
        }}
        size={40}
      />
    </div>
  );
};

export { PrevArrow, NextArrow };
