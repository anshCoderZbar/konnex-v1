import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <section id="location">
        <h3 className="section-title">Standort</h3>
        <div className="box bigger-padd-tb grey">
          <div className="row">
            <div className="medium-4 tablet-portrait-12 column location-wrapper">
              <div className="row medium-uncollapse p-bigger">
                <div className="medium-2 small-12 column tablet-portrait-1 location-icon-wrapper">
                  <a
                    href="http://maps.google.com/?q=Weyerstra%c3%9fe%2027%2050676%20K%c3%b6ln"
                    target="_blank"
                    
                    rel="noreferrer"
                  >
                    <i className="icon-pin-icon">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </a>
                </div>
                <div className="medium-10 tablet-portrait-2-5 column">
                  <p className="yellow-text no-mar-b">
                    <strong>KÖLN</strong>
                  </p>
                  <p className="no-mar-b">KONNEX Zeitarbeit GmbH</p>
                  <p>
                    Weyerstraße 27
                    <br />
                    50676 Köln
                  </p>
                </div>
                <div className="medium-2 column tablet-portrait-1 location-icon-wrapper">
                  <a href="uploads/2015/05/KONNEX-Zeitarbeit-GmbH-K%c3%b6ln.html">
                    <i className="icon-v-card-icon">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </a>
                </div>
                <div className="medium-10 tablet-portrait-2-5 small-12 column">
                  <p>
                    T <strong>0221 35674 81</strong>
                    <br />
                    F <strong>0221 35674 80</strong>
                    <br />
                    <a href="mailto:info@konnex-zeitarbeit.de">
                      info@KONNEX-Zeitarbeit.de
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="colophon" className="site-footer" role="contentinfo">
        <div className="row">
          <div className="large-12 column">
            <p id="copyright">&copy; 2023 KONNEX Zeitarbeit GmbH</p>
            <ul id="menu-footernavigation" className="menu">
              <li
                id="menu-item-1698"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1698"
              >
                <a href="#consent-change">Privatsphäre-Einstellungen ändern</a>
              </li>
              <li
                id="menu-item-491"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491"
              >
                <a href="impressum/index.html">Impressum</a>
              </li>
              <li
                id="menu-item-1593"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1593"
              >
                <a href="datenschutz/index.html">Datenschutz</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
