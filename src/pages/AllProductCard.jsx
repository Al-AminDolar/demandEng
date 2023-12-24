const AllProductCard = ({ data }) => {
  const { imageUrl } = data;
  return (
    <div>
      <div
        className="border border-cyan-400 p-8 rounded-md m-8 shadow-md shadow-cyan-600 bg-white 
      w-[250px] h-[150px] md:w-[350px] md:h-[250px] overflow-hidden"
      >
        <img
          className="w-[250px] h-[100px] md:w-[350px] md:h-[200px] object-cover"
          src={imageUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default AllProductCard;
