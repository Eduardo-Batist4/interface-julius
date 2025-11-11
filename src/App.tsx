import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";

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
      <div className="w-[30%] h-auto p-5">
        <Login />
      </div>
    </main>
  );
}

export default App;
