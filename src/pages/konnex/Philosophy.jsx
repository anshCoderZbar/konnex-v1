import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "common/components/Banner";

import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-jobspezialist.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-jobssuche_unternehmen.jpg";
import { MainSearch } from "common/components/Main-search";
import { CurrentJob } from "app/applicants/CurrentJob";
import { BlogCard } from "common/components/Blog-card";
import { blogs } from "mock/blog";
import { TestimonialCard } from "common/components/Testimonial-card";

export const Philosophy = () => {
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
                    <span>our philosophy</span>
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
                                KONNEX Zeitarbeit legt{" "}
                                <a href="../werte-und-geschichte/index.html">Wert</a> auf eine
                                gute, erfolgreiche Zusammenarbeit mit Kunden und Mitarbeitern.
                            </strong>{" "}
                            Es ist unser Anspruch und Bestreben, jedem die bestmögliche
                            Verbindung zum deutschen Arbeitsmarkt bieten.
                        </p>
                        <p>
                            Unser unternehmerisches Handeln basiert auf folgenden Grundsätzen:
                        </p>
                        <ol>
                            <li>
                                Wir wollen unsere Kunden durch unsere Personaldienstleistung
                                einen entscheidenden Schritt voranbringen.
                            </li>
                            <li>
                                Wir gehen ehrlich und vertrauensvoll mit unseren
                                Geschäftspartnern und Mitarbeitern um.
                            </li>
                            <li>
                                Unsere Mitarbeiter sollen sich bei ihrer Tätigkeit wohlfühlen.
                                Die ihnen übertragenen Aufgaben sollen ihren Fähigkeiten
                                entsprechen.
                            </li>
                            <li>
                                Wir wollen, dass unsere Mitarbeiter sich mit uns
                                weiterentwickeln und ihr Potenzial voll ausschöpfen.
                            </li>
                            <li>
                                Wir streben langfristige, nachhaltige Geschäftsbeziehungen an,
                                sowohl zu unseren Kunden als auch zu unseren Mitarbeitern.
                            </li>
                        </ol>
                        <p>
                            <strong>
                                <br />
                                Verlässliche Dienstleistung
                            </strong>
                        </p>
                        <p>
                            Für KONNEX Zeitarbeit bedeutet Dienstleistung, Unternehmen den Weg
                            zu mehr Wirtschaftlichkeit im Personalwesen zu ebnen. Wir bieten
                            ihnen die Möglichkeiten der Arbeitnehmerüberlassung plus eine
                            unkomplizierte Übernahmeoption. Damit tragen wir dazu bei, dass
                            Menschen den Transfer zum ersten Arbeitsmarkt schaffen.
                        </p>
                        <p>
                            <strong>Gerechte Arbeit, gerechte Löhne</strong>
                        </p>
                        <p>
                            Für KONNEX Zeitarbeit bedeutet Dienstleistung ebenso, unseren
                            Bewerbern und Mitarbeitern einen zu ihren individuellen
                            Fähigkeiten passenden Job zu sozial vertretbaren Löhnen
                            anzubieten. Alle unsere Mitarbeiter sollen ihren Lebensunterhalt
                            durch ihre Arbeit bestreiten können.
                        </p>
                    </div>
                </div>
                <CurrentJob />
            </div>
            <BlogCard blog={blogs} />
            <TestimonialCard />
        </>
    );
};
