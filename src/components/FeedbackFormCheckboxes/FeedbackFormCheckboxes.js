function FeedbackFormCheckboxes({ idInput, onChange, pathogenName }) {
  return (
    <label
      htmlFor={idInput}
      className="feedback__label feedback__label_type_pathogen cursor"
    >
      <input
        type="checkbox"
        name={idInput}
        id={idInput}
        onChange={onChange}
        className="feedback__checkbox feedback__checkbox_type_pathogen"
      />
      <span className="feedback__span feedback__span_type_pathogen-name">
        {pathogenName}
      </span>
    </label>
  );
}

export default FeedbackFormCheckboxes;
