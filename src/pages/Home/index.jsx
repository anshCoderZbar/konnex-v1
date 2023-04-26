import React from "react";

import "styles/HomePage.css";
import { MainSearch } from "common/components/Main-search";

import { sliderData } from "mock/index/data";
import { BlogCard } from "common/components/Blog-card";
import { blogs } from "mock/blog";
import { TestimonialCard } from "common/components/Testimonial-card";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            {sliderData &&
              sliderData?.map((data) => {
                return (
                  <div
                    key={data?.id}
                    className={`carousel-item ${
                      data?.class ? data?.class : null
                    }`}
                  >
                    <img
                      src={data?.desktopBanner}
                      className="w-100 dextop-s"
                      alt="Zeitarbeit Köln Siegen Krefeld Top Jobs"
                    />
                    <img
                      src={data?.mobileBanner}
                      className="w-100 mobile-s"
                      alt="Zeitarbeit Köln Siegen Krefeld Top Jobs"
                    />
                  </div>
                );
              })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <MainSearch />
      <div className="tempr">
        <div className="large-8 medium-7 tablet-portrait-12 column v_sd">
          <h1 className="section-title">KONNEX Zeitarbeit Köln</h1>
          <div className="box grey v_s" data-equalizer-watch>
            <p>
              <strong>
                Unerwartete Auftragsspitze oder plötzliche Krankheitsausfälle?
              </strong>
              Nicht immer läuft alles wie geplant. Kein Problem!
              <span style={{ color: "#144294" }}>
                <a
                  style={{ color: "#144294", textDecoration: "underline" }}
                  title="über Konnex"
                  href="unsere-philosophie/index.html"
                >
                  KONNEX Zeitarbeit
                </a>
              </span>
              findet schnell passende Mitarbeiter für Ihr Unternehmen. Wir sind
              Ihre beste Verbindung zum deutschen Arbeitsmarkt. Wir vermitteln
              qualifiziertes Personal und unterstützen Sie mit unserem
              Spezialwissen, wo wir können. Damit gewinnen Sie gleich doppelt:
              Erstens vermeiden Sie nervenaufreibende Personal-Engpässe. Und
              zweitens steigern Sie Effizienz und Wirtschaftlichkeit.
            </p>
            <p style={{ textAlign: "left" }}>
              <strong>Personal-Service nach Maß</strong>
            </p>
            <p>
              Mithilfe der Arbeitnehmerüberlassung meistern Sie
              Herausforderungen im Personalbereich souverän und nachhaltig. Ihr
              Unternehmen bleibt leistungsfähig und flexibel. Egal, ob Sie eine
              Personallösung für wenige Tage oder auf mehrere Jahre wünschen –
              KONNEX Zeitarbeit ist der verlässliche Partner für Ihr Geschäft.
            </p>
            <a href="unsere-philosophie/index.html" className="more-btn">
              <span className="icon-Pfeil-rechts"></span>WEITERLESEN
            </a>
          </div>
        </div>
        <div className="large-4 medium-5 tablet-portrait-12 column v_sd2">
          <h3 className="section-title yellow">Aktuelles</h3>
          <div className="box sidebar-box yellow v_s">
            <span className="date yellow-text">23. April 2020</span>
            <h4 className="blue-text">
              Aktuelle Informationen zu Corona COVID 19
            </h4>
            <div className="blue-text no-mar-b">
              Die Ereignisse im Zusammenhang mit Coronavirus COVID 19
              überschlagen sich fast täglich. Es ist kein Fall von Infektionen
              bei uns und unseren Mitarbeitern aufgetreten....
            </div>
            <a
              href="aktuelle-informationen-zu-corona-covid-19/index.html"
              className="read-more"
            >
              <span className="icon-Pfeil-rechts"></span>mehr dazu
            </a>
            <div className="text-right">
              <img
                width="800"
                height="450"
                src="/uploads/2020/04/konnex-corona-update.png"
                className="full-width thmb wp-post-image"
                alt=""
                decoding="async"
                loading="lazy"
                srcSet="
                        https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update.png         800w,
                        https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update-300x169.png 300w,
                        https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update-768x432.png 768w
                      "
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </div>

            <a href="aktuelles/index.html" className="more-btn yellow">
              <span className="icon-Pfeil-rechts"></span>weitere Meldungen
            </a>
          </div>
        </div>
      </div>
      <div className="mar-t20 row">
        <div className="medium-4 tablet-portrait-12 column">
          <h3 className="section-title">Für Bewerber</h3>
          <div className="box grey" data-equalizer-watch>
            <p>
              <strong>Aktuelle Job-Angebote</strong>
            </p>

            <ul className="job-title-list">
              <li className="highlighted">
                <i className="icon-Pfeil-rechts"></i>
                <a href="jobs/top-jobs-fuer-studierende/index.html">
                  Top-Jobs für Studierende
                </a>
              </li>
              <li className="highlighted">
                <i className="icon-Pfeil-rechts"></i>
                <a href="jobs/mitarbeiter-m-w-d-fuer-die-bargeldzaehlung-und-pruefung/index.html">
                  Mitarbeiter (m/w/d) für die Bargeldzählung und Prüfung
                </a>
              </li>
              <li className="">
                <i className="icon-Pfeil-rechts"></i>
                <a href="jobs/dringend-mitarbeiter-gesucht/index.html">
                  Dringend Mitarbeiter gesucht
                </a>
              </li>
              <li className="highlighted">
                <i className="icon-Pfeil-rechts"></i>
                <a href="jobs/dringend-verkaufsmitarbeiter-gesucht/index.html">
                  Verkaufsmitarbeiter gesucht
                </a>
              </li>
              <li className="highlighted">
                <i className="icon-Pfeil-rechts"></i>
                <a href="jobs/mechatroniker-m-w-d-2/index.html">
                  Mechatroniker (m/w/d)
                </a>
              </li>
              <li className="highlighted">
                <i className="icon-Pfeil-rechts"></i>
                <a href="jobs/verkaeufer-und-kassierer-m-w-d/index.html">
                  Verkäufer und Kassierer (m/w/d)
                </a>
              </li>
              <li className="highlighted">
                <i className="icon-Pfeil-rechts"></i>
                <a href="jobs/produktionsmitarbeiter-m-w-d-12-euro-std/index.html">
                  Produktionsmitarbeiter (m/w/d) 12 €/Std
                </a>
              </li>
              <li className="highlighted">
                <i className="icon-Pfeil-rechts"></i>
                <a href="jobs/kommissionierer-m-w-d/index.html">
                  Kommissionierer (m/w/d)
                </a>
              </li>
              <li className="highlighted">
                <i className="icon-Pfeil-rechts"></i>
                <a href="jobs/technischer-zeichner-m-w-d/index.html">
                  Technischer Zeichner (m/w/d)
                </a>
              </li>
            </ul>
            <a href="jobs/index.html" className="more-btn">
              <span className="icon-Pfeil-rechts"></span>MEHR
            </a>
          </div>
        </div>
        <div className="medium-4 tablet-portrait-12 column">
          <h3 className="section-title yellow">Sicherheit und Qualität</h3>
          <div className="box grey" data-equalizer-watch>
            <p>
              KONNEX Zeitarbeit bietet individuelle Personallösungen für kleine
              und große Unternehmen. Wir halten Ihnen den Rücken frei –
              kompetent und effizient.
              <a
                title="iGZ Zeitarbeit"
                href="http://www.ig-zeitarbeit.de/"
                target="_blank"
                
                rel="noreferrer"
              >
                <span style={{ color: "#144294" }}>
                  Wir richten uns nach dem Ethik-Kodex des Interessenverbandes
                  Deutscher Zeitarbeitsunternehmen (iGZ).
                </span>
              </a>
            </p>
            <p>
              <img
                decoding="async"
                loading="lazy"
                className="alignnone size-medium wp-image-260"
                src="uploads/2015/03/konnex-zeitarbeit-igz-logo-300x134.jpg"
                alt="konnex-zeitarbeit-igz-logo"
                width="300"
                height="134"
                srcSet="
                        https://konnex-zeitarbeit.de/wp-content/uploads/2015/03/konnex-zeitarbeit-igz-logo-300x134.jpg 300w,
                        https://konnex-zeitarbeit.de/wp-content/uploads/2015/03/konnex-zeitarbeit-igz-logo.jpg         340w
                      "
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </p>
            <a
              href="zertifikate-und-urkunden/index.html"
              className="more-btn yellow"
            >
              <span className="icon-Pfeil-rechts"></span>mehr
            </a>
          </div>
        </div>
        <div className="medium-4 tablet-portrait-12 column">
          <h3 className="section-title">Für Unternehmen</h3>
          <div className="box grey" data-equalizer-watch>
            <p>
              KONNEX Zeitarbeit stellt Ihnen schnell passende Mitarbeiter zur
              Verfügung. Von der Arbeitnehmerüberlassung bis zum
              On-Site-Management – Sie sparen Zeit und reduzieren Kosten. Ihr
              Vorteile:
            </p>
            <ul>
              <li>
                <strong>Keine Personalengpässe</strong>
              </li>
              <li>
                <strong>Auftragsspitzen abfedern</strong>
              </li>
              <li>
                <strong>Wettbewerbsvorteil sichern</strong>
              </li>
              <li>
                <strong>Kosten exakt kalkulierbar</strong>
              </li>
              <li>
                <strong>Flexibilität ohne Risiko</strong>
              </li>
            </ul>
            <a href="vorteile/index.html" className="more-btn">
              <span className="icon-Pfeil-rechts"></span>Mehr
            </a>
          </div>
        </div>
      </div>
      <BlogCard blog={blogs} />
      <TestimonialCard />
    </>
  );
};

export default Home;
