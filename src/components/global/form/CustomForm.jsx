import CustomButton from "../customButton/CustomButton";
import CustomInput from "../customInput/CustomInput";
import { Link } from "react-router-dom"; // react-router for navigation
import "./CustomForm.css";

const CustomForm = ({
  title,
  fields,
  formData,
  onChange,
  onSubmit,
  loading,
  message,
  buttonText,
  linkText, // e.g., "Already have an account? Login"
  linkTo, // e.g., "/login"
  onFooterLinkPress,
}) => {
  return (
    <div className="form-box">
      {title && <h2 className="form-title">{title}</h2>}

      {message && <div className="form-message">{message}</div>}

      <form onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <CustomInput
            key={index}
            label={field.label}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={onChange}
            placeholder={field.placeholder}
            required={field.required}
            error={field.error}
          />
        ))}

        <CustomButton type="submit" title={buttonText} loading={loading} />
      </form>

      {/* Conditional link below the form */}
      {linkText && linkTo && (
        <div className="form-footer">
          {linkText}
          <span
            className="form-link"
            onClick={onFooterLinkPress}
            style={{ cursor: "pointer", color: "blue" }}
          >
          {linkTo}
          </span>
        
        </div>
      )}
    </div>
  );
};

export default CustomForm;
