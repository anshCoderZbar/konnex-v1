import React from "react";

import { Banner } from "common/components/Banner";
import { MainSearch } from "common/components/Main-search";

import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-unternehmen.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-unternehmen_mobile.jpg";
import { Link } from "react-router-dom";
import { ContactCard } from "common/components/Contact-card";
import { BlogCard } from "common/components/Blog-card";
import { blogs } from "mock/blog";
import { TestimonialCard } from "common/components/Testimonial-card";

export const Recruitment = () => {
  return (
    <>
      <Banner desktopImg={desktop} mobileImg={mobile} />
      <MainSearch />
      <div id="main-breadcrumb" className="breadcrumbs">
        <span>
          <Link to="/home" className="home">
            KONNEX Zeitarbeit GmbH –Köln
          </Link>
        </span>
        <span>
          <span>Personalvermittlung </span>
        </span>
      </div>
      <div className="row">
        <div className="medium-8 tablet-portrait-12">
          <h1 className="section-title">
            Personalvermittlung – wir finden Fachkräfte
          </h1>
          <div className="box"></div>
        </div>
        <ContactCard />
      </div>
      <BlogCard blog={blogs} />
      <TestimonialCard />
    </>
  );
};
