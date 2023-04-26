import React from "react";
import { Link } from "react-router-dom";

export const JobCard = ({ jobs }) => {
  return (
    <li>
      <div className="row">
        <div className="large-9 medium-8 column">
          <Link
            className="title"
            to={`/jobs/${jobs?.title
              ?.toLowerCase()
              ?.replaceAll("/", "-")
              .replaceAll(" ", "_")}`}
          >
            {jobs?.title}
          </Link>
          <p className="descp">
            {jobs?.description.length <= 325
              ? jobs?.description
              : jobs?.description.slice(0, 325) + "..."}
          </p>
        </div>
        <div className="large-3 medium-4 column">
          <p className="location">
            <strong>{jobs?.location}</strong>
          </p>
          <p className="date">{jobs?.date}</p>
          <div className="link-wrapper">
            <Link
              className="ghost-btn blue medium"
              to={`/jobs/${jobs?.title
                ?.toLowerCase()
                ?.replaceAll("/", "-")
                .replaceAll(" ", "_")}`}
            >
              <i className="icon-Pfeil-rechts"></i>Details
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};
