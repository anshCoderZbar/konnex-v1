import React, { useState } from "react";
import { applyFormState, applyFormValidation } from "./validation";
import { CustomeDate } from "common/components/Custome-Date";

export const ApplyForm = () => {
  const [formData, setFormData] = useState(applyFormState);
  const [errors, setErrors] = useState({});
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, birthDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(applyFormValidation(formData));
    if (Object.keys(applyFormValidation(formData)).length < 1) {
      console.log(formData);
    }
  };

  return (
    <form className="wpcf7-form init" onSubmit={handleSubmit} noValidate>
      <p>
        <br />
        Bewerbung als<span className="yellow-text">*</span>
        <br />
        <span className="wpcf7-form-control-wrap">
          <input
            onChange={handleChange}
            value={formData?.applicationAs}
            name="applicationAs"
            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
            type="text"
          />
          <span className="errorMessage">
            {errors.applicationAs && errors.applicationAs}
          </span>
        </span>
      </p>
      <p>
        Name, Vorname<span className="yellow-text">*</span>
        <br />
        <span className="wpcf7-form-control-wrap">
          <input
            onChange={handleChange}
            value={formData?.userName}
            name="userName"
            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
            type="text"
          />
          <span className="errorMessage">
            {errors.userName && errors.userName}
          </span>
        </span>
      </p>
      Geburtsdatum
      <br />
      <span className="wpcf7-form-control-wrap">
        <CustomeDate
          name="birthDate"
          onChange={handleDateChange}
          value={formData.birthDate}
        />
      </span>
      <p>
        Straße, Hausnummer<span className="yellow-text">*</span>
        <br />
        <span className="wpcf7-form-control-wrap">
          <input
            onChange={handleChange}
            value={formData?.houseNo}
            name="houseNo"
            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
            type="text"
          />
          <span className="errorMessage">
            {errors.houseNo && errors.houseNo}
          </span>
        </span>
      </p>
      <p>
        PLZ<span className="yellow-text">*</span>
        <br />
        <span className="wpcf7-form-control-wrap">
          <input
            onChange={handleChange}
            value={formData?.zip}
            name="zip"
            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
            type="text"
          />
          <span className="errorMessage">{errors.zip && errors.zip}</span>
        </span>
      </p>
      <p>
        Ort<span className="yellow-text">*</span>
        <br />
        <span className="wpcf7-form-control-wrap">
          <input
            onChange={handleChange}
            value={formData?.place}
            name="place"
            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
            type="text"
          />
          <span className="errorMessage">{errors.place && errors.place}</span>
        </span>
      </p>
      <p>
        Telefon oder Mobilnummer<span className="yellow-text">*</span>
        <br />
        <span className="wpcf7-form-control-wrap">
          <input
            onChange={handleChange}
            value={formData?.mobileNO}
            name="mobileNO"
            className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
            type="tel"
          />
        </span>
      </p>
      <p>
        E-Mail-Adresse<span className="yellow-text">*</span>
        <br />
        <span className="wpcf7-form-control-wrap">
          <input
            onChange={handleChange}
            value={formData?.email}
            name="email"
            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
            type="email"
          />
          <span className="errorMessage">{errors.email && errors.email}</span>
        </span>
      </p>
      <p>
        Berufliche Qualifikationen / Lebenslauf
        <br />
        <span className="wpcf7-form-control-wrap">
          <textarea
            onChange={handleChange}
            value={formData?.profession}
            name="profession"
            cols="40"
            rows="10"
            className="wpcf7-form-control wpcf7-textarea"
          ></textarea>
        </span>
      </p>
      <p>Optional Lebenslauf anhängen (.pdf, .doc oder .docx, max. 5MB)</p>
      <span className="custom-file-upload">
        <p className="file-upload-wrapper">
          <input
            onChange={handleChange}
            name="document"
            id="fileUpload"
            htmlFor="fileUpload"
            type="file"
            className="custom-file-upload-hidden"
            tabIndex="-1"
          />
          <input
            type="text"
            className="file-upload-input"
            readOnly
            value={formData?.document}
          />
          <label
            id="fileUpload"
            htmlFor="fileUpload"
            className="file-upload-button"
          >
            Datei auswählen
          </label>
        </p>
      </span>
      <p>
        Führerscheinklasse
        <br />
        <span className="wpcf7-form-control-wrap">
          <input
            onChange={handleChange}
            value={formData?.drivingLicence}
            name="drivingLicence"
            className="wpcf7-form-control wpcf7-text"
            type="text"
          />
        </span>
      </p>
      <p>
        Staplerschein
        <br />
        <span className="wpcf7-form-control-wrap">
          <input
            onChange={handleChange}
            value={formData?.forkliftLicense}
            name="forkliftLicense"
            className="wpcf7-form-control wpcf7-text"
            type="text"
          />
        </span>
      </p>
      <p>
        Sonstige Mitteilungen
        <br />
        <span className="wpcf7-form-control-wrap">
          <textarea
            cols="40"
            rows="10"
            onChange={handleChange}
            value={formData?.messages}
            name="messages"
            className="wpcf7-form-control wpcf7-textarea"
          ></textarea>
        </span>
      </p>
      <input
        className="wpcf7-form-control wpcf7-hidden"
        value="info@konnex-Zeitarbeit.de"
        type="hidden"
        name="job-editor"
      />
      <div className="yellow-text">
        <p>*Pflichtfelder</p>
      </div>
      <p>
        <span className="wpcf7-form-control-wrap">
          <span className="wpcf7-form-control wpcf7-acceptance">
            <span className="wpcf7-list-item">
              <input type="checkbox" onChange={() => setChecked(!checked)} />
            </span>
          </span>
        </span>
        Bitte lesen und bestätigen Sie unsere
        <a href="../datenschutz/index.html">Datenschutzerklärung</a>
        vor dem Absenden des Bewerbungsformulars. Es gelten die
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
    </form>
  );
};
