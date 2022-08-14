import React, {useState}from "react";
import './pages.css'

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  return <div className="container">Login</div>;
}

export default Login;
