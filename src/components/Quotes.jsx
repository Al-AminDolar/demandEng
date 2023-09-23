import { Collapse } from "antd";
import { BiSolidRightArrowCircle } from "react-icons/bi";
const Quotes = () => {
  const text = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );
  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: text,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: text,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: text,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-3  p-8 ">
          <h1 className="text-4xl font-semibold py-4">
            Learn more from our Faq__
          </h1>
          <p className="text-lg">
            You will find yourself working in a true partnership that results in
            an incredible experience, and an end product that is the best.
          </p>
          <div className="my-8">
            <Collapse
              size="large"
              className="bg-gray-100"
              items={items}
              bordered={false}
              defaultActiveKey={["1"]}
            />
          </div>
        </div>
        <div className="col-span-2 ">
          <div className="bg-gray-900 p-8">
            <h1 className="text-2xl font-semibold text-white  pb-3">
              Request a <span>Quote</span> __
            </h1>
            <p className="text-white font-normal mb-3">
              {" "}
              Fill all information details to consult with us to get sevices
              from us
            </p>

            <form action="#">
              <input
                className="my-2 w-full p-2"
                placeholder="Name"
                type="text"
              />
              <input
                className="my-2 w-full p-2"
                placeholder="Email"
                type="text"
              />

              <input
                placeholder="Telephone"
                className="my-2 w-full   p-2"
                type="text"
              />
              <textarea
                placeholder="Write some text"
                className="w-full my-2 p-2"
                name=""
                id=""
                rows="4"
              ></textarea>

              <button className="flex items-center my-4 text-white font-medium bg-[#fe5a0e] py-2 px-6 gap-2">
                Get a quote{" "}
                <span className=" font-medium">
                  <BiSolidRightArrowCircle />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
