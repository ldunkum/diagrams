import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card({ children, title }) {
  return (
    <div className="card">
      <div className="">
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  title: PropTypes.string.isRequired,
};
