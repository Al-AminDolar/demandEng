import { Card } from "antd";
const { Meta } = Card;

const ShopCard = (product) => {
  console.log(product.product.img);
  return (
    <div className="flex justify-center">
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={product.product.img} />}
      >
        <Meta title={product.product.title} />
      </Card>
    </div>
  );
};

export default ShopCard;
