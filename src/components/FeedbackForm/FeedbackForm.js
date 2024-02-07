/* eslint-disable no-useless-escape */
import { useEffect, useState } from "react";
import FeedbackFormCheckboxes from "../FeedbackFormCheckboxes/FeedbackFormCheckboxes";
import { pathogens } from "../utils/constants";
import "./FeedbackForm.css";
import Preloader from "../Preloader/Preloader";
import * as sendData from "../SendData/SendData";
import { NavLink } from "react-router-dom";

function FeedbackForm() {
  const [isValidForm, setIsValidForm] = useState(false);
  const [isValidInputCompany, setIsValidInputCompany] = useState(true);
  const [isValidInputName, setIsValidInputName] = useState(true);
  const [isValidInputTel, setIsValidInputTel] = useState(true);
  const [isValidInputEmail, setIsValidInputEmail] = useState(false);
  const [isValidInputAgree, setIsValidInputAgree] = useState(false);
  const [isErrorTextForCompany, setIsErrorTextForCompany] = useState("");
  const [isErrorTextForName, setIsErrorTextForName] = useState("");
  const [isErrorTextForTel, setIsErrorTextForTel] = useState("");
  const [isErrorTextForEmail, setIsErrorTextForEmail] = useState("");
  const [isPreloader, setIsPreloader] = useState(false);

  const [formValue, setFormValue] = useState({
    company: "",
    userName: "",
    tel: "",
    email: "",
    sample: "",
    comment: "",
  });

  const [selectedPathogen, setSelectedPathogen] = useState({});

  function sendForm({ formValue, selectedPathogen }) {
    const { company, userName, tel, email, sample, comment } = formValue;
    sendData
      .sendData(
        company,
        userName,
        tel,
        email,
        sample,
        comment,
        selectedPathogen
      )
      .then((res) => {
        setIsPreloader(false);
        return res;
      })
      .catch((err) => {
        setIsPreloader(false);
      });
  }

  function handleChangeInputs(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handleChangeInputCompany(evt) {
    const validationMessage =
      "Имя должно содержать только латиницу, кириллицу, пробел или дефис.";
    if (/^[а-яА-ЯёЁA-Za-z\-\s\D]+$/.test(evt.target.value)) {
      setIsValidInputCompany(true);
      setIsErrorTextForCompany(evt.target.validationMessage);
      handleChangeInputs(evt);
      return;
    }
    setIsErrorTextForCompany(validationMessage);
    setIsValidInputCompany(false);
  }

  function handleChangeInputName(evt) {
    const validationMessage =
      "Имя должно содержать только латиницу, кириллицу, пробел или дефис.";
    if (/^[а-яА-ЯёЁA-Za-z\-\s\D]+$/.test(evt.target.value)) {
      setIsValidInputName(true);
      setIsErrorTextForName(evt.target.validationMessage);
      handleChangeInputs(evt);
      return;
    }
    setIsErrorTextForName(validationMessage);
    setIsValidInputName(false);
  }

  function handleChangeInputTel(evt) {
    const validationMessage = "Некорректный номер телефона";
    if (/\+*[\d-\(\)]{11,}/.test(evt.target.value)) {
      setIsValidInputTel(true);
      setIsErrorTextForTel(evt.target.validationMessage);
      handleChangeInputs(evt);
      return;
    }
    setIsErrorTextForTel(validationMessage);
    setIsValidInputTel(false);
  }

  function handleChangeInputEmail(evt) {
    const validationMessage = "Почта должна быть формата example@example.com";
    if (
      /^[\w]+[\.]?[-]?[\w]+@[\w]+[-]?[\w]+\.[a-zA-Z]{2,}$/.test(
        evt.target.value
      )
    ) {
      setIsValidInputEmail(true);
      setIsErrorTextForEmail(evt.target.validationMessage);
      handleChangeInputs(evt);
      return;
    }
    setIsErrorTextForEmail(validationMessage);
    setIsValidInputEmail(false);
  }

  function handleAgree(evt) {
    evt.target.checked
      ? setIsValidInputAgree(true)
      : setIsValidInputAgree(false);
  }

  function handleSelectPathogen(evt) {
    if (evt.target.checked) {
      setSelectedPathogen({
        ...selectedPathogen,
        [evt.target.name]: evt.target.labels[0].innerText,
      });
      return;
    }
    if (selectedPathogen[evt.target.name]) {
      delete selectedPathogen[evt.target.name];
      setSelectedPathogen(selectedPathogen);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidForm) {
      return;
    } else {
      setIsPreloader(true);
      sendForm({ formValue, selectedPathogen });
    }
  }

  useEffect(() => {
    function checkAllInputs() {
      isValidInputCompany &&
      isValidInputName &&
      isValidInputTel &&
      isValidInputEmail &&
      isValidInputAgree
        ? setIsValidForm(true)
        : setIsValidForm(false);
    }
    checkAllInputs();
  }, [
    isValidInputName,
    isValidInputEmail,
    isValidInputCompany,
    isValidInputTel,
    isValidInputAgree,
  ]);

  return (
    <div className="feedback">
      {isPreloader ? <Preloader /> : ""}
      <h3 className="feedback__title">Оставьте заявку и мы свяжемся с вами</h3>
      <form
        className="feedback__form"
        id="feedback"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="feedback__fieldsets">
          <fieldset className="feedback__fieldset">
            <label htmlFor="company" className="feedback__label">
              Наименование компании *
            </label>
            <input
              type="text"
              name="company"
              id="company"
              required
              minLength="2"
              maxLength="200"
              onChange={handleChangeInputCompany}
              className="feedback__input feedback__input_type_company"
            />
            <span className="feedback__input-error">
              {isErrorTextForCompany}
            </span>

            <label htmlFor="userName" className="feedback__label">
              ФИО контактного лица
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              minLength="2"
              maxLength="200"
              onChange={handleChangeInputName}
              className="feedback__input feedback__input_type_name"
            />
            <span className="feedback__input-error">{isErrorTextForName}</span>

            <label htmlFor="tel" className="feedback__label">
              Телефон контактного лица *
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              required
              minLength="2"
              maxLength="200"
              onChange={handleChangeInputTel}
              className="feedback__input feedback__input_type_tel"
            />
            <span className="feedback__input-error">{isErrorTextForTel}</span>

            <label htmlFor="email" className="feedback__label">
              E-mail контактного лица *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              minLength="2"
              maxLength="200"
              onChange={handleChangeInputEmail}
              className="feedback__input feedback__input_type_email"
            />
            <span className="feedback__input-error">{isErrorTextForEmail}</span>

            <label htmlFor="sample" className="feedback__label">
              Наименование образца
            </label>
            <input
              type="text"
              name="sample"
              id="sample"
              minLength="2"
              onChange={handleChangeInputs}
              className="feedback__input feedback__input_type_sample"
            />

            <label htmlFor="comment" className="feedback__label">
              Комментарий к заявке
            </label>
            <textarea
              type="textarea"
              name="comment"
              id="comment"
              minLength="2"
              rows="4"
              onChange={handleChangeInputs}
              className="feedback__input feedback__input_type_comment"
            />
          </fieldset>

          <fieldset className="feedback__fieldset">
            <h4 className="feedback__subtitle">Выберите патоген</h4>
            {pathogens.map((pathogen) => (
              <FeedbackFormCheckboxes
                key={pathogen.idInput}
                idInput={pathogen.idInput}
                pathogenName={pathogen.pathogenName}
                onChange={handleSelectPathogen}
              />
            ))}
          </fieldset>
        </div>

        <div className="feedback__wrapper">
          <button
            className={`feedback__btn button ${
              isValidForm ? "" : "feedback__btn_type_disabled"
            }`}
            type="submit"
          >
            Отправить
          </button>

          <label htmlFor="agree" className="feedback__label ">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              onChange={handleAgree}
              className="feedback__checkbox feedback__checkbox_type_agree cursor"
            />
            <span className="feedback__span feedback__span_type_agree">
              Я соглашаюсь с{" "}
              <NavLink to="/privacy" className="feedback__link link">
                условиями
              </NavLink>{" "}
              обработки персональных данных
            </span>
          </label>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
