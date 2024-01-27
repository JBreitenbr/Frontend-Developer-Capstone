import "../styles/Reviews.css";
import RevCard from "./RevCard";
import customerData from "../helpers/customers";
const Reviews = () => {
  return (<article>
    <div className="testis">
        {customerData.map((customer, index) => (
          <RevCard key={index} customer={customer} />
        ))}
    </div></article>
  );
};

export default Reviews;