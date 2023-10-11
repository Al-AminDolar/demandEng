import { Link } from "react-router-dom";
import Slider from "react-slick";
import Card from "./Card";

const Carousel = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "/src/images/compressor.png",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "/src/images/oil.png",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description for Card 3",
      imageUrl: "/src/images/spareParts.jpg",
    },
    {
      id: 1,
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "/src/images/compressor.png",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "/src/images/oil.png",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description for Card 3",
      imageUrl: "/src/images/spareParts.jpg",
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
      {cards.map((card) => (
        <Link key={card.id} to={`/details/${card.id}`}>
          <Card
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            onClick={() => handleCardClick(card.id)}
          />
        </Link>
      ))}
    </Slider>
  );
};

export default Carousel;
