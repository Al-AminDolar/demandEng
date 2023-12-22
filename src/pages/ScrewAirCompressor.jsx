import { NavLink } from "react-router-dom";

const ScrewAirCompressor = () => {
  return (
    <div className=" mt-[75px]">
      <div className="bg-[#f9fafb] p-5 px-14 border-b shadow-sm">
        {" "}
        <h1 className="text-xl text-slate-600">Rotary Screw Compressor</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center p-5 container mx-auto">
        <img src="https://i.ibb.co/NZk3CtM/compressor.jpg" alt="" />
        <div>
          <h1 className="text-3xl font-bold">Rotary Screw Compressor</h1>
          <div className="flex justify-between">
            <div>
              <h1>Oil Floated Rotary Screw</h1>
              <p>
                <span>Capacity range:</span> 30 CFM to 2000 CFM
              </p>
            </div>
            <div>
              <h1>Oil Free Rotary Screw</h1>
              <p>
                <span>Capacity range:</span> 170 CFM to 2500 CFM
              </p>
            </div>
          </div>
          <p className="text-justify">
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
            <h1>Compressor Features:</h1>
            <p>1. IE4 Motor</p>
            <p>2. Hight performance Airend</p>
            <p>3. Low maintenance cost</p>
            <p>4. Easy operation</p>
            <p>5. Vibration free & low noise</p>
          </div>
          <div>
            <p className="font-bold">
              Our Core Competencies, Why will you buy oil free compressors from
              Global Cynax?
            </p>
            <div className="flex gap-5">
              <div>icon</div>{" "}
              <div>
                <p> Turn-key compressed air packaged solution</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div>icon</div>{" "}
              <div>
                <p> Turn-key compressed air packaged solution</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div>icon</div>{" "}
              <div>
                <p> Turn-key compressed air packaged solution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 justify-center my-6">
        <NavLink>Link</NavLink>
        <NavLink>Link</NavLink>
        <NavLink>Link</NavLink>
      </div>
    </div>
  );
};

export default ScrewAirCompressor;
