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
    <div className=" mt-24 mb-20 max-h-min  ">
      <h1 className="text-3xl text-purple-800 font-semibold text-center ">
        Our Services
      </h1>{" "}
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
