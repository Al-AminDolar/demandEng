import { FaArrowAltCircleRight, FaExternalLinkSquareAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const ScrewAirCompressor = () => {
  return (
    <div className=" mt-[75px]">
      <div className="bg-[#f9fafb] p-5 px-14 border-b shadow-sm">
        {" "}
        <h1 className="text-xl text-slate-600">Rotary Screw Compressor</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center p-5 container mx-auto ">
        <img src="https://i.ibb.co/NZk3CtM/compressor.jpg" alt="" />
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">Rotary Screw Compressor</h1>
          <div className="grid gap-5 md:grid-cols-2 justify-between">
            <div>
              <h1 className="text-sm md:text-xl font-medium text-purple-800">
                Oil Floated Rotary Screw
              </h1>
              <p className="text-sm font-medium">
                <span className="text-orange-600 text-sm">Capacity range:</span>{" "}
                30 CFM to 2000 CFM
              </p>
            </div>
            <div>
              <h1 className="text-sm md:text-xl  font-medium text-purple-800">
                Oil Free Rotary Screw
              </h1>
              <p className="text-sm font-medium">
                <span className="text-orange-600 text-sm">Capacity range:</span>{" "}
                170 CFM to 2500 CFM
              </p>
            </div>
          </div>
          <p className="text-justify text-sm space-y-2">
            <p>
              {" "}
              Welcome to Demand Engineering, your premier destination for
              advanced compressed air solutions. Explore our Rotary Screw
              Compressors, featuring two exceptional types: Oil Floated Rotary
              Screw and Oil-Free Rotary Screw.
            </p>

            <p>
              {" "}
              Our Oil Floated Rotary Screw Compressors offer reliable
              performance in a capacity range of 30 CFM to 2000 CFM. Built with
              precision engineering, they ensure durability and efficiency for
              various industrial applications.
            </p>

            <p>
              For industries where air purity is paramount, our Oil-Free Rotary
              Screw Compressors deliver excellence with a capacity range of 170
              CFM to 2500 CFM. Setting new standards for cleanliness and
              reliability, these compressors cater to contamination-sensitive
              environments.
            </p>

            <p>
              At Demand Engineering, we pride ourselves on innovation,
              efficiency, and customer satisfaction. Benefit from cutting-edge
              technology, optimal performance, and tailored solutions to meet
              your specific needs. Our commitment to quality and environmental
              responsibility ensures that our compressors not only meet industry
              standards but exceed expectations.
            </p>
          </p>
          <div>
            <h1 className="text-xl font-bold text-orange-500">
              Compressor Features:
            </h1>
            <div className="text-sm pt-2 font-medium">
              <p>1. IE4 Motor</p>
              <p>2. Hight performance Airend</p>
              <p>3. Low maintenance cost</p>
              <p>4. Easy operation</p>
              <p>5. Vibration free & low noise</p>
            </div>
          </div>
          <div>
            <p className="font-bold text-sm mb-1">
              Our Core Competencies, Why will you buy oil free compressors from
              Demand Eng?
            </p>
            <div className="flex  items-center gap-3 text-sm">
              <div className="text-orange-600">
                <FaArrowAltCircleRight />
              </div>{" "}
              <div>
                <p>Turn-key compressed air packaged solution</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="text-orange-600">
                <FaArrowAltCircleRight />
              </div>{" "}
              <div>
                <p>
                  Extensive inventory of Sullair spare parts available in ready
                  stock in our Dhaka & Chattogram warehouses
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="text-orange-600">
                <FaArrowAltCircleRight />
              </div>{" "}
              <div>
                <p>24/7 after sales service support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:gap-10 md:justify-center  mb-10 mt-10">
        <div>
          {" "}
          <NavLink
            to="/ElectricalItem"
            className="px-2 py-2 text-center text-xs md:px-5 md:py-2 bg-orange-500 text-white font-medium rounded-sm"
          >
            Electrical Item
          </NavLink>
        </div>
        <div>
          {" "}
          <NavLink
            to="/ScrewCompressorFilter"
            className="px-1 py-2 text-xs md:px-5 md:py-2 bg-orange-500 text-white font-medium rounded-sm"
          >
            Screw Compressor Filter
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/ReciprocatingCompressor"
            className="px-1 py-2 text-xs md:px-5 md:py-2 bg-orange-500 text-white font-medium rounded-sm"
          >
            Reciprocating Compressor
          </NavLink>
        </div>
        <div>
          {" "}
          <NavLink
            to="/ScrewAirCompressor"
            className="px-1 py-2 text-xs md:px-5 md:py-2 bg-orange-500 text-white font-medium rounded-sm"
          >
            Screw Air Compressor
          </NavLink>
        </div>
      </div>
      <div className="px-5 mt-10 pb-5 md:hidden">
        <p className="font-bold">Quick Link</p>
        <div className="flex items-center gap-3 text-sm mt-2">
          <div className="text-orange-600">
            <FaExternalLinkSquareAlt />
          </div>{" "}
          <div>
            <NavLink to="/ElectricalItem">Electrical Item</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm mt-2">
          <div className="text-orange-600">
            <FaExternalLinkSquareAlt />
          </div>{" "}
          <div>
            <NavLink to="/ScrewCompressorFilter">
              Screw Compressor Filter
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm mt-2">
          <div className="text-orange-600">
            <FaExternalLinkSquareAlt />
          </div>{" "}
          <div>
            <NavLink to="/ReciprocatingCompressor">
              Reciprocating Compressor
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm mt-2">
          <div className="text-orange-600">
            <FaExternalLinkSquareAlt />
          </div>{" "}
          <div>
            <NavLink to="/ScrewAirCompressor">Screw Air Compressor</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrewAirCompressor;
