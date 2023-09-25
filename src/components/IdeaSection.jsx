import { BiHappyHeartEyes, BiSupport } from "react-icons/bi";
import { TbSettingsUp } from "react-icons/tb";

const IdeaSection = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* 1st */}
        <div className="bg-slate-100 flex flex-col justify-center items-center p-7 gap-4 text-center">
          <BiHappyHeartEyes className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl" />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold py-3">
              Best Dealing
            </h1>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              quos?
            </p>
          </div>
        </div>
        {/* Second */}
        <div className="bg-[#fe5a0e] flex flex-col justify-center items-center p-7 gap-4 text-center text-white">
          <TbSettingsUp className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl" />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold py-3">
              Best Solutions
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              quos?
            </p>
          </div>
        </div>
        {/* Third */}
        <div className="bg-[#262626] flex flex-col justify-center items-center p-7 gap-4 text-center text-white">
          <BiSupport className="w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl" />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold py-3">
              24/7 Support
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              quos?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaSection;
