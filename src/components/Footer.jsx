import {
  FaLinkedin,
  FaLocationDot,
  FaPhoneVolume,
  FaSquareFacebook,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "../styles/global.css";

const Footer = () => {
  return (
    <div className=" bg-gray-900 text-white  container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        <div className="About p-3">
          <h1>About Us</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
            nulla! Modi, facere rerum veniam quam explicabo accusamus dolorum
            quas ratione?
          </p>
          <span className="flex">
            <FaSquareFacebook /> <FaSquareWhatsapp /> <FaLinkedin />
          </span>
        </div>
        <div className="OurServices p-3">
          <h2>Our Services</h2>
          <ul>
            <li>AIR COMPRESSOR MANUFACTURE</li>
            <li>MULTI-BRAND AIR COMPRESSOR SERVICE</li>
            <li>COMPRESSOR SPARES MANUFACTURE</li>
            <li>AIR COMPRESSOR SALES</li>
          </ul>
        </div>
        <div className="getintouch p-3">
          <h2>Get in Touch</h2>
          <h6>
            {" "}
            <span>
              <FaLocationDot />
            </span>
            <span>Address:</span> House #64, Road #07,Shekertek,Mohammadpur,
            Dhaka - 1207{" "}
          </h6>
          <h6>
            <span>
              <FaPhoneVolume />
            </span>{" "}
            +880 01325-435437
          </h6>
          <h6>
            <span>
              <MdEmail />
            </span>{" "}
            +880 01325-435437
          </h6>
        </div>
        <div className="QuickLinks p-3">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>

      {/* footer end Part */}
      <div className="border-t-[1px] bg-slate-200 flex justify-center p-4">
        <h1 className="text-slate-600">
          © Copyright Demand Engineering 2021. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
