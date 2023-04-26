import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "common/components/Banner";
import { MainSearch } from "common/components/Main-search";

import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-bewerber.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-bewerber_mobile.jpg";
import { CurrentCard } from "app/current/CurrentCard";

export const CurrentPage = () => {
  return (
    <>
      <Banner desktopImg={desktop} mobileImg={mobile} />
      <MainSearch />
      <div id="main-breadcrumb" className="breadcrumbs">
        <span>
          <Link to="/home" className="home">
            KONNEX Zeitarbeit GmbH – Cologne
          </Link>
        </span>
        <span>
          <span>Aktuelles</span>
        </span>
      </div>
      <h1 className="section-title">
        Aktuelle Informationen zu Corona COVID 19
      </h1>
      <div className="box no-padd">
        <CurrentCard />
      </div>
    </>
  );
};
