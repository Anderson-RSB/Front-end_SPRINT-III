import React from "react";

import "./style.css";

import { useFormik } from "formik";

import { Container, Card } from "react-bootstrap";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Obrigatório";
  }

  if (!values.last_name) {
    errors.last_name = "Obrigatório";
  }

  if (!values.email) {
    errors.email = "Obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.city) {
    errors.city = "Obrigatório";
  }

  return errors;
};

const BookingForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      last_name: "",
      email: "",
      city: "",
    },
    validate,
    onSubmit: (values) => {
      window.location.href = "/reserve-done";
    },
  });

  return (
    <>
      <Container fluid className="booking_form_container">
        <form onSubmit={formik.handleSubmit} className="booking_form">
          <Card className="booking_form_card">
            {/* <div className="reservation_form_input"> */}

            <div className="booking_form_input-name">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder=""
                disabled
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {/* {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null} */}
            </div>

            <div className="booking_form_input-lastname">
              <label htmlFor="last_name">Sobrenome</label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder=""
                disabled
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
              />
              {/* {formik.touched.last_name && formik.errors.last_name ? (
                  <div className="error">{formik.errors.last_name}</div>
                ) : null} */}
            </div>

            <div className="booking_form_input-email">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder=""
                disabled
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {/* {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null} */}
            </div>

            <div className="booking_form_input-city">
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                name="city"
                type="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="error">{formik.errors.city}</div>
              ) : null}
            </div>
            {/* </div> */}
          </Card>

          {/* <button className="reservation_form_button" type="submit">
              Submit
            </button> */}
        </form>
      </Container>
    </>
  );
};

export default BookingForm;