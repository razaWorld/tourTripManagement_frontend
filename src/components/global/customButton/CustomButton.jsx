import "./CustomButton.css";

const CustomButton = ({
  title = "Button",
  onClick,
  type = "button",
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      className="custom-btn"
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? "Please wait..." : title}
    </button>
  );
};

export default CustomButton;
