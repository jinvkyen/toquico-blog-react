import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const ProtectedLayout = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen pt-20 bg-gray-100/60 scroll-smooth'>
        h1
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
