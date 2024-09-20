import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main
      className="h-screen w-screen flex flex-col justify-start items-center mt-10 bg-gray-300"
      id="main"
    >
      <Navbar />

      <div className="flex flex-row justify-center align-middle mt-[25vh] mb-5">
        <a className="mx-11" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-mono font-bold text-orange-500 text-center">
        Vite + React + Tailwind CSS + <br></br> Custom React Hook for Dark Mode
      </h1>

      <div className="flex flex-col justify-center items-center py-4 my4">
        <div className="mt-5">
          <button
            className="button-dark px-4 py-2 w-[10vw] border-red-500 bg-teal-500 hover:bg-amber-700 hover:text-white transition-all duration-300 hover:rounded-md "
            onClick={() => setCount((count) => count + 1)}
          >
            Count {count}
          </button>
          <button
            className="button-dark px-4 py-2 ml-10 w-[10vw] border-red-500 bg-amber-500 hover:bg-amber-700 hover:text-white transition-all duration-300 hover:rounded-md "
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        <p className="text-cyan-800 mt-10 mb-5 font-medium font-mono">
          This is a demo using React with Tailwind CSS
        </p>
      </div>

      <p className="read-the-docs w-[50vw] ml-20 text-left font-mono ">
        This is a custom component library for Reusable React components like
        <br />
        Navbar, <br /> Sidebar (Discord style),
        <br /> Dark mode toggle switch with custom hook
      </p>

      <Sidebar />
    </main>
  );
}

export default App;
