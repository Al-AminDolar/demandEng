import Carousel from "./Carousel";

const ProductSection = () => {
  return (
    <div className="bg-slate-100  pb-10 ">
      <h1 className="text-3xl pt-3  font-medium text-center">
        Our <span className="text-purple-700">Products</span>
      </h1>
      <Carousel />
    </div>
  );
};

export default ProductSection;
