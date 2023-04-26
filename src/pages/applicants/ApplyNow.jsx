import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "common/components/Banner";
import { MainSearch } from "common/components/Main-search";
import { ApplyForm } from "app/applicants/ApplyForm";
import { ContactCard } from "common/components/Contact-card";
import { BlogCard } from "common/components/Blog-card";
import { TestimonialCard } from "common/components/Testimonial-card";

import { blogs } from "mock/blog";
import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-bewerber.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-bewerber_mobile.jpg";

export const ApplyNow = () => {
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
          <span>Jetzt bewerben!</span>
        </span>
      </div>
      <div className="row">
        <div className="medium-8 tablet-portrait-12 column">
          <h1 className="section-title">Bewerbung bei KONNEX Zeitarbeit</h1>
          <div className="box">
            <p>
              <strong>
                Egal ob Sie wieder in den Arbeitsmarkt einsteigen oder erste
                Erfahrungen sammeln wollen.
              </strong>
              Bewerben Sie sich jetzt bei KONNEX Zeitarbeit, und eröffnen Sie
              sich neue Job-Perspektiven!
            </p>
            <div
              className="wpcf7 no-js"
              id="wpcf7-f460-o1"
              lang="de-DE"
              dir="ltr"
            >
              <div className="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true"></p>
                <ul></ul>
              </div>
            </div>
            <ApplyForm />
          </div>
        </div>
        <ContactCard />
      </div>
      <BlogCard blog={blogs} />
      <TestimonialCard />
    </>
  );
};
