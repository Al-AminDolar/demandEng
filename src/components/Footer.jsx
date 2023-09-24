import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImPhone } from "react-icons/im";
import { MdEmail, MdReadMore } from "react-icons/md";
import logo from "../images/logo.png";
import "../styles/global.css";

const Footer = () => {
  return (
    <div className=" pt-3 bg-slate-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-11 ">
          <div className="col-span-2 p-3 ">
            <div>
              <img className="w-[150px] py-3" src={logo} alt="" />
            </div>
            <div className="px-3">
              <p className="text-justify text-lg">
                Demand Engineering is a profetional industry solutions related
                company with 3years plus industy field expereinced . We are
                always ready for servie you our services.
              </p>
              <div className="footerBtn font-semibold text-lg flex items-center gap-3 py-3">
                <button>Read More</button>
                <span className="text-2xl">
                  <MdReadMore />
                </span>
              </div>
              <div className="social-icon flex gap-3 py-3">
                <a href="#">
                  <span className="text-3xl text-blue-500">
                    <FaFacebookSquare />
                  </span>
                </a>

                <a href="#">
                  <span className="text-3xl text-green-500">
                    <FaWhatsappSquare />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className=" p-3  ">
            <h1 className="text-2xl font-normal">Our Services</h1>
            <ul className="text-lg py-4">
              <li>
                <a href="#">- Air compressor</a>
              </li>
              <li>
                <a href="#">- Dispenser</a>
              </li>
              <li>
                <a href="#">- Dispser Parts</a>
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
            <h1 className="text-2xl font-normal">Quick Links</h1>
            <ul className="text-lg py-4">
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

          <div className="p-3 col-span-2">
            <h1 className="text-2xl font-normal">Get In Touch</h1>
            <div className="text-lg py-4">
              <div className="flex  items-center gap-3 py-2">
                <span className="text-blue-600 text-xl">
                  <FaMapLocationDot />
                </span>
                <h4>
                  Denand Engineering <br />
                  <span className="text-sm">
                    House #64, Road #07,Shekertek <br /> Mohammadpur, Dhaka -
                    1207
                  </span>
                </h4>
              </div>
              <h4 className="flex items-center gap-3 py-2">
                <span className="text-blue-600 text-xl">
                  <ImPhone />
                </span>{" "}
                +880 01325-435437
              </h4>
              <h4 className="py-2 flex items-center gap-3">
                <span className="text-blue-600 text-xl">
                  <MdEmail />
                </span>
                contact@demandeng.com
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] bg-slate-200  flex justify-center p-4">
        <h1 className=" text-slate-600">
          © Copyright Demand Engineering 2015. All right reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
