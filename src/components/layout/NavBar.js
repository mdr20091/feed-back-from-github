import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        {props.title}
      </h1>
    </div>
  );
};

export default NavBar;
