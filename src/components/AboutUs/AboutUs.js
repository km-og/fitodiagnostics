import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import "./AboutUs.css";
import about from "../../images/about__photo.png";

function AboutUs() {
  return (
    <section className="about" id="aboutUs">
      <ScrollToTopOnMount />
      <div className="about__bg_el_gradient"></div>

      <div className="about__container">
        <div className="about__texts">
          <h2 className="about__title">О нас</h2>
          <p className="about__text">
            Компания «Фитодиагностика» предоставляет услуги в области
            ПЦР-диагностики возбудителей заболеваний растительных культур, а
            также предлагает к приобретению готовые наборы собственной
            разработки для самостоятельной диагностики инфекций профильными
            лабораториями и учреждениями.
          </p>
          <p className="about__text">
            Партнерами компании являются научные институты СО РАН и компании
            биологического профиля присутствующие на российском рынке более 15
            лет.
          </p>
          <p className="about__text">
            В компании работают сотрудники исследовательских институтов
            занимающихся разработками инновационных тест систем для растений,
            составляющих конкуренцию самым знаменитым производителям.
          </p>
        </div>
      </div>
      <img className="about__img" src={about} alt="о компании" />
    </section>
  );
}

export default AboutUs;
