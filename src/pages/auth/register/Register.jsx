import { useState } from "react";
import { registerUser } from "../../../api/auth.api";
import { CustomButton, CustomForm } from "../../../components/global";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate=useNavigate()
  // Dynamic fields (reusable)
  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data } = await registerUser(form);
      setMessage(data.message || "✅ Registration successful");
      setForm({ name: "", email: "", password: "" });
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "❌ Registration failed, try again"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <CustomForm
        title="Register"
        fields={fields}
        formData={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        message={message}
        buttonText="Register"
        linkText={"go"}
        linkTo={"not go"}
      />
      <CustomButton onClick={()=>navigate("/login")}/>
    </div>
  );
}

export default Register;
