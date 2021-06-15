import React, { Component } from "react";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";

class DarkMode extends Component {
  constructor() {
    super();
    this.lightTheme = "light";
    this.darkTheme = "dark";
    this.theme = localStorage.getItem("theme") ?? "light";
    document.body.classList.add(this.theme);
    this.state = {
      text: this.theme === this.lightTheme ? <WbSunnyOutlinedIcon /> : <Brightness2OutlinedIcon />,
    };
  }

  toggleTheme = (e) => {
    let { lightTheme, darkTheme, theme } = this;
    if (theme === darkTheme) {
      document.body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", "light");
      this.theme = lightTheme;
    } else {
      document.body.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", "dark");
      this.theme = darkTheme;
    }
    this.setState({
      text: this.theme === this.lightTheme ? <WbSunnyOutlinedIcon /> : <Brightness2OutlinedIcon />,
    });
  };

  render() {
    return (
      <button id="darkMode" onClick={(e) => this.toggleTheme(e)}>
        {this.state.text}
      </button>
    );
  }
}

export default DarkMode;
