import React, { useContext } from "react";

import { Context } from "../Context/Context";

import BookingSignInForm from "../components/BookingSignIn/BookingSignIn_Form";

import "../styles/BookingLogin.css";

import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";

import { WarningCircle } from "phosphor-react";

function BookingSignIn() {
  const { carsProducts, carsImage } = useContext(Context);

  const { id } = useParams();

  const selectedProduct = carsProducts?.find((product) => product?.id == id);

  return (
    <>
      <Container fluid className="booking_login_container">
        <div className="booking_login_warning">
          <p>
            {" "}
            <WarningCircle
              size={32}
              className="booking_login_warning-item"
            />{" "}
            Para fazer uma reserva você precisa estar logado
          </p>
        </div>

        <BookingSignInForm product={selectedProduct} />
      </Container>
    </>
  );
}

export default BookingSignIn;