import { TiSpanner } from "react-icons/ti";
const ScrewCompressorFilter = () => {
  return (
    <div className="mt-[75px] ">
      <div className="bg-[#f9fafb] p-5 px-14 border-b shadow-sm">
        {" "}
        <h1 className="text-xl text-slate-600">Screw Compressor Filters</h1>
      </div>
      <section className=" p-10 container mx-auto md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 md:gap-0">
          <div className="order-2 md:order-1">
            <h1 className="text-xl font-bold">Screw Compressor Filters</h1>
            <div className="space-y-2">
              <h4>
                Brand Coverages:
                <div className="h-[2px] w-[120px] bg-orange-500 "></div>
              </h4>

              <div className="grid grid-cols-2 text-sm md:text-base ">
                <div className="flex items-center gap-[4px]">
                  <div className="text-orange-500 ">
                    <TiSpanner />
                  </div>
                  <div>
                    <p>Ingrsoll Rand</p>
                  </div>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div className="text-orange-500 ">
                    <TiSpanner />
                  </div>
                  <div>
                    <p>Gardenr Denver</p>
                  </div>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div className="text-orange-500 ">
                    <TiSpanner />
                  </div>
                  <div>
                    <p>Atlas Copco</p>
                  </div>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div className="text-orange-500 ">
                    <TiSpanner />
                  </div>
                  <div>
                    <p>Kaeser</p>
                  </div>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div className="text-orange-500 ">
                    <TiSpanner />
                  </div>
                  <div>
                    <p>ELGI</p>
                  </div>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div className="text-orange-500 ">
                    <TiSpanner />
                  </div>
                  <div>
                    <p>Compair</p>
                  </div>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div className="text-orange-500 ">
                    <TiSpanner />
                  </div>
                  <div>
                    <p>Bogi</p>
                  </div>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div className="text-orange-500 ">
                    <TiSpanner />
                  </div>
                  <div>
                    <p>Scr</p>
                  </div>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div className="text-orange-500 ">
                    <TiSpanner />
                  </div>
                  <div>
                    <p>Sullair</p>
                  </div>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div className="text-orange-500 ">
                    <TiSpanner />
                  </div>
                  <div>
                    <p>All Chinese Brand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              className="rounded-2xl border shadow-xl "
              src="https://i.ibb.co/XjcYTYz/FINAL-FULL-15.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f1f5f9] p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" flex justify-center">
              <img
                className="h-[150px] md:h-[200px]"
                src="https://i.ibb.co/rm9Xt1X/Air-Filters.png"
                alt=""
              />
            </div>

            <div>
              <h4 className="font-semibold">
                Air Filters:
                <div className="h-[2px] w-[70px] bg-orange-500 "></div>
              </h4>
              <p className="text-justify text-sm md:text-base mt-2">
                A partuiculate air filter is a device composed of fibrous or
                porus materials which remove solid pariculates such as
                dust,pollen,mold and backteria
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" flex justify-center">
              <img
                className="h-[150px] md:h-[200px] "
                src="https://i.ibb.co/VTnNbn1/oil-filters-removebg-preview.png"
                alt=""
              />
            </div>

            <div>
              <h4 className="font-semibold">
                Oil Filters:
                <div className="h-[2px] w-[70px] bg-orange-500 "></div>
              </h4>
              <p className="text-justify text-sm md:text-base mt-2">
                An oil filter is a filter designed to remove contaminants from
                enginr oil,transmission oil and lubricating oil
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrewCompressorFilter;
