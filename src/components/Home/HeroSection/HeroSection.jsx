import { FaArrowRight } from "react-icons/fa";
import image from "../../../assets/about.jpg";

const HeroSection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1  lg:grid-cols-2   ">
      <div className=" px-14 mt-10 order-2 lg:order-1">
        <h1 className="text-2xl lg:text-4xl font-semibold mb-4 text-purple-800">
          Welcome <br />
          <span className="text-[#fe5a0e]">Demand Engineering </span> __
        </h1>
        <p className="text-sm lg:text-base text-justify pb-4">
          Welcome to our website, our company Demand Engineering was established
          on 2020. Demand Engineering is based in Bangladesh and grew up as a
          business conglomerate. Over the years Demand Engineering has earned an
          enviable reputation by consistently serving the clients with premium
          quality products and services at the mos competitive price. Our team
          of qualified Engineers located across the country is fully capable
          handle any issues regarding supply and after sale support of
          industrial Air compressor, any brand Compressor Spare Parts, BBT,
          Sub-station, Online IPS, Fire fighting system.
        </p>

        <button className="text-white bg-[#fe5a0e] px-4 py-1 flex items-center gap-1 font-medium rounded-md">
          Learn More{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
      <div className=" px-14 flex justify-center items-center order-1 lg:order-2">
        <img className="rounded-lg min-w-full  md:h-auto " src={image} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
