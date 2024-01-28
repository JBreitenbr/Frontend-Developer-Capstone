import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import "../styles/Reservations.css";
const ConfirmedReservation = () => {
  let obj=window.localStorage.getItem("myObject");
  let parsed=JSON.parse(obj);
  console.log(parsed);
  let anlass=parsed.anlass;
  let anzahl_personen=parsed.anzahl_personen;
  let datum=parsed.datum;
  let uhrzeit=parsed.uhrzeit;
  return (
    <><div className="confirmed-reservation">
      <h3 style={{marginTop:"2.5rem"}}>Thank you for your reservation!</h3>
        <h4>We look forward to seeing you at Little Lemon.</h4>
      <div className="reservation-details">
      <h2 style={{color:"#f7f7f7"}}>Confirmation details</h2>
          <p><span><strong>Occasion:</strong> {anlass}</span></p>
          <p><span><strong>Number of Guests:</strong> {anzahl_personen}</span></p>
          <p><span><strong>Date:</strong> {datum}</span></p>
          <p><span><strong>Time:</strong> {uhrzeit}</span></p>
    </div>
      <Link to="/Frontend-Developer-Capstone/home">
        <button className="btn-lemon">Back to home</button>
      </Link></div><Footer/></>
  );
};

export default ConfirmedReservation;