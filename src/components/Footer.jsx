import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <FaTwitter />{" "}
        </li>
        <li>
          <FaFacebook />{" "}
        </li>
        <li>
          <FaInstagram />{" "}
        </li>
        <li>
          <FaGithub />{" "}
        </li>
      </ul>
    </div>
  );
}

export default Footer;
