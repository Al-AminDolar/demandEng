import { BiSolidRightArrowCircle } from "react-icons/bi";
const Quotes = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-3 bg-blue-500 p-3 ">
          <h1 className="text-4xl font-semibold py-4">
            Learn more from our Faq__
          </h1>
          <p className="text-lg">
            You will find yourself working in a true partnership that results in
            an incredible experience, and an end product that is the best.
          </p>
        </div>
        <div className="col-span-2 bg-orange-500">
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
