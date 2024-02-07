import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../icons/logo.svg";
import vk from "../../icons/vk.svg";
import mail from "../../icons/mail.svg";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__wrapper">
        <NavLink to="/" className="footer__link ">
          <img src={logo} alt="логотип" className="footer__logo" />
        </NavLink>
        <a href="tel:+78003025534" className="footer__tel ">
          +7 (923) 222-14-04
          <span className="footer__department">Контактный телефон</span>
        </a>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://vk.com/fitodiagnostika"
              target="_blank"
              rel="noreferrer"
              className="footer__link "
            >
              <img src={vk} alt="Vk" className="footer__icon" />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="mailto:grigory.tchepurnov@yandex.ru"
              target="_blank"
              rel="noreferrer"
              className="footer__link "
            >
              <img src={mail} alt="mail" className="footer__icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
