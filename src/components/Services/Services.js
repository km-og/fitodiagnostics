import "./Services.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="services__title">
        Услуги по определению наличия фитопатогенов в растительном материале
        методом ПЦР
      </h2>
      <div className="services__description">
        <p className="services__text">
          Чтобы воспользоваться услугой, пожалуйста, заполните нижележащую форму
          и выберете один, или несколько патогенов на наличие которых должен
          быть проверен высылаемый материал. Растительным материалом должны
          выступать пораженные органы растений (листья, плоды, стебли и т.д.).
          Вы можете отправить растительный материал любым удобным способом.
        </p>
        <p className="services__text">
          После заполнения заявки, с Вами свяжется менеджер компании для
          уточнения деталей оказываемой услуги. Стоимость диагностики одного
          фитопатогена составляет 2800 рублей.
        </p>
      </div>
      <FeedbackForm />
    </section>
  );
}

export default Services;
