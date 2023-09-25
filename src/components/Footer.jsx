import {
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaWhatsappSquare,
} from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { MdEmail, MdReadMore } from "react-icons/md";
import logo from "../images/logo.png";
import "../styles/global.css";

const Footer = () => {
  return (
    <div className="pt-6 bg-slate-50 p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-2 p-3">
            <div>
              <img className="w-40 py-3" src={logo} alt="" />
            </div>
            <div className="px-3">
              <p className="text-justify text-base md:text-lg">
                Demand Engineering is a professional industry solutions related
                company with over 3 years of industry field experience. We are
                always ready to serve you with our services.
              </p>
              <div className="footerBtn font-semibold text-base md:text-lg flex items-center gap-3 py-3">
                <button className="text-blue-500">Read More</button>
                <span className="text-2xl">
                  <MdReadMore />
                </span>
              </div>
              <div className="social-icon flex gap-3 py-3">
                <a href="#" className="text-blue-500">
                  <FaFacebookSquare />
                </a>

                <a href="#" className="text-green-500">
                  <FaWhatsappSquare />
                </a>
              </div>
            </div>
          </div>

          <div className="md:p-3">
            <h1 className="text-xl  text-purple-700 font-medium">
              Our Services
            </h1>
            <ul className="text-base md:text-lg py-4">
              <li>
                <a href="#">- Air compressor</a>
              </li>
              <li>
                <a href="#">- Dispenser</a>
              </li>
              <li>
                <a href="#">- Dispenser Parts</a>
              </li>
              <li>
                <a href="#">- Spare Parts</a>
              </li>
              <li>
                <a href="#">- Service</a>
              </li>
            </ul>
          </div>

          <div className="py-3">
            <h1 className="text-xl  text-purple-700 font-medium">
              Quick Links
            </h1>
            <ul className="text-base md:text-lg py-4">
              <li>
                <a href="">- Home</a>
              </li>
              <li>
                <a href="">- About Us</a>
              </li>
              <li>
                <a href="">- Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 p-3">
            <h1 className="text-xl  text-purple-700 font-medium">
              Get In Touch
            </h1>
            <div className="text-base md:text-lg py-4">
              <div className="flex items-start gap-3 py-2">
                <span className="text-blue-600 text-lg">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h4 className="text-base md:text-lg">Denand Engineering</h4>
                  <span className="text-xs">
                    House #64, Road #07,Shekertek,Mohammadpur, Dhaka - 1207
                  </span>
                </div>
              </div>
              <h4 className="flex items-center gap-3 py-2">
                <span className="text-blue-600 text-lg">
                  <ImPhone />
                </span>{" "}
                +880 01325-435437
              </h4>
              <h4 className="flex items-center gap-3">
                <span className="text-blue-600 text-lg">
                  <MdEmail />
                </span>
                contact@demandeng.com
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] bg-slate-200 flex justify-center p-4">
        <h1 className="text-slate-600">
          © Copyright Demand Engineering 2021. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
