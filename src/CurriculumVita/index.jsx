import FormationsExperiences from "./components/Main/FormationsExperiences";
import Profile from "./components/Main/Profile";
import ExternalLinks from "./components/Sidebar/ExternalLinks";
import LanguageSelector from "./components/Sidebar/LocaleSelector/LocaleSelector";
import Skills from "./components/Sidebar/Skills";
import User from "./components/Sidebar/User";

const CurriculumVita = () => {
  return (
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
  )
}

export default CurriculumVita