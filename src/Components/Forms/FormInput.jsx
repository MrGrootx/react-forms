import propTypes from "prop-types";

const FormInput = (props) => {
  const { name, label, placeholder, value, register, required, errors } = props;

  return (
    <>
      <div>
        <div className="mb-3 ">
          <label htmlFor={name} className="font-bold text-gray-900 mb-1 block">
            {label}
            {required ? <span className="ml-1 text-red-500">*</span> : ""}
          </label>
          <input
            id={name}
            name={name}
            type="text"
            placeholder={placeholder}
            value={value}
            {...register}
            className={
              errors
                ? "border-red-500 border w-full rounded py-2 px-3 font-semibold outline-none bg-[#EEEDEB] "
                : "w-full rounded py-2 px-3 font-semibold outline-none bg-[#EEEDEB] "
            }
          />
          {errors && <small className="text-red-500">{errors.message}</small>}
        </div>
      </div>
    </>
  );
};

export default FormInput;

FormInput.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  value: propTypes.string,
  required: propTypes.bool,
  placeholder: propTypes.string,
  register: propTypes.object,
  errors: propTypes.object,
};
