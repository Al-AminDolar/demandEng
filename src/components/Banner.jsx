import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slide1 from "../images/slide1.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
  };

  const slides = [
    {
      image: slide1,
      text: (
        <div className="carousel-text ">
          <div className="font-semibold">
            <h1 className="text-[10px]  sm:text-xs md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Demand Engineering
            </h1>
            <h4 className="text-[8px]  sm:text-xs mb-0 md:text-lg mb-1 lg:text-xl mb-2 xl:text-xl mb-3 2xl:text-2xl mb-4">
              Your Demand Our Service
            </h4>

            <h1 className="text-[10px]  sm:text-xs md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
              We will provide the
            </h1>
            <h1 className="text-[8px]   sm:text-xs md:text-lg lg:text-xl xl:text-xl 2xl:text-xl">
              best <span className="text-[#3ee438]">Industrial</span> machinery
              support
            </h1>
          </div>

          <button className=" gap-[5px] md:gap-1 lg:gap-1 xl:gap-1 2xl:gap-1 bg-gradient-to-r from-red-500 to-orange-600  px-1  text-[10px] sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-3  sm:py-1 md:py-1 lg:py-1 xl:py-1 2xl:py-1 flex items-center justify-center gap-3  sm:text-xs md:text-sm lg:text-sm xl:text-lg 2xl:text-xl font-semibold mt-3">
            Learn More{" "}
            <span className=" text-[8px] sm:text-xs md:text-sm lg:text-sm xl:text-lg 2xl:text-xl">
              <BsArrowRight />
            </span>
          </button>
        </div>
      ),
    },
    // Add similar objects for other slides
    // ...
  ];

  return (
    <div className="mx-auto max-w-screen-3xl relative -z-10 mt-16">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full"
            />
            {slide.text}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
