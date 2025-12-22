import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";

interface LoginType {
  email: string;
  password: string;
}

interface AuthContextType {
  token: string | null;
  login: (payload: LoginType) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginResponse {
  token: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const saveToken = localStorage.getItem("authToken");
    if (saveToken) {
      setToken(saveToken);
    }
  }, []);

  const login = async (payload: LoginType): Promise<void> => {
    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:8080/api/login",
        payload
      );

      const data = await response.data;

      if (data.token) {
        localStorage.setItem("authToken", data.token);
        setToken(data.token);
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = (): void => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  const value: AuthContextType = {
    token,
    login,
    logout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
export { AuthProvider, useAuth };
