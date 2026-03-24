import React from "react";
import "../../style/Animations.css";

const Nav = ({ i }) => {
  return (
    <li
      className={`font-semibold right-to-left ${i.name === "Home" ? "delay-7" : ""} ${i.name === "About" ? "delay-5" : ""} ${i.name === "Products" ? "delay-3" : ""} ${i.name === "Contact" ? "delay-1" : ""} text-neutral-900 m-4 px-3 rounded-full text-center hover:text-yellow-500 hover:bg-yellow-50 transition-all duration-200`}
    >
      <a href={i.path}>{i.name}</a>
    </li>
  );
};

export default Nav;
