import "../styles/Reviews.css";
import RevCard from "./RevCard";
import customerData from "../helpers/customers";
const Reviews = () => {
  return (<article style={{marginTop:"6rem",marginBottom:"2rem"}}>
    <div className="testis">
        {customerData.map((customer, index) => (
          <RevCard key={index} customer={customer} />
        ))}
    </div></article>
  );
};

export default Reviews;