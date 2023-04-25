import React, { Component } from "react";

class ThemeSwitcher extends Component {
  // Config
  _scheme = "auto";
  menuTarget = "details[role='list']";
  buttonsTarget = "button[data-theme-switcher]";
  buttonAttribute = "data-theme-switcher";
  rootAttribute = "data-theme";
  localStorageKey = "picoPreferredColorScheme";

  // Init
  componentDidMount() {
    this.scheme = this.schemeFromLocalStorage;
    this.initSwitchers();
  }

  // Get color scheme from local storage
  get schemeFromLocalStorage() {
    if (typeof window.localStorage !== "undefined") {
      if (window.localStorage.getItem(this.localStorageKey) !== null) {
        return window.localStorage.getItem(this.localStorageKey);
      }
    }
    return this._scheme;
  }

  // Preferred color scheme
  get preferredColorScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  // Init switchers
  initSwitchers() {
    const buttons = document.querySelectorAll(this.buttonsTarget);
    buttons.forEach((button) => {
      button.addEventListener("click", this.handleButtonClick, false);
    });
  }

  // Handle button click
  handleButtonClick = (event) => {
    event.preventDefault();
    // Set scheme
    this.scheme = event.target.getAttribute(this.buttonAttribute);
    // Close dropdown
    document.querySelector(this.menuTarget).removeAttribute("open");
  };

  // Set scheme
  set scheme(scheme) {
    if (scheme === "auto") {
      this.preferredColorScheme === "dark" ? (this._scheme = "dark") : (this._scheme = "light");
    } else if (scheme === "dark" || scheme === "light") {
      this._scheme = scheme;
    }
    this.applyScheme();
    this.schemeToLocalStorage();
  }

  // Get scheme
  get scheme() {
    return this._scheme;
  }

  // Apply scheme
  applyScheme() {
    document.querySelector("html").setAttribute(this.rootAttribute, this.scheme);
  }

  // Store scheme to local storage
  schemeToLocalStorage() {
    if (typeof window.localStorage !== "undefined") {
      window.localStorage.setItem(this.localStorageKey, this.scheme);
    }
  }

  // Render
  render() {
    return null;
  }
}

export default ThemeSwitcher;
