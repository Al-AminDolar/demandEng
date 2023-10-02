import ShopCard from "./ShopCard";

const Shop = () => {
  return (
    <div className="container  mx-auto mt-28">
      <h1 className="text-center text-2xl mb-10 font-serif font-semibold">
        Welome to Our Shop
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((data) => {
          return <ShopCard key={data} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
