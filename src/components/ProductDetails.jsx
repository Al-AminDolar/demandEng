import { Tabs } from "antd";
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
    <div className="mt-28 container mx-auto max-h-min">
      {product ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {/* image div */}
          <div className="imag p-20">
            <img src={product.img} alt="" />
          </div>
          {/* description div */}
          <div className="description  p-20">
            <h1 className="text-4xl font-bold mb-5 ">{product.title}</h1>
            <hr />
            <p className="mt-5 text-justify">
              Screw compressor is a type of rotary compressor that compresses
              air by screw action. The most important component of the screw
              compressor is two screw-like rotating elements. The twin screw
              consists of male and female rotors that rotate in opposite
              directions while the volume between them, as well as between the
              screw and the casing, decreases. <br /> <br />
              Each meshing helical screw has a fixed, built-in pressure ratio
              that depends on the screw parameters like its length and pitch.
              For maximum efficiency, it is important that the pressure ratio is
              adapted to the working pressure required at your facility. There
              are no valves or mechanical forces in the compressor, and hence
              vibrations are minimal. Also, a specialized foundation or mounting
              system is not required because the screw compressor runs very
              smoothly. <br /> <br />
              Screw compressor or rotary screw compressor finds wide use in
              industrial units all across the country. We take immense pride in
              our high quality screw compressors that form one of our
              best-selling and most popular product offering. They are
              especially suitable if you need 100% continuous duty cycle with
              non-stop compressed air flow. Our quality screw compressors are
              long-lasting, durable and strong. PRYES screw compressors can be
              customized and adapted to your specific needs.
            </p>
            <div>
              <p className="mt-5 text-xl font-medium">
                <span>3</span> in stock
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}

      <div className="extrasection">
        <Tabs
          defaultActiveKey="1"
          centered
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: `Tab ${id}`,
              key: id,
              children: `Content of Tab Pane ${id}`,
            };
          })}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
