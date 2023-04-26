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

export const CompaniesAdvantages = () => {
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
          <span>Advantages</span>
        </span>
      </div>
      <div className="row">
        <div className="medium-8 tablet-portrait-12   ">
          <h1 className="section-title">Die KONNEX Vorteile für Unternehmen </h1>
          <div className="box">
            <p>
              <strong>
                Überraschende Auftragsspitze oder unverhoffte
                Krankheitsausfälle?
              </strong>{" "}
              Kein Problem.{" "}
              <a href="../qualitaet-und-sicherheit/index.html">
                KONNEX Zeitarbeit
              </a>{" "}
              findet schnell die passenden Mitarbeiter für Sie. Wir vermitteln
              Ihnen qualifiziertes Personal und unterstützen Sie mit unserem
              Spezialwissen. So vermeiden Sie Personalengpässe und steigern Ihre
              Wirtschaftlichkeit.
            </p>
            <p>
              <strong>Personalengpässe vermeiden</strong>
            </p>
            <p>
              Unsere Mitarbeiter sind hoch motiviert und entsprechen zu 100
              Prozent Ihren Anforderungen. Jeder Kandidat durchläuft ein
              mehrstufiges Auswahlprogramm. Wir analysieren seine Stärken und
              bereiten ihn durch Trainingsmaßnahmen auf die Aufgaben in Ihrem
              Unternehmen vor. Auch arbeitsmedizinische Untersuchungen und
              Sicherheitsschulungen erledigen wir.
            </p>
            <p>
              Von der klassischen Arbeitnehmerüberlassung über die direkte{" "}
              <a href="../personalvermittlung/index.html">
                Personalvermittlung
              </a>{" "}
              bis zu <a href="../outsourcing/index.html">Outsourcing</a> und
              umfassendem{" "}
              <a href="../on-site-management/index.html">On-Site-Management</a>{" "}
              –{" "}
              <a href="../qualitaet-und-sicherheit/index.html">
                KONNEX Zeitarbeit
              </a>{" "}
              entwickelt als strategischer Partner das für Sie optimale
              Personal-Konzept. Passgenau und engagiert. Für Kleinbetriebe,
              Mittelstand und Großkonzerne.
            </p>
            <p>
              <strong>Die KONNEX Zeitarbeit-Vorteile für Unternehmen:</strong>
            </p>
            <ul>
              <li>
                <strong>
                  Persönliche Betreuung mit direktem Ansprechpartner:{" "}
                </strong>
                Gemeinsam erörtern wir Ihren aktuellen Personalbedarf und finden
                die bestmögliche Lösung.
              </li>
              <li>
                <strong>24-Stunden-Verfügbarkeit:</strong> KONNEX Zeitarbeit ist
                rund um die Uhr für Sie erreichbar.
              </li>
              <li>
                <strong>Motivierte und flexible Mitarbeiter:</strong> Damit Sie
                zufrieden sind, legt KONNEX Zeitarbeit großen{" "}
                <a href="../werte-und-geschichte/index.html">Wert</a> auf eine
                hohe Mitarbeitermotivation.
              </li>
              <li>
                <strong>
                  Kurzfristige Verfügbarkeit unserer Mitarbeiter:{" "}
                </strong>
                Wenn es einmal schnell gehen muss, können wir Ihnen innerhalb
                kürzester Zeit einen Arbeitnehmer zur Verfügung stellen.
              </li>
              <li>
                <strong>Transparente Stundensätze:</strong> Die Personalkosten
                durch Zeitarbeit sind für Sie zu jedem Zeitpunkt überschaubar
                und nachvollziehbar.
              </li>
              <li>
                <strong>Exakte Kostenkalkulation:</strong> Die vereinbarten
                Stundensätze sind stabil. Sie müssen keine unerwarteten
                Steigerungen befürchten.
              </li>
              <li>
                <strong>Angleichung an Ihre Urlaubsplanung: </strong>Unsere
                Mitarbeiter richten sich nach den in Ihrem Betrieb geltenden
                Urlaubsrichtlinien.
              </li>
              <li>
                <strong>Kein Risiko:</strong> Den Arbeitsvertrag mit dem
                Zeitarbeitnehmer schließt KONNEX Zeitarbeit. Sollten Sie nach
                einem Probetag wider Erwarten nicht zufrieden mit einem unserer
                Mitarbeiter sein, bleibt dieser Tag für Sie kostenfrei.
              </li>
            </ul>
            <p>
              <strong>Weitere Personaldienstleistungen</strong>
            </p>
            <p>
              KONNEX Zeitarbeit unterstützt Ihr Unternehmen aktiv bei allen
              Fragen zum Personaleinsatz: von der Arbeitnehmerüberlassung über
              die{" "}
              <a href="../personalvermittlung/index.html">
                Personalvermittlung
              </a>{" "}
              bis zum <a href="../outsourcing/index.html">Outsourcing</a> von
              Tätigkeiten. Auf Wunsch übernehmen wir die Koordination und die
              Verwaltung von Zeitarbeitskräften auch in vollem Umfang, zum
              Beispiel im Rahmen des{" "}
              <a href="../master-vendor-management/index.html">
                Master-Vendor-Modells
              </a>{" "}
              oder eines{" "}
              <a href="../master-vendor-management/index.html">
                On-Site-Managements
              </a>{" "}
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
