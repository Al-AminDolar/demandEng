import Marquee from "react-fast-marquee";
import image1 from "../../images/feedback1.jpg";
import image2 from "../../images/feedback2.jpg";
import image3 from "../../images/feedback3.jpg";
import backgroundImage from "../../images/map-bg.png";

const Feedback = () => {
  const containerStyle = {
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
    backgroundColor: "#222222",
    padding: "10px",
  };
  return (
    <div style={containerStyle}>
      <h1 className="text-[#48e3ee] text-2xl font-semibold text-center pt-6">
        What People Are Feedback
      </h1>
      <div className="container mx-auto  items-center ">
        <Marquee speed={15}>
          {/* Feedback One */}
          <div className="border border-cyan-400 p-8 rounded-md m-8 shadow-md shadow-cyan-400 w-96 h-60">
            <p className="text-sm font-medium text-white ">
              "I purchased a RotaryCompressor, and their delivery was very fast.
              The people involved were courteous and professional"
            </p>
            <div className="flex items-center gap-4">
              <img
                className="rounded-full my-3 border-2 h-20 w-20"
                src={image1}
                alt=""
              />
              <div>
                <h4 className="text-white text-lg font-semibold">Md.Al-amin</h4>
                <span className="text-[#f75511] font-medium">
                  Founder Real-Eng Ltd
                </span>
              </div>
            </div>
          </div>
          {/* Feedback Two */}
          <div className=" md:block border border-cyan-400 p-8 rounded-md m-8 shadow-md shadow-cyan-400 w-96 h-60">
            <p className="text-sm font-medium text-white">
              "I purchased a Reciprocating Compressor, and their delivery was
              very fast. The people involved were courteous and professional.
              They are giving me a genuine warranty for the product"{" "}
            </p>
            <div className="flex items-center gap-4">
              <img
                className="rounded-full my-3 border-2 h-20 w-20"
                src={image2}
                alt=""
              />
              <div>
                <h4 className="text-white text-lg font-semibold">
                  Rofiq Choudhury
                </h4>
                <span className="text-[#f75511] font-medium">
                  Founder Akig Febric Ltd
                </span>
              </div>
            </div>
          </div>
          {/* Feedback Three */}
          <div className="  md:block border border-cyan-400 p-8 rounded-md m-8 shadow-md shadow-cyan-400 w-96 h-60 ">
            <p className="text-sm font-medium text-white">
              "I purchased a Compressor Fillters, and their delivery was very
              fast. The people involved were courteous and professional. They
              are giving me a genuine warranty for the product"
            </p>
            <div className="flex items-center gap-4">
              <img
                className="rounded-full my-3 border-2 h-20 w-20"
                src={image3}
                alt=""
              />
              <div>
                <h4 className="text-white text-lg font-semibold">
                  Md. Tanvir Hossain
                </h4>
                <span className="text-[#f75511] font-medium">
                  Founder ArchC Showe
                </span>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Feedback;
