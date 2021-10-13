import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <p>© {new Date().getFullYear()} Airbnb clone. Privacy · Terms · Sitemap · Company Details</p>
        <div class="social">
          <a href="https://www.facebook.com/samuel.oluwatimileyin.140/">
            <FacebookIcon className="social-icon" />
          </a>
          <a href="https://www.instagram.com/sammy_devv/">
            <InstagramIcon className="social-icon" />
          </a>
          <a href="">
            <TwitterIcon className="social-icon" />
          </a>
          <a href="">
            <LinkedInIcon className="social-icon" />
          </a>
        </div>
      </div>
      <p>Created by Babadiya Samuel</p>
    </div>
  );
}

export default Footer;
