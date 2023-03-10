import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <>
      <div className="">
        <HiXMark
          onClick={() => toggleSidebar()}
          className="text-4xl text-technicableWhite block lg:hidden"
        />
      </div>
      <div className=" bg-technicableSecondary text-technicableWhite lg:h-[calc(100vh-25px)] p-5 rounded-lg">
        <ul className="flex gap-3  flex-col h-full">
          <li>Admin Dashboard</li>
          <li>
            <Link to="/dashboard">Blog List</Link>
          </li>
          <li>
            <Link to="add-blog"> Add Blog </Link>
          </li>
          <li className="mt-auto">
            <Link to="/"> Back to Home </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
