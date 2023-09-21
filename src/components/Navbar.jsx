import "../styles/global.css";
export default function Navbar() {
  return (
    <div className="my-2">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <img src="/image/Logo.png" alt="" />
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
