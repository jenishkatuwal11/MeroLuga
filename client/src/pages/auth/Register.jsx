import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "../../components/common/form";
import { registerFormControls } from "../../config/index"; // Correct import

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Handle your registration logic here
  }

  return (
    <div className=" mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p>
          Already have an Account ?
          <Link
            className="font-medium text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControl={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;
