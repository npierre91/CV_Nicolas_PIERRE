import "./App.css";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CurriculumVita from "./CurriculumVita";
import IntlProvider from "./CurriculumVita/context/IntlProvider";
import PhotoPortfolio from "./PhotoPortfolio";
// import { Preview, print } from "react-html2pdf";
// import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

function App() {
  return (
    <BrowserRouter>
      <IntlProvider>
        <Routes>
          <Route element={<CurriculumVita />} path='/' />
          <Route element={<PhotoPortfolio />} path='/portfolio' />
          <Route element={<Navigate replace to="/" />} path='*' />
        </Routes>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
