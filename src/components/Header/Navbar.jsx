import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import log from "../../images/logo.png";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Product" },
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
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "left-52 top-[75px]" : "left-[490px] top-[75px]   "
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              {link.name === "Product" ? (
                <div className="relative group">
                  <span
                    onClick={() => setOpen(open)}
                    className="text-gray-800 font-serif font-medium hover:text-purple-800  cursor-pointer"
                  >
                    {link.name}
                  </span>
                  <ul
                    className={`hidden absolute left-0 top-full bg-white border border-gray-300 rounded-md py-2 px-4 space-y-2 group-hover:block transition-all transform origin-top ${
                      open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                    }`}
                  >
                    {/* Add dropdown options here */}
                    <li>
                      <NavLink
                        onClick={() => setOpen(!open)}
                        to="/category1"
                        className="text-xs hover:text-purple-800 duration-500"
                      >
                        Category 1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={() => setOpen(!open)}
                        to="/category2"
                        className="text-xs hover:text-purple-800 duration-500"
                      >
                        Category 2
                      </NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                <NavLink
                  onClick={() => setOpen(!open)}
                  className="text-gray-800 font-serif font-medium hover:text-purple-800 duration-500"
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
