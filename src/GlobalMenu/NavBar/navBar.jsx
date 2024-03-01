import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import CameraIcon from '@mui/icons-material/Camera';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from 'react-router-dom';

import { useTranslation } from '../../CurriculumVita/lib/intl';

const NavBar = () => {
    const { collapseSidebar } = useProSidebar()
    const navigate = useNavigate()
    const { t } = useTranslation()
    return (
        <Sidebar defaultCollapsed={true} style={{
            height: "100vh", "background-color": "black",

        }} width="200px">
            <Menu>
                <MenuItem
                    icon={<MenuIcon />}
                    style={{ textAlign: "center" }}
                    onClick={() => collapseSidebar()}>
                    {" "}
                    <b>{t("MAIN_MENU_MENU")}</b>
                </MenuItem>
                <MenuItem
                    icon={<HomeIcon />}
                    onClick={() => navigate("/main-menu")}>
                    {" "}
                    <u>{t("MAIN_MENU_HOME")}</u>
                </MenuItem>
                <MenuItem
                    icon={<AccountCircleIcon />}
                    onClick={() => navigate("/cv")}>
                    {" "}
                    <u>{t("MAIN_MENU_PROFILE")}</u>
                </MenuItem>
                <MenuItem
                    icon={<ArticleIcon />}
                    onClick={() => navigate("/blog")}>
                    {" "}
                    <u>Blog</u>
                </MenuItem>
                <MenuItem
                    icon={<CameraIcon />}
                    onClick={() => navigate("/photosphere")}>
                    {" "}
                    <u>Photosphere</u>
                </MenuItem>
            </Menu>
        </Sidebar>
    )
}


export default NavBar