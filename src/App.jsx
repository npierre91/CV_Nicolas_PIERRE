import "./App.css";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CurriculumVita from "./CurriculumVita";
import IntlProvider from "./CurriculumVita/context/IntlProvider";
import MenuPage from "./GlobalMenu";

function App() {
  return (
    <BrowserRouter>
      <IntlProvider>
        <ProSidebarProvider>
          <Routes>
            <Route element={<MenuPage />} path='/main-menu' />
            <Route element={<CurriculumVita />} path='/cv' />
            <Route element={<Navigate replace to="/main-menu" />} path='*' />
          </Routes>
        </ProSidebarProvider>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
