import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { MdReadMore } from "react-icons/md";
const Footer = () => {
  return (
    <div className=" py-3 bg-slate-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-11 ">
          <div className="col-span-2 p-3 ">
            <div>
              <img className="w-[150px] py-3" src="/image/Logo.png" alt="" />
            </div>
            <div className="px-3">
              <p className="text-justify text-lg">
                Demand Engineering is a profetional industry solutions related
                company with 3years plus industy field expereinced We always
                ready for servie you our services.
              </p>
              <div className="text-orange-500 font-semibold text-lg flex items-center gap-3 py-3">
                <button>Read More</button>
                <span className="text-2xl">
                  <MdReadMore />
                </span>
              </div>
              <div className="social-icon flex gap-3 py-3">
                <span className="text-3xl">
                  <FaFacebookSquare />
                </span>
                <span className="text-3xl">
                  <FaWhatsappSquare />
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-500">
            <h1>Our Services</h1>
            <ul>
              <li>Air compressor</li>
              <li>Dispenser</li>
              <li>Dispser Parts</li>
              <li>Spare Parts</li>
              <li>Service</li>
            </ul>
          </div>

          <div className="bg-purple-800">
            <h1>Quick Links</h1>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="bg-fuchsia-900 col-span-2">
            <h1>Get In Touch</h1>
            <h4>
              LIBERTON ENGINEERING SOLUTION{" "}
              <span>12/D Bashbari, Mohammadpur, Dhaka - 1207</span>
            </h4>
            <h4>+880 1320 393 000 / +880 1736 276 663</h4>
            <h4>contact@libertoneng.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
