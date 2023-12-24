import { Link } from "react-router-dom";
import Slider from "react-slick";
import Card from "./Card";

const Carousel = () => {
  const cards = [
    {
      id: 1,
      title: "Rotary Screw Compressor",
      description: "Description for Card 1",
      imageUrl: "https://i.ibb.co/NZk3CtM/compressor.jpg",
      link: "/ScrewAirCompressor",
    },
    {
      id: 2,
      title: "Reciprocating Compressor",
      description: "Description for Card 2",
      imageUrl: "https://i.ibb.co/JCbf0qc/com.png",
      link: "/ReciprocatingCompressor",
    },
    {
      id: 3,
      title: "Compressor Parts",
      description: "Description for Card 3",
      imageUrl: "https://i.ibb.co/6wzqrVS/spare-Parts.jpg",
      link: "/ScrewCompressorFilter",
    },
    {
      id: 4,
      title: "Electrical Substation",
      description: "Description for Card 3",
      imageUrl: "https://i.ibb.co/M9R9GMV/FINAL-FULL-28.png",
      link: "/ElectricalItem",
    },
    {
      id: 1,
      title: "Rotary Screw Compressor",
      description: "Description for Card 1",
      imageUrl: "https://i.ibb.co/NZk3CtM/compressor.jpg",
      link: "/ScrewAirCompressor",
    },
    {
      id: 2,
      title: "Reciprocating Compressor",
      description: "Description for Card 2",
      imageUrl: "https://i.ibb.co/JCbf0qc/com.png",
      link: "/ReciprocatingCompressor",
    },
    {
      id: 3,
      title: "Compressor Parts",
      description: "Description for Card 3",
      imageUrl: "https://i.ibb.co/6wzqrVS/spare-Parts.jpg",
      link: "/ScrewCompressorFilter",
    },
    {
      id: 4,
      title: "Electrical Substation",
      description: "Description for Card 3",
      imageUrl: "https://i.ibb.co/M9R9GMV/FINAL-FULL-28.png",
      link: "/ElectricalItem",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      // Add more breakpoints and settings as needed for other screen sizes
    ],
  };

  return (
    <Slider {...settings}>
      {cards.map((data) => (
        <Link key={data.id} to={data.link}>
          <Card key={data.id} data={data} />
        </Link>
      ))}
    </Slider>
  );
};

export default Carousel;

// "OLD"

// <Slider {...settings}>
// {cards.map((data) => (
//   <Link key={data.id} to={`/details/${data.id}`}>
//     <Card data={data} onClick={() => handleCardClick(data.id)} />
//   </Link>
// ))}
// </Slider>
