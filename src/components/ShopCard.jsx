import { Card } from "antd";
import { Button } from "antd/es/radio";
import { Link } from "react-router-dom";

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
        <div className="flex justify-center mt-4">
          <Button type="primary">
            <Link to={`/shop/${product.product._id}`}>More Details</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ShopCard;
