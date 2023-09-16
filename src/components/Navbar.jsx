import "../styles/global.css";
export default function Navbar() {
  return (
    <div>
      <nav className="container mx-auto flex items-center justify-between">
        <div className="Logo leading-3">
          <h1 className="text-3xl font-semibold tracking-widest">DEMAND</h1>
          <span className="text-orange-600  font-bold ">Engineering</span>
        </div>
        <div className="navigation flex gap-4 text-xl font-semibold">
          <a href="#">Services</a>
          <a href="#">Solutions</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>
      </nav>
    </div>
  );
}
