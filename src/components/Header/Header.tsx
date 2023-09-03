import "./_header.scss";
import SwitchButton from "../SwitchButton/SwitchButton";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logoSection">
          <img className="headerLogo" src="/src/assets/logo.svg" alt="" />
          <span className="headerTitle"> Blog</span>
        </div>
        <SwitchButton></SwitchButton>
      </header>
    </>
  );
};
export default Header;
