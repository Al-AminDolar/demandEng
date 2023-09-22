import { BsArrowRight } from "react-icons/bs";
const Card = () => {
  return (
    <div className=" bg-slate-100">
      <div className="container mx-auto  p-7 flex gap-10 justify-center">
        {/* card start */}
        <div className="bg-white h-auto w-[350px] p-4 rounded-lg shadow-2xl ">
          <img
            className="w-100 rounded-sm"
            src="/image/Compressor2.png"
            alt=""
          />
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
        <div className="bg-white h-auto w-[350px] p-4 rounded-lg shadow-2xl ">
          <img
            className="w-100 rounded-lg"
            src="/image/Compressor1.png"
            alt=""
          />
          <h1 className="text-2xl font-semibold py-3">Dispensar</h1>
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
        <div className="bg-white h-auto w-[350px] p-4 rounded-lg shadow-2xl ">
          <img
            className="w-100 rounded-lg"
            src="/image/Compressor2.png"
            alt=""
          />
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
