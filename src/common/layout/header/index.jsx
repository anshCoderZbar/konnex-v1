import { Logo } from "common/components/icons";
import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header id="masthead" className="site-header" role="banner">
        <div id="masthead-top" className="row">
          <div className="large-12 columns">
            <div className="padd-lr">
              <div id="logo">
                <Link to="/home">
                  <Logo />
                </Link>
              </div>
              <div id="masthead-info">
                <p className="title">Ihr persönlicher Kontakt!</p>
                <p>0221 3567481</p>
                <p>
                  <Link to="/home">Jetzt bewerben!</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </React.Fragment>
  );
};

export default Header;
