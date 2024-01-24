import React from "react";
import Menu from "./Menu";
import menuData from "../helpers/menu_items";

export const MenuList=() =>{
  const menuElements = menuData.map((menu) => {
    return (
      <Menu
        key={menu.id}
        {...menu}
      />
    );
  });

  return (
      <div className="container container-gap">
        <div className="menus-container">
          <div className="menus-info">
            {/* <h2>This week Specials</h2>
            <Link to="/" className="menu-link">
              See whole online menu
            </Link>*/}
          </div>
          <div className="menus-cards">{menuElements}</div>
        </div>
      </div>
  );
}
//export default MenuList;