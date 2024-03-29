import propTypes from "prop-types";

const FormCheckBox = ({ label, name, register, errors }) => {
  return (
    <div>
      <div className="cursor-pointer  ">
        <input type="checkbox" name={name} id={name} {...register} />
        <label htmlFor={name} className="font-bold ml-2">
          {label}
        </label>
      </div>
      <div className="mb-3">
        {errors && <small className="text-red-500">{errors.message}</small>}
      </div>
    </div>
  );
};

export default FormCheckBox;

FormCheckBox.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  errors: propTypes.object,
  register: propTypes.object,
};
