import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "common/components/Banner";
import { MainSearch } from "common/components/Main-search";
import { BlogCard } from "common/components/Blog-card";
import { blogs } from "mock/blog";
import { TestimonialCard } from "common/components/Testimonial-card";
import { CurrentJob } from "app/applicants/CurrentJob";

import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-sponsoring-9.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-sponsoring_mobile-2.jpg";
export const ChineseSponsoring = () => {
    return (
        <>
            <Banner desktopImg={desktop} mobileImg={mobile} />
            <MainSearch />
            <div id="main-breadcrumb" className="breadcrumbs">
                <span>
                    <Link to="/home" className="home">
                        KONNEX Zeitarbeit GmbH – Köln
                    </Link>
                </span>
                <span>
                    <span>Sponsoring – Chinese Boxing Akademie Köln</span>
                </span>
            </div>
            <div className="row">
                <div className="medium-8 tablet-portrait-12   ">
                    <h1 className="section-title">
                        Sponsoring – wir unterstützen den Sport
                    </h1>
                    <div className="box">
                    </div>
                </div>
                <CurrentJob />
            </div>
            <BlogCard blog={blogs} />
            <TestimonialCard />
        </>
    );
};
