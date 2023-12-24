import Marquee from "react-fast-marquee";
import backgroundImage from "../../../images/map-bg.png";
import AllProductCard from "../../../pages/AllProductCard";

const allproductcard = [
  { id: 1, imageUrl: "https://i.ibb.co/cTZSPds/FINAL-FULL-16.png" },
  { id: 2, imageUrl: "https://i.ibb.co/whq8vdk/FINAL-FULL-26.png" },
  { id: 3, imageUrl: "https://i.ibb.co/f4hYksb/FINAL-FULL-20.png" },
  { id: 4, imageUrl: "https://i.ibb.co/M9R9GMV/FINAL-FULL-28.png" },
  { id: 12, imageUrl: "https://i.ibb.co/0FNJSh3/oil.jpg" },
  { id: 5, imageUrl: "https://i.ibb.co/6wzqrVS/spare-Parts.jpg" },
  { id: 6, imageUrl: "https://i.ibb.co/GJ5CQ5F/FINAL-FULL-31.png" },
  { id: 7, imageUrl: "https://i.ibb.co/8Ys4hgL/FINAL-FULL-29.png" },
  { id: 8, imageUrl: "https://i.ibb.co/6NjHC4N/FINAL-FULL-19.png" },
  { id: 9, imageUrl: "https://i.ibb.co/nBjpVgw/FINAL-FULL-27.png" },
  { id: 10, imageUrl: "https://i.ibb.co/XjcYTYz/FINAL-FULL-15.png" },
  { id: 11, imageUrl: "https://i.ibb.co/ftV1ZYQ/FINAL-FULL-24.png" },
];

const Feedback = () => {
  const containerStyle = {
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
    backgroundColor: "#222222",
    padding: "10px",
  };
  return (
    <div style={containerStyle}>
      <div className="container mx-auto  items-center ">
        <Marquee speed={60}>
          {allproductcard.map((data) => (
            <AllProductCard key={data.id} data={data} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Feedback;
