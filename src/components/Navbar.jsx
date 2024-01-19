import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants/index";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img className="w-[124px] h-[32px]" src={logo} />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => {
          return (
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary ${
                index === navLinks.length ? "mr-0" : "mr-10"
              }`}
              key={link.id}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>

      {/* For Mobiles */}
      <div
        onClick={() => setMobileMenu((prev) => !prev)}
        className="sm:hidden flex flex-1 justify-end items-center"
      >
        <img
          className="h-[28px] w-[28px] object-contain"
          src={`${mobileMenu ? close : menu}`}
          alt="menu"
        />
        {mobileMenu && (
          <div className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
            <ul className="list-none flex flex-col justify-end items-center">
              {navLinks.map((link, index) => {
                return (
                  <li
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                      index === navLinks.length ? "mb-0" : "mb-4"
                    }`}
                    key={link.id}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
