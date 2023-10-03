import { useParams } from "react-router-dom";

const products = [
  {
    _id: 1,
    img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
    title: "PRS-25D SCREW AIR COMPRESSOR",
    searchKey: "vape-pens",
  },
  {
    _id: 2,
    img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
    title: "PRS-40D SCREW AIR COMPRESSOR",
    searchKey: "flower",
  },
  {
    _id: 3,
    img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
    title: "PRS-50D SCREW AIR COMPRESSOR",
    searchKey: "concentrates",
  },
  {
    _id: 4,
    img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
    title: "PRS-60D SCREW AIR COMPRESSOR",
    searchKey: "pre-roll",
  },
  {
    _id: 5,
    img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
    title: "PRS-75D SCREW AIR COMPRESSOR",
    searchKey: "cbd",
  },
  {
    _id: 6,
    img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
    title: "PRS-10D SCREW AIR COMPRESSOR",
    searchKey: "topicals",
  },
  {
    _id: 7,
    img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
    title: "PRS-15D SCREW AIR COMPRESSOR",
    searchKey: "topicals",
  },
  {
    _id: 8,
    img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
    title: "PRS-20D SCREW AIR COMPRESSOR",
    searchKey: "pre-roll",
  },
  {
    _id: 9,
    img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
    title: "PRS-30D SCREW AIR COMPRESSOR",
    searchKey: "cbd",
  },
];
const ProductDetails = () => {
  const { productId } = useParams();
  console.log("ProductId:", productId);

  // Find the product with the given productId
  const product = products.find((product) => product._id === Number(productId));
  console.log("Product:", product);
  return (
    <div className="mt-28">
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>Product ID: {product._id}</p>
          {/* Display other product details */}
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
