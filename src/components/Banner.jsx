import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import "../styles/global.css";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="">
          <img src={slide1} alt="" />
        </div>
        <div className="">
          <img src={slide2} alt="" />
        </div>
        <div className="">
          <img src={slide3} alt="" />
        </div>
      </Slider>
      <div className="carousel-text ">
        <div className="font-semibold ">
          <h1 className="text-5xl">Demand Engineering</h1>
          <h4>
            {" "}
            <span className="text-2xl">Your Demand Our Service</span>
          </h4>
          <br />
          <h1 className="text-2xl">We will provide the</h1>
          <h1>
            best <span className="text-[#3ee438]">Industrial</span> machinery
            support
          </h1>
        </div>

        <button className="bg-gradient-to-r from-red-500 to-orange-600 px-7 py-3 flex items-center justify-center gap-3 my-7 text-lg font-semibold ">
          Learn More{" "}
          <span className="text-xl ">
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
