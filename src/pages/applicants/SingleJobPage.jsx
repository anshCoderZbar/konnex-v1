import { CurrentJob } from "app/applicants/CurrentJob";
import { MainSearch } from "common/components/Main-search";
import {
  EmailLogo,
  FacebookLogo,
  GoogleLogo,
  TwitterLogo,
} from "common/components/icons";
import { jobData } from "mock/Jobs-data";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const SingleJobPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState({});
  const singleJob = jobData?.filter((data) => {
    return (
      data?.title?.toLowerCase()?.replaceAll("/", "-").replaceAll(" ", "_") ===
      slug
    );
  });
  useEffect(() => {
    setData(...singleJob);
  }, [data]);

  return (
    <>
      <MainSearch />
      <div id="main-breadcrumb" className="breadcrumbs">
        <span>
          <Link to="/home" className="home">
            KONNEX Zeitarbeit GmbH – Köln
          </Link>
        </span>
        <span>
          <span>Jobs</span>
        </span>
        <span>
          <span>{data?.title}</span>
        </span>
      </div>
      <div className="row">
        <div className="medium-8 tablet-portrait-12 column">
          <h1 className="section-title">{data?.title}</h1>
          <div className="box no-padd">
            <div className="job-header box yellow">
              <div className="row ">
                <div className="medium-8 column">Stellenbeschreibung</div>
                <div className="medium-4 column text-right">{data?.date}</div>
              </div>
            </div>

            <div className="inner-padd">
              <a className="read-more medium" href="../index.html">
                <i className="icon-Pfeil-rechts"></i>zur Auswahl
              </a>
              <p className="job-title blue-text">
                Auslieferungsfahrer/in Kl. CE (m/w/d)
              </p>
              <p className="job-location blue-text">
                Standort Köln, Leverkusen, Rhein-Erft, Rhein-Berg
              </p>
              <p>
                Wir suchen im Kundenauftrag ab sofort für namhafte Unternehmen
                im Raum Köln mehrere Auslieferungsfahrer Kl. CE (m/w/d).
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Berufsprofil:</strong>
              </p>
              <ul>
                <li>Zeitorientierte Lieferfahrten</li>
                <li>Bestückung der Fahrzeuge mit Lebensmitteln</li>
              </ul>
              <p>&nbsp;</p>
              <p>
                <strong>Wir bieten:</strong>
              </p>
              <ul>
                <li>
                  Langfristige Beschäftigung in einem namhaften Unternehmen mit
                  Übernahmeoption
                </li>
                <li>Vollzeittätigkeit</li>
                <li>Übertarifliche Bezahlung nach iGZ-DGB Tarif West</li>
                <li>Lohnfortzahlung</li>
                <li>Urlaubs- und Weihnachtsgeld</li>
                <li>Kurze Arbeitswege</li>
              </ul>
              <p>&nbsp;</p>
              <p>
                <strong>Wir erwarten:</strong>
              </p>
              <ul>
                <li>Gültige Fahrerlaubnis mit 5 Modulen</li>
                <li>Gepflegtes Erscheinungsbild</li>
                <li>Kundenfreundlichkeit</li>
                <li>Teamfähigkeit</li>
                <li>Bereitschaft zur Schichtarbeit</li>
              </ul>
              <p>&nbsp;</p>
              <p>
                <strong>Vorteilhafte Qualifikationen:</strong>
              </p>
              <ul>
                <li>Flurförderschein</li>
              </ul>
              <p>&nbsp;</p>
              <p>
                <strong>
                  Sie werden überrascht sein, dass Zeitarbeit auch anders geht,
                  BESSER, EHRLICHER und FREUNDLICHER.
                </strong>
              </p>
              <p>
                <span style={{ color: "#f7a600" }}>
                  <strong>
                    Bewerben Sie sich noch heute! Und überzeugen Sie sich von
                    unseren Leistungen.
                    <br />{" "}
                  </strong>
                </span>
              </p>
              <hr />
              <p style={{ textAlign: "left" }}>
                <span style={{ color: "#808080" }}>
                  Job ID: <strong>34594</strong>
                  <br />{" "}
                </span>
                <span style={{ color: "#808080" }}>
                  Ort: <strong>Köln, Leverkusen, Rhein-Erft, Rhein-Berg</strong>
                  <br />{" "}
                </span>
                <span style={{ color: "#808080" }}>
                  Art der Anstellung: 
                  <strong>Vollzeit mit Übernahmemöglichkeit</strong>
                  <br />{" "}
                </span>
                <span style={{ color: "#808080" }}>
                  Verfügbare Stellen: <strong>3</strong>
                </span>
              </p>

              <div className="text-center">
                <a
                  className="ghost-btn block apply-now"
                  href="../../jetzt-bewerben/index4066.html?job=Auslieferungsfahrer-in-Kl-CE-m-w-d-&amp;job-editor=info@konnex-zeitarbeit.de"
                >
                  <i className="icon-Pfeil-rechts"></i>Jetzt bewerben!
                </a>
              </div>
              <div className="text-center">
                <a className="read-more medium" href="../index.html">
                  <i className="icon-Pfeil-rechts"></i>zur Auswahl
                </a>
              </div>

              <div className="text-center">
                Wenn Sie auf eines der hier aufgeführten Icons klicken, werden
                Ihre persönlichen Daten an das ausgewählte Netzwerk übertragen.
              </div>

              <ul
                id="share-list-links"
                className="list-unstyled d-flex justify-content-center mb-3 gap-2"
              >
                <li>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://konnex-zeitarbeit.de/jobs/auslieferungsfahrer-in-kl-c1-koeln-2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookLogo />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/home?status=Auslieferungsfahrer/in%20Kl.%20CE%20(m/w/d)%20https://konnex-zeitarbeit.de/jobs/auslieferungsfahrer-in-kl-c1-koeln-2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterLogo />
                  </a>
                </li>
                <li>
                  <a
                    href="https://plus.google.com/share?url=https://konnex-zeitarbeit.de/jobs/auslieferungsfahrer-in-kl-c1-koeln-2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GoogleLogo />
                  </a>
                </li>
                <li>
                  <a href="mailto:?subject=Auslieferungsfahrer/in Kl. CE (m/w/d)&body=https://konnex-zeitarbeit.de/jobs/auslieferungsfahrer-in-kl-c1-koeln-2/">
                    <EmailLogo />
                  </a>
                </li>
              </ul>

              <p className="text-center text-uppercase">
                <small>Weiterempfehlen</small>
              </p>
            </div>
          </div>
        </div>
        <CurrentJob />
      </div>
    </>
  );
};
