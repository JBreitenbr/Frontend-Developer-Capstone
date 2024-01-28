const SpecialsCard = ({ menu }) => {
  return (
    <div className="specials-div">
      <img src={menu.img} alt={menu.title} className='specials-img'/>
<h4 className="specials-title">{menu.title}</h4>
    <p className="specials-para">
      {menu.description}
    </p>
  </div>  
  );
};
export default SpecialsCard;