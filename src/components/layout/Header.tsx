import { Link } from "react-router-dom";
import logo from "../../assets/jj-logo.png";

function Header() {
  return (
    <header className="w-full h-15 px-10 flex justify-between items-center">
      <div className="w-auto h-full flex items-center">
        <img src={logo} alt="logo-julius" className="w-10 h-10" />
        <h3 className="font-bold text-white">Julius</h3>
      </div>
      <Link
        to={"/"}
        className="text-sm underline text-second-text hover:text-kiwi transition duration-300 ease-in-out uppercase"
      >
        Sair
      </Link>
    </header>
  );
}

export default Header;
