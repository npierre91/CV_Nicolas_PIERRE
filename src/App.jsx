import "./App.css";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Blog from "./Blog";
import CurriculumVita from "./CurriculumVita";
import IntlProvider from "./CurriculumVita/context/IntlProvider";
import PhotoPortfolio from "./PhotoPortfolio";

// import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <IntlProvider>
          <Routes>
            <Route element={<CurriculumVita />} path='/' />
            <Route element={<PhotoPortfolio />} path='/portfolio' />
            <Route element={<Blog />} path='blog' />
            <Route element={<Navigate replace to="/" />} path='*' />
          </Routes>
        </IntlProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
