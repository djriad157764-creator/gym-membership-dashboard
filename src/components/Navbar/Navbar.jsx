import React, { useState } from "react";
import navImg from "../../assets/gym.avif";
import Nav from "../Nav/Nav";
import { Menu, X } from "lucide-react";
import "../../style/Animations.css";

const navbarItems = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/about",
    name: "About",
  },

  {
    id: 4,
    path: "/products",
    name: "Products",
  },

  {
    id: 6,
    path: "/contact",
    name: "Contact",
  },
];

const link = navbarItems.map((i) => <Nav key={i.id} i={i}></Nav>);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-slate-100 ">
      <span
        onClick={() => setOpen(!open)}
        className="absolute md:hidden top-6 left-0 cursor-pointer z-50"
      >
        {open ?
          <X className="text-red-600 animate-fade-down ml-3"></X>
        : <Menu className="text-neutral-600 animate-fade-up ml-3"></Menu>
        }
        <ul
          className={`${open ? "translate-x-0" : "-translate-x-full"} mt-4  backdrop-blur-md border-2 border-blue-900/30 border-t-0 border-l-0  duration-700  absolute rounded-md`}
        >
          {link}
        </ul>
      </span>
      <div className="nav-container  flex justify-between items-center px-5 py-2  ">
        <div className="flex cursor-pointer gap-4 items-center pl-8 md:pl-0">
          <div className="nav-left flex gap-2 items-center">
            <img
              className="w-[50px] animate-zoom delay-4 h-[50px] object-cover rounded-[50%]"
              src={navImg}
              alt="Gym Logo"
            />
            <h1 className="font-extrabold left-to-right delay-3 italic text-red-500 text-3xl ">
              GYM
            </h1>
          </div>
        </div>
        <div className="nav-right">
          <ul className="hidden md:flex  justify-between items-center lg:gap-5 ">
            {link}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
