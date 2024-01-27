import "../styles/Reviews.css";
import RevCard from "./RevCard";
import customerData from "../helpers/customers";
const Reviews = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customerData.map((customer, index) => (
          <RevCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;