import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MainSearch } from "common/components/Main-search";
import { jobData } from "mock/Jobs-data";
import { JobCard } from "app/applicants/JobCard";
import { CurrentJob } from "app/applicants/CurrentJob";

export const Jobs = () => {
  const [value, setValue] = useState("");

  const filteredData = jobData?.filter((data) => {
    if (value === "") {
      return data;
    } else {
      return data?.categrory.toLowerCase() === value.toLowerCase();
    }
  });

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
      </div>
      <div className="row">
        <div className="medium-8 tablet-portrait-12 column">
          <h1 className="section-title">Jobs</h1>
          <div className="box no-padd jobs">
            <div className="row medium-uncollapse">
              <div className="large-12 column">
                <div className="job-header box yellow">
                  <div className="row">
                    <div className="medium-8 column">Stellenbezeichnung</div>
                    <div className="medium-4 column text-right">Ort/Datum</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row medium-uncollapse">
              <div className="large-12 column">
                <div className="job-filter box">
                  <div className="row">
                    <div className="medium-6 column">
                      <div
                        className="facetwp-facet facetwp-facet-jobs facetwp-type-dropdown"
                        data-name="jobs"
                        data-type="dropdown"
                      >
                        <select
                          className="facetwp-dropdown"
                          onChange={(e) => setValue(e.target.value)}
                        >
                          <option value="">Branche</option>
                          <option value="industrie">Industrie (21)</option>
                          <option value="fahrer">Fahrer (9)</option>
                          <option value="logistik">Logistik (8)</option>
                          <option value="metall">Metall (8)</option>
                          <option value="handwerk">Handwerk (7)</option>
                          <option value="kaufleute">Kaufleute (5)</option>
                          <option value="mechatroniker">
                            Mechatroniker (5)
                          </option>
                          <option value="nutzfahrzeuge">
                            Nutzfahrzeuge (5)
                          </option>
                          <option value="kaufmann">Kaufmann (4)</option>
                          <option value="mechaniker">Mechaniker (4)</option>
                          <option value="schlosser">Schlosser (4)</option>
                          <option value="telekommunikation">
                            Telekommunikation (4)
                          </option>
                          <option value="kfz">Kfz (3)</option>
                          <option value="lager">Lager (3)</option>
                          <option value="maler-und-lackierer">
                            Maler und Lackierer (3)
                          </option>
                          <option value="produktion">Produktion (3)</option>
                          <option value="technik">Technik (3)</option>
                          <option value="transport">Transport (3)</option>
                          <option value="verlader">Verlader (3)</option>
                          <option value="elektro">Elektro (2)</option>
                          <option value="finanz-und-rechnungswesen">
                            Finanz- und Rechnungswesen (2)
                          </option>
                          <option value="gesundheit">Gesundheit (2)</option>
                          <option value="it">IT (2)</option>
                          <option value="pflegedienst">Pflegedienst (2)</option>
                          <option value="schweisser">Schweißer (2)</option>
                          <option value="werkzeug">Werkzeug (2)</option>
                          <option value="werkzeugmacher">
                            Werkzeugmacher (2)
                          </option>
                          <option value="buchhaltung">Buchhaltung (1)</option>
                          <option value="call-center">Call-Center (1)</option>
                          <option value="chemie">Chemie (1)</option>
                          <option value="garten-und-landschaftsbau">
                            Garten- und Landschaftsbau (1)
                          </option>
                          <option value="handel">Handel (1)</option>
                          <option value="industriefachkraefte">
                            Industriefachkräfte (1)
                          </option>
                          <option value="kommission">Kommission (1)</option>
                          <option value="kundenbetreuer">
                            Kundenbetreuer (1)
                          </option>
                          <option value="maschinen">Maschinen (1)</option>
                          <option value="maschinenbautechniker">
                            Maschinenbautechniker (1)
                          </option>
                          <option value="monteur">Monteur (1)</option>
                          <option value="pflege">Pflege (1)</option>
                          <option value="qualitaetsinspektoren">
                            Qualitätsinspektoren (1)
                          </option>
                          <option value="sachbearbeiter">
                            Sachbearbeiter (1)
                          </option>
                          <option value="sanitaer">Sanitär (1)</option>
                          <option value="umzug">Umzug (1)</option>
                          <option value="verkauf">Verkauf (1)</option>
                          <option value="verpacker">Verpacker (1)</option>
                          <option value="vorrichterin">
                            Vorrichter/in (1)
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="medium-6 column">
                      <div className="facetwp-sort">
                        <select className="facetwp-sort-select">
                          <option value="default">Sortieren nach</option>
                          <option value="title_asc">Titel (A-Z)</option>
                          <option value="title_desc">Titel (Z-A)</option>
                          <option value="date_desc">Datum (Neueste)</option>
                          <option value="date_asc">Datum (älteste)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="facetwp-template" data-name="jobs">
              <ul className="job-list">
                {filteredData?.length >= 1 &&
                  filteredData?.map((jobs, i) => {
                    return <JobCard jobs={jobs} key={i} />;
                  })}
              </ul>
            </div>
          </div>
        </div>
        <CurrentJob />
      </div>
    </>
  );
};
