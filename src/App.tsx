import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Singin from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <main className="w-full h-screen bg-black flex justify-center items-center">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#262626",
            color: "#FFFBF4",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="w-full h-auto flex justify-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/singin" element={<Singin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
