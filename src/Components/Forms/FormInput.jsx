import propTypes from "prop-types";

const FormInput = (props) => {
  const { name, type, label, placeholder, value, handleOnChange } = props;

  return (
    <>
      <div>
        <div className="mb-3 ">
          <label htmlFor={name} className="font-bold text-gray-900">
            {label}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
            className="w-full rounded py-1 px-3 font-semibold outline-none bg-[#EEEDEB] "
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
  handleOnChange: propTypes.func,
};
