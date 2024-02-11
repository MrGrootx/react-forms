import propTypes from "prop-types";

const FormCheckBox = ({ label, name, handleOnChange }) => {
  return (
    <div>
      <div className="cursor-pointer mb-3 ">
        <input type="checkbox" name={name} id={name} onChange={handleOnChange} />
        <label htmlFor={name} className="font-bold ml-2">
          {label}
        </label>
      </div>
    </div>
  );
};

export default FormCheckBox;

FormCheckBox.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  handleOnChange: propTypes.func,
};
