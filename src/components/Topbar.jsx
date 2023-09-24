import { BiPhoneCall, BiTimeFive } from "react-icons/bi";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function topbar() {
  return (
    <div className=" text-white font-mono bg-[#181818] py-3 px-3">
      <div className=" container mx-auto text-xs  sm:flex justify-around items-center  md:flex justify-around items-center  lg:flex justify-around items-center xl:flex justify-around items-center  2xl:flex justify-around items-center  ">
        <div className="flex items-center gap-4 text-white ">
          <BiPhoneCall className="h-9 w-9 text-white" />
          <div className="leading-5">
            <span className="text-orange-600 text-sm font-semibold">
              Call us 9.00am-6.00pm
            </span>{" "}
            <h3 className="font-semibold">01325-435437</h3>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white">
          <BiTimeFive className="h-9 w-9 text-white" />
          <div className="leading-5">
            <span className="text-orange-600 text-sm font-semibold">
              Monday to Friday
            </span>{" "}
            <h3 className="font-semibold">9:00am - 6:00pm</h3>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white">
          <MdOutlineMarkEmailRead className="h-9 w-9 text-white" />
          <div className="leading-5">
            <span className="text-orange-600 text-sm font-semibold">
              E-mail us
            </span>{" "}
            <h1 className="font-semibold">support@demandeng.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
