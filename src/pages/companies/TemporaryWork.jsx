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

export const TemporaryWork = () => {
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
          <span> KölnZeitarbeit heute</span>
        </span>
      </div>
      <div className="row">
        <div className="medium-8 tablet-portrait-12">
          <h1 className="section-title">
            Zeitarbeit heute – so funktioniert’s
          </h1>
          <div className="box">
            <p>
              <strong>
                Überraschende Auftragsspitze oder unverhoffte
                Krankheitsausfälle?
              </strong>{" "}
              Kein Problem mit Arbeitnehmerüberlassung.{" "}
              <a href="../unsere-philosophie/index.html">KONNEX Zeitarbeit</a>{" "}
              findet schnell die passenden Mitarbeiter für Sie. Wir vermitteln
              Ihnen{" "}
              <a href="../qualitaet-und-sicherheit/index.html">
                qualifiziertes Personal
              </a>{" "}
              und unterstützen Sie mit unserem Spezialwissen. So vermeiden Sie
              Personalengpässe und steigern Ihre Wirtschaftlichkeit.
            </p>
            <p>
              Mit Arbeitnehmerüberlassung reagieren Sie gelassen auf neue
              Herausforderungen. Mit dieser Beschäftigungsform bleiben Sie
              leistungsfähig und flexibel. Egal, ob Sie eine Personallösung für
              wenige Tage oder auf mehrere Jahre wünschen. Als
              Zeitarbeitsunternehmen ist KONNEX Zeitarbeit Ihr verlässlicher
              Partner.
            </p>
            <p>
              <strong>Exakte Kostenkalkulation</strong>
            </p>
            <p>
              Durch den Einsatz von Zeitarbeitnehmern federn Sie Auftragsspitzen
              ab, ohne an Flexibilität zu verlieren: Beschäftigen Sie unsere
              Mitarbeiter nur, wenn Sie ihre Arbeitskraft wirklich benötigen. So
              vermeiden Sie teuren Leerlauf und zahlen nur für produktive
              Stunden. Die Personalkosten sind für Sie zu jedem Zeitpunkt
              absolut transparent.
            </p>
            <p>
              Den Arbeitsvertrag mit dem Arbeitnehmer schließt KONNEX
              Zeitarbeit. Sie gehen praktisch kein Risiko ein.
              Selbstverständlich können Sie Mitarbeiter von uns übernehmen, wenn
              Sie es wünschen. Einfach und unbürokratisch.
            </p>
            <p>&nbsp;</p>
            <p>
              <span style={{ color: "#f7a600" }}>
                <strong>
                  Schritt für Schritt – so funktioniert Zeitarbeit
                </strong>
              </span>
            </p>
            <ol>
              <li>
                <span style={{ color: "#f7a600" }}>
                  <strong>Personalbedarf erkennen:</strong>
                </span>{" "}
                Sie stellen fest, dass Sie kurz- oder längerfristig mehr
                Personal benötigen. KONNEX Zeitarbeit ist für Sie da.
              </li>
              <li>
                <span style={{ color: "#f7a600" }}>
                  <strong>Stellenprofil definieren: </strong>
                </span>
                Wir unterstützen Sie beim passgenauen Beschreiben der Stelle.
                Dies ist die Grundlage für eine erfolgreiche Personalsuche.
              </li>
              <li>
                <span style={{ color: "#f7a600" }}>
                  <strong>Kandidaten auswählen:</strong>
                </span>{" "}
                Wir suchen geeignete Kandidaten und präsentieren eine Auswahl.
                Sie treffen die Entscheidung, welcher Mitarbeiter wann und wo
                zum Einsatz kommen soll.
              </li>
              <li>
                <span style={{ color: "#f7a600" }}>
                  <strong>Arbeitsbeginn:</strong>
                </span>{" "}
                Zum vereinbarten Termin steht Ihnen unser Mitarbeiter zur
                Verfügung. Pünktlich und zuverlässig.
              </li>
              <li>
                <span style={{ color: "#f7a600" }}>
                  <strong>Betreuung durch KONNEX Zeitarbeit:</strong>
                </span>{" "}
                Während der Beschäftigungsdauer sind wir jederzeit für Sie und
                den Arbeitnehmer da.
              </li>
              <li>
                <span style={{ color: "#f7a600" }}>
                  <strong>Mögliche Übernahme:</strong>
                </span>{" "}
                Wenn alles passt, können Sie den Arbeitnehmer von uns
                übernehmen. Der Prozess ist einfach und unbürokratisch.
              </li>
            </ol>
            <p>
              <strong>
                <br />
                Personal-Service nach Maß
              </strong>
            </p>
            <p>
              Über die klassische Zeitarbeit hinaus bieten wir Ihnen ein breites
              Spektrum an Personaldienstleistungen. Wenn Sie mehrere
              Zeitarbeitnehmer beschäftigen, koordinieren wir auf Wunsch als{" "}
              <a href="../master-vendor-management/index.html">
                Master-Vendor-Modell
              </a>{" "}
              den Einsatz dieses Personals. Sie können sich wieder Ihren
              Kernaufgaben widmen.
            </p>
            <p>
              Bei Bedarf vermitteln wir direkt spezielle Fachkräfte. Wir
              begleiten den kompletten Prozess bis zum Abschluss eines
              Arbeitsvertrags, auf Wunsch auch darüber hinaus.
            </p>
            <p>
              Oder befreien Sie sich komplett von der Personalverwaltung: Beim{" "}
              <a href="../on-site-management/index.html">On-Site-Management</a>{" "}
              wickeln wir das ganze Personalmanagement direkt bei Ihnen vor Ort
              für Sie ab – vom Sourcing über die Einsatzplanung bis zum
              Controlling. Kurze Wege bedeuten schnelle Entscheidungen und
              effiziente Strukturen.
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
