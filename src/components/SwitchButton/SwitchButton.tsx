import { useState, useEffect } from "react";
import "./_switchButton.scss";
const SwitchButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");

    if (darkMode === true) {
      body.classList.add("dark-mode");
      toggle?.classList.add("toggle-active");
    } else {
      body.classList.remove("dark-mode");
      toggle?.classList.remove("toggle-active");
    }
  }, [darkMode]);
  return (
    <>
      <div
        id="toggle"
        onClick={() =>
          darkMode === false ? setDarkMode(true) : setDarkMode(false)
        }
      >
        <div className="toggle-inner" />
        <img
          className="toggle-darkModeIcon"
          src="src/assets/icons/darkMode-icon.svg"
          alt=""
        />
        <img
          className="toggle-lightModeIcon"
          src="src/assets/icons/lightMode-icon.svg"
          alt=""
        />
      </div>
    </>
  );
};
export default SwitchButton;
