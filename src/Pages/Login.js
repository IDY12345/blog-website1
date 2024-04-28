import React from "react";
import { auth, provider } from "../fire";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const myStyle={
    backgroundImage: 
  "url('https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg')",
    height:'100vh',
    marginTop:'-10px',
    fontSize:'20px',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  }

  return (
    <div className="loginPage" style={myStyle}>
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;