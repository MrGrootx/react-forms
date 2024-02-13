import propTypes from "prop-types";

const FormCheckBox = ({ label, name, register }) => {
  return (
    <div>
      <div className="cursor-pointer mb-3 ">
        <input type="checkbox" name={name} id={name} {...register} />
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
  register: propTypes.object,
};
