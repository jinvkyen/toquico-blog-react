import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const ProtectedLayout = () => {
  return (
    <>
      <Navbar />
      <main className='flex-grow min-h-screen pt-16 bg-gray-100'>
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
