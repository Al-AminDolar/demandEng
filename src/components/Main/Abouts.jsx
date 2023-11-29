import { BsArrowRight } from "react-icons/bs";
import image from "../../images/final.jpg";
const Abouts = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 pb-3 my-1 lg:grid-cols-2  gap-1 pt-20">
        <div className="left-top p-4">
          <h1 className="text-2xl lg:text-5xl font-semibold mb-4 text-purple-800">
            About <br />
            <span className="text-[#fe5a0e]">Demand Engineering </span> __
          </h1>
          <p className="text lg:text-xl text-justify pb-4">
            Welcome to our website, our company Demand Engineering was
            established on 2020. Demand Engineering is based in Bangladesh and
            grew up as a business conglomerate. Over the years Demand
            Engineering has earned an enviable reputation by consistently
            serving the clients with premium quality products and services at
            the mos competitive price. Our team of qualified Engineers located
            across the country is fully capable handle any issues regarding
            supply and after sale support of industrial Air compressor, any
            brand Compressor Spare Parts, BBT, Sub-station, Online IPS, Fire
            fighting system.
          </p>

          <button className="text-white bg-[#fe5a0e] px-4 py-1 flex items-center gap-3 font-medium">
            Learn More{" "}
            <span className="text-xl">
              <BsArrowRight />
            </span>
          </button>
        </div>
        <div className="right-bottom p-3 flex justify-center items-center ">
          <img
            className="rounded-lg min-w-full  md:h-auto "
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Abouts;
