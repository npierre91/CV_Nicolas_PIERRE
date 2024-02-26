import LandingPage from "./LandingPage/landingPage";
import NavBar from "./NavBar/navBar"

import "./index.css";


const MenuPage = () => {
    return (
        <div className="main-menu-grid__container">
            <div className="main-menu-sidebar">
                <NavBar />
            </div>
            <div className="main-menu-main-page">
                <LandingPage />
            </div>
        </div>
    )
}

export default MenuPage