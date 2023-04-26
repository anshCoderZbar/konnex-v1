import React from "react";

export const MainSearch = () => {
  return (
    <div id="search-jobs">
      <div className="large-9 medium-7 columns">
        <input type="text" placeholder="Job oder Beruf eingeben ..." />
      </div>
      <div className="large-3 medium-5 columns">
        <button className="submit">
          Job suchen<i className="icon-Pfeil-rechts"></i>
        </button>
      </div>
    </div>
  );
};
