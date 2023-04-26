import React from "react";

import "styles/Banner.css";

export const Banner = ({ desktopImg, mobileImg }) => {
  return (
    <div className="bannerImg">
      <img
        src={desktopImg}
        className="w-100 dextop-s"
        alt="Zeitarbeit Köln Siegen Krefeld Top Jobs"
      />
      <img
        src={mobileImg}
        className="w-100 mobile-s"
        alt="Zeitarbeit Köln Siegen Krefeld Top Jobs"
      />
    </div>
  );
};
