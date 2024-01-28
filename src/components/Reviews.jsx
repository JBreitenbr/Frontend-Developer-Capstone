import "../styles/Reviews.css";
import RevCard from "./RevCard";
import customerData from "../helpers/customers";
const Reviews = () => {
  return (<article style={{marginTop:"0rem",marginBottom:"0rem",paddingTop:"1rem",paddingBottom:"1rem",backgroundColor:"#495e57"}}>
    <div className="testis">
        {customerData.map((customer, index) => (
          <RevCard key={index} customer={customer} />
        ))}
    </div></article>
  );
};

export default Reviews;