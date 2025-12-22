import "./CustomInput.css";

const CustomInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error = "",
}) => {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}

      <input
        className={`custom-input ${error ? "input-error" : ""}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />

      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default CustomInput;
