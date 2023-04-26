import React, { useState } from "react";
import { formState } from "./validation";

export const ContactForm = () => {
  const [formData, setFormData] = useState(formState);
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="wpcf7 no-js" id="wpcf7-f459-o1" lang="de-DE" dir="ltr">
      <div className="screen-reader-response">
        <p role="status" aria-live="polite" aria-atomic="true"></p>
        <ul></ul>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <p>
          Name, Vorname
          <br />
          <span className="wpcf7-form-control-wrap" data-name="your-name">
            <input
              onChange={handleChange}
              value={formData?.name}
              name="name"
              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              type="text"
            />
          </span>
        </p>
        <p>
          E-Mail-Adresse
          <br />
          <span className="wpcf7-form-control-wrap">
            <input
              onChange={handleChange}
              value={formData?.email}
              name="email"
              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
              type="email"
            />
          </span>
        </p>
        <p>
          Betreff
          <br />
          <span className="wpcf7-form-control-wrap">
            <input
              onChange={handleChange}
              value={formData?.regarding}
              name="regarding"
              className="wpcf7-form-control wpcf7-text"
              type="text"
            />
          </span>
        </p>
        <p>
          Ihre Nachricht
          <br />
          <span className="wpcf7-form-control-wrap" data-name="your-message">
            <textarea
              name="yourMessage"
              onChange={handleChange}
              value={formData?.yourMessage}
              cols="40"
              rows="10"
              className="wpcf7-form-control wpcf7-textarea"
            ></textarea>
          </span>
        </p>

        <p>
          <span className="wpcf7-form-control-wrap" data-name="acceptance-527">
            <span className="wpcf7-form-control wpcf7-acceptance">
              <span className="wpcf7-list-item">
                <input
                  type="checkbox"
                  name="checked"
                  onChange={() => setChecked(!checked)}
                />
              </span>
            </span>
          </span>
          Bitte lesen und bestätigen Sie unsere
          <a href="../datenschutz/index.html">Datenschutzerklärung</a>
          vor dem Absenden des Kontaktformulars. Es gelten die
          <a href="../datenschutz/index.html">Datenschutzerklärungen</a>
          der KONNEX Zeitarbeit GmbH
        </p>
        <div className="text-center">
          <p>
            <input
              className="wpcf7-form-control has-spinner wpcf7-submit ghost-btn"
              type="submit"
              value="Senden"
              disabled={!checked ? true : false}
            />
          </p>
        </div>
        <div className="wpcf7-response-output" aria-hidden="true"></div>
      </form>
    </div>
  );
};
