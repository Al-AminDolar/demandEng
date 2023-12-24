import { MdArrowForward } from "react-icons/md";

const Card = ({ data }) => {
  return (
    <div className="  shadow-md shadow-slate-500 overflow-hidden border rounded-xl w-[300px]  flex justify-center items-center m-10  ">
      <div className=" flex flex-col items-center">
        <div className="h-[250px] w-[350px]  rounded-t-xl">
          <img
            src={data.imageUrl}
            alt="image"
            className="w-[80%] h-[80%] object-cover"
          />
        </div>

        <div>
          <h1 className=" font-semibold py-3">{data.title}</h1>
        </div>

        <div className="mb-5">
          <button className="btn-green ">
            Details <MdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

// onClick={data.onClick}
