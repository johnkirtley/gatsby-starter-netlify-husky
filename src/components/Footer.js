import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/transparent-logo.webp";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter" style={{backgroundColor: '#6d89ad'}}>
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-text-white-ter" style={{backgroundColor: '#6d89ad'}}>
          <div className="container has-text-white-ter" style={{backgroundColor: '#6d89ad'}}>
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Posts
                      </Link>
                    </li>

                  </ul>
                </section>
              </div>

            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
