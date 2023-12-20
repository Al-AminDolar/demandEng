import Carousel from "../Products/Carousel";

const ProductSection = () => {
  return (
    <div className=" container mx-auto p-10">
      <h1 className="text-2xl lg:text-4xl  font-semibold  text-purple-800 text-center">
        Our
        <span className="text-[#fe5a0e]"> Product </span>
      </h1>
      <p className="text-center text-xs text-purple-500 font-bold">
        {" "}
        WARRENTABLE PRODUCT
      </p>
      <div className="pt-5">
        <Carousel />
      </div>
    </div>
  );
};

export default ProductSection;
