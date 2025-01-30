import React from 'react';

import LandingPage from "./LandingPage/landingPage";
import NavBar from "./NavBar/navBar"
import "./index.css";
import SecondPage from './SecondPage/secondPage';


const MenuPage = () => {
    const [currentPage, setCurrentPage] = React.useState(null)
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div className="main-menu-grid__container">
            <div className="main-menu-sidebar">
                <NavBar />
            </div>
            <LandingPage />
            <SecondPage />
        </div>
    )
}

export default MenuPage