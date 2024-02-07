import { useEffect } from "react";
import "./PopupRequest.css";
function PopupRequest({ title, handleClick }) {
  function onClick(e) {
    e.stopPropagation();

    if (e.target.className === "popup popup__request") {
      handleClick();
    }
    if (e.target.className === "popup__btn cursor") {
      handleClick();
    } else {
      return;
    }
  }
  useEffect(() => {
    const closePopupTouchEsc = (e) => {
      if (e.key === "Escape") {
        handleClick();
        document.removeEventListener("keydown", closePopupTouchEsc);
      }
    };
    document.addEventListener("keydown", closePopupTouchEsc);
  }, []);

  return (
    <section className="popup popup__request" onClick={onClick}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__btn cursor"
          onClick={onClick}
        ></button>

        <h2 className="popup__title ">{title}</h2>
      </div>
    </section>
  );
}

export default PopupRequest;
