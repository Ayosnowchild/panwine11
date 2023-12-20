import React from "react";
import { PanIcon } from "../../components/icons";
import "./SignIn.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/button";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <nav className="nav-low">
        <PanIcon />
      </nav>
      <main className="signIn-container">
        <img src="/images/SignInImage.png" className="signIn-image" />

        <section className="signIn-form">
          <h1>Sign in to PanWines</h1>
          <form className="form-container">
            <Input label={"Email"} placeholder={"Enter Email"} />
            <Input label={"Password"} placeholder={"Enter Password"} />
            <Button className="signin-btn" title={"Sign In"} btnType={"sec"} />
          </form>
          <Link className="forgot-password" to={"forgot-password"}>
            Forget Password
          </Link>
          <Link to={"signup"}>Don’t have an account? Sign Up </Link>
        </section>
      </main>
    </>
  );
}

export default SignIn;
