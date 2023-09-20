const Footer = () => {
  return (
    <div className="py-3 bg-slate-900">
      <div className="grid grid-cols-6 gap-11 ">
        <div className="bg-sky-500 col-span-2">
          <h1>One</h1>
        </div>

        <div className="bg-blue-500">Three</div>
        <div className="bg-purple-800">Four</div>

        <div className="bg-fuchsia-900 col-span-2">Six</div>
      </div>
    </div>
  );
};

export default Footer;
