import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CurriculumVita from "./CurriculumVita";
import IntlProvider from "./CurriculumVita/context/IntlProvider";
import GamingRank from "./GamingRank";
// import { Preview, print } from "react-html2pdf";
// import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

function App() {
  return (
    <BrowserRouter>
      <IntlProvider>
        <Routes>
          <Route element={<CurriculumVita />} path='/' />
          <Route element={<GamingRank />} path='/gaming-rank' />
        </Routes>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
