import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import bg from "../../assets/footer1.png";
import "../../styles/global.css";

const Footer = () => {
  const containerStyle = {
    background: `url(${bg}) no-repeat center center fixed`,
    backgroundSize: "cover",
  };
  return (
    <div style={containerStyle} className="text-white  ">
      <div className="flex justify-center container mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pb-20 pt-10 px-4">
          <div className="About p-3">
            <h1 className="text-xl font-bold pb-2 relative">
              About Us
              <div className="h-1 w-16 bg-orange-500 absolute bottom-0 left-0  "></div>
            </h1>
            <p className="text-sm text-justify  leading-relaxed mt-4 ">
              Demand Engineering Solution is capable of providing industry
              leading to our customers through its professional team of
              engineers. All of our engineers are certified by the professional
              engineers institutions.
            </p>
            <span className="flex text-2xl pt-2 gap-2">
              <NavLink>
                <FaSquareFacebook />
              </NavLink>
              <NavLink>
                <FaSquareWhatsapp />
              </NavLink>
              <NavLink>
                <FaLinkedin />
              </NavLink>
            </span>
          </div>
          <div className="OurServices p-3 ">
            <h1 className="text-xl font-bold pb-2 relative">
              Our Products
              <div className="h-1 w-16 bg-orange-500 absolute bottom-0 left-0 "></div>
            </h1>
            <ul className="text-sm leading-relaxed pt-4">
              <li>
                <NavLink> - Air Compressor Manufacture</NavLink>{" "}
              </li>
              <li>
                <NavLink> - Multi-brand Air Compressor Service</NavLink>
              </li>
              <li>
                <NavLink> - Compressor Spares Manufacture</NavLink>
              </li>
              <li>
                <NavLink> - Air Compressor Sales</NavLink>
              </li>
            </ul>
          </div>
          <div className=" getintouch p-3 ">
            <h1 className="text-xl font-bold pb-2 relative">
              Get in Touch
              <div className="h-1 w-16 bg-orange-500 absolute bottom-0 left-0 "></div>
            </h1>

            <p className="text-sm leading-relaxed pt-4 pb-2 ">
              <span className=" text-base relative pb-1">
                REGISTERED OFFICE:{" "}
                <div className="h-[2px]  w-32 bg-orange-500 absolute bottom-0 left-0 "></div>
              </span>{" "}
              <br />
              80,Rupayan tower,kakrail,dhaka-1000
            </p>
            <p className="text-sm leading-relaxed pt-2 pb-2">
              <span className=" text-base relative pb-1">
                CORPORATE OFFICE:{" "}
                <div className="h-[2px] w-32 bg-orange-500 absolute bottom-0 left-0 "></div>
              </span>{" "}
              <br />
              House #64,Road #07, Shekertek, Mohammadpur,Dhaka-1207 .
            </p>
            <p className="text-sm leading-relaxed">
              <span className="">Mobile : </span>
              <span> +880 01325-435437</span>
            </p>
            <p className="text-sm leading-relaxed ">
              <span className="">Email : </span>
              <span>munna@demandeng.com</span>
            </p>
          </div>
          <div className="QuickLinks p-3">
            <h1 className="text-xl font-bold pb-2 relative">
              Quick Link
              <div className="h-1 w-16 bg-orange-500 absolute bottom-0 left-0 "></div>
            </h1>
            <ul className="text-sm leading-relaxed  pt-4">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contacts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer end Part */}
      <div className="border-t-[1px] flex justify-center p-4">
        <p className="">
          © Copyright Demand Engineering 2021 . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
