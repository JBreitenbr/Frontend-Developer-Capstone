import "../styles/Specials.css";
import SpecialsCard from "./SpecialsCard";
import menuData from "../helpers/menu_items";

const Specials = () => {
  let specialsData=menuData.filter(item=>item.id<4);
  return (<article style={{paddingTop:"1rem",paddingBottom:"1rem",backgroundColor:"#fff"}}>
    <div className="specials">
        {specialsData.map((menu, index) => (
          <SpecialsCard key={index} menu={menu} />
        ))}
    </div></article>
  );
};

export default Specials;