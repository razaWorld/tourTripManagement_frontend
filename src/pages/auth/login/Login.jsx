import { useState } from "react";
import { loginUser } from "../../../api/auth.api";
import { CustomButton, CustomForm } from "../../../components/global";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
 const navigate = useNavigate(); // 👈 React Router navigation
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
      const { data } = await loginUser(form);
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
    <div >
      <CustomForm
        title="Login"
        fields={fields}
        formData={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        message={message}
        buttonText="Register"
        linkText={"Don't have an account "}
        linkTo={"Register"}
       onFooterLinkPress={() => navigate("/register")} 
       

        
       
      />
      <CustomButton title="move" onClick={()=>navigate("/register")}/>
    </div>
  );
}

export default Login;
