import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "../../components/common/form";
import { loginFormControls } from "../../config/index"; // Correct import

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit(e) {
    e.preventDefault();
    console.log("Login Submitted", formData);
    // Handle your login logic here
  }

  return (
    <div className=" mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Login to your account
        </h1>
        <p>
          Don't have an Account ?
          <Link
            className="font-medium text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControl={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
