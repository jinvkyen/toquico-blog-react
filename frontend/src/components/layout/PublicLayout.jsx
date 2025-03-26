import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const PublicLayout = () => {
    return (
      <>
        <Header />
        <main className='min-h-screen pt-16 bg-gradient-to-r from-yellow-50 to-pink-700/80 scroll-smooth'>
          <Outlet />
        </main>
        <Footer />
      </>
    );
};

export default PublicLayout;