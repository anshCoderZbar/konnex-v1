import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "common/components/Banner";
import { MainSearch } from "common/components/Main-search";
import { ContactCard } from "common/components/Contact-card";
import { BlogCard } from "common/components/Blog-card";
import { TestimonialCard } from "common/components/Testimonial-card";


import { blogs } from "mock/blog";
import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-unternehmen.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-unternehmen_mobile.jpg";

export const OnSiteManagement = () => {
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
                    <span>On-Site-Management</span>
                </span>
            </div>
            <div className="row">
                <div className="medium-8 tablet-portrait-12">
                    <h1 className="section-title">
                        On-Site-Management – alle Kosten im Griff
                    </h1>
                    <div className="box">

                        <p><strong>Hohe Personalkosten und enormer Verwaltungsaufwand?</strong> Wenn Ihnen das bekannt vorkommt, dann
                            sollten Sie weiterlesen. <a href="../unsere-philosophie/index.html">KONNEX Zeitarbeit</a> bietet Ihnen auf
                            Wunsch ein komplettes On-Site-Management. Das heißt: Wir übernehmen direkt bei Ihnen vor Ort sämtliche
                            Personalaufgaben für Sie – die Planung, die Verfügbarkeit, die Verwaltung und so weiter … Sie schaffen sich neue
                            Freiräume und entdecken Ihre eigentliche Stärke wieder.</p>
                        <p><strong>Effiziente Inhouse-Lösung</strong></p>
                        <p>Sie profitieren von unserem Fachwissen und unserer langjährigen Erfahrung in Personalthemen. Da unser
                            Personalmanager direkt bei Ihnen im Unternehmen sitzt, sind hohe Flexibilität, kurze Informationswege und exakte
                            Planung garantiert. On-Site-Management macht Ihre Personalprozesse sicher und transparent – und schafft neue
                            Ressourcen. Durch die Konzentration auf wesentliche Kernkompetenzen steigern Sie die Produktivität des
                            Unternehmens und die <a href="../qualitaet-und-sicherheit/index.html">Qualität</a> Ihrer Leistung.</p>
                        <p>Lassen Sie sich über unser umfangreiches Angebot und die verschiedenen Variationen innerhalb eines
                            On-Site-Managements informieren. Als zentraler Ansprechpartner stehen wir Ihnen in allen Angelegenheiten
                            bezüglich Zeitarbeit jederzeit zur Verfügung.</p>
                        <p><strong>Ihre Vorteile durch On-Site-Management:</strong></p>
                        <ul>
                            <li>Effiziente Kostenkalkulation</li>
                            <li>Nur ein <a href="../ansprechpartner/index.html">Ansprechpartner</a></li>
                            <li>Personalkoordinator direkt vor Ort</li>
                            <li>Höhere Zufriedenheit der Mitarbeiter</li>
                            <li>Kurze Reaktionszeiten, schnelle Entscheidungen</li>
                            <li>Einheitliches Reporting</li>
                            <li>Freie Ressourcen in Ihrem Unternehmen</li>
                        </ul>
                        <p><span style={{ color: "#f7a600" }}><strong>Klingt gut? Dann rufen Sie uns an!</strong></span></p>
                    </div>
                </div>
                <ContactCard />
            </div>
            <BlogCard blog={blogs} />
            <TestimonialCard />
        </>
    );
};
