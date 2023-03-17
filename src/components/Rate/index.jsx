import React, { useEffect, useState } from "react";
import "./style.css";


const Rate = ({ from }) => {
  const [currency, setCurrency] = useState("");
  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK`)
      .then((response) => response.json())
      .then((data) => setCurrency(data.rates.CZK));
  });

  return (
    <div className="rate">
      <div className="rate__currency">1{from}</div>
      <div>=</div>
      <div className="rate__value">{currency}</div>
    </div>
  );
};

export default Rate;
