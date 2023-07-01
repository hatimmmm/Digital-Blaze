import { useState } from "react";
import { React, useRef } from "react";
import { Link, redirect } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/contextProvider";
import "./login.css";
import { motion } from "framer-motion";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState(null);

  const { setUser, setToken } = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    setErrors(null);
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        console.log(err);
        const response = err.response;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
          } else {
            setErrors({ email: [response.data.message] });
          }
        }
      });
  };
  return (
    <div className="login">
      <div className="title">
        <h1>Login</h1>
      </div>

      <div className="form-container">
        <motion.form
          transition={{ layout: { type: "spring" } }}
          layout="size"
          onSubmit={(e) => onSubmit(e)}
        >
          {errors && (
            <motion.div layout="position" className="error-msg">
              {Object.keys(errors).map((key) => {
                return (
                  <motion.p layout="position" key={key}>
                    {errors[key][0]}
                  </motion.p>
                );
              })}
            </motion.div>
          )}
          <motion.div layout="position" className="form-control" id="email-con">
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
          </motion.div>
          <motion.div layout="position" className="form-control" id="pass-con">
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" id="password" />
          </motion.div>
          <motion.div layout="position" className="form-control" id="btn-con">
            <input type="submit" onSubmit={(e) => onSubmit(e)} value="Login" />
          </motion.div>

          <motion.div layout="position" className="not-member">
            not a member? <Link to="/signup">signup</Link>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default Login;
