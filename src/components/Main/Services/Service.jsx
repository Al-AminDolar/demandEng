import { Card } from "antd";
const { Meta } = Card;
const Service = (prop) => {
  // const {} = prop;
  console.log(prop);
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 340,
        }}
        cover={
          <img
            style={{
              height: 200,
              width: 330,
            }}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
};

export default Service;
