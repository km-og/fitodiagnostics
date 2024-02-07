import "./Promo.css";
import petri from "../../images/titlejpg.webp";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";

function Promo() {
  return (
    <section className="promo">
      <ScrollToTopOnMount />
      <div className="promo__bg_el_gradient"></div>
      <img className="promo__img" src={petri} alt="Чашка Петри" />
      <h1 className="promo__title">
        fito <br />
        diagnostics
      </h1>
      <div className="promo__texts">
        <p className="promo__subtitle">
          У нас вы можете заказать услуги по определению фитопатогенов в
          растительном материале или купить тест-системы для самостоятельного
          обнаружения патогенов методом ПЦР.
        </p>
        <div className="promo__links">
          <Link to="#services" className="promo__link">
            Заказать услуги
          </Link>
          <Link to="#purchase" className="promo__link ">
            Купить тест-системы
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Promo;
