import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "common/components/Banner";
import { MainSearch } from "common/components/Main-search";
import { BlogCard } from "common/components/Blog-card";
import { blogs } from "mock/blog";
import { TestimonialCard } from "common/components/Testimonial-card";
import { CurrentJob } from "app/applicants/CurrentJob";

import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-sponsoring-9.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-sponsoring_mobile-2.jpg";
import gameImg from "assets/slide/0565a1a3-83f1-45f3-b468-f5944c0aa3b5.jpg";
export const ChineseSponsoring = () => {
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
          <span>Sponsoring – Chinese Boxing Akademie Köln</span>
        </span>
      </div>
      <div className="row">
        <div className="medium-8 tablet-portrait-12">
          <h1 className="section-title">
            Sponsoring – wir unterstützen den Sport
          </h1>
          <div className="box">
            <p className="p1">
              <span className="s1">
                <strong>
                  Wir brauchen keine langen Texte. Wir sind Sponsor der{" "}
                  <a
                    href="http://www.chinese-boxing-koeln.de/news/news_190413_ankuendigung.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    &#8222;Fight Night&#8220;
                  </a>{" "}
                  welche am 13.04.2019 starten wird.
                </strong>{" "}
                Aufgrund der Tatsache, dass mir diese Kampfsportschule und die
                Art des
              </span>{" "}
              Sifus,{" "}
              <span className="s1">
                die Schüler zu trainieren und zu behandeln sehr zusagt, sponsore
                ich diese Schule. In dieser Schule gelten noch die alten guten
                chinesischen Traditionen: Disziplin, Selbstbeherrschung und Mut,
                eine zentrale Rolle. Zudem sind mir einige Kämpfer persönlich
                bekannt und geschätzt, vor allem{" "}
              </span>
              „Ertan Bicakci“.
            </p>
            <p className="p1">
              <span className="s1" style={{ color: "#f7a600" }}>
                <b>Fight Night am 13.04.2019</b>
              </span>
            </p>
            <p className="p1">
              <em>
                <a href={gameImg} target="_blank" rel="noreferrer">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-1441 size-full"
                    src={gameImg}
                    alt="Fight Night"
                    width="1144"
                    height="1600"
                    sizes="(max-width: 1144px) 100vw, 1144px"
                  />
                </a>
              </em>
            </p>
            <p className="p1">
              <strong>
                <span className="s1">Weitere Links:</span>
              </strong>
            </p>
            <p className="p1">
              <em>
                <span className="s2">
                  <a
                    href="http://www.chinese-boxing-koeln.de/news/news_190413_ankuendigung.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.chinese-boxing-koeln.de/sifu-nihat-atamtuerk.html
                    <br />
                  </a>
                </span>
              </em>
              <em>
                <span className="s2">
                  <br />
                </span>
              </em>
            </p>
            <p className="p1">
              <em>                                               </em>
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
