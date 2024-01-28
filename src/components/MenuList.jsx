import React from "react";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";
import menuData from "../helpers/menu_items";
import Footer from "./Footer";
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
    <>
     <div className="outer">
        <div id="menu-list">
          {menuElements}
        </div>
      </div>
      <Footer /></>
  );
}
export default MenuList;