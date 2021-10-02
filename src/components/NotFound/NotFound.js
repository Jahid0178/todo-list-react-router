import React from "react";
import NotFoundImg from "../../images/404 page not found.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="error-container">
      <img className="not-found" src={NotFoundImg} alt="" />
      <h2 className="error-text text-white rounded">Page not found</h2>
      <h3 className="mt-1">Developer is sleeping</h3>
    </div>
  );
};

export default NotFound;
