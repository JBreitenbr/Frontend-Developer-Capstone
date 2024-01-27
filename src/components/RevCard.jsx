import "../styles/RevCard.css";
const RevCard = ({ customer }) => {
  return (
    <div className="test-div"><div className="test-wrapper">
      <img src={customer.custImg} alt={customer.isCalled} className="test-pic" />
      <h4 style={{fontSize:"2rem"}} className="cust-name">{customer.isCalled}</h4></div>
        <p className="test-para"><i className="fa fa-quote-left"></i>&nbsp;&nbsp;{customer.custRev}&nbsp;&nbsp;<i className="fa fa-quote-right"></i></p>
    </div>
  );
};

export default RevCard;