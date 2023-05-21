import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faInstagramSquare,
  faSquareInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBody container">
        <div className="footerText">
          <h1 className="logo">tastebite</h1>
          <span className="footerParagraph">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment
          </span>
        </div>
        <div className="footerLinks">
          <ul className="footerMoreInfo">
            <li>tastebite</li>
            <li>about us</li>
            <li>careers</li>
            <li>contact us</li>
            <li>feedback</li>
          </ul>
          <ul className="footerLegal">
            <li>legal</li>
            <li>terms</li>
            <li>conditions</li>
            <li>cookies</li>
            <li>copyright</li>
          </ul>
          <ul className="footerFollow">
            <li>follow</li>
            <li>facebook</li>
            <li>twitter</li>
            <li>instagram</li>
            <li>youtube</li>
          </ul>
        </div>
      </div>
      <div className="footerSocial container">
        <span className="footerCopyRights">
          @ 2020 Tastebite - All rights reserved
        </span>
        <div className="footerSocialIcons">
          <FontAwesomeIcon className="footerFBIcon" icon={faFacebookF} />
          <FontAwesomeIcon className="footerTwitterIcon" icon={faTwitter} />
          <FontAwesomeIcon className="footerInstaIcon" icon={faInstagram} />
          <FontAwesomeIcon className="footerYtIcon" icon={faYoutube} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
