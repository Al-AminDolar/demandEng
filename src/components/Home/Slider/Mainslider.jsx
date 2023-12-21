import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Mainslider = () => {
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
      image: "https://i.ibb.co/8DxghnB/mains1.jpg",
    },
    {
      image: "https://i.ibb.co/qYjNyL2/Mains2.jpg",
    },
    {
      image: "https://i.ibb.co/Nnmg1hJ/Mains3.jpg",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-3xl mt-20 ">
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

export default Mainslider;
