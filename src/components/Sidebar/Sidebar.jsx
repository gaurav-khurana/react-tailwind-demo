import { BsPlus, BsLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

function Sidebar() {
  return (
    <>
      {/* <ul className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg"> */}

      <ul className="fixed top-0 left-0 h-screen w-16 m-0 pt-[4.5rem] flex flex-col bg-primary text-white shadow-lg">
        {/* <li>A</li> dont need placeholders now
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li> */}

        <SideBarIcon icon={<FaFire size="28" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
      </ul>
    </>
  );
}

// can create seperate component here to be used in same file
const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Sidebar;
