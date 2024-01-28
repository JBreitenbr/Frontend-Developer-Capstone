import "../styles/Reservations.css";
import { useNavigate } from "react-router-dom";
import ReservationForm from "./ReservationForm";

const Reservations = () => {
  const navigate = useNavigate();

  const submitData = () => {
    navigate("/Frontend-Developer-Capstone/confirmedReservation");
  };
  

  return (
    <div className="reservations">
      <h2>Table reservation</h2>
      <ReservationForm
        submitData={submitData}
      />
    </div>
  );
};

export default Reservations;