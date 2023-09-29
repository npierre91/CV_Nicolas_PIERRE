import "./App.css";
import User from "./components/User";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import FormationsExperiences from "./components/FormationsExperiences";
import ExternalLinks from "./components/ExternalLinks";
import { BrowserRouter } from "react-router-dom";
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
