const Footer = () => {
  return (
    <div className="py-3 bg-slate-900">
      <div className="grid grid-cols-6 gap-11 ">
        <div className="bg-sky-500 col-span-2">
          <h1>One For Icon</h1>
          <p>
            Liberton Engineering Solution is an organisation of enthusiastic
            professionals who are experienced in the field of industrial
            engineering for several years.
          </p>

          <button>Read More Icon</button>
          <div className="social-icon flex gap-3">
            <h6>FACEBOOK</h6>
            <h6>WHATS,APP</h6>
          </div>
        </div>

        <div className="bg-blue-500">
          <h1>Our Services</h1>
          <ul>
            <li>Air compressor</li>
            <li>Dispenser</li>
            <li>Dispser Parts</li>
            <li>Spare Parts</li>
            <li>Service</li>
          </ul>
        </div>

        <div className="bg-purple-800">
          <h1>Quick Links</h1>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="bg-fuchsia-900 col-span-2">
          <h1>Get In Touch</h1>
          <h4>
            LIBERTON ENGINEERING SOLUTION{" "}
            <span>12/D Bashbari, Mohammadpur, Dhaka - 1207</span>
          </h4>
          <h4>+880 1320 393 000 / +880 1736 276 663</h4>
          <h4>contact@libertoneng.com</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
