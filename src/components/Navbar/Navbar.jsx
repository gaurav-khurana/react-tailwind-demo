import ReactImage from "../../assets/react.svg";
import DarkMode from "../ToggleSwitch/ToggleSwitch";

function Navbar() {
  return (
    <div className="navbar fixed top-0 w-screen pl-[10vw] flex flex-row items-center bg-gray-900 text-white">
      <img
        className="mr-4 hover:scale-105 transition-all duration-300 cursor-pointer"
        src={ReactImage}
        alt="Logo placeholder image"
      />

      <h2 className="flex-grow my-4 pl-2 py-2 cursor-pointer hover:text-green-500 transition-all duration-300 font-mono font-semibold">
        Logo
      </h2>

      <div className="w-[50vw] flex flex-row items-center justify-evenly">
        <h3 className=" hover:text-green-500 transition-all duration-200 cursor-pointer font-mono font-medium ">
          Product
        </h3>

        <h3 className=" hover:text-green-500 transition-all duration-200 cursor-pointer font-mono font-medium">
          Features
        </h3>

        <h3 className=" hover:text-green-500 transition-all duration-200 cursor-pointer font-mono font-medium">
          About Us
        </h3>

        <DarkMode />
      </div>
    </div>
  );
}

export default Navbar;
