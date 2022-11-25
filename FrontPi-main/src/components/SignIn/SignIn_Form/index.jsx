import React, { useContext } from "react";

import { Context } from "../../../Context/Context";

import { useFormik } from "formik";

import { Link, useLocation, useParams } from "react-router-dom";

const login = {
  name: null,
  lastname: null,
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email Inválido";
  }
  // else if (values.email != login.email) {
  //   errors.email = "Por favor tente novamente, suas credenciais são inválidas";
  // }

  if (!values.password) {
    errors.password = "Obrigatório";
  }
  // else if (values.password != login.password) {
  //   errors.password =
  //     "Por favor tente novamente, suas credenciais são inválidas";
  // }

  return errors;
};

const SignInForm = () => {
  const { dataUser, setDataUser, carsProducts } = useContext(Context);
  const location = useLocation();
  const { id } = useParams();

  const selectedProduct = carsProducts?.find((product) => product?.id == id);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      fetch(`http://54.159.110.183:8081/api/auth/signin`, {
        method: "POST",
        headers: {
          Accept: "*/* , application/json, text/plain ",
          "Content-Type": "application/json",
          // "authorization": `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          username: `${values.email}`,
          password: `${values.password}`,
        }),
      }).then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error(res.statusText);
        } else {
          res.json()
          .then((data) => {

            console.log(data);  

            localStorage.setItem("token", data.token);

            setDataUser({
              name: data.name,
              lastname: data.lastname
            });

          });
          setTimeout(() => {
            location.state
              ? (window.location.href = `/product/${selectedProduct}/reserve`)
              : (window.location.href = "/");
          }, 10000);
        }
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="signup_form">
        <div className="title">
          <h1>Iniciar Sessão</h1>
        </div>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}

        <button className="btn_login" type="submit">
          Login
        </button>
        <p>
          Ainda não possui conta? <Link to="/signup">Cadastre-se</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignInForm;