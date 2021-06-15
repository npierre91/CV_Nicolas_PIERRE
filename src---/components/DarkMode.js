import React from "react";
import { useState } from "react";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";

const DarkMode = () => {
  // const [themeMode, setThemeMode] = useState(
  //   localStorage.getItem("theme") ?? "light"
  // );
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  // let theme = themeMode;
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme")
    // setThemeMode(theme);
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }
    // setThemeMode(theme);

  const getIcon = (theme) => {
    return theme === lightTheme ? (
      <Brightness2OutlinedIcon />
    ) : (
      <WbSunnyOutlinedIcon />
    );
  }
  let icon = getIcon(theme);

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
    icon = getIcon(theme);
    e.target.text = icon;
    // setThemeMode(theme);
  };

  // console.log(theme, themeMode);
  // const icon = (themeMode === "light" && theme === "light") ? <Brightness2OutlinedIcon /> : <WbSunnyOutlinedIcon />
    
    

  return (
    <button onClick={(e) => switchTheme(e)}>
      {icon}
    </button>
  );
};

export default DarkMode;
