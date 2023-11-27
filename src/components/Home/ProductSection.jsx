import Carousel from "../Products/Carousel";

const ProductSection = () => {
  return (
    <div className="bg-slate-100">
      <h1 className="text-2xl pt-3  font-medium text-center">
        Our <span className="text-purple-700">Products</span>
      </h1>
      <div className="container mx-auto px-5">
        <Carousel />
      </div>
    </div>
  );
};

export default ProductSection;
