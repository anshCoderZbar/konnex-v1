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

export const Outsourcing = () => {
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
                    <span>Outsourcing</span>
                </span>
            </div>
            <div className="row">
                <div className="medium-8 tablet-portrait-12">
                    <h1 className="section-title">
                        Outsourcing – auf das Wesentliche konzentrieren
                    </h1>
                    <div className="box">

                        <p><strong>Was ist wirklich wichtig?</strong> Wo liegen meine Stärken? Sind diese beiden Fragen geklärt, gewinnt ein Unternehmen an Stärke und Effizienz. Je höher der Kostendruck, desto wichtiger ist die Konzentration auf das Kerngeschäft: Entscheidungsträger werden von unwesentlichen Managementaufgaben entlastet und können sich endlich wieder auf ihre eigentlichen Aufgaben und Stärken konzentrieren. Mit strategisch klugem Outsourcing verbessern Sie die eigene Wettbewerbsposition und erreichen eine stärkere Differenzierung am Markt.</p>
                        <p><strong>Kernkompetenzen stärken</strong></p>
                        <p><a href="../werte-und-geschichte/index.html">KONNEX Zeitarbeit</a> unterstützt Sie dabei, einzelne Tätigkeiten oder ganze Geschäftsbereiche erfolgreich auszulagern. Auf Wunsch analysieren wir gemeinsam mit Ihnen, welche Leistungen Ihr Unternehmen effektiv über den freien Markt beziehen kann. Prinzipiell lassen sich fast alle Geschäftsprozesse outsourcen, die nicht zu den Kernkompetenzen zählen. Wir beraten Sie individuell und begleiten Sie durch den Outsourcing-Prozess.</p>
                        <p><strong>Weitere Personaldienstleistungen</strong></p>
                        <p>Ein Outsourcing ist aus verschiedenen Gründen nicht möglich? Gemeinsam mit Ihnen finden wir eine sinnvolle Personal-Lösung. Wir unterstützen Sie aktiv bei der Entscheidungsfindung und erörtern die Argumente, die für und gegen Outsourcing oder Arbeitnehmerüberlassung sprechen. Vielleicht liegt die optimale Lösung in der klassischen Arbeitnehmerüberlassung oder einem <a href="../on-site-management/index.html">On-Site-Management</a>.</p>
                    </div>
                </div>
                <ContactCard />
            </div>
            <BlogCard blog={blogs} />
            <TestimonialCard />
        </>
    );
};
