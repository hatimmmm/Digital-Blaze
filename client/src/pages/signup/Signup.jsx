import { React, useRef, useState } from "react";
import { Link, } from "react-router-dom";
import "./signup.css";
import { motion } from "framer-motion";
import { AuthData } from "../../setup/auth/AuthWrapper";

const Signup = () => {
  const { register, errors } = AuthData()
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    register(payload)
  };
  return (
    <div className="signup">
      <div className="title">
        <h1>Sign Up</h1>
      </div>
      <div className="form-container">
        <motion.form
          layout
          transition={{ layout: { type: "spring" } }}
          onSubmit={(e) => onSubmit(e)}
        >
          {errors && (
            <motion.div layout="position" className="error-msg">
              {Object.keys(errors).map((key) => {
                return <motion.p key={key}>{errors[key][0]}</motion.p>;
              })}
            </motion.div>
          )}
          <motion.div layout="position" className="form-control">
            <label htmlFor="name">Full Name</label>
            <input type="text" ref={nameRef} id="name" />
          </motion.div>
          <motion.div layout="position" className="form-control">
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
          </motion.div>
          <motion.div layout="position" className="form-control">
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" id="password" />
          </motion.div>
          <motion.div layout="position" className="form-control">
            <label htmlFor="password-conf">Confirm Password</label>
            <input
              ref={passwordConfirmationRef}
              type="password"
              id="password-conf"
            />
          </motion.div>
          <motion.div layout="position" className="form-control" id="btn-con">
            <input type="submit" value="Signup" />
          </motion.div>

          <motion.div layout="position" className="not-member">
            already a member? <Link to="/login">login</Link>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default Signup;
