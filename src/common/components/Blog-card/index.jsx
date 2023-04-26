import React from "react";

export const BlogCard = (props) => {
  return (
    <div className="mar-t20 row hide-for-small-only">
      {props?.blog?.length >= 1 &&
        props?.blog?.map((data) => {
          return (
            <div key={data?.id} className="medium-4 tablet-portrait-12 column">
              <h3 className="section-title">{data?.heading}</h3>
              <div className="box no-padd grey p-smaller">
                <img
                  width="380"
                  height="167"
                  src="uploads/2015/04/konnex-zeitarbeit-koeln-krefeld-unternehmen_380.jpg"
                  className="full-width wp-post-image"
                  alt="Zeitarbeit Köln"
                  decoding="async"
                  loading="lazy"
                  srcSet="
                      https://konnex-zeitarbeit.de/wp-content/uploads/2015/04/konnex-zeitarbeit-koeln-krefeld-unternehmen_380.jpg         380w,
                      https://konnex-zeitarbeit.de/wp-content/uploads/2015/04/konnex-zeitarbeit-koeln-krefeld-unternehmen_380-300x132.jpg 300w
                    "
                  sizes="(max-width: 380px) 100vw, 380px"
                />
                <div className="inner-padd">
                  <p>
                    {data?.description.length <= 290
                      ? data?.description
                      : data?.description.slice(0, 290) + "..."}
                  </p>
                  <a href="on-site-management/index.html" className="more-btn">
                    <span className="icon-Pfeil-rechts"></span>mehr
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
