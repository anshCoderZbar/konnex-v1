import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "common/components/Banner";

import { MainSearch } from "common/components/Main-search";
import { ContactCard } from "common/components/Contact-card";
import { BlogCard } from "common/components/Blog-card";
import { blogs } from "mock/blog";
import { TestimonialCard } from "common/components/Testimonial-card";

import desktop from "assets/slide/konnex-zeitarbeit-koeln-krefeld-qualitaet-sicherheit1.jpg";
import mobile from "assets/slide/konnex-zeitarbeit-koeln-krefeld-personalkonzept_certifikat.jpg";

export const Quality = () => {
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
                    <span>quality and safety</span>
                </span>
            </div>
            <div className="row">
                <div className="medium-8 tablet-portrait-12   ">
                    <h1 className="section-title">
                        KONNEX temporary work – quality and security
                    </h1>
                    <div className="box">
                        <p>
                            <strong>
                                Vertrauen ist gut, Kontrolle ist besser! Zeitarbeiter übernehmen
                                in einem Unternehmen oft Aufgaben von zentraler Bedeutung.
                            </strong>
                            Da sind hohe Professionalität und fachliches Know-how wichtig.
                            Beides garantieren wir durch interne Qualitätsprozesse, zum
                            Beispiel zum Arbeits- und Gesundheitsschutz.
                        </p>
                        <p>
                            <strong>Arbeitsmedizinische Untersuchungen</strong>
                        </p>
                        <p>
                            Unsere Arbeitnehmer werden arbeitsmedizinisch untersucht und
                            erfüllen die für ihren Einsatz relevanten gesetzlichen Vorgaben.
                            Die nach dem Arbeitsschutzgesetz vorgeschriebenen Maßnahmen dienen
                            der Vorbeugung und Früherkennung arbeitsbedingter Erkrankungen
                            sowie einer Eignungsprüfung – zum Beispiel bei Fahr- oder
                            Steuertätigkeiten.
                        </p>
                        <p>
                            <strong>
                                SGU-Leitlinien (Sicherheit-, Gesundheit- und Umweltschutz)
                            </strong>
                        </p>
                        <p>
                            Wir verpflichten alle Führungskräfte und Beschäftigten, die
                            Vorschriften und Vorgaben zum Umwelt- und Arbeitsschutz jederzeit
                            einzuhalten. Jeder Mitarbeiter soll seine Gesundheit und die
                            seiner Arbeitskollegen schützen. Bei allen betrieblichen
                            Handlungen wird darauf geachtet, Umweltverschmutzungen, Unfälle
                            und arbeitsbedingte Erkrankungen zu vermeiden.
                        </p>
                        <p>
                            <strong>Erlaubnis zur Überlassung von Arbeitnehmern</strong>
                        </p>
                        <p>
                            Unsere seit dem 4. Dezember 2009 geltende Erlaubnis zur
                            Überlassung von Arbeitnehmern wurde zum 4. Dezember 2013
                            unbefristet verlängert.
                        </p>
                        <p>
                            <strong>Mehrsprachige Betreuung</strong>
                        </p>
                        <p>
                            Wir stellen die Kommunikation mit allen Mitarbeitern, Bewerbern
                            und Kunden sicher. Die Unternehmenssprache bei der KONNEX
                            Zeitarbeit GmbH ist Deutsch. Bewerber können nur berücksichtigt
                            werden, wenn sie die deutsche Sprache ausreichend beherrschen, um
                            Arbeitsanweisungen zu verstehen, und in der Lage sind, die Inhalte
                            unserer Dokumente und Verträge zu verstehen.
                        </p>
                        <p>
                            Wir sprechen fließend deutsch, türkisch, englisch, französisch,
                            italienisch und niederländisch. So können wir gewährleisten, auch
                            mit Bewerbern mit Migrationshintergrund jederzeit verständlich zu
                            kommunizieren.
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
