import { Collapse } from "antd";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import "../styles/global.css";
const Quotes = () => {
  const text = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      Many of our SELC registered employees are requested as main preferred
      Guilds were associations of artisans and Merchant that oversaw the main
      production and distribution of a particular good.
    </p>
  );
  const items = [
    {
      key: "1",
      label: "How to process the funtion for consulting?",
      children: text,
    },
    {
      key: "2",
      label: "Where should I incorporate my business?",
      children: text,
    },
    {
      key: "3",
      label: "How much should I capitalize with at the beginning?",
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
          <p className="  font-medium">
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
            <p className="text-white font-medium  mb-3 ">
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
