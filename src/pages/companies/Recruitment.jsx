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
          <div className="box">
            <p>
              <strong>Eine unbesetzte Stelle ist wie eine Sollbruchstelle:</strong>
              <strong>Wenn es hart auf hart kommt, fehlt Ihnen ein qualifizierter
                Mitarbeiter.</strong>
              <a href="../qualitaet-und-sicherheit/index.html">KONNEX Zeitarbeit</a>
              unterstützt Sie dabei, schnell und passgenau die benötigte Fachkraft zu
              finden.
            </p>
            <p>
              Wir verstehen uns als Bindeglied zwischen Unternehmen und Arbeitnehmern. Als
              Zeitarbeitsunternehmen sind wir Ihr kompetenter Ansprechpartner in puncto
              Personalvermittlung. Vom Sourcing über das Auswahlverfahren bis zum
              Arbeitsvertrag. Auf Wunsch begleiten wir Sie durch den gesamten Prozess und
              darüber hinaus – für eine sichere und gute Verbindung.
            </p>
            <p><strong>Personal-Service von A bis Z</strong></p>
            <p>
              Gemeinsam mit Ihnen erstellen wir ein aussagefähiges Stellenprofil inklusive
              aller Anforderungen, die Sie an den Mitarbeiter stellen. Bei der Suche nach
              einem geeigneten Kandidaten recherchieren wir im firmeneigenen Bewerber-Pool
              sowie in internen und externen Netzwerken. Zudem inserieren wir das
              Stellenangebot gezielt in den relevanten Online- und Print-Medien.
            </p>
            <p><strong>Transparentes Auswahlverfahren</strong></p>
            <p>
              Nach einer ersten Vorauswahl durch die
              <a href="../ansprechpartner/index.html">Personalexperten</a> der KONNEX
              Zeitarbeit präsentieren wir Ihnen eine Reihe von geeigneten Bewerbern in
              Form eines ausführlichen Exposés <span style={{ lineHeight: "1.5px" }}>oder vertraulichen Berichts. Gerne erläutern wir
                Ihnen unsere Auswahl bei
                einem persönlichen Gespräch. Der Prozess ist für Sie zu jedem Zeitpunkt
                absolut transparent. </span><a style={{ lineHeight: "1.5px" }} href="../unsere-philosophie/index.html">KONNEX
                  Zeitarbeit</a><span style={{ lineHeight: "1.5px" }}>
                steht Unternehmen wie Bewerbern bis zum Abschluss des Arbeitsvertrages als
                vertraulicher Ansprechpartner zur Seite – auf Wunsch auch darüber
                hinaus.</span>
            </p>
            <p><strong>Weitere Personaldienstleistungen</strong></p>
            <p>
              Gerne unterstützt
              <a href="../qualitaet-und-sicherheit/index.html">KONNEX Zeitarbeit</a> Ihr
              Unternehmen auch bei weiteren Personal-Angelegenheiten: Als
              <a href="../master-vendor-management/index.html">Master Vendor</a>
              übernehmen wir die Koordination und die Verwaltung von Zeitarbeitskräften in
              vollem Umfang – auch im Rahmen eines
              <a href="../on-site-management/index.html">On-Site-Managements</a> direkt
              bei Ihnen vor Ort. Zudem begleiten wir Sie aktiv bei allen Fragen zum
              Personaleinsatz sowie zum
              <a href="../outsourcing/index.html">Outsourcing</a> von Tätigkeiten.
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
