import { useState } from "react";
import log from "../images/logo.png";

const Navbar = () => {
  const [menuName, setMenuName] = useState("menu");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuName((prevName) => (prevName === "menu" ? "close" : "menu"));
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 p-3 text-xl font-medium bg-white shadow-md md:flex md:items-center md:justify-between ">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <img className="h-10 inline" src={log} alt="Tailwind Logo" />
        </span>

        <div>
          <span
            className="text-xl pl-3 cursor-pointer md:hidden block"
            onClick={handleMenuToggle}
          >
            <ion-icon name={menuName}></ion-icon>
          </span>
          <ul
            className={`md:flex md:items-center md:flex-grow ${
              menuOpen ? "block " : "hidden"
            }`}
          >
            <li className="mx-4 my-2 md:my-0">
              <a
                href="#"
                className="text-base hover:text-orange-500 duration-500"
              >
                Home
              </a>
            </li>
            <li className="mx-4 my-2 md:my-0">
              <a
                href="#"
                className="text-base hover:text-orange-500 duration-500"
              >
                Service
              </a>
            </li>
            <li className="mx-4 my-2 md:my-0">
              <a
                href="#"
                className="text-base hover:text-orange-500 duration-500"
              >
                Shop
              </a>
            </li>
            <li className="mx-4 my-2 md:my-0">
              <a
                href="#"
                className="text-base hover:text-orange-500 duration-500"
              >
                About
              </a>
            </li>
            <li className="mx-4 my-2 md:my-0">
              <a
                href="#"
                className="text-base hover:text-orange-500 duration-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
