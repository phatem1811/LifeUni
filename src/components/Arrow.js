import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-40px", zIndex: 1 }}
      onClick={onClick}
    >
      <FaChevronLeft color="#00acc1" size={40} />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-40px", zIndex: 1 }}
      onClick={onClick}
    >
      <FaChevronRight color="#00acc1" size={40} />
    </div>
  );
};

export { PrevArrow, NextArrow };
