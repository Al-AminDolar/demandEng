import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/global.css";
const Banner = () => {
  const settings = {
    dots: false,
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
          <img src="/image/banner-1-2.jpg" alt="" />
        </div>
        <div className="">
          <img src="/image/banner-1-3.jpg" alt="" />
        </div>
        <div className="">
          <img src="/image/banner-1-2.jpg" alt="" />
        </div>
        <div className="">
          <img src="/image/banner-1-3.jpg" alt="" />
        </div>
      </Slider>
      <div className="carousel-text  text-center  flex flex-col ">
        <div className="font-semibold text-5xl">
          <h1>We will provide the</h1>
          <h1>
            best <span className="text-[#3ee438]">Industrial</span> support
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
