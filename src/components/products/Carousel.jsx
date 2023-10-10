import Slider from "react-slick";
import Card from "./Card";

const Carousel = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "path_to_image1.jpg", // Adjust the image path
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "path_to_image2.jpg", // Adjust the image path
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description for Card 3",
      imageUrl: "path_to_image3.jpg", // Adjust the image path
    },
  ];

  const handleCardClick = (cardId) => {
    // Redirect to details page for the clicked card
    console.log(`Redirect to details page for card with id ${cardId}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
