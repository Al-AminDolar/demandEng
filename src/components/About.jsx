import { BsArrowRight } from "react-icons/bs";
import image from "../images/final.jpg";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 pb-3 my-1 lg:grid-cols-2 my-14 gap-1">
        <div className="left-top p-3">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-7">
            Welcome to <br />
            <span className="text-[#fe5a0e]">Demand Engineering </span> __
          </h1>
          <p className="text-lg lg:text-xl text-justify pb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
            minima iusto libero alias, expedita voluptatibus officia eveniet
            quisquam itaque a repellat aliquid hic adipisci fugiat labore
            deleniti, tenetur nihil? Repellat consequatur, enim quae blanditiis
            quisquam tempore? Ad sapiente, blanditiis dolores, labore iste
            architecto minima ea reiciendis sed, nostrum error accusantium!
          </p>

          <button className="text-white bg-[#fe5a0e] px-6 py-2 flex items-center gap-3 font-medium">
            Learn More{" "}
            <span className="text-xl">
              <BsArrowRight />
            </span>
          </button>
        </div>
        <div className="right-bottom p-3 flex justify-center ">
          <img className="rounded-lg max-w-full" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
