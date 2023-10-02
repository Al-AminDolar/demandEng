import data from "../components/dummy/products.json";
import ShopCard from "./ShopCard";
const Shop = () => {
  const { popularProducts } = data;

  return (
    <div className="container  mx-auto mt-28">
      <h1 className="text-center text-2xl mb-10 font-serif font-semibold">
        Welome to Our Shop
      </h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 mb-10 ">
        {popularProducts.map((data, i) => {
          return <ShopCard product={data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
