import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "common/components/Banner";

import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-name2.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-jobssuche_spezialisten.jpg";
import { MainSearch } from "common/components/Main-search";
import { ContactCard } from "common/components/Contact-card";
import { BlogCard } from "common/components/Blog-card";
import { blogs } from "mock/blog";
import { TestimonialCard } from "common/components/Testimonial-card";

export const History = () => {
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
                    <span>Werte und Geschichte</span>
                </span>
            </div>
            <div className="row">
                <div className="medium-8 tablet-portrait-12   ">
                    <h1 className="section-title">
                        KONNEX temporary work – our philosophy
                    </h1>
                    <div className="box">
                        <p>
                            <strong>
                                Seit 2004 überzeugt die KONNEX Zeitarbeit GmbH durch
                                professionelles und verbindliches Auftreten.
                            </strong>{" "}
                            Das sind die Meilensteine unserer bisherigen Erfolgsgeschichte:
                        </p>
                        <p>
                            <strong>
                                <span style={{ color: "#f7a600" }}>2021</span>
                                <br />
                            </strong>
                            <em>
                                In Planung – Eröffnung weiterer Filialen u. a. in Koblenz,
                                Frankfurt am Main und Krefeld
                            </em>
                        </p>
                        <hr />
                        <p>
                            <strong>
                                2016
                                <br />
                            </strong>
                            <em>Juni</em> – Eröffnung der Filiale in Gummersbach
                        </p>
                        <hr />
                        <p>
                            <strong>
                                2014
                                <br />
                            </strong>
                            <em>September – </em>Eröffnung der Filiale in Krefeld
                        </p>
                        <hr />
                        <p>
                            <strong>
                                2013
                                <br />
                            </strong>
                            <em>November – </em>Umzug in neue Räumlichkeiten in der Kölner
                            Innenstadt, Weyerstraße 27 (Nähe Barbarossaplatz)
                        </p>
                        <hr />
                        <p>
                            <strong>
                                2010
                                <br />
                            </strong>
                            <em>Februar – </em>Umwandlung in eine GmbH
                        </p>
                        <hr />
                        <p>
                            <strong>
                                2004
                                <br />
                            </strong>
                            <em>Juni</em> – Gründung von KONNEX Zeitarbeit e. K. durch Herrn
                            Isa Yelen
                        </p>
                    </div>
                </div>
                <ContactCard />
            </div>
            <BlogCard blog={blogs} />
            <TestimonialCard />
        </>
    );
};
