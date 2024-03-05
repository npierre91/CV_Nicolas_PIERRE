import React from 'react';
import ReactPageScroller from 'react-page-scroller';

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
            <ReactPageScroller pageOnChange={handlePageChange}>
                <LandingPage />
                <SecondPage />
            </ReactPageScroller>
        </div>
    )
}

export default MenuPage