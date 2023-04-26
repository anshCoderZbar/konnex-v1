import React from "react";

import { Banner } from "common/components/Banner";

import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-jobboerse.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-jobboerse_mobile.jpg";
import { MainSearch } from "common/components/Main-search";
import { Link } from "react-router-dom";
import { BlogCard } from "common/components/Blog-card";
import { blogs } from "mock/blog";
import { TestimonialCard } from "common/components/Testimonial-card";
import { ContactCard } from "common/components/Contact-card";
export const Advantages = () => {
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
        <div className="medium-8 tablet-portrait-12 column">
          <h1 className="section-title">Unsere Vorteile für Bewerber </h1>
          <div className="box">
            <p>
              <strong>Sie suchen einen neuen Job?</strong> Sie sind unzufrieden
              mit Ihrem jetztigen Arbeitgeber? Sie wollen nach Ausbildung oder
              Studium beruflich durchstarten? Dann sind Sie bei KONNEX
              Zeitarbeit genau richtig. Wir bieten Arbeitsuchenden
              ausgezeichnete Weiterentwicklungs- und Karrieremöglichkeiten.
            </p>
            <p>
              Zeitarbeit eröffnet Ihnen zahlreiche Chancen. Ob Sie neu in die
              Arbeitswelt einsteigen, nach einer Pause wiedereinsteigen oder
              sich beruflich neu orientieren wollen – durch die zeitweise
              Tätigkeit in wechselnden Unternehmen lernen Sie verschiedene
              Aufgabenbereiche kennen. Sie erhalten Einblicke in
              unterschiedliche Branchen und sammeln wertvolle Praxiserfahrung.
            </p>
            <p>
              <strong>Zeitarbeit – gut und sicher</strong>
            </p>
            <p>
              Welche Qualifikationen und Voraussetzungen Sie auch mitbringen:
              Wir bringen die Arbeit zu Ihnen und Sie zu Ihrer Traumstelle. In
              Teilzeit oder Vollzeit, mit umfassendem Arbeitsschutz. KONNEX
              Zeitarbeit vermittelt fast ausschließlich Arbeitsverhältnisse mit
              voller Sozialversicherungspflicht. Das heißt: Als Zeitarbeitnehmer
              genießen Sie gesetzlichen Kündigungsschutz, gesetzliche
              Lohnfortzahlung im Krankheitsfall und bis zu 30 Tage gesetzlichen
              Urlaubsanspruch.
            </p>
            <p>
              Für die Zeitarbeitsbranche gelten eigene Tarifverträge. KONNEX
              Zeitarbeit ist{" "}
              <a href="http://www.ig-zeitarbeit.de" target="_blank" rel="noreferrer">
                Mitglied im iGZ &#8211; Interessenverband Deutscher
                Zeitarbeitsunternehmen e. V.
              </a>
              , der eine entsprechende Vereinbarung mit dem Deutschen
              Gewerkschaftsbund (DGB) getroffen hat. Der aktuelle Tarifvertrag
              läuft bis zum 31. Dezember 2016; Sie können ihn{" "}
              <span style={{ textDecoration: "underline" }}>
                <a href="http://www.ig-zeitarbeit.de/Tarifvertrag">
                  hier herunterladen
                </a>
              </span>
              .
            </p>
            <p>
              <strong>Schritt für Schritt zum neuen Job</strong>
            </p>
            <p>
              KONNEX Zeitarbeit vermittelt alle Arbeitnehmer, die gewisse
              Anforderungen erfüllen. Sie sind
              <br />
              flexibel und passen sich Ihrem Umfeld an? Sie lernen gerne und
              sind zuverlässig? Dann bewerben Sie sich jetzt gleich bei uns.
              Gerne analysieren wir gemeinsam mit Ihnen Ihr Potenzial und finden
              eine für Sie passende Aufgabe.
            </p>
            <p>
              Wir sorgen dafür, dass Sie genau in dem Bereich arbeiten können,
              für den Sie qualifiziert sind. Frühschicht oder Nachtschicht?
              Ortsgebunden oder familiäre Verpflichtungen? Wir nehmen Rücksicht
              auf Ihre individuellen Bedürfnisse. KONNEX Zeitarbeit legt
              <a href="/" target="_blank">
                Wert
              </a>
              auf eine hochwertige Dienstleistung und rundum zufriedene Kunden.
              Die erreichen wir nur, wenn Sie sich bei Ihrer Tätigkeit
              wohlfühlen.
            </p>
            <div className="text-center">
              <a className="ghost-btn" href="/">
                <i className="icon-Pfeil-rechts"></i>Jetzt bewerben!
              </a>
            </div>
          </div>
        </div>
        <ContactCard />
      </div>
      <BlogCard blog={blogs} />
      <TestimonialCard />
    </>
  );
};
