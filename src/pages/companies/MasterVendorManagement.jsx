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

export const MasterVendorManagement = () => {
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
                    <span>Master-Vendor-Management</span>
                </span>
            </div>
            <div className="row">
                <div className="medium-8 tablet-portrait-12   ">
                    <h1 className="section-title">
                        Master-Vendor-Management – das Rundum-sorglos-Paket
                    </h1>
                    <div class="box">
                        <p>
                            <strong>
                                Wenn in Ihrem Unternehmen regelmäßig mehrere Zeitarbeitnehmer
                                tätig sind, können wir die Koordination und Rotationsplanung
                                dieses Personals komplett für Sie übernehmen.
                            </strong>{" "}
                            Als Master-Vendor kümmert sich{" "}
                            <a href="../qualitaet-und-sicherheit/index.html">
                                KONNEX Zeitarbeit
                            </a>{" "}
                            in Ihrem Auftrag wie ein Generalunternehmen um sämtliche Aspekte:
                            von der Personalauswahl über die innerbetriebliche Disposition bis
                            hin zu allen Aufgaben der Verwaltung und Abrechnung.
                        </p>
                        <p>
                            <strong>Höchstmaß an Effizienz</strong>
                        </p>
                        <p>
                            Sie haben nur noch einen{" "}
                            <a href="../ansprechpartner/index.html">Ansprechpartner</a>, da
                            wir alle Fäden für Sie zusammenhalten. Das vereinfacht die
                            Kommunikation und beschleunigt wichtige Entscheidungen. Sie
                            erzielen somit ein Höchstmaß an Effizienz und Flexibilität.
                        </p>
                        <p>
                            Alle unsere Master-Vendor-Angebote sind auf die individuellen
                            Bedürfnisse unserer Kunden zugeschnitten. Gerne informieren wir
                            Sie über die verschiedenen Modelle und beraten Sie, wie mögliche
                            Lösungen für Ihr Unternehmen aussehen könnten.
                        </p>
                        <p>
                            <strong>Weitere Personaldienstleistungen</strong>
                        </p>
                        <p>
                            KONNEX Zeitarbeit unterstützt Ihr Unternehmen aktiv bei allen
                            Fragen zum Personaleinsatz – von der{" "}
                            <a href="../personalvermittlung/index.html">
                                Personalvermittlung
                            </a>{" "}
                            bis zum <a href="../outsourcing/index.html">Outsourcing</a> von
                            Tätigkeiten. Auf Wunsch übernehmen wir die Koordination und die
                            Verwaltung von Zeitarbeitskräften auch in vollem Umfang, zum
                            Beispiel im Rahmen eines{" "}
                            <a href="../on-site-management/index.html">On-Site-Managements</a>{" "}
                            direkt bei Ihnen vor Ort.
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
