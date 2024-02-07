import "./Header.css";
import logo from "../../icons/logo.svg";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { Link, NavLink } from "react-router-dom";

function Header({ scrollToTop, isFixedMenu }) {
  const [isNavigationMenu, setIsNavigationMenu] = useState(false);

  function handleNavigationMenuShow() {
    setIsNavigationMenu(true);
  }

  function handleNavigationMenuHide() {
    setIsNavigationMenu(false);
  }
  return (
    <header className={`header ${isFixedMenu ? "header__fixed" : ""}`}>
      <div className="header__container">
        <NavLink to="/" className="header__link" onClick={scrollToTop}>
          <img className="header__logo" src={logo} alt="логотип" />
        </NavLink>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink to="/aboutUs" className="header__link link">
                О нас
              </NavLink>
            </li>
            <li className="header__item">
              <Link to="#contact" className="header__link link">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className="header__menu cursor"
          onClick={handleNavigationMenuShow}
        ></div>
        {isNavigationMenu ? (
          <Navigation handleClick={handleNavigationMenuHide} />
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
