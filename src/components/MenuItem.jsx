import React from "react";

export default function Menu({ img, title, price, description }) {
  return (
     <><div className="wrapper">
  <div className="menu-item-photo">
      <div>${price}.00</div>
      <img src={img} alt={title} className="img-responsive img-custom" />
     </div><h4 className="menu-item-title">{title}</h4><p className="menu-item-details">{description}</p>
      </div></>
  );
}
{/*
<div class="outer">  <div id="menu"> <div class="wrapper" >
            <div class="menu-item-photo">
              <div>$10.95</div>
              <img class="img-responsive img-custom" src="https://www.dropbox.com/scl/fi/pz5kf8rt5lh1atgkdysat/chakchouka.jpg?rlkey=4vamipolvy6l94144asovfqkl&raw=1" alt="Chakchouka">
            </div>
            <h4 class="menu-item-title">Chakchouka</h4>
            <p class="menu-item-details">Chakchouka is an easy, healthy meal in Israel and other parts of the Middle East and North Africa. It’s a simple combination of simmering tomatoes, onions, garlic, spices and gently poached eggs. </p>
          </div>*/}
//export default Menu;
