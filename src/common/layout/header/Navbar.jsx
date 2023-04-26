import { navbarData } from "mock/navbar";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  return (
    <div id="main-nav">
      <div className="row">
        <div className="large-12 column">
          <div className="contain-to-grid">
            <nav
              className={`top-bar ${active ? "expanded" : ""}`}
              data-options="back_text:zurück;mobile_show_parent_link:false;"
            >
              <ul className="title-area">
                <li className="name"></li>
                <li className="toggle-topbar menu-icon">
                  <a href="#" onClick={() => setActive(!active)}>
                    <span>Menu</span>
                  </a>
                </li>
              </ul>
              <section
                className="top-bar-section"
                style={{ left: subMenu ? "-100%" : "" }}
              >
                <ul id="menu-hauptnavigation" className="">
                  {navbarData.length >= 1 &&
                    navbarData.map((data, i) => {
                      return (
                        <li
                          key={i}
                          id={data?.id}
                          onClick={() => {
                            data?.subMenu?.length >= 1
                              ? setSubMenu(!subMenu)
                              : setSubMenu(false);
                          }}
                          className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${
                            data?.subMenu?.length >= 1 ? "has-dropdown" : " "
                          } menu-item-573 ${subMenu ? "moved" : ""}`}
                        >
                          <Link to={data?.slug ? data?.slug : ""}>
                            {data?.title}
                          </Link>
                          <ul className="sub-menu dropdown">
                            {data?.subMenu?.length >= 1
                              ? data?.subMenu?.map((data) => {
                                  return (
                                    <li
                                      key={data?.id}
                                      id="menu-item-299"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-299"
                                    >
                                      <Link to={data?.slug}>{data?.title}</Link>
                                    </li>
                                  );
                                })
                              : ""}
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
