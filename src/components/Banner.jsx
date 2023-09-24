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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Demand Engineering
            </h1>
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-xl 2xl:text-2xl mb-4">
              Your Demand Our Service
            </h4>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
              We will provide the
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-xl 2xl:text-xl">
              best <span className="text-[#3ee438]">Industrial</span> machinery
              support
            </h1>
          </div>

          <button className="bg-gradient-to-r from-red-500 to-orange-600  sm:px-6 md:px-8 lg:px-2 xl:px-2 2xl:px-3  sm:py-3 md:py-4 lg:py-1 xl:py-1 2xl:py-1 flex items-center justify-center gap-3 text-base sm:text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl font-semibold mt-3">
            Learn More{" "}
            <span className="text-lg sm:text-xl md:text-2xl lg:text-sm xl:text-lg 2xl:text-xl">
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
    <div className="mx-auto max-w-screen-3xl">
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
