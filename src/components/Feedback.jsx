import image1 from "../images/feedback1.jpg";
import image2 from "../images/feedback2.jpg";
import image3 from "../images/feedback3.jpg";
import backgroundImage from "../images/map-bg.png";

const Feedback = () => {
  const containerStyle = {
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
    backgroundColor: "#222222",
    padding: "10px",
  };
  return (
    <div style={containerStyle}>
      <h1 className="text-[#48e3ee] text-3xl font-semibold text-center pt-6">
        What People Are Saying
      </h1>
      <div className="container mx-auto  items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  ">
          {/* Feedback One */}
          <div className="border p-8 rounded-md m-8">
            <p className="text-justify font-medium text-white">
              They are very awesome ,their team management system very well and
              strong. They have enougph experienced in this field. I am very
              happy to sharing that you should contact them for your demand
            </p>
            <div className="flex items-center gap-4">
              <img className="rounded-full my-3 border-2" src={image1} alt="" />
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
          {/* Feedback Two */}
          <div className="hidden md:block border p-8 rounded-md m-8">
            <p className="text-justify font-medium text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              eaque temporibus atque molestias cupiditate a aspernatur earum
              nemo maxime laboriosam commodi eveniet fugiat, eos suscipit? Dolor
              quasi id perspiciatis quo.
            </p>
            <div className="flex items-center gap-4">
              <img className="rounded-full my-3 border-2" src={image2} alt="" />
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
          {/* Feedback Three */}
          <div className="hidden  md:block border p-8 rounded-md m-8">
            <p className="text-justify font-medium text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              eaque temporibus atque molestias cupiditate a aspernatur earum
              nemo maxime laboriosam commodi eveniet fugiat, eos suscipit? Dolor
              quasi id perspiciatis quo.
            </p>
            <div className="flex items-center gap-4">
              <img className="rounded-full my-3 border-2" src={image3} alt="" />
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
