import { BsArrowRight } from "react-icons/bs";
import compressor from "../images/compressor.png";
import oil from "../images/oil.png";
import spare from "../images/spareParts.jpg";
import "../styles/global.css";

const Card = () => {
  return (
    <div className="bg-slate-100  pb-10 ">
      <h1 className="text-3xl pt-3  font-medium text-center">
        Our <span className="text-purple-700">Services</span>
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-7">
        {/* First card */}
        <div className="card text-center">
          <img
            className="card-image h-[300px]"
            src={compressor}
            alt="Air Compressor"
          />
          <h1 className="text-xl font-semibold py-3">Air Compressor</h1>

          <div className="flex justify-center">
            <button className="btn-green ">
              Learn More <BsArrowRight className="text-xl" />
            </button>
          </div>
        </div>
        {/* second card */}
        <div className="card text-center">
          <img
            className="card-image h-[300px]"
            src={oil}
            alt="Compressor Oil"
          />
          <h1 className="text-xl font-semibold py-3">Compressor Oil</h1>

          <div className="flex justify-center">
            <button className="btn-green">
              Learn More <BsArrowRight className="text-xl" />
            </button>
          </div>
        </div>
        {/* Third card */}
        <div className="card text-center ">
          <img className="card-image h-[300px]" src={spare} alt="Spare Parts" />
          <h1 className="text-xl font-semibold py-3">Spare Parts</h1>

          <div className="flex justify-center">
            <button className="btn-green ">
              Learn More <BsArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
