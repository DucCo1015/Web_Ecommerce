import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { BiMenu } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/clothing",
    display: "Clothing",
  },
  {
    path: "/cosmetics",
    display: "Cosmetics",
  },
  {
    path: "/electronics",
    display: "Electronics",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const  menuToggle = () => {
    menuRef.current.classList.toggle("menu__active");
  };
  return (
    <header className="max-pad-container w-full z-50 mt-4">
      <div className="flexBetween">
        {/* logo */}
        <Link to={"/home"} className="flexCenter gap-2">
          <img src={logo} alt="" width={31} height={31} />
          <span className="bold-24 hidden xs:flex">Merchanza</span>
        </Link>

        {/* navigation */}
        <div className="navigation hidden md:block" ref={menuRef} onClick={menuToggle}>
          <ul className="menu flex items-center gap-[2.7rem] regular-18">
            {navLinks.map((links, index) => (
              <li key={index}>
                <NavLink
                  to={links.path}
                  className={(navClass) =>
                    navClass.isActive ? "active-link" : ""
                  }
                >
                  {links.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* login */}

        <div className="flexCenter gap-x-4">
          <div className="bg-secondary text-primary px-2 py-1 ">
            <NavLink to={'/'} className='regular-18 hover:text-secondary'>
              Login
            </NavLink>
          </div>

          <span className="md:hidden">
            <BiMenu onClick={menuToggle} className=" w-8 h-8 cursor-pointer" />
          </span>

          <NavLink to={'/'}>
            <FaCartShopping className=" w-6 h-6 cursor-pointer hover:text-secondary"/>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
