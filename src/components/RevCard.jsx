/*import "../styles/RevCard.css";*/
const RevCard = ({ customer }) => {
  return (
    <article className="testimonial-card">
      <img src={customer.custImg} alt={customer.isCalled} />
      <h4 style={{fontSize:"2rem"}} className="cust-name">{customer.isCalled}</h4>
        <p style={{fontSize:"1.1rem"}}><i className="fa fa-quote-left"></i>&nbsp;&nbsp;{customer.custRev}&nbsp;&nbsp;<i className="fa fa-quote-right"></i></p>
    </article>
  );
};

export default RevCard;