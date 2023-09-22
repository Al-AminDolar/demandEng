const About = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        <div className="left-top">
          <h1>
            Welcome to <span>Demand Engineering</span>
          </h1>
          <p>
            Demand Engineering is an organization of enthusiastic professionals
            who are experienced in the field of industrial engineering for
            several years. The organization is mainly concentrated on industrial
            air solutions. The company Liberton Engineering Solution is in this
            business since 2015 and it has gained recognition for the industry
            leading products and after sales services. Today Liberton
            Engineering solution is one of the most reliable companies in the
            air compressor industry
          </p>

          <ul>
            <li>Our Work Growth</li>
            <li>100 Employed</li>
            <li>Our Employee Growth</li>
            <li>Service Management</li>
          </ul>

          <button>Learn more</button>
        </div>
        <div className="right-bottom">
          <img src="/image/final.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
