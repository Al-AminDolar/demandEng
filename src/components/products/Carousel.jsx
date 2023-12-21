import { Link } from "react-router-dom";
import Slider from "react-slick";
import Card from "./Card";

const Carousel = () => {
  const cards = [
    {
      id: 1,
      title: "Air Compressor",
      description: "Description for Card 1",
      imageUrl: "https://i.ibb.co/NZk3CtM/compressor.jpg",
    },
    {
      id: 2,
      title: "Compressor Oil",
      description: "Description for Card 2",
      imageUrl: "https://i.ibb.co/0FNJSh3/oil.jpg",
    },
    {
      id: 3,
      title: "Compressor Parts",
      description: "Description for Card 3",
      imageUrl: "https://i.ibb.co/6wzqrVS/spare-Parts.jpg",
    },
    {
      id: 2,
      title: "Compressor Oil",
      description: "Description for Card 2",
      imageUrl: "https://i.ibb.co/0FNJSh3/oil.jpg",
    },
  ];

  const handleCardClick = (cardId) => {
    // Redirect to details page for the clicked card
    console.log(`Redirect to details page for card with id ${cardId}`);
  };

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
        <Link key={data.id} to={`/details/${data.id}`}>
          <Card data={data} onClick={() => handleCardClick(data.id)} />
        </Link>
      ))}
    </Slider>
  );
};

export default Carousel;
