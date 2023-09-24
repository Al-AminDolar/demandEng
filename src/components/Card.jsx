import { BsArrowRight } from "react-icons/bs";
import compressor from "../images/compressor.png";
import oil from "../images/compressoroil.jpg";
import spare from "../images/spareParts.png";
import "../styles/global.css";
const Card = () => {
  return (
    <div className=" bg-slate-100">
      <div className="container mx-auto  p-7 flex gap-10 justify-center pcard">
        {/* card start */}
        <div className="bg-white h-auto w-[350px] p-8 rounded-lg shadow-2xl ">
          <img className="w-100 rounded-sm" src={compressor} alt="" />
          <h1 className="text-2xl font-semibold py-3">Air Compressor</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, aut?
          </p>

          <button className="text-white  bg-green-600 px-3 py-2 rounded-md flex items-center  gap-3   font-medium my-4 ">
            Learn More{" "}
            <span className="text-xl ">
              <BsArrowRight />
            </span>
          </button>
        </div>
        {/* card start */}
        <div className="bg-white h-auto w-[350px] p-8 rounded-lg shadow-2xl ">
          <img className="w-100 rounded-lg" src={oil} alt="" />
          <h1 className="text-2xl font-semibold py-3">Compressor Oil</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, aut?
          </p>

          <button className="text-white  bg-green-600 px-3 py-2 rounded-md flex items-center  gap-3   font-medium my-4 ">
            Learn More{" "}
            <span className="text-xl ">
              <BsArrowRight />
            </span>
          </button>
        </div>
        {/* card start */}
        <div className="bg-white h-auto w-[350px] p-8 rounded-lg shadow-2xl ">
          <img className="w-100 rounded-lg" src={spare} alt="" />
          <h1 className="text-2xl font-semibold py-3">Spare Parts</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, aut?
          </p>

          <button className="text-white  bg-green-600 px-3 py-2 rounded-md flex items-center  gap-3   font-medium my-4 ">
            Learn More{" "}
            <span className="text-xl ">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
