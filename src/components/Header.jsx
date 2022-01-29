import React from "react";
import PropTypes from 'prop-types';


function Header({title,color}){
    return(
    <nav className="container navbar navbar-expand-lg navbar-light bg-info shadow-sm my-3">
  <div className="container">
    <h2><a className="navbar-brand" href="#">
        {title}
        </a></h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

Header.prototypes ={
    title : PropTypes.string.isRequired 
}

Header.defaultProps={
    title : "Your Company"
}
export default Header;