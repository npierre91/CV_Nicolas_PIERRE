import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import FormationsExperiences from "./components/Main/FormationsExperiences";
import Profile from "./components/Main/Profile";
import ExternalLinks from "./components/Sidebar/ExternalLinks";
import LanguageSelector from "./components/Sidebar/LocaleSelector/LocaleSelector";
import Skills from "./components/Sidebar/Skills";
import User from "./components/Sidebar/User";
import IntlProvider from "./context/IntlProvider";
// import { Preview, print } from "react-html2pdf";
// import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

function App() {
  return (
    <BrowserRouter>
      <IntlProvider>
        <div className="App">
          <div className="grid__container">
            <div className="sidebar">
              <div className="actions">
                <LanguageSelector />
                {/* {<button onClick={()=>{}}><LanguageSelector /></button>} */}
                {/* <button onClick={() => print('CV-Nicolas-PIERRE', 'pdf')}><PictureAsPdfIcon /></button> */}
              </div>
              <User />
              <Skills />
              <ExternalLinks />
            </div>
            <div className="main">
              <Profile />
              <FormationsExperiences />
            </div>
          </div>
        </div>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
