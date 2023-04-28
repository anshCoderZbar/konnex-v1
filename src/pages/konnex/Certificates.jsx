import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "common/components/Banner";
import { MainSearch } from "common/components/Main-search";
import { ContactCard } from "common/components/Contact-card";
import { BlogCard } from "common/components/Blog-card";
import { blogs } from "mock/blog";
import { TestimonialCard } from "common/components/Testimonial-card";

import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-urkunden.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-personalkonzept_certifikat.jpg";
export const Certificates = () => {
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
                    <span>Zertifikate und Urkunden</span>
                </span>
            </div>
            <div className="row">
                <div className="medium-8 tablet-portrait-12   ">
                    <h1 className="section-title">Zertifikate und Urkunden</h1>
                    <div className="box">
                        <p>
                            <strong>
                                KONNEX Zeitarbeit ist Mitglied im{" "}
                                <a
                                    title="iGZ Zeitarbeit"
                                    href="http://www.ig-zeitarbeit.de/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span style={{ color: "#144295" }}>
                                        iGZ – Interessenverband Deutscher Zeitarbeitsunternehmen e.V
                                    </span>
                                    .
                                </a>
                                , dem mitgliederstärksten Arbeitgeberverband der
                                Zeitarbeitsbranche.
                            </strong>{" "}
                            Wir verpflichten uns zur Einhaltung der Leitwerte der{" "}
                            <em>„Guten Zeitarbeit“</em>, wie sie dem iGZ-Ethik-Kodex zugrunde
                            liegen. Auf dieser Seite finden Sie wichtige Dokumente dazu sowie
                            weitere Zertifikate, die KONNEX Zeitarbeit auszeichnen.  {" "}
                            <a
                                href="../wp-content/uploads/2020/05/IGZ-2020.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    decoding="async"
                                    loading="lazy"
                                    className="alignleft wp-image-646 size-full"
                                    src="https://konnex-zeitarbeit.de/wp-content/uploads/2015/04/konnex-zeitarbeit-koeln-krefeld-zertifiziert1.jpg"
                                    alt="konnex-zeitarbeit-koeln-krefeld-zertifiziert"
                                    width="74"
                                    height="94"
                                />
                            </a>
                        </p>
                        <p style={{ paddingLeft: "120px;" }}>
                            <strong>iGZ Mitgliedsurkunde (Tarifpartner) </strong>
                            <span style={{ lineHeight: "1.5;" }}>
                                Interessenverband Deutscher Zeitarbeitsunternehmen e. V.{" "}
                            </span>
                            <span style={{ lineHeight: "1.5;" }}>
                                <span style={{ textDecoration: "underline" }}>
                                    <span style={{ color: "#144295", textDecoration: "underline" }}>
                                        <a
                                            href="../wp-content/uploads/2020/05/IGZ-2020.pdf"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Ansehen
                                        </a>
                                    </span>
                                </span>
                            </span>
                        </p>
                        <hr />
                        <p>
                            <strong>
                                <a
                                    href="../wp-content/uploads/2020/05/Erlaubnis-2018.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        decoding="async"
                                        loading="lazy"
                                        className="alignleft wp-image-819 size-full"
                                        src="https://konnex-zeitarbeit.de/wp-content/uploads/2015/04/konnex-zeitarbeit-koeln-krefeld-zertifiziert1.jpg"
                                        alt=""
                                        width="74"
                                        height="94"
                                    />
                                </a>
                            </strong>
                        </p>
                        <p style={{ paddingLeft: "120px;" }}>
                            <strong>Erlaubnis zur Arbeitnehmerüberlassung </strong>
                            <span style={{ lineHeight: "1.5;" }}>Bundesagentur für Arbeit </span>
                            <span style={{ lineHeight: "1.5;" }}>
                                <span style={{ textDecoration: "underline" }}>
                                    <span style={{ color: "#144295", textDecoration: "underline" }}>
                                        <a
                                            href="https://konnex-zeitarbeit.de/wp-content/uploads/2015/04/konnex-zeitarbeit-koeln-krefeld-zertifiziert1.jpg"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Ansehen
                                        </a>
                                    </span>
                                </span>
                            </span>
                            <strong> </strong>
                        </p>
                        <hr />
                        <p>&nbsp;</p>
                    </div>
                </div>
                <ContactCard />
            </div>
            <BlogCard blog={blogs} />
            <TestimonialCard />
        </>
    );
};
