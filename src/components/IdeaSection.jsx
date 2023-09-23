import { BiHappyHeartEyes, BiSupport } from "react-icons/bi";
import { TbSettingsUp } from "react-icons/tb";

const IdeaSection = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="grid grid-cols-3">
        {/* 1st */}
        <div className="bg-slate-100 flex justify-center items-center p-7 gap-4">
          <div>
            <BiHappyHeartEyes className="w-[60px] h-[60px]" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold py-3">Best Dealing</h1>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              quos?
            </p>
          </div>
        </div>
        {/* Second */}
        <div className="bg-[#fe5a0e] flex justify-center items-center p-7 gap-4 text-white">
          <div>
            <TbSettingsUp className="w-[60px] h-[60px]" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold py-3">Best Solutions</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              quos?
            </p>
          </div>
        </div>
        {/* Third */}
        <div className="bg-[#262626] flex justify-center items-center p-7 gap-4 text-white">
          <div>
            <BiSupport className="w-[60px] h-[60px]" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold py-3">24/7 Support</h1>
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
