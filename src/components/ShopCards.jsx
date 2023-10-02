import ShopCard from "./ShopCard";

const ShopCards = (product) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-10 ">
      {product[0].map((data, i) => {
        <ShopCard d={data} key={i} />;
      })}
    </div>
  );
};

export default ShopCards;
