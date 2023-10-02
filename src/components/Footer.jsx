import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "../styles/global.css";

const Footer = () => {
  return (
    <div className="bg-[#262626] text-white ">
      <div className="flex justify-center container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pb-20 pt-10 px-4">
          <div className="About p-3">
            <h1 className="text-xl font-medium pb-4">About Us</h1>
            <p className="text-base leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
              nulla! Modi, facere rerum veniam quam explicabo accusamus dolorum
              quas ratione?
            </p>
            <span className="flex text-3xl pt-2 gap-2">
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
            <h2 className="text-xl font-medium pb-4">Our Services</h2>
            <ul className="text-base leading-relaxed font-semibold">
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
            <h2 className="text-xl font-medium pb-4">Get in Touch</h2>
            <p className="text-base leading-relaxed">
              <span className="font-bold">Address : </span>
              <span>
                {" "}
                House #64,Road #07, Shekertek, Mohammadpur,Dhaka-1207
              </span>
            </p>
            <p className="text-sm leading-relaxed">
              <span className="font-bold">Mobile : </span>
              <span> +880 01325-435437</span>
            </p>
            <p className="text-sm leading-relaxed ">
              <span className="font-bold">Email : </span>
              <span>munna@demandeng.com</span>
            </p>
          </div>
          <div className="QuickLinks p-3">
            <h2 className="text-xl font-medium pb-4">Quick Links</h2>
            <ul className="text-base leading-relaxed font-semibold">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink>Services</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink>About</NavLink>
              </li>
              <li>
                <NavLink>Contacts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer end Part */}
      <div className="border-t-[1px] bg-slate-200 flex justify-center p-4">
        <p className="text-slate-600">
          © Copyright Demand Engineering 2021 . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
