import { BsArrowRight } from "react-icons/bs";
import image from "../images/final.jpg";
const About = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 my-14 ">
        <div className="left-top p-3">
          <h1 className="text-4xl font-semibold mb-7">
            Welcome to{" "}
            <span className="text-[#fe5a0e]">Demand Engineering </span> __
          </h1>
          <p className="text-lg text-justify pb-7">
            Demand Engineering is an organization of enthusiastic professionals
            who are experienced in the field of industrial engineering for
            several years. The organization is mainly concentrated on industrial
            air solutions. The company Liberton Engineering Solution is in this
            business since 2015 and it has gained recognition for the industry
            leading products and after sales services. Today Liberton
            Engineering solution is one of the most reliable companies in the
            air compressor industry
          </p>

          <button className="text-white  bg-[#fe5a0e] px-7 py-3 flex items-center  gap-3   font-medium ">
            Learn More{" "}
            <span className="text-xl ">
              <BsArrowRight />
            </span>
          </button>
        </div>
        <div className="right-bottom p-3 ">
          <img className="rounded-2xl" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
