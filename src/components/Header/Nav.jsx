import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMobileNav = () => {
    setOpen(false);
  };
  return (
    <nav className="bg-indigo-200 border-b  fixed top-0 z-50 w-full">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/shop" className="py-7 px-3 inline-block">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-indigo-200 fixed w-[65%] top-[76px] overflow-y-scroll bottom-0  pl-4 
        duration-500 ${open ? "left-36" : "left-[100%]"}
        `}
        >
          <div className=" text-sm ">
            <li className="">
              <Link
                to="/"
                className="py-2 mt-8 px-3 inline-block"
                onClick={closeMobileNav}
              >
                Home
              </Link>
            </li>
            <NavLinks className="" onClick={closeMobileNav} />
            <li>
              <Link
                to="/shop"
                className="py-2 px-3 inline-block"
                onClick={closeMobileNav}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="py-2 px-3 inline-block"
                onClick={closeMobileNav}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="py-2 px-3 inline-block"
                onClick={closeMobileNav}
              >
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
