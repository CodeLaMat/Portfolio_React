import React from "react";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="errorPage_container">
      <div className="errorPage">
        <h1>404: Page Not Found</h1>
        <p>Sorry, the page you tried cannot be found.</p>
      </div>
    </div>
  );
};

export default NotFound;
