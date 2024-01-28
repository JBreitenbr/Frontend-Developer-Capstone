import "../styles/Reviews.css";
import RevCard from "./RevCard";
import customerData from "../helpers/customers";
const Reviews = () => {
  return (<article style={{marginTop:"0rem",marginBottom:"0rem",paddingTop:"0rem",paddingBottom:"0rem",backgroundColor:"#495e57",border:"1px solid lime"}}>
    <div className="testis">
        {customerData.map((customer, index) => (
          <RevCard key={index} customer={customer} />
        ))}
    </div></article>
  );
};

export default Reviews;