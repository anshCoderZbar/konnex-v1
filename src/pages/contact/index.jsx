import { ContactForm } from "app/contact/ContactForm";
import { BlogCard } from "common/components/Blog-card";
import { ContactCard } from "common/components/Contact-card";
import { TestimonialCard } from "common/components/Testimonial-card";
import { blogs } from "mock/blog";
import React from "react";
import { Link } from "react-router-dom";

export const ContactPage = () => {
  return (
    <div id="content" className="site-content">
      <div id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          <div id="main-breadcrumb" className="breadcrumbs">
            <span>
              <Link
                to="/home"
                title="Gehe zu KONNEX Zeitarbeit GmbH – Köln."
                className="home"
              >
                KONNEX Zeitarbeit GmbH – Köln
              </Link>
            </span>
            <span>
              <span>Kontakt</span>
            </span>
          </div>
          <div className="row">
            <div className="medium-8 tablet-portrait-12 column">
              <h1 className="section-title">Kontakt</h1>
              <div className="box">
                <p>
                  <strong>Wir sind für Sie da – nehmen Sie Kontakt auf!</strong>
                </p>
                <p>
                  Sie haben Fragen? Sie suchen einen neuen Job? Sie
                  interessieren sich für Zeitarbeit und Arbeitnehmerüberlassung?
                  Sie wollen mehr über Master-Vendor-Modelle und
                  On-Site-Management erfahren?
                </p>
                <p>
                  Dann nehmen Sie Kontakt mit uns auf. Wir freuen uns auf Ihre
                  E-Mail an
                  <a href="mailto:info@konnex-zeitarbeit.de">
                    info@konnex-zeitarbeit.de
                  </a>
                  oder Ihren Anruf!
                </p>
                <ContactForm />
              </div>
            </div>
            <ContactCard />
            <BlogCard blog={blogs} />
          </div>
        </main>
        <TestimonialCard />
      </div>
    </div>
  );
};
