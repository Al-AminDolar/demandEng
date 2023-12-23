import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import log from "../../images/logo.png";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    // Function to handle clicks outside the menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Attach the event listener
    window.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="shadow-md w-full fixed z-10 top-0 left-0">
      <div className="md:flex items-center justify-between bg-indigo-100 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <img className="h-10 inline" src={log} alt="Tailwind Logo" />
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-indigo-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  transition-all duration-500 ease-in rounded-b-md ${
            open ? "left-40 top-[72px]" : "left-[490px] top-[75px]   "
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
              {link.name === "Product" ? (
                <div className="relative group">
                  <button className=" font-medium hover:text-orange-500  cursor-pointer">
                    {link.name}
                  </button>
                  <ul className="hidden absolute left-0 top-full bg-indigo-100 border border-gray-300 rounded-md  px-4 space-y-2 group-hover:block transition-all transform origin-top  ">
                    {/* Add dropdown options here */}
                    <li>
                      <NavLink
                        onClick={() => setOpen(!open)}
                        to="/ScrewAirCompressor"
                        className="text-sm font-medium hover:text-orange-500 duration-100 "
                      >
                        RotaryScrew_Compressor
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={() => setOpen(!open)}
                        to="/ReciprocatingCompressor"
                        className="text-sm font-medium hover:text-orange-500 duration-100"
                      >
                        Reciprocating Compressor
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={() => setOpen(!open)}
                        to="/category2"
                        className="text-sm font-medium hover:text-orange-500 duration-100"
                      >
                        Screw Compressor Filters
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={() => setOpen(!open)}
                        to="/category2"
                        className="text-sm font-medium hover:text-orange-500 duration-100"
                      >
                        Electrical_Substation
                      </NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                <NavLink
                  onClick={() => setOpen(!open)}
                  className=" font-medium hover:text-orange-500 duration-100"
                  to={link.link}
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
