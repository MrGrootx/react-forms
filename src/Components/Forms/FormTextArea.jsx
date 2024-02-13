import propTypes from "prop-types";

const FormTextArea = (props) => {
  const { name, label, placeholder, register,errors,required } = props;

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
            className="w-full rounded py-2 px-3 font-semibold outline-none bg-[#EEEDEB] "
          ></textarea>
          {errors && <small className="text-red-500">{errors.message}</small>}
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
  errors: propTypes.object,
  register: propTypes.object,
};
