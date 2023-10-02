import { Card } from "antd";

const ShopCard = (product) => {
  console.log(product.product.img);
  return (
    <div className="flex justify-center">
      <Card
        hoverable
        style={{
          width: 400,
        }}
        cover={<img alt="example" src={product.product.img} />}
      >
        <div className="flex justify-center">
          <h1 className=" text-center font-sans text-xl w-[60%] font-medium">
            {product.product.title}
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default ShopCard;
