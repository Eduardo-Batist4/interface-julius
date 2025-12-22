import { useNavigate } from "react-router-dom";
import logo from "../../assets/jj-logo.png";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="w-full h-15 px-10 flex justify-between items-center">
      <div className="w-auto h-full flex items-center">
        <img src={logo} alt="logo-julius" className="w-10 h-10" />
        <h3 className="font-bold text-white">Julius</h3>
      </div>
      <button
        onClick={handleLogout}
        className="text-sm underline text-second-text hover:text-kiwi transition duration-300 ease-in-out uppercase"
      >
        sair
      </button>
    </header>
  );
}

export default Header;
