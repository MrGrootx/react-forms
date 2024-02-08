import propTypes from "prop-types";

const FormInput = (props) => {
  const { name, type, label, placeholder, value, handleOnChange, required } =
    props;

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
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
            required={required}
            className="w-full rounded py-2 px-3 font-semibold outline-none bg-[#EEEDEB] "
          />
        </div>
      </div>
    </>
  );
};

export default FormInput;

FormInput.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  label: propTypes.string,
  value: propTypes.string,
  placeholder: propTypes.string,
  required: propTypes.bool,
  handleOnChange: propTypes.func,
};
