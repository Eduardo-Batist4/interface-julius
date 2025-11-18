import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useState, type ChangeEvent, type FormEvent } from "react";
import toast from "react-hot-toast";
import axios from "axios";

interface SignupPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface SignupRes {
  data: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
}

const handleAuthRequest = async (
  data: SignupPayload
): Promise<SignupRes | any> => {
  try {
    const response = await axios.post<SignupRes>(
      "http://localhost:8080/api/register",
      data
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorData = error.response.data;
      const errorMessages: string[] = [];

      if (errorData && errorData.errors) {
        for (const field in errorData.errors) {
          const fieldErrors = errorData.errors[field];

          if (Array.isArray(fieldErrors)) {
            fieldErrors.forEach((msg: string) => {
              errorMessages.push(`${field}: ${msg}`);
            });
          }
        }
      }

      if (errorMessages.length > 0) {
        return errorMessages;
      }

      return [errorData.message || "An unknown error occurred on the server."];
    }

    return ["Connection error. Check your network."];
  }
};

function Signup() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password_confirmation, setPasswordConfirmation] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoginError, setHasLoginError] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !password_confirmation) {
      toast.error("Please, Fill in all the fields.!");
      return;
    }

    setIsLoading(true);

    const payload: SignupPayload = {
      name,
      email,
      password,
      password_confirmation,
    };

    const res = await handleAuthRequest(payload);

    setIsLoading(false);
    // setEmail("");
    // setName("");
    // setPassword("");
    // setConfirmPassword("");
    if (typeof res === "object" && res !== null && "token" in res) {
      console.log("Token received:", res.token);
      toast.success("Successful Login!");
    } else if (Array.isArray(res)) {
      res.forEach((errorMessage) => {
        toast.error(errorMessage, {
          duration: 5000,
        });
      });
      setHasLoginError(true);
    }
  };

  return (
    <main>
      <div className="w-120 h-auto bg-second px-5 py-18 rounded-sm">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white">Crie uma conta</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[80%] mx-auto flex flex-col items-center mt-8"
        >
          <div className="w-full">
            <label htmlFor="name" className="text-white">
              Nome
            </label>
            <Input
              type={"name"}
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
                if (hasLoginError) {
                  setHasLoginError(false);
                }
              }}
              isInvalid={hasLoginError}
            />
          </div>
          <div className="w-full mt-3">
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
          <div className="w-full mt-3">
            <label htmlFor="password" className="text-white">
              Senha
            </label>
            <Input
              type={"password"}
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
                if (hasLoginError) {
                  setHasLoginError(false);
                }
              }}
              isInvalid={hasLoginError}
            />
          </div>
          <div className="w-full my-3">
            <label htmlFor="password_confirmation" className="text-white">
              Confirmar senha
            </label>
            <Input
              type={"password"}
              value={password_confirmation}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPasswordConfirmation(e.target.value);
                if (hasLoginError) {
                  setHasLoginError(false);
                }
              }}
              isInvalid={hasLoginError}
            />
          </div>
          <Button
            name={isLoading ? "Carregando..." : "Criar"}
            type="submit"
            disabled={isLoading}
          />
        </form>
        <div className="mt-8 flex justify-center">
          <p className="text-white mr-2">Já tem uma conta?</p>
          <Link to={"/"} className="underline text-kiwi hover:text-second-text">
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Signup;
