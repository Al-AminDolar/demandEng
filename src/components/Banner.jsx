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
    slidesToScroll: 1,
  };
  return (
    <div className=" mx-auto ">
      <Slider {...settings}>
        <div className="">
          <img src="/image/one.jpg" alt="" />
        </div>
        <div className="">
          <img src="/public/image/three.jpg" alt="" />
        </div>
        <div className="">
          <img src="/public/image/two.jpg" alt="" />
        </div>
        <div className="">
          <img src="/public/image/four.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
