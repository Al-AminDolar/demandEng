const Feedback = () => {
  return (
    <div className="bg-[url('/image/map-bg.png')] bg-[#0a1119] ">
      <div className="container mx-auto flex flex-col items-center py-16 ">
        <h1 className="text-white text-5xl font-semibold mb-7">
          What People Are Saying
        </h1>

        <div className="cardSection my-7 flex justify-center gap-5">
          <div className="card  w-[300px] h-auto p-3 border rounded-lg">
            <p className="text-justify font-medium text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              eaque temporibus atque molestias cupiditate a aspernatur earum
              nemo maxime laboriosam commodi eveniet fugiat, eos suscipit? Dolor
              quasi id perspiciatis quo.
            </p>
            <div className="flex items-center gap-4">
              <img
                className="rounded-full my-3 border-2 "
                src="/public/images/testi-1-3.jpg"
                alt=""
              />
              <div>
                <h4 className="text-white text-2xl font-semibold">
                  Chrisnao Rolo
                </h4>
                <span className="text-[#f75511] font-medium">
                  Founder ArchC
                </span>
              </div>
            </div>
          </div>
          <div className="card  w-[300px] h-auto p-3 border rounded-lg">
            <p className="text-justify font-medium text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              eaque temporibus atque molestias cupiditate a aspernatur earum
              nemo maxime laboriosam commodi eveniet fugiat, eos suscipit? Dolor
              quasi id perspiciatis quo.
            </p>
            <div className="flex items-center gap-4">
              <img
                className="rounded-full my-3 border-2 "
                src="/public/images/testi-1-1.jpg"
                alt=""
              />
              <div>
                <h4 className="text-white text-2xl font-semibold">
                  Chrisnao Rolo
                </h4>
                <span className="text-[#f75511] font-medium">
                  Founder ArchC
                </span>
              </div>
            </div>
          </div>
          <div className="card  w-[300px] h-auto p-3 border rounded-lg">
            <p className="text-justify font-medium text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              eaque temporibus atque molestias cupiditate a aspernatur earum
              nemo maxime laboriosam commodi eveniet fugiat, eos suscipit? Dolor
              quasi id perspiciatis quo.
            </p>
            <div className="flex items-center gap-4">
              <img
                className="rounded-full my-3 border-2 "
                src="/public/images/testi-1-2.jpg"
                alt=""
              />
              <div>
                <h4 className="text-white text-2xl font-semibold">
                  Chrisnao Rolo
                </h4>
                <span className="text-[#f75511] font-medium">
                  Founder ArchC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
