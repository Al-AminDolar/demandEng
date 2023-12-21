import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdOutlineSupportAgent } from "react-icons/md";
const Contact = () => {
  return (
    <div className=" mb-20  mt-24 ">
      <h1 className="text-2xl lg:text-4xl  font-semibold  text-purple-800 text-center">
        Contact
        <span className="text-[#fe5a0e]"> Us </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-14 p-5">
        <div>
          <h1 className="text-2xl font-bold">Get In Touch</h1>
          <p className="text-gray-500 py-3">
            If You want to get more info,ping us now.
          </p>
          <form action="#">
            <div className="flex gap-10 mt-5">
              <div>
                {" "}
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Name
                </label>
                <input
                  placeholder="Your Name"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-sky-200 focus:shadow-outline"
                />
              </div>
              <div>
                {" "}
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  placeholder="Your Email"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-sky-200 focus:shadow-outline"
                />
              </div>
            </div>
            <div>
              <textarea
                placeholder="Your message"
                className="shadow appearance-none border rounded w-full mt-10 py-2 px-3 text-gray-700 leading-tight focus:outline-sky-200 focus:shadow-outline"
                name=""
                id=""
                cols="30"
                rows="6"
              ></textarea>

              <button className="bg-orange-500 px-5 py-2 rounded-md mt-5 text-white font-semibold">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Contact info</h1>
          <p className="text-gray-500 py-3">
            If You want to get more info,ping us now.
          </p>
          <div className="py-3 flex gap-6">
            <div className="text-3xl text-orange-500">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h5 className="font-medium">Our Address</h5>
              <p className="text-gray-500 text-sm w-[80%]">
                House #64,Road #07, Shekertek, Mohammadpur,Dhaka-1207 .
              </p>
            </div>
          </div>
          <div className="py-3 flex gap-6">
            <div className="text-3xl text-orange-500">
              <MdEmail />
            </div>
            <div>
              <h5>Our Address</h5>
              <p className="text-gray-500 text-sm w-[80%]">
                support@demandeng.com
              </p>
            </div>
          </div>
          <div className="py-3 flex gap-6">
            <div className="text-3xl text-orange-500">
              <MdOutlineSupportAgent />
            </div>
            <div>
              <h5>Our Address</h5>
              <p className="text-gray-500 text-sm ">Phone: +880 01325-435437</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
