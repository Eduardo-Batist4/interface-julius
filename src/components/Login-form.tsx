import logo from "../assets/jj-logo.png";
import Button from "./ui/Button";
import Input from "./ui/Input";

function LoginForm() {
  function handleSubmit() {
    console.log("oi");
  }

  return (
    <div className="w-120 h-auto bg-white px-5 py-18 rounded-sm">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="w-24" />
        <p className="mt-5">Seu assistente financeiro!</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[80%] mx-auto flex flex-col items-center mt-8"
      >
        <div className="w-full">
          <label htmlFor="password">Email</label>
          <Input type={"email"} />
        </div>
        <div className="w-full mt-5">
          <label htmlFor="password">Senha</label>
          <Input type={"password"} />
        </div>
        <Button name="Login" type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;
