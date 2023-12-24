import { FaArrowAltCircleRight, FaExternalLinkSquareAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const ReciprocatingCompressor = () => {
  return (
    <div className=" mt-[75px]">
      <div className="bg-[#f9fafb] p-5 px-14 border-b shadow-sm">
        {" "}
        <h1 className="text-xl text-slate-600">Reciprocating Compressor</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center p-5 container mx-auto ">
        <img src="https://i.ibb.co/JCbf0qc/com.png" alt="" />
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">Reciprocating Compressor</h1>
          <div className="grid gap-5 md:grid-cols-2 justify-between">
            <div>
              <h1 className="text-sm md:text-xl font-medium text-purple-800">
                Oil Floated Reciprocating
              </h1>
              <p className="text-sm font-medium">
                <span className="text-orange-600 text-sm">Capacity range:</span>{" "}
                5 HP to 40 HP
              </p>
            </div>
            <div>
              <h1 className="text-sm md:text-xl  font-medium text-purple-800">
                Oil Free Reciprocating
              </h1>
              <p className="text-sm font-medium">
                <span className="text-orange-600 text-sm">Capacity range:</span>{" "}
                5 HP to 40 HP
              </p>
            </div>
          </div>
          <p className="text-justify text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            nostrum assumenda, enim dolorem esse exercitationem optio sequi
            voluptatibus porro consequuntur sed. Molestias eum doloremque
            doloribus, cumque itaque consequuntur amet. Iure odio minus officiis
            nisi consequatur dolore veritatis, quibusdam aliquid? Error incidunt
            recusandae beatae, officiis natus commodi in cum explicabo deserunt,
            nulla nisi quae soluta. Temporibus distinctio aliquid laborum magnam
            quasi assumenda incidunt porro veniam eveniet illum molestias, quia
            eaque corrupti, blanditiis cupiditate, sint ratione possimus
            voluptates debitis iure hic perspiciatis in? Accusamus voluptatibus
            enim laudantium aperiam exercitationem? Eum nihil nam debitis sequi
            asperiores nesciunt similique quae cumque. Eos, nisi laboriosam!
          </p>
          <div>
            <h1 className="text-xl font-bold text-orange-500">
              Compressor Features:
            </h1>
            <div className="text-sm pt-2 font-medium">
              <p>1. Multiple Fin Cylinder</p>
              <p>2. Gasketless</p>
              <p>3. Heavy Duty Connecting rod</p>
              <p>4. Inter cooler</p>
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

export default ReciprocatingCompressor;