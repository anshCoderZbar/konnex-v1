import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { navbarData } from "mock/navbar";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [subMenuIndex, setSubMenuIndex] = useState(-1);
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1025) {
        setMoved(true);
      } else {
        setMoved(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="main-nav">
      <div className="row">
        <div className="large-12 column">
          <div className="contain-to-grid">
            <nav className={`top-bar ${active ? "expanded" : ""}`}>
              <ul className="title-area">
                <li className="name"></li>
                <li className="toggle-topbar menu-icon">
                  <a href="#menu" onClick={() => setActive(!active)}>
                    <span>Menu</span>
                  </a>
                </li>
              </ul>
              <section
                className="top-bar-section"
                style={{ left: subMenuIndex >= 0 ? "-100%" : "" }}
              >
                <ul id="menu-hauptnavigation" className="">
                  {navbarData.length >= 1 &&
                    navbarData.map((data, i) => {
                      const isSubMenuActive = subMenuIndex === i;
                      return (
                        <li
                          key={i}
                          id={data?.id}
                          onClick={() => {
                            if (data?.subMenu?.length >= 1) {
                              setSubMenuIndex(isSubMenuActive ? -1 : i);
                            } else {
                              setSubMenuIndex(-1);
                            }
                          }}
                          className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${data?.subMenu?.length >= 1 ? " has-dropdown" : ""
                            } menu-item-573 ${moved && isSubMenuActive ? "moved" : ""
                            }`}
                        >
                          <Link to={data?.slug ? data?.slug : ""}>
                            {data?.title}
                          </Link>
                          <ul className="sub-menu dropdown">
                            {data?.subMenu?.length >= 1 &&
                              data?.subMenu?.map((subMenuItem) => {
                                return (
                                  <li
                                    key={subMenuItem?.id}
                                    id="menu-item-299"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-299"
                                  >
                                    <Link to={subMenuItem?.slug}>
                                      {subMenuItem?.title}
                                    </Link>
                                  </li>
                                );
                              })}
                          </ul>
                        </li>
                      );
                    })}
                </ul>
              </section>
              <div id="main-nav-contact-info">
                <p className="title">Ihr persönlicher Kontakt!</p>
                <p className="ph-number">0221 3567481</p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
