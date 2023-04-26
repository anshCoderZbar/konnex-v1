import React from "react";

export const CurrentJob = () => {
  return (
    <div className="medium-4 tablet-portrait-12 column">
      <h3 className="section-title yellow">Aktuelles</h3>
      <div className="box yellow">
        <span className="date yellow-text">23. April 2020</span>
        <h4 className="blue-text">Aktuelle Informationen zu Corona COVID 19</h4>
        <div className="blue-text no-mar-b">
          Die Ereignisse im Zusammenhang mit Coronavirus COVID 19 überschlagen
          sich fast täglich. Es ist kein Fall von Infektionen bei uns und
          unseren Mitarbeitern aufgetreten....
        </div>
        <a
          href="../aktuelle-informationen-zu-corona-covid-19/index.html"
          className="read-more"
        >
          <span className="icon-Pfeil-rechts"></span>mehr dazu
        </a>
        <div className="text-right">
          <img
            width="800"
            height="450"
            src="../wp-content/uploads/2020/04/konnex-corona-update.png"
            className="full-width thmb wp-post-image"
            alt=""
            decoding="async"
            loading="lazy"
            srcSet="
            https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update.png         800w,
            https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update-300x169.png 300w,
            https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update-768x432.png 768w
          "
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>

        <a href="../aktuelles/index.html" className="more-btn yellow">
          <span className="icon-Pfeil-rechts"></span>weitere Meldungen
        </a>
      </div>
    </div>
  );
};
