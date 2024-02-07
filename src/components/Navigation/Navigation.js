import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ handleClick }) {
  return (
    <>
      <div className="navigation">
        <button
          type="button"
          aria-label="Закрыть"
          className="navigation__btn cursor"
          onClick={handleClick}
        ></button>
        <nav>
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                to={{
                  pathname: "/#services",
                }}
                className="navigation__link link"
              >
                Услуги
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                to={{
                  pathname: "/#purchase",
                }}
                className="navigation__link link"
              >
                Тест-системы
              </Link>
            </li>
            <li className="navigation__item">
              <a
                href="/aboutUs"
                className="navigation__link link"
                onClick={handleClick}
              >
                О нас
              </a>
            </li>

            <li className="navigation__item">
              <a
                href="#contact"
                className="navigation__link link"
                onClick={handleClick}
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
