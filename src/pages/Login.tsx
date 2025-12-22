import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/jj-logo.png";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useState, type ChangeEvent, type FormEvent } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

interface LoginPayload {
  email: string;
  password: string;
}

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoginError, setHasLoginError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setHasLoginError(false);

    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      setIsLoading(true);

      const payload: LoginPayload = { email, password };

      await login(payload);
      toast.success("Successful Login!");
      navigate("/dashboard");
    } catch (error) {
      setHasLoginError(true);
      console.error(error);
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className="w-120 h-auto bg-second px-5 py-18 rounded-sm">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="w-24" />
        <p className="mt-5 text-white">Seu assistente financeiro!</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[80%] mx-auto flex flex-col items-center mt-8"
      >
        <div className="w-full">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <Input
            type={"email"}
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
              if (hasLoginError) {
                setHasLoginError(false);
              }
            }}
            isInvalid={hasLoginError}
          />
        </div>
        <div className="w-full mt-5">
          <label htmlFor="password" className="text-white">
            Senha
          </label>
          <Input
            type={"password"}
            value={password}
            className="mb-3"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
              if (hasLoginError) {
                setHasLoginError(false);
              }
            }}
            isInvalid={hasLoginError}
          />
          <Link to={""} className="text-white hover:text-second-text">
            Esqueceu a senha?
          </Link>
        </div>
        <Button
          name={isLoading ? "Carregando..." : "Entrar"}
          className="mt-5"
          type="submit"
          disabled={isLoading}
        />
      </form>
      <div className="mt-8 flex justify-center">
        <p className="text-white mr-2">Não tem uma conta?</p>
        <Link
          to={"/singin"}
          className="underline text-kiwi hover:text-second-text"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login;
