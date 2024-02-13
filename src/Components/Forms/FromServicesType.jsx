import propTypes from "prop-types";

const FromServicesType = (props) => {
  const { checked, label, value, handleOnChange } = props;

  return (
    <>
      <div>
        <div className="mb-3 ">
          <input
            type="checkbox"
            checked={checked}
            value={value}
            onChange={handleOnChange}
          />
          <label className="font-bold ml-2">{label}</label>
        </div>
      </div>
    </>
  );
};

export default FromServicesType;

FromServicesType.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  // value: propTypes.string,
  // checked: propTypes.string,
  handleOnChange: propTypes.func,
};

/*
<div className="cursor-pointer mb-3 ">
        <input
          type="radio"
          name={name}
          value={value}
          defaultChecked={checked}
          onChange={handleOnChange}
        />
        <label htmlFor={name} className="font-bold ml-2">
          {label}
        </label>

*/
