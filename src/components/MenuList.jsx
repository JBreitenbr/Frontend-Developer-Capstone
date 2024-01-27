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
      <><div className="outer">
        <div id="menu-list">
            {/* <h2>This week Specials</h2>
            <Link to="/" className="menu-link">
              See whole online menu
            </Link>*/}
          {menuElements}
        </div>
      </div><Footer/></>
  );
}
export default MenuList;