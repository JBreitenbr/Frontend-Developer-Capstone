import { useState } from "react";
import FormField from "./FormField";

const ReservationForm = ({
  submitData
}) => {
  const minimumDate = new Date().toISOString().split("T")[0];
  const availableTimes=["10:30","11:00","11:30" ,"12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30"];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ["Birthday", "Anniversary","Engagement","Graduation","Wedding","Other"];
  const invalidDateErrorMessage = "Please choose a valid date";
  const invalidTimeErrorMessage = "Please choose a valid time";
  const invalidOccasionErrorMessage = "Please choose a valid occasion";
  const invalidNumberOfGuestsErrorMessage =
    "Please enter a number between 1 and 10";

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [numberOfGuests, setNumberGuests] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);
const myObject = {
    datum : date,
    uhrzeit : time,
    anzahl_personen: numberOfGuests,
    anlass: occasion
  }

  window.localStorage.setItem("myObject", JSON.stringify(myObject));
  const isDateValid = () => date !== "";
  const isTimeValid = () => time !== "";
  const isNumberOfGuestsValid = () => numberOfGuests !== "";
  const isOccasionValid = () => occasion !== "";

  const areAllFieldsValid = () =>
    isDateValid() &&
    isTimeValid() &&
    isNumberOfGuestsValid() &&
    isOccasionValid();

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => setTime(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion });
  };

  return (
    <form onSubmit={handleFormSubmit} style={{backgroundColor:"lightgrey",borderRadius:"1rem"}}>
      <FormField
        label="Date"
        htmlFor="reservation-date"
        hasError={!isDateValid()}
        errorMessage={invalidDateErrorMessage}
      >
        <input
          type="date"
          id="reservation-date"
          name="reservation-date"
          min={minimumDate}
          value={date}
          required={true}
          onChange={handleDateChange}
        />
      </FormField>
      <FormField
        label="Time"
        htmlFor="reservation-time"
        hasError={!isTimeValid()}
        errorMessage={invalidTimeErrorMessage}
      >
        <div className="select-wrapper">
          <select
            id="reservation-time"
            name="reservation-time"
            value={time}
            required={true}
            onChange={handleTimeChange}
          >
            {availableTimes.map((times) => (
              <option data-testid="reservation-time-option" key={times}>
                {times}
              </option>
            ))}
          </select>
        </div>
      </FormField>
      <FormField
        label="Number of guests"
        htmlFor="reservation-number-guests"
        hasError={!isNumberOfGuestsValid()}
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input
          type="number"
          id="reservation-number-guests"
          name="reservation-number-guests"
          value={numberOfGuests}
          min={minimumNumberOfGuests}
          max={maximumNumberOfGuests}
          required={true}
          onChange={(e) => setNumberGuests(e.target.value)}
        />
      </FormField>
      <FormField
        label="Occasion"
        htmlFor="reservation-occasion"
        hasError={!isOccasionValid()}
        errorMessage={invalidOccasionErrorMessage}
      >
        <div className="select-wrapper">
          <select
            id="reservation-occasion"
            name="reservation-occasion"
            value={occasion}
            required={true}
            onChange={(e) => setOccasion(e.target.value)}
          >
            {occasions.map((occasion) => (
              <option data-testid="reservation-occasion-option" key={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>
      </FormField>
      <button
        className="btn-lemon"
        type="submit" style={{marginTop:"1rem"}}
        disabled={!areAllFieldsValid()}
      >
        Reserve now!
      </button>
    </form>
  );
};

export default ReservationForm;