import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "common/components/Banner";
import { MainSearch } from "common/components/Main-search";
import { BlogCard } from "common/components/Blog-card";
import { blogs } from "mock/blog";
import { TestimonialCard } from "common/components/Testimonial-card";
import { CurrentJob } from "app/applicants/CurrentJob";

import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-sponsoring.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-sponsoring_mobile.jpg";
import childrenImg from "assets/slide/konnex-zeitarbeit-koeln-krefeld-sc-koeln-muelheim-nord-1.jpg";
import adultImg from "assets/slide/konnex-zeitarbeit-koeln-krefeld-sc-koeln-muelheim-nord-2.jpg";
import logoImg from "assets/slide/konnex-zeitarbeit-koeln-krefeld-sc-koeln-muelheim-nord-logo.jpg";

export const SponshirShipPage = () => {

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
                    <span>Sponsoring – SC Köln-Mülheim Nord</span>
                </span>
            </div>
            <div className="row">
                <div className="medium-8 tablet-portrait-12   ">
                    <h1 className="section-title">
                        Sponsoring – wir unterstützen den Sport
                    </h1>
                    <div className="box">
                        <p>
                            <strong>
                                KONNEX Zeitarbeit fühlt sich den Menschen vor Ort eng verbunden.
                                Wir übernehmen gesellschaftliche Verantwortung und engagieren
                                uns über unsere eigentliche Geschäftstätigkeit hinaus.
                            </strong>{" "}
                            Im Rahmen unserer Corporate Citizenship unterstützen wir die
                            erfolgreiche Fußball-Mannschaft des{" "}
                            <a
                                href="http://www.xn--sc-kln-mlheim-nord-g3b8j.de/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SC Köln-Mülheim Nord
                            </a>
                            . Mit unserem Sponsoring leisten wir einen Beitrag zur besseren
                            Ausstattung des Vereins und tragen neben anderen Sorge dafür, dass
                            das Team an auswärtigen Turnieren teilnehmen kann.
                        </p>
                        <p>
                            <a href={childrenImg} target="_blank" rel="noreferrer">
                                <img
                                    decoding="async"
                                    loading="lazy"
                                    className="alignleft wp-image-746 size-full"
                                    src={childrenImg}
                                    alt="konnex-zeitarbeit-koeln-krefeld-sc-koeln-muelheim-nord-1"
                                    width="900"
                                    height="538"
                                    sizes="(max-width: 900px) 100vw, 900px"
                                />
                            </a>
                        </p>
                        <p>
                            <em>E1-Junioren-Mannschaft des SC Köln-Mülheim Nord</em>
                        </p>
                        <p>&nbsp;</p>
                        <p>
                            <strong>Aufstieg in Kreisliga A</strong>
                        </p>
                        <p>
                            Seit der Saison 2011/12 erlebt der Verein sportlichen Aufwind.
                            Maskottchen „Nordi Nordstrøm“ wurde ins Leben gerufen und ein
                            Vereinsmagazin informiert regelmäßig über die Aktivitäten des
                            Clubs. In der Saison 2013/14 stieg die erste Mannschaft als
                            Meister in die Kreisklasse A auf. Trainer der Mannschaft ist seit
                            Juli 2014 der ehemalige Bundesliga-Profi Markus Kurth, der unter
                            anderem für den 1. FC Köln und den MSV Duisburg spielte.
                        </p>
                        <p>
                            <a href={adultImg} target="_blank" rel="noreferrer">
                                <img
                                    decoding="async"
                                    loading="lazy"
                                    className="alignleft wp-image-747 size-full"
                                    src={adultImg}
                                    alt="konnex-zeitarbeit-koeln-krefeld-sc-koeln-muelheim-nord-2"
                                    width="900"
                                    height="538"
                                    sizes="(max-width: 900px) 100vw, 900px"
                                />
                            </a>
                        </p>
                        <p>
                            <em>A1-Junioren-Mannschaft des SC Köln-Mülheim Nord</em>
                        </p>
                        <p>&nbsp;</p>
                        <p>
                            <a href={logoImg} target="_blank" rel="noreferrer">
                                <img
                                    decoding="async"
                                    loading="lazy"
                                    className="alignleft wp-image-748 size-full"
                                    src={logoImg}
                                    alt="konnex-zeitarbeit-koeln-krefeld-sc-koeln-muelheim-nord-logo"
                                    width="900"
                                    height="538"
                                    sizes="(max-width: 900px) 100vw, 900px"
                                />
                            </a>
                            <br />
                            <em>
                                (links) Geschäftsführer Isa Yelen
                                <br />
                                (rechts) Wappen des SC Köln-Mülheim Nord

                            </em>
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
