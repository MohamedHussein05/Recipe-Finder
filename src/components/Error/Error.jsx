import React from "react";
import "./Error.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Error = () => (
  <div className="errBox">
    <FontAwesomeIcon className="errorIcon" icon={faTriangleExclamation} />
    <h1 className="errHeader">Ooops,</h1>
    <p className="errText">
      <span>Something went wrong!</span>
      <span>{"Let's try again"}</span>
    </p>
    <button
      type="button"
      onClick={() => window.location.assign("/")}
      className="errBtn"
    >
      TRY AGAIN!
    </button>
  </div>
);

export default Error;
