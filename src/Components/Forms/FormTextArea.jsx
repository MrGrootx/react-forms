import propTypes from "prop-types";

const FormTextArea = (props) => {
  const { name, label, placeholder, register, required } = props;

  return (
    <>
      <div>
        <div className="mb-3 ">
          <label htmlFor={name} className="font-bold text-gray-900 mb-1 block">
            {label}
            {required ? <span className="ml-1 text-red-500">*</span> : ""}
          </label>
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            {...register}
            required={required}
            className="w-full rounded py-2 px-3 font-semibold outline-none bg-[#EEEDEB] "
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default FormTextArea;

FormTextArea.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  required: propTypes.bool,
  register: propTypes.object,
};
