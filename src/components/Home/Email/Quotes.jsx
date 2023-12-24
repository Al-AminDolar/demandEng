import { Collapse } from "antd";
import { BiSolidRightArrowCircle } from "react-icons/bi";

const Quotes = () => {
  const text = (
    <p className="pl-4">
      Yes, we offer a wide range of replacement parts for screw compressors,
      including filters, lubricants, air ends, and other essential components.
      Our parts are designed to meet or exceed OEM specifications.
    </p>
  );
  const text2 = (
    <p className="pl-4">
      Yes, our compressors are designed with energy efficiency in mind. We offer
      models with advanced features such as variable speed control and
      energy-saving technologies to help reduce operational costs.
    </p>
  );
  const text3 = (
    <p className="pl-4">
      We stand behind the quality of our products. Our compressors typically
      come with a warranty, and we also provide warranties for replacement
      parts. Please check the product documentation or contact our customer
      support for specific details..
    </p>
  );

  const items = [
    {
      key: "1",
      label: "Do you provide replacement parts for screw compressors?",
      children: text,
    },
    {
      key: "2",
      label: "What warranty do you provide for your compressors and parts?",
      children: text3,
    },
    {
      key: "3",
      label: "Are your compressors energy-efficient?",
      children: text2,
    },
  ];

  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7">
        <div className="p-8">
          <h1 className="text-2xl md:text-4xl font-semibold py-4">
            Learn more from our <span className="text-[#ea580c]">FAQ__</span>
          </h1>
          <p className="">
            You will find yourself working in a true partnership that results in
            an incredible experience, and an end product that is the best.
          </p>
          <div className="my-8  ">
            <Collapse
              size="middle"
              className="bg-gray-100  "
              items={items}
              bordered={false}
              defaultActiveKey={["1"]}
            />
          </div>
        </div>
        <div className="p-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h1 className="text-xl md:text-2xl font-semibold text-white pb-3">
              Request a <span className="text-[#ea580c]">Quote</span>
            </h1>
            <p className="text-white  mb-3">
              Fill all information details to consult with us to get services
              from us
            </p>

            <form action="#">
              <input
                className="my-2 w-full p-2 rounded"
                placeholder="Name"
                type="text"
              />
              <input
                className="my-2 w-full p-2 rounded"
                placeholder="Email"
                type="text"
              />
              <input
                placeholder="Telephone"
                className="my-2 w-full p-2 rounded"
                type="text"
              />
              <textarea
                placeholder="Write some text"
                className="w-full my-2 p-2 rounded"
                name=""
                id=""
                rows="4"
              ></textarea>

              <button className="flex items-center my-4 text-white font-medium bg-[#fe5a0e] py-2 px-6 gap-2 rounded">
                Send{" "}
                <span className="font-medium">
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
