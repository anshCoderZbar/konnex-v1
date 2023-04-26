import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "common/components/Banner";
import { MainSearch } from "common/components/Main-search";

import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-kontakt-2.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-kontakt-2-1.jpg";
import { MembersCard } from "app/konnex/MembersCard";

export const ContactPerson = () => {
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
                    <span>Ihre Ansprechpartner</span>
                </span>
            </div>
            <div className="row">
                <div className="medium tablet-portrait-12">
                    <h1 class="section-title">Ihre Ansprechpartner</h1>
                    <div class="box no-padd">
                        <MembersCard />
                    </div>
                </div>
            </div>
        </>
    );
};
