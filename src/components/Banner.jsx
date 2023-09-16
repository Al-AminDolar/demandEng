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
          <img src="/public/image/banner-1-2.jpg" alt="" />
        </div>
        <div className="">
          <img src="/public/image/banner-1-3.jpg" alt="" />
        </div>
        <div className="">
          <img src="/public/image/banner-1-2.jpg" alt="" />
        </div>
        <div className="">
          <img src="/public/image/banner-1-3.jpg" alt="" />
        </div>
      </Slider>
      <div className="carousel-text">Your single text here</div>
    </div>
  );
};

export default Banner;
