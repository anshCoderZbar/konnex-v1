import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PublicRoutes from "./public";
import Home from "pages/Home";
import { ContactPage } from "pages/contact";
import { Advantages } from "pages/applicants/Advantages";
import { Jobs } from "pages/applicants/Jobs";
import { ApplyNow } from "pages/applicants/ApplyNow";
import { CurrentPage } from "pages/current";
import { SingleJobPage } from "pages/applicants/SingleJobPage";
import { CompaniesAdvantages } from "pages/companies/CompaniesAdvantages";
import { TemporaryWork } from "pages/companies/TemporaryWork";
import { Recruitment } from "pages/companies/Recruitment";
import { OnSiteManagement } from "pages/companies/OnSiteManagement";
import { Outsourcing } from "pages/companies/Outsourcing";
import { MasterVendorManagement } from "pages/companies/MasterVendorManagement";
import { Philosophy } from "pages/konnex/Philosophy";
import { History } from "pages/konnex/History";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicRoutes>
              <ContactPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/advantages"
          element={
            <PublicRoutes>
              <Advantages />
            </PublicRoutes>
          }
        />
        <Route
          path="/jobs"
          element={
            <PublicRoutes>
              <Jobs />
            </PublicRoutes>
          }
        />
        <Route
          path="/jobs/:slug"
          element={
            <PublicRoutes>
              <SingleJobPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/apply-now"
          element={
            <PublicRoutes>
              <ApplyNow />
            </PublicRoutes>
          }
        />
        <Route
          path="/current"
          element={
            <PublicRoutes>
              <CurrentPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/company-advantages"
          element={
            <PublicRoutes>
              <CompaniesAdvantages />
            </PublicRoutes>
          }
        />
        <Route
          path="/temporary-work"
          element={
            <PublicRoutes>
              <TemporaryWork />
            </PublicRoutes>
          }
        />
        <Route
          path="/recruitment"
          element={
            <PublicRoutes>
              <Recruitment />
            </PublicRoutes>
          }
        />
        <Route
          path="/on-site-management"
          element={
            <PublicRoutes>
              <OnSiteManagement />
            </PublicRoutes>
          }
        />
        <Route
          path="/outsourcing"
          element={
            <PublicRoutes>
              <Outsourcing />
            </PublicRoutes>
          }
        />
        <Route
          path="/master-vendor-management"
          element={
            <PublicRoutes>
              <MasterVendorManagement />
            </PublicRoutes>
          }
        />
        <Route
          path="/philosophy"
          element={
            <PublicRoutes>
              <Philosophy />
            </PublicRoutes>
          }
        />
        <Route
          path="/values-and-history"
          element={
            <PublicRoutes>
              <History />
            </PublicRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
