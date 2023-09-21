import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { MdReadMore } from "react-icons/md";
const Footer = () => {
  return (
    <div className=" py-3 bg-slate-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-11 ">
          <div className="col-span-2 p-3 ">
            <div>
              <img className="w-[150px] py-3" src="/image/Logo.png" alt="" />
            </div>
            <div className="px-3">
              <p className="text-justify text-lg">
                Demand Engineering is a profetional industry solutions related
                company with 3years plus industy field expereinced . We are
                always ready for servie you our services.
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

          <div className=" p-3 ">
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
              <h4>
                Denand Engineering <br />
                <span className="text-sm">
                  12/D Bashbari, Mohammadpur, Dhaka - 1207
                </span>
              </h4>
              <h4>+880 1320 393 000</h4>
              <h4>contact@libertoneng.com</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
