import { currentData } from "mock/current-data";
import React from "react";

export const CurrentCard = () => {
  return (
    <div className="facetwp-template" data-name="aktuelles">
      {currentData.length >= 1 &&
        currentData?.map((data,i) => {
          return (
            <article key={i} className="news-box">
              <div className="row">
                <div className="medium-4 column">
                  <a href="../aktuelle-informationen-zu-corona-covid-19/index.html">
                    <img
                      width="640"
                      height="360"
                      src="../wp-content/uploads/2020/04/konnex-corona-update.png"
                      className="full-width wp-post-image"
                      alt="blogImg"
                      decoding="async"
                      loading="lazy"
                      srcSet="
      https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update.png         800w,
      https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update-300x169.png 300w,
      https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update-768x432.png 768w
    "
                      sizes="(max-width: 640px) 100vw, 640px"
                    />
                  </a>
                </div>
                <div className="medium-8 column">
                  <p className="news-date">{data?.date ? data?.date : ""}</p>
                  <h3>
                    <a href="../aktuelle-informationen-zu-corona-covid-19/index.html">
                      {data?.title ? data?.title : ""}
                    </a>
                  </h3>
                  <p className="subheadline">
                    {data?.subHeading ? data?.subHeading : ""}
                  </p>
                  <div className="text-content">
                    <p>
                      {data?.description
                        ? data?.description.length <= 280
                          ? data?.description
                          : data?.description.slice(0, 280) + "..."
                        : ""}
                    </p>
                    <a
                      className="ghost-btn medium"
                      href="../aktuelle-informationen-zu-corona-covid-19/index.html"
                    >
                      <i className="icon-Pfeil-rechts"></i>weiter lesen
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
    </div>
  );
};
