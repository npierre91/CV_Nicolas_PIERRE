import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { collapseSidebar } = useProSidebar()
    const navigate = useNavigate()
    return (
        <Sidebar defaultCollapsed={true} style={{ height: "100vh", display: "flex" }}>
            <Menu>
                <MenuItem
                    icon={<MenuIcon />}
                    style={{ textAlign: "center" }}
                    onClick={() => { collapseSidebar() }}>
                    {" "}
                    <b>Menu</b>
                </MenuItem>
                <MenuItem
                    icon={<HomeIcon />}
                    onClick={() => { navigate("/main-menu") }}>
                    {" "}
                    <u>Home</u>
                </MenuItem>
                <MenuItem
                    icon={<AccountCircleIcon />}
                    onClick={() => { navigate("/cv") }}>
                    {" "}
                    <u>Profile</u>
                </MenuItem>
            </Menu >
        </Sidebar>
    )
}


export default NavBar