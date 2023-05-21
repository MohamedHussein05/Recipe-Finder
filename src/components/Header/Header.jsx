import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/avatar.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header container">
      <h1 onClick={() => window.location.assign("/")} className="logo">
        tastebite
      </h1>
      <div className="navbar">
        <div className="navItem">
          <span>homepage</span>
          <FontAwesomeIcon className="chevronIcon" icon={faChevronDown} />
        </div>
        <div className="navItem">
          <span>recipe page</span>
          <FontAwesomeIcon className="chevronIcon" icon={faChevronDown} />
        </div>
        <div className="navItem">
          <span>pages</span>
          <FontAwesomeIcon className="chevronIcon" icon={faChevronDown} />
        </div>
        <div className="navItem">
          <span>buy</span>
        </div>
      </div>
      <div className="actions">
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
        <img className="avatar" src={avatar} />
      </div>
    </div>
  );
};

export default Header;
