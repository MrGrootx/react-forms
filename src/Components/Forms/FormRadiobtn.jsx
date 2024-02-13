import propTypes from "prop-types";

const FormRadiobtn = ({ name, label, value, checked, register, errors }) => {
  return (
    <>
      <div>
        <div className="cursor-pointer mb-3 ">
          <input
            type="radio"
            name={name}
            value={value}
            defaultChecked={checked}
            {...register}
          />
          <label htmlFor={name} className="font-bold ml-2">
            {label}
          </label>
        </div>
      </div>
      {errors && <small className="text-red-500">{errors.message}</small>}
    </>
  );
};

export default FormRadiobtn;

FormRadiobtn.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
  value: propTypes.string,
  checked: propTypes.bool,
  register: propTypes.object,
  errors: propTypes.object,
};
