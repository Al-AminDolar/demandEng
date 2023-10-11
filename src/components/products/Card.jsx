import { BsArrowRight } from "react-icons/bs";
import "/src/styles/global.css";

const Card = ({ title, imageUrl, onClick }) => {
  return (
    <div className="card text-center m-5" onClick={onClick}>
      <div className="card-image h-[300px]">
        <img src={imageUrl} alt="image" />
      </div>

      <h1 className="text-xl font-semibold py-3">{title}</h1>

      <div className="flex justify-center">
        <button className="btn-green ">
          Learn More <BsArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Card;
