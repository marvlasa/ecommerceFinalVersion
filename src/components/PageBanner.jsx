import React from "react";
import { Link } from "react-router-dom";

function PageBanner({ title, crumb }) {
  return (
    <div className="page-banner">
      <div className="container">
        <div className="page-banner-content">
          <h1>{title}</h1>
          <nav className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{crumb}</span>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
