import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConfirmedReservation = () => {
  let obj=window.localStorage.getItem("myObject");
  let parsed=JSON.parse(obj);
  let datum=parsed.datum;
  let uhrzeit=parsed.uhrzeit;
  return (
    <div className="container confirmed-reservation">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your table has been reserved!</h2>
      <p>You'll receive a confirmation email with all the details.</p>
      <p>{datum}</p>
      <p>{uhrzeit}</p>
    </div>
  );
};

export default ConfirmedReservation;