import React, { useState } from "react";

import BookingUserData from "../Booking_UserData";
import BookingDetails from "../Booking_Details";
import BookingCalendar from "../Booking_Calendar";
import BookingTimeBlock from "../Booking_TimeBlock";

import { useFormik } from "formik";

import { Container } from "react-bootstrap";

const validate = (values) => {
  const errors = {};

  if (!values.city) {
    errors.city = "Obrigatório";
  }

  if (!values.checkin) {
    errors.checkin = "Obrigatório";
  }

  if (!values.checkout) {
    errors.checkout = "Obrigatório";
  }

  if (!values.time) {
    errors.time = "Obrigatório";
  }

  return errors;
};

function BookingForm({ products }) {
  function submit() {
    if (
      form.city == "" ||
      form.checkin == "" ||
      form.checkout == "" ||
      form.time == ""
    ) {
      alert("Preencha todos os dados...");
    } else {
      window.location.href = "/reserve-done";
    }
  }

  // window.location.href = "/reserve-done";

  const formik = useFormik({
    initialValues: {
      name: "",
      last_name: "",
      email: "",
      city: "",
      checkin: "",
      checkout: "",
      time: "",
    },
    validate,
    onSubmit: (values) => {
      window.location.href = "/reserve-done";
    },
  });

  const [form, setForm] = useState({
    city: "",
    checkin: "",
    checkout: "",
    time: "",
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Container fluid className="booking_container">
          <div className="booking_form_title">
            <h1>Complete seus dados</h1>
          </div>

          <BookingUserData form={form} setCity={setForm} />
          <BookingDetails
            products={products}
            form={form}
            setDate={setForm}
            submit={submit}
          />
          <BookingCalendar />
          <BookingTimeBlock form={form} setTime={setForm} />
        </Container>
      </form>
    </>
  );
}

export default BookingForm;