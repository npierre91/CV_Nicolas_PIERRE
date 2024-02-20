import "./App.css";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CurriculumVita from "./CurriculumVita";
import IntlProvider from "./CurriculumVita/context/IntlProvider";
import MenuPage from "./GlobalMenu";

function App() {
  return (
    <BrowserRouter>
      <IntlProvider>
        <Routes>
          <Route element={<MenuPage />} path='/' />
          <Route element={<CurriculumVita />} path='/cv' />
          <Route element={<Navigate replace to="/" />} path='*' />
        </Routes>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
