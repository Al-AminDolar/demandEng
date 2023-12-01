import { FaCheck } from "react-icons/fa";
import Callcenter from "../../../images/CustomerService.png";
import Rotary from "../../../images/compressor.png";
import Service from "./Service";

const Services = () => {
  const servicelist = [
    [
      {
        _id: 1,
        img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
        title: "PRS-25D SCREW AIR COMPRESSOR",
        searchKey: "vape-pens",
      },
      {
        _id: 2,
        img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
        title: "PRS-40D SCREW AIR COMPRESSOR",
        searchKey: "flower",
      },
      {
        _id: 3,
        img: "https://pryescompressors.com/wp-content/uploads/2021/08/Screw-Compressor-new-model-1.jpg",
        title: "PRS-50D SCREW AIR COMPRESSOR",
        searchKey: "concentrates",
      },
    ],
  ];
  return (
    <div className=" mt-32 mb-20 max-h-min container mx-auto ">
      <h1 className="text-3xl text-purple-800 font-semibold font-serif ">
        Our Services
      </h1>{" "}
      <p className="w-1/2 text-justify">
        Demand Engineering Solution is capable of providing industry leading to
        our customers through its professional team of engineers. All of our
        engineers are certified by the professional engineers institutions.
      </p>
      <section className="mt-10">
        <div className="flex justify-center items-center gap-10">
          <div className="space-y-7">
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">
                <FaCheck />
              </span>
              <p className=" font-semibold">24/7 call center service </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">
                <FaCheck />
              </span>
              <p className=" font-semibold">Provide technician support </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">
                <FaCheck />
              </span>
              <p className=" font-semibold">Provide engineering support </p>
            </div>
          </div>
          <div>
            <img className="rounded-md" src={Callcenter} alt="" />
          </div>
        </div>
      </section>
      <section className="mt-12">
        <div className="flex items-center justify-center gap-10">
          <div className="w-[300px]">
            <img src={Rotary} alt="" />
          </div>
          <div>
            <h1>Rotary Scew Compressor</h1>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">
                <FaCheck />
              </span>
              <p className=" font-semibold">
                Oil Floated Rotery Screw: Capacity range: 30 CFM to 2000 CFM{" "}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">
                <FaCheck />
              </span>
              <p className=" font-semibold">
                Oil Free Rotery Screw: Capacity range: 170 CFM to 2500 CFM{" "}
              </p>
            </div>
            <p>1. IE4 Motor</p>
            <p>2. High performance Airend</p>
            <p>3. Low maintenance cost</p>
            <p>4. Easy operation</p>
            <p>4. Vibration free & low noise</p>
          </div>
        </div>
      </section>
      <div className="flex  justify-center mt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 mb-10 ">
          {servicelist[0].map((data, i) => {
            console.log(data);
            return <Service item={data} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
