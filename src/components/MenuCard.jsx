import React from "react";

export default function Menu({ img, title, price, description }) {
  return (
    <article id="menu" className="menu-card">
      <div className="card-text card-info">
        <h6>{title}</h6>
        <h6 className="price">$ {price}</h6>
      </div>    
      <img src={img} alt={title} className="card-img" />
      <div className="card-text">
        <div className="card-details">
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}

//export default Menu;
