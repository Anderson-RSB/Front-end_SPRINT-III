import React from "react";

function HomeSearchBlock() {
  return (
    <div className="second_header">
      <h2>Faça sua reserva</h2>

      <div className="options">
        <div className="input_flex">
          <label htmlFor="city_name">Cidade</label>
          <input type="text" className="city_name" placeholder="Cidade" />
        </div>

        <div className="input_flex">
          <label htmlFor="date">Check-in</label>
          <input type="date" className="date" placeholder="none" />
        </div>

        <div className="input_flex">
          <label htmlFor="date">Check-out</label>
          <input type="date" className="date" placeholder="none" />
        </div>

        <div className="input_flex">
          <br />
          <button className="btn_header">Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default HomeSearchBlock;