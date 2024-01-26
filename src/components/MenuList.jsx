import React from "react";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";
import menuData from "../helpers/menu_items";

const MenuList=() =>{
  const menuElements = menuData.map((menu) => {
    return (
      <MenuItem
        key={menu.id}
        {...menu}
      />
    );
  });

  return (
      <div id="menu-list" className="container container-gap">
        <div className="menus-container">
            {/* <h2>This week Specials</h2>
            <Link to="/" className="menu-link">
              See whole online menu
            </Link>*/}
          <div className="menus-cards">{menuElements}</div>
        </div>
      </div>
  );
}
export default MenuList;