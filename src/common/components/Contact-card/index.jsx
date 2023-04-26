import React from "react";

export const ContactCard = () => {
  return (
    <div className="medium-4 tablet-portrait-12 column">
      <h3 className="section-title yellow">Sie haben Fragen?</h3>
      <div className="box sidebar-box yellow">
        <p className="yellow-text giant-text">
          Wir beraten
          <br />
          Sie persönlich:
        </p>
        <p className="blue-text bigger-text">
          Telefonisch unter:
          <br />
        </p>

        <p className="yellow-text">
          <span className="bigger-text">Köln</span>
          <br />
          <span className="blue-text giant-text">0221 35674 81</span>
        </p>
        <hr />
      </div>
    </div>
  );
};
