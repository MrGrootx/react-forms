import propTypes from "prop-types";

const FormButton = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="bg-[#FF004D] px-6 py-1 rounded font-bold text-white text-xl hover:bg-[#ff004cd9] transition-all duration-200">
        {name}
      </button>
    </div>
  );
};

export default FormButton;

FormButton.propTypes = {
  name: propTypes.string,
};
