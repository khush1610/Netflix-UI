import React from "react";
import PropTypes from "prop-types";

function NotAvailable({ message }) {
  return (
    <div className="not-available">
      <h1>{message}</h1>
    </div>
  );
}

NotAvailable.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotAvailable; 
